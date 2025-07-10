import React from "react"
import type { ClassValue } from "clsx"
import { cn } from "@/lib/utils"
import { Markdown } from "@/components/ui/markdown"

interface SpellCardLayoutCellProps {
  continued?: boolean
  center?: boolean
  bold?: boolean
  smallText?: boolean
  forceSmall?: boolean
  longSpell?: boolean
  markdown?: boolean
  className?: ClassValue
  text?: string
}

export const SpellCardLayoutCell = ({
  continued = false,
  center = false,
  bold = false,
  forceSmall = false,
  markdown = false,
  className,
  text,
}: SpellCardLayoutCellProps) => {
  const textLength = text?.length ?? 0
  const font = forceSmall && textLength > 14 ? "text-xs" : "text-base"

  return (
    <div
      className={cn(
        `min-h-[15px] w-full items-center rounded-lg border-2 border-white bg-white p-1 ${font}`,
        center && "flex items-center justify-center",
        bold && "font-bold",
        continued && "relative",
        className,
      )}
    >
      {markdown ? (
        <Markdown>{text ?? ""}</Markdown>
      ) : (
        <p className={"text-center"}>{text}</p>
      )}
      {continued && (
        <div
          className={"absolute right-0 bottom-0 text-xs"}
        >{`Continued -->`}</div>
      )}
    </div>
  )
}
