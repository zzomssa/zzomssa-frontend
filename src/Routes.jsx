import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Base from './components/Layout';
import MobileFavoriteBar from './components/MobileFavoriteBar';
import { Contents, AllContents, SearchContents } from './components/Contents';

const Routes = () => (
  <Switch>
    <Base>
      <Route path="/" component={AllContents} exact />
      <Route path="/search" component={SearchContents} exact />
      <Route path="/brand/:subcategory" component={Contents} exact />
      <Route path="/mobile/favorite" component={MobileFavoriteBar} exact />
      {/* <Redirect to="/" /> */}
    </Base>
  </Switch>
);

export default withRouter(Routes);
