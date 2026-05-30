import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Public Liability Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan lengkap Asuransi Public Liability di Indonesia: risiko dijamin, dasar hukum UU 8/1999, simulasi limit & premi, dan studi kasus klaim nyata. Perlindungan tuntutan hukum pihak ketiga. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi public liability',
    'asuransi tanggung jawab hukum pihak ketiga',
    'asuransi liability perusahaan',
    'public liability insurance indonesia',
    'asuransi pemilik gedung',
    'asuransi tanggung jawab publik',
    'third party liability insurance',
    'asuransi tuntutan hukum',
    'limit of liability asuransi',
    'asuransi liability bisnis',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-public-liability`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Public Liability Indonesia: Panduan Lengkap 2025',
    description:
      'Panduan Public Liability Indonesia: risiko dijamin, UU 8/1999, simulasi limit & premi, studi kasus klaim. Konsultasi profesional.',
    url: `${baseUrl}/asuransi-public-liability`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Apa itu Asuransi Public Liability dan apa bedanya dengan TPL kendaraan?',
    answer:
      'Asuransi Public Liability (PL) menjamin tanggung jawab hukum perusahaan atau perorangan atas cedera badan atau kerusakan properti pihak ketiga yang timbul dari aktivitas operasional bisnis di lokasi tertentu (premises liability). Ini berbeda dengan TPL kendaraan yang spesifik untuk risiko lalu lintas. PL menjamin insiden seperti pengunjung terpeleset di mall, papan reklame roboh menimpa orang, atau kegiatan konstruksi merusak properti tetangga.',
  },
  {
    question: 'Apa landasan hukum kewajiban ganti rugi pihak ketiga di Indonesia?',
    answer:
      'Kewajiban hukum memberikan ganti rugi kepada pihak yang dirugikan akibat kelalaian seseorang atau badan usaha diatur dalam Pasal 1365 KUH Perdata (perbuatan melawan hukum). Bagi pelaku usaha yang berinteraksi dengan konsumen, kewajiban ini diperkuat oleh UU No. 8 Tahun 1999 tentang Perlindungan Konsumen, di mana Pasal 19 mewajibkan pelaku usaha bertanggung jawab atas kerugian konsumen akibat produk atau jasa. Asuransi Public Liability adalah mekanisme transfer risiko atas kewajiban hukum ini.',
  },
  {
    question: 'Berapa limit pertanggungan Public Liability yang disarankan?',
    answer:
      'Limit bergantung pada skala bisnis dan potensi eksposur. Sebagai panduan: bisnis ritel kecil/menengah umumnya menggunakan limit Rp 1–5 miliar per kejadian. Hotel dan mall besar lazimnya Rp 10–50 miliar. Perusahaan multinasional dan proyek internasional bisa membutuhkan USD 1–5 juta dengan perlindungan excess of loss dari re-asuradur internasional. Yang perlu diperhatikan: limit harus mempertimbangkan potensi kerugian multiple claims dalam satu periode (Annual Aggregate Limit).',
  },
  {
    question: 'Apa perbedaan "Occurrence-based" vs "Claims-made" dalam polis Public Liability?',
    answer:
      'Occurrence-based: polis menjamin kejadian yang terjadi selama periode polis aktif, terlepas kapan klaimnya diajukan. Claims-made: polis hanya menjamin klaim yang diajukan selama periode polis aktif, meskipun kejadiannya terjadi sebelum periode tersebut (dengan retroactive date). Di Indonesia, mayoritas polis Public Liability menggunakan basis occurrence. Basis claims-made lebih umum di Professional Indemnity.',
  },
  {
    question: 'Apa saja yang biasanya dikecualikan dari polis Public Liability?',
    answer:
      'Exclusion umum: (1) Cedera atau kerusakan pada karyawan sendiri (dijamin Jamsostek/BPJS Ketenagakerjaan); (2) Kerusakan pada properti milik tertanggung sendiri; (3) Tanggung jawab yang timbul dari produk yang diproduksi (masuk polis Product Liability terpisah); (4) Tanggung jawab profesional/jasa konsultasi (masuk Professional Indemnity); (5) Polusi dan kontaminasi lingkungan (perlu endorsement khusus atau polis Pollution Liability); (6) Perang dan kerusuhan skala besar.',
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
  headline: 'Asuransi Public Liability Indonesia: Panduan Lengkap 2025',
  description: 'Panduan lengkap Public Liability di Indonesia mencakup risiko dijamin, dasar hukum, simulasi limit & premi, dan studi kasus.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-public-liability` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Liability', item: `${baseUrl}/asuransi-liability` },
    { '@type': 'ListItem', position: 3, name: 'Public Liability', item: `${baseUrl}/asuransi-public-liability` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function PublicLiabilityPage() {
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
              <a href="/asuransi-liability" className="hover:underline text-orange-300">Asuransi Liability</a>
              <span className="text-slate-500">/</span>
              <span className="text-white font-medium">Public Liability</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-violet-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-400/30">
              ⚖️ Asuransi Tanggung Jawab Hukum — Kluster Liability
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Public Liability Indonesia
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl leading-relaxed mb-8">
              Satu insiden — pengunjung terpeleset, papan jatuh menimpa orang, atau kegiatan operasional
              merusak properti tetangga — bisa menghasilkan gugatan senilai miliaran rupiah. Public
              Liability adalah perisai finansial dan hukum bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Public%20Liability"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                <WaIcon />
                Konsultasi via WA
              </a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── CONTENT ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Definisi & Dasar Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Asuransi Public Liability?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Asuransi Public Liability (PL)</strong> menjamin tanggung jawab hukum Anda atau perusahaan
                  atas kerugian yang dialami pihak ketiga — pengunjung, pelanggan, atau masyarakat umum — akibat
                  kelalaian dalam kegiatan operasional bisnis. Polis ini menanggung biaya ganti rugi, biaya
                  pengobatan korban, dan biaya pembelaan hukum (termasuk pengacara).
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Polis PL umumnya menjamin dua kategori kerugian pihak ketiga:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                    <p className="font-bold text-indigo-800 mb-2">🤕 Bodily Injury (BI)</p>
                    <p className="text-sm text-indigo-700 leading-relaxed">Cedera fisik, sakit, cacat, atau kematian pihak ketiga akibat kelalaian tertanggung. Mencakup biaya medis, kompensasi kehilangan pendapatan korban, dan santunan.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 mb-2">🏠 Property Damage (PD)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Kerusakan atau kehilangan properti milik pihak ketiga akibat aktivitas tertanggung. Mencakup biaya perbaikan atau penggantian properti yang rusak.</p>
                  </div>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-indigo-900 mb-1">📌 Dasar Hukum di Indonesia</p>
                  <p className="text-sm text-indigo-800 leading-relaxed">
                    Kewajiban memberikan ganti rugi atas kelalaian diatur dalam <strong>Pasal 1365 KUH Perdata</strong>{' '}
                    (perbuatan melawan hukum). Bagi pelaku usaha, <strong>UU No. 8 Tahun 1999 tentang Perlindungan
                    Konsumen Pasal 19</strong> memperkuat kewajiban ini: pelaku usaha bertanggung jawab atas kerugian
                    konsumen akibat produk atau jasa yang cacat. Asuransi Public Liability adalah mekanisme transfer
                    risiko yang sah atas kewajiban hukum ini.
                  </p>
                </div>
              </section>

              {/* Risiko Dijamin & Tidak */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Risiko yang Dijamin dan yang Tidak</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">✅ Contoh Kejadian yang Dijamin</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Pengunjung terpeleset lantai basah di lobby gedung',
                        'Papan iklan/reklame roboh menimpa kendaraan/orang',
                        'Api dari kegiatan konstruksi menyebar ke properti tetangga',
                        'Pipa air bocor merusak properti unit di bawahnya',
                        'Pengunjung terluka akibat peralatan display ambruk',
                        'Kendaraan operasional perusahaan merusak pagar tetangga',
                        'Kegiatan loading/unloading merusak trotoar umum',
                        'Scaffold/perancah jatuh menimpa pejalan kaki di luar proyek',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-700 bg-green-50 border border-green-100 rounded-lg p-2.5">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="font-bold text-slate-800 text-lg mb-3">⛔ Yang Biasanya Dikecualikan</h3>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-2">
                      {[
                        { t: 'Karyawan sendiri', d: 'Cedera karyawan ditanggung BPJS Ketenagakerjaan/Jamsostek.' },
                        { t: 'Properti milik tertanggung sendiri', d: 'Masuk cakupan Property All Risk / Industrial All Risk.' },
                        { t: 'Tanggung jawab atas produk yang dijual', d: 'Masuk Product Liability — polis terpisah.' },
                        { t: 'Tanggung jawab jasa profesional', d: 'Masuk Professional Indemnity — polis terpisah.' },
                        { t: 'Polusi/kontaminasi lingkungan', d: 'Perlu Pollution Liability endorsement atau polis tersendiri.' },
                      ].map((exc) => (
                        <div key={exc.t} className="flex gap-3">
                          <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          <div><p className="text-sm font-semibold text-red-800">{exc.t}</p><p className="text-xs text-slate-600">{exc.d}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Studi Kasus */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Studi Kasus: Mengapa Limit yang Cukup Itu Penting</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Dua skenario nyata yang menggambarkan konsekuensi finansial dari insiden Public Liability:
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900 text-white rounded-xl p-6">
                    <p className="text-indigo-300 text-xs font-semibold mb-3 uppercase tracking-wide">Kasus 1 — Pusat Perbelanjaan, Surabaya</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      Seorang pengunjung terpeleset di area food court yang baru dipel tanpa tanda peringatan.
                      Korban mengalami patah tulang paha, membutuhkan operasi dan rehabilitasi 6 bulan.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><p className="text-slate-400">Biaya medis & rehabilitasi</p><p className="text-white font-mono font-bold">Rp 380 juta</p></div>
                      <div><p className="text-slate-400">Kompensasi hilang pendapatan</p><p className="text-white font-mono font-bold">Rp 120 juta</p></div>
                      <div><p className="text-slate-400">Biaya pengacara & pengadilan</p><p className="text-white font-mono font-bold">Rp 80 juta</p></div>
                      <div><p className="text-red-300">Total klaim</p><p className="text-red-300 font-mono font-bold">Rp 580 juta</p></div>
                    </div>
                    <p className="text-green-400 text-xs mt-3">✅ Semua ditanggung PL dengan limit Rp 2M — perusahaan tidak keluar uang sepeser pun.</p>
                  </div>

                  <div className="bg-amber-950 text-white rounded-xl p-6">
                    <p className="text-amber-300 text-xs font-semibold mb-3 uppercase tracking-wide">Kasus 2 — Gedung Perkantoran, Jakarta Selatan</p>
                    <p className="text-amber-100 text-sm leading-relaxed mb-3">
                      Kaca fasad gedung lantai 12 pecah dan menimpa kendaraan & pejalan kaki di bawahnya.
                      2 orang luka serius, 3 kendaraan rusak parah.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><p className="text-amber-300">Biaya medis 2 korban luka</p><p className="text-white font-mono font-bold">Rp 1,2 miliar</p></div>
                      <div><p className="text-amber-300">Ganti rugi 3 kendaraan</p><p className="text-white font-mono font-bold">Rp 450 juta</p></div>
                      <div><p className="text-amber-300">Kompensasi cacat permanen</p><p className="text-white font-mono font-bold">Rp 800 juta</p></div>
                      <div><p className="text-red-300">Total klaim</p><p className="text-red-300 font-mono font-bold">Rp 2,45 miliar</p></div>
                    </div>
                    <p className="text-red-400 text-xs mt-3">⚠️ Polis PL dengan limit Rp 1M tidak cukup. Selisih Rp 1,45M ditanggung sendiri oleh manajemen gedung.</p>
                  </div>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Limit & Premi Public Liability</h2>
                <p className="text-slate-600 text-sm mb-5">Rate indikatif berdasarkan jenis bisnis dan limit pertanggungan. Rate aktual ditentukan oleh underwriter.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-indigo-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Bisnis</th>
                        <th className="text-left p-3">Limit per Kejadian</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Toko/Ritel Kecil', 'Rp 500 Juta – 1 Miliar', '0,10 – 0,20%', 'Rp 500rb – 2 Juta'],
                        ['Restoran / F&B', 'Rp 1 – 3 Miliar', '0,15 – 0,25%', 'Rp 1,5 – 7,5 Juta'],
                        ['Hotel / Mall', 'Rp 5 – 20 Miliar', '0,10 – 0,18%', 'Rp 5 – 36 Juta'],
                        ['Gedung Perkantoran', 'Rp 5 – 25 Miliar', '0,08 – 0,15%', 'Rp 4 – 37,5 Juta'],
                        ['Event Organizer', 'Rp 2 – 10 Miliar', '0,20 – 0,40%', 'Per-event basis'],
                        ['Pabrik / Industri', 'Rp 10 – 50 Miliar', '0,08 – 0,15%', 'Rp 8 – 75 Juta'],
                      ].map(([bisnis, limit, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{bisnis}</td>
                          <td className="p-3 text-slate-700">{limit}</td>
                          <td className="p-3 font-mono text-slate-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Basis premi dihitung dari nilai limit pertanggungan. Rate aktual dipengaruhi oleh luas premises, jumlah pengunjung per hari, rekam jejak klaim, dan deductible.</p>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pertanyaan yang Sering Ditanyakan</h2>
                <div className="space-y-3">
                  {faqData.map((faq, i) => (
                    <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100">
                      <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-slate-800 hover:bg-slate-100 rounded-xl list-none">
                        <span>{faq.question}</span>
                        <svg className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </section>

              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4">
                <strong>Disclaimer:</strong> Informasi bersifat edukatif dan umum. Cakupan, limit, rate aktual ditentukan underwriter berdasarkan survei risiko dan karakteristik bisnis.
              </p>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-950 to-violet-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">⚖️</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Public Liability</h3>
                <p className="text-indigo-200 text-sm mb-5 leading-relaxed">Rio Mardiansyah siap membantu Anda menentukan limit yang tepat dan struktur polis yang efisien untuk bisnis Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Public%20Liability" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-indigo-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                <Link href="/asuransi-liability" className="flex items-center gap-2 text-indigo-800 hover:text-indigo-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Kembali ke Asuransi Liability
                </Link>
                <p className="text-xs text-indigo-600 mt-1">Lihat semua jenis asuransi liability</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Liability Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-product-liability', label: 'Product Liability', sub: 'Tanggung jawab atas produk', color: 'amber' },
                    { href: '/asuransi-professional-indemnity', label: 'Professional Indemnity', sub: 'Tanggung jawab jasa profesional', color: 'blue' },
                    { href: '/asuransi-liability-limbah-b3', label: 'Liability Limbah B3', sub: 'Tanggung jawab lingkungan', color: 'green' },
                    { href: '/directors-officers-liability', label: 'D&O Liability', sub: 'Direksi & komisaris', color: 'slate' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-indigo-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-indigo-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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
