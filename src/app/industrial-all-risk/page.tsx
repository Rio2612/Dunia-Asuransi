import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Industrial All Risk (IAR) Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan mendalam Asuransi Industrial All Risk (IAR) di Indonesia: Munich Re wording, ISR Policy, perbedaan IAR vs kebakaran, koneksi dengan Business Interruption, simulasi premi, dan klausul wajib. Konsultasi: 0813-1556-592.',
  keywords: [
    'industrial all risk indonesia',
    'asuransi IAR pabrik',
    'asuransi properti industri',
    'industrial special risks',
    'asuransi pabrik manufaktur',
    'ISR policy indonesia',
    'asuransi fasilitas industri',
    'premi industrial all risk',
    'asuransi gudang pabrik',
    'material damage insurance indonesia',
  ],
  alternates: { canonical: `${baseUrl}/industrial-all-risk` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Industrial All Risk (IAR) Indonesia: Panduan Lengkap 2025',
    description: 'Panduan IAR Indonesia: Munich Re wording, ISR Policy, koneksi BI, simulasi premi, klausul wajib. Konsultasi profesional.',
    url: `${baseUrl}/industrial-all-risk`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
const faqData = [
  {
    question: 'Apa itu Asuransi Industrial All Risk (IAR) dan apa bedanya dengan asuransi kebakaran?',
    answer: 'Asuransi Industrial All Risk (IAR) adalah polis all risks untuk properti industri skala besar — pabrik, gudang, instalasi manufaktur — yang menjamin kerusakan fisik akibat semua penyebab kecuali yang secara eksplisit dikecualikan. Berbeda fundamentally dari asuransi kebakaran yang berbasis named perils (hanya menjamin risiko yang disebutkan: kebakaran, petir, ledakan). Dalam IAR, yang dikecualikan yang disebutkan — bukan yang dijamin. Ini memberi cakupan jauh lebih luas termasuk kerusakan air, vandalisme, impact, dan runtuhnya bangunan akibat sebab tak terduga.',
  },
  {
    question: 'Wording polis IAR apa yang menjadi standar internasional?',
    answer: 'Dua wording utama yang menjadi acuan global: (1) Munich Re IAR Wording — standar reasuransi internasional yang digunakan mayoritas penanggung Indonesia untuk mereasuransikan risiko IAR ke pasar internasional. Wording ini sangat detail dalam mendefinisikan exclusion dan klausul khusus industri. (2) ISR (Industrial Special Risks) Policy — dikembangkan pasar asuransi Australia dan Lloyd\'s London, banyak digunakan sebagai referensi wording untuk risiko industri kompleks di Asia Tenggara. Memahami kedua wording ini penting karena kondisi reasuransi menentukan apa yang bisa di-cover di tingkat polis lokal.',
  },
  {
    question: 'Apakah polis IAR otomatis mencakup Business Interruption?',
    answer: 'Tidak. Business Interruption (BI) atau Loss of Profit adalah perluasan terpisah yang harus diminta secara eksplisit dan membayar premi tambahan. Namun ada hubungan kritis: polis BI tidak bisa berdiri sendiri — syarat klaimnya (Material Damage Proviso) mengharuskan adanya klaim yang valid di polis IAR/Material Damage terlebih dahulu. Jika klaim IAR ditolak, klaim BI otomatis gugur. Ini sebabnya idealnya polis IAR dan BI dibeli dari penanggung yang sama untuk menghindari gap koordinasi klaim.',
  },
  {
    question: 'Apa itu Waiver of Subrogation dan mengapa penting untuk grup perusahaan?',
    answer: 'Subrogation adalah hak penanggung untuk menggugat pihak ketiga yang menyebabkan kerugian, setelah membayar klaim. Waiver of Subrogation adalah klausul yang mengesampingkan hak ini. Untuk grup perusahaan dengan beberapa entitas legal dalam satu kawasan industri, klausul ini wajib ada: tanpa Waiver of Subrogation, jika kebakaran di fasilitas entitas A merusak fasilitas entitas B, penanggung B bisa menggugat entitas A setelah membayar klaim — sesuatu yang tidak diinginkan dalam satu grup bisnis.',
  },
  {
    question: 'Bagaimana cara menentukan Sum Insured IAR yang benar agar tidak terkena rule of average?',
    answer: 'Sum Insured IAR harus berdasarkan Replacement Value (nilai penggantian baru yang setara) dari seluruh aset yang diasuransikan — bukan nilai buku akuntansi. Komponen yang harus dihitung: nilai bangunan (berdasarkan biaya konstruksi per m² saat ini), nilai mesin dan peralatan (replacement cost baru), nilai stok bahan baku dan barang jadi (harga beli/produksi terkini), instalasi utilitas, dan contingency 10-15% untuk biaya profesional dan debris removal. Underinsurance mengaktifkan average clause: jika SI hanya 60% dari nilai sebenarnya, klaim hanya dibayar 60% dari kerugian aktual.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Asuransi Industrial All Risk (IAR) Indonesia: Panduan Lengkap 2025',
  description: 'Panduan mendalam IAR mencakup Munich Re wording, ISR Policy, koneksi BI, simulasi premi, dan klausul wajib.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/industrial-all-risk` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Industrial All Risk', item: `${baseUrl}/industrial-all-risk` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function IndustrialAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* Breadcrumb */}
        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-500">/</span>
              <span className="text-teal-300 font-medium">Industrial All Risk (IAR)</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-emerald-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-teal-400/30">
              🏭 Asuransi Properti Industri Skala Besar — Corporate Lines
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Industrial All Risk (IAR) Indonesia
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl leading-relaxed mb-8">
              Perlindungan all risks berbasis Munich Re wording untuk seluruh aset fisik fasilitas industri Anda —
              dari bangunan pabrik dan mesin produksi hingga stok bahan baku dan instalasi utilitas. Satu polis,
              cakupan komprehensif, standar reasuransi internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Industrial%20All%20Risk"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                <WaIcon />Konsultasi via WA
              </a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* Definisi & Wording Standar */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu IAR dan Standar Wording Internasionalnya?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Industrial All Risk (IAR)</strong> adalah produk asuransi properti kelas atas yang dirancang
                  khusus untuk fasilitas industri skala besar. Berbeda dari asuransi kebakaran konvensional yang
                  menggunakan pendekatan <em>named perils</em> (hanya menjamin risiko yang disebutkan), IAR menggunakan
                  pendekatan <em>all risks</em>: semua risiko dijamin kecuali yang secara eksplisit dikecualikan.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Perbedaan filosofis ini sangat signifikan dalam praktik klaim. Dalam asuransi kebakaran, tertanggung
                  harus membuktikan bahwa penyebab kerugian <em>masuk</em> dalam daftar yang dijamin. Dalam IAR,
                  penanggung yang harus membuktikan bahwa penyebab kerugian <em>masuk</em> dalam daftar pengecualian.
                  Ini membalik beban pembuktian dan memberikan posisi yang jauh lebih kuat kepada tertanggung saat klaim.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-900 text-white rounded-xl p-5">
                    <p className="text-teal-300 text-xs font-semibold mb-2 uppercase tracking-wide">Munich Re IAR Wording</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Standar reasuransi internasional yang digunakan mayoritas penanggung Indonesia untuk
                      mereasuransikan risiko IAR ke pasar global. Mendefinisikan exclusion dengan sangat detail
                      dan mencakup klausul-klausul khusus industri yang tidak ada di polis lokal biasa.
                    </p>
                  </div>
                  <div className="bg-slate-800 text-white rounded-xl p-5">
                    <p className="text-emerald-300 text-xs font-semibold mb-2 uppercase tracking-wide">ISR (Industrial Special Risks)</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Dikembangkan pasar Australia dan Lloyd's London. Banyak digunakan sebagai referensi wording
                      untuk risiko industri kompleks di Asia Tenggara. Sangat populer untuk industri kimia,
                      petrokimia, dan manufacturing berteknologi tinggi.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-teal-900 mb-1">📌 Mengapa Wording Reasuransi Penting?</p>
                  <p className="text-sm text-teal-800 leading-relaxed">
                    Kondisi reasuransi menentukan batas kemampuan underwriter lokal dalam memberikan cakupan.
                    Jika risiko tertentu tidak bisa direasuransikan dengan Munich Re atau Lloyd's, penanggung lokal
                    tidak akan bisa menawarkannya di polis primer. Memahami hal ini membantu Risk Manager
                    berkomunikasi lebih efektif dengan broker dan underwriter.
                  </p>
                </div>
              </section>

              {/* IAR vs Kebakaran — Perbandingan */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">IAR vs Asuransi Kebakaran: Perbandingan Definitif</h2>
                <p className="text-slate-600 text-sm mb-5">Mengapa industri serius tidak cukup dengan asuransi kebakaran biasa.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Dimensi</th>
                        <th className="text-left p-3 bg-red-900">🔥 Asuransi Kebakaran</th>
                        <th className="text-left p-3 bg-teal-800 rounded-tr-lg">🏭 Industrial All Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Basis Jaminan', 'Named perils — hanya risiko yang disebutkan', 'All risks — semua kecuali yang dikecualikan'],
                        ['Beban Pembuktian Klaim', 'Tertanggung buktikan penyebab ada di daftar', 'Penanggung buktikan penyebab ada di exclusion'],
                        ['Risiko Kerusakan Air', '❌ Tidak dijamin (kecuali endorsement)', '✅ Dijamin (pipa pecah, kebocoran atap, dll)'],
                        ['Vandalisme', '❌ Tidak dijamin standar', '✅ Dijamin'],
                        ['Impact & Collision', '❌ Sangat terbatas', '✅ Dijamin termasuk tabrakan kendaraan'],
                        ['Kerusakan Listrik', '❌ Tidak dijamin', '✅ Dijamin (overcurrent, overvoltage)'],
                        ['Basis Nilai Klaim', 'Nilai pasar / Indemnity', 'Replacement Value (bisa dipilih)'],
                        ['Target Risiko', 'Gedung komersial, toko, rumah', 'Pabrik, gudang, kawasan industri'],
                        ['Wording Acuan', 'PSAKI (Polis Standar Indonesia)', 'Munich Re IAR / ISR Lloyd\'s'],
                        ['Integrasi BI', 'Terbatas', 'Lebih mudah dan komprehensif'],
                      ].map(([dim, kbkr, iar], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{dim}</td>
                          <td className="p-3 text-slate-700 border-l border-red-100">{kbkr}</td>
                          <td className="p-3 text-slate-700 border-l border-teal-100">{iar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Klausul Wajib */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Klausul Penting yang Wajib Ada di Polis IAR Anda</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Machinery Breakdown Extension',
                      badge: 'Add-on Strategis',
                      color: 'blue',
                      desc: 'Mengintegrasikan jaminan kerusakan mesin (Machinery Breakdown) ke dalam polis IAR sehingga cukup satu polis untuk kerusakan fisik bangunan dan mesin sekaligus. Lebih efisien dan menghilangkan risiko gap perlindungan antara dua polis terpisah.',
                    },
                    {
                      title: 'Business Interruption Extension',
                      badge: 'Wajib untuk Industri',
                      color: 'amber',
                      desc: 'Perluasan IAR yang menjamin kehilangan laba kotor dan biaya tetap selama periode pemulihan pasca klaim material damage. Ingat: klaim BI hanya bisa diproses jika klaim IAR (material damage) valid terlebih dahulu — ini disebut Material Damage Proviso.',
                    },
                    {
                      title: 'Waiver of Subrogation',
                      badge: 'Kritis untuk Grup Perusahaan',
                      color: 'purple',
                      desc: 'Mengesampingkan hak penanggung untuk menggugat entitas lain dalam satu grup bisnis. Tanpa klausul ini, jika kebakaran di Pabrik A (anak perusahaan X) merusak fasilitas Pabrik B (anak perusahaan Y), penanggung B bisa menggugat perusahaan X — sesuatu yang pasti tidak diinginkan manajemen grup.',
                    },
                    {
                      title: 'Spontaneous Combustion Clause',
                      badge: 'Industri Spesifik',
                      color: 'red',
                      desc: 'Menjamin kerusakan akibat pembakaran spontan pada bahan-bahan yang rentan seperti kapas, serbuk kayu, bahan kimia organik, dan batu bara. Relevan untuk industri tekstil, agribisnis, pupuk, dan penyimpanan komoditas. Biasanya dikecualikan di polis standar namun dapat di-buy-back.',
                    },
                    {
                      title: 'Debris Removal & Professional Fees',
                      badge: 'Sering Terlupakan',
                      color: 'slate',
                      desc: 'Biaya membersihkan puing-puing pasca kejadian dan biaya profesional (arsitek, insinyur, surveyor) untuk rekonstruksi. Biaya ini bisa mencapai 15-20% dari biaya rekonstruksi namun sering tidak masuk dalam kalkulasi Sum Insured, menciptakan underinsurance tersembunyi.',
                    },
                  ].map((item) => (
                    <div key={item.title} className={`rounded-xl border p-5 ${
                      item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      item.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                      item.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                      item.color === 'red' ? 'bg-red-50 border-red-200' :
                      'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <p className={`font-bold text-base ${
                          item.color === 'blue' ? 'text-blue-900' :
                          item.color === 'amber' ? 'text-amber-900' :
                          item.color === 'purple' ? 'text-purple-900' :
                          item.color === 'red' ? 'text-red-900' : 'text-slate-800'
                        }`}>{item.title}</p>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          item.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                          item.color === 'amber' ? 'bg-amber-200 text-amber-800' :
                          item.color === 'purple' ? 'bg-purple-200 text-purple-800' :
                          item.color === 'red' ? 'bg-red-200 text-red-800' :
                          'bg-slate-200 text-slate-700'
                        }`}>{item.badge}</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* IAR → BI Connection — Konten Eksklusif */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Koneksi Kritis: IAR adalah Syarat Mutlak Klaim Business Interruption
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Ini adalah konsep yang paling sering disalahpahami oleh CFO dan Risk Manager yang baru
                  mengenal asuransi industri. Perlu diluruskan sejak awal:
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-6 mb-5">
                  <p className="text-teal-300 text-xs font-semibold mb-3 uppercase tracking-wide">Material Damage Proviso — Hukum Dasar BI</p>
                  <p className="text-slate-200 text-sm leading-relaxed mb-3">
                    Business Interruption Insurance <strong>tidak bisa berdiri sendiri</strong>. Syarat klaimnya
                    adalah adanya kerusakan fisik yang valid (<em>material damage</em>) yang dijamin oleh polis
                    IAR/Property. Jika klaim material damage ditolak penanggung — karena exclusion, misrepresentation,
                    atau alasan apapun — klaim Business Interruption <strong>otomatis gugur</strong>, tidak peduli
                    berapa besar kerugian produksi yang terjadi.
                  </p>
                  <div className="border-t border-slate-700 pt-3 mt-3">
                    <p className="text-amber-300 text-xs font-semibold mb-1">⚠️ Implikasi Praktis untuk Risk Manager</p>
                    <p className="text-slate-300 text-sm">
                      Jika polis IAR dan polis BI dibeli dari dua penanggung berbeda (split placement), ada risiko
                      gap koordinasi klaim: Penanggung BI menunggu keputusan Penanggung IAR, sementara Penanggung IAR
                      mungkin sedang dalam proses investigasi panjang. Untuk aset kritis, idealnya IAR dan BI
                      ditempatkan pada penanggung yang sama atau dengan koordinasi klaim yang disepakati tertulis
                      di kedua polis.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-teal-800">Pelajari Selengkapnya tentang Business Interruption</p>
                    <p className="text-xs text-teal-600 mt-0.5">Termasuk formula Gross Profit, Indemnity Period, dan cara menghitung Sum Insured BI</p>
                  </div>
                  <Link href="/business-interruption" className="flex-shrink-0 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                    Baca →
                  </Link>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Industrial All Risk</h2>
                <p className="text-slate-600 text-sm mb-5">Berdasarkan Total Insured Value (TIV) — nilai penggantian seluruh aset diasuransikan. Rate dipengaruhi jenis industri, konstruksi bangunan, sistem proteksi kebakaran, dan lokasi.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-teal-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Industri</th>
                        <th className="text-left p-3">TIV Contoh</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Tekstil / Garmen', 'Rp 100 Miliar', '0,15 – 0,25%', 'Rp 150 – 250 Juta'],
                        ['Makanan & Minuman (FMCG)', 'Rp 200 Miliar', '0,10 – 0,18%', 'Rp 200 – 360 Juta'],
                        ['Otomotif & Komponen', 'Rp 500 Miliar', '0,08 – 0,15%', 'Rp 400 Juta – 750 Juta'],
                        ['Kimia & Petrokimia', 'Rp 1 Triliun', '0,20 – 0,40%', 'Rp 2 – 4 Miliar'],
                        ['Elektronik & Semikonduktor', 'Rp 300 Miliar', '0,10 – 0,20%', 'Rp 300 – 600 Juta'],
                        ['Smelter / Metalurgi', 'Rp 800 Miliar', '0,15 – 0,30%', 'Rp 1,2 – 2,4 Miliar'],
                      ].map(([industri, tiv, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{industri}</td>
                          <td className="p-3 font-mono text-slate-700">{tiv}</td>
                          <td className="p-3 font-mono text-slate-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Rate sangat dipengaruhi oleh: konstruksi bangunan (beton vs rangka baja ringan), sistem sprinkler & hydrant, jarak dengan fasilitas risiko tinggi, rekam jejak klaim 5 tahun, dan kondisi reasuransi global. Proyek di kawasan rawan bencana alam dikenakan loading signifikan.</p>
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
                <strong>Disclaimer:</strong> Informasi bersifat edukatif. Rate, cakupan, dan klausul aktual ditentukan underwriter berdasarkan survei risiko, jenis industri, dan kondisi reasuransi yang berlaku.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-teal-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">🏭</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi IAR</h3>
                <p className="text-teal-200 text-sm mb-5 leading-relaxed">Perlindungan industri butuh pendekatan teknis. Rio Mardiansyah siap membantu menyusun struktur polis IAR yang tepat untuk skala dan jenis industri Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Industrial%20All%20Risk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-teal-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Klaster Property */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Paket Perlindungan Industri</h3>
                <div className="space-y-2">
                  {[
                    { href: '/business-interruption', label: 'Business Interruption', sub: 'Kehilangan laba pasca klaim IAR', hot: true },
                    { href: '/asuransi-machinery-breakdown', label: 'Machinery Breakdown', sub: 'Kerusakan mesin operasional' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Gedung komersial & kantor' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition group">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-700 group-hover:text-teal-600 text-sm">{l.label}</p>
                          {l.hot && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Terkait</span>}
                        </div>
                        <p className="text-xs text-slate-500">{l.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-engineering', label: 'Asuransi Engineering', sub: 'CAR, EAR, MB' },
                    { href: '/asuransi-public-liability', label: 'Public Liability', sub: 'Tanggung jawab pihak ketiga' },
                    { href: '/directors-officers-liability', label: 'D&O Liability', sub: 'Perlindungan direksi' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-teal-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-teal-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
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
