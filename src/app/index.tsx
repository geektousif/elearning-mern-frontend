import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import router from "./routes";
import ErrorBoundaryFallback from "@/pages/ErrorBoundaryFallback";
import LoadingSpinner from "@/components/common/LoadingSpinner";
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <RouterProvider router={router} />;
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
