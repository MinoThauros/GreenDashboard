'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"


export default function LogoutPage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Log Out" />
    </DashboardLayout>
  )
}
