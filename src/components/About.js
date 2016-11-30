import React, { Component } from 'react';

import profile from '../images/profile.png'

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="Section-Container">
          <h4>About</h4>
          <img className='profile' src={profile} alt="Zak Holt wearing glasses he doesn't need" />
          <p className='bio' >Hi there! My name is Zak, and I'm a Web Developer in the Baltimore/DC area. After teaching myself the basics of front-end design and development, I enrolled in and completed Thinkful's online bootcamp to kickstart myself with the MERN stack (MongoDB, ExpressJS, React/Redux, and Node.js). I'm now actively looking for work in all areas of web development.</p>
          <div className="row">
            <ul className='skills'>
              As is the custom with this industry, I'm always learning new technologies and methods, but here's a list of the technologies that I work with regularly: <br />
              <li>HTML</li>
              <li>CSS</li>
              <li>jQuery</li>
              <li>React and Redux</li>
              <li>ExpressJS</li>
              <li>MongoDB and Mongoose</li>
              <li>Node.js</li>
              <li>AJAX</li>
              <li>Webpack with Babel</li>
            </ul>
          <p>Take a look at my portfolio and shoot me an email if you'd like to work on something with me!</p>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
