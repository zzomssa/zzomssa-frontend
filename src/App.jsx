import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './style';

import { ColorProvider } from './context/ColorContext';
import { MenuProvider } from './context/MenuContext';
import { LoginProvider } from './context/LoginContext';
import { PromotionProvider } from './context/PromotionContext';

import Routes from './Routes';

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
      <Routes />
    </BrowserRouter>
  </AppProvider>
);

export default App;
