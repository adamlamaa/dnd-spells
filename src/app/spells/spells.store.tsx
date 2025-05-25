import { createContext, type ReactNode, useContext, useState } from "react"
import { createStore, type StoreApi, useStore } from "zustand"
import type { SpellClass, SpellLevel, SpellSubClass } from "@/types/spell"

interface Store {
  filters: {
    level: Set<SpellLevel>
    class: Set<SpellClass>
    subclasses: Set<SpellSubClass>
    subclass: Set<string>
  }
  getFilters: () => {
    level: Set<SpellLevel>
    class: Set<SpellClass>
    subclasses: Set<SpellSubClass>
    subclass: Set<string>
  }
}

const StoreContext = createContext<StoreApi<Store> | undefined>(undefined)

const SpellStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() =>
    createStore<Store>()((set, get) => ({
      filters: {
        level: new Set<SpellLevel>(),
        class: new Set<SpellClass>(),
        subclasses: new Set<SpellSubClass>(),
        subclass: new Set<string>(),
      },
      getFilters: () => get().filters,
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
