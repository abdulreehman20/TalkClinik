"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Leaf, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Plan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
  icon: ReactNode;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 99,
    description:
      "For single-location practices ready to stop missing after-hours calls.",
    features: [
      "24/7 AI voice receptionist",
      "Appointment booking & confirmations",
      "Missed-call recovery texts",
      "Email support",
    ],
    icon: <Leaf className="size-4" />,
  },
  {
    name: "Growth",
    price: 299,
    description:
      "For multi-provider clinics that want booking, reminders, and ROI reporting in one agent.",
    features: [
      "Everything in Starter",
      "Insurance intake & verification assist",
      "Automated no-show nudges",
      "PMS / EHR integrations",
      "Custom call flows",
      "Priority onboarding",
    ],
    featured: true,
    icon: <Sparkles className="size-4" />,
  },
  {
    name: "Scale",
    price: 599,
    description:
      "For dental groups and multi-site practices that need enterprise controls.",
    features: [
      "Everything in Growth",
      "Multi-location routing",
      "Dedicated success manager",
      "SLA & advanced analytics",
    ],
    icon: <Zap className="size-4" />,
  },
];

function useCountUp(target: number, active: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}

function  PriceDisplay({
  amount,
  active,
  featured,
}: {
  amount: number;
  active: boolean;
  featured?: boolean;
}) {
  const value = useCountUp(amount, active);

  return (
    <div
      className={cn(
        "mt-4 flex items-start gap-1",
        featured ? "text-primary-foreground" : "text-foreground",
      )}
    >
      <span className="mt-1 text-lg font-semibold">$</span>
      <span className="font-heading text-5xl font-bold tracking-tight">
        {value}
      </span>
      <span
        className={cn(
          "mt-3 text-sm",
          featured ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        /mo
      </span>
    </div>
  );
}

function FeatureList({
  features,
  active,
  featured,
}: {
  features: string[];
  active: boolean;
  featured?: boolean;
}) {
  return (
    <ul className="mt-6 flex flex-1 flex-col gap-3">
      {features.map((feature, index) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: -12 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.35, delay: 0.15 + index * 0.08 }}
          className={cn(
            "flex items-start gap-3 text-sm",
            featured ? "text-primary-foreground/90" : "text-foreground/80",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              featured
                ? "bg-primary-foreground text-primary"
                : "bg-foreground text-background",
            )}
          >
            <ArrowRight className="size-3" />
          </span>
          {feature}
        </motion.li>
      ))}
    </ul>
  );
}

function PricingCard({ plan, active }: { plan: Plan; active: boolean }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[2rem] border p-8 shadow-sm transition-shadow",
        plan.featured
          ? "z-10 min-h-136 border-primary bg-primary text-primary-foreground shadow-xl md:-my-6 md:min-h-152"
          : "min-h-120 border-border bg-card-gradient",
      )}
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-full",
          plan.featured
            ? "bg-primary-foreground/15 text-primary-foreground"
            : "bg-secondary text-secondary-foreground",
        )}
      >
        {plan.icon}
      </div>

      <span
        className={cn(
          "mt-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase",
          plan.featured
            ? "border border-primary-foreground/40 text-primary-foreground"
            : "bg-foreground text-background",
        )}
      >
        {plan.name}
      </span>

      <PriceDisplay
        amount={plan.price}
        active={active}
        featured={plan.featured}
      />

      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          plan.featured
            ? "text-primary-foreground/75"
            : "text-muted-foreground",
        )}
      >
        {plan.description}
      </p>

      <FeatureList
        features={plan.features}
        active={active}
        featured={plan.featured}
      />

      <Link
        href="/contact"
        className={cn(
          buttonVariants({
            variant: plan.featured ? "secondary" : "outline",
          }),
          "mt-8 h-11 w-full rounded-xl",
          plan.featured &&
            "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
        )}
      >
        Get started
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

export function PricingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-[#f7f7f5] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-border bg-white px-4 py-1 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Pricing
        </span>
        <h2 className="font-heading mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Choose the Right Plan
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Find the ideal plan that fits your clinic&apos;s call volume and growth
          goals. Start recovering missed appointments this week.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} active={isInView} />
        ))}
      </div>
    </section>
  );
}
