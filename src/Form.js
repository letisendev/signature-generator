import React from "react";
import $ from "jquery";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import PropTypes from "prop-types";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      position: "",
      email: "",
      skypeId: "",
      emailService:""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("Final data is", data);
  };

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {fullName} = this.state
    return (
      <div className="row main" /* style={{ border: "1px solid green" }} */>
        <div className="title" /* style={{ border: "1px solid brown" }} */>
          <h2 className="signature-generator">Signature Generator</h2>
        </div>
        <div className="divider" />
        <div
          id="subtitle"
          className="subtitle" /* style={{ border: "1px solid red" }} */
        >
          <h6 className="fill-in-your-informa">
            Fill in your information to generate your email signature
          </h6>
        </div>

        <form
          onSubmit={this.handleSubmit}
          className="col s12"
          id="myForm"
          /* style={{ border: "1px solid orange" }} */
        >
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="Enter your full name"
                id="full_name"
                name="fullName"
                type="text"
                className="validate"
                onChange={this.handleInputChange}
              />
              <label className="active" htmlFor="first_name">
                Full Name *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <select className="validate" required name="position" onChange={this.handleInputChange}>
                <option id="zxc" value="" disabled selected>
                  Type or select your position
                </option>
                <option value="1">UX Designer</option>
                <option value="2">UI Designer</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
                <option value="6">Option 6</option>
              </select>
              <label htmlFor="position" id="word">
                Position *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="email@belatrixsf.com"
                id="email"
                type="email"
                className="validate"
                name="email"
                onChange={this.handleInputChange}
              />
              <label
                className="active"
                htmlFor="email"
                data-error="Please add @"
                required="required"
                aria-required="true"
              >
                Email *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="Enter your Skype ID"
                id="skypeId"
                name="skypeId"
                type="text"
                className="validate"
                onChange={this.handleInputChange}
              />
              <label className="active" htmlFor="skypeId">
                Skype ID *
              </label>
            </div>
          </div>

          <div className="row email-services-section">
            <div className="col s12">
              <div className="row">
                <div className="col s12">
                  <span className="email-service-span">
                    For which email service?
                  </span>
                </div>
              </div>
              <div className="email-service-container">
                <div className="row-buttons">

                  <div className="col s12" onChange={this.handleInputChange}>
                    <div className="rectangle">
                      <a className="btn-flat" name="contact" value="gmail">
                        <img src={require("./gmail.png")} alt="" />
                        <span className="button-text">Gmail</span>
                      </a>
                    </div>

                    <div className="rectangle">
                      <a className="btn-flat" name="contact" value="outlook" >
                        <img src={require("./outlook.png")} alt="" />
                        <span className="button-text">Outlook</span>
                      </a>
                    </div>
                    <div className="rectangle">
                      <a className="btn-flat" name="contact" value="roundcube">
                        <img src={require("./roundcube.png")} alt="" />
                        <span className="button-text">Roundcube</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="button-final-container">
            <button
              className=" modal-trigger button-final btn-flat"
              type="submit"
              name="action"
              data-target="modal1" 
              
            >
              GENERATE SIGNATURE
            </button>
          </div>
        </form>
        <div id="modal1" className="modal">
          <div className="modal-content">
          <img src={require("./confirmation.png")} alt="" />
            <h2 className="signature-generated">Signature Generated</h2>
            <h4 className="subtitle">Just copy the information below to add it to your email</h4>
          </div>
          <div className="modal-footer">
            <input className="" type="text"/>
            <button className="" ></button>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {};
