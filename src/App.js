import './App.css';
import { Route, Routes } from "react-router-dom";
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import Navigation from './Components/Layout/Navigation/Navigation';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import EzSearch from './Components/Pages/EzSearch/EzSearch';
import Contact from './Components/Pages/Contact/Contact';
import Business from './Components/Pages/Business/Business';
import { useEffect, useState } from 'react';
import Privacy from './Components/Pages/Privacy/Privacy';
import splitbee from '@splitbee/web';
import { useBusiness, useScrollTop } from './hooks/state';
import VideoModal from './Components/Utils/VideoModal/VideoModal';
import AlgoliaInsights from './Components/Algolia/AlgoliaInsights/AlgoliaInsights';
import { useRecoilValue } from 'recoil';
import { currentBussinessCategory, localeState, searchLocationState, userLoginState } from './context/appState';

const searchClient = algoliasearch("CP26C79INL", "31c8c44b6cafedf9325e9c1748b215dc");

function App() {
  const userAuth = useRecoilValue(userLoginState);
  const category = useRecoilValue(currentBussinessCategory);
  const locale = useRecoilValue(localeState);
  const location = useRecoilValue(searchLocationState);
  const [cityImage, setImage] = useState("https://imgs.search.brave.com/1uPRuEUMN-y1Ww06gL6B0E2cU6foFSxQvIkqmIxNQKc/rs:fit:1158:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/ck9nSnF1dUJTT2Ry/Tjl6dU1iZU93SGFE/QyZwaWQ9QXBp");
  //const category = useRecoilValue(currentBussinessCategory);
  const stateLocation = useRecoilValue(searchLocationState);

  useBusiness()
  useScrollTop()
  useEffect(()=>{
    splitbee.init()
  }, [])

  useEffect(() => {
    console.log(stateLocation)
  }, [stateLocation])

  return (
    <div className="App">
    <InstantSearch searchClient={searchClient} indexName="BusinessesPage">
    <Configure
      hitsPerPage={10}
      analytics={true}
      analyticsTags={[`user:${userAuth.email}`,`category:${category}`,
                      `country:${location.country}`, `state:${location.state}`,
                      `city:${location.city}`, `locale:${locale}`]}
      enablePersonalization={false}
      distinct
      clickAnalytics
    />
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <div className="main">
      <div style={{backgroundImage: `url("/BbA476.jpg")`, height:'100vh'}} className="city-image-banner bg-gray-400 w-full  bg-no-repeat bg-cover">
      </div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/search" element={<EzSearch />} />
          <Route path="/business/:name" element={<Business />} />
      </Routes>
      </div>
      </InstantSearch>
      <VideoModal />
      <AlgoliaInsights searchClient={searchClient} />
      <footer className="bottom-0 w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
