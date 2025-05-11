import React from "react"
import type { Spell } from "../../types/spell"
import { type ClassValue } from "clsx"
import { cn } from "../../lib/utils"

interface CardProps {
  spell: Spell
}

export const Card = ({ spell }: CardProps) => {
  if (!spell.description_continued) {
    return <CardLayout spell={spell} />
  }

  return (
    <>
      <CardLayout spell={spell} continued={true} />
      <CardLayout
        spell={{
          name: spell.name,
          description: spell.description_continued,
        }}
      />
    </>
  )
}

type CardLayoutPropSpell = Pick<Spell, "name" | "description"> &
  Partial<Omit<Spell, "name" | "description">>

interface CardLayoutProps {
  spell: CardLayoutPropSpell
  continued?: boolean
}
const CardLayout = ({ spell, continued }: CardLayoutProps) => {
  // 1240*1754
  return (
    <div
      className={
        "flex h-[550px] w-[400px] flex-col justify-between gap-2 rounded-lg border-2 border-white bg-gray-800 p-2"
      }
    >
      <div className={"flex h-full flex-col gap-2"}>
        <div className={cn("flex", spell.level && "gap-2")}>
          <div>
            {spell.level && (
              <Cell center bold className={"w-[70px]"} text={spell.level} />
            )}
          </div>
          <Cell center bold text={spell.name} />
        </div>
        {spell.casting_time || spell.range || spell.duration ? (
          <div className="flex gap-2">
            <Cell center forceSmall text={spell.casting_time} />
            <Cell center forceSmall text={spell.range} />
            <Cell center forceSmall text={spell.duration} />
          </div>
        ) : null}
        <Cell
          className={"h-full"}
          text={spell.description}
          continued={continued}
        />
      </div>
      {spell.components && (
        <p className={"flex justify-end text-white"}>
          {spell.description.length} {spell.components.raw}
        </p>
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

const Cell = ({
  continued = false,
  center = false,
  bold = false,
  smallText = false,
  forceSmall = false,
  className,
  text,
}: {
  continued?: boolean
  center?: boolean
  bold?: boolean
  smallText?: boolean
  forceSmall?: boolean
  className?: ClassValue
  text?: string
}) => {
  const textLength = text?.length ?? 0
  const isSmallText = smallText || (forceSmall && textLength > 15)

  return (
    <div
      className={cn(
        "min-h-[45px] w-full items-center rounded-lg border-2 border-white bg-white p-1",
        center && "flex justify-center",
        bold && "font-bold",
        isSmallText && "text-xs",
        continued && "relative",
        className,
      )}
    >
      <RenderWithNewLines text={text ?? ""} />
      {continued && (
        <div className={"absolute right-0 bottom-0"}>{`Continued -->`}</div>
      )}
    </div>
  )
}
