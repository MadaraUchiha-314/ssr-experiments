import React, { useState, useEffect } from 'react';

export const App = () => {
    const [timesClicked, setClicked] = useState(5);
    // useEffect(() => {
    //     setTimeout(() => setClicked(10), 10);
    // }, []);
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
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