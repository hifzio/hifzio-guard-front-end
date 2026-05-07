import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSetupContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import type { DeviceType } from "@/types/content";
import { Copy, Check, AlertCircle } from "lucide-react";


const DnsCopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="ml-2 inline-flex items-center gap-1 text-xs text-primary hover:text-primary-dark transition-colors font-medium"
      aria-label={`Copy ${value}`}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const Setup = () => {
  const { data, isPending, isError, refetch } = useSetupContent();
  const [selectedDevice, setSelectedDevice] = useState<DeviceType | undefined>(undefined);

  useEffect(() => {
    if (!selectedDevice && data?.guides.length) {
      setSelectedDevice(data.guides[0].id);
    }
  }, [data, selectedDevice]);

  if (isPending || (!data && !selectedDevice)) return <PageLayout><ContentLoading message="Loading setup guide..." /></PageLayout>;
  if (isError || !data) return <PageLayout><ContentError onRetry={() => refetch()} /></PageLayout>;

  const dnsServers = data.dnsServers;
  const activeDevice = selectedDevice ?? data.guides[0].id;

  return (
    <PageLayout>
      {/* ─── PAGE HEADER ────────────────────────────────── */}
      <section className="relative bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
        <div className="container relative z-10 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Setup Guide</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Get protected in 5 minutes
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Choose your device or router below and follow the step-by-step instructions.
          </p>
        </div>
      </section>

      {/* ─── DNS SERVERS CARD ───────────────────────────── */}
      <section className="py-12 bg-muted/20 border-b border-border/50">
        <div className="container max-w-3xl">
          <div className="card-base p-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Your DNS addresses
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Primary DNS", value: dnsServers.primary, color: "text-indigo-600" },
                { label: "Secondary DNS", value: dnsServers.secondary, color: "text-violet-600" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-muted/40 border border-border/60 p-5">
                  <p className="text-xs text-muted-foreground mb-2">{s.label}</p>
                  <div className="flex items-center">
                    <code className={`font-mono text-2xl font-bold tracking-tight ${s.color}`}>{s.value}</code>
                    <DnsCopyButton value={s.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEVICE TABS ────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <Tabs value={activeDevice} onValueChange={(v) => setSelectedDevice(v as DeviceType)} className="space-y-8">
            <TabsList className="grid h-auto w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/40 p-1.5 rounded-xl">
              {data.guides.map((guide) => {
                const Icon = getIconByName(guide.icon);
                return (
                  <TabsTrigger
                    key={guide.id}
                    value={guide.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 rounded-lg text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                    <span className="leading-none">{guide.name}</span>
                    {guide.recommended && (
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Recommended</span>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {data.guides.map((guide) => (
              <TabsContent key={guide.id} value={guide.id} className="space-y-6 focus-visible:outline-none">
                {guide.sections.map((section, sIdx) => (
                  <div key={sIdx} className="card-base p-8">
                    <div className="mb-6 pb-5 border-b border-border/50">
                      <h2 className="text-xl font-bold text-foreground">{guide.name} Setup</h2>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{guide.description}</p>
                      {section.heading && (
                        <p className="mt-3 text-sm font-semibold text-primary">{section.heading}</p>
                      )}
                      {section.description && (
                        <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                      )}
                    </div>

                    <ol className="space-y-8">
                      {section.steps.map((step, i) => (
                        <li key={step.title} className="flex gap-5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-sm mt-0.5">
                            {i + 1}
                          </div>
                          <div className="flex-1 space-y-3">
                            <p className="font-semibold text-foreground">{step.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            {step.callouts && (
                              <div className="grid gap-3 sm:grid-cols-2">
                                {step.callouts.map((c) => (
                                  <div key={c.label} className="rounded-lg bg-muted/50 border border-border/60 p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">{c.label}</p>
                                    <code className="font-mono text-base font-bold text-primary">{c.value}</code>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          {/* Troubleshooting */}
          <div className="mt-10 rounded-xl bg-amber-50 border border-amber-100 p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <h3 className="font-semibold text-amber-900">Having trouble?</h3>
            </div>
            <div className="space-y-4 pl-8">
              {data.troubleshooting.map((tip) => (
                <div key={tip.title}>
                  <p className="text-sm font-semibold text-amber-900">{tip.title}</p>
                  <p className="text-sm text-amber-700 mt-0.5 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Setup;
