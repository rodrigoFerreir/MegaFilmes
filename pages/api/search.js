import { apiKey, apiURI } from '../../lib/tmdb';

export default async (req, res) => {

    const filme = req.query.filme

    const result = await fetch(`${apiURI}/search/movie?api_key=${apiKey}&language=pt-BR&query=${filme}`)
    const json = await result.json();

    res.status(200).json({ list: json.results })
}