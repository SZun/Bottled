import React from 'react';
import './Header.css';

const PageHeader = ({ text }) => (
  <div>
    <h1 className="custom-page-header">{text}</h1>
  </div>
);

export default PageHeader;
