"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Separator } from "@/components/windows95-ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/windows95-ui/card"
import { Example } from "@/components/example"

const code = `import { Separator } from "@/components/windows95-ui/separator"

<Separator />
<Separator orientation="vertical" />`

export default function SeparatorDemoPage() {
  return (
    <ComponentDemoPage
      title="Separator"
      description="Visually or semantically separates content."
      code={code}
    >
      <Example title="Separator Examples">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Horizontal Separator</h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm">Content above the separator</p>
              <Separator />
              <p className="text-sm">Content below the separator</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Vertical Separator</h3>
            <div className="flex items-center gap-4 h-20">
              <span className="text-sm">Left content</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Right content</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">In Card</h3>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm">Some content here</p>
                <Separator />
                <p className="text-sm">More content below</p>
                <Separator />
                <p className="text-sm">Even more content</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Multiple Separators</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Section 1</p>
              <Separator />
              <p className="text-sm">Section 2</p>
              <Separator />
              <p className="text-sm">Section 3</p>
              <Separator />
              <p className="text-sm">Section 4</p>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

