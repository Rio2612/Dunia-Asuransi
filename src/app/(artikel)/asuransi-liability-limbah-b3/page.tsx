import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

// ─── META & SEO ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Asuransi Liability Limbah B3: Environmental Liability & Regulasi KLHK [2025]',
  description:
    'Asuransi Liability Limbah B3 — panduan mendalam tentang kewajiban hukum pengelola B3 berdasarkan UU PPLH 32/2009, PP 22/2021, PermenLHK 4/2021. Simulasi premi, cakupan remediasi, dan studi kasus industri manufaktur Indonesia.',
  keywords: [
    'asuransi liability limbah b3',
    'environmental liability insurance indonesia',
    'asuransi pencemaran lingkungan',
    'asuransi tanggung jawab lingkungan',
    'asuransi limbah berbahaya beracun',
    'pollution liability insurance',
    'asuransi b3 manufaktur',
    'regulasi asuransi limbah b3',
    'PermenLHK asuransi lingkungan',
    'PP 22 2021 jaminan lingkungan',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-liability-limbah-b3`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Liability Limbah B3: Environmental Liability & Regulasi KLHK 2025',
    description:
      'Panduan mendalam asuransi liability limbah B3 — regulasi KLHK, kewajiban hukum industri, cakupan remediasi, dan simulasi premi dari praktisi.',
    url: `${baseUrl}/asuransi-liability-limbah-b3`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const regulasiWajib = [
  {
    peraturan: 'UU No. 32 Tahun 2009 (PPLH)',
    pasal: 'Pasal 116–119',
    isi: 'Mengatur pertanggungjawaban mutlak (strict liability) bagi penanggungjawab usaha/kegiatan yang dampaknya sangat serius terhadap lingkungan — tanpa perlu membuktikan unsur kesalahan. Ini berarti meski kebocoran limbah B3 terjadi karena force majeure, penanggung jawab tetap bisa digugat secara perdata.',
    implikasiAsuransi: 'Strict liability membuat eksposur hukum tidak terbatas. Polis liability B3 menjadi satu-satunya perisai finansial yang efektif.',
  },
  {
    peraturan: 'PP No. 22 Tahun 2021',
    pasal: 'Pasal 55–61 (Jaminan Perlindungan Lingkungan Hidup)',
    isi: 'Mewajibkan setiap penanggung jawab usaha/kegiatan yang berisiko menimbulkan dampak lingkungan untuk menyediakan Dana Jaminan Pemulihan Lingkungan Hidup (DJPLH). Bentuk dana jaminan ini dapat berupa: tabungan pada bank, deposito, asuransi lingkungan, atau instrumen keuangan lain yang disetujui KLHK.',
    implikasiAsuransi: 'Asuransi Pollution Liability secara eksplisit diakui sebagai bentuk pemenuhan kewajiban DJPLH — bukan sekadar pilihan, melainkan alternatif wajib yang lebih efisien dari deposit tunai.',
  },
  {
    peraturan: 'PermenLHK No. 4 Tahun 2021',
    pasal: 'Lampiran I — Kegiatan yang Wajib DJPLH',
    isi: 'Menetapkan jenis kegiatan yang wajib menyediakan DJPLH, termasuk: pertambangan, industri kimia, pengolahan limbah B3, kegiatan berbasis energi fosil, dan kegiatan lain yang ditetapkan KLHK berdasarkan penilaian risiko. Besaran jaminan ditetapkan melalui persetujuan Lingkungan (Amdal/UKL-UPL).',
    implikasiAsuransi: 'Perusahaan dalam kategori ini yang memilih asuransi sebagai instrumen DJPLH harus menyertakan surat konfirmasi dari penanggung kepada KLHK/DLHK setempat.',
  },
  {
    peraturan: 'UU No. 18 Tahun 2008 (Pengelolaan Sampah)',
    pasal: 'Pasal 40 (Tuntutan Ganti Rugi)',
    isi: 'Menegaskan hak masyarakat untuk mengajukan gugatan kepada pengelola sampah/limbah jika terbukti menimbulkan gangguan dan/atau pencemaran lingkungan. Gugatan class action dari masyarakat sekitar pabrik semakin umum pasca 2020.',
    implikasiAsuransi: 'Class action dari ribuan warga sekitar fasilitas B3 dapat menghasilkan tuntutan ganti rugi yang jauh melampaui kemampuan finansial perusahaan — memperkuat urgensi polis dengan limit tinggi.',
  },
];

const targetIndustri = [
  {
    industri: 'Manufaktur Elektronik & Semikonduktor',
    ikon: '💻',
    limbahB3Tipikal: 'Timbal (Pb), cadmium, pelarut organik (solvent), asam etching',
    risikoPencemaran: 'Sangat Tinggi',
    wajibDJPLH: 'Ya — masuk kategori wajib Amdal',
    rekLimit: 'USD 2.000.000 – USD 10.000.000',
    noteKhusus: 'Industri ini sering menjadi target gugatan class action karena berlokasi dekat pemukiman',
  },
  {
    industri: 'Industri Kimia & Petrokimia',
    ikon: '⚗️',
    limbahB3Tipikal: 'Bahan kimia korosif, pelarut, katalis logam berat, residu proses',
    risikoPencemaran: 'Sangat Tinggi',
    wajibDJPLH: 'Ya — wajib Amdal + DJPLH',
    rekLimit: 'USD 5.000.000 – USD 25.000.000',
    noteKhusus: 'Peristiwa pencemaran kimia dapat menciptakan zona eksklusi bertahun-tahun — biaya remediasi ekstrem',
  },
  {
    industri: 'Rumah Sakit & Fasilitas Medis',
    ikon: '🏥',
    limbahB3Tipikal: 'Limbah medis infeksius, merkuri, bahan farmasi kedaluwarsa, bahan radioaktif',
    risikoPencemaran: 'Menengah–Tinggi',
    wajibDJPLH: 'Wajib UKL-UPL + pengelolaan B3 medis',
    rekLimit: 'USD 500.000 – USD 3.000.000',
    noteKhusus: 'Kesalahan pengelolaan limbah medis dapat berujung pencabutan izin RS selain tuntutan hukum',
  },
  {
    industri: 'Transporter Limbah B3 (Jasa Angkut)',
    ikon: '🚛',
    limbahB3Tipikal: 'Semua kategori limbah B3 yang diangkut untuk klien industri',
    risikoPencemaran: 'Tinggi — risiko selama transit',
    wajibDJPLH: 'Wajib izin transporter KLHK + jaminan',
    rekLimit: 'USD 1.000.000 – USD 5.000.000',
    noteKhusus: 'Polis harus mencakup "sudden & accidental pollution" selama pengangkutan — termasuk kecelakaan di jalan raya',
  },
  {
    industri: 'Pengolah & Penimbun Limbah B3',
    ikon: '🏭',
    limbahB3Tipikal: 'Semua kategori limbah B3 yang diterima dari pihak ketiga untuk diolah/ditimbun',
    risikoPencemaran: 'Tertinggi — konsentrasi limbah terbesar',
    wajibDJPLH: 'Ya — wajib Amdal + DJPLH nilai tertinggi',
    rekLimit: 'USD 5.000.000 – USD 50.000.000',
    noteKhusus: 'Jika fasilitas ini tutup/bangkrut tanpa remediasi tuntas, pemilik dapat digugat personal oleh KLHK',
  },
  {
    industri: 'Pertambangan Mineral & Batubara',
    ikon: '⛏️',
    limbahB3Tipikal: 'Air asam tambang (Acid Mine Drainage), tailings, merkuri (penambangan emas), residu sianida',
    risikoPencemaran: 'Sangat Tinggi — dampak multi-generasi',
    wajibDJPLH: 'Ya — DJPLH dan reklamasi pascatambang wajib',
    rekLimit: 'USD 10.000.000 – USD 100.000.000+',
    noteKhusus: 'Acid Mine Drainage adalah salah satu kasus lingkungan paling mahal dan paling sulit di-remediasi',
  },
];

const cakupanPolis = [
  {
    kategori: 'Biaya Remediasi Lingkungan',
    ikon: '🌱',
    isi: 'Biaya pembersihan, pemulihan, dan rehabilitasi lingkungan yang tercemar — termasuk tanah, air tanah (groundwater), badan air permukaan, dan ekosistem yang terdampak. Ini adalah komponen biaya terbesar dalam klaim environmental liability.',
    catatan: 'Remediasi groundwater yang tercemar logam berat bisa memakan biaya USD 1–10 juta dan berlangsung 5–20 tahun.',
  },
  {
    kategori: 'Tuntutan Ganti Rugi Pihak Ketiga',
    ikon: '⚖️',
    isi: 'Klaim perdata dari masyarakat, perusahaan tetangga, atau pemerintah yang mengalami kerugian akibat pencemaran — termasuk kerusakan properti, kerugian usaha, dan biaya kesehatan akibat paparan limbah B3.',
    catatan: 'Gugatan class action dari ribuan warga sekitar pabrik dapat menghasilkan tuntutan miliaran rupiah.',
  },
  {
    kategori: 'Cedera Badan Pihak Ketiga',
    ikon: '🏥',
    isi: 'Biaya pengobatan, santunan kecacatan, dan kompensasi kematian bagi pihak ketiga (bukan karyawan) yang mengalami dampak kesehatan akibat paparan limbah B3 dari operasional tertanggung.',
    catatan: 'Termasuk biaya pemantauan kesehatan jangka panjang bagi masyarakat yang terpapar.',
  },
  {
    kategori: 'Biaya Pembelaan Hukum',
    ikon: '📋',
    isi: 'Honorarium pengacara, biaya pengadilan, biaya saksi ahli, biaya investigasi independen, dan biaya lain yang timbul dalam proses pembelaan hukum — baik dalam perkara perdata maupun pidana lingkungan.',
    catatan: 'Defense costs dalam kasus lingkungan kompleks bisa mencapai USD 500.000 bahkan sebelum putusan.',
  },
  {
    kategori: 'Biaya Evakuasi Darurat',
    ikon: '🚨',
    isi: 'Biaya evakuasi, penampungan sementara, dan kebutuhan dasar bagi masyarakat yang harus diungsikan akibat insiden pencemaran akut — misalnya kebocoran gas beracun atau tumpahan bahan kimia.',
    catatan: 'Ini sering menjadi biaya "pertama" yang muncul dalam 24–48 jam pasca-insiden dan sangat mendesak.',
  },
  {
    kategori: 'Biaya Notifikasi Regulator',
    ikon: '📢',
    isi: 'Biaya konsultan hukum lingkungan, biaya pelaporan insiden kepada KLHK/DLHK/BPLHD, dan biaya pemenuhan kewajiban pelaporan lainnya yang disyaratkan oleh regulasi lingkungan.',
    catatan: 'Kegagalan melaporkan insiden dalam 24 jam dapat memperparah sanksi administratif dari KLHK.',
  },
];

const faqData = [
  {
    question: 'Apakah asuransi ini benar-benar diwajibkan oleh hukum Indonesia?',
    answer:
      'Ya — secara tidak langsung. PP No. 22 Tahun 2021 mewajibkan setiap penanggungjawab usaha berisiko tinggi untuk menyediakan Dana Jaminan Pemulihan Lingkungan Hidup (DJPLH). Bentuk DJPLH yang diakui KLHK antara lain: rekening tabungan yang diblokir, deposito berjangka, dan asuransi lingkungan hidup. Asuransi adalah opsi yang secara finansial jauh lebih efisien dibanding mengunci cash dalam deposito — perusahaan cukup membayar premi tahunan sebesar sebagian kecil persen dari nilai jaminan yang dibutuhkan.',
  },
  {
    question: 'Apa perbedaan "Sudden & Accidental Pollution" dengan "Gradual Pollution" dan mana yang dijamin?',
    answer:
      'Ini perbedaan paling kritis dalam asuransi lingkungan. Sudden & Accidental Pollution adalah pencemaran yang terjadi secara tiba-tiba dan tidak terduga — misalnya tumpahan bahan kimia akibat kecelakaan truk atau kebocoran tangki mendadak. Hampir semua polis environmental liability menjamin ini. Gradual Pollution adalah pencemaran yang terjadi perlahan-lahan selama bertahun-tahun — misalnya kebocoran kecil dari pipa tua yang merembes ke groundwater. Polis standar umumnya TIDAK menjamin gradual pollution kecuali ada endorsement khusus yang secara eksplisit memperluas jaminan ini. Pastikan Anda memahami batasan ini sebelum membeli polis.',
  },
  {
    question: 'Berapa kisaran premi asuransi liability limbah B3?',
    answer:
      'Rate premi sangat bervariasi berdasarkan jenis industri, jenis limbah, sistem manajemen lingkungan (apakah sudah ISO 14001), riwayat insiden, dan nilai limit yang diminta. Sebagai acuan pasar: untuk industri dengan profil risiko menengah (pabrik manufaktur umum), rate berkisar 0,5%–2,0% dari limit pertanggungan per tahun. Untuk industri risiko tinggi (kimia, pertambangan, pengolahan limbah B3 skala besar), rate bisa mencapai 3%–5% atau lebih. Perusahaan dengan sertifikasi ISO 14001 dan track record zero-incident biasanya mendapat rate lebih kompetitif.',
  },
  {
    question: 'Apakah pencemaran yang terjadi sebelum polis berlaku (pre-existing contamination) dijamin?',
    answer:
      'Tidak. Pre-existing contamination adalah pengecualian standar di hampir semua polis environmental liability. Polis ini menjamin pencemaran BARU yang terjadi selama periode pertanggungan. Oleh karena itu, penting untuk melakukan environmental baseline assessment sebelum mengajukan polis — untuk mendokumentasikan kondisi awal lingkungan dan membedakannya dari pencemaran baru yang dijamin. Beberapa underwriter juga mewajibkan Phase I atau Phase II Environmental Site Assessment sebagai persyaratan underwriting.',
  },
  {
    question: 'Bagaimana cara mengajukan klaim dan siapa yang bisa membantu proses klaim lingkungan?',
    answer:
      'Saat terjadi insiden pencemaran: (1) Segera laporkan kepada KLHK/DLHK sesuai kewajiban pelaporan dalam PP 22/2021 — kegagalan melaporkan dalam 24 jam dapat memperparah sanksi; (2) Segera hubungi penanggung/broker asuransi Anda SEBELUM melakukan tindakan remediasi apapun — biaya remediasi yang dilakukan tanpa koordinasi penanggung mungkin tidak diganti; (3) Hubungi konsultan lingkungan bersertifikat untuk melakukan emergency response dan assessment awal; (4) Jangan memberikan pernyataan kepada media atau pihak ketiga sebelum berkonsultasi dengan tim hukum yang ditunjuk penanggung.',
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
  headline: 'Asuransi Liability Limbah B3: Environmental Liability & Regulasi KLHK 2025',
  description:
    'Panduan mendalam asuransi liability limbah B3 — regulasi UU PPLH 32/2009, PP 22/2021, PermenLHK 4/2021, jenis industri wajib, cakupan remediasi lingkungan, dan simulasi premi.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-liability-limbah-b3` },
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
    { '@type': 'ListItem', position: 3, name: 'Liability Limbah B3', item: `${baseUrl}/asuransi-liability-limbah-b3` },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function LiabilityLimbahB3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-green-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-green-400">Beranda</a>
              <span className="text-green-700">/</span>
              <a href="/asuransi-liability" className="hover:underline text-green-400">Asuransi Liability</a>
              <span className="text-green-700">/</span>
              <span className="text-white font-medium">Limbah B3</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-green-950 via-emerald-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-500/30">
                🌿 Environmental Liability
              </span>
              <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-red-500/30">
                ⚠️ Strict Liability — UU PPLH 32/2009
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">
                📋 Wajib DJPLH — PP 22/2021
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Liability Limbah B3
            </h1>
            <p className="text-lg text-green-200 max-w-2xl leading-relaxed mb-8">
              Satu insiden kebocoran limbah B3 bisa menghasilkan kewajiban remediasi senilai puluhan
              miliar rupiah — ditambah gugatan perdata dari ribuan warga, denda administratif KLHK,
              dan potensi pidana lingkungan. Produk ini adalah satu-satunya perisai finansial yang efektif,
              dan kini secara eksplisit diakui hukum sebagai instrumen DJPLH.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability%20Limbah%20B3"
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

              {/* Mengapa Produk Ini Unik */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Mengapa Ini Produk Asuransi Paling Langka dan Paling Krusial?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Dari seluruh lini asuransi kerugian di Indonesia, <strong>Environmental Pollution Liability</strong>{' '}
                  atau Asuransi Tanggung Jawab Lingkungan B3 adalah produk dengan tingkat penetrasi terendah —
                  padahal eksposur risikonya bisa menjadi yang tertinggi bagi industri berat.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ada dua alasan utama rendahnya penetrasi ini: pertama, kesadaran industri yang masih rendah
                  tentang kewajiban hukum berbasis <em>strict liability</em> dalam UU PPLH; kedua, produk ini
                  jarang ditawarkan secara aktif oleh agen/broker asuransi karena kompleksitas underwriting-nya
                  yang tinggi. Hanya sedikit penanggung di Indonesia yang memiliki kapasitas dan expertise
                  untuk menjamin risiko ini dengan benar.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-5">
                  {[
                    { nilai: 'Rp 2–50 M+', label: 'Estimasi Biaya Remediasi per Insiden Skala Menengah', color: 'red' },
                    { nilai: 'PP 22/2021', label: 'Dasar Hukum Kewajiban DJPLH bagi Industri Berisiko', color: 'amber' },
                    { nilai: '< 5%', label: 'Estimasi Penetrasi Polis ini di Industri Manufaktur RI', color: 'green' },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl p-4 text-center ${
                      stat.color === 'red' ? 'bg-red-50 border border-red-100' :
                      stat.color === 'amber' ? 'bg-amber-50 border border-amber-100' :
                      'bg-green-50 border border-green-100'
                    }`}>
                      <p className={`text-2xl font-black mb-1 ${
                        stat.color === 'red' ? 'text-red-600' :
                        stat.color === 'amber' ? 'text-amber-600' :
                        'text-green-600'
                      }`}>{stat.nilai}</p>
                      <p className="text-xs text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Regulasi yang Mewajibkan */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Regulasi KLHK yang Mewajibkan atau Mendorong Asuransi Ini
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Berikut adalah landasan hukum yang harus dipahami oleh setiap pemilik usaha yang
                  menghasilkan, mengelola, atau mengangkut limbah B3 di Indonesia.
                </p>
                <div className="space-y-5">
                  {regulasiWajib.map((reg, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-green-900 text-white px-5 py-3 flex items-center gap-3">
                        <span className="font-bold text-sm">{reg.peraturan}</span>
                        <span className="text-xs text-green-300 bg-green-800 px-2 py-0.5 rounded-full">{reg.pasal}</span>
                      </div>
                      <div className="p-5">
                        <p className="text-slate-700 text-sm leading-relaxed mb-3">{reg.isi}</p>
                        <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-3">
                          <p className="text-xs font-semibold text-green-800 mb-1">💡 Implikasi bagi Asuransi</p>
                          <p className="text-xs text-green-700">{reg.implikasiAsuransi}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cakupan Polis */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Apa Saja yang Dijamin dalam Polis Liability Limbah B3?
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Polis Environmental Pollution Liability yang komprehensif mencakup enam kategori
                  perlindungan. Pastikan semua komponen ini tercantum sebelum polis ditandatangani.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cakupanPolis.map((item) => (
                    <div key={item.kategori} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{item.ikon}</span>
                        <p className="font-semibold text-slate-800 text-sm">{item.kategori}</p>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed mb-2">{item.isi}</p>
                      <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 italic">
                        ⚡ {item.catatan}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-800 mb-2">🚫 Yang Tidak Dijamin (Exclusions Standar)</p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>• <strong>Pre-existing contamination</strong> — pencemaran yang sudah ada sebelum polis berlaku</li>
                    <li>• <strong>Gradual pollution yang disengaja</strong> — pelanggaran prosedur yang dilakukan secara sistematis dan diketahui manajemen</li>
                    <li>• <strong>Nuclear/radioactive contamination</strong> — risiko nuklir (kecuali ada endorsement khusus untuk fasilitas medis)</li>
                    <li>• <strong>War & terrorism</strong> — pencemaran akibat konflik bersenjata</li>
                    <li>• <strong>Kerusakan properti tertanggung sendiri</strong> — hanya tuntutan pihak KETIGA yang dijamin</li>
                  </ul>
                </div>
              </section>

              {/* Target Industri */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Profil Risiko & Rekomendasi Limit per Sektor Industri
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Tabel ini membantu pemilik bisnis memahami seberapa besar eksposur risiko lingkungan
                  di sektor mereka dan berapa limit perlindungan yang wajar untuk diminati.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-green-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Sektor</th>
                        <th className="text-left p-3">Limbah B3 Tipikal</th>
                        <th className="text-left p-3">Level Risiko</th>
                        <th className="text-left p-3">Wajib DJPLH</th>
                        <th className="text-left p-3 rounded-tr-lg">Rec. Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {targetIndustri.map((ind, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{ind.ikon}</span>
                              <span className="font-semibold text-slate-800">{ind.industri}</span>
                            </div>
                            <p className="text-slate-400 text-xs mt-1 ml-7 italic">{ind.noteKhusus}</p>
                          </td>
                          <td className="p-3 text-slate-600">{ind.limbahB3Tipikal}</td>
                          <td className="p-3">
                            <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${
                              ind.risikoPencemaran.includes('Sangat') ? 'bg-red-100 text-red-700' :
                              ind.risikoPencemaran.includes('Tinggi') ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {ind.risikoPencemaran}
                            </span>
                          </td>
                          <td className="p-3 text-slate-600">{ind.wajibDJPLH}</td>
                          <td className="p-3 font-mono font-semibold text-green-800">{ind.rekLimit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Proses Mendapatkan Polis */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Proses Mendapatkan Polis Environmental Liability B3
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Underwriting asuransi ini jauh lebih kompleks dari asuransi kendaraan atau properti biasa.
                  Berikut tahapan yang umumnya dilalui:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      step: '01',
                      judul: 'Pengisian Proposal Form',
                      isi: 'Form khusus Environmental Liability yang mendetailkan jenis kegiatan, jenis dan volume limbah B3, sistem manajemen lingkungan (SML/ISO 14001), lokasi fasilitas, dan riwayat insiden.',
                    },
                    {
                      step: '02',
                      judul: 'Environmental Site Assessment (ESA)',
                      isi: 'Untuk limit besar, underwriter akan meminta Phase I ESA — review dokumen dan riwayat penggunaan lahan. Untuk limit sangat besar, bisa diminta Phase II ESA yang melibatkan pengambilan sampel tanah dan air.',
                    },
                    {
                      step: '03',
                      judul: 'Survey Lokasi oleh Risk Engineer',
                      isi: 'Inspektor/risk engineer dari penanggung akan mengunjungi fasilitas untuk menilai kondisi penyimpanan, sistem penanganan tumpahan, alat pelindung, dan kesiapan emergency response.',
                    },
                    {
                      step: '04',
                      judul: 'Penentuan Rate dan Term Polis',
                      isi: 'Berdasarkan hasil assessment, underwriter menetapkan rate premi, limit pertanggungan maksimum, deductible (risiko sendiri), dan kondisi khusus polis. Proses ini bisa memakan 2–4 minggu.',
                    },
                    {
                      step: '05',
                      judul: 'Penerbitan Surat Keterangan untuk KLHK',
                      isi: 'Setelah polis aktif, penanggung dapat menerbitkan surat konfirmasi asuransi yang dapat diserahkan kepada KLHK/DLHK sebagai bukti pemenuhan kewajiban DJPLH.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{item.judul}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.isi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pertanyaan Teknis yang Sering Ditanyakan
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
              <div className="bg-gradient-to-br from-green-900 to-emerald-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Environmental Liability</h3>
                <p className="text-green-200 text-sm mb-5 leading-relaxed">
                  Produk ini membutuhkan pendekatan yang sangat spesifik. Rio Mardiansyah memiliki
                  pengalaman dalam menyusun polis environmental liability untuk klien industri
                  manufaktur dan pengelola limbah.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability%20Limbah%20B3%20untuk%20perusahaan%20kami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3 shadow-lg shadow-green-900/30"
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
                <p className="text-xs text-green-500 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              {/* Regulasi Ringkas */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">📚 Regulasi Kunci KLHK</h3>
                <div className="space-y-2">
                  {[
                    { label: 'UU No. 32/2009 (PPLH)', sub: 'Strict liability pencemaran lingkungan' },
                    { label: 'PP No. 22/2021', sub: 'Kewajiban DJPLH & asuransi lingkungan' },
                    { label: 'PermenLHK No. 4/2021', sub: 'Daftar kegiatan wajib DJPLH' },
                    { label: 'UU No. 18/2008', sub: 'Pengelolaan sampah & tuntutan ganti rugi' },
                    { label: 'PP No. 101/2014', sub: 'Pengelolaan limbah B3 (teknis)' },
                  ].map((r) => (
                    <div key={r.label} className="p-3 bg-green-50 rounded-xl">
                      <p className="font-semibold text-green-800 text-sm">{r.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{r.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back to Liability */}
              <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-5">
                <p className="text-sm font-semibold text-indigo-800 mb-1">📌 Bagian dari Klaster Liability</p>
                <p className="text-xs text-slate-600 mb-3">
                  Halaman ini adalah sub-produk dari pilar Asuransi Liability. Pelajari jenis liability lainnya:
                </p>
                <Link
                  href="/asuransi-liability"
                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                >
                  ← Kembali ke Asuransi Liability
                </Link>
              </div>

              {/* Cross-sell Liability */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Liability Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-public-liability', label: 'Public Liability', icon: '🏢' },
                    { href: '/asuransi-product-liability', label: 'Product Liability', icon: '📦' },
                    { href: '/directors-officers-liability', label: 'Directors & Officers (D&O)', icon: '👔' },
                    { href: '/asuransi-professional-indemnity', label: 'Professional Indemnity', icon: '📋' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-green-50 rounded-xl transition group">
                      <span className="text-xl">{link.icon}</span>
                      <p className="font-semibold text-slate-700 group-hover:text-green-700 text-sm">{link.label}</p>
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
