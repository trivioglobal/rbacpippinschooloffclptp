/**
 * Sidebar Component
 * 
 * Collapsible sidebar navigation for admin dashboard
 * Displays role-based menu items with icons
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import { SidebarNav } from './SidebarNav'
import { SidebarFooter } from './SidebarFooter'

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r border-gray-200 bg-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          {!collapsed && (
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Vedhitha
                </span>
                <span className="text-xs text-gray-500">School Portal</span>
              </div>
            </Link>
          )}
          
          {collapsed && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white mx-auto">
              <GraduationCap className="h-5 w-5" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <SidebarNav collapsed={collapsed} />
        </ScrollArea>

        {/* Footer */}
        <div className="border-t border-gray-200">
          <SidebarFooter collapsed={collapsed} />
        </div>

        {/* Collapse Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-gray-200 bg-white p-0 shadow-sm hover:bg-gray-50"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  )
}
