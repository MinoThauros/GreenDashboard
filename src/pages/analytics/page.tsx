'use client'

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ComingSoonPage } from "@/components/pages/coming-soon"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <ComingSoonPage title="Analytics" />
    </DashboardLayout>
  )
}
