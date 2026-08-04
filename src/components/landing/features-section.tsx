"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCalendarEvent,
  IconPhoneCall,
  IconShieldCheck,
  IconBellRinging,
  IconArrowsExchange,
  IconDatabase,
  IconUserHeart,
} from "@tabler/icons-react";
import { motion } from "motion/react";


















export function FeaturesSection() {
  return (
    <section id="features" className="bg-primary-background px-6 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest text-white/70 uppercase">
          Products
        </p>
        <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything your front desk does — handled by AI voice
        </h2>
        <p className="mt-4 text-base text-white/75">
          Built for dental and medical clinics that cannot afford a missed call
          or an empty chair.
        </p>
      </div>

      <BentoGrid className="mx-auto max-w-6xl md:auto-rows-[20rem] md:grid-cols-6">
        {items.map((item) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "border-white/15 bg-white/10 text-white shadow-none backdrop-blur-sm [&>div>div]:text-white [&>div>div:last-child]:text-white/70 dark:border-white/15 dark:bg-white/10",
              item.className,
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

function SkeletonCall() {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 flex-col justify-center space-y-3"
    >
      <motion.div
        variants={{
          initial: { x: 0 },
          animate: { x: 8, transition: { duration: 0.2 } },
        }}
        className="flex items-center gap-3 rounded-full border border-white/20 bg-white/90 px-3 py-2"
      >
        <span className="size-2.5 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-neutral-700">
          Incoming · after hours
        </span>
      </motion.div>
      <motion.div
        variants={{
          initial: { x: 0 },
          animate: { x: -8, transition: { duration: 0.2 } },
        }}
        className="ml-auto w-4/5 rounded-2xl border border-white/20 bg-white/90 px-3 py-2 text-left text-xs text-neutral-600"
      >
        Hi, I&apos;d like to book a cleaning this week…
      </motion.div>
      <div className="rounded-2xl border border-tertiary/30 bg-tertiary/20 px-3 py-2 text-left text-xs text-white">
        TalkClinik: I can get you in Thursday at 10:30 AM.
      </div>
    </motion.div>
  );
}

function SkeletonSchedule() {
  const slots = ["9:00", "10:30", "1:00", "2:30"];
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-col justify-center gap-2">
      <div className="flex gap-2">
        {slots.map((slot, i) => (
          <div
            key={slot}
            className={cn(
              "flex-1 rounded-lg border px-2 py-3 text-center text-xs font-medium",
              i === 1
                ? "border-tertiary bg-white text-tertiary"
                : "border-white/20 bg-white/10 text-white/70",
            )}
          >
            {slot}
          </div>
        ))}
      </div>
      <p className="text-center text-[11px] text-white/60">
        Best available · with alternatives
      </p>
    </div>
  );
}

function SkeletonInsurance() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center">
      <div className="w-full max-w-[12rem] rounded-xl border border-white/25 bg-white p-4 shadow-lg">
        <p className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
          Insurance
        </p>
        <p className="mt-1 text-sm font-semibold text-neutral-800">
          Delta Dental PPO
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600">
          <IconShieldCheck className="size-4" />
          Verification complete
        </div>
      </div>
    </div>
  );
}

function SkeletonNudge() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 items-end justify-center pb-2">
      <div className="w-full max-w-[14rem] rounded-t-2xl border border-b-0 border-white/25 bg-neutral-900/80 px-3 pt-3 pb-6">
        <div className="rounded-xl bg-white px-3 py-2 text-left shadow">
          <p className="text-[10px] font-semibold text-neutral-500">Reminder</p>
          <p className="mt-0.5 text-xs text-neutral-800">
            Your visit is tomorrow at 3:00 PM. Reply YES to confirm.
          </p>
        </div>
      </div>
    </div>
  );
}

function SkeletonReschedule() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center gap-3">
      <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs text-white/50 line-through">
        Tue 2:00
      </div>
      <IconArrowsExchange className="size-4 text-white/60" />
      <div className="rounded-lg border border-white/40 bg-white px-3 py-2 text-xs font-semibold text-tertiary">
        Thu 10:30
      </div>
    </div>
  );
}

function SkeletonEhr() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-col justify-center gap-2">
      {["Patient intake synced", "PMS appointment created", "Chart note queued"].map(
        (label, i) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/85"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/90 text-[10px] font-bold text-white">
              {i + 1}
            </span>
            {label}
          </div>
        ),
      )}
    </div>
  );
}

function SkeletonTriage() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center gap-3">
      {["GP", "Ortho", "Hygiene"].map((label, i) => (
        <div
          key={label}
          className={cn(
            "flex size-16 flex-col items-center justify-center rounded-full border text-[10px] font-semibold tracking-wide uppercase",
            i === 1
              ? "border-white bg-white text-tertiary shadow-lg"
              : "border-white/25 bg-white/10 text-white/70",
          )}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    title: "24/7 call answering",
    description: (
      <span className="text-sm">
        Never miss a new patient — TalkClinik picks up nights, weekends, and
        lunch rushes with natural conversation.
      </span>
    ),
    header: <SkeletonCall />,
    className: "md:col-span-3",
    icon: <IconPhoneCall className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Smart appointment booking",
    description: (
      <span className="text-sm">
        Reads your schedule rules and clinic hours, then offers the best time
        plus clear alternatives.
      </span>
    ),
    header: <SkeletonSchedule />,
    className: "md:col-span-3",
    icon: <IconCalendarEvent className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Insurance verification",
    description: (
      <span className="text-sm">
        Collects plan details and verifies eligibility before the visit to cut
        front-desk delays.
      </span>
    ),
    header: <SkeletonInsurance />,
    className: "md:col-span-2",
    icon: <IconShieldCheck className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Reschedules & waitlists",
    description: (
      <span className="text-sm">
        Handles changes, cancellations, and waitlist fills without staff
        callback loops.
      </span>
    ),
    header: <SkeletonReschedule />,
    className: "md:col-span-2",
    icon: <IconArrowsExchange className="h-4 w-4 text-white/70" />,
  },
  {
    title: "No-show reduction",
    description: (
      <span className="text-sm">
        AI-powered confirmations and nudges recover at-risk appointments before
        they become empty chairs.
      </span>
    ),
    header: <SkeletonNudge />,
    className: "md:col-span-2",
    icon: <IconBellRinging className="h-4 w-4 text-white/70" />,
  },
  {
    title: "EHR / PMS sync",
    description: (
      <span className="text-sm">
        Captures essentials before the visit and pushes them straight into your
        clinical workflow.
      </span>
    ),
    header: <SkeletonEhr />,
    className: "md:col-span-3",
    icon: <IconDatabase className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Intelligent triage",
    description: (
      <span className="text-sm">
        Routes patients to the right provider based on reason for visit,
        urgency, and availability.
      </span>
    ),
    header: <SkeletonTriage />,
    className: "md:col-span-3",
    icon: <IconUserHeart className="h-4 w-4 text-white/70" />,
  },
];
