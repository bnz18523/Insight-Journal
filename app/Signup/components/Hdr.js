import React from 'react';

import './Hdr.css';
import Button from './Button';
import './Button.css';

const LoginHdr = () => {
  return (
    <div>
      <nav>
        <Button><a href="/">Home</a></Button>
      </nav>
      <div className="hdr">
        <h1>Welcome to Insight Journal!</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpVSRKza8xRQ1sRf6NWU_JqGgFmph_2eCtA&s" alt="logo"/>
      </div>
    </div>
  );
};

export default LoginHdr;