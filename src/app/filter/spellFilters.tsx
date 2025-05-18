import { SpellFilterSection } from "./section/spellFilterSection"
import { Checkbox } from "@/components/ui/checkbox"
import spells from "../../spells.json"

interface SpellFiltersProps {
  id?: string
}

const SpellLevel = {
  cantrip: "Cantrip",
  level1: "Level 1",
  level2: "Level 2",
  level3: "Level 3",
  level4: "Level 4",
  level5: "Level 5",
  level6: "Level 6",
  level7: "Level 7",
  level8: "Level 8",
  level9: "Level 9",
} as const

const SpellClass = {
  bard: "Bard",
  cleric: "Cleric",
  druid: "Druid",
  paladin: "Paladin",
  ranger: "Ranger",
  sorcerer: "Sorcerer",
  warlock: "Warlock",
  wizard: "Wizard",
}

const SpellSubClass = {
  cleric_trickery: "Trickery",
  paladin_oath_of_vengeance: "Oath of Vengeance",
}

export const SpellFilters = ({ id }: SpellFiltersProps) => {
  return (
    <div className={"flex w-full flex-wrap gap-2"}>
      <SpellFilterSection title={"Level"}>
        {Object.keys(SpellLevel).map((key) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox />
            {SpellLevel[key as keyof typeof SpellLevel]}
          </div>
        ))}
      </SpellFilterSection>
      <SpellFilterSection title={"Class"}>
        {Object.keys(SpellClass).map((key) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox />
            {SpellClass[key as keyof typeof SpellClass]}
          </div>
        ))}
      </SpellFilterSection>
      <SpellFilterSection title={"Subclass"}>
        {Object.keys(SpellSubClass).map((key) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox />
            {SpellSubClass[key as keyof typeof SpellSubClass]}
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
