import { SpellFilterClass } from "@/app/classPicker/spells/filter/class/spellFilterClass"
import { SpellFilterSubclass } from "@/app/classPicker/spells/filter/subclass/spellFilterSubclass"
import { SpellFilterSpell } from "@/app/classPicker/spells/filter/spellFilterSpell/spellFilterSpell"
import { SpellFilterLevel } from "@/app/classPicker/spells/filter/level/spellFilterLevel"

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
