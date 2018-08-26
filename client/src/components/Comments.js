import React from 'react';
import { Card, Col, Button, Icon } from 'react-materialize';

const Comments = ({ name, isUser, comment, onClick }) => {
  return (
    <div>
      <Col s={12}>
        <Card>
          <div className="card-title">
            <p style={{ textDecoration: 'underline', color: '#000' }}>
              {/* maybe add float left */}
              <strong>{name}</strong>
            </p>
          </div>{' '}
          <div className="card-content">
            <p>{comment}</p>
          </div>
          {isUser === true ? (
            <Button className="red" onClick={onClick}>
              <Icon>delete_forever</Icon>
            </Button>
          ) : null}
        </Card>
      </Col>
    </div>
  );
};

export default Comments;
