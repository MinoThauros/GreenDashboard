'use client'

import Image from 'next/image'
import { useCampaigns } from '@/lib/api/hooks'
import { BaseCard, CardHeader, CardContent } from '@/components/primitives/base-card'
import { ArrowUpRightIcon, LinkIcon, MoreVerticalIcon } from '@/components/icons'

export function CampaignsCard() {
  const { data: campaigns } = useCampaigns()

  return (
    <BaseCard className="h-full">
      <CardHeader
        action={
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowUpRightIcon />
          </button>
        }
      >
        Top Campaigns
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {campaigns?.map((campaign) => (
            <div
              key={campaign.id}
              className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={campaign.thumbnail || "/placeholder.svg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{campaign.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">{campaign.type}</span>
                <span className="w-16 text-right text-xs text-muted-foreground">
                  {campaign.size}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <LinkIcon />
                  </button>
                  <button
                    type="button"
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <MoreVerticalIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </BaseCard>
  )
}
