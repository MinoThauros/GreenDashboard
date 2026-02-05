import { Link, useMatchRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import {
  mainRoutes,
  bottomRoutes,
  type RouteConfig,
} from '@/lib/routes'

import {
  LogoIcon,
  ChevronDownIcon,
  MobileIcon,
  getIcon,
} from '@/components/icons'

/* ---------------------------------------------
   Nav Item
--------------------------------------------- */

interface NavItemProps {
  route: RouteConfig
}

function NavItem({ route }: NavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const matchRoute = useMatchRoute()

  const hasChildren = !!route.children?.length

  /**
   * Active if:
   * - Exact route matches
   * - Any child matches
   */
  const isActive =
    !!matchRoute({ to: route.path, fuzzy: true }) ||
    route.children?.some((child) =>
      matchRoute({ to: child.path, fuzzy: true }),
    )

  return (
    <div>
      {/* Parent Link */}
      <Link
        to={route.path}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault()
            setIsExpanded((v) => !v)
          }
        }}
        className={cn(
          'flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',

          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
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
              isExpanded && 'rotate-180',
            )}
          />
        )}
      </Link>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {route.children?.map((child) => {
            const isChildActive = !!matchRoute({
              to: child.path,
              fuzzy: true,
            })

            return (
              <Link
                key={child.path}
                to={child.path}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',

                  isChildActive
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {child.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* ---------------------------------------------
   Sidebar
--------------------------------------------- */

export function Sidebar() {
  return (
    <aside className="flex h-screen w-56 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <LogoIcon className="text-primary" />
        <MobileIcon className="text-muted-foreground" />
      </div>

      {/* Main */}
      <nav className="flex-1 space-y-1 px-3">
        {mainRoutes.map((route) => (
          <NavItem key={route.path} route={route} />
        ))}
      </nav>

      {/* Bottom */}
      <nav className="space-y-1 px-3 pb-6">
        {bottomRoutes.map((route) => (
          <NavItem key={route.path} route={route} />
        ))}
      </nav>
    </aside>
  )
}
