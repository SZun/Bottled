import React from 'react';
import { Col, Icon } from 'react-materialize';

const Rating = ({ iconName }) => (
  <Col s={1}>
    <Icon>{iconName}</Icon>
  </Col>
);

export default Rating;
