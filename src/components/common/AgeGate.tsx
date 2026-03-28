'use client';

type AgeGateProps = {
  onConfirm: () => void;
  onReject: () => void;
};

export default function AgeGate({ onConfirm, onReject }: AgeGateProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold">Age Verification</h2>
        <p className="mt-4 text-gray-600">
          Are you 21 years or older?
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 rounded-lg bg-black px-4 py-3 text-white font-medium"
          >
            Yes
          </button>

          <button
            onClick={onReject}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}