"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(siteContent.nav[0]?.label);

  // Scrollspy: item ativo conforme a seção em vista.
  useEffect(() => {
    const sections = siteContent.nav
      .filter((n) => n.href.startsWith("#"))
      .map((n) => ({ label: n.label, el: document.getElementById(n.href.slice(1)) }))
      .filter((s): s is { label: string; el: HTMLElement } => Boolean(s.el));

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => obs.observe(s.el));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:pt-4">
      <Container className="px-0">
        {/* Pílula única (compacta e centralizada) */}
        <div className="relative z-50 mx-auto flex w-full max-w-full items-center justify-between gap-2 rounded-full border border-foreground-inverse/10 bg-[#0a0f0a]/95 p-1.5 shadow-brand-lg backdrop-blur-md lg:w-fit lg:justify-start">
          {/* Logo */}
          <Link
            href="#top"
            className="shrink-0 rounded-full px-3 py-1"
            aria-label={`${siteContent.brand.name} — página inicial`}
          >
            <Wordmark className="text-lg" />
          </Link>

          {/* Navegação central */}
          <nav
            className="relative hidden items-center gap-1 lg:flex"
            aria-label="Navegação principal"
          >
            {siteContent.nav.map((item) => {
              const isActive = active === item.label;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-foreground-inverse"
                      : "text-foreground-inverse/45 hover:text-foreground-inverse/80",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground-inverse/[0.07]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-0.5 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-brand-accent"
                      style={{ boxShadow: "0 0 10px 1px rgb(var(--color-brand-accent))" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="#contato"
            className="group hidden items-center gap-2.5 rounded-full bg-brand-primary py-1.5 pl-1.5 pr-5 text-sm font-semibold text-foreground-inverse transition-colors hover:bg-brand-secondary lg:flex"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-foreground-inverse/15">
              <ArrowRight
                size={15}
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:rotate-45"
              />
            </span>
            Avaliar operação
          </Link>

          {/* Mobile toggle */}
          <button
            className="flex size-9 items-center justify-center rounded-full border border-foreground-inverse/15 text-foreground-inverse/70 transition-colors hover:text-foreground-inverse lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>

        {/* Menu mobile — overlay full-screen */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 flex flex-col bg-[#060904] px-6 pb-8 pt-20 lg:hidden">
            <nav className="grid gap-1">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMobileOpen(false);
                  }}
                  className="rounded-xl px-4 py-4 text-base font-semibold text-foreground-inverse/80 transition-colors hover:bg-foreground-inverse/[0.06] hover:text-foreground-inverse"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-primary px-4 py-4 text-base font-semibold text-foreground-inverse"
            >
              Avaliar operação
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
