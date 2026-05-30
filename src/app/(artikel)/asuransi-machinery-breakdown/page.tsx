import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Machinery Breakdown Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan mendalam Asuransi Machinery Breakdown di Indonesia: risiko yang dijamin, exclusion wear & tear, add-on MLOP (kerugian produksi), deductible waktu, simulasi premi, dan checklist dokumen klaim. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi machinery breakdown',
    'asuransi mesin industri',
    'machinery breakdown insurance indonesia',
    'asuransi kerusakan mesin pabrik',
    'MLOP machinery loss of profit',
    'asuransi mesin operasional',
    'asuransi peralatan industri',
    'asuransi generator industri',
    'asuransi engineering mesin',
    'premi asuransi machinery breakdown',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-machinery-breakdown`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Machinery Breakdown Indonesia: Panduan Lengkap 2025',
    description:
      'Panduan MB Indonesia: risiko dijamin, exclusion wear & tear, add-on MLOP, deductible waktu, simulasi premi, checklist klaim.',
    url: `${baseUrl}/asuransi-machinery-breakdown`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Apa itu Asuransi Machinery Breakdown (MB)?',
    answer:
      'Asuransi Machinery Breakdown (MB) adalah produk asuransi engineering yang menjamin kerusakan mendadak dan tidak terduga pada mesin atau peralatan industri yang sedang beroperasi. Berbeda dengan CAR/EAR yang menjamin fase konstruksi/instalasi, MB berjalan terus selama mesin beroperasi dan diperpanjang setiap tahun layaknya asuransi properti.',
  },
  {
    question: 'Mengapa wear & tear tidak dijamin dan bagaimana dampaknya ke klaim?',
    answer:
      "Wear & tear (keausan/penyusutan normal) adalah proses alami yang terjadi pada semua mesin seiring waktu. Polis MB hanya menjamin kerusakan yang bersifat mendadak, tiba-tiba, dan tidak terduga (sudden & unforeseen) — bukan kerusakan yang merupakan konsekuensi logis dari pemakaian normal. Dampaknya ke klaim: jika loss adjuster menemukan bahwa kerusakan terjadi karena komponen yang sudah aus seharusnya diganti namun tidak diganti dalam jadwal perawatan, klaim bisa ditolak atau dipotong secara signifikan.",
  },
  {
    question: 'Apa itu MLOP dan mengapa penting untuk pabrik?',
    answer:
      "MLOP (Machinery Loss of Profit) adalah perluasan (add-on) polis Machinery Breakdown yang menjamin kerugian finansial akibat terhentinya produksi karena kerusakan mesin. Ini adalah produk yang sangat underutilized di Indonesia, padahal dampak finansial dari downtime produksi seringkali jauh melebihi biaya perbaikan mesin itu sendiri. Contoh: mesin senilai Rp 2M rusak dan butuh 3 minggu perbaikan — biaya perbaikan Rp 500 juta, tapi kerugian produksi bisa mencapai Rp 3–5 miliar. Tanpa MLOP, kerugian produksi ditanggung sendiri oleh perusahaan.",
  },
  {
    question: 'Apa itu deductible waktu (time excess) dalam polis MB?',
    answer:
      "Selain deductible nominal (potongan klaim dalam rupiah), polis Machinery Breakdown juga memiliki deductible waktu (time excess) — khususnya untuk klaim MLOP. Deductible waktu adalah periode tunggu sebelum klaim kerugian produksi mulai dihitung. Standar umum di pasar Indonesia adalah 3×24 jam: artinya 3 hari pertama downtime tidak dapat diklaim, baru hari ke-4 dan seterusnya yang dapat diklaim. Ini berbeda dengan deductible nominal yang berlaku untuk klaim kerusakan fisik mesin.",
  },
  {
    question: 'Apakah mesin lama (sudah berumur 10+ tahun) bisa diasuransikan dengan MB?',
    answer:
      "Bisa, namun dengan syarat-syarat underwriting yang lebih ketat. Underwriter umumnya akan meminta: laporan inspeksi mesin terbaru, rekam jejak perawatan (maintenance log), dan mungkin survei lapangan sebelum menerbitkan polis. Rate premi untuk mesin lama cenderung lebih tinggi, dan limit ganti rugi mungkin dibatasi berdasarkan nilai buku (book value) atau nilai pasar mesin — bukan replacement value mesin baru.",
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
  headline: 'Asuransi Machinery Breakdown Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan mendalam MB Indonesia mencakup risiko dijamin, exclusion wear & tear, add-on MLOP, deductible waktu, simulasi premi, dan checklist klaim.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-machinery-breakdown` },
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
    { '@type': 'ListItem', position: 3, name: 'Machinery Breakdown', item: `${baseUrl}/asuransi-machinery-breakdown` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function MachineryBreakdownPage() {
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
              <span className="text-white font-medium">Machinery Breakdown</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
              🔧 Asuransi Mesin Operasional — Kluster Engineering
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Machinery Breakdown Indonesia
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
              Satu kerusakan mesin tanpa perlindungan yang tepat bisa menghentikan lini produksi berhari-hari dan
              melubangi kas perusahaan. Machinery Breakdown — dan add-on MLOP-nya — adalah jawabannya.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Machinery%20Breakdown"
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

              {/* Definisi & Perbedaan dengan EAR */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Apa Itu Machinery Breakdown dan Bedanya dengan EAR?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Asuransi Machinery Breakdown (MB)</strong> adalah produk asuransi engineering untuk mesin dan
                  peralatan industri yang <em>sudah beroperasi</em>. Berbeda dengan EAR yang menjamin fase instalasi dan
                  commissioning, MB adalah perlindungan jangka panjang yang berjalan selama mesin digunakan secara
                  produktif sehari-hari.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-700 mb-2 text-sm">⚙️ EAR — Fase Sebelum Operasi</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Menjamin mesin saat dipasang, diuji, dan di-commissioning. Polis berakhir saat mesin diserahterimakan.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-blue-800 mb-2 text-sm">🔧 MB — Fase Operasional (Ini Halamannya)</p>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Menjamin mesin saat beroperasi rutin. Polis diperpanjang setiap tahun selama mesin masih digunakan.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-blue-900 mb-1">📌 Catatan Penting</p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Jika Anda baru saja selesai memasang mesin baru dan ingin langsung melanjutkan perlindungan pasca
                    commissioning, polis MB adalah kelanjutan alami dari polis EAR. Sum Insured MB umumnya menggunakan
                    <strong> replacement value</strong> mesin (nilai penggantian mesin baru yang setara), bukan nilai buku
                    akuntansi — sesuai prinsip <strong>PSAK 16 tentang Aset Tetap</strong> yang menekankan nilai
                    terbarukan (recoverable amount) dalam pelaporan keuangan.
                  </p>
                </div>
              </section>

              {/* Apa yang Dijamin vs Tidak */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Apa yang Dijamin dan Apa yang Tidak — Ini yang Wajib Anda Pahami
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">✅ Risiko yang Dijamin Polis MB</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Kegagalan mekanis internal (bearing, gear, shaft)',
                        'Korsleting listrik dan lonjakan tegangan',
                        'Kesalahan operator yang tidak disengaja',
                        'Overheating akibat kegagalan sistem pendinginan',
                        'Tekanan berlebih (overpressure) yang tidak terduga',
                        'Getaran abnormal yang merusak komponen',
                        'Kerusakan akibat benda asing masuk ke mesin',
                        'Short circuit pada motor listrik',
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
                    <h3 className="font-bold text-slate-800 text-lg mb-3">⛔ Yang TIDAK Dijamin — Sumber Konflik Klaim Terbesar</h3>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                      <p className="text-sm text-slate-700 mb-3">
                        Ini adalah daftar exclusion yang paling sering menjadi sumber sengketa klaim MB di Indonesia.
                        Pahami sebelum klaim terjadi:
                      </p>
                      <div className="space-y-3">
                        {[
                          { title: 'Wear & Tear (Keausan Normal)', desc: 'Komponen aus, korosi bertahap, erosi, kavitasi, dan penyusutan akibat pemakaian rutin bukan merupakan kejadian mendadak dan tidak dijamin.' },
                          { title: 'Kurangnya Perawatan (Lack of Maintenance)', desc: 'Jika loss adjuster menemukan bahwa kerusakan timbul karena komponen yang sudah seharusnya diganti sesuai jadwal PM (Preventive Maintenance) tidak diganti, klaim dapat ditolak.' },
                          { title: 'Kerusakan Estetik / Kosmetik', desc: 'Goresan, cat terkelupas, atau deformasi ringan yang tidak mempengaruhi fungsi mesin tidak dijamin.' },
                          { title: 'Kebakaran dan Ledakan Eksternal', desc: 'Kerusakan mesin akibat kebakaran dari luar mesin dijamin oleh polis Property All Risk/Industrial All Risk, bukan MB.' },
                          { title: 'Bencana Alam', desc: 'Kerusakan akibat banjir, gempa bumi, atau angin masuk ke dalam cakupan polis properti atau perlu endorsement khusus.' },
                        ].map((exc) => (
                          <div key={exc.title} className="flex gap-3">
                            <svg className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <p className="text-sm font-semibold text-red-800">{exc.title}</p>
                              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{exc.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* MLOP — Add-on yang Underutilized */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  MLOP: Add-on yang Paling Underutilized di Industri Indonesia
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>MLOP (Machinery Loss of Profit)</strong> — atau juga dikenal sebagai <em>Business Interruption
                  following Machinery Breakdown</em> — adalah perluasan polis MB yang menjamin kerugian keuangan akibat
                  terhentinya produksi karena kerusakan mesin yang dijamin polis MB-nya.
                </p>

                <div className="bg-blue-950 text-white rounded-xl p-6 mb-5">
                  <p className="text-blue-300 text-xs font-semibold mb-3 uppercase tracking-wide">Ilustrasi Nyata — Pabrik Tekstil di Jawa Barat</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-300 mb-1">Tanpa MLOP:</p>
                      <p className="text-white">• Perbaikan mesin: <span className="text-green-400 font-mono">Rp 400 juta</span> ✅ Klaim MB dibayar</p>
                      <p className="text-white">• Downtime 18 hari × Rp 250 juta/hari:</p>
                      <p className="text-red-400 font-mono font-bold ml-2">Rp 4,5 miliar ditanggung sendiri ❌</p>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-1">Dengan MLOP:</p>
                      <p className="text-white">• Perbaikan mesin: <span className="text-green-400 font-mono">Rp 400 juta</span> ✅ Dibayar MB</p>
                      <p className="text-white">• 3 hari pertama (time excess): tidak diklaim</p>
                      <p className="text-white">• Hari ke-4 s/d 18 = 15 hari × Rp 250 juta:</p>
                      <p className="text-green-400 font-mono font-bold ml-2">Rp 3,75 miliar dibayar MLOP ✅</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Fitur MLOP</th>
                        <th className="text-left p-3 rounded-tr-lg">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Basis Klaim', 'Kehilangan gross profit atau standing charges selama mesin tidak bisa beroperasi'],
                        ['Deductible Waktu (Time Excess)', '3×24 jam — 3 hari pertama tidak diklaim, baru hari ke-4 dihitung'],
                        ['Indemnity Period', 'Umumnya 3 hingga 12 bulan (periode maksimum klaim berjalan)'],
                        ['Dokumen Klaim Utama', 'Laporan keuangan 3 tahun terakhir, bukti produksi, laporan loss adjuster'],
                        ['Premi Tambahan', '± 30–60% dari premi MB pokok, tergantung skala produksi'],
                      ].map(([fitur, detail], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{fitur}</td>
                          <td className="p-3 text-slate-700">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Machinery Breakdown</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Berdasarkan <em>replacement value</em> mesin (nilai penggantian mesin baru yang setara), bukan nilai buku.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Replacement Value Mesin</th>
                        <th className="text-left p-3">Rate MB</th>
                        <th className="text-left p-3">Premi MB (est.)</th>
                        <th className="text-left p-3 rounded-tr-lg">+ Estimasi MLOP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Rp 2 Miliar', '0,60%', 'Rp 12 Juta/tahun', '+ Rp 6–10 Juta'],
                        ['Rp 10 Miliar', '0,50%', 'Rp 50 Juta/tahun', '+ Rp 20–35 Juta'],
                        ['Rp 50 Miliar', '0,40%', 'Rp 200 Juta/tahun', '+ Rp 80–120 Juta'],
                        ['Rp 200 Miliar', '0,35%', 'Rp 700 Juta/tahun', '+ Rp 250–400 Juta'],
                        ['> Rp 500 Miliar', 'Negotiable', 'Negotiable', 'Negotiable'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}>
                          {row.map((cell, j) => (
                            <td key={j} className={`p-3 ${j === 0 ? 'font-semibold text-slate-800' : j === 1 ? 'font-mono text-slate-700' : 'text-slate-700'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Rate aktual dipengaruhi oleh: jenis dan usia mesin, industri, jam operasi per hari, rekam jejak
                  perawatan, deductible, dan nilai MLOP yang diinginkan.
                </p>
              </section>

              {/* Checklist Perawatan agar Klaim Tidak Ditolak */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Checklist Dokumen Perawatan: Senjata Utama Agar Klaim MB Tidak Ditolak
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Penyebab nomor satu klaim MB ditolak atau dipotong besar di Indonesia adalah tidak adanya
                  dokumentasi perawatan yang memadai. Loss adjuster akan selalu meminta bukti bahwa mesin dirawat
                  dengan baik sesuai standar pabrikan. Berikut dokumen yang wajib Anda simpan dan persiapkan:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { doc: 'Maintenance Log / Buku Catatan Perawatan', desc: 'Catatan lengkap PM (Preventive Maintenance) yang dilakukan, tanggal, teknisi, dan komponen yang diganti.' },
                    { doc: 'Sparepart Replacement Record', desc: 'Bukti penggantian komponen consumable sesuai jadwal pabrikan (bearing, seal, belt, oil filter, dll).' },
                    { doc: 'Service Report dari Teknisi/Vendor', desc: 'Laporan tertulis dari teknisi resmi atau vendor saat melakukan servis berkala — lengkap dengan tanggal dan tanda tangan.' },
                    { doc: 'Vibration Analysis & Thermography Report', desc: 'Untuk mesin kritis: laporan analisis getaran dan thermography infrared menunjukkan kondisi mesin sebelum insiden.' },
                    { doc: 'Oil Analysis Report', desc: 'Untuk mesin dengan sistem pelumasan: laporan analisis oli berkala membuktikan kondisi internal mesin.' },
                    { doc: 'Operator Training Certificate', desc: 'Bukti bahwa operator mesin telah mendapat pelatihan resmi — relevan jika klaim melibatkan human error.' },
                  ].map((item) => (
                    <div key={item.doc} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.doc}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-5">
                  <p className="text-sm font-bold text-blue-800 mb-1">💡 Tips Praktis</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Simpan semua dokumen perawatan minimal 3 tahun ke belakang dalam format digital (scan/foto) yang
                    mudah diakses. Saat klaim terjadi, Anda bisa mengirimkan bukti-bukti ini dalam hitungan jam — bukan
                    berminggu-minggu mencari di gudang arsip.
                  </p>
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
                <strong>Disclaimer:</strong> Informasi di halaman ini bersifat edukatif dan umum. Cakupan jaminan, rate
                premi, deductible, dan ketentuan aktual ditentukan oleh underwriter berdasarkan survei mesin dan kondisi
                operasional. Untuk penawaran resmi, konsultasikan langsung dengan kami.
              </p>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">

              {/* CTA Sticky */}
              <div className="bg-gradient-to-br from-blue-950 to-indigo-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Mesin Anda</h3>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  Pastikan nilai pertanggungan dan add-on MLOP sudah sesuai. Rio Mardiansyah siap
                  membantu Anda menghitung replacement value yang tepat.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Machinery%20Breakdown"
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
                <p className="text-xs text-blue-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Kembali ke Pilar */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <Link href="/asuransi-engineering" className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Asuransi Engineering
                </Link>
                <p className="text-xs text-blue-600 mt-1">Lihat semua jenis asuransi engineering</p>
              </div>

              {/* Cluster */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Engineering Lainnya</h3>
                <div className="space-y-2">
                  <a href="/asuransi-car-indonesia" className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-amber-50 rounded-xl transition group">
                    <span className="text-xl">🏗️</span>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-amber-600 text-sm">Construction All Risk (CAR)</p>
                      <p className="text-xs text-slate-500">Proyek konstruksi sipil</p>
                    </div>
                  </a>
                  <a href="/asuransi-ear" className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition group">
                    <span className="text-xl">⚙️</span>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-teal-600 text-sm">Erection All Risk (EAR)</p>
                      <p className="text-xs text-slate-500">Fase instalasi & commissioning</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Layanan Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/industrial-all-risk', label: 'Industrial All Risk', sub: 'Perlindungan aset pabrik menyeluruh' },
                    { href: '/business-interruption', label: 'Business Interruption', sub: 'Kerugian pendapatan bisnis' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung jawab hukum' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{l.label}</p>
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
