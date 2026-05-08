import { ContentError, ContentLoading } from "@/components/ContentState";
import { useFeatureContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const accentColors: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
};

const Features = () => {
  const { data, isPending, isError, refetch } = useFeatureContent();

  if (isPending) return <div className="py-20"><ContentLoading message="Loading features..." /></div>;
  if (isError || !data) return <div className="py-20"><ContentError onRetry={() => refetch()} /></div>;

  return (
    <>
      {/* ─── PAGE HEADER ────────────────────────────────── */}
      <section className="relative bg-background border-b border-border/50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>Features</p>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mx-auto animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ──────────────────────────────── */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto auto-rows-[minmax(250px,auto)]">
            {data.features.map((feature, idx) => {
              const Icon = getIconByName(feature.icon);
              const color = accentColors[feature.accent] ?? accentColors.primary;
              const spanClass = (idx % 3 === 0) ? "md:col-span-2 lg:col-span-2" : "col-span-1";
              
              return (
                <div
                  key={feature.title}
                  className={`group relative card-base card-hover p-8 flex flex-col justify-between overflow-hidden animate-fade-up ${spanClass}`}
                  style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
                >
                  <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border ${color.bg} ${color.text} ${color.border} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <Icon className="h-8 w-8" aria-hidden />
                  </div>
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  
                  {/* Decorative background blur for wide items */}
                  {(idx % 3 === 0) && (
                     <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full ${color.bg} blur-[80px] opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-100`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUPPORTING STATEMENT ────────────────────────── */}
      <section className="py-20 md:py-32 bg-background border-t border-border/50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-slate-900 dark:bg-slate-950 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />
            
            <div className="relative z-10 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">{data.supportingStatement.title}</h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                {data.supportingStatement.description}
              </p>
              <Link to="/setup">
                <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-2xl bg-white text-slate-900 hover:bg-slate-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
