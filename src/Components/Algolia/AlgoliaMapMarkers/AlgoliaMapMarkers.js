
import { useEffect, useState } from "react";
import MapBusinessMarker from "../../Utils/MapBusinessMarker/MapBusinessMarker";

export default function AlgoliaMapMarkers(props){
    const [data, setData] = useState({})

    useEffect(() => {
       
        setData(props.hit)
        
    }, [])
    
    useEffect(() => {
        console.log(data)
        console.log(data._geoloc)
        console.log(data._geoloc)
    }, [data])

    return (data._geoloc) ? <MapBusinessMarker lat={data._geoloc.lat} lng={data._geoloc.lng} name={data.title} color="red" /> : null
}