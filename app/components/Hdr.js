import React from 'react';

import './Hdr.css';
import Button from './Button';
import './Button.css';

const Hdr = () => {
  return (
    <div>
      <nav>
        <p><a href="Signup">Signup</a></p>
        <p><a href="Login">Login</a></p>
      </nav>
      <div className="hdr">
        <h1>Insight Journal</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpVSRKza8xRQ1sRf6NWU_JqGgFmph_2eCtA&s" alt="logo"/>
      </div>
    </div>
  );
};

export default Hdr;