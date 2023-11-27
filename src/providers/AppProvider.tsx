import {ReactNode, Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {MemoryRouter as Router} from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h1 className="text-lg font-semibold">Error</h1>
    </div>
  );
};

const AppProvider = (
  {
    children
  }: {
    children: ReactNode
  }
) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <h1>Loading...</h1>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </Suspense>
  );
};

export {
  AppProvider
};
