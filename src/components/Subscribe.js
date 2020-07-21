import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Contact Us!</h2>
            {/* <form className="contactForm" name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
                <div className="field half first">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" required="" />
                </div>
                <div className="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" required="" />
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="6" required=""></textarea>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" className="special" value="Send Message" />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form> */}
            <form className="form-inline d-flex">
              <input
                type="text"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputName"
                placeholder="Enter name..."
              />
              <input
                  type="email"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  placeholder="Enter email address..."
                />
                <textarea
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputMessage"
                  placeholder="Enter message..."
                  rows="5"
                />
              <button type="submit" className="btn btn-primary mx-auto">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
