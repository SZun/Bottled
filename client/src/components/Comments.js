import React from 'react';
import { Card, CardTitle, Col, Button, Icon } from 'react-materialize';

const Comments = ({ name, isUser, comment, onClick, right, left }) => {
  return (
    <div>
      <Col s={12}>
        <Card>
          <CardTitle>
            <p style={{ textDecoration: 'underline' }}>
              {/* maybe add float left */}
              <strong>{name}</strong>
            </p>
          </CardTitle>{' '}
          <div className="card-content">
            <p>{comment}</p>
          </div>
          {isUser ? (
            <Button className="red" onClick={onClick}>
              <Icon right={right} left={left}>
                delete_forever
              </Icon>
            </Button>
          ) : null}
        </Card>
      </Col>
    </div>
  );
};

export default Comments;
