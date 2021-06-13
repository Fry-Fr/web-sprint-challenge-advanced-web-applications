import React from 'react';
import { Route } from 'react-router-dom';
import BubblePage from './BubblePage';

const PrivateRoute = (props) => {
    return (
        <Route path="/bubbles" {...props} render={(props) => {
            if (localStorage.getItem('token')){
                return (<BubblePage {...props} />)
            }else{
                return <div>"NOT AUTHORIZED"</div>
            }
        }}/>
    )
}
export default PrivateRoute;
//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in