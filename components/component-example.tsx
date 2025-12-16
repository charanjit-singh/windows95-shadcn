"use client"

import * as React from "react"

import {
  Example,
  ExampleWrapper,
} from "@/components/example"
import { Button } from "@/components/windows95-ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/windows95-ui/tabs"
import { Label } from "@/components/windows95-ui/label"
import { CheckIcon, XIcon } from "lucide-react"
import { Input } from "@/components/windows95-ui/input"
import { Textarea } from "@/components/windows95-ui/textarea"
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
import { Checkbox, RadioGroup, RadioGroupItem } from "@/components/windows95-ui/field"

export function ComponentExample() {
  return (
    <ExampleWrapper>
      <ButtonExample />
      <CardVariantsExample />
      <FormExample />
      <TabsExample />
    </ExampleWrapper>
  )
}

function TabsExample() {
  return (
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
  )
}

function ButtonExample() {
  return (
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
  )
}

function CardVariantsExample() {
  return (
    <Example title="Card Variants" className="items-center justify-center">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* Default Primary Card Header Title */}
        <Card className="w-full">
          <CardHeader variant="primary">
            <CardTitle>Default Primary Card Header Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Windows 95 sold for $99.99 as an upgrade or $179.99 for the full version.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button size="sm">OK</Button>
            <Button size="sm">Cancel</Button>
          </CardFooter>
        </Card>

        {/* Default Secondary Card Header Title */}
        <Card className="w-full">
          <CardHeader variant="secondary">
            <CardTitle>Default Secondary Card Header Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Windows 95 was available on either floppy disks or a CD-ROM. The floppy version shipped with 13 disks.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button size="sm">OK</Button>
            <Button size="sm">Cancel</Button>
          </CardFooter>
        </Card>

        {/* Default Tertiary Card Header Title */}
        <Card className="w-full">
          <CardHeader variant="tertiary">
            <CardTitle>Default Tertiary Card Header Title</CardTitle>
          </CardHeader>
          <CardContent>
          <CardDescription>
              The minimum system requirements called for a 386DX processor, 4MB of RAM, and a 120MB hard drive.
          </CardDescription>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button size="sm">OK</Button>
            <Button size="sm">Cancel</Button>
          </CardFooter>
        </Card>

        {/* Card with white background */}
        <Card className="w-full" variant="white">
          <CardHeader variant="primary">
            <CardTitle>Card with white background</CardTitle>
        </CardHeader>
          <CardContent>
            <CardDescription>
              The minimum system requirements called for a 386DX processor, 4MB of RAM, and a 120MB hard drive.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button size="sm">OK</Button>
            <Button size="sm">Cancel</Button>
        </CardFooter>
      </Card>
      </div>
    </Example>
  )
}

function FormExample() {
  return (
    <Example title="Forms">
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
  )
}
