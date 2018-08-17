import React from 'react';
import { Row, Input } from 'react-materialize';

class SignIn extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am editable" />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
        </Row>
      </div>
    );
  }
}
export default SignIn;
