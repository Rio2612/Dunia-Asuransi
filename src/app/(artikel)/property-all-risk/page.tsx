import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Property All Risk (PAR): Asuransi Properti Komersial & Gedung [2025]',
  description:
    'Panduan lengkap Property All Risk (PAR) — cakupan vs asuransi kebakaran PSAKI, pengecualian mesin internal, cara hitung premi, Machinery Breakdown, dan tips klaim properti komersial. Dari praktisi berpengalaman.',
  keywords: [
    'property all risk',
    'asuransi properti komersial',
    'asuransi gedung',
    'PAR insurance indonesia',
    'asuransi bangunan komersial',
    'perbedaan PAR kebakaran',
    'PSAKI asuransi properti',
    'machinery breakdown properti',
    'asuransi hotel gedung perkantoran',
    'industrial all risk',
  ],
  alternates: { canonical: `${baseUrl}/property-all-risk` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Property All Risk (PAR): Asuransi Properti Komersial & Gedung 2025',
    description: 'Panduan PAR — cakupan vs kebakaran PSAKI, pengecualian mesin, cara hitung premi, dan taktis cross-sell ke MLOP.',
    url: `${baseUrl}/property-all-risk`, type: 'article', locale: 'id_ID', siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const parVsKebakaran = [
  { aspek: 'Dasar Polis', par: 'All Risks — dijamin semua kecuali yang dikecualikan', kebakaran: 'Named Perils — hanya risiko yang disebutkan dijamin' },
  { aspek: 'Dasar Hukum/Polis Standar', par: 'Munich Re / Swiss Re wording + endorsement lokal OJK', kebakaran: 'PSAKI (Polis Standar Asuransi Kebakaran Indonesia) — AAUI' },
  { aspek: 'Kebakaran & Petir', par: '✅ Dijamin', kebakaran: '✅ Dijamin (risiko utama)' },
  { aspek: 'Ledakan', par: '✅ Dijamin', kebakaran: '✅ Dijamin (risiko tambahan PSAKI)' },
  { aspek: 'Kerusakan Air (burst pipe, banjir)', par: '✅ Dijamin (banjir perlu endorsement)', kebakaran: '❌ Tidak — hanya dengan endorsement khusus' },
  { aspek: 'Vandalisme & Malicious Damage', par: '✅ Dijamin', kebakaran: '❌ Tidak dijamin dalam PSAKI standar' },
  { aspek: 'Tabrakan Kendaraan ke Bangunan', par: '✅ Dijamin', kebakaran: '❌ Tidak' },
  { aspek: 'Kerusakan Mesin (internal failure)', par: '❌ DIKECUALIKAN — wajib polis Machinery Breakdown', kebakaran: '❌ Tidak' },
  { aspek: 'Gempa Bumi', par: 'Perlu endorsement EQSHA', kebakaran: 'Perlu endorsement EQSHA' },
  { aspek: 'Kecurian (Theft)', par: '✅ Dijamin (dengan endorsement TPND)', kebakaran: '❌ Tidak' },
  { aspek: 'Premi Indikatif', par: '0,03% – 0,15% per tahun dari nilai properti', kebakaran: '0,01% – 0,06% per tahun' },
];

const objekTertanggung = [
  { kategori: 'Bangunan & Struktur', detail: 'Dinding, atap, fondasi, partisi permanen, tangga, lift shaft', icon: '🏢' },
  { kategori: 'Instalasi Mekanikal', detail: 'Sistem AC sentral, elevator, eskalator, sistem pemadam kebakaran (sprinkler)', icon: '⚙️' },
  { kategori: 'Instalasi Elektrikal', detail: 'Panel listrik, transformator, generator, UPS, kabel instalasi', icon: '⚡' },
  { kategori: 'Interior & Finishing', detail: 'Lantai, plafon, cat, partisi non-permanen, sanitasi', icon: '🪑' },
  { kategori: 'Perlengkapan Gedung', detail: 'Furniture built-in, lobi, koridor, area parkir terstruktur', icon: '🏪' },
  { kategori: 'Stok & Inventory (optional)', detail: 'Barang dagangan, bahan baku — perlu deklarasi nilai terpisah', icon: '📦' },
];

const exclusionsKritis = [
  {
    exclusion: '⚠️ Kerusakan Internal Mesin (Mechanical/Electrical Breakdown)',
    penjelasan: 'Ini adalah pengecualian paling krusial yang sering tidak dipahami nasabah. PAR menjamin kerusakan mesin akibat penyebab eksternal (kebakaran, banjir, tabrakan). Namun kerusakan yang berasal dari DALAM mesin itu sendiri — seperti kegagalan kompressor AC, kerusakan bearing mesin produksi, atau konslet internal generator — TIDAK dijamin PAR.',
    solusi: 'Solusinya: Machinery Breakdown Insurance (MB) untuk kerusakan fisik mesin, dan Machinery Loss of Profit (MLOP) untuk kerugian usaha akibat kerusakan mesin.',
    urgent: true,
  },
  {
    exclusion: 'Kerusakan Akibat Disain/Konstruksi yang Cacat',
    penjelasan: 'Kerusakan yang secara langsung timbul dari kesalahan desain arsitektur atau konstruksi yang buruk tidak dijamin PAR. Polis ini menjamin risiko eksternal, bukan cacat yang memang sudah ada sejak bangunan dibangun.',
    solusi: 'Untuk proyek konstruksi baru, solusinya adalah Contractors All Risk (CAR) selama masa pembangunan.',
    urgent: false,
  },
  {
    exclusion: 'Keausan Normal (Wear & Tear)',
    penjelasan: 'Deteriorasi bertahap akibat usia atau pemakaian normal tidak dijamin. PAR dirancang untuk risiko mendadak dan tidak terduga — bukan pemeliharaan rutin atau penggantian komponen yang sudah usang.',
    solusi: 'Ini adalah tanggung jawab maintenance rutin pemilik gedung.',
    urgent: false,
  },
  {
    exclusion: 'Properti dalam Proses Konstruksi',
    penjelasan: 'Bangunan yang masih dalam tahap pembangunan tidak dapat diasuransikan dengan PAR. Polis PAR berlaku untuk properti yang sudah selesai dan beroperasi.',
    solusi: 'Gunakan Contractors All Risk (CAR) atau Erection All Risk (EAR) selama masa konstruksi.',
    urgent: false,
  },
];

const simulasiPremi = [
  { objek: 'Gedung Perkantoran 10 Lantai', nilaiProperti: 'Rp 150.000.000.000', rate: '0,05%', premiTahunan: 'Rp 75.000.000' },
  { objek: 'Hotel Bintang 4 (150 kamar)', nilaiProperti: 'Rp 200.000.000.000', rate: '0,08%', premiTahunan: 'Rp 160.000.000' },
  { objek: 'Pusat Perbelanjaan (Mall)', nilaiProperti: 'Rp 500.000.000.000', rate: '0,05%', premiTahunan: 'Rp 250.000.000' },
  { objek: 'Gudang Logistik Modern', nilaiProperti: 'Rp 80.000.000.000', rate: '0,06%', premiTahunan: 'Rp 48.000.000' },
  { objek: 'Rumah Sakit Swasta', nilaiProperti: 'Rp 250.000.000.000', rate: '0,10%', premiTahunan: 'Rp 250.000.000' },
];

const faqData = [
  {
    question: 'Apa perbedaan Property All Risk dengan Industrial All Risk (IAR)?',
    answer: 'Meski keduanya menggunakan prinsip all risks, segmentasinya berbeda. PAR (Property All Risk) ditujukan untuk properti komersial non-industrial — gedung perkantoran, hotel, mal, rumah sakit, apartemen. IAR (Industrial All Risk) dirancang untuk fasilitas produksi/pabrik yang memiliki mesin, proses, dan risiko yang lebih kompleks. IAR secara inheren lebih mudah dikombinasikan dengan Machinery Breakdown dan Business Interruption dalam satu paket polis.',
  },
  {
    question: 'Mengapa mesin di gedung saya tidak dijamin PAR jika rusak secara internal?',
    answer: 'Karena PAR adalah polis properti yang dirancang untuk menjamin kerugian akibat peristiwa eksternal yang tiba-tiba dan tidak terduga. Kerusakan internal mesin (mechanical/electrical breakdown) dianggap sebagai risiko operasional yang harus dikelola secara terpisah melalui Machinery Breakdown Insurance. Logikanya: PAR menjamin risiko yang tidak bisa diprediksi; kerusakan mesin karena usia dan keausan bisa (dan harus) diantisipasi melalui maintenance rutin. Namun jika mesin rusak akibat kebakaran atau banjir yang dijamin PAR, maka ya — PAR menjaminnya.',
  },
  {
    question: 'Apakah PAR bisa mencakup kerugian usaha jika gedung rusak dan operasional berhenti?',
    answer: 'Tidak secara otomatis. PAR adalah polis kerusakan fisik (material damage). Untuk menjamin kerugian pendapatan/keuntungan yang hilang akibat gangguan operasional pasca kerusakan properti, Anda memerlukan polis Business Interruption Insurance (BI) — yang harus dibeli sebagai perluasan atau polis terpisah yang mengikuti PAR. BI secara teknis tidak bisa dibeli tanpa polis material damage induk yang aktif.',
  },
  {
    question: 'Berapa nilai pertanggungan yang benar untuk PAR?',
    answer: 'Nilai pertanggungan harus mencerminkan Nilai Penggantian Baru (Replacement Cost Value / RCV) — bukan nilai buku atau nilai pasar. RCV adalah biaya membangun kembali properti yang sama dengan spesifikasi dan material setara di lokasi yang sama pada saat klaim. Underinsurance (nilai pertanggungan di bawah RCV) akan memicu "rule of average" — klaim hanya dibayar secara proporsional. Contoh: properti senilai Rp 100 M diasuransikan Rp 60 M → klaim Rp 30 M hanya dibayar Rp 18 M.',
  },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
const jsonLdArticle = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Property All Risk (PAR): Panduan Lengkap Asuransi Properti Komersial & Gedung 2025', author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl }, publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/property-all-risk` }, inLanguage: 'id-ID', dateModified: '2025-05-01' };
const jsonLdBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Property All Risk', item: `${baseUrl}/property-all-risk` }] };

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function PropertyAllRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-slate-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-600">/</span>
              <span className="text-white font-medium">Property All Risk</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30">🏢 Properti Komersial & Gedung</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">All Risks — bukan Named Perils</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-indigo-500/30">Diawasi OJK</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">Property All Risk (PAR)</h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Satu kebakaran, satu pipa bocor, satu tabrakan kendaraan — aset properti senilai ratusan
              miliar rupiah bisa hancur dalam hitungan jam. Property All Risk adalah perlindungan
              komprehensif yang dirancang untuk pemilik gedung serius yang tidak mau mengambil
              risiko finansial dari peristiwa yang tidak bisa diprediksi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Property%20All%20Risk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/30">
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

              {/* Definisi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Property All Risk?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Property All Risk (PAR) adalah polis asuransi kerugian yang menjamin kerusakan fisik properti
                  komersial berdasarkan prinsip <em>all risks</em> — artinya semua risiko dijamin kecuali yang
                  secara eksplisit dikecualikan dalam polis. Ini berbeda mendasar dari Asuransi Kebakaran
                  berbasis PSAKI yang hanya menjamin risiko-risiko yang disebutkan secara spesifik.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Di Indonesia, polis PAR mengacu pada wording internasional (umumnya Munich Re atau Swiss Re)
                  yang telah mendapat persetujuan OJK, kemudian dilengkapi endorsement lokal sesuai karakteristik
                  risiko Indonesia (gempa, banjir, EQSHA, dll.). Polis ini diawasi berdasarkan{' '}
                  <strong>POJK No. 23 Tahun 2023</strong> tentang Produk Asuransi.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Premi Indikatif', val: '0,03% – 0,15%', sub: 'per tahun dari nilai properti', color: 'blue' },
                    { label: 'Nilai Pertanggungan', val: 'Replacement Cost', sub: 'bukan nilai buku atau pasar', color: 'green' },
                    { label: 'Cocok untuk', val: 'Gedung, Hotel, Mall, RS', sub: 'properti komersial & institusional', color: 'purple' },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-xl p-4 text-center border ${s.color === 'blue' ? 'bg-blue-50 border-blue-100' : s.color === 'green' ? 'bg-green-50 border-green-100' : 'bg-purple-50 border-purple-100'}`}>
                      <p className={`text-xs font-semibold mb-1 ${s.color === 'blue' ? 'text-blue-500' : s.color === 'green' ? 'text-green-500' : 'text-purple-500'}`}>{s.label}</p>
                      <p className={`text-lg font-black ${s.color === 'blue' ? 'text-blue-800' : s.color === 'green' ? 'text-green-800' : 'text-purple-800'}`}>{s.val}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Objek yang Ditanggung */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Objek yang Dapat Diasuransikan</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {objekTertanggung.map((obj) => (
                    <div key={obj.kategori} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-2xl flex-shrink-0">{obj.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{obj.kategori}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{obj.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PAR vs Kebakaran */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">PAR vs Asuransi Kebakaran (PSAKI): Perbandingan Lengkap</h2>
                <p className="text-slate-600 text-sm mb-5">Banyak pemilik gedung masih menggunakan polis kebakaran PSAKI standar padahal PAR memberikan perlindungan yang jauh lebih komprehensif dengan selisih premi yang relatif kecil.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Aspek</th>
                        <th className="text-left p-3 bg-blue-800">Property All Risk</th>
                        <th className="text-left p-3 rounded-tr-lg">Asuransi Kebakaran (PSAKI)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parVsKebakaran.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.aspek}</td>
                          <td className="p-3 text-slate-700 bg-blue-50/30">{row.par}</td>
                          <td className="p-3 text-slate-700">{row.kebakaran}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Exclusions — terutama mesin */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Pengecualian Penting PAR yang Wajib Dipahami</h2>
                <p className="text-slate-600 text-sm mb-5">Pahami ini sebelum membeli — khususnya pengecualian mesin yang sering menjadi sumber kejutan saat klaim.</p>
                <div className="space-y-4">
                  {exclusionsKritis.map((exc, i) => (
                    <div key={i} className={`rounded-xl border p-5 ${exc.urgent ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                      <p className={`font-bold text-sm mb-2 ${exc.urgent ? 'text-red-800' : 'text-slate-800'}`}>{exc.exclusion}</p>
                      <p className={`text-sm leading-relaxed mb-3 ${exc.urgent ? 'text-red-700' : 'text-slate-600'}`}>{exc.penjelasan}</p>
                      <div className={`rounded-lg p-3 ${exc.urgent ? 'bg-amber-50 border border-amber-200' : 'bg-blue-50 border border-blue-100'}`}>
                        <p className={`text-xs font-semibold mb-1 ${exc.urgent ? 'text-amber-800' : 'text-blue-700'}`}>💡 Solusi</p>
                        <p className={`text-xs ${exc.urgent ? 'text-amber-700' : 'text-blue-600'}`}>{exc.solusi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bridge to MLOP — tactical cross-sell */}
              <section className="bg-gradient-to-br from-orange-900 to-amber-900 rounded-2xl p-7 text-white">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">⚙️</span>
                  <div>
                    <p className="text-xs font-semibold text-orange-300 mb-1">GAP KRITIS YANG SERING DIABAIKAN</p>
                    <h3 className="text-xl font-bold mb-2">PAR Tidak Menjamin Kerusakan Internal Mesin — Ini Solusinya</h3>
                    <p className="text-orange-200 text-sm leading-relaxed mb-4">
                      Bayangkan: chiller utama gedung Anda rusak total karena kegagalan kompressor internal —
                      bukan karena kebakaran atau banjir. Biaya perbaikan Rp 2–5 miliar. PAR tidak akan
                      membayar sepeser pun karena ini adalah pengecualian standar.
                    </p>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      Yang dibutuhkan adalah paket proteksi dua lapis: <strong>Machinery Breakdown (MB)</strong>{' '}
                      untuk biaya perbaikan/penggantian mesin, dan <strong>Machinery Loss of Profit (MLOP)</strong>{' '}
                      untuk kerugian pendapatan selama mesin tidak beroperasi. Keduanya adalah polis terpisah
                      yang saling melengkapi PAR.
                    </p>
                    <Link
                      href="/machinery-loss-of-profit"
                      className="inline-flex items-center gap-2 bg-white text-orange-900 hover:bg-orange-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                    >
                      Pelajari Machinery Loss of Profit (MLOP) →
                    </Link>
                  </div>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi PAR per Jenis Properti</h2>
                <p className="text-slate-600 text-sm mb-5">Rate adalah indikatif pasar — rate aktual tergantung konstruksi bangunan, lokasi (zona banjir/gempa), sistem proteksi kebakaran, dan riwayat klaim.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-slate-800 text-white"><th className="text-left p-3 rounded-tl-lg">Jenis Properti</th><th className="text-right p-3">Nilai Properti</th><th className="text-right p-3">Rate</th><th className="text-right p-3 rounded-tr-lg">Premi/Tahun</th></tr></thead>
                    <tbody>
                      {simulasiPremi.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.objek}</td>
                          <td className="p-3 text-right font-mono text-slate-600">{row.nilaiProperti}</td>
                          <td className="p-3 text-right font-mono text-blue-600">{row.rate}</td>
                          <td className="p-3 text-right font-mono font-bold text-slate-800">{row.premiTahunan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Simulasi ilustratif. Premi aktual tergantung survei risiko dan underwriter. Hubungi Rio untuk kalkulasi berdasarkan properti Anda.</p>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Property All Risk</h2>
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
              <div className="bg-gradient-to-br from-slate-800 to-blue-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2">Hitung Premi PAR Properti Anda</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">Rio Mardiansyah membantu pemilik properti komersial menyusun struktur polis PAR yang optimal — termasuk endorsement EQSHA, banjir, dan kombinasi dengan Business Interruption.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Property%20All%20Risk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>

              {/* MLOP Cross-sell Sidebar */}
              <div className="bg-gradient-to-br from-orange-800 to-amber-900 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold text-orange-300 mb-1">⚙️ Pelengkap Wajib PAR</p>
                <h3 className="font-bold text-lg mb-2">Machinery Loss of Profit</h3>
                <p className="text-sm text-orange-200 mb-4 leading-relaxed">Jika mesin utama gedung rusak, berapa kerugian pendapatan harian Anda? MLOP menjamin kerugian itu — yang PAR tidak bisa lakukan.</p>
                <Link href="/machinery-loss-of-profit" className="inline-block w-full text-center bg-white text-orange-900 hover:bg-orange-50 px-4 py-2.5 rounded-xl font-bold text-sm transition-all">Pelajari MLOP →</Link>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Lini Properti & Bisnis</h3>
                <div className="space-y-2">
                  {[
                    { href: '/industrial-all-risk', label: 'Industrial All Risk', sub: 'Pabrik & fasilitas produksi' },
                    { href: '/business-interruption', label: 'Business Interruption', sub: 'Kerugian pendapatan pasca klaim' },
                    { href: '/machinery-loss-of-profit', label: 'Machinery Loss of Profit', sub: 'Kerugian akibat mesin rusak' },
                    { href: '/asuransi-engineering', label: 'Asuransi Engineering', sub: 'CAR, EAR, Machinery Breakdown' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{link.label}</p><p className="text-xs text-slate-500">{link.sub}</p></div>
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
