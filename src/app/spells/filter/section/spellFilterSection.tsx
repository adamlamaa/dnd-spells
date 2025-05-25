import { Checkbox } from "@/components/ui/checkbox"

interface SpellFilterSectionProps<T> {
  title: string
  entries: { key: string; label: string }[]
  onChange: (key: T, checked: boolean) => void
}

export const SpellFilterSection = <T,>({
  title,
  entries,
  onChange,
}: SpellFilterSectionProps<T>) => {
  return (
    <div
      className={"min-w-[200px] flex-1 rounded-lg border-1 border-gray-200 p-4"}
    >
      <h2>{title}</h2>
      <div className={"h-[300px] overflow-y-auto"}>
        <div className={"flex items-center gap-2"}>
          <Checkbox /> All
        </div>
        {entries.map(({ key, label }) => (
          <div key={key} className={"flex items-center gap-2"}>
            <Checkbox
              key={key}
              onCheckedChange={(checked) => {
                onChange(key as T, !!checked)
              }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
