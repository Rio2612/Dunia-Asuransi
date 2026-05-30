import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Marine Indonesia: Kargo, Hull & Machinery, P&I — Panduan Lengkap [2025]',
  description:
    'Panduan lengkap Asuransi Marine (Maritim) Indonesia — Marine Cargo, Hull & Machinery, Protection & Indemnity (P&I), dan Freight Insurance. Dasar hukum KUHD, regulasi OJK, dan perbedaan peran tiap produk dari praktisi.',
  keywords: [
    'asuransi marine',
    'asuransi maritim',
    'marine insurance indonesia',
    'hull machinery insurance',
    'protection indemnity',
    'asuransi kapal',
    'asuransi kargo laut',
    'freight insurance',
    'KUHD asuransi laut',
    'P&I club indonesia',
  ],
  alternates: { canonical: `${baseUrl}/marine-insurance` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Marine Indonesia: Kargo, Hull & Machinery, P&I 2025',
    description: 'Panduan lengkap ekosistem asuransi marine — Marine Cargo, H&M, P&I, dan Freight. Dasar hukum KUHD dan regulasi OJK.',
    url: `${baseUrl}/marine-insurance`, type: 'article', locale: 'id_ID', siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const marineCluster = [
  {
    title: 'Marine Cargo Insurance',
    href: '/asuransi-kargo',
    icon: '📦',
    color: 'cyan',
    tagline: 'Perlindungan Muatan / Barang dalam Perjalanan',
    deskripsi: 'Menjamin barang/muatan selama proses pengangkutan dari gudang pengirim hingga gudang penerima (warehouse to warehouse), mencakup semua moda — laut, udara, dan darat. Menggunakan klausula Institute Cargo Clauses (ICC) A, B, atau C.',
    objekDijamin: 'Barang/kargo milik eksportir, importir, atau trader',
    pihakTertanggung: 'Pemilik barang (shipper/consignee)',
    basisKlaim: 'Kerusakan atau kehilangan muatan',
    dasarHukum: 'KUHD Pasal 592–685, ICC 1982/2009',
    available: true,
  },
  {
    title: 'Hull & Machinery Insurance (H&M)',
    href: '/hull-machinery-insurance',
    icon: '🛳️',
    color: 'blue',
    tagline: 'Perlindungan Fisik Badan Kapal & Mesinnya',
    deskripsi: 'Menjamin kerusakan fisik pada badan kapal (hull), mesin kapal (machinery), dan perlengkapan kapal yang tercantum dalam polis. Setara dengan "asuransi kendaraan" untuk kapal. Menggunakan klausula Institute Time Clauses (ITC) Hull atau Institute Voyage Clauses.',
    objekDijamin: 'Badan kapal, mesin, dan perlengkapan kapal',
    pihakTertanggung: 'Pemilik kapal (shipowner)',
    basisKlaim: 'Kerusakan fisik kapal akibat tabrakan, badai, karam, dll.',
    dasarHukum: 'KUHD Pasal 709–721, ITC Hull 1983/1995',
    available: true,
  },
  {
    title: 'Protection & Indemnity (P&I)',
    href: '/protection-indemnity',
    icon: '⚖️',
    color: 'purple',
    tagline: 'Tanggung Jawab Hukum Pemilik Kapal ke Pihak Ketiga',
    deskripsi: 'Menjamin tanggung jawab hukum pemilik kapal terhadap pihak ketiga — termasuk klaim cedera/kematian kru, kerusakan properti pihak ketiga, pencemaran laut akibat tumpahan minyak, dan biaya penyelamatan/pemindahan bangkai kapal. Produk paling kompleks dalam ekosistem marine.',
    objekDijamin: 'Kewajiban hukum pemilik kapal terhadap pihak ketiga',
    pihakTertanggung: 'Pemilik kapal (shipowner) / operator kapal',
    basisKlaim: 'Tuntutan hukum dari kru, pihak ketiga, atau pemerintah',
    dasarHukum: 'KUHD Pasal 534–544, MARPOL 73/78, UU Pelayaran 17/2008',
    available: true,
  },
  {
    title: 'Freight Insurance',
    href: '/freight-insurance',
    icon: '📋',
    color: 'amber',
    tagline: 'Perlindungan Biaya Angkut yang Terancam Hilang',
    deskripsi: 'Menjamin kerugian biaya freight (ongkos angkut) yang tidak bisa dipulihkan jika kapal tidak sampai di tujuan atau muatan hilang dalam perjalanan. Produk niche yang relevan bagi perusahaan pelayaran dan freight forwarder.',
    objekDijamin: 'Biaya freight yang sudah dibayar atau akan diterima',
    pihakTertanggung: 'Pemilik kapal atau shipper',
    basisKlaim: 'Kehilangan hak atas freight akibat total loss kapal/muatan',
    dasarHukum: 'KUHD Pasal 592, Institute Freight Clauses',
    available: true,
  },
];

const perbedaanKargoVsHullVsPI = [
  { aspek: 'Objek yang Dijamin', cargo: 'Barang/muatan', hull: 'Kapal (badan & mesin)', pi: 'Kewajiban hukum' },
  { aspek: 'Siapa yang Membutuhkan', cargo: 'Pemilik barang', hull: 'Pemilik kapal', pi: 'Pemilik/operator kapal' },
  { aspek: 'Risiko Utama', cargo: 'Kerusakan/kehilangan muatan', hull: 'Tabrakan, badai, karam', pi: 'Tuntutan hukum pihak ketiga' },
  { aspek: 'Standar Klausula', cargo: 'ICC A/B/C', hull: 'ITC Hull 1983/1995', pi: 'P&I Club Rules' },
  { aspek: 'Pencemaran Laut', cargo: '❌ Tidak', hull: 'Terbatas (collision liability)', pi: '✅ Dijamin penuh' },
  { aspek: 'Klaim Kru Kapal', cargo: '❌ Tidak', hull: '❌ Tidak', pi: '✅ Dijamin (cedera/kematian kru)' },
  { aspek: 'Biaya Salvage Bangkai Kapal', cargo: '❌ Tidak', hull: 'Parsial', pi: '✅ Dijamin (wreck removal)' },
  { aspek: 'Premi Indikatif', cargo: '0,08%–0,35% dari nilai barang', hull: '0,5%–2,5% dari nilai kapal/tahun', pi: 'Berdasarkan tonase GT kapal' },
];

const dasarHukumMarine = [
  {
    regulasi: 'KUHD Buku II (Hukum Laut)',
    relevansi: 'Pasal 592–711',
    isi: 'Kitab Undang-Undang Hukum Dagang Buku II mengatur asuransi laut secara komprehensif di Indonesia — mulai dari objek pertanggungan, kewajiban para pihak, hingga proses klaim. Meski berusia ratusan tahun, KUHD masih menjadi tulang punggung hukum positif asuransi marine Indonesia dan terus dirujuk dalam sengketa klaim.',
  },
  {
    regulasi: 'UU No. 17 Tahun 2008 (Pelayaran)',
    relevansi: 'Pasal 181–203',
    isi: 'Mengatur kewajiban asuransi kapal, tanggung jawab pengangkut terhadap muatan dan penumpang, serta kewajiban pemilik kapal atas pencemaran yang timbul dari operasional kapal. UU Pelayaran ini menjadi landasan regulatoris yang memperkuat kebutuhan P&I bagi pemilik kapal berbendera Indonesia.',
  },
  {
    regulasi: 'MARPOL 73/78 (Konvensi Internasional)',
    relevansi: 'Annex I–VI',
    isi: 'Konvensi internasional untuk pencegahan polusi dari kapal yang telah diratifikasi Indonesia. Menetapkan standar penanganan limbah kapal dan kewajiban kompensasi pencemaran laut. Kapal yang beroperasi di jalur internasional harus memiliki Certificate of Financial Responsibility — yang dipenuhi melalui P&I.',
  },
  {
    regulasi: 'POJK No. 23 Tahun 2023',
    relevansi: 'Produk Asuransi Umum',
    isi: 'Mengatur seluruh produk asuransi kerugian termasuk lini marine di Indonesia — mencakup kewajiban transparansi polis, prosedur klaim (termasuk batas waktu keputusan klaim 30 hari kerja), dan standar wording produk. Semua penanggung marine di Indonesia tunduk pada ketentuan ini.',
  },
];

const faqData = [
  {
    question: 'Apakah pemilik kapal di Indonesia wajib memiliki asuransi P&I?',
    answer: 'Berdasarkan UU No. 17 Tahun 2008 tentang Pelayaran Pasal 181, pemilik kapal wajib memiliki asuransi atau jaminan keuangan untuk menanggung kerugian terhadap pihak ketiga akibat pengoperasian kapal — termasuk pencemaran. Untuk kapal yang beroperasi di jalur internasional, sertifikat P&I juga sering menjadi syarat wajib masuk pelabuhan asing (Certificate of Financial Responsibility/CLC Certificate).',
  },
  {
    question: 'Apa perbedaan P&I Club dengan polis P&I dari perusahaan asuransi biasa?',
    answer: 'P&I Club adalah asosiasi mutual (bukan perusahaan profit) yang dimiliki dan dikelola oleh anggotanya (para pemilik kapal). Tiga belas P&I Club internasional yang tergabung dalam International Group (IG) menjamin sekitar 90% tonase kapal dunia dengan kapasitas yang jauh melampaui kapasitas penanggung komersial. Di Indonesia, kapal-kapal yang belum masuk P&I Club internasional bisa menggunakan polis P&I dari penanggung komersial lokal — meski kapasitas dan jangkauan klaimnya lebih terbatas.',
  },
  {
    question: 'Apakah Hull & Machinery mencakup biaya salvage jika kapal kandas?',
    answer: 'Polis H&M standar (ITC Hull 1983) mencakup biaya salvage sebagai bagian dari particular average atau general average. Namun ada nuansa penting: jika kapal kandas karena kesalahan navigasi dan biaya salvage sangat besar, sebagian biaya mungkin tidak dijamin jika masuk kategori "konstruktif total loss" (CTL) yang kemudian dideklarasikan. Biaya pemindahan/pemusnahan bangkai kapal (wreck removal) secara khusus dijamin oleh P&I, bukan H&M.',
  },
  {
    question: 'Bisakah pemilik kapal kecil (kapal nelayan, kapal ferry kecil) mendapatkan asuransi marine?',
    answer: 'Ya, meski underwriting lebih selektif. Kapal kayu tradisional dan kapal nelayan skala kecil dapat diasuransikan melalui beberapa penanggung lokal dengan polis khusus. Rate premi umumnya lebih tinggi karena profil risiko yang lebih besar (kondisi kapal, kompetensi awak, ketiadaan alat navigasi modern). Program asuransi nelayan juga tersedia melalui skema subsidi pemerintah — konsultasikan kebutuhan spesifik Anda.',
  },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
const jsonLdArticle = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Asuransi Marine Indonesia: Kargo, Hull & Machinery, P&I — Panduan Lengkap 2025', author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl }, publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/marine-insurance` }, inLanguage: 'id-ID', datePublished: '2025-01-01', dateModified: '2025-05-01' };
const jsonLdBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Marine Insurance', item: `${baseUrl}/marine-insurance` }] };

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function MarineInsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="bg-blue-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-blue-300">Beranda</a>
              <span className="text-blue-700">/</span>
              <span className="text-white font-medium">Marine Insurance</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-950 via-cyan-950 to-slate-900 text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/30">⚓ Asuransi Maritim & Bahari</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30">KUHD Buku II Hukum Laut</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">Diawasi OJK</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">Asuransi Marine Indonesia</h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-3xl">
              Indonesia adalah negara kepulauan dengan lebih dari 17.000 pulau dan salah satu jalur
              pelayaran tersibuk di dunia melalui Selat Malaka. Ekosistem asuransi marine mencakup
              tiga pilar berbeda — Cargo, Hull & Machinery, dan P&I — yang masing-masing melindungi
              aspek yang berbeda dari dunia maritim.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Marine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Konsultasi Gratis via WA
              </a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">📞 0813-1556-592</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* Ekosistem Marine */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Memahami Ekosistem Asuransi Marine</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  "Asuransi Marine" bukan satu produk tunggal — ia adalah ekosistem empat produk yang saling
                  melengkapi namun melindungi aspek yang sama sekali berbeda. Kekeliruan paling umum adalah
                  mengira <em>Marine Cargo</em> (yang melindungi barang) sudah mencakup tanggung jawab jika
                  kapal pengangkut menabrak kapal lain — padahal itu domain <em>Protection & Indemnity</em>.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-blue-800 mb-2">🔑 Analogi Sederhana untuk Memahami Perbedaan</p>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>📦 <strong>Marine Cargo</strong> = Asuransi isi tas/koper di pesawat (milik penumpang)</p>
                    <p>🛳️ <strong>Hull & Machinery</strong> = Asuransi kendaraan untuk pesawatnya sendiri</p>
                    <p>⚖️ <strong>P&I</strong> = Asuransi tanggung gugat maskapai jika pesawat menabrak sesuatu / kru cedera</p>
                    <p>📋 <strong>Freight</strong> = Jaminan tiket/biaya angkut yang sudah dibayar tidak hangus</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {marineCluster.map((prod) => (
                    <div key={prod.title} className={`rounded-xl border p-6 hover:shadow-md transition-all ${prod.color === 'cyan' ? 'border-cyan-200 hover:border-cyan-300' : prod.color === 'blue' ? 'border-blue-200 hover:border-blue-300' : prod.color === 'purple' ? 'border-purple-200 hover:border-purple-300' : 'border-amber-200 hover:border-amber-300'}`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-3xl">{prod.icon}</span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <Link href={prod.href} className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">{prod.title}</Link>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${prod.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' : prod.color === 'blue' ? 'bg-blue-100 text-blue-700' : prod.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}>{prod.tagline}</span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">{prod.deskripsi}</p>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {[
                                { label: 'Objek Dijamin', val: prod.objekDijamin },
                                { label: 'Pihak Tertanggung', val: prod.pihakTertanggung },
                                { label: 'Basis Klaim', val: prod.basisKlaim },
                                { label: 'Dasar Hukum', val: prod.dasarHukum },
                              ].map((d) => (
                                <div key={d.label} className="bg-slate-50 rounded-lg px-3 py-2">
                                  <p className="text-xs text-slate-400 font-medium">{d.label}</p>
                                  <p className="text-xs text-slate-700 mt-0.5">{d.val}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Link href={prod.href} className="text-blue-500 hover:text-blue-700 text-xs font-semibold flex-shrink-0 mt-1">Detail →</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Perbandingan 3 Pilar */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Perbandingan Cepat: Cargo vs H&M vs P&I</h2>
                <p className="text-slate-600 text-sm mb-5">Tabel ini membantu Anda menentukan produk mana yang relevan berdasarkan posisi Anda dalam rantai maritim — pemilik barang, pemilik kapal, atau keduanya.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-950 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3 bg-cyan-800">Marine Cargo</th>
                        <th className="text-left p-3">Hull & Machinery</th>
                        <th className="text-left p-3 rounded-tr-lg bg-purple-900">P&I</th>
                      </tr>
                    </thead>
                    <tbody>
                      {perbedaanKargoVsHullVsPI.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.aspek}</td>
                          <td className="p-3 text-slate-700 bg-cyan-50/40">{row.cargo}</td>
                          <td className="p-3 text-slate-700">{row.hull}</td>
                          <td className="p-3 text-slate-700 bg-purple-50/40">{row.pi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-700">
                    <strong>💡 Penting:</strong> Pemilik kapal yang serius membutuhkan <em>kombinasi</em> H&M + P&I —
                    bukan salah satu. H&M melindungi aset kapal itu sendiri; P&I melindungi dari tuntutan
                    hukum yang nilainya bisa jauh melampaui nilai kapal.
                  </p>
                </div>
              </section>

              {/* Dasar Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Regulasi & Dasar Hukum Asuransi Marine di Indonesia</h2>
                <p className="text-slate-600 text-sm mb-6">Ekosistem hukum asuransi marine Indonesia mengacu pada hukum nasional (KUHD) sekaligus konvensi internasional yang telah diratifikasi.</p>
                <div className="space-y-4">
                  {dasarHukumMarine.map((reg) => (
                    <div key={reg.regulasi} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-blue-900 text-white px-5 py-3 flex items-center gap-3">
                        <span className="font-bold text-sm">{reg.regulasi}</span>
                        <span className="text-xs text-blue-300 bg-blue-800 px-2 py-0.5 rounded-full">{reg.relevansi}</span>
                      </div>
                      <div className="p-5">
                        <p className="text-slate-600 text-sm leading-relaxed">{reg.isi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Asuransi Marine</h2>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900 to-cyan-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="text-3xl mb-3">⚓</div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Asuransi Marine</h3>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">Rio Mardiansyah membantu pemilik kapal, eksportir, dan pelaku logistik memilih kombinasi produk marine yang tepat sesuai eksposur risiko aktual.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Marine" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">⚓ Klaster Marine</h3>
                <div className="space-y-2">
                  {marineCluster.map((prod) => (
                    <Link key={prod.href} href={prod.href} className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition group">
                      <span className="text-xl">{prod.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{prod.title}</p>
                        <p className="text-xs text-slate-500">{prod.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* P&I Highlight */}
              <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold text-purple-300 mb-1">⚖️ Produk Marine Paling Kompleks</p>
                <h3 className="font-bold text-lg mb-2">Protection & Indemnity (P&I)</h3>
                <p className="text-sm text-purple-200 mb-4 leading-relaxed">Tanggung jawab hukum pemilik kapal bisa mencapai ratusan juta USD jika terjadi tumpahan minyak atau tabrakan fatal. P&I adalah satu-satunya produk yang menjamin ini.</p>
                <Link href="/protection-indemnity" className="inline-block w-full text-center bg-white text-purple-900 hover:bg-purple-50 px-4 py-2.5 rounded-xl font-bold text-sm transition-all">Pelajari P&I →</Link>
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
