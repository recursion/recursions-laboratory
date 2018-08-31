import React from 'react';
import './style.scss';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default class ContactPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      posted: false,
      subject: '',
      email: '',
      message: '',
      subjectHelp: '',
      emailHelp: '',
      messageHelp: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onSubmit() {
    if (this.state.subject === '') {
      this.setState(() => ({ subjectHelp: 'Subject must not be empty.' }));
      return;
    }

    if (this.state.email === '') {
      this.setState(() => ({ emailHelp: 'Email must not be empty.' }));
      return;
    }

    if (!validateEmail(this.state.email)) {
      this.setState(() => ({ emailHelp: 'Invalid Email Address' }));
      return;
    }

    if (this.state.message === '') {
      this.setState(() => ({ messageHelp: 'Message must not be empty.' }));
      return;
    }
    // only submit when all validations have passed
    const content = {
      subject: this.state.subject,
      email: this.state.email,
      message: this.state.email
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    };

    this.setState(() => ({ posted: true }));

    fetch('/contact', options)
      .then((response) => {
        if (response.status === 200) {
          this.setState(() => ({ submitted: true, posted: false }));
        } else {
          console.error(`Error response ${response.status} sent from server.`);
        }
      });
  }

  onSubjectChange(subject) {
    if (subject !== '') {
      this.setState(() => ({ subjectHelp: '' }));
    }
    this.setState(() => ({ subject }));
  }

  onEmailChange(email) {
    if (email !== '') {
      this.setState(() => ({ emailHelp: '' }));
    }
    this.setState(() => ({ email }));
  }

  onMessageChange(message) {
    if (message !== '') {
      this.setState(() => ({ messageHelp: '' }));
    }
    this.setState(() => ({ message }));
  }

  render() {
    if (this.state.posted) {
      return <div className="notification is-loading">Submitting</div>;
    }

    if (this.state.submitted) {
      return (
        <div className="submitted-message has-text-centered is-size-1-desktop">
          <p>
            Your message has been submitted.
          </p>
          <p>
            Thank you!
          </p>
        </div>
      );
    }
    return (
      <section className="section contact-page">
        <div className="container">
          <p>
            Wanna hire me? Discuss some of my work? Or just say Hi?
          </p>
          <p>
            By all means.. reach out using this <em>super cool</em> contact form I built!!
          </p>
          <div className="field">
            <label className="label" htmlFor="subject">Subject</label>
            <div className="control">
              <input
                onChange={(e) => this.onSubjectChange(e.target.value)}
                value={this.state.subject}
                id="subject"
                className={`input ${(this.state.subjectHelp) ? 'is-danger' : ''}`}
                type="text"
                placeholder="e.g Alex Smith"
              />
              {(this.state.subjectHelp !== '') ?
                <p className="help is-danger">{this.state.subjectHelp}</p> :
                ''
              }
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Your Email</label>
            <div className="control">
              <input
                onChange={(e) => this.onEmailChange(e.target.value)}
                value={this.state.email}
                id="email"
                className={`input ${(this.state.emailHelp) ? 'is-danger' : ''}`}
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
              {(this.state.emailHelp !== '') ?
                <p className="help is-danger">{this.state.emailHelp}</p> :
                ''
              }
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">Message</label>
            <div className="control">
              <textarea
                onChange={(e) => this.onMessageChange(e.target.value)}
                value={this.state.message}
                id="message"
                className={`textarea ${(this.state.messageHelp) ? 'is-danger' : ''}`}
                placeholder="Textarea"
              />
              {(this.state.messageHelp !== '') ?
                <p className="help is-danger">{this.state.messageHelp}</p> :
                ''
              }
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={this.onSubmit}>Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
