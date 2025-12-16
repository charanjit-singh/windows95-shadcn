"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Badge } from "@/components/windows95-ui/badge"
import { Example } from "@/components/example"

const code = `import { Badge } from "@/components/windows95-ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>`

export default function BadgeDemoPage() {
  return (
    <ComponentDemoPage
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      code={code}
    >
      <Example title="Badge Variants">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold">Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="ghost">Ghost</Badge>
              <Badge variant="link">Link</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

