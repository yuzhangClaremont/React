import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route  path="/resume" component={Resume} />
    <Route  path="/projects" component={Projects} />
  </Switch>
)

export default Main;