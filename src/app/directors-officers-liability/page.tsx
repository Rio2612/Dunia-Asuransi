import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Directors & Officers (D&O) Liability Indonesia: Panduan 2025',
  description:
    'Panduan mendalam D&O Liability Indonesia: UUPT Pasal 97 & 114, Side A/B/C Coverage, Business Judgment Rule, Severability Clause, Run-off Coverage, tuntutan pemegang saham, dan simulasi premi per skala perusahaan. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi D&O liability',
    'directors officers liability indonesia',
    'asuransi direksi komisaris',
    'D&O insurance indonesia',
    'asuransi tanggung jawab direksi',
    'asuransi good corporate governance',
    'side A coverage D&O',
    'UUPT tanggung jawab direksi',
    'asuransi tuntutan pemegang saham',
    'run-off coverage D&O',
  ],
  alternates: { canonical: `${baseUrl}/directors-officers-liability` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Directors & Officers (D&O) Liability Indonesia: Panduan 2025',
    description: 'Panduan D&O Indonesia: UUPT Ps.97, Side A/B/C, Business Judgment Rule, Run-off, simulasi premi. Konsultasi profesional.',
    url: `${baseUrl}/directors-officers-liability`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi D&O Liability dan siapa yang membutuhkannya?',
    answer: 'Asuransi Directors & Officers (D&O) Liability menjamin tanggung jawab hukum pribadi direksi dan komisaris atas tindakan atau keputusan yang mereka ambil dalam kapasitas jabatannya — ketika keputusan tersebut digugat oleh pemegang saham, kreditur, regulator, atau pihak ketiga. D&O dibutuhkan oleh: semua perusahaan Tbk (wajib de facto), perusahaan PMA dengan direksi asing, perusahaan yang berencana IPO, perusahaan yang aktif melakukan M&A, dan perusahaan dengan kreditur perbankan atau lembaga keuangan internasional.',
  },
  {
    question: 'Apa dasar hukum tanggung jawab pribadi direksi di Indonesia?',
    answer: 'UU No. 40 Tahun 2007 tentang Perseroan Terbatas (UUPT) adalah landasan utama: Pasal 97 ayat (3) menyatakan bahwa setiap anggota Direksi bertanggung jawab secara pribadi atas kerugian Perseroan apabila yang bersangkutan bersalah atau lalai menjalankan tugasnya. Pasal 114 mengatur hal yang sama untuk Dewan Komisaris dalam fungsi pengawasannya. Ini adalah statutory liability yang tidak bisa dihilangkan dengan kontrak apapun, namun dampak finansialnya bisa ditransfer melalui polis D&O.',
  },
  {
    question: 'Apa itu Business Judgment Rule dan bagaimana hubungannya dengan D&O?',
    answer: 'Business Judgment Rule adalah doktrin hukum yang melindungi direksi dari tanggung jawab pribadi atas keputusan bisnis yang buruk — selama keputusan tersebut diambil: (1) dengan itikad baik, (2) berdasarkan informasi yang memadai, (3) tanpa konflik kepentingan, dan (4) untuk kepentingan perusahaan. Namun, membuktikan terpenuhinya keempat syarat ini di pengadilan membutuhkan biaya hukum yang signifikan. D&O menjamin biaya pembelaan hukum ini bahkan sebelum putusan pengadilan dijatuhkan.',
  },
  {
    question: 'Apa perbedaan Side A, Side B, dan Side C dalam polis D&O?',
    answer: 'Side A (Individual Coverage): Melindungi aset pribadi direksi/komisaris ketika perusahaan tidak mampu atau menolak memberikan indemnifikasi — misalnya saat perusahaan bangkrut atau dalam status likuidasi. Ini perlindungan terakhir dan paling kritis bagi individu. Side B (Company Reimbursement): Mengganti perusahaan yang sudah terlebih dahulu membayar biaya hukum atau ganti rugi atas nama direksinya. Side C (Entity Coverage): Menjamin perusahaan itu sendiri atas tuntutan terkait sekuritas/efek — relevan khusus untuk perusahaan Tbk yang menghadapi gugatan class action dari pemegang saham.',
  },
  {
    question: 'Apa itu Run-off Coverage dan kapan dibutuhkan?',
    answer: 'Run-off Coverage (atau Extended Reporting Period untuk D&O) adalah perlindungan yang berlanjut setelah seorang direksi mengundurkan diri, pensiun, atau perusahaan berganti kepemilikan — untuk menutup tuntutan atas tindakan yang dilakukan saat masih menjabat. Sangat kritis dalam transaksi M&A: saat perusahaan diakuisisi, polis D&O perusahaan target sering berakhir, meninggalkan mantan direksi tanpa perlindungan atas keputusan masa lalu mereka. Periode run-off standar adalah 3–6 tahun.',
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
  headline: 'Asuransi Directors & Officers (D&O) Liability Indonesia: Panduan Lengkap 2025',
  description: 'Panduan mendalam D&O Indonesia mencakup UUPT Ps.97/114, Side A/B/C, Business Judgment Rule, Severability, Run-off, dan simulasi premi.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/directors-officers-liability` },
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
    { '@type': 'ListItem', position: 3, name: 'D&O Liability', item: `${baseUrl}/directors-officers-liability` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function DirectorsOfficersPage() {
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
              <a href="/asuransi-liability" className="hover:underline text-orange-300">Asuransi Liability</a>
              <span className="text-slate-500">/</span>
              <span className="text-violet-300 font-medium">D&O Liability</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-violet-950 via-purple-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-400/30">
              🏛️ Perlindungan Eksekutif — Corporate Governance Lines
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Directors & Officers (D&O) Liability Indonesia
            </h1>
            <p className="text-lg text-violet-100 max-w-2xl leading-relaxed mb-8">
              Berdasarkan UUPT Pasal 97, direksi bertanggung jawab <em>secara pribadi</em> atas kerugian
              perseroan akibat kelalaian. Satu gugatan pemegang saham bisa menyita aset pribadi Anda.
              D&O adalah perisai antara jabatan dan kekayaan pribadi Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20D%26O%20Liability" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"><WaIcon />Konsultasi via WA</a>
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

              {/* Landasan Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dasar Hukum: UUPT dan Tanggung Jawab Pribadi Eksekutif</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Di Indonesia, tanggung jawab pribadi direksi dan komisaris bukan sekadar teori — ini adalah
                  kewajiban hukum yang tertulis eksplisit dalam undang-undang dan telah diuji di pengadilan.
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    {
                      pasal: 'UUPT Pasal 97 ayat (3)',
                      subjek: 'Direksi',
                      isi: 'Setiap anggota Direksi bertanggung jawab secara pribadi atas kerugian Perseroan apabila yang bersangkutan bersalah atau lalai menjalankan tugasnya sesuai ketentuan Pasal 92 ayat (1) dan (2).',
                      color: 'red',
                    },
                    {
                      pasal: 'UUPT Pasal 114',
                      subjek: 'Dewan Komisaris',
                      isi: 'Dalam hal Dewan Komisaris terdiri atas 2 anggota atau lebih, tanggung jawab berlaku secara tanggung renteng bagi setiap anggota Dewan Komisaris atas kelalaian pengawasan yang menyebabkan kerugian Perseroan.',
                      color: 'orange',
                    },
                    {
                      pasal: 'POJK No. 21/POJK.04/2015',
                      subjek: 'Perusahaan Tbk',
                      isi: 'Pedoman Tata Kelola Perusahaan Terbuka OJK mewajibkan implementasi sistem manajemen risiko yang memadai. Kepemilikan D&O merupakan praktik tata kelola yang baik (GCG best practice) yang diakui regulator.',
                      color: 'blue',
                    },
                  ].map((item) => (
                    <div key={item.pasal} className={`rounded-xl p-5 border ${
                      item.color === 'red' ? 'bg-red-50 border-red-200' :
                      item.color === 'orange' ? 'bg-orange-50 border-orange-200' :
                      'bg-blue-50 border-blue-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          item.color === 'red' ? 'bg-red-200 text-red-800' :
                          item.color === 'orange' ? 'bg-orange-200 text-orange-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>{item.pasal}</span>
                        <span className="text-xs text-slate-500">Berlaku untuk: {item.subjek}</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed italic">"{item.isi}"</p>
                    </div>
                  ))}
                </div>
                <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-violet-900 mb-1">💡 Business Judgment Rule — Pelindung Sekaligus Batasannya</p>
                  <p className="text-sm text-violet-800 leading-relaxed">
                    Doktrin Business Judgment Rule melindungi direksi dari gugatan atas keputusan bisnis yang
                    buruk — <strong>selama</strong> keputusan diambil: (1) dengan itikad baik, (2) informasi memadai,
                    (3) tanpa konflik kepentingan, dan (4) untuk kepentingan perseroan. Membuktikan keempat
                    syarat ini di pengadilan membutuhkan biaya hukum Rp ratusan juta hingga miliaran.
                    Polis D&O menanggung biaya pembelaan ini sejak hari pertama gugatan diajukan.
                  </p>
                </div>
              </section>

              {/* Side A, B, C */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Tiga Lapisan Perlindungan D&O: Side A, B, dan C</h2>
                <p className="text-slate-600 text-sm mb-6">Ini adalah struktur yang jarang dijelaskan secara mendalam dalam sumber berbahasa Indonesia — padahal perbedaannya sangat menentukan siapa yang terlindungi dan dalam kondisi apa.</p>
                <div className="space-y-4">
                  {[
                    {
                      side: 'Side A',
                      label: 'Individual Coverage',
                      color: 'violet',
                      priority: '⭐ Paling Kritis',
                      who: 'Direksi & Komisaris secara pribadi',
                      when: 'Perusahaan TIDAK MAMPU atau MENOLAK memberikan indemnifikasi kepada individu',
                      example: 'Perusahaan bangkrut, dalam likuidasi, atau sedang dalam investigasi fraud — sehingga tidak dapat membayar biaya hukum direksi. Side A menjadi perlindungan terakhir aset pribadi.',
                      critical: 'Side A DIC (Difference in Conditions) tersedia sebagai lapisan tambahan yang menjamin individu bahkan ketika polis D&O utama perusahaan tidak membayar.',
                    },
                    {
                      side: 'Side B',
                      label: 'Company Reimbursement',
                      color: 'blue',
                      priority: '📋 Paling Umum',
                      who: 'Perusahaan sebagai entitas',
                      when: 'Perusahaan sudah terlebih dahulu membayar biaya hukum atas nama direksi/komisarisnya',
                      example: 'Perusahaan membayar pengacara dan biaya pengadilan untuk membela direksinya, lalu meminta reimbursement ke polis D&O. Ini pola yang paling lazim di perusahaan besar.',
                      critical: null,
                    },
                    {
                      side: 'Side C',
                      label: 'Entity Coverage (Securities)',
                      color: 'teal',
                      priority: '📈 Khusus Perusahaan Tbk',
                      who: 'Perusahaan sebagai entitas (bukan individu)',
                      when: 'Perusahaan digugat atas tuntutan terkait sekuritas/efek — misalnya class action pemegang saham',
                      example: 'Pemegang saham publik menggugat perusahaan (bukan hanya direksinya) karena harga saham jatuh akibat pengungkapan informasi yang menyesatkan dalam prospektus atau laporan tahunan.',
                      critical: 'Hanya relevan untuk perusahaan yang terdaftar di bursa efek (IDX).',
                    },
                  ].map((item) => (
                    <div key={item.side} className={`rounded-xl border p-6 ${
                      item.color === 'violet' ? 'bg-violet-50 border-violet-200' :
                      item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      'bg-teal-50 border-teal-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className={`text-lg font-black ${
                          item.color === 'violet' ? 'text-violet-700' :
                          item.color === 'blue' ? 'text-blue-700' : 'text-teal-700'
                        }`}>{item.side}</span>
                        <span className="font-bold text-slate-800">{item.label}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                          item.color === 'violet' ? 'bg-violet-200 text-violet-800' :
                          item.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                          'bg-teal-200 text-teal-800'
                        }`}>{item.priority}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                        <div><p className="text-slate-500 text-xs font-semibold mb-1">YANG DILINDUNGI</p><p className="text-slate-800">{item.who}</p></div>
                        <div><p className="text-slate-500 text-xs font-semibold mb-1">KAPAN AKTIF</p><p className="text-slate-800">{item.when}</p></div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="text-slate-500 text-xs font-semibold mb-1">CONTOH SKENARIO</p>
                        <p className="text-slate-700 text-sm">{item.example}</p>
                      </div>
                      {item.critical && (
                        <p className="text-xs mt-3 font-semibold text-violet-700">💡 {item.critical}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Pemicu Tuntutan D&O di Indonesia */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Situasi Nyata Pemicu Tuntutan D&O di Indonesia</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Tuntutan D&O bukan hanya domain perusahaan multinasional. Di Indonesia, kasus-kasus berikut
                  adalah pemicu yang paling umum dan semakin meningkat seiring perkembangan regulasi:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '📉', title: 'Keputusan M&A yang Merugi', desc: 'Akuisisi perusahaan yang terbukti overvalued atau due diligence yang tidak memadai, mengakibatkan kerugian signifikan yang digugat pemegang saham minoritas.' },
                    { icon: '📋', title: 'Pelanggaran Kewajiban Pelaporan OJK', desc: 'Keterlambatan, ketidakakuratan, atau ketidaklengkapan laporan berkala kepada OJK untuk perusahaan Tbk — berpotensi sanksi dan gugatan dari investor.' },
                    { icon: '🏭', title: 'Ekspansi Bisnis yang Gagal', desc: 'Keputusan investasi capex besar yang berujung kerugian signifikan dapat memicu gugatan pemegang saham bahwa direksi tidak melakukan risk assessment yang memadai.' },
                    { icon: '👥', title: 'Employment Practices Liability', desc: 'PHK massal tanpa prosedur sesuai UU Ketenagakerjaan, diskriminasi, atau pelecehan di tempat kerja yang berujung tuntutan hukum kolektif karyawan.' },
                    { icon: '🔍', title: 'Kegagalan Pengawasan Fraud', desc: 'Komisaris bisa dituntut jika terbukti gagal mendeteksi atau menghentikan tindakan fraud manajemen yang seharusnya terdeteksi melalui fungsi pengawasan.' },
                    { icon: '🌿', title: 'Kewajiban ESG & Lingkungan', desc: 'Tren global ESG (Environmental, Social, Governance) mulai memengaruhi eksposur D&O di Indonesia — khususnya untuk industri tambang, kelapa sawit, dan petrokimia.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{item.icon}</span>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Klausul Kritis */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Klausul Kritis yang Wajib Ada di Polis D&O Anda</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Severability Clause',
                      color: 'green',
                      desc: 'Memastikan bahwa tindakan fraud atau misrepresentation satu individu dalam satu perusahaan tidak mencemari dan membatalkan klaim individu lain yang tidak terlibat. Tanpa klausul ini, jika satu direksi terbukti berbohong dalam aplikasi polis, semua direksi lain ikut kehilangan perlindungannya — tidak adil dan berpotensi menjadi senjata penanggung untuk menolak klaim massal.',
                    },
                    {
                      title: 'Run-off Coverage (Extended Reporting Period)',
                      color: 'amber',
                      desc: 'Perlindungan yang berlanjut setelah direksi meninggalkan jabatan (resign, pensiun) atau perusahaan berganti pemilik melalui M&A. Standar: 3–6 tahun. Kritis dalam transaksi M&A: polis D&O perusahaan target sering otomatis berakhir saat akuisisi selesai, meninggalkan mantan direksi exposed terhadap tuntutan atas keputusan masa jabatannya.',
                    },
                    {
                      title: 'Defense Costs Outside Limit',
                      color: 'blue',
                      desc: 'Dalam beberapa polis, biaya hukum (pengacara, pengadilan) dibayar dari limit pertanggungan yang sama dengan ganti rugi akhir — sehingga limit terkuras sebelum putusan final. Klausul "Defense Costs Outside Limit" atau "unlimited defense costs" memisahkan biaya hukum dari limit ganti rugi, memberikan perlindungan jauh lebih lengkap.',
                    },
                    {
                      title: 'Side A DIC (Difference in Conditions)',
                      color: 'violet',
                      desc: 'Lapisan perlindungan tambahan di atas polis D&O standar yang secara spesifik menjamin individu direksi ketika polis D&O utama perusahaan tidak membayar — misalnya karena polis di-rescind akibat misrepresentation oleh perusahaan, atau karena perusahaan bangkrut dan tidak bisa membiayai pembelaan. Produk premium yang sangat direkomendasikan untuk C-Level eksekutif senior.',
                    },
                  ].map((item) => (
                    <div key={item.title} className={`rounded-xl border p-5 ${
                      item.color === 'green' ? 'bg-green-50 border-green-200' :
                      item.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                      item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      'bg-violet-50 border-violet-200'
                    }`}>
                      <p className={`font-bold text-base mb-2 ${
                        item.color === 'green' ? 'text-green-900' :
                        item.color === 'amber' ? 'text-amber-900' :
                        item.color === 'blue' ? 'text-blue-900' : 'text-violet-900'
                      }`}>{item.title}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi D&O Liability</h2>
                <p className="text-slate-600 text-sm mb-5">Basis premi D&O dihitung dari Total Asset atau Revenue perusahaan — mencerminkan skala eksposur finansial yang dipertaruhkan.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-violet-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Skala Perusahaan</th>
                        <th className="text-left p-3">Total Aset / Revenue</th>
                        <th className="text-left p-3">Limit D&O</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Perusahaan Menengah (Swasta)', 'Aset < Rp 100M / Revenue < Rp 50M', 'USD 1 – 2 Juta', 'Rp 25 – 60 Juta'],
                        ['Perusahaan Besar (Swasta)', 'Aset Rp 100M – 1T', 'USD 3 – 5 Juta', 'Rp 75 – 200 Juta'],
                        ['Perusahaan Tbk (Mid Cap)', 'Market Cap Rp 1–5 Triliun', 'USD 5 – 10 Juta', 'Rp 200 – 500 Juta'],
                        ['Perusahaan Tbk (Large Cap)', 'Market Cap > Rp 5 Triliun', 'USD 10 – 25 Juta', 'Rp 500 Juta – 1,5 Miliar'],
                        ['BUMN / Perusahaan Strategis', 'Negotiable', 'USD 20 – 50 Juta', 'Negotiable'],
                      ].map(([skala, basis, limit, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-violet-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{skala}</td>
                          <td className="p-3 text-slate-700 text-xs">{basis}</td>
                          <td className="p-3 font-mono text-violet-700 font-bold">{limit}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Rate D&O sangat dipengaruhi oleh: industri (keuangan & pertambangan lebih tinggi), rekam jejak klaim, komposisi dewan (proporsi komisaris independen), kualitas laporan keuangan (auditor Big 4 vs lokal), dan kondisi pasar reasuransi global. Limit dalam USD karena reasuransi D&O mayoritas di pasar London/Lloyd's.</p>
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
                <strong>Disclaimer:</strong> Informasi bersifat edukatif dan bukan merupakan nasihat hukum. Untuk situasi hukum spesifik, konsultasikan dengan pengacara korporat. Untuk struktur polis D&O yang tepat, konsultasikan dengan kami.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-950 to-purple-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">🏛️</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi D&O</h3>
                <p className="text-violet-200 text-sm mb-5 leading-relaxed">Apakah struktur Side A/B/C dan klausul Severability polis D&O Anda sudah tepat? Rio Mardiansyah siap membantu review perlindungan eksekutif Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20D%26O%20Liability" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-violet-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                <Link href="/asuransi-liability" className="flex items-center gap-2 text-violet-800 hover:text-violet-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Kembali ke Asuransi Liability
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Liability Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-public-liability', label: 'Public Liability', sub: 'Tuntutan operasional bisnis' },
                    { href: '/asuransi-professional-indemnity', label: 'Professional Indemnity', sub: 'Tanggung jawab profesi' },
                    { href: '/asuransi-product-liability', label: 'Product Liability', sub: 'Tanggung jawab produk' },
                    { href: '/asuransi-liability-limbah-b3', label: 'Liability Limbah B3', sub: 'Lingkungan & polusi' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-violet-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-violet-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
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
