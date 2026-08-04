import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="bg-background px-6 py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-tertiary px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Stop losing patients to missed calls
          </h2>
          <p className="mt-5 text-base text-white/75 sm:text-lg">
            TalkClinik answers every call 24/7, books appointments on the spot,
            and recovers no-shows — so your clinic captures more revenue without
            hiring another front-desk shift.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 h-12 rounded-full border-0 bg-white/90 px-8 text-base font-semibold text-tertiary shadow-lg backdrop-blur-sm hover:bg-white",
            )}
          >
            Book a Demo
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
