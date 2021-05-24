import React from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Search from './components/Search/search';
import Register from './components/Register/register';
import MyCal from './components/MyCal/myCal';
import Login from './components/Login/login';
import LoginOrg from "./components/LoginOrg/loginOrg";
import './App.scss';
import RegisterOrg from './components/RegisterOrg';


function App() {
  return (
    <HashRouter>
      <Header />
        <Route exact path={["/", "/Home"]} component={Home} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/MyCal' component={MyCal} />
        <Route exact path='/Login' component={Login}/> 
        <Route exact path='/Loginorg' component={LoginOrg} />
        <Route exact path='/RegisterOrg' component={RegisterOrg}/>
      <Footer />
    </HashRouter>
  );
}

export default App;
