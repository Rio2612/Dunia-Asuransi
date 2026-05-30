import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Erection All Risk (EAR) Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan lengkap Asuransi Erection All Risk (EAR) di Indonesia: perbedaan EAR vs CAR, jebakan commissioning period, simulasi premi, regulasi OJK, dan tips sum insured yang benar. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi EAR',
    'erection all risk indonesia',
    'asuransi erection all risks',
    'asuransi pemasangan mesin',
    'asuransi instalasi pabrik',
    'asuransi commissioning period',
    'asuransi proyek mekanikal elektrikal',
    'EAR vs CAR',
    'asuransi M&E indonesia',
    'asuransi engineering mesin',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-ear`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Erection All Risk (EAR) Indonesia: Panduan Lengkap 2025',
    description:
      'Panduan EAR Indonesia: perbedaan EAR vs CAR, fase commissioning, simulasi premi, dan tips sum insured benar. Konsultasi profesional.',
    url: `${baseUrl}/asuransi-ear`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Apa itu Asuransi Erection All Risk (EAR)?',
    answer:
      'Asuransi EAR adalah polis all risks yang dirancang khusus untuk proyek pemasangan mesin (erection), instalasi pabrik baru, dan pekerjaan mekanikal-elektrikal (M&E). Polis ini menjamin kerusakan fisik peralatan yang dipasang, kesalahan pemasangan, dan tanggung jawab hukum pihak ketiga — termasuk fase testing & commissioning yang merupakan periode paling rawan klaim.',
  },
  {
    question: 'Apa perbedaan mendasar antara EAR dan CAR?',
    answer:
      "CAR (Construction All Risk) berfokus pada pekerjaan sipil: gedung, jalan, jembatan, dan struktur beton/baja. EAR berfokus pada pekerjaan mekanikal-elektrikal: pemasangan mesin, turbin, reaktor, dan sistem perpipaan. Perbedaan teknis utama: EAR menggunakan basis Sum Insured yang mencakup nilai mesin + biaya instalasi + freight + bea masuk, sedangkan CAR mengacu pada full contract value. Untuk proyek EPC yang menggabungkan keduanya, kontraktor bisa memilih 'Combined CAR/EAR Policy'.",
  },
  {
    question: "Mengapa fase commissioning sering tidak dijamin polis EAR standar?",
    answer:
      "Fase commissioning — terutama hot commissioning (uji coba berbeban penuh) — adalah periode di mana mesin pertama kali dioperasikan sesuai kapasitas desain. Risikonya jauh lebih tinggi dari fase pemasangan. Polis EAR standar sering kali membatasi atau sama sekali tidak memasukkan fase ini secara otomatis. Pemilik proyek dan kontraktor M&E WAJIB meminta endorsement 'Testing & Commissioning Extension' secara eksplisit dan membayar premi tambahan untuk menutup fase kritis ini.",
  },
  {
    question: 'Bagaimana cara menentukan Sum Insured EAR yang benar?',
    answer:
      'Sum Insured EAR harus mencerminkan nilai penggantian penuh (full replacement value) dari mesin yang dipasang, yaitu: harga mesin ex-factory + biaya freight internasional + bea masuk + pajak impor + biaya asuransi pengangkutan + biaya instalasi + biaya commissioning. Banyak klien salah hanya mengasuransikan harga invoice mesin saja, padahal biaya freight dan bea masuk untuk mesin industri bisa mencapai 15–30% dari harga mesin itu sendiri. Underinsurance ini mengaktifkan rule of average saat klaim.',
  },
  {
    question: 'Berapa lama masa pertanggungan polis EAR?',
    answer:
      'Masa pertanggungan EAR dimulai dari unloading mesin di lokasi proyek dan berakhir setelah commissioning selesai dan mesin diserahterimakan ke pemilik. Durasinya sangat bervariasi: 6 bulan untuk instalasi mesin sederhana, hingga 3–5 tahun untuk proyek pembangunan pabrik besar. Perpanjangan Maintenance Period pasca-commissioning juga tersedia, umumnya 12–24 bulan.',
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
  headline: 'Asuransi Erection All Risk (EAR) Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan lengkap EAR Indonesia mencakup perbedaan EAR vs CAR, fase commissioning, sum insured, simulasi premi, dan tips klaim.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-ear` },
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
    { '@type': 'ListItem', position: 3, name: 'Erection All Risk (EAR)', item: `${baseUrl}/asuransi-ear` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EARPage() {
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
              <span className="text-white font-medium">Erection All Risk (EAR)</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-teal-400/30">
              ⚙️ Asuransi Instalasi Mesin & M&E — Kluster Engineering
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Erection All Risk (EAR) Indonesia
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl leading-relaxed mb-8">
              Dari unloading mesin di pelabuhan hingga mesin pertama kali berputar di bawah beban penuh —
              EAR adalah satu-satunya polis yang menutup seluruh perjalanan kritis pemasangan mesin Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20EAR%20Indonesia"
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

              {/* Definisi & Scope */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Apa Itu Asuransi EAR dan Apa yang Dijaminnya?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Erection All Risk (EAR)</strong> adalah produk asuransi engineering yang secara khusus menanggung
                  risiko selama proses pemasangan (<em>erection</em>) mesin, peralatan industri, dan pekerjaan
                  mekanikal-elektrikal (M&E). Polis ini menjamin dari momen mesin tiba di lokasi proyek hingga mesin
                  berhasil beroperasi sesuai spesifikasi dan diserahterimakan kepada pemilik.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Seperti polis CAR, polis EAR juga terdiri dari dua seksi:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                    <p className="font-bold text-teal-800 mb-2">🔩 Seksi I — Material Damage</p>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Menjamin kerusakan fisik atau kehilangan pada mesin, peralatan, dan material M&E yang sedang
                      dalam proses pemasangan di lokasi proyek.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 mb-2">⚖️ Seksi II — Third Party Liability</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Menjamin tuntutan hukum dari pihak ketiga atas cedera atau kerusakan properti yang
                      timbul akibat aktivitas instalasi di lokasi proyek.
                    </p>
                  </div>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-teal-900 mb-1">📌 Catatan Regulasi</p>
                  <p className="text-sm text-teal-800 leading-relaxed">
                    Polis EAR di Indonesia umumnya mengacu pada <strong>Munich Re Standard EAR Wording</strong> atau
                    wording AAUI yang telah mendapat persetujuan OJK. Berdasarkan <strong>POJK 23/2023</strong>, setiap
                    produk asuransi engineering wajib memiliki dokumen produk yang jelas dan transparan sebelum dipasarkan.
                  </p>
                </div>
              </section>

              {/* EAR vs CAR — Tabel Perbandingan */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Perbandingan EAR vs CAR: Mana yang Tepat untuk Proyek Anda?
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Ini adalah pertanyaan yang paling sering diajukan oleh kontraktor dan owner proyek. Berikut perbandingan
                  baris per baris yang jarang dibahas secara mendalam oleh sumber lain.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg w-1/3">Dimensi</th>
                        <th className="text-left p-3 bg-amber-800">🏗️ CAR</th>
                        <th className="text-left p-3 bg-teal-800 rounded-tr-lg">⚙️ EAR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Objek Utama', 'Pekerjaan sipil (beton, baja struktural, tanah)', 'Mesin, peralatan M&E, sistem perpipaan'],
                        ['Jenis Proyek', 'Gedung, jalan, jembatan, bendungan', 'Pabrik baru, instalasi turbin, HVAC, lift'],
                        ['Basis Sum Insured', 'Full contract value (nilai kontrak penuh)', 'Replacement value mesin + freight + bea masuk + instalasi'],
                        ['Fase Commissioning', 'Tidak relevan (selesai di serah terima sipil)', 'KRITIS — wajib diminta via endorsement khusus'],
                        ['Maintenance Period', 'DLP 12–24 bulan (endorsement)', 'Maintenance Period 12–24 bulan (endorsement)'],
                        ['Rate Premi Indikasi', '0,15% – 0,45% dari nilai kontrak', '0,20% – 0,50% dari replacement value mesin'],
                        ['Proyek EPC Gabungan', 'Combined CAR/EAR Policy tersedia', 'Combined CAR/EAR Policy tersedia'],
                      ].map(([dim, car, ear], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{dim}</td>
                          <td className="p-3 text-slate-700 border-l border-amber-100">{car}</td>
                          <td className="p-3 text-slate-700 border-l border-teal-100">{ear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Fase Commissioning — Topik Eksklusif */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  "Jebakan" Commissioning Period: Fase Paling Rawan yang Sering Luput
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ini adalah pengetahuan yang hanya diketahui oleh praktisi asuransi engineering dan kontraktor M&E
                  berpengalaman. Banyak pemilik proyek mengira mesin sudah aman setelah proses pemasangan selesai.
                  Kenyataannya justru sebaliknya.
                </p>

                <div className="relative border-l-2 border-teal-200 ml-4 space-y-6 mb-6">
                  {[
                    { label: 'Cold Commissioning', color: 'bg-slate-100', badge: 'Risiko Rendah', desc: 'Mesin diperiksa tanpa dihidupkan. Pemeriksaan visual, pengencangan baut, kalibrasi instrumen. Risiko relatif rendah.' },
                    { label: 'Hot Commissioning (Uji Coba Berbeban)', color: 'bg-orange-100', badge: '⚠️ Risiko Tertinggi', desc: 'Mesin pertama kali dioperasikan di bawah beban penuh. Ini fase paling rawan: getaran berlebih, overheating, kegagalan bearing, surge pada pompa/kompresor bisa terjadi dan merusak komponen senilai miliaran rupiah dalam hitungan menit.' },
                    { label: 'Serah Terima & Maintenance Period', color: 'bg-teal-100', badge: 'Risiko Sedang', desc: 'Pemilik mengambil alih operasional. Kontraktor masih bertanggung jawab atas cacat yang belum terdeteksi. Polis EAR dengan endorsement Maintenance Period masih aktif.' },
                  ].map((phase) => (
                    <div key={phase.label} className="relative pl-8">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 border-2 border-white"></div>
                      <div className={`${phase.color} rounded-xl p-4`}>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <p className="font-bold text-slate-800">{phase.label}</p>
                          <span className="text-xs font-semibold bg-white/60 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">{phase.badge}</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <p className="font-bold text-orange-800 mb-2">💡 Solusi Praktis</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Selalu minta <strong>Endorsement Testing & Commissioning Extension</strong> saat mengajukan polis EAR.
                    Endorsement ini memperpanjang jaminan secara eksplisit hingga mesin berhasil melewati acceptance test
                    dan diserahterimakan. Premi tambahan untuk endorsement ini relatif kecil dibandingkan nilai risiko
                    yang dilindungi.
                  </p>
                </div>
              </section>

              {/* Sum Insured yang Benar */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Cara Menghitung Sum Insured EAR yang Benar
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Kesalahan paling umum yang berujung pada klaim kurang bayar adalah <strong>underinsurance</strong> — 
                  mengasuransikan mesin hanya berdasarkan harga invoice ex-factory, tanpa memasukkan komponen biaya
                  lainnya. Berikut formula yang benar:
                </p>
                <div className="bg-teal-900 text-white rounded-xl p-5 font-mono text-sm mb-5">
                  <p className="text-teal-300 text-xs mb-2">// Formula Sum Insured EAR yang Benar</p>
                  <p>SI = Harga Mesin (CIF)</p>
                  <p className="pl-4 text-teal-200">+ Biaya Freight Internasional</p>
                  <p className="pl-4 text-teal-200">+ Bea Masuk & Pajak Impor</p>
                  <p className="pl-4 text-teal-200">+ Biaya Instalasi & Erection</p>
                  <p className="pl-4 text-teal-200">+ Biaya Commissioning</p>
                  <p className="pl-4 text-amber-300">+ Contingency (5–10%)</p>
                  <p className="mt-2 text-white font-bold">= TOTAL SUM INSURED YANG BENAR</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-teal-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Komponen Biaya</th>
                        <th className="text-left p-3">Contoh (Rp)</th>
                        <th className="text-left p-3 rounded-tr-lg">% dari Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Harga Mesin ex-Factory (FOB)', 'Rp 10.000.000.000', '62,5%'],
                        ['Freight Internasional', 'Rp 1.200.000.000', '7,5%'],
                        ['Bea Masuk & Pajak (est. 15%)', 'Rp 1.500.000.000', '9,4%'],
                        ['Biaya Instalasi & Erection', 'Rp 2.000.000.000', '12,5%'],
                        ['Commissioning & Testing', 'Rp 800.000.000', '5,0%'],
                        ['Contingency 5%', 'Rp 500.000.000', '3,1%'],
                      ].map(([item, val, pct], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                          <td className="p-3 text-slate-700">{item}</td>
                          <td className="p-3 font-mono text-slate-800 font-semibold">{val}</td>
                          <td className="p-3 text-slate-600">{pct}</td>
                        </tr>
                      ))}
                      <tr className="bg-teal-800 text-white font-bold">
                        <td className="p-3 rounded-bl-lg">TOTAL SUM INSURED</td>
                        <td className="p-3 font-mono">Rp 16.000.000.000</td>
                        <td className="p-3 rounded-br-lg">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Jika hanya mengasuransikan harga mesin Rp 10M saja dari total Rp 16M, dan terjadi klaim total loss,
                  rule of average menghasilkan pembayaran klaim hanya Rp 6,25M — bukan Rp 10M. Perusahaan menanggung
                  sendiri kerugian Rp 9,75M.
                </p>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Asuransi EAR</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Berdasarkan Sum Insured penuh (termasuk freight, bea masuk, dan instalasi) sesuai formula di atas.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-teal-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Sum Insured</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3">Premi Seksi I (est.)</th>
                        <th className="text-left p-3 rounded-tr-lg">Limit TPL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Rp 5 Miliar', '0,40%', 'Rp 20 Juta', 'Rp 1 Miliar'],
                        ['Rp 16 Miliar', '0,35%', 'Rp 56 Juta', 'Rp 3 Miliar'],
                        ['Rp 50 Miliar', '0,30%', 'Rp 150 Juta', 'Rp 10 Miliar'],
                        ['Rp 200 Miliar', '0,25%', 'Rp 500 Juta', 'Rp 40 Miliar'],
                        ['> Rp 500 Miliar', 'Negotiable', 'Negotiable', 'Negotiable'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
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
                  * Rate aktual dipengaruhi oleh: jenis mesin (high-tech machinery lebih mahal), lokasi proyek
                  (kawasan industri vs remote area), durasi instalasi, rekam jejak kontraktor M&E, dan deductible.
                </p>
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
                <strong>Disclaimer:</strong> Informasi di halaman ini bersifat edukatif dan umum. Rate premi, cakupan,
                dan klausul aktual ditentukan oleh underwriter berdasarkan survei risiko. Untuk penawaran resmi,
                konsultasikan langsung dengan kami.
              </p>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">

              {/* CTA Sticky */}
              <div className="bg-gradient-to-br from-teal-900 to-cyan-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Proyek EAR</h3>
                <p className="text-teal-200 text-sm mb-5 leading-relaxed">
                  Pastikan Sum Insured dan endorsement commissioning Anda sudah benar. Rio Mardiansyah
                  siap mereview struktur polis EAR Anda secara gratis.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20EAR%20Indonesia"
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
                <p className="text-xs text-teal-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Kembali ke Pilar */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
                <Link href="/asuransi-engineering" className="flex items-center gap-2 text-teal-800 hover:text-teal-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Asuransi Engineering
                </Link>
                <p className="text-xs text-teal-600 mt-1">Lihat semua jenis asuransi engineering</p>
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
                  <a href="/asuransi-machinery-breakdown" className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                    <span className="text-xl">🔧</span>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-blue-600 text-sm">Machinery Breakdown</p>
                      <p className="text-xs text-slate-500">Mesin yang sudah operasional</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Layanan Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung jawab hukum' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Project cargo & impor mesin' },
                    { href: '/surety-bond', label: 'Surety Bond', sub: 'Jaminan proyek' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-teal-600 text-sm">{l.label}</p>
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
