'use client'

import { usePerformanceData } from '@/lib/api/hooks'
import { BaseCard, CardHeader, CardContent } from '@/components/primitives/base-card'
import { ArrowUpRightIcon, ChevronDownIcon } from '@/components/icons'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts'

export function PerformanceChart() {
  const { data: performanceData } = usePerformanceData()

  return (
    <BaseCard className="h-full">
      <CardHeader
        action={
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted"
            >
              Revenue
              <ChevronDownIcon />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted"
            >
              Past month
              <ChevronDownIcon />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
            >
              <ArrowUpRightIcon />
            </button>
          </div>
        }
      >
        Performance Overview
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData || []}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff8a" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00ff8a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5e8272" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5e8272" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#5e8272', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#5e8272', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#091811',
                border: '1px solid #5e8272',
                borderRadius: '8px',
                color: '#ffffff',
              }}
              labelStyle={{ color: '#83b59f' }}
              formatter={(value: number) => [`$${(value / 1000).toFixed(1)}K`, '']}
            />
            <Area
              type="monotone"
              dataKey="cost"
              stroke="#5e8272"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCost)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#00ff8a"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </BaseCard>
  )
}
