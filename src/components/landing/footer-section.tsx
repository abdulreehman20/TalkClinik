import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Pages",
    links: [
      { label: "Products", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
  {
    title: "Register",
    links: [
      { label: "Sign Up", href: "/sign-up" },
      { label: "Login", href: "/sign-in" },
      { label: "Forgot Password", href: "/sign-in" },
    ],
  },
] as const;

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-background text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-xs shrink-0">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="TalkClinik"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="font-heading text-lg font-semibold tracking-tight">
                TalkClinik
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/55">
              © copyright TalkClinik {year}. All rights reserved.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-3xl">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative select-none overflow-hidden pb-2 pt-8"
      >
        <p className="font-heading text-center text-[18vw] leading-none font-bold tracking-tighter text-white/6 sm:text-[14vw] lg:text-[11rem]">
          TalkClinik
        </p>
      </div>
    </footer>
  );
}
