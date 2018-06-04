import React from 'react'
import { Route } from 'react-router'

import Qualifier from './Qualifier';
import Knockout from './Knockout';

export default () => (
    <div>
        <Route exact path="/" component={Knockout}/>
    </div>
);