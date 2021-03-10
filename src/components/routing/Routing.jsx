import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '@/components/Login/Login';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import NewIssue from '@/components/NewIssue/NewIssue';

const Routing = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Main} />
          <Route path="/newIssue" exact component={NewIssue} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routing;
