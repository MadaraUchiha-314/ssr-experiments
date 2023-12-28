import React from 'react';
import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';

import { App } from '../app/app';

const app = express();
const port = 3000;

app.use(express.static('./react/dist', {
    setHeaders: (res) => {
        res.set('Content-Type', 'text/javascript')
    }
}));

app.get('/', (req, res) => {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapModules: ['/client.mjs'],
        onShellReady() {
            res.setHeader('content-type', 'text/html');
            pipe(res);
        },
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});