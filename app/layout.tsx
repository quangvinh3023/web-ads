import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'AUREA — Khám phá những trải nghiệm xứng tầm', description: 'Nền tảng khám phá dịch vụ lifestyle và quản lý quảng cáo bằng token. Bản trải nghiệm AUREA.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="vi"><body>{children}</body></html>; }
