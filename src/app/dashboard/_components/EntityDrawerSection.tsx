'use client';

import { Plus, X } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

type EntityField = {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'number';
};

type EntityDrawerSectionProps = {
  buttonLabel: string;
  fields: EntityField[];
};

export default function EntityDrawerSection({
  buttonLabel,
  fields,
}: EntityDrawerSectionProps) {
  const initialValues = useMemo(
    () =>
      fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {}),
    [fields]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>(initialValues);

  function handleOpen() {
    setFormValues(initialValues);
    setIsOpen(true);
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-linear-to-r from-[#050506] via-[#141418] to-[#2a2a31] px-4 py-2 text-sm font-semibold text-[#f8f8fa] shadow-[0_16px_32px_-18px_rgba(0,0,0,0.95)] transition-opacity hover:opacity-95"
        >
          <Plus size={16} />
          <span>{buttonLabel}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Close drawer"
            className="h-full flex-1 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="flex h-full w-full max-w-md flex-col border-l border-[#e5e7eb] bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-[#eef2f7] px-5 py-4">
              <div>
                <h3 className="text-base font-semibold text-[#111111]">{buttonLabel}</h3>
                <p className="mt-1 text-xs text-[#6b7280]">Fill the details and save.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-[#6b7280] hover:bg-[#f4f6f8] hover:text-[#111111]"
              >
                <X size={16} />
              </button>
            </header>

            <form onSubmit={handleSave} className="flex h-full flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {fields.map((field) => (
                  <label key={field.name} className="block space-y-1.5">
                    <span className="text-sm font-medium text-[#111111]">{field.label}</span>
                    <input
                      type={field.type ?? 'text'}
                      value={formValues[field.name]}
                      onChange={(event) =>
                        setFormValues((prev) => ({
                          ...prev,
                          [field.name]: event.target.value,
                        }))
                      }
                      placeholder={field.placeholder}
                      className="h-11 w-full rounded-xl border border-[#dbe1ea] bg-white px-3 text-sm text-[#111111] placeholder:text-[#9ca3af] focus:border-[#111111] focus:outline-none"
                    />
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-[#eef2f7] px-5 py-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-[#d1d5db] px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#f8fafc]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-linear-to-r from-[#050506] via-[#141418] to-[#2a2a31] px-4 py-2 text-sm font-semibold text-[#f8f8fa]"
                >
                  Save
                </button>
              </div>
            </form>
          </aside>
        </div>
      ) : null}
    </>
  );
}
