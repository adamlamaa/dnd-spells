import "../styles/globals.css"

import { type Metadata } from "next"
import { Geist } from "next/font/google"
import { GlossyBox } from "@/components/ui/glossyBox"
import { BugIcon, GithubIcon, LaughIcon, StampIcon } from "lucide-react"
import { LinkButtonWithTooltip } from "@/components/ui/linkButtonWithTooltip"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "DND Spells",
  description: "Create dnd spell print-outs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <div className={"flex-1"}>{children}</div>
          <footer>
            <GlossyBox className="flex items-center justify-center gap-4 p-4">
              <LinkButtonWithTooltip
                href={"https://coff.ee/akvila"}
                tooltipContent={"Buy me a coffee"}
                icon={
                  <Image
                    src="/bmc-logo-white.svg"
                    alt="Buy Me a Coffee"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                }
              />
              <LinkButtonWithTooltip
                href={"https://github.com/adamlamaa/dnd-spells"}
                tooltipContent={"Open Source Repo"}
                icon={<GithubIcon />}
              />
              <LinkButtonWithTooltip
                href={
                  "https://github.com/adamlamaa/dnd-spells/issues/new/choose"
                }
                tooltipContent={"Submit an Issue"}
                icon={<BugIcon />}
              />
              <LinkButtonWithTooltip
                href={"https://opengamingfoundation.org/ogl.html"}
                tooltipContent={"Open Game License"}
                icon={<StampIcon />}
              />
              <LinkButtonWithTooltip
                href={"/meme"}
                tooltipContent={"Memes"}
                icon={<LaughIcon />}
              />
            </GlossyBox>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
