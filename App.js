import React  from "react";
import "./App.css";
import Home_page from './Pages/Home_page';
import Consciousness from "./components/Consciousness";
import Meditation from "./Pages/Meditation";
import God_head from "./Pages/God_head";
import Englitenment from "./Pages/Englitenment";
import Heros_Journey from "./Pages/Heros_Journey";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home_page} />
        <Route path='/Consciousness'  exact component={Consciousness} />
        <Route path='/Meditation' exact component={Meditation} />
        <Route path='/Englitenment' exact component={Englitenment} />
        <Route path='/Heros_Journey' exact component={Heros_Journey} />
        <Route path='/God_head' exact component={God_head} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;
