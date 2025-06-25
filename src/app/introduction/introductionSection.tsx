import { GlossyBox } from "@/components/ui/glossyBox"
import { TiltedCard } from "@/components/ui/tiltedCard"

export const IntroductionSection = () => {
  return (
    <GlossyBox className={"grid grid-cols-5 gap-20"}>
      <div
        className={"col-span-2 items-center justify-center py-4 text-center"}
      >
        This website is designed to help players of DND 5e Legacy Edition easily
        print out their spells, offering a convenient way to bring their spell
        lists to the table for a more tactile, analogue gameplay experience. By
        providing printable spell cards, the site aims to enhance your sessions
        with quick reference and hands-on interaction, making it easier to
        manage your character’s magic during your adventures.
      </div>
      <div className={"col-span-3 flex items-center justify-center gap-1"}>
        <TiltedCard
          startRotate={"rotate-6"}
          backgroundColor={"bg-violet-700"}
        />
        <TiltedCard
          startRotate={"-rotate-4"}
          backgroundColor={"bg-violet-400"}
        />
        <TiltedCard
          startRotate={"rotate-8"}
          backgroundColor={"bg-violet-600"}
        />
        <TiltedCard
          startRotate={"-rotate-6"}
          backgroundColor={"bg-violet-500"}
        />
        <TiltedCard
          startRotate={"rotate-12"}
          backgroundColor={"bg-violet-700"}
        />
      </div>
    </GlossyBox>
  )
}
