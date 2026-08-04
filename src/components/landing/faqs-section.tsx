"use client";

import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Do I need technical skills to set this up?",
    a: "No. TalkClinik is configured with your clinic during onboarding — schedules, visit types, providers, and call scripts. Most practices go live without IT involvement beyond porting or forwarding your main line.",
  },
  {
    q: "What can the AI voice receptionist handle?",
    a: "It answers new and existing patient calls, books and reschedules appointments, collects insurance basics, sends confirmations and reminders, recovers missed calls, and escalates complex or urgent cases to your staff with full context.",
  },
  {
    q: "How secure is patient data? Are you HIPAA compliant?",
    a: "TalkClinik is built for healthcare workflows with encryption in transit and at rest, role-based access, and BAA support for covered entities. We design call handling and logging so PHI stays within your compliance posture.",
  },
  {
    q: "Can I test the agent before going live?",
    a: "Yes. Every clinic gets a sandbox period with test numbers and simulated call flows. You review transcripts, tweak scripts, and approve booking rules before patient traffic is routed to TalkClinik.",
  },
  {
    q: "What practice management or EHR systems do you integrate with?",
    a: "We sync with common dental and medical PMS/EHR platforms for schedules, patient identity, and appointment writes. If your system isn’t listed yet, our team evaluates a custom connector during the demo.",
  },
  {
    q: "What if I need a custom call workflow?",
    a: "Growth and Scale plans support custom routing — multi-location rules, specialty triage, language preferences, and escalation trees. We’ll map your front-desk playbook into the agent before launch.",
  },
] as const;

export function FaqsSection() {
  return (
    <section
      id="faq"
      className="bg-secondary/40 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:pt-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-tertiary">
            <span className="size-1.5 rounded-full bg-tertiary" />
            Help & Support
          </span>
          <h2 className="font-heading mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Everything clinics ask before putting TalkClinik on the front line —
            setup, security, integrations, and how the AI voice agent actually
            works.
          </p>
        </div>

        <Accordion
          multiple={false}
          className="gap-3 overflow-visible rounded-none border-0"
        >
          {FAQS.map((item) => (
            <AccordionItem
              key={item.q}
              value={item.q}
              className="rounded-xl border border-border bg-background shadow-sm not-last:border-b-0 data-open:bg-background"
            >
              <AccordionTrigger className="px-5 py-4 text-base font-medium text-foreground hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <span className="flex flex-1 items-center justify-between gap-4">
                  <span className="text-left">{item.q}</span>
                  <span className="relative size-5 shrink-0">
                    <Plus className="absolute inset-0 size-5 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
                    <Minus className="absolute inset-0 hidden size-5 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 text-muted-foreground">
                <p className="pb-1 leading-relaxed">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
