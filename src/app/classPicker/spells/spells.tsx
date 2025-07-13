import { SpellFilters } from "@/app/classPicker/spells/filter/spellFilters"
import { Print } from "@/app/classPicker/spells/print/print"
import { SpellStoreProvider } from "@/app/classPicker/spells/spells.store"
import { useEffect, useState } from "react"
import { type Spell } from "@/types/spell"
import { useAppQuery } from "@/lib/useAppQuery"
import { BounceLoader } from "react-spinners"

export const Spells = () => {
  const [classSelected, setClassSelected] = useAppQuery("class")

  const [spells, setSpells] = useState<Spell[]>([])

  useEffect(() => {
    const loadSpells = async () => {
      const data = await import("../../../../public/spells.json")
      const spellsAndMeta = Object.values(data)
      const spellsData = spellsAndMeta.slice(0, spellsAndMeta.length - 2)
      setSpells(spellsData as unknown as Spell[])
    }
    void loadSpells()
  }, [])

  if (spells.length === 0) {
    return (
      <div className={"flex w-full flex-col items-center justify-center gap-4"}>
        <BounceLoader color="var(--primary)" size={150} />
        <div className={"text-gray-500"}>Loading spells...</div>
      </div>
    )
  }

  return (
    <SpellStoreProvider
      spells={spells}
      initFilter={classSelected}
      updateAppQuery={setClassSelected}
    >
      <div className={"flex w-full flex-col items-center gap-8"}>
        <SpellFilters />
        <Print />
      </div>
    </SpellStoreProvider>
  )
}
