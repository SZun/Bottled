import React from 'react';
import { Card, Col, Button, Icon, Row } from 'react-materialize';
import moment from 'moment';

const Comments = ({ name, date, comment, isUser, onClick }) => {
  return (
    <div>
      <Col s={12}>
        <Card>
          <div className="card-title">
            <Row>
              <Col s={2}>
                <p style={{ textDecoration: 'underline', color: '#000' }}>
                  {/* maybe add float left */}
                  <strong>{name}</strong>
                </p>
              </Col>
              <Col s={2}>
                <p>{moment(date).format('MM-DD-YYYY')}</p>
              </Col>
            </Row>
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
