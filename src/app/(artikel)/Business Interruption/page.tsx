import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Business Interruption Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan mendalam Asuransi Business Interruption (BI) di Indonesia: Material Damage Proviso, formula Gross Profit, Indemnity Period, klausul ICOW, simulasi klaim nyata, dan cara menghitung Sum Insured BI yang benar. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi business interruption',
    'asuransi gangguan usaha',
    'business interruption indonesia',
    'asuransi loss of profit',
    'asuransi kehilangan keuntungan',
    'indemnity period asuransi',
    'gross profit insurance',
    'material damage proviso',
    'ICOW increased cost of working',
    'asuransi BI pabrik',
  ],
  alternates: { canonical: `${baseUrl}/business-interruption` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Business Interruption Indonesia: Panduan Lengkap 2025',
    description: 'Panduan BI Indonesia: Material Damage Proviso, formula Gross Profit, Indemnity Period, ICOW, simulasi klaim. Konsultasi profesional.',
    url: `${baseUrl}/business-interruption`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Business Interruption dan mengapa tidak bisa berdiri sendiri?',
    answer: 'Asuransi Business Interruption (BI) menjamin kerugian finansial — kehilangan laba kotor dan biaya tetap — yang timbul akibat terhentinya operasional bisnis karena kerusakan fisik aset. BI tidak bisa berdiri sendiri karena sifatnya adalah consequential loss (kerugian lanjutan) yang harus dipicu oleh klaim material damage yang valid. Prinsip ini disebut Material Damage Proviso: jika klaim IAR/Property ditolak, klaim BI otomatis gugur meskipun kerugian produksi nyata terjadi.',
  },
  {
    question: 'Apa perbedaan basis Gross Profit vs Gross Revenue dalam polis BI?',
    answer: 'Gross Profit basis (standar di Indonesia): BI menjamin Gross Profit yang hilang — yaitu Revenue dikurangi variable costs (bahan baku, utilitas variabel, komisi). Ini yang paling umum. Gross Revenue basis: BI menjamin total omzet yang hilang tanpa dikurangi variable costs apapun — lebih mahal tapi memberikan perlindungan lebih besar. Perbedaan ini dramatis dalam klaim: untuk bisnis dengan variable cost 60% dari revenue, klaim Gross Profit hanya 40% dari klaim Gross Revenue untuk kerugian yang sama.',
  },
  {
    question: 'Bagaimana cara menentukan Indemnity Period yang tepat?',
    answer: 'Indemnity Period adalah durasi maksimum klaim BI berjalan setelah kejadian. Pemilihannya harus realistis berdasarkan waktu yang dibutuhkan untuk memulihkan kapasitas produksi ke level sebelum kejadian — bukan hanya waktu rekonstruksi fisik, tapi termasuk waktu perizinan ulang, rekrutmen ulang tenaga ahli, dan pemulihan kepercayaan pelanggan. Panduan: bisnis ritel/jasa 6–12 bulan; manufaktur menengah 12–18 bulan; industri berat/petrokimia 24–36 bulan. Underestimasi Indemnity Period adalah kesalahan paling mahal dalam pembelian polis BI.',
  },
  {
    question: 'Apa itu Increased Cost of Working (ICOW) dan apa batasannya?',
    answer: 'ICOW menjamin biaya tambahan yang dikeluarkan tertanggung untuk mempercepat pemulihan atau mempertahankan operasional selama masa klaim: sewa fasilitas produksi alternatif, biaya lembur, pengiriman kilat spare part, dll. Namun ada batasan kritis: Economic Limit Test — ICOW hanya dibayar sepanjang biaya tersebut lebih kecil dari kerugian BI yang berhasil dicegah. Jika sewa pabrik alternatif Rp 500 juta namun hanya mencegah kerugian BI Rp 300 juta, penanggung hanya membayar Rp 300 juta.',
  },
  {
    question: 'Bagaimana cara menghitung Sum Insured Business Interruption yang benar?',
    answer: 'Sum Insured BI = Annual Gross Profit × (Indemnity Period / 12 bulan). Contoh: Gross Profit tahunan Rp 60 miliar, Indemnity Period 12 bulan, maka SI = Rp 60 miliar. Jika Indemnity Period 18 bulan, SI = Rp 90 miliar (Rp 60M × 18/12). Basis perhitungan Gross Profit harus berdasarkan proyeksi revenue tahun mendatang (bukan tahun lalu), karena BI menjamin apa yang seharusnya diperoleh, bukan apa yang sudah diperoleh. Underinsurance BI mengaktifkan Average Clause yang sama dengan Material Damage.',
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
  headline: 'Asuransi Business Interruption Indonesia: Panduan Lengkap 2025',
  description: 'Panduan mendalam BI Indonesia mencakup Material Damage Proviso, formula Gross Profit, Indemnity Period, ICOW, dan simulasi klaim.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/business-interruption` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Business Interruption', item: `${baseUrl}/business-interruption` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function BusinessInterruptionPage() {
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
              <span className="text-amber-300 font-medium">Business Interruption</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-amber-950 via-orange-900 to-amber-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
              📉 Asuransi Gangguan Usaha — Corporate Lines
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Business Interruption Indonesia
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl leading-relaxed mb-8">
              Kebakaran yang merusak mesin Rp 2 miliar bisa dijamin IAR. Tapi kerugian produksi Rp 15 miliar
              selama 3 bulan perbaikan — siapa yang menanggung? Business Interruption adalah jawabannya,
              dan inilah yang membuat perbedaan antara perusahaan yang bertahan dan yang tidak.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Business%20Interruption" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"><WaIcon />Konsultasi via WA</a>
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

              {/* Material Damage Proviso — Fondasi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hukum Dasar BI: Material Damage Proviso</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Sebelum membahas apapun tentang Business Interruption, ada satu prinsip yang wajib dipahami
                  oleh setiap CFO, Risk Manager, dan pemilik bisnis:
                </p>
                <div className="bg-amber-950 text-white rounded-xl p-6 mb-5">
                  <p className="text-amber-300 text-xs font-semibold mb-3 uppercase tracking-wide">Material Damage Proviso</p>
                  <p className="text-amber-100 text-base leading-relaxed font-medium mb-4">
                    "Klaim Business Interruption <span className="text-white">hanya dapat diproses</span> jika terdapat
                    kerusakan fisik yang terjamin (<em>covered material damage</em>) pada properti yang diasuransikan,
                    yang menjadi penyebab langsung terhentinya operasional bisnis."
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    {[
                      { label: 'Kondisi 1', text: 'Ada kerusakan fisik nyata (kebakaran, banjir, ledakan)', icon: '✅' },
                      { label: 'Kondisi 2', text: 'Kerusakan dijamin oleh polis IAR/Property yang berlaku', icon: '✅' },
                      { label: 'Kondisi 3', text: 'Kerusakan menyebabkan penghentian/pengurangan produksi', icon: '✅' },
                    ].map((c) => (
                      <div key={c.label} className="bg-white/10 rounded-lg p-3">
                        <p className="text-amber-300 text-xs font-semibold mb-1">{c.icon} {c.label}</p>
                        <p className="text-amber-100 text-xs">{c.text}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-amber-300 text-sm mt-4">
                    ⚠️ Jika <strong>salah satu kondisi di atas tidak terpenuhi</strong> — misalnya klaim IAR ditolak
                    karena exclusion — klaim BI <strong>otomatis gugur</strong> terlepas dari besarnya kerugian produksi.
                  </p>
                </div>

                {/* Koneksi ke IAR */}
                <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-teal-800">Polis IAR Anda adalah Kunci Klaim BI</p>
                    <p className="text-xs text-teal-600 mt-0.5">Idealnya IAR dan BI dari penanggung yang sama untuk hindari gap koordinasi klaim</p>
                  </div>
                  <Link href="/industrial-all-risk" className="flex-shrink-0 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                    IAR →
                  </Link>
                </div>
              </section>

              {/* Formula & Cara Kerja Klaim */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Formula Klaim BI: Cara Perhitungan Aktual</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Inilah formula yang digunakan loss adjuster dan penanggung dalam menghitung besaran klaim BI
                  yang sebenarnya. Memahami ini membantu Anda menetapkan Sum Insured dan Indemnity Period
                  yang tepat sejak awal.
                </p>

                {/* Formula Visual */}
                <div className="bg-slate-900 rounded-xl p-6 mb-6 font-mono text-sm">
                  <p className="text-slate-400 text-xs mb-3">// Formula Klaim Business Interruption</p>
                  <p className="text-white">Klaim BI  =  <span className="text-amber-300">Gross Profit yang Hilang</span></p>
                  <p className="text-white pl-12">+  <span className="text-green-400">Increased Cost of Working (ICOW)</span></p>
                  <p className="text-white pl-12">−  <span className="text-red-400">Savings (biaya yang tidak dikeluarkan)</span></p>
                  <div className="border-t border-slate-700 mt-3 pt-3">
                    <p className="text-slate-400 text-xs mb-1">// Gross Profit yang Hilang =</p>
                    <p className="text-white pl-4">( <span className="text-blue-300">Turnover Normal</span> − <span className="text-blue-300">Turnover Aktual</span> )</p>
                    <p className="text-white pl-4">× <span className="text-amber-300">Gross Profit Rate</span></p>
                    <div className="mt-2">
                      <p className="text-slate-400 text-xs mb-1">// Gross Profit Rate =</p>
                      <p className="text-white pl-4">Gross Profit Tahunan ÷ Turnover Tahunan × 100%</p>
                    </div>
                  </div>
                </div>

                {/* Simulasi Klaim Nyata */}
                <div className="bg-amber-950 text-white rounded-xl p-6">
                  <p className="text-amber-300 text-xs font-semibold mb-4 uppercase tracking-wide">Simulasi Klaim Nyata — Pabrik Tekstil, Jawa Barat</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="space-y-2">
                      <p className="text-amber-300 font-semibold text-xs">DATA PERUSAHAAN</p>
                      <div className="space-y-1 text-amber-100">
                        <p>• Turnover tahunan: <span className="font-mono text-white">Rp 120 Miliar</span></p>
                        <p>• Variable cost (bahan baku dll): <span className="font-mono text-white">Rp 72 Miliar</span></p>
                        <p>• Gross Profit: <span className="font-mono text-white">Rp 48 Miliar</span></p>
                        <p>• Gross Profit Rate: <span className="font-mono text-white">40%</span></p>
                        <p>• Indemnity Period dipilih: <span className="font-mono text-white">12 bulan</span></p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-amber-300 font-semibold text-xs">KEJADIAN KLAIM</p>
                      <div className="space-y-1 text-amber-100">
                        <p>• Kebakaran merusak 2 lini produksi</p>
                        <p>• Perbaikan butuh: <span className="font-mono text-white">4 bulan</span></p>
                        <p>• Turnover hilang: <span className="font-mono text-white">Rp 40 Miliar</span></p>
                        <p>• Biaya sewa pabrik sementara: <span className="font-mono text-white">Rp 3 Miliar</span></p>
                        <p>• Gaji karyawan tetap (savings 0): <span className="font-mono text-white">Rp 4 Miliar</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-amber-800 pt-4">
                    <p className="text-amber-300 font-semibold text-xs mb-2">PERHITUNGAN KLAIM</p>
                    <div className="space-y-1 text-sm font-mono">
                      <p className="text-amber-100">Gross Profit hilang = Rp 40M × 40% = <span className="text-white">Rp 16 Miliar</span></p>
                      <p className="text-amber-100">ICOW (sewa pabrik) = <span className="text-white">Rp 3 Miliar</span> ✅ (di bawah GP hilang)</p>
                      <p className="text-amber-100">Savings = Rp 0 (gaji tetap dibayar)</p>
                      <div className="border-t border-amber-700 mt-2 pt-2">
                        <p className="text-green-400 font-bold text-base">Total Klaim BI = Rp 16M + Rp 3M = Rp 19 Miliar</p>
                        <p className="text-amber-300 text-xs mt-1">Bandingkan: klaim IAR (kerusakan fisik) mungkin hanya Rp 5–8 Miliar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Indemnity Period */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Indemnity Period: Keputusan Paling Kritis dalam Pembelian Polis BI
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  <strong>Indemnity Period</strong> adalah durasi maksimum klaim BI dapat berjalan setelah
                  kejadian. Ini bukan hanya waktu perbaikan fisik — melainkan waktu yang dibutuhkan untuk
                  memulihkan <em>seluruh</em> dampak bisnis hingga kembali ke kapasitas normal.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
                  <p className="font-bold text-orange-800 mb-2">⚠️ Kesalahan Paling Mahal dalam BI</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Banyak perusahaan memilih Indemnity Period 6 bulan karena "perbaikan pabrik paling lama
                    6 bulan." Tapi waktu pemulihan bisnis bukan hanya waktu rekonstruksi fisik. Setelah
                    pabrik selesai dibangun, masih ada: waktu re-commissioning mesin baru, waktu rekrutmen
                    ulang tenaga ahli yang sudah pindah, waktu merebut kembali kepercayaan pelanggan yang
                    sudah beralih ke kompetitor, dan waktu mendapatkan izin operasional baru. Total bisa 2–3×
                    lebih lama dari rekonstruksi fisik.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Industri</th>
                        <th className="text-left p-3">Indemnity Period Disarankan</th>
                        <th className="text-left p-3 rounded-tr-lg">Alasan Utama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Toko Ritel / F&B', '6 – 12 bulan', 'Recovery cepat, low-capital, pelanggan mudah kembali'],
                        ['Manufaktur Ringan (garmen, plastik)', '12 – 18 bulan', 'Perlu rekrut ulang tenaga terampil & recover pelanggan'],
                        ['Manufaktur Berat (otomotif, elektronik)', '18 – 24 bulan', 'Mesin khusus, rantai pasokan kompleks, perizinan'],
                        ['Kimia / Petrokimia / Smelter', '24 – 36 bulan', 'Rekonstruksi sangat lama, izin lingkungan, commissioning'],
                        ['Pembangkit Listrik / Infrastruktur', '36 bulan+', 'Proyek strategis nasional, turbin khusus, regulasi ketat'],
                      ].map(([industri, period, alasan], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{industri}</td>
                          <td className="p-3 font-mono text-amber-700 font-bold">{period}</td>
                          <td className="p-3 text-slate-600">{alasan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Sum Insured BI */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cara Menghitung Sum Insured BI yang Benar</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Underinsurance di polis BI adalah masalah yang sangat umum karena banyak perusahaan
                  menggunakan angka historis tahun lalu, padahal BI menjamin pendapatan yang
                  <em> seharusnya diperoleh di masa mendatang</em>.
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-5 font-mono text-sm mb-5">
                  <p className="text-slate-400 text-xs mb-3">// Formula Sum Insured BI</p>
                  <p className="text-white">SI BI = <span className="text-amber-300">Annual Gross Profit (Proyeksi)</span></p>
                  <p className="text-white pl-10">× <span className="text-green-400">(Indemnity Period bulan ÷ 12)</span></p>
                  <div className="border-t border-slate-700 mt-3 pt-3">
                    <p className="text-slate-400 text-xs mb-2">// Contoh perhitungan:</p>
                    <p className="text-amber-100">GP Proyeksi Tahun Depan : Rp 60 Miliar</p>
                    <p className="text-amber-100">Indemnity Period pilihan : 18 bulan</p>
                    <p className="text-green-400 font-bold mt-1">SI BI = Rp 60M × (18/12) = Rp 90 Miliar</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="font-bold text-green-800 mb-2 text-sm">✅ Yang Masuk Gross Profit BI</p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {['Net profit sebelum pajak', 'Gaji & tunjangan karyawan tetap', 'Sewa gedung & utilitas tetap', 'Cicilan kredit bank', 'Depresiasi aset tetap', 'Biaya overhead tetap lainnya'].map(i => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="font-bold text-red-800 mb-2 text-sm">❌ Yang TIDAK Masuk (Variable Cost)</p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {['Biaya bahan baku (habis saat stop produksi)', 'Komisi penjualan (tidak ada jika tidak jual)', 'Biaya packaging & pengiriman variabel', 'Biaya utilitas variabel (listrik produksi)', 'Gaji tenaga kerja harian/borongan'].map(i => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Simulasi Premi BI */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Business Interruption</h2>
                <p className="text-slate-600 text-sm mb-5">Premi BI umumnya dihitung sebagai persentase dari premi IAR/Material Damage yang menjadi trigger-nya, atau langsung dari Sum Insured BI.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Sum Insured BI</th>
                        <th className="text-left p-3">Indemnity Period</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Rp 10 Miliar', '6 bulan', '0,10 – 0,15%', 'Rp 10 – 15 Juta'],
                        ['Rp 30 Miliar', '12 bulan', '0,12 – 0,20%', 'Rp 36 – 60 Juta'],
                        ['Rp 60 Miliar', '12 bulan', '0,10 – 0,18%', 'Rp 60 – 108 Juta'],
                        ['Rp 90 Miliar', '18 bulan', '0,10 – 0,16%', 'Rp 90 – 144 Juta'],
                        ['Rp 200 Miliar', '24 bulan', '0,08 – 0,15%', 'Rp 160 – 300 Juta'],
                      ].map(([si, period, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{si}</td>
                          <td className="p-3 font-mono text-slate-700">{period}</td>
                          <td className="p-3 font-mono text-slate-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Rate BI sangat bergantung pada rate IAR yang menjadi trigger-nya, jenis industri, dan rekam jejak klaim 5 tahun.</p>
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
                <strong>Disclaimer:</strong> Informasi bersifat edukatif. Besaran klaim aktual dihitung oleh loss adjuster berdasarkan data keuangan audited, rekam produksi, dan ketentuan polis yang berlaku.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-950 to-orange-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">📉</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi BI Anda</h3>
                <p className="text-amber-200 text-sm mb-5 leading-relaxed">Apakah Sum Insured dan Indemnity Period polis BI Anda sudah cukup? Rio Mardiansyah siap membantu review struktur perlindungan bisnis Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Business%20Interruption" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-amber-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Paket Perlindungan Industri</h3>
                <div className="space-y-2">
                  {[
                    { href: '/industrial-all-risk', label: 'Industrial All Risk (IAR)', sub: 'Trigger wajib untuk klaim BI', hot: true },
                    { href: '/property-all-risk', label: 'Property All Risk', sub: 'Trigger untuk bisnis non-industri' },
                    { href: '/asuransi-machinery-breakdown', label: 'Machinery Breakdown + MLOP', sub: 'BI khusus akibat kerusakan mesin' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-amber-50 rounded-xl transition group">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-700 group-hover:text-amber-700 text-sm">{l.label}</p>
                          {l.hot && <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Wajib</span>}
                        </div>
                        <p className="text-xs text-slate-500">{l.sub}</p>
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
