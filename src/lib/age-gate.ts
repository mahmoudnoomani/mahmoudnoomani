const AGE_GATE_KEY = 'viking_tin_age_verified';

export function getAgeVerified(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AGE_GATE_KEY) === 'true';
}

export function setAgeVerified(value: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(AGE_GATE_KEY, value ? 'true' : 'false');
}

export function clearAgeVerified() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AGE_GATE_KEY);
}