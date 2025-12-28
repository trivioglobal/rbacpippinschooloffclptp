/**
 * Sidebar Footer Component
 * 
 * Displays user information and sign out button
 */

'use client'

import { useUser } from '@/lib/auth/hooks'
import { useSignOut } from '@/lib/auth/hooks'
import { useRole } from '@/lib/rbac/hooks'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings, User, ChevronUp } from 'lucide-react'

interface SidebarFooterProps {
  collapsed: boolean
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  const { profile } = useUser()
  const { metadata } = useRole()
  const { signOut, loading: signingOut } = useSignOut()

  // Show nothing if profile isn't loaded yet
  if (!profile) return null

  const initials = profile.full_name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase() || '??'

  if (collapsed) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full h-16 p-0 hover:bg-gray-50"
          >
            <Avatar className="h-8 w-8 mx-auto">
              <AvatarImage src={profile.avatar_url || undefined} />
              <AvatarFallback className="bg-blue-600 text-white text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">{profile.full_name}</p>
              <p className="text-xs text-gray-500">{metadata?.name || profile.role}</p>
              <p className="text-xs text-gray-400">{profile.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button className="w-full cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button className="w-full cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              className="w-full cursor-pointer text-red-600"
              onClick={signOut}
              disabled={signingOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {signingOut ? 'Signing out...' : 'Sign Out'}
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between px-4 h-16 hover:bg-gray-50"
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={profile.avatar_url || undefined} />
              <AvatarFallback className="bg-blue-600 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start min-w-0 flex-1">
              <span className="text-sm font-medium text-gray-900 truncate w-full">
                {profile.full_name}
              </span>
              <span className="text-xs text-gray-500 truncate w-full">
                {metadata?.name || profile.role}
              </span>
            </div>
          </div>
          <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{profile.full_name}</p>
            <p className="text-xs text-gray-500">{metadata?.name || profile.role}</p>
            <p className="text-xs text-gray-400">{profile.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button className="w-full cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="w-full cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            className="w-full cursor-pointer text-red-600"
            onClick={signOut}
            disabled={signingOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {signingOut ? 'Signing out...' : 'Sign Out'}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
