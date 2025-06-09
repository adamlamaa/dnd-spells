import { SpellFilterClass } from "@/app/spells/filter/class/spellFilterClass"
import { SpellFilterSubclass } from "@/app/spells/filter/subclass/spellFilterSubclass"
import { SpellFilterSpell } from "@/app/spells/filter/spellFilterSpell/spellFilterSpell"
import { SpellFilterLevel } from "@/app/spells/filter/level/spellFilterLevel"

export const SpellFilters = () => {
  return (
    <>
      <div className={"flex w-full flex-wrap gap-2"}>
        <SpellFilterClass />
        <SpellFilterSubclass />
        <SpellFilterSpell />
        <SpellFilterLevel />
      </div>
    </>
  )
}
