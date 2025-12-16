"use client"

import * as React from "react"
import { ComponentDemoPage } from "@/components/component-demo-page"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/windows95-ui/alert-dialog"
import { Button } from "@/components/windows95-ui/button"
import { Example } from "@/components/example"

const code = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/windows95-ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`

export default function AlertDialogDemoPage() {
  return (
    <ComponentDemoPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
      code={code}
    >
      <Example title="Alert Dialog">
        <div className="flex flex-col gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Open Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="default">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete User</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete <strong className="font-bold">John Doe</strong>? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => {}}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction variant="destructive" onClick={() => {}}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <p className="text-sm text-gray-600">
            Click the button above to open a draggable alert dialog. The dialog can be dragged by clicking and holding the title bar.
          </p>
        </div>
      </Example>
    </ComponentDemoPage>
  )
}

