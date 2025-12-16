"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import { Button } from "@/components/windows95-ui/button"
import { Example } from "@/components/example"
import {
  SettingsIcon,
  KeyboardIcon,
  HelpCircleIcon,
  BombIcon,
  PrinterIcon,
  LockIcon,
  MousePointerIcon,
  AppleIcon,
  SaveIcon,
} from "lucide-react"

const code = `import { Button } from "@/components/windows95-ui/button"

<Button>Click me</Button>`

export default function ButtonDemoPage() {
  return (
    <ComponentDemoPage
      title="Button"
      description="Displays a button or a component that looks like a button."
      code={code}
    >
      <Example title="Buttons" className="items-center justify-center gap-8">
        {/* Primary Buttons */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Primary</h3>
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Bordered</Button>
            <Button variant="outline" className="border-black">Bordered 2</Button>
          </div>
        </div>

        {/* Color Variations */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Color Variations</h3>
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button className="bg-[#000080] text-white">Tertiary</Button>
            <Button className="bg-[#0000ff] text-white">Info</Button>
            <Button className="bg-[#008000] text-white">Success</Button>
            <Button className="bg-[#ffcc00] text-black">Warning</Button>
            <Button className="bg-[#ff0000] text-white">Danger</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Sizes</h3>
          <div className="flex items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Regular</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Icon Buttons</h3>
          <div className="flex gap-2">
            <Button>
              <SettingsIcon className="mr-2 h-4 w-4" /> Start
            </Button>
            <Button>
              <SettingsIcon className="mr-2 h-4 w-4" /> Start
            </Button>
            <Button size="lg">
              <SettingsIcon className="mr-2 h-5 w-5" /> Start
            </Button>
          </div>
        </div>

        {/* More Icons */}
        <div className="flex flex-wrap gap-2">
          <Button size="sm"><KeyboardIcon className="mr-1 h-3 w-3" /> Keyboard</Button>
          <Button size="sm"><BombIcon className="mr-1 h-3 w-3" /> Bombenwarm</Button>
          <Button size="sm"><PrinterIcon className="mr-1 h-3 w-3" /> Print</Button>
          <Button size="sm"><LockIcon className="mr-1 h-3 w-3" /> Locked</Button>
          <Button size="sm"><SaveIcon className="mr-1 h-3 w-3" /> Floppy</Button>
          <Button size="sm"><MousePointerIcon className="mr-1 h-3 w-3" /> Click</Button>
          <Button size="sm"><AppleIcon className="mr-1 h-3 w-3" /> Apple</Button>
          <Button size="sm"><HelpCircleIcon className="mr-1 h-3 w-3" /> Help Manual</Button>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

