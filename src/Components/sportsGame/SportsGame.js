import React from 'react';

function Audio(props){
    return (<div id='audio'>
        <audio className="audio" id="ambience" loop>
        <source src="https://freesound.org/data/previews/472/472880_9890183-lq.mp3" type="audio/mpeg"/>
        <source src="https://freesound.org/data/previews/472/472880_9890183-lq.ogg" type="audio/ogg"/>
    </audio>
    <audio className="audio" id="shot-audio">
        <source src="https://freesound.org/data/previews/461/461092_9589340-lq.mp3" type="audio/mpeg"/>
        <source src="https://freesound.org/data/previews/461/461092_9589340-lq.ogg" type="audio/ogg"/>
    </audio>
    <audio className="audio" id="goal-audio">
        <source src="https://freesound.org/data/previews/324/324245_4157407-lq.mp3" type="audio/mpeg"/>
        <source src="https://freesound.org/data/previews/324/324245_4157407-lq.ogg" type="audio/ogg"/>
    </audio>
    </div>)}


    function Team (props){
        if(props.shots){
                return <div className="d-flex flex-fill flex-column border rounded-lg p-3 bg-warning m-sm-3">
                <img height="200px" width="200px" className="rounded-circle mx-auto" src={props.logo} alt="logo img"/>
                <h1 className="mx-auto">{props.name}</h1>
                <button onClick={props.shoot} className="btn btn-primary btn-lg">Shoot &#40;press {props.shortcut}&#41;</button>
                <h3 className="mx-auto">Shots: {props.shots}</h3>
                <h3 className="mx-auto">Points: {props.points}</h3>
                <h3 className="mx-auto">Accuracy: {Math.floor((props.points / props.shots)*100)}%</h3>
                </div>
            } else {
                return <div className="d-flex flex-fill flex-column border rounded-lg p-3 bg-warning m-sm-3">
                <img height="200px" width="200px" className="rounded-circle mx-auto" src={props.logo} alt="logo img"/>
                <h1 className="mx-auto">{props.name}</h1>
                <button onClick={props.shoot} className="btn btn-primary btn-lg">Shoot &#40;press {props.shortcut}&#41;</button>
                <h3 className="mx-auto">Shots: {props.shots}</h3>
                <h3 className="mx-auto">Points: {props.points}</h3>
                </div>
        }
    }

    function Banner (props){
        return <h1 className="container-fluid p-3 bg-primary text-center font-italic">Welcome to {props.venue}!</h1>
    }

    function Scoreboard (props){
        return (<div className="d-flex align-items-center justify-content-center">
                <h2 className="bg-dark text-light px-5 py-3 mt-3 rounded-lg">Home: <span className="bg-light text-dark">| {props.points1} |</span></h2>
                <Reset reset={props.reset} resets={props.resets}/>
                <h2 className="bg-dark text-light px-5 py-3 mt-3 rounded-lg">Visiting: <span className="bg-light text-dark">| {props.points2} |</span></h2>
                </div>)
    }

    function Reset (props){
        return <button onClick={props.reset} className="btn btn-lg btn-danger mx-3"><strong>Resets (press r): {props.resets}</strong></button> 
    }

    class Game extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                shots1: 0,
                points1: 0,
                shots2: 0,
                points2: 0,
                resets: 0
            }
        }

        shoot1 = (event) => {
            let shotAudio = document.getElementById('shot-audio');
            shotAudio.volume = 0.1;
            let pointAudio = document.getElementById('goal-audio');
            this.setState((state, props) => ({
                shots1: state.shots1 + 1,
            }));
            if(Math.random()>0.5){
                this.setState((state, props) => ({
                points1: state.points1 + 1,
                }))
                pointAudio.play();
            } 
            else {shotAudio.play();}
        }

        shoot2 = (event) => {
            let shotAudio = document.getElementById('shot-audio');
            shotAudio.volume = 0.1;
            let pointAudio = document.getElementById('goal-audio');
            this.setState((state, props) => ({
                shots2: state.shots2 + 1,
            }));
            if(Math.random()>0.5){
                this.setState((state, props) => ({
                points2: state.points2 + 1,
                }))
                pointAudio.play();
            } 
            else {shotAudio.play();}
        }

        reset = (event) => {
            this.setState((state, props) => ({
                shots1: 0,
                points1: 0,
                shots2: 0,
                points2: 0,
                resets: state.resets + 1
            }))
        }

        shortcuts = (event) => {
            if(event.keyCode===37){
                this.shoot1();
            } else if(event.keyCode===39){
                this.shoot2();
            } else if(event.keyCode===82){
                this.reset();
            }
        }

        componentDidMount(){
            window.onkeydown = this.shortcuts;
            let bgAudio = document.getElementById('ambience');
            bgAudio.volume = 0.025;
            bgAudio.play();
        }

        render(){
            return (<div>
                    <Banner venue={this.props.venue} />
                    <Scoreboard points1={this.state.points1} reset={this.reset} resets={this.state.resets} points2={this.state.points2}/>
                    <div className="d-flex justify-content-around">
                        <Team name={this.props.team1} logo={this.props.logo1} shoot={this.shoot1} shortcut="&lArr;" shots={this.state.shots1} points={this.state.points1} />
                        <Team name={this.props.team2} logo={this.props.logo2} shoot={this.shoot2} shortcut="&rArr;" shots={this.state.shots2} points={this.state.points2} />
                   </div>
            </div>)
        }
    }

    class SportsGame extends React.Component{
        render(){
            return (<div>
                <Audio />
                <Game
                        venue="Ball Arena" 
                        team1="Nuggets"
                        logo1="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1P1vdSXLzvjFvYEg2LgjxwHaHa%26pid%3DApi%26h%3D160&f=1"
                        team2="Lakers"
                        logo2="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fff182d0c-9c8d-4b92-bfb3-5413e0d59427%2Fsvn%2Fgold-fanmats-sports-rugs-18839-64_1000.jpg&f=1&nofb=1"/>
            </div>)
        }
    }

    export default SportsGame;