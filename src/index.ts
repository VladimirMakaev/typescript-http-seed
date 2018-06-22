import * as express from 'express';
import { createApp } from './app';

const port = process.env.PORT || 5000;

const app = createApp();

app.listen(port, () => console.log("Listening on port " + port));



