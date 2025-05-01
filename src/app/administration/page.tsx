"use client";

export default function Administration() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Administration</h1>
          <p className="text-xl text-gray-300">
            Meet our leadership team and administrative structure
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Board of Directors */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg md:col-span-3">
            <h2 className="text-2xl font-semibold text-white mb-6">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Add board member components here */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-white font-semibold">Director Name</h3>
                <p className="text-gray-300">Position</p>
              </div>
            </div>
          </div>

          {/* Administrative Staff */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg md:col-span-3">
            <h2 className="text-2xl font-semibold text-white mb-6">Administrative Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Add staff member components here */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-white font-semibold">Staff Name</h3>
                <p className="text-gray-300">Role</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Structure */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Organization Structure</h2>
          <div className="text-gray-300">
            {/* Add organization chart or structure description here */}
            <p>Our organizational structure is designed to promote innovation, efficiency, and collaboration across all departments.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 