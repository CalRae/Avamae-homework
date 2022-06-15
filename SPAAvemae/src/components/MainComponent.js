import React from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutUsComponent";
import ContactUs from "./ContactUsComponent";
import {Switch, Route, Redirect, } from 'react-router-dom';
import { withRouter } from "react-router-dom";

function Main(){
    return(
        <React.Fragment>
        <Header />
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/aboutUs' component={AboutUs}/>
            <Route path='/contactUs' component={ContactUs}/>
            <Redirect to='/home'/>
        </Switch>
        </React.Fragment>
    )
}

export default withRouter(Main);