import React from 'react'
import { Route } from 'react-router'

import Qualifier from './Qualifier';
import Knockout from './Knockout';
import Fixture from './Fixture';

export default () => (
    <div>
        <Route exact path="/" component={Knockout}/>
        <Route exact path="/Fixture" component={Fixture}/>
    </div>
);