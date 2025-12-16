"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Textarea } from "@/components/windows95-ui/textarea"
import { Label } from "@/components/windows95-ui/label"
import { Example } from "@/components/example"

const code = `import { Textarea } from "@/components/windows95-ui/textarea"

<Textarea placeholder="Enter your message" />
<Textarea disabled placeholder="Disabled textarea" />`

export default function TextareaDemoPage() {
  return (
    <ComponentDemoPage
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      code={code}
    >
      <Example title="Textarea Examples">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Basic Textarea</h3>
            <div className="grid grid-cols-[120px_1fr] items-start gap-4">
              <Label className="pt-2">Message</Label>
              <Textarea placeholder="Enter your message here..." />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Textarea with Default Value</h3>
            <div className="grid grid-cols-[120px_1fr] items-start gap-4">
              <Label className="pt-2">Comments</Label>
              <Textarea defaultValue="This is a default value in the textarea component." />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Disabled Textarea</h3>
            <div className="grid grid-cols-[120px_1fr] items-start gap-4">
              <Label className="pt-2">Disabled</Label>
              <Textarea disabled placeholder="This textarea is disabled" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Resizable Textarea</h3>
            <div className="grid grid-cols-[120px_1fr] items-start gap-4">
              <Label className="pt-2">Resizable</Label>
              <Textarea 
                className="resize-y" 
                placeholder="This textarea can be resized vertically"
                rows={4}
              />
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

