'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"


export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Campaigns" />
    </DashboardLayout>
  )
}
