import './GeoResultsPage.css';
import { useEffect, useState } from "react";
import { localeState } from "../../../context/appState";
import { useRecoilValue } from "recoil";
import { ToggleRefinement } from 'react-instantsearch-dom';
import { GoogleMapsLoader, GeoSearch, Control, Marker } from 'react-instantsearch-dom-maps';
import locales from '../../../locales/locales';

export default function GeoResultsPage({ props, searchResults  }){
  const currentLocale = useRecoilValue(localeState)
  const [localeText, setLocaleText] = useState(locales[currentLocale]?.value)
  const ggApiKey = 'AIzaSyByidHzTxTnoSYBmbISOchbRHanQhlMRmM';
  const center = useState({lat: 59.95, lng: 30.33})
  const zoom = useState(11)

  useEffect(() => {
    setLocaleText(locales[currentLocale]?.value)
  }, [currentLocale])

return (<div style={{ height: 500 }}>
          <GoogleMapsLoader apiKey={ggApiKey}>
                {(google) => (
                  <GeoSearch google={google} initialZoom={8} >
                    {({ hits }) => (
                      <>
                        <Control />
                        { hits.map((hit) => (
                          console.log(hit),
                          <Marker key={hit.objectID} hit={hit} />
                        ))}
                      </>
                    )}
                  </GeoSearch>
                )}
              </GoogleMapsLoader>
              <div className="hidden h-0">
        <ToggleRefinement attribute="_locale" label={localeText} value={localeText} defaultRefinement={localeText}/>
      </div>
        </div>)
}
