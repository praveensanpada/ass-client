import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


import Header from './common/Header';
import Footer from './common/Footer';

import AppSetting from './pages/AppSetting';
import ClientDetails from './pages/ClientDetails';
import ClientList from './pages/ClientList';
import ClientSetting from './pages/ClientSetting';
import WebSetting from './pages/WebSetting';


const AppRoutes = () => {

    return (
        <>
                <Header />
                <br/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ClientList} />
                        <Route exact path="/setting/" component={ClientSetting} />
                        <Route exact path="/web-setting/" component={WebSetting} />
                        <Route exact path="/app-setting/" component={AppSetting} />
                        <Route exact path="/profile/" component={ClientDetails} />

                    </Switch>
                </BrowserRouter>
                <br/>
                {/* <Footer/> */}
        </>
    );
};

export default AppRoutes;