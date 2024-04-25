import React from 'react';

import './Hdr.css';
import Button from './Button';
import './Button.css';

const LoginHdr = () => {
  return (
    <div>
      <nav>
        <Button id= "home"><a href="/">Home</a></Button>
      </nav>
      <div className="hdr">
        <h1>Welcome to Insight Journal!</h1>
        <img src="https://cdn-sharing.adobecc.com/composite/component/id/urn:aaid:sc:VA6C2:39695009-7121-46b3-8734-bd19afec2d5e?component_id=688be569-be5c-4412-9532-5a80b29e822b&revision=3e9df177-ad68-45e5-8a08-20ec5d1403ed&api_key=projectx_webapp&access_token=1714105502_urn%3Aaaid%3Asc%3AVA6C2%3A39695009-7121-46b3-8734-bd19afec2d5e%3Bpublic_1d23fa11f89773aa550981739dd8911fb7a151cf" alt="logo"/>
      </div>
    </div>
  );
};

export default LoginHdr;