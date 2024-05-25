import { Link } from "react-router-dom";

const Landing = () => (
  <div className="bg-gray-100">
    <header className="p-6 text-white bg-blue-600">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-3xl font-bold">E-Learning Platform</h1>
        <nav>
          <Link to="/login" className="mr-4 text-lg">
            Login
          </Link>
          <Link to="/signup" className="text-lg">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>

    <main className="container px-6 py-16 mx-auto">
      <section className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Welcome to the Future of Learning
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Our platform offers the best online courses to help you achieve your
          goals.
        </p>
        <Link
          to="/signup"
          className="px-6 py-3 text-lg text-white bg-blue-600 rounded-full"
        >
          Get Started
        </Link>
      </section>

      <section className="flex flex-wrap justify-around">
        <div className="max-w-sm p-6 mb-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Learn Anywhere</h3>
          <p className="mb-4 text-gray-700">
            Access your courses from any device, anywhere in the world.
          </p>
          <Link to="/signup" className="text-blue-600 underline">
            Learn More
          </Link>
        </div>

        <div className="max-w-sm p-6 mb-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Expert Teachers</h3>
          <p className="mb-4 text-gray-700">
            Learn from industry experts with years of experience.
          </p>
          <Link to="/signup" className="text-blue-600 underline">
            Learn More
          </Link>
        </div>

        <div className="max-w-sm p-6 mb-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Flexible Schedule</h3>
          <p className="mb-4 text-gray-700">
            Study at your own pace with flexible course schedules.
          </p>
          <Link to="/signup" className="text-blue-600 underline">
            Learn More
          </Link>
        </div>
      </section>
    </main>

    <footer className="py-6 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Landing;
