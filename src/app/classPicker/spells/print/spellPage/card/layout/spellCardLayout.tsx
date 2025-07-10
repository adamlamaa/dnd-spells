import type { Spell } from "@/types/spell"
import { cn } from "@/lib/utils"
import React from "react"
import { SpellCardLayoutCell } from "./cell/spellCardLayoutCell"

type CardLayoutPropSpell = Pick<Spell, "name" | "description"> &
  Partial<Omit<Spell, "name" | "description">>

interface SpellCardLayoutProps {
  spell: CardLayoutPropSpell
  text: string
  index: number
}
export const SpellCardLayout = ({
  spell,
  text,
  index,
}: SpellCardLayoutProps) => {
  const mainCard = index === 0
  const spellName =
    !mainCard && spell.description.length > 2
      ? `${spell.name} (${index + 1})`
      : spell.name

  return (
    <div
      className={
        "flex h-[360px] flex-col justify-between gap-2 rounded-lg border-2 border-white bg-gray-800 p-2"
      }
    >
      <div className={"flex h-full flex-col gap-2"}>
        <div className={cn("flex", mainCard && "gap-2")}>
          <div className={"flex-1"}>
            {mainCard && <SpellCardLayoutCell center bold text={spell.level} />}
          </div>
          <SpellCardLayoutCell
            center
            bold
            className={mainCard ? "flex-[2]" : undefined}
            text={spellName}
          />
        </div>
        {mainCard ? (
          <div className="flex max-h-6 gap-2">
            <SpellCardLayoutCell center forceSmall text={spell.casting_time} />
            <SpellCardLayoutCell center forceSmall text={spell.range} />
            <SpellCardLayoutCell center forceSmall text={spell.duration} />
          </div>
        ) : null}
        <SpellCardLayoutCell
          markdown
          className={"h-full px-2"}
          text={evaluateCardText({ spell, text, index })}
          continued={index + 1 < spell.description.length}
        />
      </div>
      {mainCard && spell.components && (
        <p className={"flex justify-end text-right text-xs text-white"}>
          {spell.components.raw}
        </p>
      )}
    </div>
  )
}

const evaluateCardText = ({
  spell,
  text,
  index,
}: {
  spell: CardLayoutPropSpell
  text: string
  index: number
}) => {
  if (index + 1 === spell.description.length && spell.higher_levels)
    return atHigherLevels(text, spell.higher_levels)
  return text
}

const atHigherLevels = (description: string, higherLevel: string) => {
  const higherLevelText = `At Higher Levels: ${higherLevel}`
  if (description === "") return higherLevelText
  return `${description}\n\n${higherLevelText}`
}
