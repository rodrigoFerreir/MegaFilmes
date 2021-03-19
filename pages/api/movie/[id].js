import { apiKey, apiURI } from '../../../lib/tmdb';

export default async (req, res) => {

    const id = req.query.id

    const result = await fetch(`${apiURI}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json();

    res.status(200).json({ list: json })
}