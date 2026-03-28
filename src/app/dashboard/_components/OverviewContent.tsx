import Image from 'next/image';
import {
  barValues,
  bestSellers,
  getLinePath,
  lineValues,
  trafficSources,
} from '@/app/dashboard/_config/data';
import BrandsTable from '@/app/dashboard/_components/BrandsTable';

export default function OverviewContent() {
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
          <p className="text-sm text-[#6b7280]">Total Revenue</p>
          <p className="mt-3 text-2xl font-semibold">$248,420</p>
          <p className="mt-2 text-xs text-[#6b7280]">+8.4% from last period</p>
        </article>

        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
          <p className="text-sm text-[#6b7280]">Orders</p>
          <p className="mt-3 text-2xl font-semibold">3,182</p>
          <p className="mt-2 text-xs text-[#6b7280]">+5.1% from last period</p>
        </article>

        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
          <p className="text-sm text-[#6b7280]">Customers</p>
          <p className="mt-3 text-2xl font-semibold">12,405</p>
          <p className="mt-2 text-xs text-[#6b7280]">+2.7% from last period</p>
        </article>

        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
          <p className="text-sm text-[#6b7280]">Top Product</p>
          <div className="mt-3 flex items-center gap-3">
            <Image
              src="/images/hero/hero.jpg"
              alt="Top product"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Air Force Pro</p>
              <p className="text-xs text-[#6b7280]">926 sold this month</p>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-12">
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 xl:col-span-3">
          <h2 className="text-sm font-semibold">Traffic Sources</h2>
          <div className="mt-4 space-y-4">
            {trafficSources.map((item) => (
              <div key={item.source}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-[#6b7280]">{item.source}</span>
                  <span className="font-medium text-[#111111]">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#f3f4f6]">
                  <div className="h-2 rounded-full bg-[#d1d5db]" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 xl:col-span-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Sales & Revenue</h2>
            <span className="text-xs text-[#6b7280]">Weekly</span>
          </div>
          <div className="flex h-52 items-end gap-3">
            {barValues.map((value, index) => (
              <div key={value + index} className="flex flex-1 flex-col justify-end">
                <div className="rounded-t-md bg-[#d1d5db]" style={{ height: `${value}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-7 text-center text-xs text-[#9ca3af]">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </article>

        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5 xl:col-span-4">
          <h2 className="text-sm font-semibold">Best Sellers</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[280px] border-separate border-spacing-y-2 text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-[#9ca3af]">
                  <th className="pb-1 font-medium">Product Name</th>
                  <th className="pb-1 font-medium">Orders</th>
                  <th className="pb-1 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {bestSellers.map((item) => (
                  <tr key={item.name}>
                    <td className="rounded-l-lg border border-r-0 border-[#e5e5e5] px-3 py-2 text-[#111111]">
                      {item.name}
                    </td>
                    <td className="border border-r-0 border-l-0 border-[#e5e5e5] px-3 py-2 text-[#6b7280]">
                      {item.orders}
                    </td>
                    <td className="rounded-r-lg border border-l-0 border-[#e5e5e5] px-3 py-2 text-[#111111]">
                      {item.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-4">
          <p className="text-xs uppercase tracking-wide text-[#9ca3af]">In Stock</p>
          <p className="mt-2 text-2xl font-semibold">2,948</p>
        </article>
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-4">
          <p className="text-xs uppercase tracking-wide text-[#9ca3af]">Low Stock</p>
          <p className="mt-2 text-2xl font-semibold">182</p>
        </article>
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-4">
          <p className="text-xs uppercase tracking-wide text-[#9ca3af]">Out of Stock</p>
          <p className="mt-2 text-2xl font-semibold">34</p>
        </article>
        <article className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-4">
          <p className="text-xs uppercase tracking-wide text-[#9ca3af]">Backorder</p>
          <p className="mt-2 text-2xl font-semibold">47</p>
        </article>
      </section>

      <BrandsTable />

      <section className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold">Sales Performance</h2>
          <span className="text-xs text-[#9ca3af]">Monthly Trend</span>
        </div>
        <div className="relative h-64 rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] p-4">
          <div
            className="absolute inset-4 rounded-lg"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, #f2f2f2 0, #f2f2f2 1px, transparent 1px, transparent 48px), repeating-linear-gradient(to bottom, #f2f2f2 0, #f2f2f2 1px, transparent 1px, transparent 44px)',
            }}
          />
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="relative z-10 h-full w-full">
            <polyline fill="none" stroke="#9ca3af" strokeWidth="2.2" points={getLinePath(lineValues)} />
          </svg>
        </div>
      </section>
    </>
  );
}
