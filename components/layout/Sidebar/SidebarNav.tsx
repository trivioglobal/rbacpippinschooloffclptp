/**
 * Sidebar Navigation Component
 * 
 * Renders navigation menu items based on user role
 * Handles nested menu items and active state
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { useRole } from '@/lib/rbac/hooks'
import { getNavigationForRole, ADMIN_NAV_ITEMS } from '@/config/navigation'
import type { NavItem } from '@/config/navigation'

interface SidebarNavProps {
  collapsed: boolean
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
  const { role } = useRole()
  const pathname = usePathname()

  // Default to showing admin navigation if role isn't loaded yet
  const navItems = role ? getNavigationForRole(role) : ADMIN_NAV_ITEMS

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          item={item}
          pathname={pathname}
          collapsed={collapsed}
        />
      ))}
    </nav>
  )
}

/**
 * Individual navigation item
 */
function NavItem({
  item,
  pathname,
  collapsed,
  level = 0,
}: {
  item: NavItem
  pathname: string
  collapsed: boolean
  level?: number
}) {
  const [isOpen, setIsOpen] = useState(
    item.children?.some(child => pathname.startsWith(child.href)) ?? false
  )
  
  const hasChildren = item.children && item.children.length > 0
  const isActive = pathname === item.href || 
    (hasChildren && item.children?.some(child => pathname.startsWith(child.href)))
  
  const Icon = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon

  // Parent item with children
  if (hasChildren) {
    return (
      <div>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-between px-3 h-10 font-normal',
            isActive && 'bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-700',
            level > 0 && 'pl-8'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-4 w-4 shrink-0" />}
            {!collapsed && <span>{item.label}</span>}
          </div>
          {!collapsed && (
            isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          )}
        </Button>

        {/* Children */}
        {!collapsed && isOpen && (
          <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
            {item.children?.map((child) => (
              <NavItem
                key={child.href}
                item={child}
                pathname={pathname}
                collapsed={collapsed}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Leaf item (no children)
  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start px-3 h-10 font-normal',
        isActive && 'bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-700',
        level > 0 && 'pl-8'
      )}
      asChild
    >
      <Link href={item.href}>
        <div className="flex items-center gap-3 w-full">
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </>
          )}
        </div>
      </Link>
    </Button>
  )
}
