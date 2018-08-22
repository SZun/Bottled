import React from 'react';
import { Col, Card, CardTitle, Button, Icon } from 'react-materialize';

const CheckoutCard = ({ s, title, description, onClick, right, left }) => (
  <Col s={s}>
    <Card>
      <div class="card-content white-text">
        <CardTitle>{title}</CardTitle>
        <p>{description} </p>
      </div>

      <div class="card-action" />
      {window.location.href === '/checkout' ? (
        <Button className="red" onClick={onClick}>
          <Icon right={right} left={left}>
            delete_forever
          </Icon>
        </Button>
      ) : null}
    </Card>
  </Col>
);

export default CheckoutCard;
