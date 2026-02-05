import {
  Outlet,
  createRootRoute,
  createRoute,
  Router,
  redirect,
} from '@tanstack/react-router'

import { Suspense } from 'react'

import { ThemeProvider } from '@/components/theme-provider'

/* ---------------------------------------------
   Pages
--------------------------------------------- */

// Main

// Campaigns
import ActiveCampaignsPage from '@/pages/campaigns/active/page'
import DraftCampaignsPage from '@/pages/campaigns/drafts/page'
import ArchivedCampaignsPage from '@/pages/campaigns/archived/page'

// Other pages
import AnalyticsPage from '@/pages/analytics/page'
import StrategyPage from '@/pages/strategy/page'
import ReportsPage from '@/pages/reports/page'
import AvatarsPage from '@/pages/avatars/page'
import IntegrationsPage from '@/pages/integrations/page'
import AIBrainPage from '@/pages/ai-brain/page'

// Bottom
import SettingsPage from '@/pages/settings/page'
import BookCallPage from '@/pages/book-call/page'
import RewardsPage from '@/pages/rewards/page'
import LogoutPage from '@/pages/logout/page'
import CampaignsPage from './pages/campaigns/page'
import DashboardPage from './pages/page'



/* ---------------------------------------------
   Root Route (App Shell)
--------------------------------------------- */

export const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  ),
})

/* ---------------------------------------------
   Dashboard
--------------------------------------------- */

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
})

/* ---------------------------------------------
   Campaigns (Parent Layout)
--------------------------------------------- */

export const campaignsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/campaigns',
  component: CampaignsPage,
})

/* Default redirect: /campaigns → /campaigns/active */
export const campaignsIndexRoute = createRoute({
  getParentRoute: () => campaignsRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/campaigns/active' })
  },
})

export const campaignsActiveRoute = createRoute({
  getParentRoute: () => campaignsRoute,
  path: '/active',
  component: ActiveCampaignsPage,
})

export const campaignsDraftsRoute = createRoute({
  getParentRoute: () => campaignsRoute,
  path: '/drafts',
  component: DraftCampaignsPage,
})

export const campaignsArchivedRoute = createRoute({
  getParentRoute: () => campaignsRoute,
  path: '/archived',
  component: ArchivedCampaignsPage,
})

/* ---------------------------------------------
   Other Main Routes
--------------------------------------------- */

export const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/analytics',
  component: AnalyticsPage
})

export const strategyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/strategy',
  component: StrategyPage,
})

export const reportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reports',
  component: ReportsPage,
})

export const avatarsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/avatars',
  component: AvatarsPage,
})

export const integrationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/integrations',
  component: IntegrationsPage,
})

export const aiBrainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ai-brain',
  component: AIBrainPage,
})

/* ---------------------------------------------
   Bottom Routes
--------------------------------------------- */

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
})

export const bookCallRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/book-call',
  component: BookCallPage,
})

export const rewardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rewards',
  component: RewardsPage,
})

export const logoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/logout',
  component: LogoutPage,
})

/* ---------------------------------------------
   Route Tree
--------------------------------------------- */

export const routeTree = rootRoute.addChildren([
  dashboardRoute,

  campaignsRoute.addChildren([
    campaignsIndexRoute,
    campaignsActiveRoute,
    campaignsDraftsRoute,
    campaignsArchivedRoute,
  ]),

  analyticsRoute,
  strategyRoute,
  reportsRoute,
  avatarsRoute,
  integrationsRoute,
  aiBrainRoute,

  settingsRoute,
  bookCallRoute,
  rewardsRoute,
  logoutRoute,
])

/* ---------------------------------------------
   Router Instance
--------------------------------------------- */

export const router = new Router({
  routeTree
})
