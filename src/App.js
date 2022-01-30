import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InstantSearch } from 'react-instantsearch-dom';
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

const searchClient = algoliasearch("CP26C79INL", "9d24d11b715d68508e486747a5538700");

function App() {
  useBusiness()
  useScrollTop()
  useEffect(()=>{
    splitbee.init()   
  }, [])

  return (
    <div className="App">
    <InstantSearch searchClient={searchClient} indexName="BusinessesPage">
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
      <footer className="bottom-0 w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
