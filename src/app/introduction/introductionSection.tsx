import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { About } from "@/app/introduction/about/about"
import { Details } from "@/app/introduction/details/details"
import { Accessories } from "@/app/introduction/accessories/accessories"
import { Support } from "@/app/introduction/support/support"

const ABOUT_TAB = "about"
const DETAILS_TAB = "details"
const ACCESSORIES_TAB = "accessories"
const SUPPORT_TAB = "support"

export const IntroductionSection = () => {
  return (
    <>
      <Tabs
        defaultValue={ABOUT_TAB}
        className={"flex w-full flex-col items-center gap-4"}
      >
        <TabsList>
          <TabsTrigger value={ABOUT_TAB}>About</TabsTrigger>
          <TabsTrigger value={DETAILS_TAB}>Details</TabsTrigger>
          <TabsTrigger value={ACCESSORIES_TAB}>Accessories</TabsTrigger>
          <TabsTrigger value={SUPPORT_TAB}>Support</TabsTrigger>
        </TabsList>
        <TabsContent value={ABOUT_TAB} className={"w-full"}>
          <About />
        </TabsContent>
        <TabsContent value={DETAILS_TAB} className={"w-full"}>
          <Details />
        </TabsContent>
        <TabsContent value={ACCESSORIES_TAB} className={"w-full"}>
          <Accessories />
        </TabsContent>
        <TabsContent value={SUPPORT_TAB} className={"w-full"}>
          <Support />
        </TabsContent>
      </Tabs>
    </>
  )
}
