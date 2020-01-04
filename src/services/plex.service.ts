import { config } from 'dotenv'
import * as PlexAPI from 'plex-api';

config();

const token: string = process.env.TOKEN || 'token';
const hostname: string = process.env.HOSTNAME || 'hostname';

const client = new PlexAPI({ hostname, token });

export { client };