"use client"

import { ComponentDemoPage } from "@/components/component-demo-page"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"
import { Button } from "@/components/windows95-ui/button"
import { Example } from "@/components/example"

const code = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`

export default function CardDemoPage() {
  return (
    <ComponentDemoPage
      title="Card"
      description="Displays a card with header, content, and footer."
      code={code}
    >
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
    </ComponentDemoPage>
  )
}

