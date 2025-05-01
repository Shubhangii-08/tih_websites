"use client"; // Add this if you're using the App Router

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to iHub Drishti Foundation. We are dedicated to advancing technology and innovation.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To foster innovation and technological advancement through research, development, and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
