import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Base from './components/Layout';
import MobileFavoriteBar from './components/MobileFavoriteBar';
import { Contents, AllContents } from './components/Contents';

const Routes = () => (
  <Switch>
    <Base>
      <Route path="/" component={AllContents} exact />
      <Route path="/:subcategory" component={Contents} exact />
      <Route path="/mobile/favorite" component={MobileFavoriteBar} exact />
    </Base>
  </Switch>
);

export default withRouter(Routes);
