"use client";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300">
            Discover our innovative research and development projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Autonomous Navigation System</h3>
              <p className="text-gray-300 mb-4">
                Development of AI-powered navigation systems for autonomous robots and vehicles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Robotics</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Smart Manufacturing Platform</h3>
              <p className="text-gray-300 mb-4">
                IoT-based platform for real-time monitoring and optimization of manufacturing processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">IoT</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Industry 4.0</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Computer Vision Analytics</h3>
              <p className="text-gray-300 mb-4">
                Advanced computer vision solutions for quality control and process automation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Research Projects</h2>
            <p className="text-gray-300">
              Our research projects focus on pushing the boundaries of technology in robotics,
              artificial intelligence, and industrial automation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Industry Collaborations</h2>
            <p className="text-gray-300">
              We work closely with industry partners to develop practical solutions that address
              real-world challenges and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 