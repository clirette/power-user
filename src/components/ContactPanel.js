import React from "react";

const ContactPanel = () => {
  return (
    <div className="panel-description bg-medium">
      <h1 className="panel-description__title">What Can We Do For You?</h1>
      <div className="form-container">
        <form className="form">
          <div className="form-item--name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-item__text"
            />
          </div>
          <div className="form-item--email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-item__text"
            />
          </div>
          <div className="form-item--message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
          <div className="form-item--submit">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPanel;
