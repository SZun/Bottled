import React from 'react';
import { Col } from 'react-materialize';
import Button from './Button';

const BeerItem = ({ image, description, name, onClick, onChange }) => (
  <Col s={12}>
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
          <textarea onChange={onChange} />
          <Button iconName="message" large right onClick={onClick}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  </Col>
);

export default BeerItem;
