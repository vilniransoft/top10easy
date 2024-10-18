import { useEffect } from "react";

export default function UserGeoLocation(){
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
    },[])

    const showPosition = (position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)

    }
    return <div></div>
}