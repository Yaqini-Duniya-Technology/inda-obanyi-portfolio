import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Inda Obanyi" description="The requested page was not found. Explore the portfolio and project case studies." path="/404" />
      <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">404 — Page not found</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This page does not exist</h1>
        <p className="mt-5 max-w-md text-gray-300">The address may have changed. Return to the portfolio or browse the engineering case studies.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" to="/">Homepage</Link>
          <Link className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" to="/projects">View projects</Link>
        </div>
      </main>
    </>
  );
}
