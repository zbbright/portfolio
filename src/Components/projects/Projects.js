import React from 'react';
import SportsGame from '../sportsGame/SportsGame';

function Projects(props){
    return (<div className='projects jumbotron m-4 bg-white p-3 opacity-1'>
        <h1>Projects</h1>
        <p>Find me on <a href='https://github.com/zbbright'>Github</a></p>
        <div className='jumbotron-fluid'><SportsGame/></div>
        </div>
    )}

export default Projects;