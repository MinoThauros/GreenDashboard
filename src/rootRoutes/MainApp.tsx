"use client"

import { createRoute, Outlet } from "@tanstack/react-router"
import { rootRoute } from "@/App"
import { Sidebar } from "@/components/layout/sidebar"
import { TopBar } from "@/components/layout/topbar"


const MainAppRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: MainApp,
})
export default MainAppRoute

function MainApp() {
  
  return (
    <>
        <div className="flex h-screen bg-background">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
            <Sidebar />
        </div>
    
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-auto">
                <Outlet/>
            </main>
        </div>
    </div>
    
    </>
    

  )
}
