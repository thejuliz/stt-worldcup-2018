import React from 'react'
import { Route } from 'react-router'

import Qualifier from './Qualifier';

export default () => (
    <div>
        <Route exact path="/" component={Qualifier}/>
    </div>
);