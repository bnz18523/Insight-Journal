import React from 'react';

import './Log.css';
import './LogList';

const Log = props => {

    return (    
        <li key={props.id} className="log-item">
        <img src={props.img} className="log-img" alt={props.name} />
        <div className="log-info">
            <h2>{props.name}</h2>
            <h3>Date: {props.date} </h3>
            <p className="log-content">Description: {props.description}</p>
        </div>
        </li>
    )
}

export default Log;
