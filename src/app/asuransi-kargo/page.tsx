import type { Metadata } from 'next';
import BreadcrumbSchema, { breadcrumbConfigs } from '@/components/BreadcrumbSchema';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Kargo Indonesia: Panduan ICC A, B, C & Marine Cargo [2025]',
  description:
    'Panduan lengkap Asuransi Kargo (Marine Cargo Insurance) di Indonesia: perbandingan ICC A, B, C, cara hitung premi, regulasi AAUI/OJK, dan tips klaim tidak ditolak. Dari praktisi berpengalaman.',
  keywords: [
    'asuransi kargo',
    'marine cargo insurance',
    'asuransi pengangkutan barang',
    'ICC A ICC B ICC C',
    'asuransi kargo ekspor impor',
    'asuransi pengiriman barang',
    'cargo insurance indonesia',
    'premi asuransi kargo',
    'klaim asuransi kargo',
    'institute cargo clauses',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-kargo`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Kargo Indonesia: Panduan ICC A, B, C & Marine Cargo 2025',
    description:
      'Panduan lengkap Asuransi Kargo — perbandingan ICC A, B, C, simulasi premi, regulasi OJK, dan tips klaim dari praktisi.',
    url: `${baseUrl}/asuransi-kargo`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const iccComparison = [
  {
    klausula: 'ICC A (All Risks)',
    jaminan: 'Paling luas — semua risiko kecuali pengecualian eksplisit',
    contohRisiko: 'Pencurian, kerusakan air, kerusakan handling, SRCC',
    rateRange: '0,15% – 0,35%',
    cocokUntuk: 'Barang elektronik, mesin, komoditas bernilai tinggi',
    highlight: true,
  },
  {
    klausula: 'ICC B',
    jaminan: 'Menengah — risiko yang disebutkan secara eksplisit',
    contohRisiko: 'Kebakaran, karam, tabrakan kapal, gempa bumi, tsunami',
    rateRange: '0,10% – 0,20%',
    cocokUntuk: 'Barang bulk, bahan baku industri, proyek konstruksi',
    highlight: false,
  },
  {
    klausula: 'ICC C',
    jaminan: 'Dasar — hanya risiko besar yang disebutkan',
    contohRisiko: 'Karam kapal, tabrakan, kebakaran, jettison',
    rateRange: '0,08% – 0,15%',
    cocokUntuk: 'Komoditas curah (batubara, CPO), logistik low-value',
    highlight: false,
  },
];

const klaimTips = [
  {
    no: '01',
    judul: 'Survey Kerusakan Segera — Jangan Tunda',
    isi: 'Begitu barang tiba dalam kondisi rusak, segera hubungi penanggung atau surveyor yang ditunjuk sebelum barang dibongkar atau dipindahkan. Penundaan survei adalah alasan paling umum klaim ditolak karena sulit membuktikan titik kerusakan terjadi.',
  },
  {
    no: '02',
    judul: 'Hati-hati dengan Klausa "Inherent Vice"',
    isi: 'Kerusakan yang timbul dari sifat bawaan barang (misal: buah yang busuk karena lama di perjalanan, atau barang higroskopis yang menyerap uap air) dikecualikan di semua klausula ICC. Pastikan kemasan dan kondisi pre-shipment terdokumentasi dengan baik untuk menghindari sengketa ini.',
  },
  {
    no: '03',
    judul: 'Pastikan Nilai Pertanggungan Tidak Underinsured',
    isi: 'Nilai pertanggungan yang lebih rendah dari nilai aktual barang (underinsurance) memicu "rule of average" — klaim hanya dibayar secara proporsional. Selalu hitung: Invoice Value + Freight + 10% margin. Ini sudah menjadi standar industri dan disepakati dalam polis standar AAUI.',
  },
  {
    no: '04',
    judul: 'Perubahan Rute Wajib Dilaporkan',
    isi: 'Jika rute atau moda transportasi berubah dari yang tercantum dalam polis (misal: dari laut beralih ke udara karena urgensi), wajib notifikasi ke penanggung. Tanpa endorsement perubahan, polis dapat dinyatakan void untuk perjalanan yang berbeda dari kesepakatan awal.',
  },
];

const faqData = [
  {
    question: 'Apa itu Asuransi Kargo dan apa bedanya dengan asuransi pengiriman biasa?',
    answer:
      'Asuransi Kargo atau Marine Cargo Insurance adalah perlindungan profesional terhadap risiko kerusakan atau kehilangan barang selama proses pengangkutan — baik melalui laut, udara, maupun darat. Bedanya dengan asuransi pengiriman yang ditawarkan ekspedisi: Asuransi Kargo mengikuti ketentuan ICC (Institute Cargo Clauses) yang diakui secara internasional, mencakup warehouse-to-warehouse, dan memberikan ganti rugi berdasarkan nilai aktual barang — bukan harga ganti flat seperti umumnya ditawarkan ekspedisi.',
  },
  {
    question: 'Apakah ICC A sama dengan "All Risk"? Apakah semua risiko benar-benar dijamin?',
    answer:
      'Istilah "All Risk" pada ICC A sedikit menyesatkan. ICC A memang menjamin semua risiko, KECUALI yang secara eksplisit dikecualikan dalam polis. Pengecualian umum ICC A meliputi: kerusakan akibat sifat bawaan barang (inherent vice), pengemasan yang tidak memadai, keterlambatan, kerugian akibat perang (kecuali ada klausul SRCC/War tambahan), dan kerugian akibat kebangkrutan pengangkut. Pastikan Anda memahami daftar pengecualian sebelum memilih ICC A.',
  },
  {
    question: 'Bagaimana cara menghitung premi asuransi kargo yang benar?',
    answer:
      'Rumus standar industri yang mengacu pada ketentuan AAUI: Nilai Pertanggungan = (Nilai Invoice + Freight) × 1,10. Kemudian: Premi = Nilai Pertanggungan × Rate. Rate ditentukan berdasarkan jenis barang, klausula ICC, rute, moda transportasi, dan track record pengirim. Untuk barang berisiko tinggi (elektronik, bahan kimia), underwriter dapat menerapkan loading rate di atas rate dasar.',
  },
  {
    question: 'Apakah asuransi kargo bisa dibeli per-pengiriman atau harus tahunan?',
    answer:
      'Keduanya bisa. Untuk perusahaan dengan pengiriman rutin dan volume tinggi, Open Cover Policy (polis terbuka) jauh lebih efisien — satu polis berlaku selama setahun dan dapat digunakan untuk semua pengiriman dengan melaporkan setiap shipment (declaration basis). Untuk pengiriman satu kali atau tidak rutin, Single Voyage Policy adalah pilihan yang tepat. Open Cover Policy umumnya memberikan rate yang lebih kompetitif karena volume yang dijamin lebih besar.',
  },
  {
    question: 'Berapa lama proses klaim asuransi kargo?',
    answer:
      'Berdasarkan POJK No. 23/2023, perusahaan asuransi wajib memberikan keputusan klaim (diterima atau ditolak) dalam waktu 30 hari kerja setelah dokumen klaim lengkap diterima. Untuk klaim kecil yang dokumentasinya lengkap, dalam prakteknya bisa selesai dalam 10–15 hari kerja. Klaim besar yang melibatkan survei internasional atau arbitrase bisa memakan waktu lebih lama.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Asuransi Kargo Indonesia: Panduan Lengkap ICC A, B, C & Marine Cargo 2025',
  description:
    'Panduan lengkap asuransi kargo di Indonesia mencakup perbandingan ICC A B C, cara hitung premi, regulasi OJK, dan tips klaim dari praktisi berpengalaman.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: {
    '@type': 'Organization',
    name: 'Dunia Asuransi',
    url: baseUrl,
    telephone: '+628131556592',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-kargo` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Kargo', item: `${baseUrl}/asuransi-kargo` },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AsuransiKargoPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbConfigs.asuransiKargo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-blue-200">Beranda</a>
              <span className="text-blue-500">/</span>
              <span className="text-cyan-300 font-medium">Asuransi Kargo</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30">
              🚢 Marine Cargo Insurance — Pilar Logistik & Perdagangan
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Kargo Indonesia
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl leading-relaxed mb-8">
              Setiap pengiriman barang menyimpan risiko yang tidak bisa diprediksi — dari badai di Selat
              Malaka, kontainer jatuh di pelabuhan, hingga pencurian di gudang transit. Marine Cargo
              Insurance adalah tameng finansial yang wajib dimiliki eksportir, importir, dan trader serius.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Kargo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis via WA
              </a>
              <a
                href="tel:+628131556592"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── CONTENT COLUMN ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Apa itu Asuransi Kargo */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Asuransi Kargo?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Asuransi Kargo — secara resmi disebut <em>Marine Cargo Insurance</em> — adalah jenis asuransi kerugian
                  yang memberikan perlindungan finansial terhadap risiko kerusakan, kehilangan, atau kerugian barang
                  selama proses pengangkutan dari titik asal hingga tujuan akhir (<em>warehouse to warehouse</em>).
                  Moda transportasi yang dicakup meliputi laut, udara, darat, atau kombinasi ketiganya.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Di Indonesia, produk asuransi kargo mengacu pada <strong>Polis Standar Asuransi Pengangkutan Barang
                  Indonesia (PSPBI)</strong> yang ditetapkan oleh AAUI (Asosiasi Asuransi Umum Indonesia) dan diawasi
                  oleh OJK berdasarkan <strong>POJK Nomor 23 Tahun 2023</strong> tentang Produk Asuransi. Untuk
                  perdagangan internasional, standar yang berlaku adalah <strong>Institute Cargo Clauses (ICC)</strong>{' '}
                  versi 1982 dan 2009 yang diterbitkan oleh Joint Cargo Committee (JCC) London.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 mt-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">📌 Jangkauan Perlindungan (Warehouse to Warehouse)</p>
                  <p className="text-sm text-blue-700">
                    Perlindungan ICC berlaku mulai dari saat barang meninggalkan gudang pengirim, selama dalam
                    perjalanan, hingga tiba di gudang penerima yang tercantum dalam polis. Klausula ini menjadi
                    penting karena risiko tidak hanya terjadi di atas kapal, tetapi juga di pelabuhan muat/bongkar
                    dan saat proses transshipment.
                  </p>
                </div>
              </section>

              {/* Perbandingan ICC A B C */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Perbandingan Klausula ICC A, B, dan C
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Pemilihan klausula adalah keputusan paling krusial dalam asuransi kargo. Jangan hanya memilih
                  berdasarkan premi terendah — nilai barang dan jenis risiko harus menjadi pertimbangan utama.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3 bg-cyan-700">ICC A (All Risks)</th>
                        <th className="text-left p-3">ICC B</th>
                        <th className="text-left p-3 rounded-tr-lg">ICC C</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          label: 'Luas Jaminan',
                          a: 'Paling luas — semua risiko kecuali pengecualian',
                          b: 'Menengah — risiko yang disebutkan',
                          c: 'Dasar — hanya risiko mayor',
                        },
                        {
                          label: 'Pencurian & TPND',
                          a: '✅ Dijamin',
                          b: '❌ Tidak',
                          c: '❌ Tidak',
                        },
                        {
                          label: 'Kebakaran & Ledakan',
                          a: '✅ Dijamin',
                          b: '✅ Dijamin',
                          c: '✅ Dijamin',
                        },
                        {
                          label: 'Karam / Kapal Kandas',
                          a: '✅ Dijamin',
                          b: '✅ Dijamin',
                          c: '✅ Dijamin',
                        },
                        {
                          label: 'Kerusakan Air Laut',
                          a: '✅ Dijamin',
                          b: '✅ Dijamin',
                          c: '❌ Tidak',
                        },
                        {
                          label: 'Gempa & Tsunami',
                          a: '✅ Dijamin',
                          b: '✅ Dijamin',
                          c: '❌ Tidak',
                        },
                        {
                          label: 'Kerusakan Handling',
                          a: '✅ Dijamin',
                          b: '❌ Tidak',
                          c: '❌ Tidak',
                        },
                        {
                          label: 'Kisaran Rate Premi',
                          a: '0,15% – 0,35%',
                          b: '0,10% – 0,20%',
                          c: '0,08% – 0,15%',
                        },
                        {
                          label: 'Cocok Untuk',
                          a: 'Elektronik, mesin, barang bernilai tinggi',
                          b: 'Bahan baku industri, general cargo',
                          c: 'Komoditas curah, batubara, CPO',
                        },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-3 font-medium text-slate-700">{row.label}</td>
                          <td className="p-3 text-slate-700 bg-cyan-50/50">{row.a}</td>
                          <td className="p-3 text-slate-700">{row.b}</td>
                          <td className="p-3 text-slate-700">{row.c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Rate di atas adalah indikasi pasar. Rate aktual ditentukan oleh underwriter berdasarkan jenis
                  barang, rute, moda transportasi, dan history klaim pengirim.
                </p>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-amber-800 mb-2">
                    ⚠️ Pengecualian Penting yang Berlaku di Semua Klausula ICC
                  </p>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• <strong>Inherent Vice</strong> — sifat bawaan barang (buah busuk, karat pada besi yang sudah berkarat sebelum dikirim)</li>
                    <li>• <strong>Inadequate Packing</strong> — kemasan tidak memadai untuk jenis barang dan moda transportasi</li>
                    <li>• <strong>Delay</strong> — kerugian akibat keterlambatan semata, meski disebabkan risiko yang dijamin</li>
                    <li>• <strong>War & Strikes</strong> — kerugian akibat perang dan kerusuhan (bisa ditambahkan dengan klausula SRCC terpisah)</li>
                    <li>• <strong>Willful Misconduct</strong> — kerugian yang disengaja oleh tertanggung</li>
                  </ul>
                </div>
              </section>

              {/* Cara Hitung Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Cara Menghitung Premi Asuransi Kargo
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Standar industri asuransi kargo mengikuti rumus CIF+10% yang sudah menjadi praktik umum dan
                  diakui dalam polis standar AAUI. Tambahan 10% mencerminkan estimasi keuntungan yang seharusnya
                  diperoleh tertanggung jika barang tiba dalam kondisi baik.
                </p>

                <div className="bg-slate-800 text-white p-5 rounded-xl font-mono text-sm leading-relaxed">
                  <p className="text-green-400 mb-2">{'// Rumus Standar AAUI'}</p>
                  <p>Nilai Pertanggungan = (Invoice Value + Freight) × 1.10</p>
                  <p className="mt-3">Premi Netto = Nilai Pertanggungan × Rate ICC</p>
                  <p className="mt-3">Premi Total = Premi Netto + Biaya Administrasi + Materai</p>
                </div>

                <div className="mt-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-3">📊 Simulasi: Ekspor Elektronik ke Singapura</p>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Nilai Invoice', 'USD 50,000'],
                        ['Biaya Freight', 'USD 2,500'],
                        ['Margin 10%', 'USD 5,000'],
                        ['Nilai Pertanggungan', 'USD 57,500', true],
                        ['Klausula ICC A — Rate 0,25%', '—'],
                        ['Premi Netto', 'USD 143.75', true],
                      ].map(([label, value, bold], i) => (
                        <tr key={i} className={bold ? 'bg-blue-50' : ''}>
                          <td className={`py-2 pr-4 ${bold ? 'font-semibold text-blue-800' : 'text-slate-600'}`}>{label}</td>
                          <td className={`py-2 text-right font-mono ${bold ? 'font-bold text-blue-800' : 'text-slate-800'}`}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Catatan Praktisi:</strong> Untuk barang yang diangkut melalui beberapa moda (multimodal),
                    pastikan polis mencakup semua segmen perjalanan. Polis sea-freight saja tidak otomatis menjamin
                    leg darat dari/ke pelabuhan. Minta konfirmasi eksplisit "warehouse to warehouse" dalam wording polis.
                  </p>
                </div>
              </section>

              {/* Open Cover vs Single Voyage */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Open Cover vs Single Voyage: Mana yang Tepat?
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-blue-800 text-lg mb-2">Open Cover Policy</p>
                    <p className="text-sm text-slate-600 mb-3">
                      Satu polis payung yang berlaku setahun penuh. Setiap pengiriman cukup dilaporkan
                      (declaration) ke penanggung tanpa perlu membuat polis baru setiap kali.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✅ Rate lebih kompetitif karena volume besar</li>
                      <li>✅ Administrasi lebih efisien</li>
                      <li>✅ Jaminan tidak terputus untuk pengiriman rutin</li>
                      <li>✅ Cocok untuk eksportir/importir aktif</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 text-lg mb-2">Single Voyage Policy</p>
                    <p className="text-sm text-slate-600 mb-3">
                      Polis per-pengiriman. Berlaku hanya untuk satu perjalanan yang didefinisikan secara
                      spesifik dalam polis.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>✅ Cocok untuk pengiriman tidak rutin</li>
                      <li>✅ Tidak ada komitmen volume</li>
                      <li>⚠️ Rate biasanya lebih tinggi</li>
                      <li>⚠️ Perlu buat polis baru setiap pengiriman</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Tips Praktisi:</strong> Jika frekuensi pengiriman Anda lebih dari 6–8 kali per tahun,
                    Open Cover Policy hampir selalu lebih menguntungkan. Minta perbandingan kalkulasi dari broker
                    asuransi sebelum memutuskan.
                  </p>
                </div>
              </section>

              {/* Tips Klaim */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  4 Alasan Klaim Asuransi Kargo Sering Ditolak
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Informasi ini hanya diketahui oleh orang dalam industri. Pelajari ini sebelum Anda
                  mengalaminya sendiri.
                </p>
                <div className="space-y-4">
                  {klaimTips.map((tip) => (
                    <div key={tip.no} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {tip.no}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{tip.judul}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{tip.isi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pertanyaan yang Sering Ditanyakan
                </h2>
                <div className="space-y-3">
                  {faqData.map((faq, i) => (
                    <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100">
                      <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-slate-800 hover:bg-slate-100 rounded-xl list-none">
                        <span>{faq.question}</span>
                        <svg className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">

              {/* CTA Sticky */}
              <div className="bg-gradient-to-br from-blue-800 to-cyan-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Hitung Premi Kargo Anda</h3>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  Kirimkan detail pengiriman Anda (jenis barang, nilai, rute, moda) dan Rio Mardiansyah
                  akan membantu menyusun struktur polis yang optimal.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3 shadow-lg shadow-green-900/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Sekarang
                </a>
                <a
                  href="tel:+628131556592"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-blue-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Marine Cluster Links */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Halaman Marine Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/marine-insurance', label: 'Marine Insurance', sub: 'Halaman induk marine', icon: '⚓' },
                    { href: '/freight-insurance', label: 'Freight Insurance', sub: 'Perlindungan biaya angkut', icon: '📋' },
                    { href: '/hull-machinery-insurance', label: 'Hull & Machinery', sub: 'Asuransi badan kapal', icon: '🛳️' },
                    { href: '/protection-indemnity', label: 'Protection & Indemnity', sub: 'Tanggung jawab kapal', icon: '⚖️' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                      <span className="text-xl">{link.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{link.label}</p>
                        <p className="text-xs text-slate-500">{link.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Batam Local CTA */}
              <div className="bg-gradient-to-br from-cyan-700 to-blue-800 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold text-cyan-300 mb-2">🏭 SEO Lokal Batam</p>
                <h3 className="font-bold text-lg mb-2">Berbasis di Batam?</h3>
                <p className="text-sm text-blue-200 mb-4">
                  Batam sebagai kawasan FTZ memiliki regulasi kargo unik — mulai dari aturan pengiriman
                  ke luar FTZ, ekspor ke Singapura/Malaysia, hingga asuransi kapal ferry RoRo.
                </p>
                <a
                  href="/asuransi-kargo-batam"
                  className="inline-block w-full text-center bg-white text-blue-800 hover:bg-blue-50 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
                >
                  Lihat Halaman Kargo Batam →
                </a>
              </div>

              {/* Lini Bisnis Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Bisnis Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung jawab hukum bisnis' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-engineering', label: 'Asuransi Engineering', sub: 'CAR, EAR, Machinery' },
                    { href: '/surety-bond', label: 'Surety Bond', sub: 'Jaminan proyek & kontrak' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{link.label}</p>
                        <p className="text-xs text-slate-500">{link.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-slate-900 text-slate-400 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah. Konsultan Asuransi Kerugian Profesional.</p>
            <p className="mt-1">
              WhatsApp: 0813-1556-592 |{' '}
              <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a>
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
