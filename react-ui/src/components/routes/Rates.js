import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../buttons/EditButton';

const Rates = (props) => {

  const paragraphs = props.data.p1.split('\n').map((p, i) => <h4 key={`${i}rates`}><i>{p}</i></h4>);

  return (
    <div>
      <div className="text-center">
        <EditButton
          user={props.user}
          updateState={props.updateState}
          dataObj={{p1: props.data.p1}}
          title="Edit"
          route="rates"
        />
        {paragraphs}
      </div>
      <br />
      <div className="flex-container">
        {props.data.rate.map((r) =>
          <div className="content rate" key={r.title}>
            <div className="text-center">
              <h3 className="pretty">{r.title}</h3>
              <p>{r.time}</p>
              <hr />
              <h4>{`$${r.cost}`}</h4>
              <p>{r.description}</p>

              <EditButton
                user={props.user}
                updateState={props.updateState}
                dataObj={r}
                title="Edit"
                route="rates"
              />
              <EditButton
                user={props.user}
                updateState={props.updateState}
                dataObj={r}
                title="Delete"
                route="rates"
              />

            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Rates;

Rates.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}
