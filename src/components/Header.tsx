import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Logo from "@/assets/hifzio_guard_with_text.svg";
import LogoDark from "@/assets/hifzio_guard_with_text_dark.svg";

const NAV_LINKS = [
  { name: "Home", hash: "#home" },
  { name: "Features", hash: "#features" },
  { name: "Setup Guide", hash: "#setup" },
  { name: "FAQ", hash: "#faq" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => l.hash.substring(1));
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (hash: string) => {
    if (location.pathname !== "/") return false;
    return activeSection === hash.substring(1);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
        setMobileOpen(false);
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full nav-glass">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
          <img src={Logo} alt="Hifzio Guard" className="h-11 w-auto dark:hidden" />
          <img src={LogoDark} alt="Hifzio Guard" className="h-11 w-auto hidden dark:block" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.hash}
              to={`/${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                isActive(link.hash)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link to="/#setup" onClick={(e) => handleNavClick(e, "#setup")}>
            <Button
              size="sm"
              className="h-9 px-4 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-dark text-white shadow-sm transition-all"
            >
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hash}
                to={`/${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.hash)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/#setup" onClick={(e) => handleNavClick(e, "#setup")}>
                <Button size="sm" className="w-full h-10 text-sm font-semibold rounded-lg">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
