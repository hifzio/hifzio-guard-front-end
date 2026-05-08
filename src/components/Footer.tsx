import { Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/hifzio_guard_with_text.svg";
import LogoDark from "@/assets/hifzio_guard_with_text_dark.svg";

const PRODUCT_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Setup Guide", path: "/setup" },
  { label: "FAQ", path: "/faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
];

const SOCIALS = [
  { icon: Twitter, href: "https://twitter.com/hifzio", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/hifzio/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:support@hifzio.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img src={Logo} alt="Hifzio Guard" className="h-11 w-auto dark:hidden" />
              <img src={LogoDark} alt="Hifzio Guard" className="h-11 w-auto hidden dark:block" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The ultimate digital protection app for your family. Block adult content, reduce digital addiction, and stay safe online.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Product</p>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legal</p>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Protect Your Family</p>
            <Link
              to="/setup"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all"
            >
              Download App
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hifzio Guard · A product of Hifzio Technologies</p>
          <p>Built with care for families everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
