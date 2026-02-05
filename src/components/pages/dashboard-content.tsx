'use client'

import { useStatCards, useQuickActions } from '@/lib/api/hooks'
import {
  StatCard,
  QuickActionCard,
  TasksCard,
  CampaignsCard,
  ChannelHighlightsCard,
  PerformanceChart,
} from '@/components/dashboard'

export function DashboardContent() {
  const { data: statCards } = useStatCards()
  const { data: quickActions } = useQuickActions()

  const statVariants: Array<'blue' | 'green' | 'teal' | 'red'> = [
    'blue',
    'green',
    'teal',
    'red',
  ]

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Stats Row */}
      <div className="col-span-8 grid grid-cols-4 gap-4">
        {statCards?.map((stat, index) => (
          <StatCard
            key={stat.id}
            stat={stat}
            variant={statVariants[index % statVariants.length]}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="col-span-4 grid grid-cols-4 gap-4">
        {quickActions?.map((action) => (
          <QuickActionCard key={action.id} action={action} />
        ))}
      </div>

      {/* Performance Chart */}
      <div className="col-span-8">
        <PerformanceChart />
      </div>

      {/* Tasks Card */}
      <div className="col-span-4">
        <TasksCard />
      </div>

      {/* Top Campaigns */}
      <div className="col-span-8">
        <CampaignsCard />
      </div>

      {/* Channel Highlights */}
      <div className="col-span-4">
        <ChannelHighlightsCard />
      </div>
    </div>
  )
}
