import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';
import { initialMessage, initialEdit, initialUser, messages } from '../../../../data/data';

import AlertMessage from './AlertMessage';
import EditButton from './EditButton';


//SUBMIT ADMIN EDITTING, USER PROFILE EDIT, CREATE USER, RESERVE, AND CANCEL RESERVATION
class SubmitButtonSet extends React.Component {
  static propTypes = {
    editData: PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,

    message: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    edit: PropTypes.object.isRequired,
  }


  pop = (e) => {
    e.preventDefault();
    this.props.updateState({
      edit: initialEdit,
      message: initialMessage
    });
  }

  logout = (e) => {
    e.preventDefault();
    this.props.updateState({
      edit: initialEdit,
      message: initialMessage,
      user: initialUser,
    });
  }


  submit = (e) => {
    e.preventDefault();

    const edit = this.props.edit;
    if(edit.modalTitle.includes("Delete")) this.props.editData(edit.url);
    else this.props.editData(edit.url, edit.dataObj);
  }


  render(){
    const edit = this.props.edit;
    const style = (edit.modalTitle.includes("Edit")) ?
      "button orangeButton":
      ((edit.modalTitle.includes("Add") || edit.modalTitle.includes("Login") || edit.modalTitle.includes("Send")) ?
        "button blueButton":
        ((edit.modalTitle.includes("Delete")) ?
          "button redButton":
          "button"));

    return (
      <div className="text-center">
        <AlertMessage
          message={this.props.message}
        />
        {
          (this.props.message !== messages.expError) ?
            <div>
              <button className={style} onClick={this.submit}>
                {edit.modalTitle.replace(' Service', '').replace('Message', '')}
                {(edit.modalTitle).includes('Send') ?
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>:
                  <span></span>
                }
              </button>
              <button className="button" onClick={this.pop}>
                {(this.props.message === messages.messageSent) ? "Close" : "Cancel"}
              </button>
            </div> :
            <div>
              <EditButton
                user={this.props.user}
                updateState={this.props.updateState}
                dataObj={{}}
                title="Login "
              />
              <button className="button" onClick={this.logout}>
                Close
              </button>
            </div>
        }
      </div>
    );
  }
}


export default SubmitButtonSet;
