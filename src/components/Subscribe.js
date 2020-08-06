import React from 'react';
import config from '../../config';

const descriptions = () => (
  config.descriptions.map(desc => (
    <li>
      <i class="fas fa-check mr-1"></i>
      <span>{desc}</span>
    </li>
  ))
);

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <ul className="signup-description">
                {descriptions()}
              </ul>
            </div>          
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="mx-auto text-center signup-contact">
                <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 className="text-white mb-5">Contact Us!</h2>
                <form className="form-inline d-flex" method="POST" action="https://formspree.io/VBPsanitizing@gmail.com">
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

        </div>
      </div>
    </section>
  );
}
