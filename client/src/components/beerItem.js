import React from 'react';
import { Col, Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';

const BeerItem = props => (
  <Col m={7} s={12}>
    <Card
      horizontal
      header={<CardTitle image={props.image} />}
      actions={[<Link to={props.to}>{props.link}</Link>]}
    >
      <p>{props.description}</p>
    </Card>
  </Col>
);

export default BeerItem;
