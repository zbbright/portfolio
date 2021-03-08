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
        
        <Route exact path="/portfolio"  component={Home} />
        <Route path="/portfolio/about"  component={About} />
        <Route path="/portfolio/contact"  component={Contact} />
        <Route path="/portfolio/projects"  component={Projects} />
        <Route path="/portfolio/resume"  component={Resume} />

        <NavigationFoot />
    </div>
  );
}



export default App;
