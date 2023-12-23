import React, { useState, useEffect } from 'react';

export const App = () => {
    const [timesClicked, setClicked] = useState(5);
    useEffect(() => {
        setTimeout(() => setClicked(timesClicked + 10), 0);
    }, []);
    return (
        <html>
            <head>
                <title>SSR Experiments</title>
            </head>
            <body>
                <div>
                    <button onClick={() => { setClicked(timesClicked + 1); }}>You have clicked {timesClicked} times</button> 
                </div>
            </body>
        </html>
    );
};