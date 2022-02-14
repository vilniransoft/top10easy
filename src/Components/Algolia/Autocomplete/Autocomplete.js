import { connectAutoComplete } from 'react-instantsearch-dom';

const Autocomplete = ({ showSuggestions, qryChange, dropSelect, handleSearch, hits, currentRefinement, refine, btnText, placeholder }) => (

  <div className="relative inline-block w-full">
    <div className="flex justify-center">
        <div className="pt-2 relative mx-auto text-gray-600">
                  <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-l-lg text-sm focus:outline-none"
                  type="search" name="search" onChange={(e)=> {qryChange(e.currentTarget.value);refine(e.currentTarget.value)}} placeholder={placeholder}/>
                  <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                  <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966" xmlSpace="preserve"
                      width="512px" height="512px">
                      <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                  </button>
              </div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mt-2 px-4 h-10 rounded-r-lg"
                      name="submit" onClick={(e) =>{handleSearch(e)}}>
              {btnText}
              </button>
    </div>
    {(showSuggestions ?? false) ? hits.map(hit => (
      <div key={hit.objectID} data-id={hit.objectID} onClick={(e)=> dropSelect(hit)} className="py-2 hover:bg-green-200 z-50 absolute w-3/4 rounded-lg shadow-md">
        <div className="flex items-center cursor-pointer justify-between truncate w-full">
            <span key={hit.objectID + "title"} className="text-gray-700 block px-4 text-base font-medium  dark:text-gray-400 w-full" role="menuitem" tabIndex="-1">{hit.title}</span>
        </div>
    </div>
    ))
    :
    null
    }
</div>
);

const CustomAutocomplete = connectAutoComplete(Autocomplete);

export default CustomAutocomplete;