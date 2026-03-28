'use client';

import { useEffect, useState } from 'react';
import AgeGate from './AgeGate';
import { getAgeVerified, setAgeVerified } from '@/lib/age-gate';

type AgeGateProviderProps = {
  children: React.ReactNode;
};

export default function AgeGateProvider({ children }: AgeGateProviderProps) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setIsVerified(getAgeVerified());
  }, []);

  const handleConfirm = () => {
    setAgeVerified(true);
    setIsVerified(true);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified === null) {
    return null;
  }

  return (
    <>
      {!isVerified && (
        <AgeGate onConfirm={handleConfirm} onReject={handleReject} />
      )}
      {children}
    </>
  );
}