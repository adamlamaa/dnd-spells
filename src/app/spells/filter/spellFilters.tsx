import { SpellFilterSection } from "./section/spellFilterSection"
import spells from "@/spells.json"
import { SpellClasses, SpellLevels, SpellSubClasses } from "@/types/spell"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const SpellFilters = () => {
  const {
    updateLevelFilter,
    updateClassFilter,
    updateSubClassFilter,
    updateSpellsFilter,
  } = useSpellStore(
    useShallow((state) => ({
      updateLevelFilter: state.updateLevelFilter,
      updateClassFilter: state.updateClassFilter,
      updateSubClassFilter: state.updateSubClassFilter,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )

  return (
    <div className={"flex w-full flex-wrap gap-2"}>
      <SpellFilterSection
        title={"Level"}
        entries={SpellLevels.map((level) => ({
          key: level,
          label: level === "cantrip" ? "Cantrip" : `Level ${level}`,
        }))}
        onChange={updateLevelFilter}
      />
      <SpellFilterSection
        title={"Class"}
        entries={Object.entries(SpellClasses).map(([key, label]) => ({
          key,
          label,
        }))}
        onChange={updateClassFilter}
      />
      <SpellFilterSection
        title={"Subclass"}
        entries={Object.entries(SpellSubClasses).map(([key, label]) => ({
          key,
          label,
        }))}
        onChange={updateSubClassFilter}
      />
      <SpellFilterSection
        title={"Spell"}
        entries={spells.map((spell) => ({
          key: spell.name,
          label: spell.name,
        }))}
        onChange={updateSpellsFilter}
      />
    </div>
  )
}
