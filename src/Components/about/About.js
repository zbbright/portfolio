import React from 'react';

function About(props){
    return (<div className='about jumbotron m-4 bg-white p-3 opacity-1'>
    <h3>A bit about me...</h3>
        <p>I'm a young father, new to the tech world. I live with my family outside of Indianapolis, and am looking for an opportunity to stretch my current skills and abilities to create useful tools that allow people to accomplish more through tech.</p>
        <p>After an early career pursuing firefighting and practicing high-pressure problem-solving in an fast-paced, teamwork-intensive environment, I transitioned careers.  <br/>
        Before deciding to pursue tech, a position in Amazon Fulfillment gave me the opportunity to explore tech through a special project I worked on <strong><a className='opacity-2' href="https://github.com/zbbright/amazon-project">(GitHub)</a></strong>. 
        I was in a position watching the orders coming in and ensuring the the inventory to fill them would not be affected by issues within the warehouse (inventory was moved by automated robots that would become obstructed from time to time). The process to ensure availibility was tedious, so I created an Excel workbook to automate most of the steps. The process of teaching myself to "code" an Excel program had me hooked, so when I had the opportunity to start a coding bootcamp I decided to go for it. I'm looking forward to put my new skills to work at a first tech job.</p>
        
  </div>
    )}

export default About;