import { useSpellStore } from "@/app/classPicker/spells/spells.store"
import { useShallow } from "zustand/react/shallow"
import { PrintSettingChangeColourProps } from "@/app/classPicker/spells/print/settings/card/shared/printSettingChangeColour"

export const PrintSettingCardTextBackgroundColour = () => {
  const { colour, setColour } = useSpellStore(
    useShallow((state) => ({
      colour: state.settings.spellCardTextBackgroundColor,
      setColour: state.setSpellCardTextBackgroundColor,
    })),
  )

  return (
    <PrintSettingChangeColourProps
      colour={colour}
      setColour={setColour}
      label={"Card text background colour"}
    />
  )
}
