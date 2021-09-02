import { useEffect } from "react"
import ResultCard from "../../Utils/ResultCard/ResultCard";
import EzSearchHeader from "../../Layout/EzSearchHeader/EzSearchHeader";

export default function EzSSearch(){

    useEffect(() =>{

    }, [])
    
    return <div>
            <EzSearchHeader />
            <div className="container bg-white flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <ResultCard/>
            </div>
    </div>
        
            
}