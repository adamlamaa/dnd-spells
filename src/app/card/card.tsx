import React from "react"
import type { Spell } from "../../types/spell"
import { type ClassValue } from "clsx"
import { cn } from "../../lib/utils"

interface CardProps {
  spell: Spell
}

export const Card = ({ spell }: CardProps) => {
  return (
    <>
      <CardLayout spell={spell} continued={!!spell.description_continued} />
      {/* Print backside if there is continued text*/}
      {spell.description_continued && <CardLayout spell={spell} back />}
    </>
  )
}

type CardLayoutPropSpell = Pick<Spell, "name" | "description"> &
  Partial<Omit<Spell, "name" | "description">>

interface CardLayoutProps {
  spell: CardLayoutPropSpell
  continued?: boolean
  back?: boolean
}
const CardLayout = ({
  spell,
  continued = false,
  back = false,
}: CardLayoutProps) => {
  const text = getCardText({ spell, continued, back })
  return (
    <div
      className={
        "flex h-[360px] flex-col justify-between gap-2 rounded-lg border-2 border-white bg-gray-800 p-2"
      }
    >
      <div className={"flex h-full flex-col gap-2"}>
        <div className={cn("flex", !back && "gap-2")}>
          <div className={"flex-1"}>
            {!back && <Cell center bold text={spell.level} />}
          </div>
          <Cell
            center
            bold
            className={!back ? "flex-[2]" : undefined}
            text={spell.name}
          />
        </div>
        {!back ? (
          <div className="flex gap-2">
            <Cell center forceSmall text={spell.casting_time} />
            <Cell center forceSmall text={spell.range} />
            <Cell center forceSmall text={spell.duration} />
          </div>
        ) : null}
        <Cell
          lineBreaks
          className={"h-full px-2"}
          text={text}
          continued={continued}
        />
      </div>
      {spell.components && (
        <p className={"flex justify-end text-xs text-white"}>
          {spell.components.raw}
        </p>
      )}
    </div>
  )
}

const getCardText = ({
  spell,
  continued = false,
  back = false,
}: CardLayoutProps) => {
  if (back) {
    if (spell.higher_levels) {
      return (
        spell.description_continued +
        "\n\nAt Higher Levels: " +
        spell.higher_levels
      )
    } else {
      return spell.description_continued
    }
  }
  if (continued) {
    return spell.description
  }
  if (!spell.higher_levels) {
    return spell.description
  }
  return spell.description + "\n\nAt Higher Levels: " + spell.higher_levels
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
  lineBreaks = false,
  className,
  text,
}: {
  continued?: boolean
  center?: boolean
  bold?: boolean
  smallText?: boolean
  forceSmall?: boolean
  lineBreaks?: boolean
  className?: ClassValue
  text?: string
}) => {
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
