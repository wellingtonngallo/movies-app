import { MovieDetails } from "@/services/MovieDetailService"
import { formatRuntime } from "@/utils/formatRuntime"
import { Divider, Typography } from "@mui/material"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Image from "next/image"
import Link from "next/link"

export const MovieDetailView = (movie: MovieDetails) => {
  return (
    <div className="flex gap-6">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={"xxx"}
        width={300}
        height={450}
      />
      <div className="flex flex-col gap-6">
        <div>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: 700, fontSize: 24 }}
          >
            {movie.title}
          </Typography>
          <div className="flex gap-4">
            <ul className="flex gap-4 list-disc list-inside">
              {movie.genres.map((item) => {
                return <li key={item.id}>{item.name}</li>
              })}
            </ul>
            <Divider orientation="vertical" flexItem />
            <span>{formatRuntime(movie.runtime)}</span>
          </div>
        </div>
        <div>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: 700, fontSize: 20 }}
          >
            Sinopse
          </Typography>
          <p>{movie.overview}</p>
        </div>
      </div>
      <Link href="/movies" passHref>
        <Button startIcon={<ArrowBackIcon />} variant="outlined">
          Voltar
        </Button>
      </Link>
    </div>
  )
}
