import React from 'react';
import PropTypes from 'prop-types';

import { blogID, messageData, loginData, editData, rateData } from '../../../../data/data';


const EditButton = (props) => {

  //=====STYLE OF BUTTON DEPENDING ON BUTTON TITLE====================================================
  const style = (props.title.includes("Edit")) ?
    "button orangeButton":
    ((props.title.includes("Add") || props.title.includes("Login")) ?
      "button blueButton":
      ((props.title.includes("Delete")) ?
        "button redButton":
        "button"));


  //=====DETERMINE NEXT AND MODAL-TITLE FROM PAGE-SECTION==========================================
  const adminAuth = props.title === "Add" || props.title === "Edit" || props.title === "Delete";

  //NEED if launching modal
  const modalTitle = (adminAuth) ? `${props.title} Service` : props.title;
  let url = '';
  let dataObj = {};
  let message = '';


  //====admin page editting==============
  //props.dataObj will be the selected data point
  if(!(!props.user.token) && adminAuth){

    let result = {};
    if(props.title === "Edit" || props.title === "Add"){
      const formData = (props.dataObj.p1 !== undefined) ? editData : rateData;
      Object.keys(formData).forEach((key) => {
        if(props.title === "Edit") result[key] = props.dataObj[key]; //copy object
        else if(props.title === "Add") result[key] = ''; //initialize to undefined
      });
    }
    else if(props.title === "Delete"){ //only possible in publications and news
      result._id = props.dataObj._id;
    }

    dataObj = Object.assign({}, result);

    if(props.title === "Delete") url = `/page/${blogID}/${props.route}/${props.dataObj._id}?token=${props.user.token}`;
    else if(props.title === "Add") url = `/page/${blogID}/${props.route}?token=${props.user.token}`;
    else if(props.title === "Edit" && props.dataObj.p1 !== undefined) url = `/page/${blogID}/${props.route}?token=${props.user.token}`;
    else if(props.title === "Edit" && props.dataObj.p1 === undefined) url = `/page/${blogID}/${props.route}/${props.dataObj._id}?token=${props.user.token}`;
  }
  else if(props.title.includes("Login")) {
    Object.keys(loginData).forEach((k) => dataObj[k] = '');
    url = "/login";
  }
  else if(props.title.includes("Send Message")){
    Object.keys(messageData).forEach((k) => dataObj[k] = '');
    url = "/sayHello";
  }



  //====THE ACTUAL BUTTON=====================================================

  const content = {
    message: message,
    edit: {
      modalTitle,
      url,
      dataObj
    }
  };


  //page editing buttons are hidden
  //if we are not updating edit, then navLink to next page
  //...otherwise wait
  const button = (!props.user.token && adminAuth) ?
    <div></div> :
    ((modalTitle === "Send Message") ?
      <a href="#" onClick={(e) => { if(e) e.preventDefault(); props.updateState(content); }}>
        <i className="fa fa-envelope env" aria-hidden="true"></i>
      </a> :
      ((modalTitle === "Login") ?
        <a href="#" onClick={(e) => {
          if(e) e.preventDefault();
          props.updateState(content);
        }} >
          <span className="brand"><i className="fa fa-paw large-icon" aria-hidden="true"></i>
            {"Patty's Pet Pals  "}<span className="smallbrand">{"LLC"}</span>
          </span>
        </a> :
        <button className={style} onClick={(e) => { if(e) e.preventDefault(); props.updateState(content); }}>
          {props.title}
        </button>)
      )

  return ( button );
}


export default EditButton;

EditButton.propTypes = {
  user: PropTypes.object.isRequired,
  dataObj: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};
