import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    return (<div className='home'>
        <div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div id="main-carousel" className="carousel-inner py-5">
    <div className="carousel-item active">
        <div className="card mx-auto width-80">
            <div className="card-body shadow">
                <h3>I started my journey into tech in July, 2020...</h3>
                <p>Through Kenzie Academy, I've learned Frontend Development, with a solid understanding of fundamentals for Javascript, React, HTML, and CSS.<br />I am excellent at picking up new concepts and would love to gain more exposure with your company.</p>
                <p>I grew up in Colorado, and made a recent move to the Indianapolis area. While I love the mountains and blue skies, I'm looking to stay in the Indy Metro area at either a local office or remotely.</p>
                <p><Link className="nav-link" to="/about" >Learn more about me</Link></p>
            </div>
        </div>
    </div>
  
  <div className="carousel-item">
    <div className="card mx-auto width-80">
        <div className="card-body shadow">
            <h3>Curious about my tech skills?</h3>
            <p>Through my coding bootcamp, I've been a top-performer, graduating with grades above 100%.  I have a solid grasp on the languages I've been exposed to, and have pushed myself to learn the concepts that lie just beyond the material taught, such as deploying usable websites like the one you're accessing or teaching myself to use the Bootstrap 4 style library.<br/><br/>My tech skills include single-page React Apps, Javascript programming, Bootstrap 4, HTML, and CSS.  I have experience with remote work through six-month, fully remote Frontend Web Developer certification bootcamp, utilizing standard tools like Slack, Zoom, and Google Docs.</p>
            <p><Link className="nav-link" to="/projects">See some of my recent projects</Link>or <Link className="nav-link" to="/resume">View my resume</Link></p>
        </div>
      </div>
  </div>
  <div className="carousel-item">
    <div className="card mx-auto width-80">
        <div className="card-body shadow">
            <h3>Reach out!</h3>
            <p>Interested in me for <em>your</em> team? Let's see if we're a potential fit!</p>
            <p><Link className="nav-link" to="/contact">Contact me Here</Link></p>
        </div>
      </div>
  </div>
</div>

<a className="carousel-control-prev width-10" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next width-10" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>

    </div>
)}

export default Home;