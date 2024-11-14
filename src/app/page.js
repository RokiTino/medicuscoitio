export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">My Website</div>
          <div>
            <a href="#" className="text-gray-300 hover:text-white px-4">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-4">About</a>
            <a href="#" className="text-gray-300 hover:text-white px-4">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-700">This is a simple hero section to get you started.</p>
          <a href="#" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}