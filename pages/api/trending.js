import { apiKey, apiURI } from '../../lib/tmdb';

export default async (req, res) => {

    const result = await fetch(`${apiURI}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json();

    res.status(200).json({ list: json.results })
}
