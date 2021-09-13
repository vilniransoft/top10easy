import { useEffect } from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import './AlgoliaSearchBox.css';

export default function AlgoliaSearchBox(){
    useEffect(()=>{
        const instaSearch = document.querySelector('.ais-SearchBox-input')
        const instaSearchBtn = document.querySelector('.ais-SearchBox-submit')
        const instaCancelSearch = document.querySelector('form > button.ais-SearchBox-reset')
        instaCancelSearch.classList.add("hidden")
        instaSearchBtn.classList.add("bg-green-400", "h-10", "px-5", "pr-6", "rounded-r-lg", "border-1", "border-gray-300")
        instaSearch.classList.add("searchbox", "p-0", "border-1", "border-gray-300", "bg-white", "h-10", "px-5", "rounded-l-lg", 
        "text-sm", "focus:outline-none", "w-54", "px-0")
    },[])
    return <div className="">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <SearchBox className="" translations={{ placeholder: '',}} />
                </div>
            </div>
}