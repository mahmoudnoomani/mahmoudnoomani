type SimplePlaceholderProps = {
  entity: string;
};

export default function SimplePlaceholder({ entity }: SimplePlaceholderProps) {
  return (
    <section className="rounded-xl border border-[#e5e5e5] bg-[#F7F7F7] p-10 text-center">
      <p className="text-base font-medium text-[#111111]">This {entity} page is ready for data.</p>
      <p className="mt-2 text-sm text-[#6b7280]">Use this route for your real API integration and tables.</p>
    </section>
  );
}
