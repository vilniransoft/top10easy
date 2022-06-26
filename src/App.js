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
import { useEffect } from 'react';
import Privacy from './Components/Pages/Privacy/Privacy';
import splitbee from '@splitbee/web';
import { useBusiness, useScrollTop } from './hooks/state';
import VideoModal from './Components/Utils/VideoModal/VideoModal';
import AlgoliaInsights from './Components/Algolia/AlgoliaInsights/AlgoliaInsights';

const searchClient = algoliasearch("CP26C79INL", "31c8c44b6cafedf9325e9c1748b215dc");

function App() {
  useBusiness()
  useScrollTop()
  useEffect(()=>{
    splitbee.init()   
  }, [])

  return (
    <div className="App">
    <InstantSearch searchClient={searchClient} indexName="BusinessesPage">
    <Configure
      hitsPerPage={10}
      analytics={true}
      enablePersonalization={false}
      distinct
      clickAnalytics
    />
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <div className="main">
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
