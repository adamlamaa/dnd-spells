import React from "react"
import type { ClassValue } from "clsx"
import { cn } from "../../../../../../../lib/utils"

interface SpellCardLayoutCellProps {
  continued?: boolean
  center?: boolean
  bold?: boolean
  smallText?: boolean
  forceSmall?: boolean
  lineBreaks?: boolean
  className?: ClassValue
  text?: string
}

export const SpellCardLayoutCell = ({
  continued = false,
  center = false,
  bold = false,
  smallText = false,
  forceSmall = false,
  lineBreaks = false,
  className,
  text,
}: SpellCardLayoutCellProps) => {
  const textLength = text?.length ?? 0
  const isSmallText = smallText || (forceSmall && textLength > 15)

  return (
    <div
      className={cn(
        "min-h-[15px] w-full items-center rounded-lg border-2 border-white bg-white p-1 text-base",
        center && "flex items-center justify-center",
        bold && "font-bold",
        isSmallText && "text-xs",
        continued && "relative",
        className,
      )}
    >
      {lineBreaks ? (
        <RenderWithNewLines text={text ?? ""} />
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

const RenderWithNewLines = ({ text }: { text: string }) => {
  return (
    <p>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  )
}
