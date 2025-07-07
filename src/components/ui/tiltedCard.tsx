import type { ClassValue } from "clsx"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TiltedCardProps {
  startRotate?: ClassValue
  backgroundColor?: ClassValue
  children?: ReactNode
}

export const TiltedCard = ({
  startRotate = "rotate-6",
  backgroundColor = "bg-violet-600",
  children,
}: TiltedCardProps) => {
  return (
    <div
      className={cn(
        "-rotate-6 cursor-pointer rounded-2xl transition-transform duration-300",
        "hover:z-20 hover:scale-130 hover:rotate-0 hover:shadow-lg",
        startRotate,
        backgroundColor,
      )}
    >
      {children}
    </div>
  )
}
