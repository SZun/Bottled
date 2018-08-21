import React from 'react';
import { Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const BeerItem = ({ image, description, link }) => (
  <Col s={3}>
    <div class="card horizontal">
      <div class="card-image">
        <img src={image} alt="beer" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{description}</p>
        </div>
        <div class="card-action">
          <Link to={link}>Buy Now</Link>
        </div>
      </div>
    </div>
  </Col>
);

export default BeerItem;
