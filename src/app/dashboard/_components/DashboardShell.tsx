'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Boxes, Search } from 'lucide-react';
import { DASHBOARD_NAV_ITEMS, DASHBOARD_PAGE_META } from '@/app/dashboard/_config/navigation';

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const currentMeta =
    DASHBOARD_PAGE_META[pathname] ?? DASHBOARD_PAGE_META['/dashboard'];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111111] font-[Inter,ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto flex max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-[#e5e5e5] bg-[#F7F7F7] p-4 md:flex md:flex-col md:gap-6">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e5e5] bg-[#f8fafc]">
              <Boxes size={18} className="text-[#111111]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Viking Analytics</p>
              <p className="text-xs text-[#6b7280]">E-commerce Suite</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {DASHBOARD_NAV_ITEMS.map(({ key, label, icon: Icon, href }) => {
              const isActive =
                pathname === href || (href !== '/dashboard' && pathname.startsWith(`${href}/`));

              return (
                <Link
                  key={key}
                  href={href}
                  className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                    isActive
                      ? 'border-[rgba(255,255,255,0.1)] bg-linear-to-r from-[#050506] via-[#141418] to-[#2a2a31] font-semibold text-[#f8f8fa] shadow-[0_16px_32px_-18px_rgba(0,0,0,0.95)]'
                      : 'border-transparent text-[#6b7280] hover:border-[rgba(0,0,0,0.08)] hover:bg-[rgba(17,17,17,0.06)] hover:text-[#1f2937]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-[#f5f5f7]' : 'text-current'} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="space-y-6">
            <section className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-transparent px-2 py-2">
              <div className="relative w-full max-w-xl">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
                />
                <input
                  type="text"
                  placeholder="Search products, orders..."
                  className="h-11 w-full rounded-full border border-[#e5e5e5] bg-white pl-11 pr-4 text-sm text-[#111111] placeholder:text-[#9ca3af] focus:border-[#d1d5db] focus:outline-none"
                />
              </div>

              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#6b7280] transition-colors hover:bg-[#f8fafc]"
                >
                  <Bell size={16} />
                </button>
                <div className="h-10 w-10 rounded-full border border-[#e5e5e5] bg-[#eef2f7]" />
              </div>
            </section>

            <section className="space-y-6 rounded-2xl border border-[#e5e5e5] bg-[#FFFFFF] p-4 md:p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {currentMeta.title}
                  </h1>
                  <p className="mt-1 text-sm text-[#6b7280]">{currentMeta.description}</p>
                </div>

                <select className="h-10 rounded-xl border border-[#e5e5e5] bg-white px-3 text-sm text-[#111111] focus:border-[#d1d5db] focus:outline-none">
                  <option>Last 7 Days</option>
                  <option>Last Month</option>
                </select>
              </div>

              {children}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
