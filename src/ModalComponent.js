import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import CopyContentButton from './CopyContentButton';
import Materialize from 'materialize-css';
import {presentNumbers} from './CopyContentButton'
class ModalComponent extends Component {
  
  handleClose = () => {
    const buttonMaterializeInstance = Materialize.Modal.getInstance(this.props.forwardedRef.current);
    buttonMaterializeInstance.close();
    window.location.reload();
    window.scrollTo(0, 0)
  };

  render() {
    return (
      <div id="modal1" className="modal" ref={this.props.forwardedRef}>
        <div className="modal-content">
          <img id="img-confirm" src={require('./images/confirmation.png')} alt="" />
          <button onClick={this.handleClose} id="img-close">
            <img src={require('./images/close.png')} alt="" />
          </button>
          <h2 className="signature-generated">Signature Generated</h2>
          <h4 className="subtitle">
            Just copy the information below to add it to your email
          </h4>
        </div>
        <div className="modal-footer">
          <div className="footer-cage">
            <div className="footer-cage-text">
              <p>Aca aparecerá el preview de la firma !</p>
          
            </div>
          </div>

          <div>
            <CopyContentButton userData={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ModalComponent {...props} forwardedRef={ref} />
));
