/**
 * Simple Test Page
 * 
 * This page bypasses all our complex components to test basic rendering
 */

export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Test Page Working!
        </h1>
        <p className="text-gray-600">
          If you can see this clearly, the issue is with the admin layout components.
        </p>
        <a 
          href="/login" 
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Login
        </a>
      </div>
    </div>
  )
}
