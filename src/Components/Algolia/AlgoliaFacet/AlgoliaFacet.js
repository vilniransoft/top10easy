import { useEffect, useState } from 'react'
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import splitbee from '@splitbee/web';
import { BsCurrencyDollar } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchLocationState } from '../../../context/appState';

const RefinementList = ({ attribute, items, isFromSearch, refine, searchForItems, createURL}) => {
  const [selectedLocation, setSelectedLocation] = useRecoilState(searchLocationState)
   
    const refineList = (e, item) =>{
      setSelectedLocation({country: "", state: "", city:""})
        e?.preventDefault();
        refine(item.value);
        if(item.value.length > 0){
            splitbee.track(`${attribute}_filter`, {
                type: item.value
            })
        }
    }

    const label = (item) =>{
      if(attribute === 'business_price_range'){
        return <div className="flex flex-row">{generateDollarOptions(Number(item.label))}</div>
      }
      return item.label
    }
    const generateDollarOptions = (length) => {
      return [...Array(length).keys()].map(i => {
          return <BsCurrencyDollar className="text-yellow-400"/>
      });
  }
    return(
    <ul>
        <li className="capitalize">{`${attribute.replace('_city_', '').replaceAll('_', ' ')}`}</li>

      {items.map(item => (
        <li key={item.label}>
          <a
            href={createURL(item.value)}
            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
            onClick={(e) => refineList(e, item)}
            className="flex justify-between items-center hover:text-green-400"
          >
            {isFromSearch ? (
              <Highlight attribute="label" hit={item} />
            ) : (
              <span>{label(item)}</span>
            )}{' '}
            <span>({item.count})</span>
          </a>
        </li>
      ))}
    </ul>
  )};
  

export const AlgoliaFacet = connectRefinementList(RefinementList);