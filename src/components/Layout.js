import React, {Component} from 'react';

import zenscroll from 'zenscroll';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio'

zenscroll.setup(777, 175)

class Layout extends Component {
    scrollToSpot(index) {
      var element = document.getElementsByClassName('Section-Container')[index]
      // element.scrollIntoView({block: 'end', behavior:'smooth'});
      zenscroll.to(element);
    }
    render() {
        return (
            <div className="Layout">
                <div className="Header">
                  <div className="Section-Container">
                      <header>
                          <h2>Zak Holt</h2>
                          <h4>Web Developer</h4>
                          <nav>
                              <ul>
                                  <li onClick={() => {this.scrollToSpot(1)}}>About</li>
                                  <li onClick={() => {this.scrollToSpot(2)}}>Portfolio</li>
                                  <li onClick={() => {this.scrollToSpot(3)}}>Contact</li>
                              </ul>
                          </nav>
                      </header>
                  </div>
                </div>
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default Layout;
