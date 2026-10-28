import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Download,
  MessageCircle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Projects", section: "projects" },
  { label: "Experience", section: "experience" },
  { label: "Contact", section: "contact" },
];

const professionalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Inda-Obanyi",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/inda-obanyi-8886553a6",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const location = useLocation();
  const navigate = useNavigate();

  const email = "indaobanyi007@gmail.com";

  const whatsappLink =
    "https://wa.me/2348053694199?text=Hello%20Inda%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";

  /*
   * ============================================================
   * HOMEPAGE SECTION NAVIGATION
   * ============================================================
   */

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const navbarHeight = 90;

    const position =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: position - navbarHeight,
      behavior: "smooth",
    });
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      window.history.pushState(
        null,
        "",
        sectionId === "home" ? "/" : `/#${sectionId}`
      );

      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      scrollToSection(sectionId);

      return;
    }

    navigate(
      sectionId === "home"
        ? "/"
        : `/#${sectionId}`
    );
  };

  const handleBackToTop = () => {
    if (location.pathname === "/") {
      window.history.pushState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-black px-6 pb-8 pt-16 sm:pt-20">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-xl">
            <button
              type="button"
              onClick={() => handleNavigation("home")}
              className="group flex items-center gap-4 text-left"
              aria-label="Go to homepage"
            >
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-white transition group-hover:text-cyan-400">
                  Inda Obanyi
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400">
                  AI/ML Engineer
                </p>
              </div>
            </button>

            <h2 className="mt-7 max-w-lg text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Building intelligent systems
              <span className="text-cyan-400"> for real-world problems.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-300">
              Machine learning, AI engineering, data-driven
              applications, and software built with a focus on
              practical impact.
            </p>

            {/* Contact actions */}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-cyan-300"
              >
                <Mail size={14} />

                Get in Touch

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/resume/Inda-Obanyi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2.5 text-xs font-semibold text-gray-400 transition hover:border-cyan-400/20 hover:text-cyan-300"
              >
                <Download size={14} />
                View CV
              </a>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Navigation
            </p>

            <nav
              className="mt-6 flex flex-col items-start gap-4"
              aria-label="Footer navigation"
            >
              {navigation.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.section)
                  }
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {item.label}

                  <ArrowRightIcon />
                </button>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Connect
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {professionalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
              >
                WhatsApp

                <MessageCircle
                  size={13}
                  className="opacity-60 transition group-hover:opacity-100"
                />
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
              >
                Email

                <Mail
                  size={13}
                  className="opacity-60 transition group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 border-t border-white/[0.07]" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs text-gray-400">
              © {currentYear} Inda Obanyi. All rights reserved.
            </p>

            <p className="mt-2 text-[11px] text-gray-400">
              Designed & developed with purpose.
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* Availability */}

            <div className="hidden items-center gap-2 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-[11px] text-gray-400">
                Open to opportunities
              </span>
            </div>

            {/* Back to top */}

            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
            >
              <ArrowUp
                size={15}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*
 * Small internal arrow avoids relying on another icon export
 * for the navigation links.
 */
function ArrowRightIcon() {
  return (
    <span
      aria-hidden="true"
      className="translate-x-0 text-xs opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100"
    >
      →
    </span>
  );
}

export default Footer;