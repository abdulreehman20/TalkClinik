import Link from "next/link";
import { NavbarSection } from "@/components/landing/navbar-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarSection />
      <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full border border-border px-4 py-1 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Contact
        </span>
        <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Book a Demo
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          See how TalkClinik answers clinic calls 24/7, recovers missed
          appointments, and protects your schedule. We&apos;ll walk you through a
          live AI voice demo tailored to your practice.
        </p>
        <a
          href="mailto:hello@talkclinik.com?subject=Book%20a%20Demo"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 h-12 rounded-full bg-tertiary px-8 text-white hover:bg-tertiary/90",
          )}
        >
          Email us to schedule
        </a>
        <Link
          href="/"
          className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
