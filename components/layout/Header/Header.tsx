/**
 * Header Component
 * 
 * Top header bar with breadcrumbs, notifications, and user menu
 */

'use client'

import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '../Breadcrumbs'

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6">
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Spacer */}
      <div className="ml-auto flex items-center gap-4">
        {/* Global Search */}
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 h-9"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge 
            variant="destructive" 
            className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
          >
            3
          </Badge>
        </Button>
      </div>
    </header>
  )
}
