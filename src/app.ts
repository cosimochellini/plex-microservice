import { app, port } from "@/services/express.service";
import { getMediaContent } from "@/controllers/v1/plex.controller";

app.get("/v1/", getMediaContent);
app.get("/health", (req, res) => res.send(true));

const start = () => {
  app.listen(port, () => {
    console.info(`Example app listening on port ${port}!`);
    return;
  });
};

export { app, start };
