import { brandRows } from '@/app/dashboard/_config/data';

export default function BrandsTable() {
  return (
    <section className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold">Top Brands</h2>
        <span className="text-xs text-[#9ca3af]">Updated today</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-left text-xs uppercase tracking-wide text-[#9ca3af]">
              <th className="px-3 py-3 font-medium">Brand Name</th>
              <th className="px-3 py-3 font-medium">Products Count</th>
              <th className="px-3 py-3 font-medium">Total Sales</th>
              <th className="px-3 py-3 font-medium">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {brandRows.map((brand) => (
              <tr
                key={brand.name}
                className="border-b border-[#f1f1f1] transition-colors hover:bg-[#f8fafc]"
              >
                <td className="px-3 py-4 font-medium text-[#111111]">{brand.name}</td>
                <td className="px-3 py-4 text-[#6b7280]">{brand.products}</td>
                <td className="px-3 py-4 text-[#6b7280]">{brand.sales}</td>
                <td className="px-3 py-4 text-[#111111]">{brand.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
