import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import NavigationHead from './Components/navigation/NavigationHead.js';
import NavigationFoot from './Components/navigation/NavigationFoot';

function App() {
  return (
    <div className='app'>
        <NavigationHead />
        
        <Route exact path="/"  component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/projects"  component={Projects} />
        <Route path="/resume"  component={Resume} />

        <NavigationFoot />
    </div>
  );
}



export default App;
