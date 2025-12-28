/**
 * Admin Dashboard Page
 * 
 * Main dashboard for admin roles
 * Shows KPIs, quick actions, and recent activities
 */

import { requireProfile } from '@/lib/auth/session'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, DollarSign, FileText } from 'lucide-react'

export default async function AdminDashboardPage() {
  const profile = await requireProfile()

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {profile.full_name?.split(' ')[0]}!
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening in your school today
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-600 mt-1">
              +20 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Attendance
            </CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
            <p className="text-xs text-gray-600 mt-1">
              1,167 present today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Fee Collection
            </CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45.2L</div>
            <p className="text-xs text-gray-600 mt-1">
              85% collected this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Approvals
            </CardTitle>
            <FileText className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-600 mt-1">
              Requires your attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              <div className="flex-1">
                <p className="font-medium">New student admission</p>
                <p className="text-gray-600 text-xs">Raj Kumar admitted to Class 10-A</p>
              </div>
              <span className="text-xs text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              <div className="flex-1">
                <p className="font-medium">Attendance marked</p>
                <p className="text-gray-600 text-xs">Class 9-B attendance complete</p>
              </div>
              <span className="text-xs text-gray-500">15 min ago</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-600" />
              <div className="flex-1">
                <p className="font-medium">Fee payment received</p>
                <p className="text-gray-600 text-xs">₹25,000 from Priya Sharma</p>
              </div>
              <span className="text-xs text-gray-500">1 hour ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
