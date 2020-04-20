import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Router} from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import CreateDashboard from '../components/CreateDashboard';
import EditDashboard from '../components/EditDashboard';
import HelpPage from '../components/HelpPage';
import Notfound from '../components/Notfound';


const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={DashboardPage} exact ={true}/>
      <Route path="/Edit/:id" component={EditDashboard} exact={true}/>
      <Route path="/Create" component={CreateDashboard} />
      <Route path="/Help" component={HelpPage} />
      <Route component={Notfound} />
    </Switch>
  </div>
  </BrowserRouter>
);

export  default AppRouter;
