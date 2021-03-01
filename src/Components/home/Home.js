import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    return (<div className='home'>
        <div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
</ul>

<div id="main-carousel" className="carousel-inner py-5">
    <div className="carousel-item active">
        <div className="card mx-auto width-80">
            <div className="card-body shadow">
                <h3>I started my journey into tech in July, 2020...</h3>
                <p>Through Kenzie Academy, I've learned Frontend Development, with a solid understanding of fundamentals for HTML, CSS, and Javascript.<br />While I haven't yet gotten my hands dirty in the field, I am excellent at picking up new concepts and would love to gain more exposure with your company.</p>
                <p>I grew up in Colorado, and made a recent move to the Indianapolis area. While we do miss mountains and blue skies, my family and I are adjusting to flatland life and love the greenery, thick woods, and warm summer nights that the Midwest has to offer.</p>
                <p><Link className="nav-link" to="/about" >Learn more about me</Link></p>
            </div>
        </div>
    </div>
  
  <div className="carousel-item">
    <div className="card mx-auto width-80">
        <div className="card-body shadow">
            <h3>Curious about my skill level?</h3>
            <p>Through my coding bootcamp, I've been a top-performer.  I'm fairly solid on the basics of the languages I've been exposed to, and have pushed myself to learn the concepts that lie just beyond the material taught.<br />I've also been working to familiarize myself with the concept of using prebuilt libraries and utilizing the efforts of others to go beyond what I can accomplish alone.</p>
            <p><Link className="nav-link" to="/projects">See some of my recent projects</Link></p>
        </div>
      </div>
  </div>
  <div className="carousel-item">
    <div className="card mx-auto width-80">
        <div className="card-body shadow">
            <h3>Work History</h3>
            <p>Whether it's been waiting tables, firefighting, or self-employment in the home services industry, my vocational history has been diverse to say the least. The jobs that I've applied myself to have all been different, but can all relate back to a focus on the end user experience.  Learn more about my work history by checking out my resume.</p>
            <p><Link className="nav-link" to="/resume">Open resume</Link></p>
        </div>
      </div>
  </div>
  <div className="carousel-item">
    <div className="card mx-auto width-80">
        <div className="card-body shadow">
            <h3>Reach out!</h3>
            <p>Interested in me for YOUR team? Let's see if we're a potential fit!</p>
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