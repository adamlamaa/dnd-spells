import { SpellFilterSection } from "./section/spellFilterSection"
import spells from "../../spells.json"
import { SpellClasses, SpellLevels, SpellSubClass } from "@/types/spell"

interface SpellFiltersProps {
  id?: string
}

export const SpellFilters = ({}: SpellFiltersProps) => {
  return (
    <div className={"flex w-full flex-wrap gap-2"}>
      <SpellFilterSection
        title={"Level"}
        entries={SpellLevels.map((level) => ({
          key: level,
          label: level === "cantrip" ? "Cantrip" : `Level ${level}`,
        }))}
      />
      <SpellFilterSection
        title={"Class"}
        entries={Object.entries(SpellClasses).map(([key, label]) => ({
          key,
          label,
        }))}
      />
      <SpellFilterSection
        title={"Subclass"}
        entries={Object.entries(SpellSubClass).map(([key, label]) => ({
          key,
          label,
        }))}
      />
      <SpellFilterSection
        title={"Spell"}
        entries={spells.map((spell) => ({
          key: spell.name,
          label: spell.name,
        }))}
      />
    </div>
  )
}
