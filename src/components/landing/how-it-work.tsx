"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GAP_PX = 20;

type Step = {
  number: string;
  title: string;
  description: string;
  visual: "sync" | "identify" | "insurance" | "book" | "remind" | "escalate";
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Sync schedules & visit types",
    description:
      "Connect your PMS so TalkClinik knows providers, locations, hours, and which visit types can be booked online.",
    visual: "sync",
  },
  {
    number: "02",
    title: "Identify patients across calls",
    description:
      "Match callers to existing charts using phone, DOB, and prior context — so returning patients skip the intake loop.",
    visual: "identify",
  },
  {
    number: "03",
    title: "Verify insurance essentials",
    description:
      "Collect plan details and run eligibility checks before the visit, cutting day-of front-desk surprises.",
    visual: "insurance",
  },
  {
    number: "04",
    title: "Book and reschedule instantly",
    description:
      "Offer the best available slot plus alternatives, write the appointment back to your schedule, and confirm by SMS.",
    visual: "book",
  },
  {
    number: "05",
    title: "Send smart reminders",
    description:
      "Automated confirmations and nudges reduce no-shows and fill cancellations from your waitlist.",
    visual: "remind",
  },
  {
    number: "06",
    title: "Escalate edge cases to staff",
    description:
      "Urgent symptoms, billing disputes, or unclear requests transfer to your team with a full call summary.",
    visual: "escalate",
  },
];

function StepVisual({ type }: { type: Step["visual"] }) {
  switch (type) {
    case "sync":
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="w-[70%] rounded-2xl border border-border/60 bg-white p-4 shadow-lg">
            <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              AI Receptionist
            </p>
            <div className="mt-3 space-y-2">
              {["Locations", "Visit Types", "Providers"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-xs font-medium text-foreground"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-1 bottom-6 size-24 rounded-full bg-tertiary/15 blur-2xl" />
        </div>
      );
    case "identify":
      return (
        <div className="flex h-full items-center justify-center">
          <div className="w-[75%] space-y-3">
            <div className="rounded-2xl border border-border bg-white p-3 shadow-md">
              <p className="text-[10px] text-muted-foreground">Caller ID</p>
              <p className="text-sm font-semibold text-foreground">
                (415) 555-0142
              </p>
            </div>
            <div className="rounded-2xl border border-tertiary/30 bg-tertiary/10 p-3">
              <p className="text-[10px] font-medium text-tertiary">Matched</p>
              <p className="text-sm font-semibold text-foreground">
                Maya Chen · Hygiene
              </p>
            </div>
          </div>
        </div>
      );
    case "insurance":
      return (
        <div className="flex h-full items-center justify-center">
          <div className="w-[70%] rounded-2xl border border-border bg-white p-5 shadow-lg">
            <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              Eligibility
            </p>
            <p className="mt-1 text-sm font-semibold">Delta Dental PPO</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-700">
              <span className="size-2 rounded-full bg-emerald-500" />
              Active · verified
            </div>
          </div>
        </div>
      );
    case "book":
      return (
        <div className="flex h-full items-center justify-center">
          <div className="grid w-[80%] grid-cols-2 gap-2">
            {["Thu 10:30", "Fri 9:00", "Mon 2:00", "Tue 11:15"].map(
              (slot, i) => (
                <div
                  key={slot}
                  className={cn(
                    "rounded-xl border px-3 py-4 text-center text-xs font-semibold",
                    i === 0
                      ? "border-tertiary bg-white text-tertiary shadow-md"
                      : "border-border/70 bg-white/50 text-muted-foreground",
                  )}
                >
                  {slot}
                </div>
              ),
            )}
          </div>
        </div>
      );
    case "remind":
      return (
        <div className="flex h-full items-end justify-center pb-4">
          <div className="w-[70%] rounded-t-3xl border border-border bg-foreground/90 px-3 pt-4 pb-8">
            <div className="rounded-2xl bg-white p-3 text-left shadow">
              <p className="text-[10px] font-semibold text-muted-foreground">
                TalkClinik
              </p>
              <p className="mt-1 text-xs text-foreground">
                Reminder: your visit is tomorrow at 3:00 PM. Reply YES to
                confirm.
              </p>
            </div>
          </div>
        </div>
      );
    case "escalate":
      return (
        <div className="flex h-full items-center justify-center">
          <div className="w-[75%] rounded-2xl border border-border bg-white p-4 shadow-lg">
            <p className="text-[10px] font-semibold text-amber-700">
              Needs staff
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Patient reports swelling after extraction. Summary transferred to
              front desk with callback priority.
            </p>
          </div>
        </div>
      );
  }
}

export function HowItWorksSection() {
  const [index, setIndex] = useState(0);
  const [stride, setStride] = useState(0);
  const firstCardRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const el = firstCardRef.current;
    if (!el) return;

    const measure = () => {
      setStride(el.getBoundingClientRect().width + GAP_PX);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(STEPS.length - 1, i + 1));

  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-heading text-right text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How AI Receptionist works
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous step"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index === STEPS.length - 1}
              aria-label="Next step"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative mt-12"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const delta =
            (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
          if (delta > 50) prev();
          if (delta < -50) next();
          touchStartX.current = null;
        }}
      >
        <div className="overflow-hidden pl-6 sm:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          <motion.div
            className="flex gap-5"
            animate={{ x: stride ? -index * stride : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            {STEPS.map((step, i) => (
              <article
                key={step.number}
                ref={i === 0 ? firstCardRef : undefined}
                // Add more width to the card
                className="relative flex h-88 w-[min(100%,34rem)] shrink-0 overflow-hidden rounded-3xl border border-border/50 bg-card-gradient p-8 shadow-sm sm:h-96 md:w-200"
              >
                <span className="absolute top-4 left-4 font-heading text-2xl font-bold text-foreground/10">
                  {step.number}
                </span>

                <div className="relative z-10 mt-auto max-w-[55%] pr-2">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="absolute top-1/2 right-4 h-[70%] w-[42%] -translate-y-1/2 sm:right-8">
                  <StepVisual type={step.visual} />
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl justify-end gap-2 px-6">
        {STEPS.map((step, i) => (
          <button
            key={step.number}
            type="button"
            aria-label={`Go to step ${step.number}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 w-6 rounded-full transition",
              i === index ? "bg-tertiary" : "bg-border",
            )}
          />
        ))}
      </div>
    </section>
  );
}
