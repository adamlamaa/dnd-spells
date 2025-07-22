import { GlossyBox } from "@/components/ui/glossyBox"
import Image from "next/image"

export const Details = () => {
  return (
    <GlossyBox
      className={
        "grid grid-cols-1 place-items-center gap-10 p-8 md:grid-cols-3 md:gap-20"
      }
    >
      <div className={"items-center justify-center py-4"}>
        Each spell card is <strong>63mm wide × 88mm tall</strong>, which is
        roughly <strong>2.5 inches × 3.5 inches</strong>. This is the standard
        size for trading cards, making them easy to handle and store.
      </div>
      <div className={"relative flex flex-col items-center gap-1"}>
        {/*<div className="relative flex flex-col items-center">*/}
        <div style={{ width: 126, height: 176, position: "relative" }}>
          <Image
            src={"/spells/Spell_Fireball.png"}
            alt={"Fireball spell card example"}
            width={126}
            height={176}
          />
        </div>
        <span
          className="absolute -top-6 left-1/2 -translate-x-1/4 text-xs"
          style={{ width: 126 }}
        >
          63mm / 2.5&#34;
        </span>
        <span
          className="absolute top-1/2 left-full ml-2 -translate-y-1/4 text-xs"
          style={{ height: 176 }}
        >
          88mm / 3.5&#34;
        </span>
      </div>
      <div>
        <p>
          You can easily customize all the color settings to match your
          preferences under settings.
        </p>
      </div>
    </GlossyBox>
  )
}
