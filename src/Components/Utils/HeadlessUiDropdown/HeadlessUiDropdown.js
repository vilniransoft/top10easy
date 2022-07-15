import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import splitbee from '@splitbee/web';
import { useRecoilState } from 'recoil';
import { searchLocationState } from '../../../context/appState';

const locationOptions = [
    {label: 'Raleigh, NC', country: 'united states', city: 'Raleigh', state: 'North Carolina', stateAb: 'NC',  active: true},
    {label: 'San Francisco, CA', country: 'united states', city: 'San Francisco', state: 'California', stateAb: 'CA', active: false}
]
export default function HeadlessUiDropdown() {
  const [selected, setSelected] = useState([])
  const [locations, setLocations] = useState([{
    label: "NC, Raleigh",
    country: "US",
    state: "North Carolina",
    state_abbreviation: "NC",
    city: "Raleigh",
    city_longitude: -71.4817753,
    city_latitude: 46.856283,
    active: true
  }])
  const [stateLocation, setStateLocation] = useRecoilState(searchLocationState);

  useEffect(()=>{
    async function loadLocations(){
      const origin = (document.location.origin.includes('localhost')) ? 'https://top10cms.link' : 'https://top10cms.link';
      const path = '/api/v2/locations/?fields=*'
      const url = `${origin}${path}`
      const serverRes = await fetch(url);
      const business = await serverRes.json();
      if(business){
        const businessLocations = business?.items.map( loc => { return {
          label: `${loc?.state_abbreviation}, ${loc?.city}`,
          country: loc?.country,
          city: loc?.city,
          state: loc?.state,
          stateAb: loc?.state_abbreviation
        }})
        const businessUniqueLabel = [...new Map(businessLocations.map(item =>
          [item['label'], item])).values()];
          setLocations(businessUniqueLabel);
      }
      setSelected(locations[0])
    }
    loadLocations()
    setSelected(locations[0])
  },[])

    useEffect(()=>{
        splitbee.track(`city_filter`, {
            type: selected.city
        })
        splitbee.track(`country_filter`, {
            type: selected.country
        })
        splitbee.track(`state_filter`, {
            type: selected.state
        })
        setStateLocation(selected)
    }, [selected, setStateLocation])  
  return (
    <div className="w-full sm:w-42 sm:p-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="inline-flex items-center w-full py-2 pl-3 pr-8 bg-white border-2 rounded-lg cursor-pointer city-filter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="block truncate pl-10">{selected.label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {locations.map((place, placeIdx) => (
                <Listbox.Option
                  key={placeIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={place}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {place.label}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}