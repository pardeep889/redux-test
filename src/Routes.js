import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout'

import Home from './components/Home';
import Orders from './components/Order';

const NotFound = () => <h1>Page Not Found</h1>


const Routes = () =>{
    return(
        <Layout>
            <Switch>
                <Route path ="/" exact component={Home}/>   
                <Route path ="/orders" exact component={Orders}/>                          
                <Route path ="*" exact component={NotFound}/>                          

            </Switch>
        </Layout>        
    );
};

export default Routes;