import { ClassPicker } from "@/app/classPicker/classPicker"
import { Suspense } from "react"
import { IntroductionSection } from "@/app/introduction/introductionSection"

export default function HomePage() {
  return (
    <Suspense>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-col gap-10 p-16">
          <header className={"flex flex-col items-center gap-10"}>
            <h1 className="text-5xl font-extrabold">DND Spells</h1>
            <IntroductionSection />
          </header>
          <main>
            <ClassPicker />
          </main>
        </div>
      </div>
    </Suspense>
  )
}
