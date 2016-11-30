import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Section-Container">
          <h4>Contact</h4>
          <p>If you're interested in working with me, I'd love to chat. I'm currently looking for full-time work, as well as freelance contracts. If you're a hobbyist, I'd love to collaborate on an open-source project.</p>
          <ul> A thoughtful and witty email is the best way to get my attention <br />
            <li><a href="mailto:zak.j.holt@gmail.com">zak.j.holt@gmail.com</a></li>
            <li><a target='_blank' href="http://twitter.com/zakHolt">@zakHolt</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/zachary-holt-06b95888
">LinkedIn</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Contact;
