import { TiltedCard } from "@/components/ui/tiltedCard"
import Image from "next/image"
import { GlossyBox } from "@/components/ui/glossyBox"

export const About = () => {
  return (
    <GlossyBox
      className={
        "grid grid-cols-3 place-items-center gap-10 p-8 md:grid-cols-5 md:gap-20"
      }
    >
      <div
        className={"col-span-3 items-center justify-center py-4 md:col-span-2"}
      >
        This website is designed to help players of DND 5e Legacy Edition easily
        print out their spells, offering a convenient way to bring their spell
        lists to the table for a more tactile, analogue gameplay experience. By
        providing printable spell cards, the site aims to enhance your sessions
        with quick reference and hands-on interaction, making it easier to
        manage your character’s magic during your adventures.
      </div>
      <div className={"col-span-3 grid grid-cols-2 gap-1 md:grid-cols-5"}>
        <TiltedCard startRotate={"rotate-6"} backgroundColor={"bg-violet-500"}>
          <Image
            src={"/spells/Spell_Fireball.png"}
            alt={"Fireball spell card example"}
            width={135}
            height={170}
          />
        </TiltedCard>
        <TiltedCard startRotate={"-rotate-4"} backgroundColor={"bg-violet-700"}>
          <Image
            src={"/spells/Spell_DetectMagic.png"}
            alt={"Detect magic spell card example"}
            width={135}
            height={170}
          />
        </TiltedCard>
        <TiltedCard startRotate={"rotate-8"} backgroundColor={"bg-violet-600"}>
          <Image
            src={"/spells/Spell_MinorIllusion.png"}
            alt={"Minor Illusion spell card example"}
            width={135}
            height={170}
          />
        </TiltedCard>
        <TiltedCard startRotate={"-rotate-6"} backgroundColor={"bg-violet-500"}>
          <Image
            src={"/spells/Spell_MinorIllusion_2.png"}
            alt={"Minor Illusion continued spell card example"}
            width={135}
            height={170}
          />
        </TiltedCard>
        <TiltedCard startRotate={"rotate-12"} backgroundColor={"bg-violet-700"}>
          <Image
            src={"/spells/Spell_Shield.png"}
            alt={"Shield spell card example"}
            width={135}
            height={170}
          />
        </TiltedCard>
      </div>
    </GlossyBox>
  )
}
