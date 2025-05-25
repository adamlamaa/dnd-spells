"use client"

import { SpellFilters } from "@/app/spells/filter/spellFilters"
import { Print } from "@/app/spells/print/print"

export const Spells = () => {
  return (
    <>
      <SpellFilters />
      <Print />
    </>
  )
}
