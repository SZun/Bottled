import React from 'react';
import { Col, Button, Icon, Row } from 'react-materialize';

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
          <Row>
            <Col s={3}>
              <Button waves="light" className="red" onClick={onClick}>
                <Icon right={right} left={left}>
                  delete_forever
                </Icon>
              </Button>
            </Col>
            <Col s={3}>
              <strong>Price: </strong>
              $4.99
            </Col>
            <Col s={3}>
              <strong>Quantity: </strong>1
            </Col>
            <Col s={3}>
              <strong>Shipping Status: </strong>
              Not Shipped
            </Col>
          </Row>
        ) : (
          <Row
            style={{
              textAlign: 'center'
            }}
          >
            <Col s={4}>
              <strong>Price: </strong>
              $4.99
            </Col>
            <Col s={4}>
              <strong>Quantity: </strong>1
            </Col>
            <Col s={4}>
              <strong>Shipping Status: </strong>
              Shipped
            </Col>
          </Row>
        )}
      </div>
    </div>
  </Col>
);

export default CheckoutCard;
