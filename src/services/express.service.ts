import * as cors from 'cors';
import * as express from 'express';

const app = express();

app.use(cors());

const port: string = process.env.PORT || '5000';

export { app, port }