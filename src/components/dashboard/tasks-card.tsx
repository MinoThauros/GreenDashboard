'use client'

import React from "react"

import { useTasks } from '@/lib/api/hooks'
import { BaseCard, CardHeader, CardContent } from '@/components/primitives/base-card'
import { ArrowRightIcon, AvatarIcon, ConnectIcon, InsightsIcon } from '@/components/icons'

const taskIcons: Record<string, React.ReactNode> = {
  avatar: <AvatarIcon className="h-5 w-5" />,
  connect: <ConnectIcon className="h-5 w-5" />,
  insights: <InsightsIcon className="h-5 w-5" />,
}

export function TasksCard() {
  const { data: tasks } = useTasks()
  const completedCount = tasks?.filter((t) => t.completed).length || 0
  const totalCount = tasks?.length || 0

  return (
    <BaseCard className="h-full">
      <CardHeader
        action={
          <span className="text-xs text-muted-foreground">
            You have {totalCount - completedCount} out of {totalCount} tasks remaining
          </span>
        }
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted-foreground">
            <span className="text-xs text-muted-foreground">{completedCount}/{totalCount}</span>
          </div>
          Things to do
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <div className="text-muted-foreground">{taskIcons[task.icon]}</div>
              <span className="text-sm text-foreground">{task.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/80"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Skip
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </BaseCard>
  )
}
