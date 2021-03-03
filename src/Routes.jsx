import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Intro from './components/Intro';
import Base from './components/Layout';
import MobileFavoriteBar from './components/MobileFavoriteBar';
import Contents from './components/Contents';

const Routes = () => (
  <Switch>
    <Route path="/intro" component={Intro} />
    <Base>
      <Redirect from="/" to="/ALL" />
      <Route path="/:brand" component={Contents} exact />
      <Route path="/mobile/favorite" component={MobileFavoriteBar} exact />
    </Base>
  </Switch>
);

export default withRouter(Routes);
