import React from "react";
import $ from "jquery";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import chroma from 'chroma-js';
import Select from "react-select";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { copyFormatted } from "./copy-to-clipboard";

const options = [
  { value: "UX Designer", label: "UX Designer" },
  { value: "UI Designer", label: "UI Designer" },
  { value: "Development Intern", label: "Development Intern" },
  {value: "Option 4", label: "Option 4"},
  {value: "Option 5", label: "Option 5"},
  {value: "Option 6", label: "Option 6"},
  {value: "Option 7", label: "Option 7"},
  {value: "Option 8", label: "Option 8"},
  {value: "Option 9", label: "Option 9"},
  {value: "Option 10", label: "Option 10"},
  {value: "Option 12", label: "Option 12"},
  {value: "Option 13", label: "Option 13"},
  {value: "Option 14", label: "Option 14"},
  {value: "Option 15", label: "Option 15"},

  
];

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* value: '', */
      fullName: "",
      position: {},
      email: "",
      skypeId: "",
      emailService: ""
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

  handleChange = position => {
    console.log({ position });
    this.setState({
      position: position
    });
    /* let obj ={value: position.value, label: position.label};
    this.setState({value: obj}); */   //  convert to obj
  };

  

  render() {
    const { fullName, position, email, skypeId, emailService } = this.state;
    const str = "<b>Belatrix Software</b>";

    const dot = (color = '#ccc') => ({
      alignItems: 'center',
      display: 'flex',
    
      ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
      },
    });

    const colourStyles = {
      control: (styles,{isFocused,isSelected,isDisabled}) => ({ ...styles, height:'10px',border:'none', borderBottom:'2px solid #3c3c3c', borderRadius:0 ,  backgroundColor: 'white',
      border: isFocused ? 0 : 0,
      boxShadow: isFocused ? 0 : 0,
      
      "&:hover": {
        border: isFocused ? 0 : 0
      },
      borderBottom: isFocused
          ? '2px solid #f89937'
          : '2px solid #3c3c3c',
        
        '&:hover':{
          borderBottom: '2px solid #3c3c3c'
        }
        }),
      option: (styles, {isDisabled, isFocused, isSelected }) => {
        const color = chroma('#9BC04B');
        return {
          ...styles,
          
          
          backgroundColor: isDisabled
            ? null
            : isSelected 
              ? 'orange'
              : isFocused 
                ? 'orange'
                : null,
          
          cursor: isDisabled 
          ? 'not-allowed' 
          : 'default',
        };
      },
      input: styles => ({ ...styles}),
      placeholder: styles => ({ ...styles}),
      singleValue: (styles, { data }) => ({ ...styles}),

    };
    
    

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
              <Select
                styles={colourStyles}
                required
                name="position"
                value={position}
                onChange={this.handleChange}
                options={options}
                placeholder={'Select something'}
                /* value={this.state.value} */
              />

              <label className="active" htmlFor="position" id="word">
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
                      <a className="btn-flat" name="contact" value="outlook">
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
              className="button-final btn-flat modal-trigger"
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
            <img id="img-confirm" src={require("./confirmation.png")} alt="" />

            <h2 className="signature-generated">Signature Generated</h2>
            <h4 className="subtitle">
              Just copy the information below to add it to your email
            </h4>
          </div>
          <div className="modal-footer">
            <div className="footer-cage">
              <div className="footer-cage-text">
                {fullName} {position.label}...
              </div>
            </div>
           
            <div>
              <button
                className="footer-small-cage"
                onClick={() => {
                    const text = this.getFormattedSignature(
                    fullName,
                    position.label,
                    str,
                    email,
                    skypeId
                  );
                  copyFormatted(text);
                  $(".fixed")
                    .show(1)
                    .delay(1000)
                    .hide(1);
                }}
              >
                Copy Info
              </button>
            </div>
          </div>
        </div>
        <div className="fixed">
          <div className="copied-to-clipboard">COPIED TO CLIPBOARD</div>
        </div>
      </div>
    );
  }

  getFormattedSignature(fullName, position, str, email, skypeId) {
    return `${fullName}<br/>
${position}</br>
${str.bold()}</br>
${email}</br>
USA Phone +1 (617) 608-1413 </br> 
PE Phone (0051-1) 7173350 Ax. 1602 </br>
Skype ID: ${skypeId} </br>
http://www.belatrixsf.com </br>
</br>
</br>
</br>
</br>
WARNING OF CONFIDENTIALITY: The information contained and transmitted here is CONFIDENTIAL and it is for exclusive use of the addressee indicated above, and for his/her specific use. If you are not the addressee, we apologize for any inconvenience. It is hereby notified that it is prohibited to revise, retransmit or broadcast or any other type of use of the information contained herein by people who are not the original addressee. If you have received this information by mistake, please contact the sender and eliminate the information contained here from all computers.
</br>
</br>
AVISO DE CONFIDENCIALIDAD: La información aquí contenida y transmitida es CONFIDENCIAL, para uso exclusivo del destinatario arriba indicado y para su utilización específica. Si usted no es el destinatario, sepa disculpar la molestia. Se le notifica por el presente que está prohibida su revisión, retransmisión, difusión, y/o cualquier otro tipo de uso de la información contenida por personas extrañas al destinatario original. Si Ud. Ha recibido por error esta información, por favor contacte al remitente y elimine la información aquí contenida de toda computadora donde resida.
`;
  }
}

Form.propTypes = {};
