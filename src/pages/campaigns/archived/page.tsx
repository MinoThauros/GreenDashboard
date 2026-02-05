'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"

export default function CampaignsArchivedPage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Archived Campaigns" />
    </DashboardLayout>
  )
}
