'use client'

import useSWR from 'swr'
import {
  fetchStatCards,
  fetchQuickActions,
  fetchTasks,
  fetchCampaigns,
  fetchChannelHighlights,
  fetchPerformanceData,
  fetchUserProfile,
  type StatCard,
  type QuickAction,
  type Task,
  type Campaign,
  type ChannelHighlight,
  type PerformanceDataPoint,
  type UserProfile,
} from './mock-data'

// Custom hooks following Interface Segregation Principle
// Each hook is focused on a single data concern

export function useStatCards() {
  return useSWR<StatCard[]>('stat-cards', fetchStatCards, {
    revalidateOnFocus: false,
  })
}

export function useQuickActions() {
  return useSWR<QuickAction[]>('quick-actions', fetchQuickActions, {
    revalidateOnFocus: false,
  })
}

export function useTasks() {
  return useSWR<Task[]>('tasks', fetchTasks, {
    revalidateOnFocus: false,
  })
}

export function useCampaigns() {
  return useSWR<Campaign[]>('campaigns', fetchCampaigns, {
    revalidateOnFocus: false,
  })
}

export function useChannelHighlights() {
  return useSWR<ChannelHighlight[]>('channel-highlights', fetchChannelHighlights, {
    revalidateOnFocus: false,
  })
}

export function usePerformanceData() {
  return useSWR<PerformanceDataPoint[]>('performance-data', fetchPerformanceData, {
    revalidateOnFocus: false,
  })
}

export function useUserProfile() {
  return useSWR<UserProfile>('user-profile', fetchUserProfile, {
    revalidateOnFocus: false,
  })
}
