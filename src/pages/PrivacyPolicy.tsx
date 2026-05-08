import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link2, Printer } from "lucide-react";

import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

type Section = {
  id: string;
  title: string;
  content: ReactNode;
};

const policyMeta = {
  effectiveDate: "December 4, 2024",
  lastUpdated: "January 31, 2026",
  supportEmail: "support@hifzio.com",
  websiteUrl: "https://hifzio.com",
  privacyPolicyUrl: "https://guard.hifzio.com/privacy-policy",
  deleteAccountUrl: "https://guard.hifzio.com/delete-account",
  developerName: "Hifzio Guard",
  companyName: "Wequi Technologies",
};

const policySections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          This Privacy Policy explains how {policyMeta.developerName} (“we”, “our”, or “us”) handles information for the
          Hifzio Guard mobile app and related services. By using our services, you agree to the collection and use of
          information as described here.
        </p>
        <p>
          Hifzio Guard provides DNS setup guidance and optional protection features to support safer and more focused
          browsing. We collect only what is necessary to operate the service, improve reliability, and support users.
        </p>
      </div>
    ),
  },

  {
    id: "information-collection",
    title: "Information We Collect and How We Use It",
    content: (
      <div className="space-y-5 text-muted-foreground">
        <div className="space-y-2">
          <p className="font-semibold text-foreground">Account information</p>
          <p>
            If you sign in with Google, we may collect and store basic profile information such as your name, email
            address, user ID (for example, a Firebase UID), and profile photo or photo URL (if you choose to provide it).
            We use this for account setup, authentication, and account management.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-foreground">App analytics and diagnostics</p>
          <p>
            We collect usage data (such as app interactions and features used) and diagnostics (such as crash logs and
            performance signals) to improve app stability, fix bugs, and understand how features are used. This data may
            include device and app identifiers, device OS version, app version, and approximate timestamps.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-foreground">Network / DNS-related data</p>
          <p>
            When you use DNS-related features (for example, configuring or using a filtering resolver), certain network
            data may be processed to provide filtering, security, and service operation. Depending on how you use the
            service, this may include IP address and DNS query domains processed by the resolver. We do not collect
            precise GPS location, and we do not collect the contents of the pages you visit (page content).
          </p>
          <p className="text-sm">
            Note: DNS domains can reflect the sites a device attempts to access. We use DNS-related data only for
            providing filtering/protection and service operation, and we do not use it to sell personal information.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-foreground">Support communications</p>
          <p>
            If you contact support, we may collect your email address and the contents of your message (and any
            attachments you choose to send) to respond and troubleshoot issues.
          </p>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-950">
          <p className="font-semibold text-blue-900">What we avoid</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>No collection of precise GPS location.</li>
            <li>No collection of contacts, SMS, microphone audio, or camera video.</li>
            <li>No sale or rental of personal information.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: "accessibility",
    title: "Accessibility Service (Optional)",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Some optional protection features may require the Android Accessibility Service (BIND_ACCESSIBILITY_SERVICE),
          such as detecting uninstall attempts and supporting distraction blocking (for example, blocking reels/short-video
          sections).
        </p>
        <p>
          Accessibility is used only to provide these protection features. We do not use Accessibility to read your
          passwords, messages, or keystrokes. You can disable Accessibility at any time in your device settings.
        </p>
      </div>
    ),
  },

  {
    id: "third-party-access",
    title: "Third-Party Services and Sharing",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          We use service providers to help operate and improve the app. For example, we may use Firebase Authentication
          (sign-in), Firebase Analytics (usage measurement), and Firebase Crashlytics (crash diagnostics). These providers
          may process certain data on our behalf to deliver their services.
        </p>
        <p>
          We may also disclose information if required by law, to protect rights and safety, to investigate fraud or
          abuse, or as part of a merger, acquisition, or asset transfer.
        </p>
      </div>
    ),
  },

  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <ul className="list-disc space-y-2 pl-5">
          <li>Account data is kept while you maintain an account, and deleted upon verified deletion request.</li>
          <li>Analytics and diagnostic data may be retained for a limited period to maintain and improve the service.</li>
          <li>We may retain certain records longer if required by law or for security and fraud prevention.</li>
        </ul>
      </div>
    ),
  },

  {
    id: "account-deletion",
    title: "Account Deletion",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <p>
          You can request deletion of your account and associated data via our deletion page:{" "}
          <a className="text-primary underline" href={policyMeta.deleteAccountUrl}>
            {policyMeta.deleteAccountUrl}
          </a>
          . You may also email {policyMeta.supportEmail} from your account email address. Account removal is irreversible.
        </p>
        <p>We aim to complete verified deletion requests within 30–90 days.</p>
      </div>
    ),
  },

  {
    id: "opt-out",
    title: "Your Choices and Controls",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <ul className="list-disc space-y-2 pl-5">
          <li>You can uninstall the app to stop future collection from the app.</li>
          <li>You can revoke optional permissions such as Accessibility in system settings.</li>
          <li>
            If the app provides an in-app toggle to disable analytics or diagnostics, you can use it (where available).
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "security",
    title: "Security",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <p>
          We apply reasonable physical, technical, and organizational safeguards to protect data in transit and at rest.
          No method of transmission or storage is perfectly secure, so we encourage keeping your device updated and using
          device-level security features.
        </p>
      </div>
    ),
  },

  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <p>
          We may update this policy as features or regulations change. Updates will revise the “Last updated” date above.
          Significant changes may be communicated in-app or via email.
        </p>
      </div>
    ),
  },

  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="space-y-2 text-muted-foreground">
        <p>If you have privacy questions, requests, or concerns, contact us:</p>
        <ul className="space-y-1">
          <li>
            <span className="font-semibold text-foreground">Email:</span> {policyMeta.supportEmail}
          </li>
          <li>
            <span className="font-semibold text-foreground">Website:</span> {policyMeta.websiteUrl}
          </li>
          <li>
            <span className="font-semibold text-foreground">Company:</span> {policyMeta.companyName}
          </li>
        </ul>
      </div>
    ),
  },
];

const PrivacyPolicy = () => {
  const { toast } = useToast();
  const [activeId, setActiveId] = useState(policySections[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      const offset = 140;
      let current = policySections[0]?.id ?? "";

      policySections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        if (window.scrollY + offset >= el.offsetTop) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied",
        description: "The privacy policy URL is on your clipboard.",
      });
    } catch (error) {
      console.error("Failed to copy link", error);
      toast({
        title: "Copy failed",
        description: "Please copy the link manually from the address bar.",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <PageLayout>
      <header className="bg-gradient-hero text-primary-foreground">
        <div className="container max-w-6xl py-16 md:py-20">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Privacy First</p>
            <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p className="max-w-3xl text-lg text-white/80">
              Learn how Hifzio Guard collects, uses, protects, and deletes information across our app and services.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full bg-background/10 px-3 py-1 backdrop-blur">
                Effective date: {policyMeta.effectiveDate}
              </span>
              <span className="rounded-full bg-background/10 px-3 py-1 backdrop-blur">
                Last updated: {policyMeta.lastUpdated}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-md bg-background/15 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-background/25"
              >
                <Printer className="h-4 w-4" />
                Print
              </button>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-md bg-background/15 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-background/25"
              >
                <Link2 className="h-4 w-4" />
                Copy link
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-muted/40 p-4 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Table of Contents
                </h2>
                <nav aria-label="Privacy policy sections" className="mt-4 space-y-2">
                  {policySections.map((section, index) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition hover:bg-primary/10 ${
                        activeId === section.id ? "bg-primary/15 font-semibold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span className="mr-2 text-xs text-muted-foreground">{index + 1}.</span>
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              {policySections.map((section, index) => (
                <Card
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 border border-border/80 bg-background/95 p-6 shadow-medium md:p-8"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary">{index + 1}.</div>
                    <div className="w-full space-y-4">
                      <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                      {section.content}
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="border-primary/20 bg-primary text-primary-foreground shadow-medium">
                <div className="space-y-3 p-6 md:p-8">
                  <h3 className="text-2xl font-semibold">Need help or want to exercise your rights?</h3>
                  <p className="text-primary-foreground/90">
                    Reach out and we will respond promptly with answers or next steps for any privacy request.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="inline-flex w-fit items-center justify-center rounded-md bg-background/15 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-background/25"
                      href={`mailto:${policyMeta.supportEmail}`}
                    >
                      {policyMeta.supportEmail}
                    </a>
                    <a
                      className="inline-flex w-fit items-center justify-center rounded-md bg-background/15 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-background/25"
                      href={policyMeta.deleteAccountUrl}
                    >
                      Delete account page
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
