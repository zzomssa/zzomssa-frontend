import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';

import AlertTemplate from 'react-alert-template-basic';
import { positions, Provider as AlertProvider } from 'react-alert';
import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import { MenuProvider } from './context/MenuContext';
import { LoginProvider } from './context/LoginContext';
import { PromotionProvider } from './context/PromotionContext';

import Routes from './Routes';
import ScrollToTop from './lib/ScrollToTop';

const options = {
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '-150px',
};

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
          <AlertProvider template={AlertTemplate} {...options}>
            <Routes />
          </AlertProvider>
        </Analytics>
      </ScrollToTop>
    </BrowserRouter>
  </AppProvider>
);

export default App;
