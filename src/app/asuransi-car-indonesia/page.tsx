import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asuransi CAR Indonesia: Contractor's All Risks — Panduan Lengkap 2025",
  description:
    "Panduan mendalam Asuransi Contractor's All Risks (CAR) di Indonesia: jaminan Seksi I & II, regulasi Perpres 16/2018, simulasi premi, klausul DLP, dan tips klaim tidak ditolak. Konsultasi: 0813-1556-592.",
  keywords: [
    "asuransi CAR indonesia",
    "contractor's all risks",
    "asuransi proyek konstruksi",
    "asuransi kontraktor indonesia",
    "construction all risk indonesia",
    "asuransi pembangunan gedung",
    "asuransi proyek pemerintah",
    "TPL konstruksi",
    "defects liability period insurance",
    "premi asuransi CAR",
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-car-indonesia`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: "Asuransi CAR Indonesia: Contractor's All Risks — Panduan Lengkap 2025",
    description:
      "Panduan mendalam Asuransi CAR di Indonesia: jaminan, regulasi Perpres, simulasi premi, klausul DLP, dan tips klaim. Konsultasi profesional sekarang.",
    url: `${baseUrl}/asuransi-car-indonesia`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const faqData = [
  {
    question: "Apa itu Asuransi Contractor's All Risks (CAR)?",
    answer:
      "Asuransi CAR adalah polis all risks untuk proyek konstruksi yang menjamin dua seksi sekaligus: Seksi I untuk kerusakan fisik material/pekerjaan (Material Damage), dan Seksi II untuk tanggung jawab hukum kepada pihak ketiga (Third Party Liability/TPL). Berbeda dengan nama 'All Risks'-nya, polis ini tetap memiliki pengecualian spesifik yang wajib dipahami kontraktor.",
  },
  {
    question: 'Apakah Asuransi CAR wajib untuk proyek pemerintah?',
    answer:
      'Ya. Berdasarkan Perpres No. 16 Tahun 2018 tentang Pengadaan Barang/Jasa Pemerintah beserta perubahannya (Perpres 12/2021), penyedia jasa konstruksi wajib mengikutsertakan perlindungan asuransi dalam kontrak kerja yang ditandatangani bersama PPK. Bank pembiayaan proyek juga lazim mendaftarkan diri sebagai loss payee dalam polis.',
  },
  {
    question: 'Apa itu Defects Liability Period (DLP) dalam polis CAR?',
    answer:
      "DLP (Defects Liability Period) atau Maintenance Period adalah perpanjangan jaminan polis CAR setelah serah terima pekerjaan (PHO/FHO). Biasanya berdurasi 12–24 bulan. Selama periode ini, polis menjamin kerusakan yang muncul akibat cacat konstruksi yang belum terdeteksi saat serah terima. DLP TIDAK otomatis ada dalam polis standar — harus diminta secara eksplisit via endorsement. Ini adalah titik yang paling sering luput dari perhatian kontraktor.",
  },
  {
    question: 'Bagaimana cara menghitung Sum Insured (SI) polis CAR yang benar?',
    answer:
      "Sum Insured CAR wajib mencerminkan nilai kontrak penuh (full contract value), termasuk: nilai pekerjaan sipil, biaya material on-site, biaya tenaga kerja, biaya overhead/profit kontraktor, dan jika ada: nilai plant & machinery milik Owner yang ada di lokasi. Mengasuransikan di bawah nilai ini (underinsurance) akan mengaktifkan rule of average, sehingga klaim hanya dibayar secara proporsional. Contoh: SI Rp 50M padahal nilai kontrak Rp 100M, dan kerugian Rp 10M — klaim yang dibayar hanya Rp 5M.",
  },
  {
    question: 'Apa penyebab terbesar klaim CAR ditolak di Indonesia?',
    answer:
      "Berdasarkan pengalaman di lapangan, tiga penyebab klaim CAR paling sering ditolak adalah: (1) Material Change of Risk tidak dilaporkan — perubahan desain, penambahan scope, atau perubahan metode konstruksi yang tidak diberitahukan kepada penanggung secara tertulis; (2) Kerusakan akibat faulty design/faulty workmanship yang merupakan exclusion standar (bisa di-buy-back via endorsement khusus); (3) Dokumentasi klaim tidak lengkap — tidak ada laporan insiden, foto kondisi sebelum/sesudah, dan laporan kontraktor.",
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Asuransi Contractor's All Risks (CAR) Indonesia: Panduan Lengkap 2025",
  description:
    "Panduan mendalam asuransi CAR di Indonesia mencakup jaminan Seksi I & II, regulasi Perpres 16/2018, simulasi premi, klausul DLP, dan tips klaim.",
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-car-indonesia` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Engineering', item: `${baseUrl}/asuransi-engineering` },
    { '@type': 'ListItem', position: 3, name: "Contractor's All Risks (CAR)", item: `${baseUrl}/asuransi-car-indonesia` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function CARPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-500">/</span>
              <a href="/asuransi-engineering" className="hover:underline text-orange-300">Asuransi Engineering</a>
              <span className="text-slate-500">/</span>
              <span className="text-white font-medium">Contractor's All Risks</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
              🏗️ Asuransi Konstruksi — Kluster Engineering
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Contractor's All Risks (CAR) Indonesia
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl leading-relaxed mb-8">
              Perlindungan all risks untuk proyek konstruksi sipil Anda — dari hari pertama mobilisasi hingga serah terima
              akhir. Wajib untuk proyek pemerintah, proyek berbiaya kredit, dan kontrak EPC internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20CAR%20Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                <WaIcon />
                Konsultasi via WA
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

              {/* Definisi & Regulasi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Apa Itu Asuransi CAR dan Apa Dasar Hukumnya?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Asuransi <strong>Contractor's All Risks (CAR)</strong> adalah produk asuransi engineering yang dirancang
                  khusus untuk melindungi seluruh kepentingan yang terlibat dalam sebuah proyek konstruksi — mulai dari
                  kontraktor utama, sub-kontraktor, hingga pemilik proyek (owner) — dalam satu polis terintegrasi.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Polis CAR terdiri dari dua seksi utama yang bersifat saling melengkapi:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="font-bold text-amber-800 mb-2">📦 Seksi I — Material Damage</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Menjamin kerusakan fisik atau kehilangan pada pekerjaan yang sedang berlangsung,
                      material, dan peralatan konstruksi yang ada di lokasi proyek.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 mb-2">⚖️ Seksi II — Third Party Liability (TPL)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Menjamin tuntutan hukum dari pihak ketiga (warga sekitar, pengguna jalan, dll.)
                      akibat cedera badan atau kerusakan properti yang disebabkan oleh aktivitas konstruksi.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-amber-900 mb-1">📌 Landasan Regulasi</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Perpres No. 16 Tahun 2018</strong> (diubah Perpres 12/2021) tentang Pengadaan Barang/Jasa
                    Pemerintah mewajibkan asuransi dalam kontrak konstruksi pemerintah. Secara teknis produk, polis CAR
                    harus memenuhi ketentuan <strong>POJK 23/2023</strong> dan mengacu pada wording standar yang disetujui
                    OJK. Penanggung yang tidak terdaftar dan diawasi OJK tidak diperkenankan menerbitkan polis ini.
                  </p>
                </div>
              </section>

              {/* Jaminan Detail */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Apa Saja yang Dijamin Polis CAR?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg mb-3">✅ Risiko yang Dijamin (Seksi I)</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Kebakaran, ledakan, dan sambaran petir',
                        'Banjir, longsor, dan angin kencang',
                        'Kerusakan akibat kelalaian pekerja',
                        'Material jatuh, roboh, atau terkubur',
                        'Pencurian material on-site',
                        'Kerusakan akibat kendaraan proyek (plant & machinery)',
                        'Gempa bumi & volcano (dengan endorsement)',
                        'Strike, Riot & Civil Commotion / SRCC (endorsement)',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-700 bg-green-50 border border-green-100 rounded-lg p-2.5">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="font-semibold text-slate-800 text-lg mb-3">⛔ Pengecualian Utama (Exclusions)</h3>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <p className="text-sm text-slate-700 mb-2">
                        Polis CAR standar TIDAK menjamin hal-hal berikut (kecuali di-buy-back via endorsement berbayar):
                      </p>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {[
                          'Faulty design & faulty workmanship (dapat di-buy-back)',
                          'Kerusakan akibat perang dan huru-hara skala besar',
                          'Kerusakan yang sudah ada sebelum polis dimulai (pre-existing damage)',
                          'Kehilangan kontrak atau denda keterlambatan (liquidated damages)',
                          'Penyusutan nilai, aus dan robekan normal (wear & tear)',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* DLP — Klausul yang Sering Luput */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Klausul DLP: Yang Paling Sering Dilupakan Kontraktor
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Defects Liability Period (DLP)</strong> — juga dikenal sebagai <em>Maintenance Period</em> — adalah
                  perpanjangan jaminan polis CAR setelah Penyerahan Hasil Pertama (PHO). Ini adalah fase di mana pekerjaan
                  sudah selesai tetapi kontraktor masih bertanggung jawab atas cacat tersembunyi yang baru muncul.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
                  <p className="font-bold text-orange-800 mb-2">⚠️ Peringatan dari Lapangan</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Klausul DLP <strong>tidak otomatis ada</strong> dalam polis CAR standar. Jika tidak diminta secara eksplisit
                    dan dibayar preminya, polis CAR berakhir saat PHO — sementara kewajiban DLP kontraktor dalam kontrak
                    pemerintah umumnya masih berlangsung 12–24 bulan sesudahnya. Ini adalah gap perlindungan yang berpotensi
                    menimbulkan kerugian finansial besar bagi kontraktor.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Fase</th>
                        <th className="text-left p-3">Status Polis CAR</th>
                        <th className="text-left p-3 rounded-tr-lg">Catatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 bg-green-50">
                        <td className="p-3 font-medium">Masa Konstruksi</td>
                        <td className="p-3 text-green-700 font-semibold">✅ Aktif (Seksi I & II)</td>
                        <td className="p-3 text-slate-600">Jaminan penuh berjalan</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-yellow-50">
                        <td className="p-3 font-medium">Pasca PHO (tanpa DLP)</td>
                        <td className="p-3 text-red-600 font-semibold">❌ Berakhir</td>
                        <td className="p-3 text-slate-600">Risiko tidak tertanggung</td>
                      </tr>
                      <tr className="bg-teal-50">
                        <td className="p-3 font-medium">Pasca PHO (dengan DLP)</td>
                        <td className="p-3 text-teal-700 font-semibold">✅ Aktif (terbatas)</td>
                        <td className="p-3 text-slate-600">Hanya cacat tersembunyi; 12–24 bulan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Asuransi CAR</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Ilustrasi berikut menggunakan rate pasar umum untuk proyek konstruksi sipil standar di Indonesia.
                  Rate aktual ditentukan setelah survei risiko oleh underwriter.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Nilai Kontrak</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3">Premi Seksi I (est.)</th>
                        <th className="text-left p-3 rounded-tr-lg">Limit TPL (Seksi II)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { kontrak: 'Rp 10 Miliar', rate: '0,25%', premi: 'Rp 25 Juta', tpl: 'Rp 2 Miliar' },
                        { kontrak: 'Rp 25 Miliar', rate: '0,22%', premi: 'Rp 55 Juta', tpl: 'Rp 5 Miliar' },
                        { kontrak: 'Rp 50 Miliar', rate: '0,20%', premi: 'Rp 100 Juta', tpl: 'Rp 10 Miliar' },
                        { kontrak: 'Rp 100 Miliar', rate: '0,18%', premi: 'Rp 180 Juta', tpl: 'Rp 20 Miliar' },
                        { kontrak: 'Rp 500 Miliar', rate: 'Negotiable', premi: 'Negotiable', tpl: 'Negotiable' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{row.kontrak}</td>
                          <td className="p-3 font-mono text-slate-700">{row.rate}</td>
                          <td className="p-3 text-slate-700">{row.premi}</td>
                          <td className="p-3 text-slate-700">{row.tpl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Simulasi bersifat indikatif. Rate aktual bergantung pada: jenis konstruksi, lokasi, rekam jejak klaim
                  kontraktor, deductible yang disepakati, dan kondisi tanah/lingkungan. Proyek di zona gempa tinggi atau
                  daerah banjir akan dikenakan loading tambahan.
                </p>
              </section>

              {/* Tips Klaim Tidak Ditolak */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Tips dari Lapangan: Agar Klaim CAR Tidak Ditolak
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Berdasarkan pengalaman menangani berbagai kasus klaim konstruksi di Indonesia, berikut adalah
                  hal-hal yang wajib dilakukan kontraktor sejak hari pertama proyek:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      no: '01',
                      title: 'Laporkan Perubahan Scope Secara Tertulis',
                      desc: 'Setiap perubahan desain, penambahan pekerjaan, atau perubahan metode konstruksi yang material WAJIB dilaporkan ke penanggung secara tertulis sebelum dilaksanakan. Perubahan yang tidak dilaporkan bisa menjadi alasan penanggung menolak klaim pada item pekerjaan tersebut.',
                    },
                    {
                      no: '02',
                      title: 'Pastikan Sum Insured Selalu Update',
                      desc: "Jika nilai kontrak bertambah akibat addendum atau variation order (VO), polis harus di-endorse untuk menyesuaikan Sum Insured. Rule of average akan berlaku jika SI polis lebih rendah dari nilai kontrak aktual saat terjadi klaim.",
                    },
                    {
                      no: '03',
                      title: 'Buat Laporan Insiden dalam 24–48 Jam',
                      desc: 'Syarat polis CAR standar mensyaratkan pelaporan segera kepada penanggung setelah kejadian kerugian. Keterlambatan pelaporan dapat dijadikan alasan penolakan klaim, terutama jika kondisi lokasi sudah berubah sebelum surveyor tiba.',
                    },
                    {
                      no: '04',
                      title: 'Dokumentasi Foto Before-After Wajib Ada',
                      desc: 'Simpan foto kondisi pekerjaan sebelum insiden, foto kerusakan, dan foto proses pemulihan. Tanpa dokumentasi visual, klaim sulit diproses karena surveyor tidak bisa menentukan lingkup kerusakan yang sebenarnya.',
                    },
                    {
                      no: '05',
                      title: 'Jangan Perbaiki Sebelum Survei Selesai',
                      desc: 'Perbaikan darurat untuk keselamatan boleh dilakukan, namun jangan membersihkan atau memperbaiki lokasi kerusakan secara penuh sebelum loss adjuster atau surveyor penanggung melakukan pemeriksaan. Ini bisa membatalkan klaim.',
                    },
                  ].map((tip) => (
                    <div key={tip.no} className="flex gap-5 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-3xl font-black text-amber-200 leading-none flex-shrink-0">{tip.no}</span>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">{tip.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pertanyaan yang Sering Ditanyakan</h2>
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

              {/* Disclaimer */}
              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4">
                <strong>Disclaimer:</strong> Informasi di halaman ini bersifat edukatif dan umum. Syarat, ketentuan, rate
                premi, dan cakupan jaminan aktual dapat berbeda tergantung underwriting masing-masing penanggung dan
                karakteristik proyek. Untuk penawaran resmi, silakan konsultasikan langsung dengan kami.
              </p>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">

              {/* CTA Sticky */}
              <div className="bg-gradient-to-br from-amber-900 to-yellow-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Proyek CAR</h3>
                <p className="text-amber-200 text-sm mb-5 leading-relaxed">
                  Setiap proyek punya profil risiko unik. Rio Mardiansyah siap membantu Anda menyusun
                  struktur polis CAR yang tepat, efisien, dan memenuhi syarat kontrak.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20CAR%20Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"
                >
                  <WaIcon />
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
                <p className="text-xs text-amber-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Kembali ke Pilar */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <Link href="/asuransi-engineering" className="flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Asuransi Engineering
                </Link>
                <p className="text-xs text-amber-600 mt-1">Lihat semua jenis asuransi engineering</p>
              </div>

              {/* Cluster */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Engineering Lainnya</h3>
                <div className="space-y-2">
                  <a href="/asuransi-ear" className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition group">
                    <span className="text-xl">⚙️</span>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-teal-600 text-sm">Erection All Risk (EAR)</p>
                      <p className="text-xs text-slate-500">Pemasangan mesin & M&E</p>
                    </div>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                    <span className="text-xl">🔧</span>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-blue-600 text-sm">Machinery Breakdown</p>
                      <p className="text-xs text-slate-500">Mesin operasional</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Lini lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/surety-bond', label: 'Surety Bond', sub: 'Jaminan tender & pelaksanaan' },
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung jawab hukum' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Project cargo & logistik' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-orange-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-orange-600 text-sm">{l.label}</p>
                        <p className="text-xs text-slate-500">{l.sub}</p>
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
            <p className="mt-1">WhatsApp: 0813-1556-592 | <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a></p>
          </div>
        </footer>

      </div>
    </>
  );
}
