"use client"

import { MoviesPopularService } from "@/services/MoviesPopularService"
import { useMoviesModel } from "./model/movies.model"
import TrendingView from "./view/movies.view"

const Movies = () => {
  const moviesPopularService = new MoviesPopularService()
  const props = useMoviesModel({ moviesPopularService })

  return <TrendingView {...props} />
}

export default Movies
