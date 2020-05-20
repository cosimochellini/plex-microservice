import { byString } from 'sort-es';
import { Request, Response } from 'express';
import { client } from '@/services/plex.service';
import { isAuthorized } from '@/services/auth.service';

const getMediaContent = async (req: Request, res: Response) => {
  try {

    const { type = 0, auth = '0' } = req.query;

    console.info(type, auth);

    if (!isAuthorized(auth.toString())) return res.send(401);

    const query: any = await client.query(`/library/sections/${type}/all`);

    const response: string[] = query.MediaContainer.Metadata
      .map((item: any) => item.title).
      sort(byString());

    res.send(response);

  } catch (error) {
    console.info({ error });

    res.send({ error });
  }
};

export {
  getMediaContent,
};
