'use client'

/**
 * Student Filters Component
 * 
 * Advanced filtering for student list
 * Updates URL params for server-side filtering
 */

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, Filter } from 'lucide-react'
import { useState } from 'react'

interface StudentFiltersProps {
  initialFilters: {
    classId?: string
    section?: string
    status?: string
    gender?: string
  }
}

export function StudentFilters({ initialFilters }: StudentFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== 'all') {
      params.set(key, value)
      params.set('page', '1') // Reset to page 1
    } else {
      params.delete(key)
    }
    router.push(`?${params.toString()}`)
  }

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('class')
    params.delete('section')
    params.delete('status')
    params.delete('gender')
    params.set('page', '1')
    router.push(`?${params.toString()}`)
  }

  const activeFilterCount = Object.values(initialFilters).filter(Boolean).length

  return (
    <div className="space-y-3">
      {/* Filter Toggle Button */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFilterCount}
            </Badge>
          )}
        </Button>

        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Clear all
          </Button>
        )}
      </div>

      {/* Filter Options */}
      {isOpen && (
        <div className="bg-white rounded-lg border p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Class Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Class
              </label>
              <select
                value={initialFilters.classId || 'all'}
                onChange={(e) => updateFilter('class', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Classes</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>

            {/* Section Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Section
              </label>
              <select
                value={initialFilters.section || 'all'}
                onChange={(e) => updateFilter('section', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Status
              </label>
              <select
                value={initialFilters.status || 'all'}
                onChange={(e) => updateFilter('status', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="GRADUATED">Graduated</option>
                <option value="TRANSFERRED">Transferred</option>
                <option value="WITHDRAWN">Withdrawn</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Gender
              </label>
              <select
                value={initialFilters.gender || 'all'}
                onChange={(e) => updateFilter('gender', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Genders</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {initialFilters.classId && (
            <Badge variant="secondary" className="gap-1">
              Class: {initialFilters.classId}
              <button
                onClick={() => updateFilter('class', '')}
                className="ml-1 hover:bg-gray-300 rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {initialFilters.section && (
            <Badge variant="secondary" className="gap-1">
              Section: {initialFilters.section}
              <button
                onClick={() => updateFilter('section', '')}
                className="ml-1 hover:bg-gray-300 rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {initialFilters.status && (
            <Badge variant="secondary" className="gap-1">
              Status: {initialFilters.status}
              <button
                onClick={() => updateFilter('status', '')}
                className="ml-1 hover:bg-gray-300 rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {initialFilters.gender && (
            <Badge variant="secondary" className="gap-1">
              Gender: {initialFilters.gender}
              <button
                onClick={() => updateFilter('gender', '')}
                className="ml-1 hover:bg-gray-300 rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
