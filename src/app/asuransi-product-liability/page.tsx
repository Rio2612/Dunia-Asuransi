import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Product Liability Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan lengkap Asuransi Product Liability di Indonesia: dasar hukum UU 8/1999, rantai tanggung jawab supply chain, endorsement recall produk, simulasi premi, dan tips dokumentasi agar klaim tidak ditolak. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi product liability',
    'asuransi tanggung jawab produk',
    'product liability indonesia',
    'asuransi produsen',
    'asuransi distributor produk',
    'recall produk asuransi',
    'asuransi cacat produk',
    'UU perlindungan konsumen asuransi',
    'product liability insurance indonesia',
    'asuransi importir produk',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-product-liability`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Product Liability Indonesia: Panduan Lengkap 2025',
    description: 'Panduan Product Liability: UU 8/1999, supply chain liability, recall endorsement, simulasi premi. Konsultasi profesional.',
    url: `${baseUrl}/asuransi-product-liability`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Product Liability?',
    answer:
      'Asuransi Product Liability menjamin tanggung jawab hukum produsen, distributor, importir, atau retailer atas klaim pihak ketiga (konsumen) akibat cedera badan, kematian, atau kerusakan properti yang disebabkan oleh produk yang cacat, berbahaya, atau tidak sesuai standar keamanan. Polis menanggung biaya ganti rugi kepada korban dan biaya pembelaan hukum tertanggung.',
  },
  {
    question: 'Siapa saja yang bisa dituntut dalam rantai supply chain produk?',
    answer:
      'Berdasarkan UU No. 8 Tahun 1999 tentang Perlindungan Konsumen, tanggung jawab produk tidak hanya pada produsen. Seluruh rantai supply chain bisa dituntut: (1) Produsen/pabrikan — sebagai pihak yang membuat produk; (2) Importir — sebagai pihak yang memasukkan produk ke Indonesia; (3) Distributor — jika memberikan garansi atas nama sendiri; (4) Retailer — dalam kasus tertentu jika produk dijual dalam kondisi yang tidak seharusnya. Masing-masing pihak di rantai ini idealnya memiliki polis Product Liability masing-masing.',
  },
  {
    question: 'Apa itu endorsement Product Recall dan kapan dibutuhkan?',
    answer:
      'Product Recall endorsement adalah perluasan polis yang menjamin biaya menarik kembali produk dari pasar sebelum produk tersebut menyebabkan cedera atau kerugian — penarikan bersifat preventif. Endorsement ini terpisah dari klaim cedera yang sudah terjadi. Dibutuhkan oleh: industri makanan & minuman, farmasi, otomotif, elektronik konsumen, dan produk bayi/anak. Biaya recall bisa sangat besar: biaya logistik penarikan, biaya komunikasi ke publik, biaya penggantian produk, dan biaya investigasi.',
  },
  {
    question: 'Bagaimana cara menentukan basis premi Product Liability?',
    answer:
      'Basis premi Product Liability umumnya dihitung sebagai persentase dari omzet/penjualan tahunan produk yang diasuransikan, bukan dari limit pertanggungan. Ini berbeda dengan Public Liability yang berbasis limit. Semakin tinggi omzet, semakin tinggi eksposur, semakin besar premi. Rate berkisar antara 0,05–0,50% dari omzet tergantung jenis produk (produk makanan bayi lebih mahal dari produk furnitur, misalnya).',
  },
  {
    question: 'Apa yang harus disiapkan perusahaan untuk meminimalkan risiko klaim Product Liability?',
    answer:
      'Lima langkah utama: (1) Dokumentasikan semua proses quality control (QC) dan quality assurance (QA) secara tertulis dan tersimpan minimal 5 tahun; (2) Pastikan label produk memuat informasi bahaya, petunjuk penggunaan, dan tanggal kadaluarsa yang jelas sesuai regulasi BPOM/BSN; (3) Simpan sampel produk dari setiap batch produksi untuk keperluan investigasi klaim di kemudian hari; (4) Respons cepat terhadap keluhan konsumen — penanganan yang buruk memperbesar potensi eskalasi ke tuntutan hukum; (5) Pastikan kontrak dengan supplier/sub-kontraktor memasukkan klausul tanggung jawab dan indemnity.',
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
  headline: 'Asuransi Product Liability Indonesia: Panduan Lengkap 2025',
  description: 'Panduan mendalam Product Liability mencakup UU 8/1999, supply chain, recall endorsement, dan simulasi premi.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-product-liability` },
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
    { '@type': 'ListItem', position: 3, name: 'Product Liability', item: `${baseUrl}/asuransi-product-liability` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ProductLiabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-500">/</span>
              <a href="/asuransi-liability" className="hover:underline text-orange-300">Asuransi Liability</a>
              <span className="text-slate-500">/</span>
              <span className="text-white font-medium">Product Liability</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-orange-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
              📦 Tanggung Jawab Produk — Kluster Liability
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Product Liability Indonesia
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl leading-relaxed mb-8">
              Satu produk cacat yang beredar di pasaran bisa memicu ratusan klaim konsumen sekaligus.
              UU Perlindungan Konsumen Indonesia menjangkau seluruh rantai supply chain — dari pabrikan
              hingga retailer. Pastikan bisnis Anda terlindungi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Product%20Liability" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"><WaIcon />Konsultasi via WA</a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* Definisi & Dasar Hukum */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dasar Hukum dan Mengapa Ini Serius</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Asuransi Product Liability</strong> menjamin tanggung jawab hukum Anda atas klaim konsumen
                  yang dirugikan oleh produk yang Anda produksi, impor, distribusikan, atau jual.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 mb-5">
                  <p className="text-sm font-bold text-amber-900 mb-2">📌 Dasar Hukum yang Wajib Dipahami</p>
                  <p className="text-sm text-amber-800 leading-relaxed mb-2">
                    <strong>UU No. 8 Tahun 1999 tentang Perlindungan Konsumen</strong> adalah landasan utama
                    kewajiban ini di Indonesia:
                  </p>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• <strong>Pasal 19:</strong> Pelaku usaha wajib memberikan ganti rugi atas kerusakan, pencemaran, dan/atau kerugian konsumen akibat mengonsumsi barang/jasa yang dihasilkan.</li>
                    <li>• <strong>Pasal 24:</strong> Jika pelaku usaha menjual produk kepada pelaku usaha lain yang kemudian menjualnya ke konsumen, maka yang bertanggung jawab adalah pelaku usaha yang membuat produk tersebut.</li>
                    <li>• <strong>Pasal 27:</strong> Pelaku usaha dibebaskan dari tanggung jawab hanya jika dapat membuktikan produk tidak ada cacat, atau kerugian akibat kesalahan konsumen sendiri.</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-sm font-bold text-red-800 mb-1">⚠️ Fakta yang Perlu Diketahui</p>
                  <p className="text-sm text-red-700 leading-relaxed">
                    Dalam hukum perlindungan konsumen Indonesia, berlaku prinsip <em>pembalikan beban pembuktian</em>:
                    pelaku usaha yang harus <strong>membuktikan bahwa produknya tidak cacat</strong>, bukan konsumen
                    yang membuktikan kecacatan produk. Ini adalah eksposur hukum yang signifikan bagi pelaku industri.
                  </p>
                </div>
              </section>

              {/* Supply Chain Liability */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Siapa Saja yang Bisa Dituntut? — Peta Supply Chain</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Banyak pelaku usaha tidak menyadari bahwa tanggung jawab produk bisa menjangkau seluruh
                  rantai pasok, bukan hanya produsen. Berikut peta eksposur yang perlu dipahami:
                </p>
                <div className="space-y-3">
                  {[
                    { role: '🏭 Produsen / Pabrikan', risk: 'Eksposur Tertinggi', color: 'red', desc: 'Bertanggung jawab penuh atas desain, bahan baku, dan proses produksi. Ini adalah titik eksposur terbesar dalam rantai supply chain.' },
                    { role: '✈️ Importir', risk: 'Eksposur Tinggi', color: 'orange', desc: 'Importir dianggap "produsen" di mata hukum Indonesia karena memasukkan produk ke pasar domestik. Tidak bisa berlindung di balik produsen luar negeri.' },
                    { role: '🚚 Distributor', risk: 'Eksposur Menengah', color: 'amber', desc: 'Bisa dituntut jika memberikan garansi atas nama sendiri, atau jika terbukti mengetahui kecacatan produk namun tetap mendistribusikannya.' },
                    { role: '🏪 Retailer / Toko', risk: 'Eksposur Terbatas', color: 'yellow', desc: 'Umumnya bisa meneruskan tuntutan ke distributor/importir, namun tetap bisa disertakan dalam gugatan — yang berarti tetap memerlukan biaya hukum.' },
                  ].map((item) => (
                    <div key={item.role} className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <p className="font-bold text-slate-800">{item.role}</p>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            item.color === 'red' ? 'bg-red-100 text-red-700' :
                            item.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                            item.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>{item.risk}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recall Endorsement */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Endorsement Product Recall: Perisai Sebelum Klaim Terjadi</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  <strong>Product Recall</strong> adalah tindakan menarik produk dari pasar sebelum menyebabkan
                  cedera — bersifat preventif. Endorsement ini menjamin biaya operasional recall yang bisa sangat
                  besar, khususnya untuk produk FMCG, makanan, farmasi, atau otomotif.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-bold text-slate-800 mb-3 text-sm">📦 Biaya yang Dijamin Endorsement Recall</p>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {['Biaya logistik penarikan produk dari rak', 'Biaya penghancuran / disposal produk', 'Biaya komunikasi & iklan penarikan ke publik', 'Biaya penggantian produk ke konsumen', 'Biaya investigasi penyebab kecacatan', 'Biaya konsultan krisis PR (dengan endorsement)'].map(b => (
                        <li key={b} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="font-bold text-amber-800 mb-3 text-sm">🏭 Industri Prioritas Recall Endorsement</p>
                    <ul className="space-y-1.5 text-sm text-amber-700">
                      {['Makanan & minuman (produk FMCG)', 'Farmasi & suplemen kesehatan', 'Produk bayi & anak-anak', 'Otomotif & spare part kendaraan', 'Elektronik konsumen (baterai, charger)', 'Peralatan rumah tangga berlistrik'].map(i => (
                        <li key={i} className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">▸</span>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Product Liability</h2>
                <p className="text-slate-600 text-sm mb-5">Basis premi dihitung dari <strong>omzet penjualan tahunan</strong> produk yang diasuransikan — bukan dari limit pertanggungan.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Produk</th>
                        <th className="text-left p-3">Omzet Tahunan</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Furnitur / Produk Kayu', 'Rp 10 Miliar', '0,05 – 0,08%', 'Rp 5 – 8 Juta'],
                        ['Tekstil / Pakaian', 'Rp 20 Miliar', '0,05 – 0,10%', 'Rp 10 – 20 Juta'],
                        ['Elektronik Konsumen', 'Rp 50 Miliar', '0,10 – 0,20%', 'Rp 50 – 100 Juta'],
                        ['Makanan & Minuman', 'Rp 30 Miliar', '0,15 – 0,30%', 'Rp 45 – 90 Juta'],
                        ['Farmasi / Suplemen', 'Rp 20 Miliar', '0,20 – 0,50%', 'Rp 40 – 100 Juta'],
                        ['Produk Bayi & Anak', 'Rp 15 Miliar', '0,25 – 0,50%', 'Rp 37,5 – 75 Juta'],
                      ].map(([produk, omzet, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{produk}</td>
                          <td className="p-3 font-mono text-slate-700">{omzet}</td>
                          <td className="p-3 font-mono text-slate-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Rate dipengaruhi oleh: kompleksitas produk, rekam jejak klaim, pasar ekspor/impor, sertifikasi SNI/BPOM/ISO, dan limit yang dipilih.</p>
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
              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4"><strong>Disclaimer:</strong> Informasi bersifat edukatif dan umum. Cakupan, limit, rate aktual ditentukan underwriter berdasarkan survei risiko dan profil produk.</p>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-950 to-orange-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">📦</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Product Liability</h3>
                <p className="text-amber-200 text-sm mb-5 leading-relaxed">Apakah polis Anda sudah mencakup seluruh rantai supply chain? Rio Mardiansyah siap membantu mereview struktur perlindungan produk Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Product%20Liability" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-amber-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <Link href="/asuransi-liability" className="flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Kembali ke Asuransi Liability
                </Link>
                <p className="text-xs text-amber-600 mt-1">Lihat semua jenis asuransi liability</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Liability Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-public-liability', label: 'Public Liability', sub: 'Tuntutan operasional bisnis' },
                    { href: '/asuransi-professional-indemnity', label: 'Professional Indemnity', sub: 'Tanggung jawab jasa profesi' },
                    { href: '/asuransi-liability-limbah-b3', label: 'Liability Limbah B3', sub: 'Tanggung jawab lingkungan' },
                    { href: '/directors-officers-liability', label: 'D&O Liability', sub: 'Direksi & komisaris' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-amber-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-amber-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
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
