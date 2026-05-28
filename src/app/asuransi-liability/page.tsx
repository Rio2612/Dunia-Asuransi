import type { Metadata } from 'next';
import BreadcrumbSchema, { breadcrumbConfigs } from '@/components/BreadcrumbSchema';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Liability Indonesia: Panduan Lengkap Tanggung Gugat Hukum Bisnis [2025]',
  description:
    'Panduan komprehensif Asuransi Liability di Indonesia — Public Liability, Product Liability, Professional Indemnity, D&O, hingga Environmental Liability B3. Regulasi OJK, dasar hukum KUHPerdata, dan tips klaim.',
  keywords: [
    'asuransi liability',
    'asuransi tanggung jawab hukum',
    'public liability insurance',
    'product liability indonesia',
    'professional indemnity',
    'directors officers liability',
    'asuransi D&O',
    'environmental liability',
    'asuransi pihak ketiga',
    'tanggung gugat hukum bisnis',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-liability`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Liability Indonesia: Panduan Lengkap Tanggung Gugat Hukum Bisnis 2025',
    description:
      'Panduan komprehensif asuransi liability — dari Public Liability hingga D&O dan Environmental. Regulasi OJK, dasar hukum, dan tips klaim.',
    url: `${baseUrl}/asuransi-liability`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const liabilityTypes = [
  {
    title: 'Public Liability',
    slug: '/asuransi-public-liability',
    icon: '🏢',
    color: 'blue',
    tagline: 'Tuntutan dari Publik di Area Operasional',
    description:
      'Menjamin tanggung jawab hukum terhadap pihak ketiga yang mengalami cedera badan (bodily injury) atau kerusakan properti (property damage) yang terjadi di area operasional bisnis Anda. Wajib dimiliki mall, hotel, rumah sakit, dan venue publik.',
    dasarHukum: 'Pasal 1365–1367 KUHPerdata tentang Perbuatan Melawan Hukum',
    limitUmum: 'USD 100.000 – USD 5.000.000',
    tags: ['Mall & Ritel', 'Hotel', 'Rumah Sakit', 'Kontraktor'],
    available: true,
  },
  {
    title: 'Product Liability',
    slug: '/asuransi-product-liability',
    icon: '📦',
    color: 'orange',
    tagline: 'Tuntutan akibat Produk Cacat atau Berbahaya',
    description:
      'Menjamin tanggung jawab hukum produsen atau distributor atas klaim yang timbul akibat produk cacat yang menyebabkan cedera atau kerusakan pada konsumen. Semakin kritis setelah UU Perlindungan Konsumen No. 8/1999 aktif diterapkan.',
    dasarHukum: 'UU No. 8 Tahun 1999 tentang Perlindungan Konsumen, Pasal 19',
    limitUmum: 'USD 200.000 – USD 10.000.000',
    tags: ['Produsen', 'Distributor', 'Importir', 'F&B'],
    available: true,
  },
  {
    title: 'Professional Indemnity (PI)',
    slug: '/asuransi-professional-indemnity',
    icon: '📋',
    color: 'purple',
    tagline: 'Tuntutan atas Kesalahan/Kelalaian Profesional',
    description:
      'Melindungi profesional dan perusahaan jasa dari klaim akibat kesalahan, kelalaian, atau breach of duty dalam pemberian layanan profesional. Wajib dimiliki konsultan, arsitek, akuntan, dan penyedia jasa teknologi.',
    dasarHukum: 'Pasal 1366 KUHPerdata (kelalaian/onrechtmatige daad) + regulasi profesi masing-masing',
    limitUmum: 'USD 100.000 – USD 5.000.000',
    tags: ['Konsultan', 'Arsitek', 'Akuntan', 'IT Vendor'],
    available: true,
  },
  {
    title: 'Directors & Officers (D&O)',
    slug: '/directors-officers-liability',
    icon: '👔',
    color: 'slate',
    tagline: 'Perlindungan Direksi & Komisaris dari Tuntutan Pribadi',
    description:
      'Menjamin biaya pembelaan dan ganti rugi yang harus ditanggung direksi/komisaris secara pribadi akibat keputusan bisnis yang digugat oleh pemegang saham, kreditur, atau regulator. Produk paling kompleks dalam lini liability.',
    dasarHukum: 'UU No. 40 Tahun 2007 tentang Perseroan Terbatas, Pasal 97 (fiduciary duty direksi)',
    limitUmum: 'USD 1.000.000 – USD 25.000.000',
    tags: ['Perseroan Terbatas', 'Perusahaan Publik', 'BUMN', 'Startup'],
    available: true,
  },
  {
    title: 'Environmental / Pollution Liability',
    slug: '/asuransi-liability-limbah-b3',
    icon: '🌿',
    color: 'green',
    tagline: 'Tuntutan akibat Pencemaran Lingkungan',
    description:
      'Menjamin tanggung jawab hukum dan biaya remediasi lingkungan akibat pencemaran yang ditimbulkan oleh aktivitas operasional, termasuk pengelolaan limbah B3. Semakin kritis seiring penegakan hukum lingkungan oleh KLHK.',
    dasarHukum: 'UU No. 32 Tahun 2009 tentang PPLH, PP No. 22/2021, PermenLHK No. 4/2021',
    limitUmum: 'USD 500.000 – USD 20.000.000',
    tags: ['Manufaktur', 'Pertambangan', 'Pengelola Limbah B3', 'Kimia'],
    available: true,
  },
  {
    title: 'Employer\'s Liability',
    slug: '#',
    icon: '👷',
    color: 'yellow',
    tagline: 'Tuntutan dari Karyawan yang Mengalami Kecelakaan Kerja',
    description:
      'Menjamin tuntutan hukum dari karyawan atau keluarganya yang melebihi kompensasi dari BPJS Ketenagakerjaan. Relevan untuk industri dengan risiko kecelakaan tinggi seperti konstruksi, pertambangan, dan manufaktur berat.',
    dasarHukum: 'UU No. 13/2003 tentang Ketenagakerjaan + UU No. 40/2004 tentang SJSN',
    limitUmum: 'Variatif per karyawan',
    tags: ['Konstruksi', 'Manufaktur', 'Pertambangan', 'Segera Hadir'],
    available: false,
  },
];

const perbandinganLiability = [
  { aspek: 'Pihak Penuntut', publicLi: 'Publik / pengunjung di area bisnis', productLi: 'Konsumen / pengguna produk', pi: 'Klien yang dirugikan jasa profesional', dao: 'Pemegang saham, regulator, kreditur', envLi: 'Masyarakat, pemerintah, badan lingkungan' },
  { aspek: 'Pemicu Klaim', publicLi: 'Kecelakaan di lokasi operasional', productLi: 'Produk cacat / berbahaya', pi: 'Kesalahan atau kelalaian profesional', dao: 'Keputusan bisnis yang merugikan stakeholder', envLi: 'Pencemaran atau kebocoran limbah' },
  { aspek: 'Basis Hukum Utama', publicLi: 'Pasal 1365 KUHPerdata', productLi: 'UU Perlindungan Konsumen 8/1999', pi: 'Pasal 1366 KUHPerdata', dao: 'UU PT 40/2007 Pasal 97', envLi: 'UU PPLH 32/2009' },
  { aspek: 'Cakupan Biaya Hukum', publicLi: '✅ Ya', productLi: '✅ Ya', pi: '✅ Ya (biaya pembelaan dan ganti rugi)', dao: '✅ Ya (termasuk investigasi regulasi)', envLi: '✅ Ya + biaya remediasi lingkungan' },
  { aspek: 'Yang Tidak Dijamin', publicLi: 'Cedera karyawan (masuk Employer\'s), kerusakan sengaja', productLi: 'Produk rusak itu sendiri (masuk garansi), penarikan produk', pi: 'Klaim penipuan/fraud, klaim pra-kontrak', dao: 'Klaim atas fraud terbukti, personal profit ilegal', envLi: 'Pencemaran yang disengaja, pre-existing contamination' },
];

const faqData = [
  {
    question: 'Apa dasar hukum kewajiban seseorang membayar ganti rugi kepada pihak ketiga?',
    answer:
      'Di Indonesia, dasar hukum tanggung jawab keperdataan kepada pihak ketiga bersumber dari Pasal 1365 KUHPerdata: "Tiap perbuatan melanggar hukum yang membawa kerugian kepada orang lain, mewajibkan orang yang karena salahnya menerbitkan kerugian itu, menggantikan kerugian tersebut." Inilah yang dikenal sebagai Perbuatan Melawan Hukum (PMH) atau onrechtmatige daad. Setiap aktivitas bisnis yang menimbulkan kerugian pada pihak lain — disengaja maupun tidak — berpotensi melahirkan klaim hukum. Asuransi liability hadir untuk menanggung kewajiban finansial dari klaim PMH ini.',
  },
  {
    question: 'Apakah asuransi liability mencakup biaya pengacara dan biaya persidangan?',
    answer:
      'Ya, hampir semua polis liability mencakup Defense Costs — yaitu biaya pembelaan hukum termasuk honorarium pengacara, biaya pengadilan, biaya saksi ahli, dan pengeluaran investigasi. Yang perlu diperhatikan: sebagian polis menjamin defense costs di luar limit (tidak memotong limit pertanggungan), sementara polis lain menjadikan defense costs sebagai bagian dari limit. Pastikan Anda mengklarifikasi poin ini dengan penanggung sebelum polis ditandatangani.',
  },
  {
    question: 'Apa perbedaan "Claims Made" vs "Occurrence" dalam polis liability?',
    answer:
      'Ini adalah perbedaan fundamental yang sering tidak dipahami tertanggung. Claims Made: polis menjamin klaim yang DILAPORKAN selama periode polis berlaku, terlepas kapan kejadiannya. Occurrence: polis menjamin klaim yang TERJADI selama periode polis, meski dilaporkan setelah polis berakhir. Sebagian besar polis Liability modern (termasuk PI dan D&O) menggunakan basis Claims Made. Konsekuensinya: jika Anda tidak memperpanjang polis, klaim yang muncul kemudian — meski berasal dari kejadian saat polis aktif — tidak akan dijamin.',
  },
  {
    question: 'Berapa limit pertanggungan yang disarankan untuk perusahaan menengah?',
    answer:
      'Tidak ada angka universal, karena bergantung pada industri, skala operasional, dan kontrak yang dimiliki. Sebagai panduan: untuk perusahaan menengah (revenue Rp 50–500 miliar), limit USD 500.000–USD 2.000.000 umumnya memadai untuk Public Liability dan Product Liability. Untuk Professional Indemnity, limit minimal harus setara nilai kontrak terbesar yang sedang berjalan. Untuk D&O, konsultasikan dengan broker berdasarkan profil perusahaan dan risiko litigasi di industri Anda.',
  },
  {
    question: 'Bagaimana proses klaim liability? Apakah saya harus mengakui kesalahan terlebih dahulu?',
    answer:
      'Jangan pernah mengakui kesalahan atau menegosiasikan dengan penggugat tanpa koordinasi dengan penanggung. Ini bukan saran hukum — ini klausul standar dalam hampir semua polis liability (Clause of Non-Admission). Saat menerima tuntutan atau surat somasi, segera: (1) hubungi penanggung/broker Anda, (2) serahkan semua dokumen terkait kejadian, (3) biarkan tim hukum yang ditunjuk penanggung yang mengelola komunikasi dengan penggugat. Pengakuan sepihak dapat membatalkan hak ganti rugi Anda dari penanggung.',
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
  headline: 'Asuransi Liability Indonesia: Panduan Lengkap Tanggung Gugat Hukum Bisnis 2025',
  description:
    'Panduan komprehensif asuransi liability di Indonesia — dari Public Liability hingga D&O dan Environmental Liability B3. Regulasi OJK, dasar hukum KUHPerdata, perbandingan produk, dan tips klaim.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-liability` },
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
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AsuransiLiabilityPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbConfigs.asuransiLiability} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-indigo-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-indigo-300">Beranda</a>
              <span className="text-indigo-600">/</span>
              <span className="text-purple-300 font-medium">Asuransi Liability</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
              ⚖️ Tanggung Gugat Hukum Korporat — Pilar Perlindungan Bisnis
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Liability Indonesia
            </h1>
            <p className="text-lg text-indigo-200 max-w-2xl leading-relaxed mb-8">
              Satu gugatan hukum dari pihak ketiga bisa menguras aset bisnis yang dibangun bertahun-tahun.
              Asuransi Liability adalah perisai hukum dan finansial yang memisahkan risiko operasional
              bisnis dari kekayaan pribadi Anda — dari Public Liability hingga D&O dan Environmental.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability"
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

              {/* Definisi & Dasar Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Apa Itu Asuransi Liability dan Apa Dasar Hukumnya?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Asuransi Liability — atau secara resmi disebut <em>Asuransi Tanggung Gugat</em> — adalah produk
                  asuransi kerugian yang menjamin kewajiban hukum tertanggung untuk membayar ganti rugi kepada
                  pihak ketiga yang mengalami kerugian akibat aktivitas bisnis atau kelalaian tertanggung.
                  Polis ini juga menanggung biaya pembelaan hukum yang timbul dalam proses penyelesaian klaim.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-4">
                  <p className="text-sm font-semibold text-indigo-800 mb-2">⚖️ Dasar Hukum Fundamental: KUHPerdata</p>
                  <p className="text-sm text-indigo-700 mb-2">
                    <strong>Pasal 1365 KUHPerdata:</strong> "Tiap perbuatan melanggar hukum yang membawa
                    kerugian kepada orang lain, mewajibkan orang yang karena salahnya menerbitkan kerugian
                    itu, menggantikan kerugian tersebut."
                  </p>
                  <p className="text-sm text-indigo-700">
                    <strong>Pasal 1367 KUHPerdata:</strong> Memperluas tanggung jawab kepada majikan atas
                    perbuatan melawan hukum yang dilakukan oleh karyawan dalam lingkup pekerjaannya —
                    inilah yang membuat <em>Vicarious Liability</em> relevan bagi perusahaan.
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Di Indonesia, produk Asuransi Liability diatur oleh <strong>POJK No. 23 Tahun 2023</strong>{' '}
                  tentang Produk Asuransi dan mengikuti wording polis yang mendapat persetujuan OJK. Untuk
                  produk-produk spesifik seperti D&O dan Environmental Liability, umumnya menggunakan wording
                  internasional (London market) yang disesuaikan dengan hukum Indonesia.
                </p>
              </section>

              {/* Jenis-jenis Liability */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Jenis-Jenis Asuransi Liability di Indonesia
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Setiap jenis liability merespons risiko hukum yang berbeda. Pilih berdasarkan profil
                  risiko bisnis Anda, bukan hanya berdasarkan harga premi.
                </p>
                <div className="space-y-5">
                  {liabilityTypes.map((type) => (
                    <div
                      key={type.title}
                      className={`rounded-xl border p-6 transition-all ${
                        type.available
                          ? 'border-slate-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
                          : 'border-slate-100 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <span className="text-3xl">{type.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              {type.available ? (
                                <a href={type.slug} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                                  {type.title}
                                </a>
                              ) : (
                                <p className="text-lg font-bold text-slate-400">{type.title}</p>
                              )}
                              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{type.tagline}</span>
                            </div>
                            <p className="text-slate-600 text-sm mt-2 leading-relaxed">{type.description}</p>
                            <div className="mt-3 grid sm:grid-cols-2 gap-2">
                              <div className="bg-slate-50 rounded-lg px-3 py-2">
                                <p className="text-xs text-slate-400 font-medium">Dasar Hukum</p>
                                <p className="text-xs text-slate-700 mt-0.5">{type.dasarHukum}</p>
                              </div>
                              <div className="bg-slate-50 rounded-lg px-3 py-2">
                                <p className="text-xs text-slate-400 font-medium">Limit Umum</p>
                                <p className="text-xs text-slate-700 font-mono mt-0.5">{type.limitUmum}</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {type.tags.map((tag) => (
                                <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${
                                  tag === 'Segera Hadir'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {type.available && (
                          <a href={type.slug} className="flex-shrink-0 text-indigo-500 hover:text-indigo-700 text-sm font-semibold whitespace-nowrap mt-1">
                            Pelajari →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Perbandingan */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Perbandingan Cepat: Mana Liability yang Anda Butuhkan?
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Tabel ini dirancang untuk membantu Anda memilih produk liability yang relevan
                  berdasarkan jenis eksposur bisnis Anda.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-indigo-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3">Public Li.</th>
                        <th className="text-left p-3">Product Li.</th>
                        <th className="text-left p-3">Prof. Indem.</th>
                        <th className="text-left p-3">D&O</th>
                        <th className="text-left p-3 rounded-tr-lg">Environ. Li.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {perbandinganLiability.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-semibold text-slate-700">{row.aspek}</td>
                          <td className="p-3 text-slate-600">{row.publicLi}</td>
                          <td className="p-3 text-slate-600">{row.productLi}</td>
                          <td className="p-3 text-slate-600">{row.pi}</td>
                          <td className="p-3 text-slate-600">{row.dao}</td>
                          <td className="p-3 text-slate-600">{row.envLi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Claims Made vs Occurrence */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Claims Made vs Occurrence: Perbedaan yang Wajib Dipahami
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Ini adalah konsep yang sering diabaikan saat membeli polis liability, namun krusial
                  saat terjadi klaim. Banyak tertanggung terkejut mengetahui klaim mereka tidak dijamin
                  karena salah memahami basis polis.
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="font-bold text-blue-800 text-base mb-1">📅 Claims Made Basis</p>
                    <p className="text-xs text-blue-600 mb-3">Umum di: PI, D&O, Environmental</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Polis menjamin klaim yang <strong>dilaporkan kepada penanggung</strong> selama
                      periode polis berlaku, terlepas kapan kejadiannya terjadi (dengan batasan
                      retroactive date).
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-blue-100">
                      <p className="text-xs text-slate-500 font-medium mb-1">⚠️ Implikasi Penting</p>
                      <p className="text-xs text-slate-600">
                        Jika polis tidak diperpanjang, klaim yang muncul setelah polis berakhir
                        — meski kejadiannya saat polis aktif — tidak akan dijamin.
                        Pastikan ada <em>Extended Reporting Period (ERP)</em>.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 text-base mb-1">⚡ Occurrence Basis</p>
                    <p className="text-xs text-slate-500 mb-3">Umum di: Public Liability, Product Li.</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Polis menjamin klaim yang <strong>terjadi (occurrence)</strong> selama periode
                      polis, meski dilaporkan setelah polis berakhir.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium mb-1">✅ Keuntungan</p>
                      <p className="text-xs text-slate-600">
                        Lebih aman untuk kejadian yang "tersembunyi" (latent defects) yang
                        dampaknya baru terasa bertahun-tahun kemudian — misalnya klaim
                        product liability dari konsumen.
                      </p>
                    </div>
                  </div>
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
              <div className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Analisis Risiko Liability Bisnis Anda</h3>
                <p className="text-indigo-200 text-sm mb-5 leading-relaxed">
                  Setiap bisnis punya eksposur liability yang berbeda. Rio Mardiansyah membantu
                  mengidentifikasi gap proteksi dan menyusun struktur polis yang efisien.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability"
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
                <p className="text-xs text-indigo-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Liability Cluster */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Jenis Liability Lainnya</h3>
                <div className="space-y-2">
                  {liabilityTypes.filter((t) => t.available).map((type) => (
                    <a key={type.slug} href={type.slug} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-indigo-50 rounded-xl transition group">
                      <span className="text-xl">{type.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-indigo-600 text-sm">{type.title}</p>
                        <p className="text-xs text-slate-500">{type.tagline}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sorotan: Limbah B3 */}
              <div className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold text-green-300 mb-1">🌿 Niche Terlangka & Termahal</p>
                <h3 className="font-bold text-lg mb-2">Liability Limbah B3</h3>
                <p className="text-sm text-green-200 mb-4 leading-relaxed">
                  Diwajibkan oleh UU PPLH 32/2009 dan PP 22/2021. Klaim remediasi lingkungan bisa
                  mencapai ratusan miliar rupiah. Produk paling langka di pasar Indonesia.
                </p>
                <Link
                  href="/asuransi-liability-limbah-b3"
                  className="inline-block w-full text-center bg-white text-green-800 hover:bg-green-50 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
                >
                  Pelajari Environmental Liability →
                </Link>
              </div>

              {/* Lini Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Bisnis Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Marine cargo & logistik' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-engineering', label: 'Asuransi Engineering', sub: 'CAR, EAR, Machinery' },
                    { href: '/surety-bond', label: 'Surety Bond', sub: 'Jaminan proyek & kontrak' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-indigo-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-indigo-600 text-sm">{link.label}</p>
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
            <p className="mt-1">WhatsApp: 0813-1556-592 | <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a></p>
          </div>
        </footer>

      </div>
    </>
  );
}
