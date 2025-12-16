"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/windows95-ui/select"
import { Label } from "@/components/windows95-ui/label"
import { Example } from "@/components/example"

const code = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/windows95-ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`

export default function SelectDemoPage() {
  return (
    <ComponentDemoPage
      title="Select"
      description="Displays a list of options for the user to pick from."
      code={code}
    >
      <Example title="Select Examples">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Basic Select</h3>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <Label htmlFor="select1">Choose</Label>
              <Select>
                <SelectTrigger id="select1">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Select Sizes</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <Label>Small</Label>
                <Select>
                  <SelectTrigger size="sm">
                    <SelectValue placeholder="Small select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small1">Small Option 1</SelectItem>
                    <SelectItem value="small2">Small Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                <Label>Default</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Default select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default1">Default Option 1</SelectItem>
                    <SelectItem value="default2">Default Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">Disabled Select</h3>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <Label>Disabled</Label>
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="disabled1">Option 1</SelectItem>
                  <SelectItem value="disabled2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

