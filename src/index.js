import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import MainPage from './pages/MainPage/MainPage';
import RegistartionPage from './pages/RegistartionPage/RegistarationPage';
import ScoreBoardPage from './pages/ScoreBoardPage/ScoreBoardPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';

ReactDOM.render(
  <Router basename="/diplom" >
    <div>
      <Route exact={true} path='/' component={RegistartionPage} />
      <Route path='/authorization' component={AuthorizationPage}/>
      <Route path='/main' component={MainPage}/>
      <Route path='/scoreboard' component={ScoreBoardPage}/>
      <Route path='/statistic' component={StatisticPage}/>
    </div>
</Router>,
  document.getElementById('root')
);
