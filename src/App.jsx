
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WhatsAppButton from "./components/WhatsAppButton";

/* ============================================================
   LAZY-LOADED PAGES
============================================================ */

const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* ============================================================
   PAGE LOADING FALLBACK
============================================================ */

function PageLoader() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-black px-6 text-white"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400 motion-reduce:animate-none"
          aria-hidden="true"
        />

        <p className="text-sm font-medium tracking-wide text-gray-400">
          Loading page...
        </p>
      </div>
    </main>
  );
}

/* ============================================================
   APPLICATION
============================================================ */

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-3 focus:font-semibold focus:text-black">Skip to main content</a>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ALL PROJECTS */}
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          {/* PROJECT DETAILS */}
          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
