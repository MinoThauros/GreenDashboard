import React from "react"
import { cn } from '@/lib/utils'

interface BaseCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'stat' | 'highlight'
}

// Reusable card primitive following Open/Closed Principle
export function BaseCard({ children, className, variant = 'default' }: BaseCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-4',
        variant === 'stat' && 'bg-card/50',
        variant === 'highlight' && 'bg-muted/30',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export function CardHeader({ children, className, action }: CardHeaderProps) {
  return (
    <div className={cn('mb-4 flex items-center justify-between', className)}>
      <h3 className="text-base font-semibold text-foreground">{children}</h3>
      {action}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>
}
