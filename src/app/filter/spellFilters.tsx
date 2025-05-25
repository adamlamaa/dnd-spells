import { SpellFilterSection } from "./section/spellFilterSection"
import { Checkbox } from "@/components/ui/checkbox"
import spells from "../../spells.json"
import { SpellClasses, SpellLevels, SpellSubClass } from "@/types/spell"

interface SpellFiltersProps {
  id?: string
}

export const SpellFilters = ({}: SpellFiltersProps) => {
  return (
    <div className={"flex w-full flex-wrap gap-2"}>
      <SpellFilterSection title={"Level"}>
        {SpellLevels.map((key) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox key={key} />
            {key === "cantrip" ? "Cantrip" : `Level ${key}`}
          </div>
        ))}
      </SpellFilterSection>
      <SpellFilterSection title={"Class"}>
        {Object.entries(SpellClasses).map(([key, value]) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox />
            {value}
          </div>
        ))}
      </SpellFilterSection>
      <SpellFilterSection title={"Subclass"}>
        {Object.entries(SpellSubClass).map(([key, value]) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox />
            {value}
          </div>
        ))}
      </SpellFilterSection>
      <SpellFilterSection title={"Spell"}>
        {spells.map((spell) => (
          <div key={spell.name} className={"flex items-center gap-2"}>
            <Checkbox />
            {spell.name}
          </div>
        ))}
      </SpellFilterSection>
    </div>
  )
}
