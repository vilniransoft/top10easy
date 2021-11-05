import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { useBusiness } from './hooks/state';
import VideoModal from './Components/Utils/VideoModal/VideoModal';

const searchClient = algoliasearch("CP26C79INL", "9d24d11b715d68508e486747a5538700");

function App() {
  useBusiness()
  useEffect(()=>{
    splitbee.init()   
  }, [])

  return (
    <Router>
    <div className="App">
    <InstantSearch searchClient={searchClient} indexName="BusinessesPage">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <div className="main">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/search">
            <EzSearch />
          </Route>
          <Route path="/business/:name">
            <Business />
          </Route>
        </Switch>
      </div>
      </InstantSearch>
      <VideoModal />
      <footer className="bottom-0 w-full">
        <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
