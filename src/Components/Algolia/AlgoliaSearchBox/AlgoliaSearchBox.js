import { useEffect } from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import './AlgoliaSearchBox.css';

export default function AlgoliaSearchBox(){
    useEffect(()=>{
        const instaSearch = document.querySelector('.ais-SearchBox-input')
        const instaSearchBtn = document.querySelector('.ais-SearchBox-submit')
        instaSearchBtn.classList.add("bg-green-400", "h-10", "px-5", "pr-6", "rounded-r-lg", "border-1", "border-gray-300")
        instaSearch.classList.add("searchbox", "p-0", "border-1", "border-gray-300", "bg-white", "h-10", "px-5", "pr-16", "rounded-l-lg", 
        "text-sm", "focus:outline-none")
    },[])
    return <div className="flex">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <SearchBox className="" translations={{ placeholder: '',}} />
                </div>
            </div>
}