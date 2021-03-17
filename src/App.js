import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import NavigationHead from './Components/navigation/NavigationHead.js';
import NavigationFoot from './Components/navigation/NavigationFoot';
import Page404 from './Components/404/Page404';

function App() {
  return (
    <div className='app'>
        <NavigationHead />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/contact"  component={Contact} />
          <Route exact path="/projects"  component={Projects} />
          <Route exact path="/resume"  component={Resume} />
          <Route path="/" component={Page404} />
        </Switch>
        <NavigationFoot />
    </div>
  );
}



export default App;
