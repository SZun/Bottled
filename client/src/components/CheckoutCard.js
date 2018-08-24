import React from 'react';
import { Col, Button, Icon } from 'react-materialize';

const CheckoutCard = ({
  s,
  name,
  description,
  onClick,
  right,
  left,
  isCheckout
}) => (
  <Col s={s}>
    <div className="card">
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        {isCheckout ? (
          <Button className="red" onClick={onClick}>
            <Icon right={right} left={left}>
              delete_forever
            </Icon>
          </Button>
        ) : null}
      </div>
    </div>
  </Col>
);

export default CheckoutCard;
