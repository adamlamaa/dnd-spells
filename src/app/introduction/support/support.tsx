"use client"

import { GlossyBox } from "@/components/ui/glossyBox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Support = () => {
  return (
    <GlossyBox
      className={
        "grid w-full place-items-center gap-4 p-8 md:grid-cols-11 md:gap-0"
      }
    >
      <div className={"flex h-full flex-col justify-start gap-4 md:col-span-3"}>
        <p className="font-bold">Support my work</p>
        <p>
          If you enjoy this project and want to say thanks, consider buying me a
          coffee! Your support helps me keep improving the website.
        </p>
        <Link
          href={"https://coff.ee/akvila"}
          target={"_blank"}
          className={"w-full"}
        >
          <Button
            className={"w-full bg-amber-500 text-black hover:bg-amber-600"}
          >
            <Image
              src="/bmc-logo.svg"
              alt="Buy Me a Coffee"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            Buy me a coffee
          </Button>
        </Link>
      </div>
      <Separator className={"border-1"} decorative />
      <div className={"flex flex-col gap-2 md:col-span-3"}>
        <p className={"mb-2 font-bold"}>
          Contribute to this open source website
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Go to{" "}
            <Link
              href="https://github.com/adamlamaa/dnd-spells"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </li>
          <li>
            Click the <strong>Fork</strong> button to create your own copy of
            the project.
          </li>
          <li>Make your changes in your copy.</li>
          <li>
            When you are ready, click <strong>New pull request</strong> on the
            original project page to suggest your changes.
          </li>
        </ol>
      </div>
      <Separator className={"border-1"} decorative />
      <div className={"flex flex-col gap-2 md:col-span-3"}>
        <p className={"mb-2 font-bold"}>Report a problem or suggest an idea</p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Go to{" "}
            <Link
              href="https://github.com/adamlamaa/dnd-spells/issues/new/choose"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              the issue page
            </Link>
            .
          </li>
          <li>
            Choose the type of issue you want to submit (bug, feature request,
            etc.).
          </li>
          <li>Fill out the form with details about your problem or idea.</li>
          <li>
            Click <strong>Submit new issue</strong> to send it to the team.
          </li>
        </ol>
      </div>
    </GlossyBox>
  )
}
