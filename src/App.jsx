import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';

import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import { MenuProvider } from './context/MenuContext';
import { LoginProvider } from './context/LoginContext';
import { PromotionProvider } from './context/PromotionContext';

import Routes from './Routes';
import ScrollToTop from './lib/ScrollToTop';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children,
  );

const App = () => (
  <AppProvider
    contexts={[PromotionProvider, ColorProvider, LoginProvider, MenuProvider]}
  >
    <GlobalStyles />
    <BrowserRouter basename="/">
      <ScrollToTop>
        <Analytics id="UA-192829821-1">
          <Routes />
        </Analytics>
      </ScrollToTop>
    </BrowserRouter>
  </AppProvider>
);

export default App;
