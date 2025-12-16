"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/windows95-ui/tabs"
import { Button } from "@/components/windows95-ui/button"
import { Example } from "@/components/example"

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/windows95-ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`

export default function TabsDemoPage() {
  return (
    <ComponentDemoPage
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      code={code}
    >
      <Example title="Tabs">
        <div className="w-full max-w-[400px]">
          <Tabs defaultValue="programs" className="w-full">
            <TabsList>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="cpanel">Control Panel</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="programs">
              <div className="flex flex-col gap-4">
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatem nam ut temporibus corporis dolorem dolores accusamus deserunt veniam eius maiores suscipit veritatis necessitatibus voluptatum incidunt repellendus eligendi, consequatur rem?
                </p>
                <div>
                  <Button>Show Other Options</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cpanel">
              <div className="flex flex-col gap-4">
                <p className="text-sm">
                  Control Panel settings and configuration options would appear here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <div className="flex flex-col gap-4">
                <p className="text-sm">
                  Recent documents and file history.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

