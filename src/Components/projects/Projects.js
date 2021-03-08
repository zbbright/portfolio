import React from 'react';
import SportsGame from '../sportsGame/SportsGame';

function Projects(props){
    return (<div className='projects jumbotron m-4 bg-white p-3 opacity-1'>
        <h1>Projects</h1>
        <p>Find me on <a href='https://github.com/zbbright'>Github</a></p>
        <h3>About this site:</h3>
        <p>This portfolio is a single page React application built on the <code>create-react-app</code> platform with URL routing through React Router. Styling is accomplished with Bootstrap 4. Custom CSS is used for background image and semi-transparent objects.</p>
            <div className='jumbotron-fluid'>
                <h3>React Sports Game</h3>
                <p>This project was originally created <a href="https://github.com/zbbright/react-sports-game">(original Github repo)</a> as a self-contained React app.  I converted it to an individual component for this portfolio.  It demonstrates simple programming in Javascript (conditionals), an understanding of React component structure and managing state, Bootstrap 4 styling, and HTML.</p>
                <SportsGame/>
            </div>
        </div>
    )}

export default Projects;