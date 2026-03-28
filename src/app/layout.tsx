import './globals.css';
import StoreProvider from '@/store/provider';
import AgeGateProvider from '@/components/common/AgeGateProvider';

export const metadata = {
  title: 'Viking Tin',
  description: 'Premium nicotine pouch e-commerce platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AgeGateProvider>{children}</AgeGateProvider>
        </StoreProvider>
      </body>
    </html>
  );
}