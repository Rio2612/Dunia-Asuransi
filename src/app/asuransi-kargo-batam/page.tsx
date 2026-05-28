import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Kargo Batam: FTZ, Ekspor Singapura & Logistik Pelabuhan [2025]',
  description:
    'Asuransi Kargo khusus Batam — kawasan Free Trade Zone (FTZ) dengan regulasi pengiriman unik. Panduan lengkap asuransi kargo keluar FTZ, ekspor ke Singapura/Malaysia, dan jalur Selat Malaka. Konsultasi gratis.',
  keywords: [
    'asuransi kargo batam',
    'marine cargo batam',
    'asuransi pengiriman batam',
    'asuransi ekspor batam singapura',
    'asuransi kargo FTZ batam',
    'asuransi pengiriman selat malaka',
    'asuransi kargo kepri',
    'cargo insurance batam',
    'asuransi pengiriman barang batam center',
    'asuransi logistik batu ampar',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-kargo-batam`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Kargo Batam: FTZ, Ekspor Singapura & Logistik Pelabuhan 2025',
    description:
      'Panduan asuransi kargo khusus Batam — regulasi FTZ, ekspor ke Singapura/Malaysia, jalur Selat Malaka. Dari praktisi berbasis di Batam.',
    url: `${baseUrl}/asuransi-kargo-batam`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const jalurLogistikBatam = [
  {
    rute: 'Batam → Singapura',
    moda: 'Laut (Ferry / Cargo Vessel)',
    jarakWaktu: '~35 km / 45–60 mnt',
    risikoUtama: 'Cuaca Selat Malaka, transit customs, kerusakan bongkar muat di Pelabuhan Batu Ampar',
    rekomendasiICC: 'ICC A',
    noteLokal: 'Volume ekspor terbesar Batam. Dominan barang elektronik & komponen manufaktur.',
  },
  {
    rute: 'Batam → Malaysia (Johor)',
    moda: 'Laut (Cargo Vessel)',
    jarakWaktu: '~90 km / 3–4 jam',
    risikoUtama: 'Transit dua kali customs, perubahan kondisi cuaca, risiko delay pelabuhan',
    rekomendasiICC: 'ICC A atau B',
    noteLokal: 'Pengiriman sering melewati Singapore sebagai hub transit.',
  },
  {
    rute: 'Batam → Jakarta (Tanjung Priok)',
    moda: 'Laut (Kontainer)',
    jarakWaktu: '~1.100 km / 2–3 hari',
    risikoUtama: 'Keluar kawasan FTZ (wajib dokumen pemasukan ke DPIL), cuaca Laut Jawa',
    rekomendasiICC: 'ICC A atau B',
    noteLokal: 'Barang keluar FTZ ke DPIL wajib bayar bea masuk & PPN — pastikan nilai pertanggungan sudah termasuk landed cost.',
  },
  {
    rute: 'Batam → Antar Pulau Domestik',
    moda: 'Laut / Udara (Hang Nadim)',
    jarakWaktu: 'Variatif',
    risikoUtama: 'Kerusakan handling, keterlambatan koneksi antarmoda',
    rekomendasiICC: 'ICC B atau C',
    noteLokal: 'Untuk pengiriman udara via Hang Nadim, pastikan polis mencakup klausula udara (Institute Air Cargo Clauses).',
  },
];

const komoditasBatam = [
  {
    jenis: 'Elektronik & Komponen',
    ikon: '💻',
    deskripsi: 'PCB, komponen semikonduktor, produk elektronik jadi dari kawasan industri Muka Kuning, Batamindo, Panbil.',
    risikoKhusus: 'ESD (Electrostatic Discharge), kerusakan air, pencurian komponen bernilai tinggi',
    rekICC: 'ICC A wajib — plus klausula SRCC untuk risiko pencurian terorganisir',
    catatan: 'Rate biasanya 0,20–0,35% karena nilai per unit tinggi dan rentan rusak',
  },
  {
    jenis: 'Minyak & Petrokimia',
    ikon: '🛢️',
    deskripsi: 'Crude palm oil (CPO), BBM, bahan kimia dari kawasan industri dan depot minyak di Sekupang.',
    risikoKhusus: 'Kontaminasi, kebocoran, risiko eksplosif selama pengangkutan laut',
    rekICC: 'ICC B/C + Klausula Pollution Liability tambahan',
    catatan: 'Penanggung akan meminta MSDS (Material Safety Data Sheet) sebagai dokumen underwriting',
  },
  {
    jenis: 'Galangan & Alat Berat',
    ikon: '⚓',
    deskripsi: 'Komponen kapal, peralatan offshore, steel structure dari galangan kapal (shipyard) di Tanjung Uncang.',
    risikoKhusus: 'Risiko marine peril saat in-tow, kerusakan akibat berat muatan, karat',
    rekICC: 'ICC A + Institute Classification Clause',
    catatan: 'Pengiriman komponen kapal large project perlu survey pra-shipment dari surveyor independent',
  },
  {
    jenis: 'Barang Konsumsi (FMCG)',
    ikon: '📦',
    deskripsi: 'Produk makanan, minuman, consumer goods yang masuk/keluar melalui Pelabuhan Batu Ampar.',
    risikoKhusus: 'Kerusakan kemasan, kontaminasi, kerusakan akibat suhu (untuk produk beku)',
    rekICC: 'ICC A (umum) atau ICC A + Refrigeration Clause (untuk cold chain)',
    catatan: 'Cold storage cargo memerlukan klausula khusus temperature yang harus diminta secara eksplisit',
  },
];

const regulasiFTZ = [
  {
    icon: '🏛️',
    judul: 'PP No. 10 Tahun 2012 — Status FTZ Batam',
    isi: 'Batam ditetapkan sebagai kawasan perdagangan bebas (Free Trade Zone/FTZ) bersama Bintan dan Karimun berdasarkan PP No. 10/2012. Status FTZ membuat barang yang masuk/keluar Batam diperlakukan beda dari wilayah pabean Indonesia lainnya (disebut DPIL — Daerah Pabean Indonesia Lainnya). Konsekuensinya bagi asuransi kargo: nilai pertanggungan untuk pengiriman keluar FTZ harus memperhitungkan bea masuk dan PPN yang akan dikenakan saat barang memasuki DPIL.',
  },
  {
    icon: '📄',
    judul: 'Dokumen Pemasukan ke DPIL (Wajib Penanggung Memahami)',
    isi: 'Setiap pengiriman barang dari kawasan FTZ Batam ke wilayah Indonesia lainnya wajib dilengkapi dokumen BC 2.3 (Pemberitahuan Pabean FTZ) dari Bea Cukai Batam. Dokumen ini juga menjadi bukti kritis dalam proses klaim asuransi kargo, karena mencantumkan nilai barang yang diakui secara resmi oleh otoritas pabean.',
  },
  {
    icon: '🚢',
    judul: 'Aturan Kapal FTZ dan Jalur Pelayaran',
    isi: 'Kapal yang beroperasi di rute Batam–Singapura umumnya menggunakan kapal Ferry RoRo atau general cargo vessel. Untuk pengiriman kargo besar, kapal container menggunakan jalur Selat Malaka yang merupakan salah satu jalur tersibuk di dunia. Cuaca dan kondisi laut Selat Malaka menjadi faktor risiko signifikan yang dipertimbangkan oleh underwriter dalam penetapan rate premi.',
  },
  {
    icon: '🏭',
    judul: 'Kawasan Industri Batam — Zona Risiko Underwriting',
    isi: 'Underwriter asuransi kargo memiliki profil risiko berbeda untuk masing-masing kawasan industri di Batam. Barang dari Batamindo Industrial Park dan Muka Kuning (dominan elektronik) memiliki profil berbeda dengan barang dari kawasan galangan Tanjung Uncang (dominan steel & offshore equipment). Pastikan Anda menyebutkan lokasi pabrik/gudang pengirim saat mengajukan permohonan asuransi.',
  },
];

const faqData = [
  {
    question: 'Apakah asuransi kargo di Batam berbeda dari asuransi kargo nasional?',
    answer:
      'Secara klausula ICC, produknya sama. Yang berbeda adalah konteks risikonya. Batam sebagai kawasan FTZ memiliki jalur pengiriman dominan ke luar negeri (Singapura, Malaysia), regulasi bea cukai yang berbeda dari DPIL, dan komoditas unggulan yang spesifik (elektronik, komponen kapal, petrokimia). Underwriter yang berpengalaman di Batam akan memahami nuansa risiko ini dan dapat memberikan struktur polis yang lebih tepat. Itulah mengapa konsultasi dengan praktisi lokal sangat disarankan.',
  },
  {
    question: 'Bagaimana cara asuransi kargo memperlakukan barang yang keluar dari kawasan FTZ Batam?',
    answer:
      'Barang yang keluar dari kawasan FTZ Batam menuju wilayah Indonesia lainnya (DPIL) secara hukum diperlakukan sebagai "impor" ke dalam wilayah pabean Indonesia — sehingga dikenai bea masuk dan PPN. Nilai pertanggungan dalam polis asuransi kargo idealnya sudah memperhitungkan landed cost (nilai barang + bea masuk + PPN) agar tidak terjadi underinsurance saat barang sudah berada di DPIL.',
  },
  {
    question: 'Apakah asuransi kargo menjamin pengiriman barang via ferry Batam–Singapura?',
    answer:
      'Ya, namun perlu perhatian khusus pada moda transportasi yang tercantum dalam polis. Pengiriman via ferry RoRo atau cargo vessel masuk kategori marine freight dan dijamin oleh ICC. Yang perlu dikonfirmasi: apakah polis mencakup leg dari gudang pengirim ke pelabuhan Batu Ampar (leg darat/truck) dan dari pelabuhan Singapura ke gudang penerima — karena ini bagian dari jaminan warehouse to warehouse.',
  },
  {
    question: 'Berapa estimasi premi untuk pengiriman elektronik dari Batam ke Singapura?',
    answer:
      'Sebagai estimasi: untuk barang elektronik dengan ICC A, rate berkisar 0,20%–0,35% dari nilai pertanggungan. Contoh: Barang senilai SGD 100,000 dengan freight SGD 3,000 → Nilai Pertanggungan = (103,000 × 1.10) = SGD 113,300 → Premi ≈ SGD 226–397. Rate aktual tergantung jenis barang spesifik, riwayat klaim, dan penanggung yang dipilih. Hubungi Rio untuk kalkulasi yang lebih akurat.',
  },
  {
    question: 'Apakah ada rekomendasi penanggung asuransi yang berpengalaman untuk kargo Batam?',
    answer:
      'Beberapa perusahaan asuransi yang aktif di segmen marine cargo dan memiliki jaringan di Batam antara lain: Asuransi Asei (spesialis ekspor-impor), Tugu Insurance, Asuransi Jasa Indonesia (Jasindo), dan beberapa penanggung swasta besar. Pemilihan penanggung juga perlu mempertimbangkan jaringan surveyor mereka di Singapura, karena klaim ekspor Batam–Singapura sering memerlukan survei di kedua sisi.',
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
  headline: 'Asuransi Kargo Batam: FTZ, Ekspor Singapura & Logistik Pelabuhan 2025',
  description:
    'Panduan lengkap asuransi kargo khusus Batam — regulasi FTZ, rute ekspor Singapura/Malaysia, jalur Selat Malaka, dan profil risiko komoditas unggulan Batam.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: {
    '@type': 'Organization',
    name: 'Dunia Asuransi',
    url: baseUrl,
    telephone: '+628131556592',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-kargo-batam` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Kargo', item: `${baseUrl}/asuransi-kargo` },
    { '@type': 'ListItem', position: 3, name: 'Asuransi Kargo Batam', item: `${baseUrl}/asuransi-kargo-batam` },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AsuransiKargoBatamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-cyan-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-cyan-300">Beranda</a>
              <span className="text-cyan-600">/</span>
              <a href="/asuransi-kargo" className="hover:underline text-cyan-300">Asuransi Kargo</a>
              <span className="text-cyan-600">/</span>
              <span className="text-white font-medium">Batam</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/30">
                🏭 Kawasan Free Trade Zone (FTZ)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30">
                🚢 Jalur Selat Malaka
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">
                🇸🇬 Ekspor Singapura & Malaysia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Kargo Batam
            </h1>
            <p className="text-lg text-cyan-200 max-w-2xl leading-relaxed mb-8">
              Batam bukan kota biasa — sebagai kawasan FTZ dengan volume ekspor impor terbesar ketiga di
              Indonesia, setiap pengiriman barang dari dan ke Batam memiliki dinamika risiko yang unik.
              Dari jalur ferry Batu Ampar–Tanah Merah hingga pengiriman kontainer via Selat Malaka,
              kami memahami setiap detailnya.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Kargo%20di%20Batam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Kargo Batam
              </a>
              <a
                href="https://asuransibatam.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                🏝️ asuransibatam.biz.id
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── CONTENT COLUMN ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Mengapa Batam Berbeda */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Mengapa Asuransi Kargo Batam Tidak Sama dengan Kota Lain?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Batam bukan sekadar kota di Kepulauan Riau — ia adalah <strong>kawasan perdagangan bebas (Free Trade
                  Zone)</strong> yang ditetapkan berdasarkan <strong>PP No. 10 Tahun 2012</strong>. Status FTZ ini
                  menciptakan ekosistem logistik yang unik dan berbeda dari kota-kota Indonesia lainnya.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-5">
                  {[
                    {
                      icon: '🚢',
                      judul: 'Volume Ekspor-Impor Tinggi',
                      isi: 'Batam mengekspor barang senilai miliaran USD per tahun, didominasi elektronik dan komponen manufaktur ke Singapura dan Malaysia. Jalur laut Selat Malaka yang sibuk membawa risiko tersendiri.',
                    },
                    {
                      icon: '📋',
                      judul: 'Regulasi FTZ yang Unik',
                      isi: 'Barang keluar FTZ ke wilayah Indonesia lainnya (DPIL) diperlakukan sebagai impor dan dikenai bea masuk. Nilai pertanggungan harus memperhitungkan landed cost, bukan hanya invoice value.',
                    },
                    {
                      icon: '🏭',
                      judul: 'Komoditas Spesifik',
                      isi: 'Elektronik dari Batamindo & Muka Kuning, komponen kapal dari galangan Tanjung Uncang, petrokimia dari Sekupang — setiap komoditas punya profil risiko underwriting berbeda.',
                    },
                    {
                      icon: '⚓',
                      judul: 'Infrastruktur Pelabuhan Khusus',
                      isi: 'Pelabuhan Batu Ampar (kargo internasional), Pelabuhan Sekupang, dan terminal ferry Harbourbay masing-masing memiliki karakteristik bongkar muat dan risiko kerusakan yang berbeda.',
                    },
                  ].map((item) => (
                    <div key={item.judul} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="font-semibold text-slate-800">{item.judul}</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.isi}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Jalur Logistik Utama */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Profil Risiko Per Jalur Logistik Utama Batam
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Setiap rute pengiriman dari Batam memiliki profil risiko yang berbeda. Tabel ini membantu
                  Anda memilih klausula ICC yang tepat berdasarkan rute aktual pengiriman.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cyan-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Rute</th>
                        <th className="text-left p-3">Moda</th>
                        <th className="text-left p-3">Risiko Utama</th>
                        <th className="text-left p-3">Rekomendasi ICC</th>
                        <th className="text-left p-3 rounded-tr-lg">Note Lokal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jalurLogistikBatam.map((jalur, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-cyan-50 transition-colors`}>
                          <td className="p-3 font-semibold text-slate-800">{jalur.rute}</td>
                          <td className="p-3 text-slate-600 text-xs">{jalur.moda}<br/><span className="text-slate-400">{jalur.jarakWaktu}</span></td>
                          <td className="p-3 text-slate-600 text-xs">{jalur.risikoUtama}</td>
                          <td className="p-3">
                            <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-bold px-2 py-1 rounded-full">
                              {jalur.rekomendasiICC}
                            </span>
                          </td>
                          <td className="p-3 text-slate-500 text-xs">{jalur.noteLokal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Komoditas Unggulan Batam */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Profil Asuransi per Komoditas Unggulan Batam
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Tidak semua barang diperlakukan sama oleh underwriter. Berikut panduan spesifik
                  per komoditas yang mendominasi arus kargo Batam.
                </p>
                <div className="space-y-4">
                  {komoditasBatam.map((komoditas) => (
                    <div key={komoditas.jenis} className="border border-slate-200 rounded-xl p-5 hover:border-cyan-300 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{komoditas.ikon}</span>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 text-lg">{komoditas.jenis}</p>
                          <p className="text-slate-600 text-sm mt-1">{komoditas.deskripsi}</p>
                          <div className="grid sm:grid-cols-2 gap-3 mt-3">
                            <div className="bg-red-50 rounded-lg p-3">
                              <p className="text-xs font-semibold text-red-700 mb-1">⚠️ Risiko Spesifik</p>
                              <p className="text-xs text-red-600">{komoditas.risikoKhusus}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                              <p className="text-xs font-semibold text-green-700 mb-1">✅ Rekomendasi Polis</p>
                              <p className="text-xs text-green-600">{komoditas.rekICC}</p>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2 italic">💡 {komoditas.catatan}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Regulasi FTZ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Regulasi FTZ yang Wajib Dipahami Sebelum Membeli Polis
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Banyak pelaku bisnis di Batam membeli asuransi kargo "standar" tanpa menyadari ada
                  nuansa regulasi FTZ yang dapat mempengaruhi klaim. Berikut poin-poin kritis yang harus
                  didiskusikan dengan penanggung Anda.
                </p>
                <div className="space-y-4">
                  {regulasiFTZ.map((reg) => (
                    <div key={reg.judul} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-2xl flex-shrink-0">{reg.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{reg.judul}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{reg.isi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Simulasi Premi Kargo Batam-Singapura */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Simulasi Premi: Ekspor Elektronik Batam → Singapura
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Berikut contoh perhitungan aktual untuk pengiriman komponen elektronik dari kawasan
                  industri Batamindo ke Pelabuhan Tanjong Pagar, Singapura, menggunakan klausula ICC A.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Komponen</th>
                        <th className="text-right p-3 rounded-tr-lg">Nilai (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Invoice Value (CIF)', 'USD 80,000', false],
                        ['Ocean Freight Batam–Singapura', 'USD 1,200', false],
                        ['Subtotal CIF', 'USD 81,200', false],
                        ['Margin 10% (keuntungan estimasi)', 'USD 8,120', false],
                        ['Nilai Pertanggungan (Insured Value)', 'USD 89,320', true],
                        ['Rate ICC A — Elektronik (0,25%)', '—', false],
                        ['Premi Netto', 'USD 223.30', true],
                        ['Materai + Admin (estimasi)', 'USD 15', false],
                        ['Total Premi Dibayar', 'USD 238.30', true],
                      ].map(([label, value, bold], i) => (
                        <tr key={i} className={bold ? 'bg-cyan-50 border-b border-cyan-200' : 'border-b border-slate-100'}>
                          <td className={`p-3 ${bold ? 'font-bold text-cyan-800' : 'text-slate-600'}`}>{label}</td>
                          <td className={`p-3 text-right font-mono ${bold ? 'font-bold text-cyan-800' : 'text-slate-800'}`}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Simulasi di atas bersifat ilustratif. Rate aktual ditentukan berdasarkan survei risiko,
                  jenis barang spesifik, dan underwriter yang dipilih. Hubungi Rio untuk kalkulasi yang
                  akurat berdasarkan data pengiriman Anda.
                </p>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pertanyaan Spesifik tentang Kargo Batam
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

              {/* CTA Utama */}
              <div className="bg-gradient-to-br from-cyan-800 to-blue-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">Konsultan Lokal Batam</h3>
                <p className="text-cyan-300 text-xs mb-3">Berbasis di Batam — paham ekosistem FTZ</p>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  Rio Mardiansyah melayani klien korporat dan eksportir di Batam. Konsultasi gratis,
                  respons cepat, dan memahami keunikan regulasi FTZ Batam.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20membutuhkan%20Asuransi%20Kargo%20di%20Batam"
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
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm mb-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0813-1556-592
                </a>
                {/* Satellite site CTA */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-cyan-400 mb-2">🏝️ Portal Khusus Batam & Kepri</p>
                  <a
                    href="https://asuransibatam.biz.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2.5 rounded-xl font-semibold transition-all w-full text-sm"
                  >
                    Kunjungi asuransibatam.biz.id →
                  </a>
                  <p className="text-xs text-slate-500 text-center mt-2">
                    Layanan direct selling khusus Batam–Kepri
                  </p>
                </div>
              </div>

              {/* Pelabuhan Utama Batam */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🚢 Pelabuhan Utama Batam</h3>
                <div className="space-y-3">
                  {[
                    { nama: 'Pelabuhan Batu Ampar', ket: 'Kargo internasional & ekspor', tipe: 'Kargo Utama' },
                    { nama: 'Pelabuhan Sekupang', ket: 'Ferry & kargo domestik', tipe: 'Domestik' },
                    { nama: 'Harbourbay Terminal', ket: 'Ferry penumpang & kargo ringan', tipe: 'Ferry' },
                    { nama: 'Tanjung Uncang', ket: 'Galangan kapal & offshore', tipe: 'Shipyard' },
                    { nama: 'Bandara Hang Nadim', ket: 'Kargo udara ekspor-impor', tipe: 'Udara' },
                  ].map((p) => (
                    <div key={p.nama} className="flex items-start justify-between p-3 bg-slate-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{p.nama}</p>
                        <p className="text-xs text-slate-500">{p.ket}</p>
                      </div>
                      <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">{p.tipe}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back to National */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-600 mb-3">
                  Butuh panduan asuransi kargo nasional yang lebih general (ICC A/B/C, regulasi AAUI, dll)?
                </p>
                <Link
                  href="/asuransi-kargo"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  ← Baca Panduan Kargo Nasional
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-slate-900 text-slate-400 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah. Konsultan Asuransi Kerugian Batam & Nasional.</p>
            <p className="mt-1">
              WhatsApp: 0813-1556-592 |{' '}
              <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a>
              {' '}|{' '}
              <a href="https://asuransibatam.biz.id" className="hover:text-cyan-400 transition" target="_blank" rel="noopener noreferrer">asuransibatam.biz.id</a>
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
