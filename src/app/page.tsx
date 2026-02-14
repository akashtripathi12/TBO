import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Voyage Event Manager</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to the Voyage Event Manager. Please log in to access your portal.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/sign-in"
            className="group block p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-200 w-full max-w-sm text-center"
          >
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Log In</h3>
            <p className="text-gray-500">Access your dashboard</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
