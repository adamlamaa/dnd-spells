"use client"

import { SpellFilters } from "@/app/spells/filter/spellFilters"
import { Print } from "@/app/spells/print/print"
import { SpellStoreProvider } from "@/app/spells/spells.store"

export const Spells = () => {
  return (
    <SpellStoreProvider>
      <div className={"flex w-full flex-col items-center gap-8"}>
        <SpellFilters />
        <Print />
      </div>
    </SpellStoreProvider>
  )
}
