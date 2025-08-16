"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [memeIndex, setMemeIndex] = useState(0)

  useEffect(() => {
    setMemeIndex(Math.floor(Math.random() * 10))
  }, [])

  return (
    <div className="flex flex-col gap-10 p-16">
      <header className={"flex flex-col items-center"}>
        <Link href={"/"}>
          <h1 className="text-5xl font-extrabold">DND Spells</h1>
        </Link>
      </header>
      <main className={"flex w-full flex-col items-center gap-10"}>
        <Image
          src={`/memes/${memeIndex}.png`}
          alt={"Meme"}
          width={500}
          height={500}
        />
      </main>
    </div>
  )
}
