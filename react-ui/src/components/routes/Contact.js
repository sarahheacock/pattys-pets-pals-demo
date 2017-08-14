import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../buttons/EditButton';


const Contact = (props) => {
  const content = (arr) => {
    return arr.map((p, i) => {
      return <div key={`${i}${p.charAt(0)}contact`}>{
        (p.includes("fa")) ?
          <h3><EditButton
            user={{}}
            updateState={props.updateState}
            dataObj={{}}
            title="Send Message"
            route="contact"
          /></h3> :
          <h4>{p}</h4>}</div>
    });
  }

  return (
    <div className="content text-center">
      <h3 className="pretty">{'Would you like to reach me?'}</h3>
      <EditButton
        user={props.user}
        updateState={props.updateState}
        dataObj={{p1: props.data.p1}}
        title="Edit"
        route="contact"
      />
      {content(props.data.p1.split('\n'))}
      {content(props.data.p2)}
    </div>
  );
}

export default Contact;

Contact.propsTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}
