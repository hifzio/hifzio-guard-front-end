import { ShieldCheck, Star, CheckCircle2, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import SetupCheckWidget from "@/components/SetupCheckWidget";
import { Button } from "@/components/ui/button";
import { useHomeContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { testimonials } from "@/data/static-content";

const accentColors: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  secondary: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  accent: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
};

const Home = () => {
  const { data, isPending, isError, refetch } = useHomeContent();

  if (isPending) {
    return (
      <PageLayout>
        <ContentLoading message="Loading..." />
      </PageLayout>
    );
  }

  if (isError || !data) {
    return (
      <PageLayout>
        <ContentError onRetry={() => refetch()} />
      </PageLayout>
    );
  }

  const { hero, socialProof, steps, finalCta } = data;

  return (
    <PageLayout mainClassName="flex flex-col">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />

        <div className="container relative z-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 badge">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>100% Free · No App Required</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-[1.1] mb-6">
              {hero.title.split(",")[0]},
              <span className="block gradient-text">{hero.title.split(",")[1]?.trim()}</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to={hero.primaryCta.href}>
                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-semibold rounded-xl bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  {hero.primaryCta.label}
                </Button>
              </Link>
              {hero.secondaryCta && (
                <Link to={hero.secondaryCta.href}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-12 px-8 text-base font-semibold rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Setup check widget */}
          <div className="mt-16 mx-auto max-w-md">
            <SetupCheckWidget />
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─────────────────────────────── */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {socialProof.map((item) => {
              const Icon = getIconByName(item.icon);
              return (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="hidden sm:inline text-muted-foreground"> — {item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Online safety in 3 simple steps
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Get protected in just minutes — no apps, no subscriptions, no technical knowledge required.
            </p>
          </div>

          {/* Step cards */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = getIconByName(step.icon);
              const color = accentColors[step.accent] ?? accentColors.primary;
              return (
                <div
                  key={step.title}
                  className="group relative card-base card-hover p-8"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {idx + 1}
                  </div>

                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border ${color.bg} ${color.text} ${color.border} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="section-label mb-3">Reviews</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by parents worldwide
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card-base p-7 flex flex-col gap-5">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>

                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-border"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-border/50">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-12 text-center shadow-xl shadow-primary/20 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">{finalCta.heading}</h2>
              <p className="text-primary-foreground/80 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                {finalCta.subheading}
              </p>
              <Link to={finalCta.cta.href}>
                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-semibold rounded-xl bg-white text-primary hover:bg-white/90 shadow-lg transition-all"
                >
                  {finalCta.cta.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Home;
