import { api } from "./api/api";

export interface MovieDetails {
  backdrop_path: string
  genres: [ { id: number, name: string }, { id: number, name: string } ],
  overview: string
  popularity: number
  poster_path:string
  vote_average: number,
  vote_count: number
  runtime: number
  title: string
}
export interface IMovieDetailService {
  get: (id: string) => Promise<MovieDetails[]>
}

export class MovieDetailService implements IMovieDetailService {
  async get(id: string) {
    const { data } = await api.get(`movie/${id}`)

    return data
  }
}