import React from "react"
import type { ClassValue } from "clsx"
import { cn } from "@/lib/utils"
import { Markdown } from "@/components/ui/markdown"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

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
  const { settings } = useSpellStore(
    useShallow((state) => ({
      settings: state.settings,
    })),
  )

  const textLength = text?.length ?? 0
  const font = forceSmall && textLength > 14 ? "text-xs" : "text-base"

  return (
    <div
      style={{
        backgroundColor: settings.spellCardTextBackgroundColor,
        borderColor: settings.spellCardTextBackgroundColor,
        color: settings.spellCardTextColor,
      }}
      className={cn(
        `min-h-[15px] w-full items-center rounded-lg border-2 p-1 ${font}`,
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
