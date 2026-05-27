import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Engineering Indonesia: CAR, EAR & Machinery Breakdown [Panduan 2026]',
  description:
    'Panduan lengkap Asuransi Engineering di Indonesia: Construction All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown. Regulasi OJK, simulasi premi, dan tips klaim dari praktisi berpengalaman.',
  keywords: [
    'asuransi engineering',
    'asuransi engineering indonesia',
    'asuransi proyek konstruksi',
    'construction all risk',
    'erection all risk',
    'machinery breakdown insurance',
    'asuransi teknik',
    'engineering insurance indonesia',
    'asuransi CAR EAR',
    'asuransi industri',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-engineering`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Engineering Indonesia: CAR, EAR & Machinery Breakdown',
    description:
      'Panduan lengkap Asuransi Engineering di Indonesia — Construction All Risk, Erection All Risk, dan Machinery Breakdown. Regulasi OJK & simulasi premi.',
    url: `${baseUrl}/asuransi-engineering`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const engineeringTypes = [
  {
    title: 'Construction All Risk (CAR)',
    slug: '/asuransi-car-indonesia',
    icon: '🏗️',
    color: 'amber',
    description:
      'Perlindungan proyek sipil: gedung, jalan, jembatan, dan bendungan. Mencakup kerusakan fisik pekerjaan dan tanggung jawab hukum pihak ketiga.',
    tags: ['Proyek Sipil', 'Kontraktor', 'Pemilik Proyek'],
  },
  {
    title: 'Erection All Risk (EAR)',
    slug: '/asuransi-ear',
    icon: '⚙️',
    color: 'teal',
    description:
      'Perlindungan pemasangan mesin, instalasi pabrik, dan pekerjaan M&E. Termasuk fase testing & commissioning yang sering luput dari perhatian.',
    tags: ['Instalasi Mesin', 'M&E Contractor', 'Pabrik Baru'],
  },
  {
    title: 'Machinery Breakdown (MB)',
    slug: '/asuransi-machinery-breakdown',
    icon: '🔧',
    color: 'blue',
    description:
      'Perlindungan mesin dan peralatan yang sudah beroperasi dari kerusakan mendadak akibat kegagalan mekanis, korsleting listrik, atau kesalahan operator.',
    tags: ['Mesin Operasional', 'Pabrik', 'Plant Manager'],
  },
  {
    title: 'Boiler & Pressure Vessel',
    slug: '#',
    icon: '🔥',
    color: 'red',
    description:
      'Menjamin risiko ledakan atau kegagalan teknis pada ketel uap, bejana tekan, dan sistem bertekanan lainnya di industri proses.',
    tags: ['Ketel Uap', 'Industri Proses', 'Segera Hadir'],
  },
  {
    title: 'Electronic Equipment Insurance',
    slug: '#',
    icon: '💻',
    color: 'purple',
    description:
      'Perlindungan perangkat elektronik canggih: sistem kontrol PLC, server data center, dan instrumen medis dari kerusakan fisik maupun listrik.',
    tags: ['Elektronik', 'Data Center', 'Segera Hadir'],
  },
];

const faqData = [
  {
    question: 'Apa itu Asuransi Engineering dan apa bedanya dengan asuransi umum?',
    answer:
      'Asuransi Engineering adalah cabang khusus dari asuransi kerugian (general insurance) yang dirancang untuk menanggung risiko unik pada tahap konstruksi, instalasi, dan operasional mesin/peralatan industri. Bedanya dengan asuransi properti biasa: asuransi engineering menjamin "pekerjaan yang sedang berlangsung" (work in progress), bukan sekadar aset statis. Regulasinya di Indonesia merujuk pada pedoman AAUI (Asosiasi Asuransi Umum Indonesia) dan diawasi OJK.',
  },
  {
    question: 'Apakah Asuransi Engineering wajib secara hukum di Indonesia?',
    answer:
      'Untuk proyek yang dibiayai APBN/APBD, Perpres 16/2018 tentang Pengadaan Barang/Jasa Pemerintah mewajibkan penyedia jasa konstruksi memiliki asuransi proyek (CAR). Untuk proyek swasta atau industri, tidak ada kewajiban hukum langsung, namun hampir semua perjanjian kredit perbankan dan kontrak joint venture mensyaratkan polis asuransi engineering sebagai covenant.',
  },
  {
    question: 'Bagaimana cara memilih antara CAR, EAR, atau Machinery Breakdown?',
    answer:
      'Patokan sederhananya: CAR untuk proyek yang dominan pekerjaan sipil (beton, baja struktural, tanah). EAR untuk proyek yang dominan pekerjaan mekanikal-elektrikal atau pemasangan mesin baru. Machinery Breakdown untuk mesin yang sudah selesai dipasang dan sedang beroperasi rutin. Satu proyek besar (misalnya pembangunan pabrik) bisa menggunakan ketiganya sekaligus dengan polis terpisah atau combined policy.',
  },
  {
    question: 'Berapa kisaran premi Asuransi Engineering?',
    answer:
      'Rate premi sangat bervariasi tergantung jenis pekerjaan, lokasi, dan profil risiko. Sebagai acuan pasar: CAR berkisar 0,15%–0,45% dari nilai kontrak per tahun, EAR 0,20%–0,50%, dan Machinery Breakdown 0,30%–0,80% dari nilai mesin yang diasuransikan. Proyek di kawasan risiko tinggi (daerah rawan gempa, banjir) atau pekerjaan bertekanan tinggi akan dikenakan loading tambahan.',
  },
  {
    question: 'Apa risiko utama yang sering menyebabkan klaim asuransi engineering ditolak?',
    answer:
      'Tiga penyebab terbesar klaim ditolak: (1) Perubahan scope pekerjaan tidak dilaporkan ke penanggung — polis CAR/EAR mensyaratkan notifikasi tertulis jika ada material change of risk; (2) Underinsurance — nilai pertanggungan lebih rendah dari nilai actual replacement cost, sehingga klaim dibayar secara proporsional (rule of average berlaku); (3) Exclusion wear & tear pada Machinery Breakdown — kerusakan yang timbul karena kurangnya perawatan rutin tidak dijamin.',
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
  headline: 'Asuransi Engineering Indonesia: Panduan Lengkap CAR, EAR & Machinery Breakdown 2026',
  description:
    'Panduan lengkap asuransi engineering di Indonesia mencakup CAR, EAR, Machinery Breakdown, regulasi OJK, simulasi premi, dan tips klaim dari praktisi.',
  author: {
    '@type': 'Person',
    name: 'Rio Mardiansyah',
    url: `${baseUrl}`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dunia Asuransi',
    url: baseUrl,
    telephone: '+628131556592',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-engineering` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2026-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Engineering', item: `${baseUrl}/asuransi-engineering` },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EngineeringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-500">/</span>
              <span className="text-orange-300 font-medium">Asuransi Engineering</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
              🏭 Pilar Utama — Asuransi Kerugian Korporat
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Engineering Indonesia
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Dari proyek konstruksi senilai ratusan miliar hingga lini produksi pabrik yang beroperasi 24 jam —
              asuransi engineering adalah perisai finansial yang wajib dimiliki setiap pelaku industri serius di Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Engineering"
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

              {/* Apa itu Asuransi Engineering */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Apa Itu Asuransi Engineering?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Asuransi Engineering adalah cabang spesialis dari asuransi kerugian (<em>general insurance</em>) yang
                  memberikan perlindungan terhadap risiko teknis pada tiga fase utama siklus aset industri:
                  <strong> konstruksi</strong>, <strong>instalasi/pemasangan</strong>, dan <strong>operasional</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Berbeda dengan asuransi properti konvensional yang menjamin bangunan atau aset statis, asuransi engineering
                  dirancang untuk objek yang <em>sedang berubah bentuk</em> — dari gambar desain menjadi struktur fisik, atau
                  dari komponen mesin terpisah menjadi lini produksi yang berputar. Inilah yang membuatnya lebih kompleks
                  secara underwriting dan lebih kritis secara bisnis.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mt-4">
                  <p className="text-sm font-semibold text-amber-800 mb-1">📌 Dasar Regulasi</p>
                  <p className="text-sm text-amber-700">
                    Di Indonesia, produk Asuransi Engineering wajib memenuhi ketentuan <strong>POJK Nomor 23/2023</strong>{' '}
                    tentang Produk Asuransi dan Pemasaran Produk Asuransi, serta mengacu pada wording polis standar yang
                    telah mendapat persetujuan OJK. Penanggung yang menerbitkan polis CAR/EAR di Indonesia wajib
                    terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK).
                  </p>
                </div>
              </section>

              {/* Jenis-jenis */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Jenis Asuransi Engineering di Indonesia
                </h2>
                <p className="text-slate-600 mb-6 text-sm">
                  Pilih jenis yang sesuai dengan fase dan jenis proyek atau aset Anda.
                </p>
                <div className="space-y-4">
                  {engineeringTypes.map((type) => (
                    <div
                      key={type.title}
                      className={`rounded-xl border p-5 transition-all ${
                        type.slug !== '#'
                          ? 'hover:shadow-md hover:-translate-y-0.5 border-slate-200 cursor-pointer'
                          : 'border-slate-100 opacity-70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{type.icon}</span>
                          <div>
                            {type.slug !== '#' ? (
                              <a href={type.slug} className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors">
                                {type.title}
                              </a>
                            ) : (
                              <p className="text-lg font-bold text-slate-400">{type.title}</p>
                            )}
                            <p className="text-slate-600 text-sm mt-1 leading-relaxed">{type.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {type.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {type.slug !== '#' && (
                          <a
                            href={type.slug}
                            className="flex-shrink-0 text-orange-500 hover:text-orange-700 text-sm font-semibold whitespace-nowrap mt-1"
                          >
                            Pelajari →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fase Risiko & Polis yang Tepat */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Panduan Memilih Polis Berdasarkan Fase Proyek
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Satu siklus proyek industri umumnya melewati tiga fase risiko yang berbeda. Setiap fase membutuhkan produk
                  asuransi yang berbeda pula.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Fase Proyek</th>
                        <th className="text-left p-3">Polis yang Tepat</th>
                        <th className="text-left p-3">Objek Risiko Utama</th>
                        <th className="text-left p-3 rounded-tr-lg">Kisaran Rate Premi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-amber-50 transition-colors">
                        <td className="p-3 font-medium text-slate-800">Konstruksi Sipil</td>
                        <td className="p-3">
                          <a href="/asuransi-car-indonesia" className="text-orange-600 hover:underline font-semibold">CAR</a>
                        </td>
                        <td className="p-3 text-slate-600">Pekerjaan sipil, material, TPL</td>
                        <td className="p-3 text-slate-700 font-mono">0,15% – 0,45%</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-teal-50 transition-colors">
                        <td className="p-3 font-medium text-slate-800">Pemasangan Mesin / M&E</td>
                        <td className="p-3">
                          <a href="/asuransi-ear" className="text-teal-600 hover:underline font-semibold">EAR</a>
                        </td>
                        <td className="p-3 text-slate-600">Mesin, alat berat, commissioning</td>
                        <td className="p-3 text-slate-700 font-mono">0,20% – 0,50%</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-blue-50 transition-colors">
                        <td className="p-3 font-medium text-slate-800">Operasional Rutin</td>
                        <td className="p-3">
                          <a href="/asuransi-machinery-breakdown" className="text-blue-600 hover:underline font-semibold">Machinery Breakdown</a>
                        </td>
                        <td className="p-3 text-slate-600">Mesin beroperasi, kerugian produksi</td>
                        <td className="p-3 text-slate-700 font-mono">0,30% – 0,80%</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-800">Proyek Gabungan (EPC)</td>
                        <td className="p-3">
                          <span className="text-slate-500 font-semibold">CAR + EAR</span>
                        </td>
                        <td className="p-3 text-slate-600">Semua fase dalam satu kontrak</td>
                        <td className="p-3 text-slate-700 font-mono">Negotiable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Rate di atas adalah indikasi pasar umum. Rate aktual ditentukan oleh underwriter berdasarkan survei risiko,
                  track record klaim, lokasi proyek, dan kondisi polis.
                </p>
              </section>

              {/* Kewajiban Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Kapan Asuransi Engineering Menjadi Wajib?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Meski tidak semua proyek diwajibkan oleh undang-undang, ada beberapa konteks di mana asuransi engineering
                  bersifat <strong>mandatory</strong> secara praktis:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <p className="font-semibold text-slate-800">Proyek Pemerintah (APBN/APBD)</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Berdasarkan <strong>Perpres No. 16 Tahun 2018</strong> dan perubahannya (Perpres 12/2021) tentang
                        Pengadaan Barang/Jasa Pemerintah, penyedia jasa konstruksi diwajibkan memiliki asuransi dalam
                        kontrak pekerjaan konstruksi yang ditandatangani bersama PPK (Pejabat Pembuat Komitmen).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">🏦</span>
                    <div>
                      <p className="font-semibold text-slate-800">Proyek Berbiaya Kredit Perbankan</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Bank sebagai kreditur akan mensyaratkan polis CAR/EAR sebagai bagian dari covenant kredit sindikasi
                        maupun kredit investasi. Bank biasanya juga didaftarkan sebagai <em>loss payee</em> dalam polis.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <p className="font-semibold text-slate-800">Kontrak Joint Venture / BOT / EPC</p>
                      <p className="text-sm text-slate-600 mt-1">
                        Kontrak kerja sama internasional (JV, BOT, PSC) dan kontrak EPC (<em>Engineering, Procurement &
                        Construction</em>) selalu memuat klausul asuransi wajib dengan limit minimum yang ditentukan.
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
              <div className="bg-gradient-to-br from-slate-800 to-zinc-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Proyek Anda</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  Setiap proyek memiliki profil risiko berbeda. Rio Mardiansyah siap membantu Anda menyusun
                  struktur perlindungan yang tepat dan efisien.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Engineering"
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
                <p className="text-xs text-slate-500 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Cluster Links */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Halaman Engineering</h3>
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

              {/* Layanan Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Bisnis Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung jawab hukum' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti & gedung' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Pengiriman & logistik' },
                    { href: '/surety-bond', label: 'Surety Bond', sub: 'Jaminan proyek' },
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
            <p className="mt-1">WhatsApp: 0813-1556-592 | <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a></p>
          </div>
        </footer>

      </div>
    </>
  );
}
