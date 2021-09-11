import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Bookings, Adoption, PhotoAlbum } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/bookings" exact component={() => <Bookings />} />
          <Route path="/adoption" exact component={() => <Adoption />} />
          <Route path="/photoalbum" exact component={() => <PhotoAlbum />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
