import { useEffect, useState } from "react"

// Used to determine if the viewport is at least 768px wide
// In order to determine the border direction for grids
export const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const handler = (e: MediaQueryListEvent) => setIsMdUp(e.matches)
    setIsMdUp(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return isMdUp
}
