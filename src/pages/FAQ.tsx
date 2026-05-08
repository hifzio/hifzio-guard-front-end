import PageLayout from "@/components/layout/PageLayout";
import { ContentError, ContentLoading } from "@/components/ContentState";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqContent } from "@/hooks/useContentData";
import { Mail } from "lucide-react";

const FAQ = () => {
  const { data, isPending, isError, refetch } = useFaqContent();

  if (isPending) return <PageLayout><ContentLoading message="Loading FAQs..." /></PageLayout>;
  if (isError || !data) return <PageLayout><ContentError onRetry={() => refetch()} /></PageLayout>;

  return (
    <PageLayout>
      {/* ─── PAGE HEADER ────────────────────────────────── */}
      <section className="relative bg-background border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
        <div className="container relative z-10 py-16 md:py-20 text-center">
          <p className="section-label mb-3">FAQ</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Frequently asked questions
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about Hifzio Guard. Can't find your answer?{" "}
            <a href={`mailto:${data.contactEmail}`} className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
              Contact us.
            </a>
          </p>
        </div>
      </section>

      {/* ─── ACCORDION ──────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="card-base overflow-hidden divide-y divide-border/60">
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${idx}`}
                  className="border-0 px-6 first:pt-2 last:pb-2"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CARD ───────────────────────────────── */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-8 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto leading-relaxed">
              Our team is here to help. We typically respond within one business day.
            </p>
            <a
              href={`mailto:${data.contactEmail}`}
              className="inline-flex items-center gap-2 h-10 px-6 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
