import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Protection & Indemnity (P&I): Tanggung Jawab Hukum Pemilik Kapal [2025]',
  description:
    'Panduan mendalam Protection & Indemnity (P&I) — cakupan klaim kru, pencemaran laut MARPOL, collision liability, wreck removal, dan perbedaan P&I Club vs polis komersial. Regulasi UU Pelayaran 17/2008 dan MARPOL 73/78.',
  keywords: [
    'protection indemnity',
    'P&I insurance',
    'asuransi tanggung jawab kapal',
    'P&I club indonesia',
    'pencemaran laut asuransi',
    'collision liability kapal',
    'asuransi kru kapal',
    'wreck removal insurance',
    'MARPOL asuransi',
    'CLC certificate kapal',
  ],
  alternates: { canonical: `${baseUrl}/protection-indemnity` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Protection & Indemnity (P&I): Tanggung Jawab Hukum Pemilik Kapal 2025',
    description: 'Panduan mendalam P&I — kru kapal, pencemaran laut MARPOL, collision liability, wreck removal, dan P&I Club vs komersial.',
    url: `${baseUrl}/protection-indemnity`, type: 'article', locale: 'id_ID', siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const cakupanPI = [
  {
    kategori: 'Klaim Kru Kapal (Crew Claims)',
    icon: '👷',
    color: 'blue',
    detail: [
      'Cedera badan dan biaya pengobatan kru selama bertugas',
      'Kompensasi kematian dan repatriasi jenazah kru',
      'Biaya repatriasi kru yang sakit atau dipecat',
      'Upah dan tunjangan kru yang tertunggak jika pemilik kapal bangkrut',
      'Biaya penggantian kru darurat jika kru sakit di port asing',
    ],
    catatan: 'Klaim kru adalah kategori klaim P&I paling sering terjadi secara volume — meski per klaimnya relatif lebih kecil dari klaim pencemaran.',
  },
  {
    kategori: 'Tanggung Jawab Tabrakan (Collision Liability)',
    icon: '⚡',
    color: 'red',
    detail: [
      'Ganti rugi atas kerusakan kapal lain yang ditabrak',
      'Biaya salvage kapal pihak ketiga yang rusak',
      'Kerugian muatan kapal pihak ketiga yang rusak akibat tabrakan',
      'Kerugian usaha pihak ketiga akibat kapalnya rusak (loss of hire)',
      'Biaya hukum dalam proses arbitrase atau litigasi tabrakan',
    ],
    catatan: 'Hull & Machinery (H&M) biasanya hanya menjamin ¾ (75%) dari collision liability — sisanya ¼ dijamin oleh P&I. Ini yang disebut "¼ collision liability".',
  },
  {
    kategori: 'Pencemaran Laut (Pollution Liability)',
    icon: '🌊',
    color: 'green',
    detail: [
      'Biaya pembersihan tumpahan minyak dari kapal tanker',
      'Biaya remediasi pantai dan ekosistem laut yang tercemar',
      'Kompensasi kepada nelayan/industri pariwisata yang dirugikan',
      'Denda dan penalti administratif dari otoritas pelabuhan',
      'Biaya pengujian dan monitoring lingkungan pasca insiden',
    ],
    catatan: 'Klaim pencemaran adalah kategori P&I paling mahal — satu insiden tumpahan minyak besar bisa menghasilkan klaim ratusan juta USD. Ini yang membuat P&I mutlak bagi tanker.',
  },
  {
    kategori: 'Pemindahan Bangkai Kapal (Wreck Removal)',
    icon: '🏗️',
    color: 'amber',
    detail: [
      'Biaya pengangkatan kapal yang karam di perairan asing atau nasional',
      'Biaya penandaan dan penerangan wreck sebagai bahaya navigasi',
      'Biaya pemusnahan/penghancuran kapal jika pengangkatan tidak memungkinkan',
      'Denda akibat wreck yang menghalangi alur pelayaran',
    ],
    catatan: 'Di banyak negara (termasuk Indonesia via UU Pelayaran), pemilik kapal bertanggung jawab atas wreck removal di perairan mereka. Biaya ini bisa mencapai USD 10–50 juta.',
  },
  {
    kategori: 'Kerusakan Properti Pihak Ketiga (Property Damage)',
    icon: '⚓',
    color: 'slate',
    detail: [
      'Kerusakan dermaga, jetty, atau fasilitas pelabuhan yang ditabrak',
      'Kerusakan kabel bawah laut, pipa minyak, atau infrastruktur bawah air',
      'Kerusakan kapal tunda (tug) atau kapal pandu saat operasi',
      'Kerugian muatan pihak ketiga yang rusak di atas kapal tertanggung',
    ],
    catatan: 'Tumbukan kapal ke dermaga di pelabuhan ramai bisa menghasilkan klaim USD 1–20 juta tergantung kerusakan infrastruktur.',
  },
  {
    kategori: 'Biaya Karantina & Port State Control (PSC)',
    icon: '🔍',
    color: 'purple',
    detail: [
      'Biaya karantina kapal yang dikenai pembatasan masuk pelabuhan',
      'Biaya perbaikan yang diwajibkan inspeksi Port State Control',
      'Biaya denda akibat defisiensi yang ditemukan PSC',
      'Biaya hukum menghadapi sengketa PSC di pengadilan asing',
    ],
    catatan: 'Port State Control bisa menahan kapal (detain) jika ditemukan defisiensi serius — biaya detention kapal per hari bisa mencapai USD 10.000–50.000.',
  },
];

const piClubVsKomersial = [
  { aspek: 'Struktur', club: 'Mutual association — dimiliki anggota (pemilik kapal)', komersial: 'Perusahaan asuransi profit komersial' },
  { aspek: 'Premi/Iuran', club: 'Advance call + possible supplementary call berdasarkan klaim aktual', komersial: 'Premi tetap di awal periode polis' },
  { aspek: 'Kapasitas Jaminan', club: 'Hampir tidak terbatas — International Group pool USD 3,1 miliar+', komersial: 'Terbatas pada kapasitas reasuransi — biasanya USD 10–500 juta' },
  { aspek: 'Jangkauan Klaim', club: 'Global — jaringan correspondent di seluruh pelabuhan dunia', komersial: 'Terbatas — bergantung jaringan reasuransi dan surveyor' },
  { aspek: 'Letter of Undertaking (LoU)', club: '✅ Diterima di hampir semua pelabuhan dunia', komersial: '⚠️ Terbatas — tidak semua LoU diterima pengadilan asing' },
  { aspek: 'Cocok untuk Kapal', club: 'Kapal berukuran > 500 GT, terutama kapal internasional', komersial: 'Kapal domestik, kapal kecil, atau sebagai suplemen club' },
  { aspek: 'Biaya', club: 'Bervariasi — bisa lebih mahal tapi kapasitas jauh lebih besar', komersial: 'Umumnya lebih terjangkau untuk kapal kecil' },
];

const kasusKlaim = [
  {
    kasus: 'Tabrakan Kapal Kontainer di Selat Malaka',
    klaim: 'Klaim tabrakan (collision liability) terhadap kapal yang ditabrak + muatan rusak + biaya survei internasional',
    nilaiEstimasi: 'USD 2–15 juta',
    cakupanPI: 'Collision liability (¼ bagian yang tidak dijamin H&M) + property damage muatan pihak ketiga',
  },
  {
    kasus: 'Tumpahan Minyak dari Kapal Tanker di Perairan Indonesia',
    klaim: 'Biaya pembersihan laut + kompensasi nelayan + denda KLHK + biaya monitoring lingkungan',
    nilaiEstimasi: 'USD 10–100 juta',
    cakupanPI: 'Pollution liability + biaya remediasi + kompensasi pihak ketiga + denda regulatoris',
  },
  {
    kasus: 'Kru Kapal Mengalami Kecelakaan Fatal saat Berlayar',
    klaim: 'Santunan kematian keluarga kru + repatriasi jenazah + biaya hukum sengketa kompensasi',
    nilaiEstimasi: 'USD 50.000 – 500.000 per kru',
    cakupanPI: 'Crew injury/death + repatriation + legal defense',
  },
  {
    kasus: 'Kapal Karam dan Harus Diangkat dari Alur Pelabuhan',
    klaim: 'Biaya pengangkatan bangkai kapal yang menghalangi alur masuk pelabuhan',
    nilaiEstimasi: 'USD 5–50 juta',
    cakupanPI: 'Wreck removal — tidak dijamin H&M standar, hanya P&I',
  },
];

const faqData = [
  {
    question: 'Apakah P&I diwajibkan oleh hukum Indonesia untuk semua kapal?',
    answer: 'UU No. 17 Tahun 2008 tentang Pelayaran Pasal 181 mewajibkan pemilik kapal untuk memiliki asuransi atau jaminan keuangan yang mencukupi untuk menanggung kerugian pihak ketiga. Meski tidak secara eksplisit menyebut "P&I", ketentuan ini secara praktis hanya bisa dipenuhi oleh produk P&I. Untuk kapal yang beroperasi di jalur internasional, pelabuhan-pelabuhan asing hampir selalu mensyaratkan bukti P&I (biasanya berupa Certificate of Entry dari P&I Club atau LoU) sebelum kapal diizinkan masuk.',
  },
  {
    question: 'Apa itu "Letter of Undertaking (LoU)" dari P&I Club dan mengapa penting?',
    answer: 'Letter of Undertaking adalah surat jaminan yang diterbitkan P&I Club kepada pengadilan atau otoritas pelabuhan, menjamin bahwa Club akan membayar klaim yang ditetapkan hingga jumlah tertentu — sehingga kapal tidak perlu ditahan (arrest) sebagai jaminan selama proses hukum berlangsung. LoU dari P&I Club International Group diterima di hampir seluruh yurisdiksi hukum maritim dunia karena reputasi dan kapasitas finansial Club yang tak diragukan. LoU dari penanggung komersial kecil sering tidak diterima di pengadilan asing.',
  },
  {
    question: 'Mengapa H&M hanya menjamin ¾ dari collision liability — sisanya ke mana?',
    answer: 'Ini adalah warisan sejarah dari praktik asuransi marine London abad ke-19. Polis H&M standar (ITC Hull) secara tradisional hanya menjamin ¾ (75%) dari tanggung jawab tabrakan (Running Down Clause / RDC). Alasannya adalah untuk memastikan pemilik kapal tetap memiliki "skin in the game" dan berhati-hati. Sisanya ¼ (25%) — yang bisa sangat besar dalam tabrakan serius — harus ditanggung oleh P&I. Inilah salah satu alasan mengapa H&M dan P&I harus selalu dimiliki bersamaan oleh pemilik kapal.',
  },
  {
    question: 'Bagaimana cara menghitung premi P&I dan faktor apa yang mempengaruhinya?',
    answer: 'Premi P&I dihitung berdasarkan beberapa faktor utama: (1) Gross Tonnage (GT) kapal — semakin besar kapal, semakin tinggi iuran; (2) Jenis dan umur kapal — tanker minyak membayar lebih tinggi dari kapal kontainer; (3) Trade area — kapal yang berlayar ke wilayah risiko tinggi membayar loading; (4) Track record klaim pemilik kapal dalam 3–5 tahun terakhir; (5) Kompetensi dan sertifikasi awak kapal. Untuk P&I Club internasional, iuran ditetapkan setahun sekali dan dapat ada "supplementary call" di akhir tahun jika klaim Pool melebihi perkiraan.',
  },
  {
    question: 'Apa perbedaan antara "particular average", "general average", dan relevansinya dengan P&I?',
    answer: 'Particular Average adalah kerugian parsial yang hanya menimpa satu pihak (misalnya kerusakan sebagian muatan karena air laut masuk). General Average adalah pengorbanan yang disengaja untuk keselamatan semua pihak dalam pelayaran (misalnya membuang sebagian muatan untuk meringankan kapal yang kandas). Biaya General Average ditanggung secara proporsional oleh semua pihak yang berkepentingan — termasuk pemilik kapal dan pemilik seluruh muatan. P&I menjamin kontribusi General Average yang harus dibayar pemilik kapal jika kapal berkontribusi pada insiden. Marine Cargo menjamin kontribusi General Average yang harus dibayar pemilik muatan.',
  },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
const jsonLdArticle = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Protection & Indemnity (P&I): Panduan Lengkap Tanggung Jawab Hukum Pemilik Kapal 2025', author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl }, publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/protection-indemnity` }, inLanguage: 'id-ID', dateModified: '2025-05-01' };
const jsonLdBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Marine Insurance', item: `${baseUrl}/marine-insurance` }, { '@type': 'ListItem', position: 3, name: 'Protection & Indemnity', item: `${baseUrl}/protection-indemnity` }] };

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProtectionIndemnityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="bg-purple-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-purple-300">Beranda</a>
              <span className="text-purple-700">/</span>
              <Link href="/marine-insurance" className="hover:underline text-purple-300">Marine Insurance</Link>
              <span className="text-purple-700">/</span>
              <span className="text-white font-medium">Protection & Indemnity</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-purple-500/30">⚖️ Liability Pemilik Kapal</span>
              <span className="bg-red-500/20 text-red-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-red-500/30">🌊 MARPOL 73/78</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30">UU Pelayaran 17/2008</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">Protection & Indemnity (P&I)</h1>
            <p className="text-lg text-purple-200 max-w-2xl leading-relaxed mb-8">
              Satu kapal tanker yang bocor di laut bisa menghasilkan klaim pencemaran senilai ratusan
              juta USD. Satu tabrakan kapal di jalur pelabuhan ramai bisa menghasilkan gugatan dari
              puluhan pihak. P&I adalah satu-satunya perisai hukum dan finansial yang dirancang khusus
              untuk eksposur yang tidak terbatas ini.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Protection%20Indemnity%20P%26I" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30">
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

              {/* Apa itu P&I */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Protection & Indemnity dan Mengapa Unik?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Protection & Indemnity (P&I) adalah produk asuransi marine yang menjamin tanggung jawab
                  hukum pemilik atau operator kapal terhadap pihak ketiga — termasuk kru kapal, pemilik barang
                  lain, pengguna fasilitas pelabuhan, dan lingkungan laut. Berbeda dari Hull & Machinery yang
                  menjamin aset kapal itu sendiri, P&I menjamin <em>kewajiban</em> yang bisa ditimbulkan oleh
                  operasional kapal tersebut.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  P&I bersifat unik karena secara historis berkembang sebagai sistem mutual di antara pemilik
                  kapal — bukan produk komersial biasa. Tiga belas P&I Club yang tergabung dalam{' '}
                  <strong>International Group of P&I Clubs</strong> secara kolektif menanggung sekitar 90%
                  dari seluruh tonase kapal perdagangan dunia, dengan kapasitas kolektif yang melampaui
                  USD 3 miliar per insiden.
                </p>

                {/* Analogi H&M vs P&I */}
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-4">
                  <p className="text-sm font-bold text-purple-800 mb-3">🔑 Perbedaan H&M vs P&I dalam Satu Analogi</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 text-sm mb-2">🛳️ Hull & Machinery</p>
                      <p className="text-xs text-slate-600">Seperti asuransi kendaraan yang menjamin kerusakan <strong>mobil Anda sendiri</strong> — badan kapal, mesin, perlengkapan. Jika kapal Anda menabrak sesuatu dan <em>kapal Anda</em> yang rusak, H&M yang membayar.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-2">⚖️ Protection & Indemnity</p>
                      <p className="text-xs text-slate-600">Seperti asuransi tanggung gugat (third party liability) kendaraan — menjamin <strong>kerugian yang Anda timbulkan kepada orang lain</strong>. Jika kapal Anda menabrak dermaga atau kru Anda cedera, P&I yang membayar.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6 Kategori Cakupan */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">6 Kategori Utama Cakupan P&I</h2>
                <p className="text-slate-600 text-sm mb-6">P&I mencakup eksposur yang sangat luas — tidak ada produk asuransi lain yang bisa menggantikan perannya bagi pemilik kapal serius.</p>
                <div className="space-y-5">
                  {cakupanPI.map((item) => (
                    <div key={item.kategori} className={`rounded-xl border p-6 ${item.color === 'blue' ? 'border-blue-200 bg-blue-50/30' : item.color === 'red' ? 'border-red-200 bg-red-50/30' : item.color === 'green' ? 'border-green-200 bg-green-50/30' : item.color === 'amber' ? 'border-amber-200 bg-amber-50/30' : item.color === 'slate' ? 'border-slate-200 bg-slate-50' : 'border-purple-200 bg-purple-50/30'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="font-bold text-slate-900">{item.kategori}</p>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {item.detail.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 mt-2" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-white/80 rounded-lg p-3 border border-white">
                        <p className="text-xs text-slate-500 italic">💡 {item.catatan}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Studi Kasus Klaim */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Studi Kasus: Jenis Klaim P&I yang Terjadi di Perairan Asia</h2>
                <p className="text-slate-600 text-sm mb-5">Contoh-contoh berikut adalah skenario riil yang umum terjadi di perairan Asia Tenggara dan Indonesia.</p>
                <div className="space-y-4">
                  {kasusKlaim.map((kasus, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-800 text-white px-5 py-3">
                        <p className="font-semibold text-sm">{kasus.kasus}</p>
                      </div>
                      <div className="p-5 grid sm:grid-cols-3 gap-3">
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-400 font-medium mb-1">Klaim yang Timbul</p>
                          <p className="text-xs text-slate-700">{kasus.klaim}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="text-xs text-red-400 font-medium mb-1">Estimasi Nilai Klaim</p>
                          <p className="text-xs font-bold text-red-700">{kasus.nilaiEstimasi}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-xs text-purple-400 font-medium mb-1">Cakupan P&I</p>
                          <p className="text-xs text-purple-700">{kasus.cakupanPI}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* P&I Club vs Komersial */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">P&I Club vs Polis P&I Komersial</h2>
                <p className="text-slate-600 text-sm mb-5">Memilih antara keduanya bukan soal mana yang lebih murah — tapi mana yang kapasitasnya sesuai dengan skala operasional kapal Anda.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-purple-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3 bg-purple-700">P&I Club (Mutual)</th>
                        <th className="text-left p-3 rounded-tr-lg">P&I Komersial (Asuransi)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {piClubVsKomersial.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.aspek}</td>
                          <td className="p-3 text-slate-700 bg-purple-50/40">{row.club}</td>
                          <td className="p-3 text-slate-700">{row.komersial}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-700">
                    <strong>✅ Rekomendasi Praktisi:</strong> Untuk kapal domestik dengan GT kecil yang beroperasi
                    di perairan Indonesia, polis P&I komersial dari penanggung lokal yang terdaftar OJK adalah
                    solusi yang lebih praktis dan terjangkau. Untuk kapal berukuran besar yang berlayar
                    internasional, masuk P&I Club International Group adalah standar industri yang tidak bisa
                    dihindari.
                  </p>
                </div>
              </section>

              {/* Regulasi MARPOL & CLC */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulasi Internasional yang Mewajibkan P&I</h2>
                <div className="space-y-4">
                  {[
                    {
                      nama: 'MARPOL 73/78 — International Convention for Prevention of Pollution from Ships',
                      isi: 'Konvensi yang telah diratifikasi Indonesia ini menetapkan standar ketat penanganan limbah minyak, sampah, dan bahan berbahaya dari kapal. Annex I mengatur pencemaran minyak — jika kapal terbukti mencemari laut dan tidak memiliki jaminan keuangan yang memadai, pemilik kapal dapat ditangkap dan kapal ditahan di pelabuhan.',
      urgency: 'high',
                    },
                    {
                      nama: 'CLC 1992 — Civil Liability Convention for Oil Pollution Damage',
                      isi: 'Menetapkan kewajiban pemilik kapal tanker untuk memiliki asuransi atau jaminan keuangan yang mencukupi untuk membayar kompensasi pencemaran minyak. Buktinya adalah Blue Card dari P&I Club yang wajib dibawa di atas kapal dan diserahkan ke otoritas pelabuhan. Tanpa Blue Card, kapal dapat ditolak masuk atau ditahan.',
                      urgency: 'high',
                    },
                    {
                      nama: 'UU No. 17 Tahun 2008 — Pelayaran (Indonesia)',
                      isi: 'Pasal 181 mewajibkan setiap pemilik kapal untuk memiliki asuransi yang mencukupi untuk menanggung kerugian pihak ketiga. Pasal 203 mengatur tanggung jawab mutlak atas pencemaran dari kapal. Syahbandar berwenang menahan kapal yang tidak memiliki bukti asuransi yang memadai.',
                      urgency: 'medium',
                    },
                  ].map((reg) => (
                    <div key={reg.nama} className={`rounded-xl border p-5 ${reg.urgency === 'high' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'}`}>
                      <p className={`font-bold text-sm mb-2 ${reg.urgency === 'high' ? 'text-red-800' : 'text-amber-800'}`}>{reg.nama}</p>
                      <p className={`text-sm leading-relaxed ${reg.urgency === 'high' ? 'text-red-700' : 'text-amber-700'}`}>{reg.isi}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Protection & Indemnity</h2>
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
              <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-bold mb-2">Konsultasi P&I untuk Kapal Anda</h3>
                <p className="text-purple-200 text-sm mb-5 leading-relaxed">Rio Mardiansyah membantu pemilik kapal, operator, dan pelayaran menemukan solusi P&I yang tepat — baik melalui penanggung komersial lokal maupun keanggotaan P&I Club.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Protection%20and%20Indemnity%20untuk%20kapal%20kami" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
                <p className="text-xs text-purple-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Marine Cluster Nav */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">⚓ Klaster Marine Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/marine-insurance', label: 'Marine Insurance Hub', sub: 'Panduan ekosistem marine lengkap', icon: '⚓' },
                    { href: '/asuransi-kargo', label: 'Marine Cargo', sub: 'Perlindungan barang dalam perjalanan', icon: '📦' },
                    { href: '/hull-machinery-insurance', label: 'Hull & Machinery', sub: 'Perlindungan fisik badan kapal', icon: '🛳️' },
                    { href: '/freight-insurance', label: 'Freight Insurance', sub: 'Jaminan biaya angkut', icon: '📋' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition group">
                      <span className="text-xl">{link.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-purple-700 text-sm">{link.label}</p>
                        <p className="text-xs text-slate-500">{link.sub}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regulasi Highlight */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <p className="text-xs font-semibold text-red-600 mb-2">⚠️ Regulasi Wajib</p>
                <div className="space-y-2 text-xs text-red-700">
                  {['MARPOL 73/78 — Pencemaran laut', 'CLC 1992 — Blue Card tanker', 'UU Pelayaran 17/2008 Pasal 181', 'IMO Res. A.898 — Wreck removal'].map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                      <p>{r}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lini Lain */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Bisnis Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-liability', label: 'Asuransi Liability', sub: 'Tanggung gugat hukum bisnis' },
                    { href: '/asuransi-liability-limbah-b3', label: 'Environmental Liability', sub: 'Pencemaran limbah B3 darat' },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Aset properti komersial' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-purple-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-purple-700 text-sm">{link.label}</p>
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
