import type { ClassValue } from "clsx"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface glossyBoxProps {
  className?: ClassValue
  children: ReactNode
}

export const GlossyBox = ({ className, children }: glossyBoxProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-purple-400/20 bg-purple-400/30 p-4 shadow-lg backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
