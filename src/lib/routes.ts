// Route configuration - centralized route definitions for easy extension
export interface RouteConfig {
  path: string
  label: string
  icon: string
  children?: RouteConfig[]
}

export const mainRoutes: RouteConfig[] = [
  { path: '/', label: 'Dashboard', icon: 'home' },
  {
    path: '/campaigns',
    label: 'Campaigns',
    icon: 'campaigns',
    children: [
      { path: '/campaigns/active', label: 'Active', icon: 'campaigns' },
      { path: '/campaigns/drafts', label: 'Drafts', icon: 'campaigns' },
      { path: '/campaigns/archived', label: 'Archived', icon: 'campaigns' },
    ],
  },
  { path: '/analytics', label: 'Analytics', icon: 'analytics' },
  { path: '/strategy', label: 'Strategy', icon: 'strategy' },
  { path: '/reports', label: 'Reports', icon: 'reports' },
  { path: '/avatars', label: 'Avatars', icon: 'avatars' },
  { path: '/integrations', label: 'Integrations', icon: 'integrations' },
  { path: '/ai-brain', label: 'AI Brain', icon: 'ai-brain' },
]

export const bottomRoutes: RouteConfig[] = [
  { path: '/settings', label: 'Settings', icon: 'settings' },
  { path: '/book-call', label: 'Book a call', icon: 'phone' },
  { path: '/rewards', label: 'Rewards', icon: 'rewards' },
  { path: '/logout', label: 'Log out', icon: 'logout' },
]

export const allRoutes = [...mainRoutes, ...bottomRoutes]
