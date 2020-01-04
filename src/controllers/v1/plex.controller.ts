import { Request, Response } from 'express';
import { client } from '@/services/plex.service';

const getMediaContent = async (req: Request, res: Response) => {
    try {

        const { type = 0, auth = 0 } = req.query;

        console.info(type, auth);

        const query = await client.query('/library/sections/' + type + '/all');

        const response = query.MediaContainer.Metadata;

        res.send(response);

    } catch (error) {
        console.info({ error });

        res.send({ error });
    }
};

export {
    getMediaContent
}
