"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Label } from "@/components/windows95-ui/label"
import { Input } from "@/components/windows95-ui/input"
import { Checkbox, RadioGroup, RadioGroupItem } from "@/components/windows95-ui/field"
import { Example } from "@/components/example"

const code = `import { Label } from "@/components/windows95-ui/label"

<Label htmlFor="email">Email</Label>
<Label htmlFor="email" className="font-bold">Bold Label</Label>`

export default function LabelDemoPage() {
  return (
    <ComponentDemoPage
      title="Label"
      description="Renders an accessible label associated with controls."
      code={code}
    >
      <Example title="Label Examples">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Basic Labels</h3>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <Label htmlFor="email1">Email</Label>
              <Input id="email1" placeholder="Enter email" />
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <Label htmlFor="password1">Password</Label>
              <Input id="password1" type="password" placeholder="Enter password" />
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <Label htmlFor="name1" className="font-bold">Name (Bold)</Label>
              <Input id="name1" placeholder="Enter name" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Labels with Form Controls</h3>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">Option 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

