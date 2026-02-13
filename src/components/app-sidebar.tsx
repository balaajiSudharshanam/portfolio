import * as React from "react"

import {
  Sidebar,
  SidebarContent,
 
  SidebarRail,
} from "@/components/ui/sidebar"
import { Suspense } from "react"
import ChatWrapper from "./Chat/ChatWrapper"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <Suspense fallback={<div>Loading...</div>}>
        <ChatWrapper/>
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
