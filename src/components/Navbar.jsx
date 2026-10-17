import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    const navbarHeight = 90;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };


const handleNavigation = (href) => {
  closeMobileMenu();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const scrollBehavior = reduceMotion ? "auto" : "smooth";

  if (href === "/") {
    if (location.pathname === "/") {
      navigate("/");

      window.scrollTo({
        top: 0,
        behavior: scrollBehavior,
      });
    } else {
      navigate("/");
    }

    return;
  }

  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    navigate(href);
    return;
  }

  const sectionId = href.substring(hashIndex + 1);

  if (location.pathname === "/") {
    navigate(`/#${sectionId}`);

    // If the hash is unchanged, React Router may not
    // trigger the hash-scrolling effect again.
    if (location.hash === `#${sectionId}`) {
      scrollToSection(sectionId);
    }

    return;
  }

  navigate(`/#${sectionId}`);
};


  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }

    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      return location.pathname === href;
    }

    const sectionId = href.substring(hashIndex + 1);

    return (
      location.pathname === "/" &&
      location.hash === `#${sectionId}`
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
          : "border-b border-transparent bg-black/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="group flex items-center gap-3 text-left"
          aria-label="Inda Obanyi â€” go to homepage"
        >
          {/* Compact IO mark */}
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
            <img
              src="/images/navbar-logo.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-[15px] font-bold leading-none tracking-tight text-white transition group-hover:text-cyan-300">
              Inda Obanyi
            </p>

            <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-gray-600">
              AI/ML Engineer
            </p>
          </div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition duration-300 ${
                  active
                    ? "bg-white/[0.07] text-cyan-300"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={() => handleNavigation("/#contact")}
          className="group hidden items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-5 py-2.5 text-xs font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black lg:inline-flex"
        >
          Let's Connect

          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((previous) => !previous)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-300 lg:hidden"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>src="/images/navbar-logo.webp"
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-white/[0.07] bg-black/95 px-6 pb-7 pt-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl">

            <div className="mb-5 flex items-center gap-3 border-b border-white/[0.07] pb-5 sm:hidden">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20">
                <img

                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Inda Obanyi
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-600">
                  AI/ML Engineer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.href)
                  }
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-cyan-400/[0.08] text-cyan-300"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}

                  {isActive(item.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                handleNavigation("/#contact")
              }
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Let's Connect
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;