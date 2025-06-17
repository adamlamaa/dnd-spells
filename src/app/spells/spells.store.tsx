import { createContext, type ReactNode, useContext, useState } from "react"
import { createStore, type StoreApi, useStore } from "zustand"
import type {
  Spell,
  SpellClass,
  SpellLevel,
  SpellSubClass,
} from "@/types/spell"

interface Store {
  spells: Spell[]
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
  updateLevelFilter: (values: SpellLevel[], active: boolean) => void
  updateClassFilter: (values: SpellClass[], active: boolean) => void
  updateSubClassFilter: (values: SpellSubClass[], active: boolean) => void
  updateSpellsFilter: (values: string[], active: boolean) => void
}

const StoreContext = createContext<StoreApi<Store> | undefined>(undefined)

const SpellStoreProvider = ({
  spells,
  children,
}: {
  spells: Spell[]
  children: ReactNode
}) => {
  const [store] = useState(() =>
    createStore<Store>()((set, get) => ({
      spells,
      filters: {
        level: new Set<SpellLevel>(),
        class: new Set<SpellClass>(),
        subclasses: new Set<SpellSubClass>(),
        spells: new Set<string>(),
      },
      getFilters: () => get().filters,
      updateLevelFilter: (values: SpellLevel[], active: boolean) => {
        const levelUpdated = get().filters.level
        if (active) {
          for (const value of values) levelUpdated.add(value)
        } else {
          for (const value of values) levelUpdated.delete(value)
        }
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, level: levelUpdated },
          }
        })
      },
      updateClassFilter: (values: SpellClass[], active: boolean) => {
        const classUpdated = get().filters.class
        if (active) {
          for (const value of values) classUpdated.add(value)
        } else {
          for (const value of values) classUpdated.delete(value)
        }
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, class: classUpdated },
          }
        })
      },
      updateSubClassFilter: (values: SpellSubClass[], active: boolean) => {
        const subClassUpdated = get().filters.subclasses
        if (active) {
          for (const value of values) subClassUpdated.add(value)
        } else {
          for (const value of values) subClassUpdated.delete(value)
        }
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, subclasses: subClassUpdated },
          }
        })
      },
      updateSpellsFilter: (values: string[], active: boolean) => {
        const spellsUpdated = get().filters.spells
        if (active) {
          for (const value of values) spellsUpdated.add(value)
        } else {
          for (const value of values) spellsUpdated.delete(value)
        }
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
