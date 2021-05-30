import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Index = lazy(() => import('./pages/Index.jsx'))
const About = lazy(() => import('./pages/About.jsx'));
const Resume = lazy(() => import('./pages/Resume.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const EasterEgg = lazy(() => import('./pages/EasterEgg.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Now Loading</h1>}>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/easter" component={EasterEgg}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
