// Mock data layer - decoupled from UI components
// Following Single Responsibility Principle: this file only handles data

export interface SparklinePoint {
  value: number
}

export interface StatCard {
  id: string
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  sparklineData: SparklinePoint[]
}

export interface QuickAction {
  id: string
  title: string
  subtitle: string
  icon: string
}

export interface Task {
  id: string
  title: string
  icon: string
  completed: boolean
}

export interface Campaign {
  id: string
  title: string
  type: string
  size: string
  thumbnail: string
}

export interface ChannelHighlight {
  id: string
  name: string
  metric: string
  change: number
  trend: 'up' | 'down'
  icon: string
}

export interface PerformanceDataPoint {
  month: string
  revenue: number
  cost: number
}

export interface UserProfile {
  name: string
  avatar: string
  greeting: string
}

// Sparkline data for each stat card
const salesSparkline: SparklinePoint[] = [
  { value: 20 }, { value: 35 }, { value: 25 }, { value: 45 }, { value: 35 },
  { value: 55 }, { value: 45 }, { value: 60 }, { value: 50 }, { value: 70 },
  { value: 65 }, { value: 80 }, { value: 75 }, { value: 90 }, { value: 85 },
]

const profitSparkline: SparklinePoint[] = [
  { value: 30 }, { value: 25 }, { value: 40 }, { value: 35 }, { value: 50 },
  { value: 45 }, { value: 55 }, { value: 50 }, { value: 65 }, { value: 60 },
  { value: 70 }, { value: 75 }, { value: 80 }, { value: 85 }, { value: 90 },
]

const revenueSparkline: SparklinePoint[] = [
  { value: 40 }, { value: 35 }, { value: 45 }, { value: 40 }, { value: 55 },
  { value: 50 }, { value: 45 }, { value: 60 }, { value: 55 }, { value: 65 },
  { value: 60 }, { value: 70 }, { value: 75 }, { value: 80 }, { value: 85 },
]

const costSparkline: SparklinePoint[] = [
  { value: 30 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 75 },
  { value: 85 }, { value: 90 }, { value: 85 }, { value: 70 }, { value: 55 },
  { value: 45 }, { value: 40 }, { value: 35 }, { value: 40 }, { value: 45 },
]

const rendingUpSparkline: SparklinePoint[] = [
  { value: 30 }, { value: 40 }, { value: 50 }, { value: 60 }, { value: 75 }
]

// Mock data
export const mockStatCards: StatCard[] = [
  { id: '1', title: 'Total Sales', value: '2189', change: 13, trend: 'up', sparklineData: salesSparkline },
  { id: '2', title: 'Profit', value: '$24.4K', change: 13, trend: 'up', sparklineData: profitSparkline },
  { id: '3', title: 'Revenue', value: '$38.6K', change: 13, trend: 'up', sparklineData: revenueSparkline },
  { id: '4', title: 'Cost', value: '$14.2K', change: 13, trend: 'down', sparklineData: costSparkline },
]

export const mockQuickActions: QuickAction[] = [
  { id: '1', title: 'Campaigns', subtitle: '230 published', icon: 'campaigns' },
  { id: '2', title: 'Analytics', subtitle: '400+ ready', icon: 'analytics' },
  { id: '3', title: 'Strategy', subtitle: '3 new insights', icon: 'strategy' },
  { id: '4', title: 'Integrations', subtitle: '3 accounts', icon: 'integrations' },
]

export const mockTasks: Task[] = [
  { id: '1', title: 'Choose your avatar', icon: 'avatar', completed: false },
  { id: '2', title: 'Connect accounts', icon: 'connect', completed: false },
  { id: '3', title: 'Review new insights', icon: 'insights', completed: false },
]

export const mockCampaigns: Campaign[] = [
  { id: '1', title: 'Feature Highlight Graphic', type: 'JPEG', size: '5MB', thumbnail: '/placeholder.svg?height=40&width=40&query=feature+graphic' },
  { id: '2', title: 'Giveaway Graphic', type: 'JPEG', size: '5MB', thumbnail: '/placeholder.svg?height=40&width=40&query=giveaway+graphic' },
  { id: '3', title: 'Free Picks Video Day 45', type: 'JPEG', size: '105MB', thumbnail: '/placeholder.svg?height=40&width=40&query=video+thumbnail' },
  { id: '4', title: 'Freestyle Beat', type: 'MP3', size: '21MB', thumbnail: '/placeholder.svg?height=40&width=40&query=audio+file' },
  { id: '5', title: 'Work Proposal', type: 'DOCX', size: '12KB', thumbnail: '/placeholder.svg?height=40&width=40&query=document+file' },
]

export const mockChannelHighlights: ChannelHighlight[] = [
  { id: '1', name: 'Social Advertising', metric: '$3.4K ROI', change: 41, trend: 'up', icon: 'social' },
  { id: '2', name: 'Search Advertising', metric: '$12.8K ROI', change: 81, trend: 'up', icon: 'search' },
  { id: '3', name: 'Email Marketing', metric: '19.42% CTR', change: 76, trend: 'up', icon: 'email' },
  { id: '4', name: 'Social Media', metric: '532K Views', change: 24, trend: 'down', icon: 'media' },
]

export const mockPerformanceData: PerformanceDataPoint[] = [
  { month: 'Sep', revenue: 280000, cost: 180000 },
  { month: 'Oct', revenue: 420000, cost: 280000 },
  { month: 'Nov', revenue: 380000, cost: 320000 },
  { month: 'Dec', revenue: 520000, cost: 380000 },
]

export const mockUserProfile: UserProfile = {
  name: 'Ben',
  avatar: '/placeholder.svg?height=40&width=40&query=professional+man+avatar',
  greeting: 'Good Morning',
}

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Mock API functions
export async function fetchStatCards(): Promise<StatCard[]> {
  await delay(100)
  return mockStatCards
}

export async function fetchQuickActions(): Promise<QuickAction[]> {
  await delay(100)
  return mockQuickActions
}

export async function fetchTasks(): Promise<Task[]> {
  await delay(100)
  return mockTasks
}

export async function fetchCampaigns(): Promise<Campaign[]> {
  await delay(100)
  return mockCampaigns
}

export async function fetchChannelHighlights(): Promise<ChannelHighlight[]> {
  await delay(100)
  return mockChannelHighlights
}

export async function fetchPerformanceData(): Promise<PerformanceDataPoint[]> {
  await delay(100)
  return mockPerformanceData
}

export async function fetchUserProfile(): Promise<UserProfile> {
  await delay(100)
  return mockUserProfile
}
