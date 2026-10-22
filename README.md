# plex-microservice (archived)

This service is retired and the repository is read-only.

It exposed one endpoint, `GET /v1/?type=<section>`, returning the titles of a Plex library section. That job now lives inside [cosimochellini/plex](https://github.com/cosimochellini/plex) as the session-protected API route [`pages/api/contents.ts`](https://github.com/cosimochellini/plex/blob/main/pages/api/contents.ts) (movies and TV), so no separate service is needed.

The Heroku app it was deployed to (`plexservice`) no longer exists.
