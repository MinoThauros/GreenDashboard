'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { mainRoutes, bottomRoutes, type RouteConfig } from '@/lib/routes'
import { LogoIcon, ChevronDownIcon, MobileIcon, getIcon } from '@/components/icons'

interface NavItemProps {
  route: RouteConfig
  isActive: boolean
}

function NavItem({ route, isActive }: NavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = route.children && route.children.length > 0

  return (
    <div>
      <Link
        href={route.path}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }
        }}
        className={cn(
          'flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        <div className="flex items-center gap-3">
          {getIcon(route.icon)}
          <span>{route.label}</span>
        </div>
        {hasChildren && (
          <ChevronDownIcon
            className={cn(
              'transition-transform',
              isExpanded && 'rotate-180'
            )}
          />
        )}
      </Link>
      {hasChildren && isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {route.children?.map((child) => (
            <Link
              key={child.path}
              href={child.path}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-56 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <LogoIcon className="text-primary" />
        <MobileIcon className="text-muted-foreground" />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {mainRoutes.map((route) => (
          <NavItem
            key={route.path}
            route={route}
            isActive={pathname === route.path}
          />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <nav className="space-y-1 px-3 pb-6">
        {bottomRoutes.map((route) => (
          <NavItem
            key={route.path}
            route={route}
            isActive={pathname === route.path}
          />
        ))}
      </nav>
    </aside>
  )
}
