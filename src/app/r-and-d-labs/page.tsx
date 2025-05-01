"use client";

export default function RAndDLabs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">R & D Labs</h1>
          <p className="text-xl text-gray-300">
            Explore our state-of-the-art research and development facilities
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Robotics Lab */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Robotics Laboratory</h2>
            <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>
            <p className="text-gray-300">
              Our robotics lab is equipped with cutting-edge technology for developing and testing
              advanced robotic systems, including industrial automation, collaborative robots, and
              autonomous systems.
            </p>
          </div>

          {/* AI & ML Lab */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning Lab</h2>
            <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>
            <p className="text-gray-300">
              The AI lab focuses on developing intelligent systems, computer vision applications,
              and machine learning models for various industrial and research applications.
            </p>
          </div>

          {/* IoT Lab */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">IoT & Embedded Systems Lab</h2>
            <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>
            <p className="text-gray-300">
              Our IoT lab specializes in developing connected devices, sensor networks, and
              embedded systems for smart manufacturing and industrial applications.
            </p>
          </div>

          {/* Advanced Manufacturing Lab */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Advanced Manufacturing Lab</h2>
            <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>
            <p className="text-gray-300">
              The manufacturing lab is equipped with advanced 3D printers, CNC machines, and
              other tools for prototyping and manufacturing innovative solutions.
            </p>
          </div>
        </div>

        {/* Research Focus */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">Industry 4.0</h3>
              <p>Smart manufacturing, industrial IoT, and digital transformation</p>
            </div>
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Systems</h3>
              <p>Self-driving vehicles, drones, and robotic automation</p>
            </div>
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">AI Applications</h3>
              <p>Computer vision, natural language processing, and predictive analytics</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 