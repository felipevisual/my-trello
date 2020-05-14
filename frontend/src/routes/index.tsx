import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projetos from '../pages/Projetos';
import Quadro from '../pages/Quadro';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Projetos} />
    <Route path="/projetos/:id" component={Quadro} />
  </Switch>
);

export default Routes;
