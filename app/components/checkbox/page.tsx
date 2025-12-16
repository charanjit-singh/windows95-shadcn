"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Checkbox } from "@/components/windows95-ui/field"
import { Label } from "@/components/windows95-ui/label"
import { Example } from "@/components/example"

const code = `import { Checkbox } from "@/components/windows95-ui/field"
import { Label } from "@/components/windows95-ui/label"

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">I agree to the terms</Label>
</div>`

export default function CheckboxDemoPage() {
  return (
    <ComponentDemoPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      code={code}
    >
      <Example title="Checkbox Examples">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Basic Checkboxes</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="check1" />
                <Label htmlFor="check1">Unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="check2" defaultChecked />
                <Label htmlFor="check2">Checked</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Disabled Checkboxes</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="check3" disabled />
                <Label htmlFor="check3" className="text-gray-500">Disabled Unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="check4" defaultChecked disabled />
                <Label htmlFor="check4" className="text-gray-500">Disabled Checked</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Checkbox Group</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="option1" />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="option2" defaultChecked />
                <Label htmlFor="option2">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="option3" />
                <Label htmlFor="option3">Option 3</Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Form Example</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I agree to the terms and conditions</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

