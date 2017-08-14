import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../buttons/EditButton';

import { Col, Row } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import { cloudName } from '../../../../data/data';


const Home = (props) => {

  return (
    <div>

      <div className="content">
        <h3 className="pretty text-center">{"Hello, my name is Patty..."}</h3>
        <div className="row-content">
          <Row className="clearfix">
            <Col sm={4}>
              <Image
                cloudName={cloudName}
                publicId={props.data.image}
                width="200"
                radius="20"
                crop="scale"/>
            </Col>
            <Col sm={8}>
              {props.data.p1.split('\n').map((p, i) => <h4 key={`${i}home`} className="text-center">{p}</h4>)}
              <div className="text-center">
              <EditButton
                user={props.user}
                updateState={props.updateState}
                dataObj={{p1: props.data.p1}}
                title="Edit"
                route="home"
              />
              </div>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  );
}

export default Home;

Home.propsTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}
