import type { ClassValue } from "clsx"
import { cn } from "@/lib/utils"

interface TiltedCardProps {
  startRotate?: ClassValue
  backgroundColor?: ClassValue
}

export const TiltedCard = ({
  startRotate = "rotate-6",
  backgroundColor = "bg-violet-500",
}: TiltedCardProps) => {
  return (
    <div
      className={cn(
        "h-50 w-30 -rotate-6 cursor-pointer rounded-2xl bg-violet-500 transition-transform duration-300",
        "hover:z-20 hover:scale-140 hover:rotate-0 hover:shadow-lg",
        startRotate,
        backgroundColor,
      )}
    />
  )
}
