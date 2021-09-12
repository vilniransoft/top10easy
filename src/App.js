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

const searchClient = algoliasearch("CP26C79INL", "9d24d11b715d68508e486747a5538700");
function App() {
  const [envars, setEnvars] = useState({})
  //const searchClient = algoliasearch(envars?.index, envars?.searchApiKey);
  useEffect(()=>{

    async function getEnVars(){
      const serverRes = await fetch('/envars');
      const envars = await serverRes.json();
      console.log(envars)
      setEnvars(envars);
    }
    getEnVars();
  }, [])
  return (
    <Router>
    <div className="App">
    <InstantSearch searchClient={searchClient} indexName="ezlistings">
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
      <footer className="bottom-0 w-full">
        <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
