/**
 * FILE: /app/asuransi-mobil-batam/metadata.ts
 *
 * Karena page.tsx menggunakan 'use client', metadata SEO TIDAK BISA diekspor
 * dari page.tsx. File ini harus diimpor ke layout.tsx di folder yang sama,
 * atau dijadikan layout.tsx secara langsung.
 *
 * CARA PENGGUNAAN (opsi 1 — layout.tsx):
 * Buat file /app/asuransi-mobil-batam/layout.tsx dan impor metadata dari sini.
 *
 * CARA PENGGUNAAN (opsi 2 — langsung di layout.tsx):
 * Tempel konten export metadata di bawah langsung ke layout.tsx Anda.
 */

import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
export const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa premi asuransi mobil di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premi asuransi mobil di Batam mengikuti tarif OJK Zona 1 (Kepulauan Riau termasuk Batam). Untuk All Risk: 1,05%–3,82% dari harga kendaraan per tahun tergantung rentang harga kendaraan. TLO: 0,20%–0,72%. Untuk kendaraan listrik, digunakan tarif batas atas dengan risiko sendiri Rp 500.000 per kejadian.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah kendaraan berplat hijau FTZ Batam bisa diasuransikan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kendaraan berplat hijau (kendaraan FTZ Batam yang belum dibayar bea masuk) tetap bisa diasuransikan dengan polis All Risk atau TLO standar PSAKBI. Nilai pertanggungan harus mengacu pada harga pasar aktual kendaraan di Batam. Pastikan wilayah operasional kendaraan sesuai dengan status bea cukai-nya agar klaim tidak bermasalah.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara mengasuransikan mobil CBU atau ex-Singapore di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kendaraan CBU atau ex-Singapore dapat diasuransikan dengan syarat memiliki dokumen kepemilikan yang sah (STNK/BPKB atau dokumen setara untuk kendaraan dalam proses legalisasi). Nilai pertanggungan ditentukan berdasarkan harga pasar lokal Batam. Konsultasikan dengan agen asuransi untuk memastikan bengkel rekanan mampu menangani spesifikasi kendaraan tersebut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah asuransi mobil di Batam menanggung kerusakan saat penyeberangan feri ke Bintan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSAKBI standar menanggung kerugian kendaraan selama penyeberangan menggunakan feri resmi/kapal penyeberangan yang beroperasi secara legal. Pastikan rute dan moda penyeberangan yang Anda gunakan memenuhi ketentuan ini. Untuk perjalanan ke pulau-pulau lain di Kepri yang bukan rute feri reguler, konsultasikan dengan penanggung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja perluasan jaminan yang penting untuk kendaraan di Batam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Berdasarkan kondisi geografis dan iklim Batam, perluasan yang direkomendasikan: (1) Banjir & angin topan/badai — mengingat curah hujan tinggi Batam sepanjang tahun dan potensi banjir di beberapa kawasan; (2) Kecelakaan diri pengemudi & penumpang (PA); (3) Tanggung jawab pihak ketiga (TPL) dengan limit memadai; (4) Gempa bumi & tsunami untuk kendaraan di area tertentu dekat pantai.',
      },
    },
  ],
};

export const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Dunia Asuransi — Rio Mardiansyah',
  description: 'Konsultan Asuransi Kerugian profesional di Batam dan nasional, spesialisasi asuransi kendaraan, kargo, engineering, dan liability korporat.',
  url: baseUrl,
  telephone: '+628131556592',
  areaServed: [
    { '@type': 'City', name: 'Batam' },
    { '@type': 'AdministrativeArea', name: 'Kepulauan Riau' },
    { '@type': 'Country', name: 'Indonesia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Produk Asuransi',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Mobil Batam - All Risk' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Mobil Batam - TLO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asuransi Kendaraan Listrik Batam' } },
    ],
  },
};

export const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Mobil Batam', item: `${baseUrl}/asuransi-mobil-batam` },
  ],
};

// ─── METADATA (untuk layout.tsx) ─────────────────────────────────────────────
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

/**
 * CONTOH layout.tsx MINIMAL untuk /app/asuransi-mobil-batam/layout.tsx:
 *
 * import { metadata as pageMetadata, jsonLdFaq, jsonLdLocalBusiness, jsonLdBreadcrumb } from './metadata'
 * export const metadata = pageMetadata
 *
 * export default function Layout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <>
 *       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
 *       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
 *       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
 *       {children}
 *     </>
 *   )
 * }
 */
