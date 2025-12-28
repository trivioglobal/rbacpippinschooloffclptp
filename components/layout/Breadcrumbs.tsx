/**
 * Breadcrumbs Component
 * 
 * Displays current page location in navigation hierarchy
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { Fragment } from 'react'

export function Breadcrumbs() {
  const pathname = usePathname()

  // Parse pathname into breadcrumb segments
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => {
      // Build the href for this segment
      const href = '/' + array.slice(0, index + 1).join('/')
      
      // Format label (capitalize and replace hyphens)
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      return { href, label, isLast: index === array.length - 1 }
    })

  // Don't show breadcrumbs on home/dashboard
  if (segments.length === 0 || (segments.length === 1 && segments[0].label === 'Admin')) {
    return null
  }

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href="/admin/dashboard"
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>

      {segments.map((segment, index) => (
        <Fragment key={segment.href}>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          
          {segment.isLast ? (
            <span className="font-medium text-gray-900">{segment.label}</span>
          ) : (
            <Link
              href={segment.href}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {segment.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
