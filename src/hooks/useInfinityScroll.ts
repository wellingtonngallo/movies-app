import { useEffect } from "react"
import { useDebounce } from "./useDebounce"

const LIMIT_OF_PX = 100

interface UseInfinityScrollProps {
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
}

export const useInfinityScroll = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: UseInfinityScrollProps) => {
  const debouncedHandleScroll = useDebounce(() => {
    const scrolled = window.innerHeight + window.scrollY >= document.body.offsetHeight - LIMIT_OF_PX

    if (scrolled && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll)

    return () => window.removeEventListener("scroll", debouncedHandleScroll)
  }, [debouncedHandleScroll, fetchNextPage, hasNextPage, isFetchingNextPage])
}