/**
 * FILE: /app/asuransi-mobil-batam/layout.tsx
 *
 * Layout ini WAJIB ada karena page.tsx menggunakan 'use client'.
 * Metadata SEO dan JSON-LD Schema hanya bisa diekspor dari Server Component.
 * Layout ini adalah Server Component yang membungkus Client Component page.tsx.
 */

import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Mobil Batam 2025: All Risk, TLO & Kendaraan Listrik — Tarif OJK Zona 1',
  description:
    'Asuransi mobil di Batam dengan tarif resmi OJK Zona 1. Mencakup kendaraan berplat hijau FTZ, CBU ex-Singapore, dan mobil listrik. All Risk & TLO. Kalkulator premi online. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi mobil batam',
    'asuransi kendaraan batam',
    'asuransi mobil kepulauan riau',
    'premi asuransi mobil batam',
    'asuransi mobil zona 1 ojk',
    'asuransi mobil FTZ batam',
    'asuransi kendaraan plat hijau batam',
    'asuransi mobil listrik batam',
    'asuransi mobil ex singapore batam',
    'all risk TLO batam',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-mobil-batam`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Mobil Batam 2025: All Risk, TLO & Kendaraan Listrik — Tarif OJK Zona 1',
    description:
      'Asuransi mobil Batam tarif OJK Zona 1. Kendaraan plat hijau FTZ, CBU ex-Singapore, dan EV. Kalkulator premi online. Konsultasi: 0813-1556-592.',
    url: `${baseUrl}/asuransi-mobil-batam`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa premi asuransi mobil di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premi asuransi mobil di Batam mengikuti tarif OJK Zona 1 (Kepulauan Riau). All Risk: 1,05%–3,82% dari harga kendaraan per tahun. TLO: 0,20%–0,72%. Kendaraan listrik menggunakan tarif batas atas dengan risiko sendiri Rp 500.000 per kejadian.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah kendaraan berplat hijau FTZ Batam bisa diasuransikan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kendaraan berplat hijau FTZ Batam tetap bisa diasuransikan dengan polis All Risk atau TLO standar PSAKBI. Nilai pertanggungan mengacu pada harga pasar aktual di Batam. Pastikan wilayah operasional sesuai status bea cukai kendaraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara mengasuransikan mobil CBU atau ex-Singapore di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kendaraan CBU atau ex-Singapore dapat diasuransikan dengan dokumen kepemilikan sah. Nilai pertanggungan berdasarkan harga pasar lokal Batam. Konsultasikan dengan agen untuk memastikan bengkel rekanan mampu menangani spesifikasi kendaraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah asuransi mobil di Batam menanggung saat penyeberangan feri ke Bintan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSAKBI standar menanggung kerugian kendaraan selama penyeberangan feri resmi. Pastikan rute dan moda penyeberangan menggunakan kapal feri yang beroperasi secara legal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa perluasan jaminan penting untuk kendaraan di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perluasan yang direkomendasikan untuk Batam: (1) Banjir & angin topan — curah hujan Batam tinggi sepanjang tahun; (2) Kecelakaan diri pengemudi & penumpang; (3) TPL dengan limit memadai; (4) Gempa bumi untuk area dekat pantai.',
      },
    },
  ],
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Dunia Asuransi — Rio Mardiansyah',
  description: 'Konsultan Asuransi Kerugian profesional di Batam dan nasional. Spesialisasi asuransi kendaraan, kargo, engineering, dan liability korporat.',
  url: baseUrl,
  telephone: '+628131556592',
  areaServed: [
    { '@type': 'City', name: 'Batam' },
    { '@type': 'AdministrativeArea', name: 'Kepulauan Riau' },
    { '@type': 'Country', name: 'Indonesia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Produk Asuransi Kendaraan Batam',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Mobil Batam - All Risk' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Mobil Batam - TLO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Kendaraan Listrik Batam' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Mobil CBU ex-Singapore Batam' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Mobil Batam', item: `${baseUrl}/asuransi-mobil-batam` },
  ],
};

// ─── LAYOUT COMPONENT ────────────────────────────────────────────────────────
export default function AsuransiMobilBatamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Schema — hanya bisa di Server Component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  )
}
