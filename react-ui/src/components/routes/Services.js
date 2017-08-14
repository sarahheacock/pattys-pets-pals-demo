import React from 'react';
import PropTypes from 'prop-types';

const Services = (props) => {

  const contentService = (key) => (
    <div className="content">
      <h3 className="pretty text-center">{key}</h3>
      <div className="flex-container">
        {(Object.keys(props.data[key])).map((s) => (
          <div className="service text-center" key={s}>
            <h4>{s}</h4>
            <h3><i className={props.data[key][s]} aria-hidden="true"></i></h3>
          </div>
        ))}
      </div>
    </div>
  );

  const areaContent = (props.data["Areas Serviced"]).map((a) => (
    <h4 key={a} className="text-center">{a}</h4>
  ));


  return (
    <div>
      <div className="content">
        <h3 className="pretty text-center">{"Areas Serviced"}</h3>
        <div>{areaContent}</div>
      </div>
        <div>{contentService("Pet Services Provided")}</div>
        <div>{contentService("Other Services if on Vacation")}</div>
    </div>
  );
}

export default Services;

Services.propTypes = {
  data: PropTypes.object.isRequired
}
