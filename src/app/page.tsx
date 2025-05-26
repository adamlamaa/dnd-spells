import { Spells } from "@/app/spells/spells"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16">
        <h1 className="pb-10 text-5xl font-extrabold">DND Spells</h1>
        <Spells />
      </div>
    </main>
  )
}
