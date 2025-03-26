import { useInfinityScroll } from "@/hooks/useInfinityScroll";
import { IMoviesPopularService } from "@/services/MoviesPopularService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type UseMoviesModelProps = {
  moviesPopularService: IMoviesPopularService
}
export const useMoviesModel = ({ moviesPopularService }: UseMoviesModelProps) => {
  const queryKey = useMemo(() => ["getMovies"], []);

  
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => moviesPopularService.get(pageParam),
    getNextPageParam: (_, allPages) => {
      const nextPage = allPages.length + 1;

      return nextPage;
    },
    initialPageParam: 1,
  });
  

  useInfinityScroll({ fetchNextPage, hasNextPage: hasNextPage, isFetchingNextPage})

  return {
    data: data?.pages.flatMap(item => item),
    isLoading: isFetchingNextPage,
  }
}