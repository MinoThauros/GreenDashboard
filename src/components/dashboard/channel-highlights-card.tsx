'use client'

import React from "react"

import { useChannelHighlights } from '@/lib/api/hooks'
import { BaseCard, CardHeader, CardContent } from '@/components/primitives/base-card'
import {
  TrendUpIcon,
  TrendDownIcon,
  SocialIcon,
  SearchIcon,
  EmailIcon,
  MediaIcon,
} from '@/components/icons'
import { cn } from '@/lib/utils'

const channelIcons: Record<string, React.ReactNode> = {
  social: <SocialIcon className="h-5 w-5" />,
  search: <SearchIcon className="h-5 w-5" />,
  email: <EmailIcon className="h-5 w-5" />,
  media: <MediaIcon className="h-5 w-5" />,
}

export function ChannelHighlightsCard() {
  const { data: channels } = useChannelHighlights()

  return (
    <BaseCard className="h-full">
      <CardHeader>Channel Highlights</CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Name</span>
          <div className="flex gap-8">
            <span>KPI</span>
            <span className="w-16 text-right">Trend</span>
          </div>
        </div>
        <div className="space-y-3">
          {channels?.map((channel) => {
            const isPositive = channel.trend === 'up'
            return (
              <div
                key={channel.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="text-muted-foreground">{channelIcons[channel.icon]}</div>
                  <span className="text-sm text-foreground">{channel.name}</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm text-foreground">{channel.metric}</span>
                  <div
                    className={cn(
                      'flex w-16 items-center justify-end gap-1 text-sm font-medium',
                      isPositive ? 'text-primary' : 'text-destructive'
                    )}
                  >
                    {isPositive ? (
                      <TrendUpIcon className="h-3 w-3" />
                    ) : (
                      <TrendDownIcon className="h-3 w-3" />
                    )}
                    <span>{isPositive ? '' : '-'}{channel.change}%</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </BaseCard>
  )
}
