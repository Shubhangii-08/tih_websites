"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            Learn about our mission, vision, and journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To foster innovation and technological advancement in the field of robotics and AI,
              creating solutions that benefit society and industry alike.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be a leading hub for technological innovation, driving the future of robotics
              and artificial intelligence in India and beyond.
            </p>
          </div>

          {/* History Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300">
              Founded with the support of the Department of Science and Technology, Government of India,
              we have been at the forefront of technological innovation. Our journey is marked by
              significant achievements in research, development, and industry collaboration.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 