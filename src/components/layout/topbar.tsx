'use client'

import { useUserProfile } from '@/lib/api/hooks'
import { HelpIcon, BellIcon } from '@/components/icons'
import { Avatar, AvatarImage } from '../ui/avatar'

export function TopBar() {
  const { data: user } = useUserProfile()

  return (
    <header className="flex h-16 items-center justify-end gap-4 border-b border-border bg-background px-6">
      {/* Greeting */}
      <div className="mr-auto flex items-center gap-2">
        {/* Intentionally left empty for flexibility - greeting shown on right */}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium text-foreground">
          {user?.greeting || 'Good Morning'},{' '}
          <span className="text-primary">{user?.name || 'User'}</span>{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Help Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <HelpIcon />
        </button>

        {/* Notifications Button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <BellIcon />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-destructive" />
        </button>

        {/* User Avatar */}
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary">
          <Avatar>
            <AvatarImage src={user?.avatar?? '/placeholder.svg?height=40&width=40&query=user+avatar'}/>
        
          </Avatar>
        </div>
      </div>
    </header>
  )
}
