"use client"

import { SpellFilters } from "@/app/spells/filter/spellFilters"
import { Print } from "@/app/spells/print/print"
import { SpellStoreProvider } from "@/app/spells/spells.store"
import { useEffect, useState } from "react"
import type { Spell } from "@/types/spell"

export const Spells = () => {
  const [spells, setSpells] = useState<Spell[]>([])

  useEffect(() => {
    const loadSpells = async () => {
      const data = await import("../../../public/spells.json")
      const spellsAndMeta = Object.values(data)
      const spellsData = spellsAndMeta.slice(0, spellsAndMeta.length - 2)
      setSpells(spellsData as unknown as Spell[])
    }
    void loadSpells()
  }, [])

  if (spells.length === 0) {
    return <div className={"text-gray-500"}>Loading spells...</div>
  }

  return (
    <SpellStoreProvider spells={spells}>
      <div className={"flex w-full flex-col items-center gap-8"}>
        <SpellFilters />
        <Print />
      </div>
    </SpellStoreProvider>
  )
}
