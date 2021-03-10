import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '@/components/Login/Login';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
      <Header />
  );
};

export default Routing;
