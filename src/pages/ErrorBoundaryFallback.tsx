import { Link } from "react-router-dom";

const ErrorBoundaryFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
    <h1 className="mb-4 text-5xl font-bold text-red-600">Oops!</h1>
    <p className="mb-4 text-2xl">Something went wrong.</p>
    <p className="mb-6 text-lg">
      We are working to fix it. Please try again later.
    </p>
    <Link
      to="/"
      className="px-6 py-3 text-lg text-white bg-blue-600 rounded-full"
    >
      Go to Home
    </Link>
  </div>
);

export default ErrorBoundaryFallback;
