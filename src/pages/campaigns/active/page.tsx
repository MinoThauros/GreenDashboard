'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"

export default function CampaignsActivePage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Active Campaigns" />
    </DashboardLayout>
  )
}
