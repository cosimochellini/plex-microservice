import { app, port } from '@/services/express.service';

app.get('/v1/', (req, res) => {
  const value = req.query.value;

  const response: HelloWorldResponse = { message: 'Hello World! 2' + value };
  res.send(response);
});

const start = () => {

  app.listen(port, (err: any) => {
    if (err) {
      console.error(`Unable to start app. Found error: ${err.message}`);
      return;
    }
    console.info(`Example app listening on port ${port}!`);
    return;
  });
}

export {
  app,
  start
}
