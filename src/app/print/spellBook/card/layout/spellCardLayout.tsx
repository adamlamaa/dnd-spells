import type { Spell } from "../../../../../types/spell"
import { cn } from "../../../../../lib/utils"
import React from "react"
import { SpellCardLayoutCell } from "./cell/spellCardLayoutCell"

type CardLayoutPropSpell = Pick<Spell, "name" | "description"> &
  Partial<Omit<Spell, "name" | "description">>

type SpellCardSide = "front" | "back"

interface SpellCardLayoutProps {
  spell: CardLayoutPropSpell
  continued?: boolean
  back?: boolean
  side: SpellCardSide
}
export const SpellCardLayout = ({ spell, side }: SpellCardLayoutProps) => {
  return (
    <div
      className={
        "flex h-[360px] flex-col justify-between gap-2 rounded-lg border-2 border-white bg-gray-800 p-2"
      }
    >
      <div className={"flex h-full flex-col gap-2"}>
        <div className={cn("flex", side === "front" && "gap-2")}>
          <div className={"flex-1"}>
            {side === "front" && (
              <SpellCardLayoutCell center bold text={spell.level} />
            )}
          </div>
          <SpellCardLayoutCell
            center
            bold
            className={side === "front" ? "flex-[2]" : undefined}
            text={spell.name}
          />
        </div>
        {side === "front" ? (
          <div className="flex gap-2">
            <SpellCardLayoutCell center forceSmall text={spell.casting_time} />
            <SpellCardLayoutCell center forceSmall text={spell.range} />
            <SpellCardLayoutCell center forceSmall text={spell.duration} />
          </div>
        ) : null}
        <SpellCardLayoutCell
          lineBreaks
          className={"h-full px-2"}
          text={getCardText({ spell, side })}
          continued={
            side === "front" && spell.description_continued !== undefined
          }
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
  side,
}: {
  spell: CardLayoutPropSpell
  side: SpellCardSide
}) => {
  if (side === "front") {
    if (!spell.description_continued && spell.higher_levels)
      return atHigherLevels(spell.description, spell.higher_levels)
    return spell.description
  } else if (side === "back" && spell.description_continued) {
    if (spell.higher_levels)
      return atHigherLevels(spell.description_continued, spell.higher_levels)
    return spell.description_continued
  }
}

const atHigherLevels = (description: string, higherLevel: string) =>
  `${description}\n\nAt Higher Levels: ${higherLevel}`
