import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="mb-4 text-5xl font-bold">404</h1>
    <p className="mb-6 text-2xl">Page Not Found</p>
    <Link
      to="/"
      className="px-6 py-3 text-lg text-white bg-blue-600 rounded-full"
    >
      Go to Home
    </Link>
  </div>
);

export default NotFound;
