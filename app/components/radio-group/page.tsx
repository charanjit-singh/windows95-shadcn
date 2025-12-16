"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { RadioGroup, RadioGroupItem } from "@/components/windows95-ui/field"
import { Label } from "@/components/windows95-ui/label"
import { Example } from "@/components/example"

const code = `import { RadioGroup, RadioGroupItem } from "@/components/windows95-ui/field"
import { Label } from "@/components/windows95-ui/label"

<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>`

export default function RadioGroupDemoPage() {
  return (
    <ComponentDemoPage
      title="Radio Group"
      description="A set of checkable buttons where no more than one can be checked."
      code={code}
    >
      <Example title="Radio Group Examples">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Basic Radio Group</h3>
            <RadioGroup defaultValue="radio1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="radio1" id="radio1" />
                <Label htmlFor="radio1">Radio is off</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="radio2" id="radio2" />
                <Label htmlFor="radio2">Radio is on</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="radio3" id="radio3" />
                <Label htmlFor="radio3">Another option</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Disabled Radio Group</h3>
            <RadioGroup defaultValue="radio-disabled1" disabled>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="radio-disabled1" id="radio-disabled1" />
                <Label htmlFor="radio-disabled1" className="text-gray-500">Disabled radio is off</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="radio-disabled2" id="radio-disabled2" />
                <Label htmlFor="radio-disabled2" className="text-gray-500">Disabled radio is on</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Form Example</h3>
            <div className="flex flex-col gap-2">
              <Label className="font-bold mb-2">Select your preferred language:</Label>
              <RadioGroup defaultValue="english">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="english" id="english" />
                  <Label htmlFor="english">English</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="spanish" id="spanish" />
                  <Label htmlFor="spanish">Spanish</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="french" id="french" />
                  <Label htmlFor="french">French</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="german" id="german" />
                  <Label htmlFor="german">German</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

