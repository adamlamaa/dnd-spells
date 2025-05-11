import React from "react"
import type { Spell } from "../../types/spell"
import { type ClassValue } from "clsx"
import { cn } from "../../lib/utils"

interface CardProps {
  spell: Spell
}

export const Card = ({
  spell: {
    level,
    name,
    casting_time,
    range,
    duration,
    components,
    description,
  },
}: CardProps) => {
  return (
    // 1240*1754
    <div
      className={
        "flex h-[550px] w-[400px] flex-col justify-between gap-2 rounded-lg border-2 border-white bg-gray-800 p-2"
      }
    >
      <div className={"flex h-full flex-col gap-2"}>
        <div className="flex gap-2">
          <div>
            <Cell center bold className={"w-[70px]"} text={level} />
          </div>
          <Cell center bold text={name} />
        </div>
        <div className="flex gap-2">
          <Cell center forceSmall text={casting_time} />
          <Cell center forceSmall text={range} />
          <Cell center forceSmall text={duration} />
        </div>
        <Cell className={"h-full"} text={description} />
      </div>
      <p className={"flex justify-end text-white"}>{components.raw}</p>
    </div>
  )
}

const Cell = ({
  center = false,
  bold = false,
  smallText = false,
  forceSmall = false,
  className,
  text,
}: {
  center?: boolean
  bold?: boolean
  smallText?: boolean
  forceSmall?: boolean
  className?: ClassValue
  text?: string
}) => {
  const textLength = text?.length ?? 0
  const test = forceSmall && textLength > 15
  const isSmallText = smallText || (forceSmall && textLength > 15)

  console.log({ isSmallText, text })
  return (
    <p
      className={cn(
        "min-h-[45px] w-full items-center rounded-lg border-2 border-white bg-white p-1",
        center && "flex justify-center",
        bold && "font-bold",
        isSmallText && "text-xs",
        className,
      )}
    >
      {text}
    </p>
  )
}
