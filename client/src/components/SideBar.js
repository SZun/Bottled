import React from 'react';
import Radio from './Radio';
import { Col } from 'react-materialize';

const SideBar = () => {
  const preferences = ['this', 'is', 'a', 'test', 'of', 'the', 'thingy'];
  const radioButtons = preferences.map(radio => (
    <Radio key={radio}>{radio}</Radio>
  ));
  return (
    <Col s={3}>
      <div
        className="z-depth-3 light-blue accent-2"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginTop: '20px'
        }}
      >
        <h4
          style={{
            color: '#FFF',
            textDecoration: 'underline',
            textAlign: 'center'
          }}
        >
          Filter
        </h4>
        {radioButtons}
      </div>
    </Col>
  );
};

export default SideBar;
