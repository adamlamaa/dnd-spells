import { GlossyBox } from "@/components/ui/glossyBox"
import { TiltedCard } from "@/components/ui/tiltedCard"
import Image from "next/image"

export const IntroductionSection = () => {
  return (
    <GlossyBox className={"grid grid-cols-5 gap-20 p-8"}>
      <div className={"col-span-2 items-center justify-center py-4"}>
        This website is designed to help players of DND 5e Legacy Edition easily
        print out their spells, offering a convenient way to bring their spell
        lists to the table for a more tactile, analogue gameplay experience. By
        providing printable spell cards, the site aims to enhance your sessions
        with quick reference and hands-on interaction, making it easier to
        manage your character’s magic during your adventures.
      </div>
      <div className={"col-span-3 flex items-center justify-center gap-1"}>
        <TiltedCard startRotate={"rotate-6"}>
          <Image
            src={"/spells/Spell_Fireball.png"}
            alt={"Fireball spell card example"}
            width={250}
            height={250}
          />
        </TiltedCard>
        <TiltedCard startRotate={"-rotate-4"}>
          <Image
            src={"/spells/Spell_DetectMagic.png"}
            alt={"Detect magic spell card example"}
            width={250}
            height={250}
          />
        </TiltedCard>
        <TiltedCard startRotate={"rotate-8"}>
          <Image
            src={"/spells/Spell_MinorIllusion.png"}
            alt={"Minor Illusion spell card example"}
            width={250}
            height={250}
          />
        </TiltedCard>
        <TiltedCard startRotate={"-rotate-6"}>
          <Image
            src={"/spells/Spell_MinorIllusion_2.png"}
            alt={"Minor Illusion continued spell card example"}
            width={250}
            height={250}
          />
        </TiltedCard>
        <TiltedCard startRotate={"rotate-12"}>
          <Image
            src={"/spells/Spell_Shield.png"}
            alt={"Shield spell card example"}
            width={250}
            height={250}
          />
        </TiltedCard>
      </div>
    </GlossyBox>
  )
}
