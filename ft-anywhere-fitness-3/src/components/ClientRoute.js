import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ClientRoute = ({ component: Component, availableClasses, setAvailableClasses, ...rest }) => {
    return <Route {...rest} render={(props)=> {
        if (localStorage.getItem("user_role") === "2") {
            return <Component availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} {...props}/>
        } else {
            return <Redirect to='/logout'/>
        }    
    }}/>
}

export default ClientRoute;