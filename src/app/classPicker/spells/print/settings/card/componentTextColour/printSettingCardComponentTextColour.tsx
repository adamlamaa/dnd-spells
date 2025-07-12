import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"

export const PrintSettingCardComponentTextColour = () => {
  const { spellCardComponentTextColor } = useSpellStore(
    useShallow((state) => ({
      spellCardComponentTextColor: state.settings.spellCardComponentTextColor,
    })),
  )

  return (
    <DropdownMenuItem>
      <div className={"flex items-center gap-2"}>
        <div
          style={{
            backgroundColor: spellCardComponentTextColor,
          }}
          className={"h-6 w-6 rounded-md border-2 border-gray-300"}
        />
        <div>Card component text colour</div>
      </div>
    </DropdownMenuItem>
  )
}
