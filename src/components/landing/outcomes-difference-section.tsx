"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  CalendarCheck2,
  Clock3,
  PhoneMissed,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    value: "94%",
    label: "fewer missed calls",
    detail: "After-hours and overflow answered by AI on the first ring.",
    icon: PhoneMissed,
  },
  {
    value: "2.4×",
    label: "more booked appointments",
    detail: "Every inquiry becomes a scheduled visit — not a voicemail.",
    icon: CalendarCheck2,
  },
  {
    value: "18 hrs",
    label: "staff time saved / week",
    detail: "Front desk focuses on in-clinic care instead of phone tag.",
    icon: Clock3,
  },
  {
    value: "<30s",
    label: "average pickup time",
    detail: "Patients get answers instantly, day or night.",
    icon: TrendingUp,
  },
] as const;

const COMPARISONS = [
  {
    before: "Voicemail after 5 PM",
    after: "24/7 live AI booking",
  },
  {
    before: "No-shows fill empty chairs",
    after: "Automated confirmations & waitlist fills",
  },
  {
    before: "Staff buried in callbacks",
    after: "Escalations only when humans are needed",
  },
] as const;

export function OutcomesDifferenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative overflow-hidden bg-primary-background px-6 py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 size-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[22rem] rounded-full bg-tertiary/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
            Outcomes
          </span>
          <h2 className="font-heading mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Clinics that never miss a call grow faster
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            TalkClinik turns every ring into revenue — recovering appointments,
            freeing your team, and keeping patients from calling the practice
            down the street.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
            >
              <stat.icon className="size-5 text-white/70" />
              <p className="font-heading mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Users className="size-5 text-white/70" />
              <h3 className="font-heading text-xl font-semibold">
                Before vs after TalkClinik
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {COMPARISONS.map((row, i) => (
                <motion.li
                  key={row.before}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.1 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-[10px] font-semibold tracking-wider text-white/40 uppercase">
                      Before
                    </p>
                    <p className="mt-1 text-sm text-white/65 line-through decoration-white/30">
                      {row.before}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/25 bg-white/15 px-4 py-3">
                    <p className="text-[10px] font-semibold tracking-wider text-white/70 uppercase">
                      After
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {row.after}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between rounded-3xl border border-white/10 p-6 sm:p-8",
              "bg-card-gradient text-foreground",
            )}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-tertiary uppercase">
                Business impact
              </p>
              <h3 className="font-heading mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                More chairs filled. More patients retained.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Practices using TalkClinik report higher new-patient conversion
                and stronger recall rates because every call gets a human-quality
                response — instantly.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6">
              <div>
                <p className="font-heading text-3xl font-bold text-tertiary">
                  +31%
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  new-patient bookings
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-tertiary">
                  −42%
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  no-show rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
