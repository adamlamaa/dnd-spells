import "../styles/globals.css"

import { type Metadata } from "next"
import { Geist } from "next/font/google"

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
