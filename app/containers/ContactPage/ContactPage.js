import React from 'react';
import './style.scss';

const ContactPage = () => (
  <section className="section contact-page">
    <div className="container">
      <p>
        Interested in hiring me? Discussing some of my work? Or whatever...
        Go ahead.. reach out!
      </p>
      <div className="field">
        <label className="label" htmlFor="subject">Subject</label>
        <div className="control">
          <input id="subject" className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="email">Your Email</label>
        <div className="control">
          <input id="email" className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">Message</label>
        <div className="control">
          <textarea id="message" className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
