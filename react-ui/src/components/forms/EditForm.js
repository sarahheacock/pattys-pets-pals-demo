import React from 'react';
import PropTypes from 'prop-types';

import { Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import SubmitButtonSet from '../buttons/SubmitButtonSet';
import { messageData, loginData, editData, notRequired, rateData, messages } from '../../../../data/data';



const upper = (label) => {
  const required = notRequired.reduce((c, d) => { return c || label === d }, false);
  if(!required) return `${label.charAt(0).toUpperCase()}${label.slice(1)}*`;
  else return `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
};

const EditForm = (props) => {

  const check = (k) => {
    if(props.message === messages.inputError && !props.edit.dataObj[k]){
      return 'warning';
    }
    if(props.message === messages.emailError && k === "email"){
      return 'warning';
    }
    if(props.message === messages.phoneError && k === "phone"){
      return 'warning';
    }
    return null;
  }

  //======ALL OF THE FORM GROUPS===================================
  const formObj = {...messageData, ...loginData, ...editData, ...rateData};

  // console.log(Object.keys(props.edit.dataObj));
  const formGroups = (props.edit.modalTitle.includes("Delete")) ?
    <div className="text-center">Are you sure you want to delete this service?</div>:
    Object.keys(props.edit.dataObj).map(k =>
      (!formObj[k]) ?
        <div></div>:
        <FormGroup key={k} validationState={check(k)}>
          <ControlLabel>{upper(k)}</ControlLabel>
          <FormControl
             name={k}
             type={formObj[k]["type"]}
             placeholder={formObj[k]["placeholder"]}
             componentClass={formObj[k]["componentClass"]}
             value={props.edit.dataObj[k]}
             onChange={props.formChange}
           />
        </FormGroup>
    );


  //============================================================

  return (
    <Form className="content">
      {formGroups}
      <div className="text-center">
        <SubmitButtonSet
          editData={props.editData}
          updateState={props.updateState}

          message={props.message}
          user={props.user}
          edit={props.edit}
        />
      </div>
    </Form>
  );
}


export default EditForm;

EditForm.propTypes = {
  formChange: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,

  message: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  edit: PropTypes.object.isRequired,
};
