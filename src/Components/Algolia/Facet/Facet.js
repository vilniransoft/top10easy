import './Facet.css';
import { useEffect, useState } from 'react';
import { RefinementList } from 'react-instantsearch-dom';
export default function Facet({ props, searchResults  }){
    const hasResults = searchResults && searchResults.nbHits !== 0;
    const nbHits = searchResults && searchResults.nbHits;
    const [attribute, setAttribute] = useState('')
    useEffect(()=>{
        setAttribute(props?.field);
    }, [])
    
    return (hasResults) ? <div className="refinement-container facet-container shadow-xl mb-4 ml-4 p-8">
                                <RefinementList  attribute={attribute} />
                            </div>
                            :
                            <div></div>
}