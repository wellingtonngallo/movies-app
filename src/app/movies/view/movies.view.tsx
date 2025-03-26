import { MovieProps } from "@/services/MoviesPopularService"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography
} from "@mui/material"
import Image from "next/image"
import { format } from "date-fns"

interface TrendingViewProps {
  data?: MovieProps[]
  isLoading: boolean
}
export default function MoviesView({ data, isLoading }: TrendingViewProps) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((movie: MovieProps) => {
          return (
            <Card sx={{ maxWidth: 300 }} key={movie.id + Date.now()}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={"xxx"}
                width={300}
                height={450}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Data de lancamento
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {format(
                    new Date(`${movie.release_date}T00:00:00`),
                    "dd/MM/yyyy"
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Leia mais</Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            width: "100%"
          }}
        >
          <CircularProgress size={40} />
        </Box>
      )}
    </>
  )
}
