"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INSTAGRAM_URL, NAV_GROUPS, type NavGroup } from "./siteConfig";
import { InstagramIcon, ChevronDown } from "./icons";
import { clsx } from "./clsx";

function groupIsActive(group: NavGroup, pathname: string) {
  return group.children.some((c) => c.href === pathname);
}

export default function Nav() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight sm:text-[22px]"
          onClick={() => setMobileOpen(false)}
        >
          Delta Sigma Pi
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_GROUPS.map((group) => {
            const active = groupIsActive(group, pathname);
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup((g) => (g === group.label ? null : g))}
              >
                <button
                  className={clsx(
                    "flex items-center gap-1 py-2 text-sm text-white/90 transition-colors hover:text-white",
                    active && "text-white",
                  )}
                  aria-expanded={openGroup === group.label}
                >
                  <span className={clsx(active && "underline underline-offset-[6px]")}>
                    {group.label}
                  </span>
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </button>
                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full min-w-[210px] overflow-hidden rounded-md bg-charcoal py-2 shadow-xl ring-1 ring-white/10"
                    >
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={clsx(
                            "block px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white",
                            pathname === child.href && "text-white",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/90 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <div className="space-y-[5px]">
            <span
              className={clsx(
                "block h-[2px] w-6 bg-white transition-transform",
                mobileOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span className={clsx("block h-[2px] w-6 bg-white transition-opacity", mobileOpen && "opacity-0")} />
            <span
              className={clsx(
                "block h-[2px] w-6 bg-white transition-transform",
                mobileOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-charcoal md:hidden"
          >
            <div className="px-6 py-3">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="border-b border-white/10 last:border-0">
                  <button
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                    onClick={() =>
                      setMobileGroup((g) => (g === group.label ? null : group.label))
                    }
                    aria-expanded={mobileGroup === group.label}
                  >
                    {group.label}
                    <ChevronDown
                      className={clsx(
                        "h-4 w-4 transition-transform",
                        mobileGroup === group.label && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === group.label && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2">
                          {group.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 pl-4 text-sm text-white/80"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-4 text-sm text-white/80"
              >
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
