import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Search from './components/Search/search';
import Register from './components/Register/register';
import MyCal from './components/MyCal/myCal';
        

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path={["/", "/Home"]} component={Home} />
      <Route exact path='/Search' component={Search} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/MyCal' component={MyCal} />
      <Route exact path='/Login' component={Login} />
      <Footer />
    </HashRouter>
  );
}

export default App;
