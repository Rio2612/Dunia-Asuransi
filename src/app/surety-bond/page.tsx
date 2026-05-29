import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Surety Bond Indonesia: Jaminan Proyek, Tender & Kontrak [2025]',
  description:
    'Panduan lengkap Surety Bond di Indonesia — Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan. Dasar hukum Perpres 16/2018, alur proses LPSE, perbedaan Surety vs Bank Garansi, dan tips klaim dari praktisi.',
  keywords: [
    'surety bond',
    'jaminan proyek',
    'jaminan tender',
    'bid bond indonesia',
    'performance bond',
    'advance payment bond',
    'maintenance bond',
    'bank garansi vs surety bond',
    'jaminan kontraktor',
    'LPSE tender surety bond',
  ],
  alternates: { canonical: `${baseUrl}/surety-bond` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Surety Bond Indonesia: Jaminan Proyek, Tender & Kontrak 2025',
    description: 'Panduan lengkap Surety Bond — dasar hukum Perpres 16/2018, alur LPSE, perbandingan Bank Garansi, dan tips klaim.',
    url: `${baseUrl}/surety-bond`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const jenisJaminan = [
  {
    kode: '01',
    title: 'Jaminan Penawaran',
    subtitle: 'Bid Bond',
    href: '/jaminan-penawaran',
    icon: '📋',
    color: 'blue',
    tahapProyek: 'Pra-Tender → Pemasukan Dokumen',
    nilaiUmum: '1% – 3% dari nilai penawaran',
    masaBerlaku: '30 – 90 hari',
    fungsiKritis: 'Menjamin peserta tender tidak menarik penawaran atau mengundurkan diri setelah ditetapkan sebagai pemenang lelang.',
    pemicuKlaim: 'Pemenang lelang menolak tanda tangan kontrak atau mengundurkan diri tanpa alasan sah.',
    dasarHukum: 'Perpres No. 16/2018 Pasal 30, PermenPUPR No. 7/2019',
  },
  {
    kode: '02',
    title: 'Jaminan Pelaksanaan',
    subtitle: 'Performance Bond',
    href: '/jaminan-pelaksanaan',
    icon: '🏗️',
    color: 'orange',
    tahapProyek: 'Penandatanganan Kontrak → PHO',
    nilaiUmum: '5% dari nilai kontrak',
    masaBerlaku: 'Selama masa pelaksanaan + 14 hari',
    fungsiKritis: 'Menjamin kontraktor menyelesaikan pekerjaan sesuai spesifikasi teknis, mutu, dan waktu yang ditetapkan dalam kontrak.',
    pemicuKlaim: 'Kontraktor wanprestasi: pekerjaan tidak selesai, mutu tidak sesuai, atau kontraktor bangkrut.',
    dasarHukum: 'Perpres No. 16/2018 Pasal 62, Perlem LKPP No. 12/2021',
  },
  {
    kode: '03',
    title: 'Jaminan Uang Muka',
    subtitle: 'Advance Payment Bond',
    href: '/jaminan-uang-muka',
    icon: '💰',
    color: 'green',
    tahapProyek: 'Awal Pelaksanaan (setelah kontrak)',
    nilaiUmum: '15% – 30% dari nilai kontrak',
    masaBerlaku: 'Hingga uang muka lunas dicicil',
    fungsiKritis: 'Menjamin pengembalian uang muka proyek jika kontraktor gagal menggunakannya sesuai peruntukannya atau wanprestasi.',
    pemicuKlaim: 'Kontraktor menerima uang muka tetapi tidak memulai pekerjaan atau kabur dengan dana tersebut.',
    dasarHukum: 'Perpres No. 16/2018 Pasal 56, PMK No. 190/2012',
  },
  {
    kode: '04',
    title: 'Jaminan Pemeliharaan',
    subtitle: 'Maintenance Bond',
    href: '/jaminan-pemeliharaan',
    icon: '🔧',
    color: 'purple',
    tahapProyek: 'PHO → FHO (Serah Terima Akhir)',
    nilaiUmum: '5% dari nilai kontrak',
    masaBerlaku: '180 hari – 365 hari',
    fungsiKritis: 'Menjamin kontraktor memperbaiki cacat atau kerusakan yang ditemukan selama masa pemeliharaan pasca serah terima pertama (PHO).',
    pemicuKlaim: 'Kontraktor tidak merespons atau menolak perbaikan cacat yang ditemukan selama masa garansi.',
    dasarHukum: 'Perpres No. 16/2018 Pasal 68, KepPres No. 70/2012',
  },
];

const suretyVsBankGaransi = [
  { aspek: 'Penerbit', surety: 'Perusahaan Asuransi (terdaftar OJK)', bank: 'Bank Umum (terdaftar OJK/BI)' },
  { aspek: 'Dasar Hukum', surety: 'UU Perasuransian No. 40/2014', bank: 'UU Perbankan No. 10/1998' },
  { aspek: 'Agunan/Collateral', surety: 'Umumnya tanpa agunan fisik (berbasis track record)', bank: 'Biasanya perlu deposito atau aset sebagai collateral' },
  { aspek: 'Kapasitas Kredit', surety: 'Tidak memblokir fasilitas kredit perbankan', bank: 'Mempengaruhi/memblokir plafon kredit di bank' },
  { aspek: 'Proses Penerbitan', surety: 'Lebih fleksibel — bisa 1–3 hari kerja', bank: 'Lebih rigid — tergantung proses kredit internal bank' },
  { aspek: 'Premi/Biaya', surety: '0,1% – 1% per tahun (tergantung jenis dan profil)', bank: 'Provisi 0,5% – 2% + biaya administrasi' },
  { aspek: 'Regres ke Principal', surety: 'Ya — jika klaim dibayar, surety berhak regres ke kontraktor', bank: 'Ya — bank menagih kembali melalui fasilitas kredit' },
  { aspek: 'Diterima LKPP/LPSE', surety: '✅ Ya — diakui setara Bank Garansi (Perpres 16/2018)', bank: '✅ Ya', },
];

const alurKlaim = [
  {
    step: '01',
    pihak: 'Obligee (Pemilik Proyek)',
    aksi: 'Menyampaikan klaim tertulis kepada Surety disertai dokumen pendukung: bukti wanprestasi kontraktor, surat peringatan yang tidak direspons, dan salinan kontrak.',
    waktu: 'Dalam masa berlaku Surat Jaminan',
  },
  {
    step: '02',
    pihak: 'Surety (Penanggung)',
    aksi: 'Melakukan verifikasi klaim — memeriksa keabsahan klaim, menilai apakah kondisi pencairan terpenuhi, dan berkoordinasi dengan Principal untuk mendapatkan klarifikasi.',
    waktu: '14 hari kerja setelah dokumen lengkap',
  },
  {
    step: '03',
    pihak: 'Principal (Kontraktor)',
    aksi: 'Diberi kesempatan memberikan klarifikasi atau menyelesaikan kewajibannya. Jika Principal menyelesaikan kewajiban, klaim ditutup. Jika tidak, Surety melanjutkan proses pembayaran.',
    waktu: '7–14 hari klarifikasi',
  },
  {
    step: '04',
    pihak: 'Surety (Penanggung)',
    aksi: 'Membayar klaim kepada Obligee sebesar nilai yang tercantum dalam Surat Jaminan (atau kerugian aktual, yang mana lebih kecil). Berdasarkan POJK 23/2023, keputusan paling lambat 30 hari kerja.',
    waktu: '≤ 30 hari kerja setelah dokumen lengkap',
  },
  {
    step: '05',
    pihak: 'Surety → Principal',
    aksi: 'Setelah membayar klaim, Surety menjalankan hak regres (subrogasi) — menagih kembali nilai klaim yang dibayar dari Principal. Ini membedakan Surety dari asuransi konvensional.',
    waktu: 'Pasca pembayaran klaim',
  },
];

const faqData = [
  {
    question: 'Apa dasar hukum kewajiban Surety Bond dalam tender pemerintah di Indonesia?',
    answer:
      'Dasar hukum utama adalah Peraturan Presiden No. 16 Tahun 2018 tentang Pengadaan Barang/Jasa Pemerintah beserta perubahannya (Perpres 12/2021). Pasal 30 mewajibkan Jaminan Penawaran untuk pengadaan konstruksi di atas nilai tertentu, Pasal 62 mengatur Jaminan Pelaksanaan, dan Pasal 56 mengatur Jaminan Uang Muka. Perusahaan penjamin (surety) harus terdaftar di OJK dan namanya ada dalam daftar penjamin yang diakui LKPP.',
  },
  {
    question: 'Apa perbedaan fundamental antara Surety Bond dan Bank Garansi — mana yang lebih baik?',
    answer:
      'Tidak ada yang secara absolut "lebih baik" — keduanya diakui setara oleh LKPP. Surety Bond lebih menguntungkan dari sisi arus kas: tidak memerlukan blokir deposito dan tidak mempengaruhi plafon kredit perbankan Anda, sehingga modal kerja tetap likuid. Bank Garansi lebih familiar di kalangan BUMN tertentu yang memiliki preferensi institusional. Untuk kontraktor yang sedang bertumbuh dengan modal kerja terbatas, Surety Bond hampir selalu lebih efisien.',
  },
  {
    question: 'Apakah Surety Bond bisa dicairkan secara sepihak oleh pemilik proyek?',
    answer:
      'Bergantung pada jenis Surat Jaminan. Surety Bond yang bersifat "on demand" (bayar tanpa syarat/unconditional) bisa dicairkan segera setelah ada permintaan tertulis dari Obligee. Surety Bond yang bersifat "conditional" hanya bisa dicairkan setelah Obligee dapat membuktikan wanprestasi Principal. Perpres 16/2018 secara implisit mensyaratkan jaminan bersifat unconditional untuk pengadaan pemerintah — penting untuk memahami wording surat jaminan sebelum menerima.',
  },
  {
    question: 'Apa yang dimaksud dengan "regres" dalam Surety Bond dan mengapa ini berbeda dari asuransi biasa?',
    answer:
      'Regres adalah hak Surety untuk menagih kembali nilai klaim yang telah dibayar kepada Obligee dari Principal (kontraktor). Inilah yang membuat Surety Bond secara fundamental berbeda dari asuransi kerugian biasa: dalam asuransi, penanggung menanggung risiko final. Dalam Surety, penanggung hanya memberikan jaminan kredit — Principal tetap bertanggung jawab akhir atas kewajibannya. Oleh karena itu, underwriting Surety sangat berfokus pada kapabilitas finansial dan reputasi kontraktor (Principal).',
  },
  {
    question: 'Berapa persyaratan minimum untuk mengajukan Surety Bond?',
    answer:
      'Dokumen standar yang umumnya diminta: (1) SIUJK/SBU kontraktor yang masih aktif, (2) Akta pendirian dan perubahan perusahaan, (3) NPWP perusahaan, (4) Laporan keuangan 2–3 tahun terakhir (audited untuk proyek besar), (5) Daftar proyek yang sedang berjalan dan yang telah selesai (track record), (6) Dokumen tender/RKS yang akan dijaminkan. Untuk kontraktor baru dengan track record terbatas, penjamin mungkin meminta personal guarantee dari pemilik perusahaan.',
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
  headline: 'Surety Bond Indonesia: Panduan Lengkap Jaminan Proyek, Tender & Kontrak 2025',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/surety-bond` },
  inLanguage: 'id-ID',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Surety Bond', item: `${baseUrl}/surety-bond` },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function SuretyBondPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">

        {/* Breadcrumb */}
        <div className="bg-amber-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-amber-300">Beranda</a>
              <span className="text-amber-700">/</span>
              <span className="text-white font-medium">Surety Bond</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">
                🏗️ Jaminan Kontrak & Proyek
              </span>
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-500/30">
                📋 Perpres No. 16/2018
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">
                🏛️ Diakui LKPP & LPSE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Surety Bond Indonesia
            </h1>
            <p className="text-lg text-amber-200 max-w-2xl leading-relaxed mb-8">
              Setiap kontraktor yang serius mengikuti tender pemerintah maupun swasta membutuhkan
              Surety Bond — bukan sekadar formalitas administratif, melainkan instrumen jaminan
              yang menentukan apakah bisnis konstruksi Anda dipercaya atau tidak. Pahami seluk-beluknya
              sebelum kontraktor lain mengambil proyek yang seharusnya milik Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Surety%20Bond"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Konsultasi Gratis via WA
              </a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                📞 0813-1556-592
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* Definisi & 3 Pihak */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Surety Bond dan Siapa Saja Pihak yang Terlibat?</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Surety Bond adalah produk penjaminan yang diterbitkan oleh perusahaan asuransi (Surety) atas permintaan
                  kontraktor atau penyedia jasa (Principal) untuk memberikan jaminan kepada pemilik proyek (Obligee) bahwa
                  Principal akan memenuhi kewajibannya. Jika Principal wanprestasi, Surety membayar ganti rugi kepada
                  Obligee — namun kemudian menagih kembali (regres) dari Principal.
                </p>

                {/* 3-Party Diagram */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <p className="text-sm font-bold text-amber-800 mb-5 text-center">🔺 Hubungan 3 Pihak dalam Surety Bond</p>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    {[
                      { role: 'OBLIGEE', desc: 'Pemilik Proyek / Pemberi Kerja', sub: '(Kementerian, BUMN, Swasta)', icon: '🏛️', color: 'bg-blue-100 border-blue-300 text-blue-800' },
                      { role: 'SURETY', desc: 'Perusahaan Penjamin', sub: '(Perusahaan Asuransi/OJK)', icon: '🛡️', color: 'bg-amber-100 border-amber-300 text-amber-800' },
                      { role: 'PRINCIPAL', desc: 'Kontraktor / Penyedia Jasa', sub: '(Yang Dijaminkan)', icon: '🏗️', color: 'bg-green-100 border-green-300 text-green-800' },
                    ].map((p) => (
                      <div key={p.role} className={`rounded-xl border p-4 ${p.color}`}>
                        <div className="text-2xl mb-2">{p.icon}</div>
                        <p className="font-black text-xs">{p.role}</p>
                        <p className="text-xs mt-1 font-medium">{p.desc}</p>
                        <p className="text-xs mt-0.5 opacity-70">{p.sub}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-center">
                    <div className="bg-white rounded-lg p-2 border border-blue-200">
                      <p className="font-semibold text-blue-700">Obligee → Principal</p>
                      <p className="text-slate-500 mt-1">Memberikan proyek & kontrak</p>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-amber-200">
                      <p className="font-semibold text-amber-700">Surety ↔ Principal</p>
                      <p className="text-slate-500 mt-1">Perjanjian indemnity + regres</p>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-green-200">
                      <p className="font-semibold text-green-700">Surety → Obligee</p>
                      <p className="text-slate-500 mt-1">Surat Jaminan (bond)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">💡 Konsep Regres — Perbedaan Fundamental dari Asuransi Biasa</p>
                  <p className="text-sm text-blue-700">
                    Dalam asuransi kerugian, penanggung menanggung risiko final. Dalam Surety Bond, Surety hanya
                    memberikan fasilitas jaminan kredit — jika klaim dibayar ke Obligee, Surety berhak menagih
                    kembali penuh dari Principal. Karena itu, underwriting Surety sangat ketat mengevaluasi
                    kapabilitas finansial dan reputasi kontraktor.
                  </p>
                </div>
              </section>

              {/* 4 Jenis Jaminan — Siklus Proyek */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">4 Jenis Jaminan Sesuai Siklus Proyek Konstruksi</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Setiap jenis jaminan aktif pada tahap proyek yang berbeda. Kontraktor yang memahami urutan
                  ini tidak akan pernah kekurangan jaminan di momen kritis yang bisa menggugurkan kontrak.
                </p>

                {/* Timeline visual */}
                <div className="relative mb-8">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-amber-200" />
                  <div className="space-y-4">
                    {jenisJaminan.map((j, idx) => (
                      <div key={j.kode} className="relative flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md">
                          {j.kode}
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-5 hover:shadow-md transition-all">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xl">{j.icon}</span>
                                <a href={j.href} className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors">
                                  {j.title}
                                </a>
                                <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-semibold">{j.subtitle}</span>
                              </div>
                              <p className="text-xs text-slate-400 mt-1">📅 Tahap: <span className="font-medium text-slate-600">{j.tahapProyek}</span></p>
                            </div>
                            <a href={j.href} className="text-amber-600 hover:text-amber-800 text-xs font-semibold flex-shrink-0">Detail →</a>
                          </div>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">{j.fungsiKritis}</p>
                          <div className="grid grid-cols-3 gap-2 mt-3">
                            {[
                              { label: 'Nilai Umum', val: j.nilaiUmum },
                              { label: 'Masa Berlaku', val: j.masaBerlaku },
                              { label: 'Dasar Hukum', val: j.dasarHukum },
                            ].map((d) => (
                              <div key={d.label} className="bg-white rounded-lg p-2 border border-slate-100">
                                <p className="text-xs text-slate-400">{d.label}</p>
                                <p className="text-xs font-semibold text-slate-700 mt-0.5">{d.val}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 bg-red-50 rounded-lg px-3 py-2">
                            <p className="text-xs text-red-600"><span className="font-semibold">⚡ Pemicu Klaim:</span> {j.pemicuKlaim}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* LPSE Context */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Surety Bond dalam Ekosistem LPSE & E-Katalog</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Sistem LPSE (Layanan Pengadaan Secara Elektronik) yang dikelola LKPP adalah pintu masuk
                  utama tender pemerintah di Indonesia. Memahami bagaimana Surety Bond berintegrasi dengan
                  sistem ini sangat kritis agar dokumen jaminan Anda tidak digugurkan saat verifikasi administrasi.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: '🔐',
                      judul: 'Format dan Validitas Surat Jaminan',
                      isi: 'Surat Jaminan yang diunggah ke LPSE harus menggunakan format yang diatur dalam Perlem LKPP No. 12/2021. Nama penjamin harus sesuai dengan daftar penjamin yang diakui oleh LKPP (dapat dicek di portal LKPP). Jaminan dari penjamin yang tidak terdaftar akan langsung digugurkan oleh panitia.',
                    },
                    {
                      icon: '🔍',
                      judul: 'Verifikasi Online oleh Panitia',
                      isi: 'Panitia tender modern akan melakukan verifikasi keaslian Surat Jaminan langsung ke website atau call center penjamin. Pastikan nomor surat jaminan dapat diverifikasi secara online atau melalui telepon — ini sudah menjadi praktik standar di tender senilai di atas Rp 1 miliar.',
                    },
                    {
                      icon: '⏰',
                      judul: 'Timing Penerbitan yang Kritis',
                      isi: 'Surat Jaminan Penawaran harus sudah terbit SEBELUM batas akhir pemasukan dokumen di LPSE. Kegagalan mengunggah dalam format dan waktu yang tepat mengakibatkan gugur administrasi meski secara teknis kontraktor paling kompetitif. Idealnya, ajukan ke penjamin minimal 3–5 hari kerja sebelum deadline.',
                    },
                    {
                      icon: '📋',
                      judul: 'Perpanjangan Jaminan jika Evaluasi Tender Memanjang',
                      isi: 'Jika proses evaluasi tender pemerintah melebihi masa berlaku Jaminan Penawaran, panitia akan meminta perpanjangan. Kontraktor wajib segera berkoordinasi dengan penjamin untuk menerbitkan addendum perpanjangan — tanpa biaya tambahan jika dalam periode wajar.',
                    },
                  ].map((item) => (
                    <div key={item.judul} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{item.judul}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.isi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Surety vs Bank Garansi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Surety Bond vs Bank Garansi: Perbandingan Lengkap</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Keduanya diakui setara oleh LKPP, namun implikasi finansial bagi arus kas kontraktor sangat berbeda.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3 bg-amber-700">Surety Bond</th>
                        <th className="text-left p-3 rounded-tr-lg">Bank Garansi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {suretyVsBankGaransi.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.aspek}</td>
                          <td className="p-3 text-slate-700 bg-amber-50/40">{row.surety}</td>
                          <td className="p-3 text-slate-700">{row.bank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-sm text-green-700">
                    <strong>✅ Rekomendasi Praktisi:</strong> Untuk kontraktor yang sedang agresif mengejar proyek dan
                    membutuhkan arus kas maksimal, kombinasikan Surety Bond (untuk jaminan) dengan fasilitas kredit
                    modal kerja perbankan yang tetap likuid. Jangan "bunuh" plafon kredit bank Anda hanya untuk
                    menerbitkan Bank Garansi jika nilai jaminan bisa dipenuhi oleh Surety.
                  </p>
                </div>
              </section>

              {/* Alur Klaim */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Alur Proses Klaim Surety Bond di Indonesia</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Memahami alur ini penting bagi kedua pihak — Obligee perlu tahu dokumen apa yang diperlukan,
                  Principal perlu tahu kapan masih bisa menyelamatkan situasi.
                </p>
                <div className="space-y-3">
                  {alurKlaim.map((step) => (
                    <div key={step.step} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-amber-700 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                          <p className="font-semibold text-slate-800">{step.pihak}</p>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{step.waktu}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.aksi}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs text-amber-700">
                    <strong>⚠️ Catatan Penting:</strong> Berdasarkan POJK No. 23/2023, perusahaan asuransi wajib
                    memberikan keputusan klaim dalam 30 hari kerja setelah dokumen klaim lengkap diterima.
                    Jika melewati batas waktu ini, tertanggung dapat melapor ke OJK.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pertanyaan Teknis Seputar Surety Bond</h2>
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
              <div className="bg-gradient-to-br from-amber-800 to-orange-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 text-xl">🏗️</div>
                <h3 className="text-xl font-bold mb-2">Ajukan Surety Bond Hari Ini</h3>
                <p className="text-amber-200 text-sm mb-5 leading-relaxed">
                  Proses penerbitan 1–3 hari kerja untuk jaminan standar. Rio Mardiansyah membantu
                  Anda menyiapkan dokumen dan memilih penjamin yang paling kompetitif.
                </p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Surety%20Bond%20untuk%20tender" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">
                  💬 WhatsApp Sekarang
                </a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  📞 0813-1556-592
                </a>
                <p className="text-xs text-amber-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🏗️ 4 Jenis Jaminan</h3>
                <div className="space-y-2">
                  {jenisJaminan.map((j) => (
                    <a key={j.href} href={j.href} className="flex items-center gap-3 p-3 bg-amber-50 hover:bg-amber-100 rounded-xl transition group">
                      <span className="text-xl">{j.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-amber-700 text-sm">{j.title}</p>
                        <p className="text-xs text-slate-500">{j.subtitle} · {j.nilaiUmum}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Bisnis Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti komersial' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Marine cargo & logistik' },
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung gugat hukum' },
                    { href: '/asuransi-engineering', label: 'Asuransi Engineering', sub: 'CAR, EAR, Machinery' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center p-3 bg-slate-50 hover:bg-amber-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-amber-600 text-sm">{link.label}</p>
                        <p className="text-xs text-slate-500">{link.sub}</p>
                      </div>
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
