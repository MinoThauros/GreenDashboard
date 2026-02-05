'use client'

import { cn } from '@/lib/utils'
import { TrendUpIcon, TrendDownIcon } from '@/components/icons'
import type { StatCard as StatCardType } from '@/lib/api/mock-data'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

interface StatCardProps {
  stat: StatCardType
  variant?: 'blue' | 'green' | 'teal' | 'red'
}

const variantStyles = {
  blue: 'border-[#2a3f35]/80 bg-gradient-to-br from-[#0d1a14] to-[#0f1f18]',
  green: 'border-[#2a3f35]/80 bg-gradient-to-br from-[#0d1a14] to-[#0f1f18]',
  teal: 'border-[#2a3f35]/80 bg-gradient-to-br from-[#0d1a14] to-[#0f1f18]',
  red: 'border-[#3f2a2a]/80 bg-gradient-to-br from-[#1a0d0d] to-[#1f0f0f]',
}

const textStyles = {
  blue: 'text-[#6b9b85]',
  green: 'text-[#6b9b85]',
  teal: 'text-[#6b9b85]',
  red: 'text-[#9b6b6b]',
}

const chartColors = {
  blue: { stroke: '#00ff8a', fill: '#00ff8a' },
  green: { stroke: '#00ff8a', fill: '#00ff8a' },
  teal: { stroke: '#00ff8a', fill: '#00ff8a' },
  red: { stroke: '#ff282b', fill: '#ff282b' },
}

export function StatCard({ stat, variant = 'green' }: StatCardProps) {
  const isPositive = stat.trend === 'up'
  const colors = chartColors[variant]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border p-4 transition-all hover:border-primary/30',
        variantStyles[variant]
      )}
    >
      <p className={cn('text-xs font-medium', textStyles[variant])}>{stat.title}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
      
      {/* Sparkline chart */}
      <div className="mt-2 h-12 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={stat.sparklineData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${stat.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.fill} stopOpacity={0.3} />
                <stop offset="100%" stopColor={colors.fill} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={colors.stroke}
              strokeWidth={2}
              fill={`url(#gradient-${stat.id})`}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Trend indicator */}
      <div
        className={cn(
          'mt-1 flex items-center gap-1 text-xs',
          isPositive ? 'text-primary' : 'text-destructive'
        )}
      >
        {isPositive ? <TrendUpIcon className="h-3 w-3" /> : <TrendDownIcon className="h-3 w-3" />}
        <span>{stat.change}%</span>
      </div>
    </div>
  )
}
