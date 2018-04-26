import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/header';
import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';
import User from './components/user';
import Login from './components/Login';
import Dashboard from './components/Dashboard'

const PrivateRoute = ({ 
        isLogged,
        component: Comp,
        ...rest
    }) => {
    console.log()
    return <Route {...rest} component={(props) => (
        isLogged ?
            <Comp {...props}/>
        :
            <Redirect to="/login" />
    )} />
}

const Routes = (props) => {
    
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/uncontrolled" exact component={Uncontrolled} />
                <Route path="/controlled" exact component={Controlled} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute isLogged={props.auth} path="/dashboard" exact component={Dashboard} />
                <Route path="/user" exact component={User} />
            </Switch>
        </div>
    )
};

export default Routes;