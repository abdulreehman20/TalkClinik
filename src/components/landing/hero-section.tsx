"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


/** Sample product-demo reel — replace with TalkClinik-owned asset when available. */
const DEMO_VIDEO_SRC = "https://youtu.be/avstbADbTtA?si=ndD2nZJMo8rUEbe1";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-10 text-center sm:pt-24">
        <h1 className="font-heading max-w-4xl text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          The AI voice front desk that{" "}
          <span className="text-tertiary">grows clinic ROI</span>
          <span className="text-primary">
            {" "}
            — zero missed calls, 24/7.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          TalkClinik is an agentic AI voice receptionist for dental and medical
          practices. It answers every call, books and recovers appointments, and
          turns after-hours demand into measurable revenue.
        </p>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-8 h-12 rounded-full border-border bg-white px-6 text-base shadow-sm",
          )}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-tertiary text-white">
            <Play className="size-3.5 fill-current" />
          </span>
          Book a Demo
        </Link>
      </div>

      <div className="relative mx-auto mt-4 max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-primary-background opacity-90" />
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={DEMO_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              poster=""
              aria-label="TalkClinik AI voice agent product demo"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <button
              type="button"
              onClick={togglePlayback}
              className="absolute inset-0 flex items-center justify-center bg-black/0 transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label={isPlaying ? "Pause demo video" : "Play demo video"}
            >
              {!isPlaying && (
                <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-tertiary shadow-lg">
                  <Play className="ml-0.5 size-7 fill-current" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
