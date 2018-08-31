import React from 'react';
import { Col } from 'react-materialize';
import { Button, Icon } from 'react-materialize';
import './beerItem.css';

const BeerItem = ({ image, description, name, onClick, onReview }) => (
  <Col s={4}>
    <div className="card horizontal beerImg">
      <div className="card-image">
        <img src={image} alt="beer" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h6
            style={{
              lineHeight: '1.2em',
              fontSize: '1.2em',
              paddingBottom: '10%',
              fontWeight: 'bold',
              textAlign: 'center',
              textDecoration: 'underline'
            }}
          >
            {name}
          </h6>
          <p
            style={{
              marginTop: '-5%'
            }}
          >
            {description}
          </p>
        </div>
        <div className="card-action">
          <p>
            <strong
              style={{
                color: '#FF0000'
              }}
            >
              <i>SALE: </i>
            </strong>
            $4.99
          </p>
          <div className="flex">
            <Button
              onClick={onClick}
              className="z-depth-3 light-blue accent-2 flex-child"
              style={{
                float: 'left'
              }}
            >
              <Icon>add</Icon>
            </Button>
            <Button onClick={onReview} className="z-depth-3 amber flex-child">
              Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Col>
);

export default BeerItem;
