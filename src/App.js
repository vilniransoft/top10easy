import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Components/Layout/Navigation/Navigation';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import EzSearch from './Components/Pages/EzSearch/EzSearch';
import Contact from './Components/Pages/Contact/Contact';
import Business from './Components/Pages/Business/Business';

function App() {
  return (
    <Router>
    <div className="App">
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
          <Route path="/search">
            <EzSearch />
          </Route>
          <Route path="/business/:name">
            <Business />
          </Route>
        </Switch>
      </div>
      <footer className="bottom-0 w-full">
        <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
