import type { ClassValue } from "clsx"
import { cn } from "@/lib/utils"

interface TiltedCardProps {
  startRotate?: ClassValue
  children?: React.ReactNode
}

export const TiltedCard = ({
  startRotate = "rotate-6",
  children,
}: TiltedCardProps) => {
  return (
    <div
      className={cn(
        "-rotate-6 cursor-pointer rounded-2xl bg-violet-500 transition-transform duration-300",
        "hover:z-20 hover:scale-130 hover:rotate-0 hover:shadow-lg",
        startRotate,
      )}
    >
      {children}
    </div>
  )
}
