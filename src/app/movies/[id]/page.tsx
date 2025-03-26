import { notFound } from "next/navigation"
import { MovieDetailService } from "@/services/MovieDetailService"
import { MovieDetailView } from "./view/movieDetail.view"

type MovieDetailsPageProps = {
  params: {
    id: number
  }
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { id } = await params

  const movieDetailService = new MovieDetailService()
  try {
    const movie = await movieDetailService.get(id)

    if (!movie) {
      notFound()
    }

    return <MovieDetailView {...movie} />
  } catch {
    notFound()
  }
}

export default MovieDetailsPage
