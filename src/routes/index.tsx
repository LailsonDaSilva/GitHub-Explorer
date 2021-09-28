import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Index';
import RepositoryDetails from '../pages/Repository/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={RepositoryDetails} />
  </Switch>
);

export default Routes;
