import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
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
    </section>
  );
}
