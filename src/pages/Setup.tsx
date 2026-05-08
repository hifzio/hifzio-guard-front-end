import { useEffect, useState } from "react";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSetupContent } from "@/hooks/useContentData";
import { getIconByName } from "@/lib/icon-map";
import type { DeviceType } from "@/types/content";
import { Copy, Check, AlertCircle, Apple, Play, Smartphone, ShieldCheck } from "lucide-react";


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

  if (isPending || (!data && !selectedDevice)) return <div className="py-20"><ContentLoading message="Loading setup guide..." /></div>;
  if (isError || !data) return <div className="py-20"><ContentError onRetry={() => refetch()} /></div>;

  const dnsServers = data.dnsServers;
  const activeDevice = selectedDevice ?? data.guides[0].id;

  return (
    <>
      {/* ─── PAGE HEADER ────────────────────────────────── */}
      <section className="relative bg-background border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
        <div className="container relative z-10 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Download & Setup</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Protect your digital life today
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Get the Hifzio Guard app for your device, or configure your router for network-wide protection.
          </p>
        </div>
      </section>

      {/* ─── APP DOWNLOAD SECTION ───────────────────────── */}
      <section className="py-16 md:py-20 bg-background border-b border-border/50 relative overflow-hidden">
        <div className="container max-w-5xl">
          <div className="rounded-[2.5rem] bg-slate-900 border border-slate-800 p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="flex-1 text-center md:text-left relative z-10 animate-fade-up">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/20 text-primary mb-6 shadow-inner border border-primary/20">
                <Smartphone className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Download Hifzio Guard</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Unlock device-level protection. Block adult content, addictive reels, and silence your phone automatically during Salah.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard&pcampaignid=web_share" target="_blank" rel="noreferrer noopener" className="h-14 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-80 leading-none">Download on the</p>
                    <p className="text-base font-bold leading-none mt-1">App Store</p>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.wequitech.wequi_guard&pcampaignid=web_share" target="_blank" rel="noreferrer noopener" className="h-14 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  <Play className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-80 leading-none">GET IT ON</p>
                    <p className="text-base font-bold leading-none mt-1">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="w-full max-w-xs md:w-64 h-80 bg-slate-950 rounded-t-[2rem] border border-b-0 border-slate-800 shrink-0 relative z-10 shadow-2xl flex flex-col items-center pt-8 overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Protected</h3>
                <p className="text-slate-400 text-xs mb-8">All services active</p>
                <div className="w-full px-6 space-y-3">
                   <div className="w-full h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center px-4 justify-between">
                     <span className="text-sm text-slate-300 font-medium">App Blocker</span>
                     <div className="w-8 h-4 rounded-full bg-emerald-500/50 relative"><div className="absolute right-1 top-1 bottom-1 w-2 rounded-full bg-emerald-400" /></div>
                   </div>
                   <div className="w-full h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center px-4 justify-between">
                     <span className="text-sm text-slate-300 font-medium">Salah Mute</span>
                     <div className="w-8 h-4 rounded-full bg-emerald-500/50 relative"><div className="absolute right-1 top-1 bottom-1 w-2 rounded-full bg-emerald-400" /></div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALTERNATIVE SETUP ───────────────────────────── */}
      <section className="py-12 bg-muted/10 border-b border-border/50 text-center">
        <div className="container">
           <h2 className="text-2xl font-bold mb-3">Alternative: Manual Network Setup</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-sm">Don't want to use the app? You can configure Hifzio Guard DNS directly on your router or devices for network-wide filtering.</p>
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
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <Tabs value={activeDevice} onValueChange={(v) => setSelectedDevice(v as DeviceType)} className="space-y-8">
            <TabsList className="grid h-auto w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/40 p-1.5 rounded-xl">
              {data.guides.map((guide) => {
                const Icon = getIconByName(guide.icon);
                return (
                  <TabsTrigger
                    key={guide.id}
                    value={guide.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 rounded-lg text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
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
    </>
  );
};

export default Setup;
