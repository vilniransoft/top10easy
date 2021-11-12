import EzSearchHeader from "../../Layout/EzSearchHeader/EzSearchHeader";
import ResultsPage from "../../Algolia/ResultsPage/ResultsPage";
import Facet from "../../Algolia/Facet/Facet";
import { useEffect, useState } from "react";
import { searchViewState } from "../../../context/appState";
import { useRecoilState } from "recoil";
import GoogleMapReact from 'google-map-react';
import MapBusinessMarker from "../../Utils/MapBusinessMarker/MapBusinessMarker";
import { connectStateResults  } from 'react-instantsearch-dom';
import GeoResultsPage from "../../Algolia/GeoResultsPage/GeoResultsPage";

const AnyReactComponent = ({ text }) => <div className="bg-white">{text}</div>;

export default function EzSSearch(){  
    const searchFacets = [{value: 'business_city', label:'City', searchable: true},
    {value: 'business_state', label:'State', searchable: true},
    {value: 'business_price_range', label:'Price Range', searchable: false},
    {value: 'business_stars', label:'Review Score', searchable: false}] 
    const center = useState({lat: 59.95, lng: 30.33})
    const zoom = useState(11)
    const [allHits, setAllHits] = useState(0)
    const [filterAttr, setFilterAttr] = useState(searchFacets);
    const [viewType, setViewType] = useRecoilState(searchViewState);
    
    const StatefullFacets = connectStateResults(Facet);
    const StatefulResultsPage = connectStateResults(ResultsPage);
    const StatefulGeoResultsPage = connectStateResults(GeoResultsPage);

    useEffect(()=>{
        console.log('ok')
        const resultFacetLabels = document.querySelectorAll('span.ais-RefinementList-labelText')
            resultFacetLabels.forEach( label => {
                label?.classList?.add('mx-4')
        })
    }, [])

    return <div>
                <EzSearchHeader />
                <div className="container bg-white flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="hidden lg:flex flex-col self-start">
                        {filterAttr.map(attr => {
                            return <StatefullFacets field={attr.value} key={attr.value} searchable={attr.searchable}/>
                        })}
                    
                    </div>
                    <div  className="result-list-container w-full sm:w-3/4">
                        { (viewType === 'list') ?  <StatefulResultsPage /> : <StatefulGeoResultsPage /> }
                        
                    </div>
                </div>
            </div>            
}