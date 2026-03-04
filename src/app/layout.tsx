import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://duniaasuransi.com";

export const metadata: Metadata = {
  title: "Dunia Asuransi - Solusi Asuransi Terpercaya | Rio Mardiansyah | Kendaraan, Kebakaran, Kargo, Kecelakaan",
  description: "Dunia Asuransi adalah layanan broker asuransi profesional oleh Rio Mardiansyah. Menyediakan asuransi kendaraan, asuransi kebakaran, asuransi kargo, dan asuransi kecelakaan dengan pelayanan personal dan proses klaim mudah.",
  keywords: ["Broker Asuransi", "Agen Asuransi", "Asuransi Indonesia", "Asuransi Kendaraan", "Asuransi Kebakaran", "Asuransi Kargo", "Asuransi Kecelakaan", "Rio Mardiansyah", "Dunia Asuransi", "Klaim Cepat"],
  authors: [{ name: "Rio Mardiansyah" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Dunia Asuransi - Solusi Asuransi Terpercaya by Rio Mardiansyah",
    description: "Solusi asuransi personal untuk kendaraan, properti, kargo, dan diri Anda. Konsultasi gratis dengan Rio Mardiansyah.",
    url: baseUrl,
    siteName: "Dunia Asuransi",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Dunia Asuransi - Solusi Asuransi Terpercaya by Rio Mardiansyah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunia Asuransi - Solusi Asuransi Terpercaya",
    description: "Solusi asuransi personal untuk kendaraan, properti, kargo, dan diri Anda.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
