import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const PrintSettingCardTextBackgroundColour = () => {
  const { spellCardTextBackgroundColor } = useSpellStore(
    useShallow((state) => ({
      spellCardTextBackgroundColor: state.settings.spellCardTextBackgroundColor,
    })),
  )

  return (
    <DropdownMenuItem>
      <div className={"flex items-center gap-2"}>
        <div
          style={{
            backgroundColor: spellCardTextBackgroundColor,
          }}
          className={"h-6 w-6 rounded-md border-2 border-gray-300"}
        />
        <div>Card text background colour</div>
      </div>
    </DropdownMenuItem>
  )
}
