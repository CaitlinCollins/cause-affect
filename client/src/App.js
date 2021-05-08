import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import Register from './components/Register';
import MyCal from './components/MyCal';
        

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path={["/", "/Home"]} component={Home} />
      <Route exact path='/Search' component={Search} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/MyCal' component={MyCal} />
      <Footer />
    </HashRouter>
  );
}

export default App;
