import { GlossyBox } from "@/components/ui/glossyBox"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Info } from "lucide-react"
import { FixedSizeList } from "react-window"
import type { CSSProperties } from "react"

interface SpellFilterSectionProps<T> {
  title: string
  entries: { key: string; label: string }[]
  onChange: (key: T[], checked: boolean) => void
  active: Set<T>
  search?: (value: string) => void
  info?: (key: string) => void
}

export const SpellFilterSection = <T,>({
  title,
  entries,
  onChange,
  active,
  search,
  info,
}: SpellFilterSectionProps<T>) => {
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const entry = entries[index]

    if (!entry) {
      return null
    }

    return (
      <div key={entry.key} style={style} className={"flex items-center gap-2"}>
        <Checkbox
          key={entry.key}
          checked={active.has(entry.key as T)}
          onCheckedChange={(checked) => {
            onChange([entry.key as T], !!checked)
          }}
        />
        {entry.label}
        {info && (
          <Info
            size={15}
            className={"cursor-pointer"}
            onClick={() => info(entry.key)}
          />
        )}
      </div>
    )
  }

  return (
    <GlossyBox className={"flex min-h-[440px] flex-col gap-4 p-4"}>
      <h2>{title}</h2>
      {!!search && <Input onChange={(event) => search(event.target.value)} />}
      <div className={"max-h-[300px] overflow-y-auto"}>
        {entries.length === 0 ? (
          <div className={"text-destructive text-center"}>No spells found</div>
        ) : (
          <>
            <div className={"flex items-center gap-2"}>
              <Checkbox
                checked={entries.length === active.size}
                onCheckedChange={(checked) => {
                  onChange(entries.map(({ key }) => key) as T[], !!checked)
                }}
              />
              All
            </div>
            <FixedSizeList
              itemSize={24}
              itemCount={entries.length}
              height={276}
              width={"100%"}
            >
              {Row}
            </FixedSizeList>
          </>
        )}
      </div>
    </GlossyBox>
  )
}
