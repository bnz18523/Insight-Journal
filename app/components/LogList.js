import React from 'react';
import Log from './Log'; 
import './LogList.css'; 
import Card from './Card';

const LogList = (props) => {
    const {logs} = props;
    return (
        <ul>
            <Card className="users">
                {logs.map(log => (
                    <Log
                        key={log.id}
                        id={log.id}
                        name={log.name}
                        date={log.date}
                        img={log.img}
                        description={log.description}
                    />
                ))}
            </Card>
            </ul>
    );
};

export default LogList;