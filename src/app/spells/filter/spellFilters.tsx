import { SpellFilterSection } from "./section/spellFilterSection"
import spells from "@/spells.json"
import { SpellClasses, SpellLevels, SpellSubClasses } from "@/types/spell"
import { useSpellStore } from "@/app/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const SpellFilters = () => {
  const {
    filters,
    updateLevelFilter,
    updateClassFilter,
    updateSubClassFilter,
    updateSpellsFilter,
  } = useSpellStore(
    useShallow((state) => ({
      filters: state.filters,
      updateLevelFilter: state.updateLevelFilter,
      updateClassFilter: state.updateClassFilter,
      updateSubClassFilter: state.updateSubClassFilter,
      updateSpellsFilter: state.updateSpellsFilter,
    })),
  )

  return (
    <>
      <div className={"flex w-full flex-wrap gap-2"}>
        <SpellFilterSection
          title={"Class"}
          entries={Object.entries(SpellClasses).map(([key, label]) => ({
            key,
            label,
          }))}
          onChange={updateClassFilter}
          active={filters.class}
        />
        <SpellFilterSection
          title={"Subclass"}
          entries={Object.entries(SpellSubClasses).map(([key, label]) => ({
            key,
            label,
          }))}
          onChange={updateSubClassFilter}
          active={filters.subclasses}
        />
        <SpellFilterSection
          title={"Spell"}
          entries={spells.map((spell) => ({
            key: spell.name,
            label: spell.name,
          }))}
          onChange={updateSpellsFilter}
          active={filters.spells}
        />
        <div className={"bg-gray-100"}>
          <SpellFilterSection
            title={"Print These Levels"}
            entries={SpellLevels.map((level) => ({
              key: level,
              label: level === "cantrip" ? "Cantrip" : `Level ${level}`,
            }))}
            onChange={updateLevelFilter}
            active={filters.level}
          />
        </div>
      </div>
    </>
  )
}
