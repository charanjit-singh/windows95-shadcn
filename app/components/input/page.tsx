"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Input } from "@/components/windows95-ui/input"
import { Textarea } from "@/components/windows95-ui/textarea"
import { Label } from "@/components/windows95-ui/label"
import { Button } from "@/components/windows95-ui/button"
import { Checkbox, RadioGroup, RadioGroupItem } from "@/components/windows95-ui/field"
import { CheckIcon, XIcon } from "lucide-react"
import { Example } from "@/components/example"

const code = `import { Input } from "@/components/windows95-ui/input"
import { Label } from "@/components/windows95-ui/label"

<div className="grid grid-cols-[100px_1fr] items-center gap-4">
  <Label>Email</Label>
  <Input type="email" placeholder="Enter your email" />
</div>`

export default function InputDemoPage() {
  return (
    <ComponentDemoPage
      title="Input"
      description="Displays a form input field or a component that looks like an input."
      code={code}
    >
      <Example title="Form Controls">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold">Form Controls</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <Label className="font-normal">Default</Label>
                <Input />
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <Label className="font-normal">Disabled</Label>
                <Input disabled />
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <Label className="font-normal">Success</Label>
                <div className="relative">
                  <Input defaultValue="Success" />
                  <CheckIcon className="text-green-600 absolute right-2 top-1/2 -translate-y-1/2 size-4" />
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <Label className="font-normal">Error</Label>
                <div className="relative">
                  <Input defaultValue="Error" />
                  <XIcon className="text-red-600 absolute right-2 top-1/2 -translate-y-1/2 size-4" />
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start gap-4">
                <Label className="font-normal pt-2">Textarea</Label>
                <Textarea />
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <div />
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-normal">I agree to the terms and conditions</Label>
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                <div />
                <div className="flex gap-2">
                  <Button>Submit</Button>
                  <Button>Cancel</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold">Checkboxes</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="check1" />
                  <Label htmlFor="check1" className="font-normal">Unchecked</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" defaultChecked />
                  <Label htmlFor="check2" className="font-normal">Checked</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" disabled />
                  <Label htmlFor="check3" className="font-normal text-gray-500">Disabled Unchecked</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check4" defaultChecked disabled />
                  <Label htmlFor="check4" className="font-normal text-gray-500">Disabled Checked</Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold">Radios</h3>
              <RadioGroup defaultValue="radio2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="radio1" id="radio1" />
                  <Label htmlFor="radio1" className="font-normal">Radio is off</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="radio2" id="radio2" />
                  <Label htmlFor="radio2" className="font-normal">Radio is on</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="radio3" id="radio3" disabled />
                  <Label htmlFor="radio3" className="font-normal text-gray-500">Disabled radio is off</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="radio4" id="radio4" disabled />
                  <Label htmlFor="radio4" className="font-normal text-gray-500">Disabled radio is on</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

