import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useAppQuery = (paramName: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get(paramName)

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const setQuery = (value: string) => {
    router.push(pathname + "?" + createQueryString(paramName, value), {
      scroll: false,
    })
  }

  return [query, setQuery] as const
}
