import type { Spell } from "@/types/spell"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface SpellFilterClassInfoProps {
  spellClass: string
  spells: Spell[]
  onClose: () => void
}

export const SpellFilterClassInfo = ({
  spellClass,
  spells,
  onClose,
}: SpellFilterClassInfoProps) => {
  return (
    <Sheet open={true} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={"flex items-center gap-2"}>
            Spell Class: <p className={"capitalize"}>{spellClass}</p>
          </SheetTitle>
        </SheetHeader>
        <Textarea
          className="h-full"
          disabled={true}
          defaultValue={printAllSpells(spells)}
        />
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const printAllSpells = (spells: Spell[]) => {
  const spellsByLevel = spells.reduce<Record<string, Spell[]>>((acc, spell) => {
    const level = acc[spell.level]
    if (level) {
      level.push(spell)
    } else {
      acc[spell.level] = [spell]
    }
    return acc
  }, {})

  const cantripSpells =
    "cantrip" in spellsByLevel ? spellsByLevel.cantrip : undefined
  if (cantripSpells) delete spellsByLevel.cantrip

  let result = ""

  if (cantripSpells) {
    result += printSpellLevel("Cantrip", cantripSpells) + "\n\n"
  }

  result += Object.entries(spellsByLevel)
    .map(([level, spells]) => printSpellLevel(`Level ${level}`, spells))
    .join("\n\n")

  return result
}

const printSpellLevel = (level: string, spells: Spell[]) =>
  `${level}:\n${spells.map((spell) => `- ${spell.name}`).join("\n")}`
