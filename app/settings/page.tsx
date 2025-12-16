"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PageBackground } from "@/components/windows95-ui/page-background"
import { PageHeader } from "@/components/windows95-ui/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/windows95-ui/tabs"
import { Input } from "@/components/windows95-ui/input"
import { Label } from "@/components/windows95-ui/label"
import { Button } from "@/components/windows95-ui/button"
import { Checkbox } from "@/components/windows95-ui/field"

export default function SettingsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "general"
  
  return (
    <PageBackground>
      <PageHeader
        title="Settings"
        description="Configure your application settings"
      />

        <Tabs defaultValue={tab} className="w-full">
          <TabsList>
            <TabsTrigger value="general" onClick={() => router.push("/settings?tab=general")}>
              General
            </TabsTrigger>
            <TabsTrigger value="security" onClick={() => router.push("/settings?tab=security")}>
              Security
            </TabsTrigger>
            <TabsTrigger value="preferences" onClick={() => router.push("/settings?tab=preferences")}>
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure general application settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Application Name</Label>
                  <Input defaultValue="Windows 95 Dashboard" />
                </div>
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Language</Label>
                  <Input defaultValue="English" />
                </div>
                <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                  <Label className="pt-2">Notifications</Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="email-notif" defaultChecked />
                      <Label htmlFor="email-notif" className="font-normal">Email notifications</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="push-notif" />
                      <Label htmlFor="push-notif" className="font-normal">Push notifications</Label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage security and privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Two-Factor Auth</Label>
                  <div className="flex items-center gap-2">
                    <Checkbox id="2fa" />
                    <Label htmlFor="2fa" className="font-normal">Enable two-factor authentication</Label>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Theme</Label>
                  <Input defaultValue="Windows 95" />
                </div>
                <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                  <Label>Date Format</Label>
                  <Input defaultValue="MM/DD/YYYY" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </PageBackground>
  )
}

