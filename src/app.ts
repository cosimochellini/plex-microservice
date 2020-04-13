import { app, port } from '@/services/express.service';
import { getMediaContent } from '@/controllers/v1/plex.controller';

app.get('/v1/', getMediaContent);
app.get('/health', (req, res) => res.send(true));

const start = () => {

  app.listen(port, (err: any) => {
    if (err) {
      console.error(`Unable to start app. Found error: ${err.message}`);
      return;
    }
    console.info(`Example app listening on port ${port}!`);
    return;
  });
};

export {
  app,
  start,
};
