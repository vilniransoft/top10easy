import EzSearchHeader from "../../Layout/EzSearchHeader/EzSearchHeader";
import ResultsPage from "../../Algolia/ResultsPage/ResultsPage";
import Facet from "../../Algolia/Facet/Facet";
import { useEffect, useState } from "react";

export default function EzSSearch(){   
    const [filterAttr, setFilterAttr] = useState(['business_city', 'business_state'])

    useEffect(()=>{
        const resultFacetLabels = document.querySelectorAll('li > label > span.ais-RefinementList-labelText')
            resultFacetLabels.forEach( label => {
                label?.classList?.add('mx-4')
        })
    })

    return <div>
                <EzSearchHeader />
                <div className="container bg-white flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="hidden lg:flex flex-col">
                        {filterAttr.map(attr => {
                            return  <div key={attr} className="facet-container shadow-xl mb-4 ml-4 p-8 ">
                                <Facet field={attr} />
                            </div>
                            
                        })}
                    </div>
                    <div  className="result-list-container w-full sm:w-3/4">
                        <ResultsPage></ResultsPage>
                    </div>
                </div>
            </div>            
}