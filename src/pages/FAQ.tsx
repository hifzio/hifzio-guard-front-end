import PageLayout from "@/components/layout/PageLayout";
import { ContentError, ContentLoading } from "@/components/ContentState";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqContent } from "@/hooks/useContentData";

const FAQ = () => {
  const { data, isPending, isError, refetch } = useFaqContent();

  if (isPending) {
    return (
      <PageLayout>
        <ContentLoading message="Loading FAQs..." />
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

  return (
    <PageLayout>
      <section className="py-24 md:py-32 bg-gradient-feature">
        <div className="container max-w-4xl">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Everything you need to know about Hifzio Guard.</p>
          </div>

          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="mt-16 border-2 border-primary/10 bg-white/50 backdrop-blur-sm p-10 text-center shadow-medium rounded-3xl">
            <h3 className="mb-4 text-2xl font-extrabold tracking-tight">Still have questions?</h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We're here to help. Reach out to our support team and we'll respond as soon as possible.
            </p>
            <a href={`mailto:${data.contactEmail}`} className="inline-block text-lg font-bold text-primary hover:underline transition-all">
              {data.contactEmail}
            </a>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
