'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getIcon } from '@/components/icons'
import type { QuickAction } from '@/lib/api/mock-data'

interface QuickActionCardProps {
  action: QuickAction
}

export function QuickActionCard({ action }: QuickActionCardProps) {
  const routeMap: Record<string, string> = {
    campaigns: '/campaigns',
    analytics: '/analytics',
    strategy: '/strategy',
    integrations: '/integrations',
  }

  return (
    <Link
      href={routeMap[action.icon] || '/'}
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 transition-all',
        'hover:border-primary/50 hover:bg-muted'
      )}
    >
      <div className="mb-2 text-muted-foreground">{getIcon(action.icon, 'h-6 w-6')}</div>
      <p className="text-sm font-medium text-foreground">{action.title}</p>
      <p className="text-xs text-muted-foreground">{action.subtitle}</p>
    </Link>
  )
}
