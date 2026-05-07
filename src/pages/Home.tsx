import { Link } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useHomeContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import { ShieldCheck, Star } from "lucide-react";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { SetupCheckWidget } from "@/components/SetupCheckWidget";
import { testimonials } from "@/data/static-content";

const accentStyles = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const Home = () => {
  const { data, isPending, isError, refetch } = useHomeContent();

  if (isPending) {
    return (
      <PageLayout>
        <ContentLoading message="Loading homepage content..." />
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
      <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-36">
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md shadow-sm border border-white/20">
                <ShieldCheck className="h-4 w-4" />
                <span>100% Free Family Protection</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 md:text-xl leading-relaxed lg:mx-0">
                {hero.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start pt-4">
                <Link to={hero.primaryCta.href}>
                  <Button
                    size="lg"
                    variant={hero.primaryCta.variant ?? "default"}
                    className="h-14 px-8 text-lg font-semibold shadow-large hover:shadow-medium transition-all rounded-xl"
                  >
                    {hero.primaryCta.label}
                  </Button>
                </Link>
                {hero.secondaryCta ? (
                  <Link to={hero.secondaryCta.href}>
                    <Button
                      size="lg"
                      variant={hero.secondaryCta.variant ?? "outline"}
                      className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all"
                    >
                      {hero.secondaryCta.label}
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="hidden lg:block relative z-20">
              <MockupFrame className="max-w-xl w-full">
                {hero.media.type === "video" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${hero.media.videoId}`}
                    title={hero.media.title ?? "Hifzio Guard video overview"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full aspect-video"
                  />
                ) : (
                  <img
                    src={hero.media.src}
                    alt={hero.media.alt}
                    className="w-full h-auto object-cover"
                  />
                )}
              </MockupFrame>
            </div>
          </div>
          
          <div className="mt-20">
            <SetupCheckWidget />
          </div>
        </div>
      </section>

      <section className="bg-secondary-light/50 py-16 border-y border-border/50">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
            {socialProof.map((item) => {
              const Icon = getIconByName(item.icon);
              return (
                <div key={item.label} className="flex items-center gap-4 max-w-xs text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-soft text-secondary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold tracking-tight text-foreground">{item.label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-feature py-24 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Online Safety in 3 Simple Steps
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Get protected in just minutes. We've made it as easy as possible to secure your family's internet access.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = getIconByName(step.icon);
              return (
                <Card key={step.title} className="group relative space-y-6 p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-medium rounded-2xl border-border/50 bg-white/50 backdrop-blur-sm">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accentStyles[step.accent]}`}>
                    <Icon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Loved by Parents Worldwide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it. See why families trust Hifzio Guard to protect their homes.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="flex flex-col justify-between p-8 space-y-6 shadow-soft rounded-2xl border-border/50 bg-secondary-light/30">
                <div className="space-y-4">
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <p className="font-bold tracking-tight text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 space-y-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{finalCta.heading}</h2>
          <p className="mx-auto max-w-2xl text-lg opacity-90 leading-relaxed sm:text-xl">
            {finalCta.subheading}
          </p>
          <div className="pt-6">
            <Link to={finalCta.cta.href}>
              <Button size="lg" variant={finalCta.cta.variant ?? "secondary"} className="h-14 px-10 text-lg font-bold shadow-large rounded-xl hover:-translate-y-1 transition-all">
                {finalCta.cta.label}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
