'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"



export default function BookCallPage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Book a Call" />
    </DashboardLayout>
  )
}
