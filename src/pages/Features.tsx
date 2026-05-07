import PageLayout from "@/components/layout/PageLayout";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { useFeatureContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const accentColors: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  secondary: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  accent: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
};

const Features = () => {
  const { data, isPending, isError, refetch } = useFeatureContent();

  if (isPending) return <PageLayout><ContentLoading message="Loading features..." /></PageLayout>;
  if (isError || !data) return <PageLayout><ContentError onRetry={() => refetch()} /></PageLayout>;

  return (
    <PageLayout>
      {/* ─── PAGE HEADER ────────────────────────────────── */}
      <section className="relative bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
        <div className="container relative z-10 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label mb-3">Features</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-5">
              {data.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {data.features.map((feature, idx) => {
              const Icon = getIconByName(feature.icon);
              const color = accentColors[feature.accent] ?? accentColors.primary;
              return (
                <div
                  key={feature.title}
                  className="card-base card-hover p-7 flex flex-col gap-5"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${color.bg} ${color.text} ${color.border}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUPPORTING STATEMENT ────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-t border-border/50">
        <div className="container">
          <div className="mx-auto max-w-xl rounded-2xl bg-primary p-10 text-center shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">{data.supportingStatement.title}</h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                {data.supportingStatement.description}
              </p>
              <Link to="/setup">
                <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-lg h-10 px-6 shadow-md">
                  Get Started Free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
