import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          {/* <Route path="/" exact component={() => <Navigation/>} /> */}
          {/* <Route path="/bookings" exact component={() => <Home/>} />
          <Route path="/adoption" exact component={() => <Home/>} />
          <Route path="/photoalbum" exact component={() => <Home/>} /> */}

          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
