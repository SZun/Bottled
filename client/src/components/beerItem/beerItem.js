import React from 'react';
import { Col } from 'react-materialize';
import { Button, Icon } from 'react-materialize';
import './beerItem.css';

const BeerItem = ({ image, description, name, onClick }) => (
  <Col s={3}>
    <div className="card horizontal beerImg">
      <div className="card-image">
        <img src={image} alt="beer" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>
            <strong
              style={{
                textAlign: 'center',
                textDecoration: 'underline'
              }}
            >
              {name}
            </strong>
          </h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Button onClick={onClick} className="z-depth-3 light-blue accent-2">
            <Icon>add</Icon>
          </Button>
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
        </div>
      </div>
    </div>
  </Col>
);

export default BeerItem;
