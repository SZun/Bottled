import React from 'react';
import { Col } from 'react-materialize';
import Button from './Button';

const ReviewCard = ({
  image,
  description,
  beerName,
  onClick,
  onChange,
  name,
  value
}) => (
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
              {beerName}
            </strong>
          </h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <textarea
            onChange={onChange}
            name={name}
            value={value}
            placeholder="Comment..."
            type="text"
          />
          <Button iconName="message" large right onClick={onClick}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  </Col>
);

export default ReviewCard;
