import * as cors from 'cors';
import * as express from 'express';

export const app = express(cors());

/* istanbul ignore next */
app.get('/', (req, res) => {
  const value = req.query.value;

  const response: HelloWorldResponse = { message: 'Hello World!' + value };
  res.send(response);
});

/**
* Start the express application.
*
* @param port The port to listen to.
*/
export function start() {
  const port = process.env.PORT || '5000';

  app.listen(port, (err: any) => {
    if (err) {
      console.error(`Unable to start app. Found error: ${err.message}`);
      return;
    }
    console.info(`Example app listening on port ${port}!`);
    return;
  });
}
