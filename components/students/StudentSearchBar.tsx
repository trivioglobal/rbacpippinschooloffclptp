'use client'

/**
 * Student Search Bar Component
 * 
 * Real-time search with debouncing
 * Updates URL params for server-side filtering
 */

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface StudentSearchBarProps {
  initialValue?: string
}

export function StudentSearchBar({ initialValue = '' }: StudentSearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(initialValue)

  // Debounce search updates
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams)
      
      if (searchValue) {
        params.set('search', searchValue)
        params.set('page', '1') // Reset to page 1 on new search
      } else {
        params.delete('search')
      }
      
      router.push(`?${params.toString()}`)
    }, 300) // 300ms debounce

    return () => clearTimeout(timer)
  }, [searchValue, router, searchParams])

  const handleClear = () => {
    setSearchValue('')
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        type="text"
        placeholder="Search by name, admission number, or parent name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pl-10 pr-10"
      />
      {searchValue && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
