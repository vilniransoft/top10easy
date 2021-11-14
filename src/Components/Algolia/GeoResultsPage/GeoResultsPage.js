import './GeoResultsPage.css';
import { Hits } from 'react-instantsearch-dom';
import NoResultsFound from '../NoResultsFound/NoResultsFound';
import { connectStateResults  } from 'react-instantsearch-dom';
import { useEffect, useState } from "react";
import { searchViewState } from "../../../context/appState";
import { useRecoilState } from "recoil";
import GoogleMapReact from 'google-map-react';
import AlgoliaMapMarkers from '../AlgoliaMapMarkers/AlgoliaMapMarkers';
import MapBusinessMarker from '../../Utils/MapBusinessMarker/MapBusinessMarker';
import { GoogleMapsLoader, GeoSearch, Control, Marker } from 'react-instantsearch-dom-maps';

export default function GeoResultsPage({ props, searchResults  }){
  const ggApiKey = 'AIzaSyByidHzTxTnoSYBmbISOchbRHanQhlMRmM';
    const center = useState({lat: 59.95, lng: 30.33})
    const zoom = useState(11)

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
        </div>)
}
