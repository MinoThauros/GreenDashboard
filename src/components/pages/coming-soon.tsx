'use client'

import { BaseCard } from '@/components/primitives/base-card'

interface ComingSoonPageProps {
  title: string
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <BaseCard className="max-w-md text-center">
        <div className="py-12">
          <div className="mb-4 text-6xl text-primary">
            <svg
              className="mx-auto h-16 w-16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground">
            This feature is coming soon. Stay tuned for updates!
          </p>
        </div>
      </BaseCard>
    </div>
  )
}
