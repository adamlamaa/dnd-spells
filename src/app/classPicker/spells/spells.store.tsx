import { createContext, type ReactNode, useContext, useState } from "react"
import { createStore, type StoreApi, useStore } from "zustand"
import {
  type Spell,
  type SpellClass,
  SpellClasses,
  type SpellLevel,
  type SpellSubClass,
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
  clearFilters: () => void
  settings: {
    showSpellCardLegend: boolean
    spellCardBorderColor: string
    spellCardTextBackgroundColor: string
    spellCardTextColor: string
    spellCardComponentTextColor: string
  }
  setShowSpellCardLegend: (show: boolean) => void
  setSpellCardBorderColor: (color: string) => void
  setSpellCardTextBackgroundColor: (color: string) => void
  setSpellCardTextColor: (color: string) => void
  setSpellCardComponentTextColor: (color: string) => void
}

const StoreContext = createContext<StoreApi<Store> | undefined>(undefined)

const SpellStoreProvider = ({
  spells,
  initFilter,
  updateAppQuery,
  children,
}: {
  spells: Spell[]
  initFilter: string | null
  updateAppQuery: (value: string) => void
  children: ReactNode
}) => {
  const spellClassInit = parseInitFilter(initFilter)
  const [store] = useState(() =>
    createStore<Store>()((set, get) => ({
      spells,
      filters: {
        level: new Set<SpellLevel>(),
        class: spellClassInit
          ? new Set<SpellClass>([spellClassInit])
          : new Set<SpellClass>(),
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
        updateAppQuery("custom")
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
        updateAppQuery("custom")
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
        updateAppQuery("custom")
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
        updateAppQuery("custom")
        set((state) => {
          return {
            ...state,
            filters: { ...state.filters, spells: spellsUpdated },
          }
        })
      },
      clearFilters: () => {
        updateAppQuery("custom")
        set((state) => ({
          ...state,
          filters: {
            level: new Set<SpellLevel>(),
            class: new Set<SpellClass>(),
            subclasses: new Set<SpellSubClass>(),
            spells: new Set<string>(),
          },
        }))
      },
      settings: {
        showSpellCardLegend: true,
        spellCardBorderColor: "#000000",
        spellCardTextBackgroundColor: "#ffffff",
        spellCardTextColor: "#000000",
        spellCardComponentTextColor: "#ffffff",
      },
      setShowSpellCardLegend: (show: boolean) => {
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            showSpellCardLegend: show,
          },
        }))
      },
      setSpellCardBorderColor: (color: string) => {
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            spellCardBorderColor: color,
          },
        }))
      },
      setSpellCardTextBackgroundColor: (color: string) => {
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            spellCardTextBackgroundColor: color,
          },
        }))
      },
      setSpellCardTextColor: (color: string) => {
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            spellCardTextColor: color,
          },
        }))
      },
      setSpellCardComponentTextColor: (color: string) => {
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            spellCardComponentTextColor: color,
          },
        }))
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

const parseInitFilter = (initFilter: string | null): SpellClass | undefined => {
  if (!initFilter) return undefined
  if (initFilter === "custom") return undefined
  const isValidClass = initFilter
    ? Object.keys(SpellClasses).includes(initFilter)
    : false
  if (!isValidClass) return undefined
  return initFilter as SpellClass
}

export { SpellStoreProvider, useSpellStore }
