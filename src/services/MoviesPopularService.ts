import { api } from "./api/api";

export interface MovieProps {
  backdrop_path: string | undefined;
  id: string
  title: string
  overview: string
  release_date: string
}

export interface IMoviesPopularService {
  get: (page: number) => Promise<MovieProps[]>
}

export class MoviesPopularService implements IMoviesPopularService {
  async get(page: number) {
    const { data } = await api.get("movie/popular", {
      params: {
        page
      }
    })

    return data?.results
  }
}