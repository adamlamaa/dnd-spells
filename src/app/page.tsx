import { Print } from "./print/print"
import { SpellFilters } from "./filter/spellFilters"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold">DND Spells</h1>
        <SpellFilters />
        <Print />
      </div>
    </main>
  )
}
