import { ClassPicker } from "@/app/classPicker/classPicker"
import { Suspense } from "react"
import { IntroductionSection } from "@/app/introduction/introductionSection"

export default function HomePage() {
  return (
    <Suspense>
      <div className="flex flex-col gap-10 p-16">
        <header className={"flex flex-col items-center"}>
          <h1 className="text-5xl font-extrabold">DND Spells</h1>
        </header>
        <main className={"flex w-full flex-col items-center gap-10"}>
          <IntroductionSection />
          <ClassPicker />
        </main>
      </div>
    </Suspense>
  )
}
