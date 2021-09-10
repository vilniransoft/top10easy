import EzSearchHeader from "../../Layout/EzSearchHeader/EzSearchHeader";
import ResultsPage from "../../Algolia/ResultsPage/ResultsPage";

export default function EzSSearch(){   
    return <div>
                <EzSearchHeader />
                <div className="container bg-white flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <ResultsPage></ResultsPage>
                </div>
            </div>            
}