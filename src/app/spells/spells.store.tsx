import { createContext, type ReactNode, useContext, useState } from "react"
import { createStore, type StoreApi, useStore } from "zustand"
import type { SpellClass, SpellLevel, SpellSubClass } from "@/types/spell"

interface Store {
  filters: {
    level: Set<SpellLevel>
    class: Set<SpellClass>
    subclasses: Set<SpellSubClass>
    spells: Set<string>
  }
  getFilters: () => {
    level: Set<SpellLevel>
    class: Set<SpellClass>
    subclasses: Set<SpellSubClass>
    spells: Set<string>
  }
  updateLevelFilter: (value: SpellLevel, active: boolean) => void
  updateClassFilter: (value: SpellClass, active: boolean) => void
  updateSubClassFilter: (value: SpellSubClass, active: boolean) => void
  updateSpellsFilter: (value: string, active: boolean) => void
}

const StoreContext = createContext<StoreApi<Store> | undefined>(undefined)

const SpellStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() =>
    createStore<Store>()((set, get) => ({
      filters: {
        level: new Set<SpellLevel>(),
        class: new Set<SpellClass>(),
        subclasses: new Set<SpellSubClass>(),
        spells: new Set<string>(),
      },
      getFilters: () => get().filters,
      updateLevelFilter: (value: SpellLevel, active: boolean) => {
        const levelUpdated = get().filters.level
        if (active) levelUpdated.add(value)
        else levelUpdated.delete(value)
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, level: levelUpdated },
          }
        })
      },
      updateClassFilter: (value: SpellClass, active: boolean) => {
        const classUpdated = get().filters.class
        if (active) classUpdated.add(value)
        else classUpdated.delete(value)
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, class: classUpdated },
          }
        })
      },
      updateSubClassFilter: (value: SpellSubClass, active: boolean) => {
        const subClassUpdated = get().filters.subclasses
        if (active) subClassUpdated.add(value)
        else subClassUpdated.delete(value)
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, subclasses: subClassUpdated },
          }
        })
      },
      updateSpellsFilter: (value: string, active: boolean) => {
        const spellsUpdated = get().filters.spells
        if (active) spellsUpdated.add(value)
        else spellsUpdated.delete(value)
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, spells: spellsUpdated },
          }
        })
      },
    })),
  )

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function useSpellStore<T>(selector: (state: Store) => T) {
  const storeApi = useContext(StoreContext)
  if (!storeApi)
    throw new Error("storeApi is empty, ensure SpellStoreProvider is used")
  return useStore(storeApi, selector)
}

export { SpellStoreProvider, useSpellStore }
