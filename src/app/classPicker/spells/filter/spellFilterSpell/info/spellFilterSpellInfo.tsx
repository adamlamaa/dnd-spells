import type { Spell } from "@/types/spell"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface SpellFilterSpellInfoProps {
  spell: Spell
  onClose: () => void
}

export const SpellFilterSpellInfo = ({
  spell,
  onClose,
}: SpellFilterSpellInfoProps) => {
  return (
    <Sheet open={true} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{spell.name}</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-3 items-center gap-2 px-4">
          <p>Level:</p>
          <Input
            disabled={true}
            defaultValue={spell.level}
            className={"col-span-2"}
          />

          <p>Casting Time:</p>
          <Input
            disabled={true}
            defaultValue={spell.casting_time}
            className={"col-span-2"}
          />

          <p>Range:</p>
          <Input
            disabled={true}
            defaultValue={spell.range}
            className={"col-span-2"}
          />

          <p>Duration:</p>
          <Input
            disabled={true}
            defaultValue={spell.duration}
            className={"col-span-2"}
          />

          <p className={"col-span-3"}>Description:</p>
          <Textarea
            disabled={true}
            defaultValue={spell.description.join("\n\n")}
            className={"col-span-3 h-38"}
          />
          {spell.higher_levels && (
            <>
              <p className={"col-span-3"}>At higher level:</p>
              <Textarea
                disabled={true}
                defaultValue={spell.higher_levels}
                className={"col-span-3"}
              />
            </>
          )}
          <p className={"col-span-3"}>Components:</p>
          <Textarea
            disabled={true}
            defaultValue={spell.components.raw}
            className={"col-span-3"}
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
