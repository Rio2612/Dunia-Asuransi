import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Freight Insurance (Liability Pengangkut) Indonesia: Panduan 2025',
  description:
    'Panduan lengkap Freight Insurance di Indonesia: Hague-Visby Rules, batas SDR, FIATA Standard Trading Conditions, perbedaan dengan asuransi kargo, regulasi PPJK Kemenkeu, simulasi limit & premi. Konsultasi: 0813-1556-592.',
  keywords: [
    'freight insurance indonesia',
    'asuransi freight forwarder',
    'asuransi tanggung jawab pengangkut',
    'freight liability insurance',
    'Hague-Visby Rules indonesia',
    'FIATA insurance',
    'asuransi EMKL',
    'asuransi logistik indonesia',
    'cargo liability insurance',
    'asuransi forwarder indonesia',
  ],
  alternates: { canonical: `${baseUrl}/freight-insurance` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Freight Insurance (Liability Pengangkut) Indonesia: Panduan 2025',
    description:
      'Panduan Freight Insurance Indonesia: Hague-Visby Rules, batas SDR, FIATA STC, perbedaan dengan kargo, simulasi limit & premi.',
    url: `${baseUrl}/freight-insurance`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Freight Insurance dan apa bedanya dengan Asuransi Kargo?',
    answer:
      'Ini adalah pertanyaan yang paling sering salah dipahami di industri logistik Indonesia. Asuransi Kargo melindungi pemilik barang (shipper/consignee) dari kerugian atas barang yang dikirim — polisnya dipegang shipper. Freight Insurance (atau Freight Liability Insurance) melindungi pengangkut/forwarder dari tuntutan hukum pemilik barang ketika barang yang dipercayakan rusak atau hilang dalam tanggung jawab mereka — polisnya dipegang forwarder/pengangkut. Satu kejadian (barang rusak) bisa memicu klaim di kedua jenis polis sekaligus dari pihak yang berbeda.',
  },
  {
    question: 'Apa itu Hague-Visby Rules dan bagaimana pengaruhnya terhadap tanggung jawab pengangkut laut?',
    answer:
      'Hague-Visby Rules adalah konvensi internasional yang mengatur tanggung jawab pengangkut dalam pengiriman laut. Hal terpenting yang wajib dipahami forwarder: Hague-Visby menetapkan BATAS MAKSIMUM tanggung jawab pengangkut sebesar SDR 2 per kilogram atau SDR 666,67 per unit pengiriman (mana yang lebih tinggi). SDR (Special Drawing Rights) adalah satuan moneter IMF — nilainya sekitar USD 1,3–1,4. Artinya untuk kontainer 20 ton berisi produk elektronik senilai USD 500.000, batas tanggung jawab Hague-Visby hanya USD 56.000 (40.000 kg × SDR 2 × kurs). Gap senilai USD 444.000 harus ditutupi oleh polis Freight Liability yang memadai.',
  },
  {
    question: 'Apa itu FIATA Standard Trading Conditions (STC) dan mengapa penting untuk forwarder?',
    answer:
      'FIATA (International Federation of Freight Forwarders Associations) Standard Trading Conditions adalah syarat dan ketentuan standar yang mengatur hubungan hukum antara freight forwarder dan kliennya. STC mendefinisikan: batas tanggung jawab forwarder (SDR 2/kg untuk kargo), pengecualian tanggung jawab (force majeure, inherent vice), waktu pengajuan klaim (biasanya 9–14 bulan), dan pilihan hukum yang berlaku. Forwarder yang menggunakan FIATA STC dalam kontraknya dan memiliki polis Freight Liability yang selaras dengan STC ini memiliki posisi hukum yang jauh lebih kuat saat menghadapi tuntutan klien.',
  },
  {
    question: 'Regulasi apa yang mengatur tanggung jawab freight forwarder di Indonesia?',
    answer:
      'Di Indonesia, tanggung jawab forwarder diatur oleh beberapa regulasi: (1) Peraturan Menteri Keuangan tentang PPJK (Pengusaha Pengurusan Jasa Kepabeanan) yang mengatur persyaratan dan tanggung jawab perusahaan jasa kepabeanan; (2) UU No. 17 Tahun 2008 tentang Pelayaran yang mengatur tanggung jawab pengangkut laut; (3) UU No. 22 Tahun 2009 tentang LLAJ untuk pengangkutan darat; (4) Regulasi Ditjen Perhubungan Udara untuk freight udara. Polis Freight Liability yang baik harus mengakomodasi seluruh moda transportasi yang digunakan.',
  },
  {
    question: 'Apa saja yang biasanya dikecualikan dari polis Freight Insurance?',
    answer:
      'Exclusion utama yang wajib dipahami forwarder: (1) Kerugian akibat inherent vice (sifat alami barang yang rentan rusak sendiri — buah busuk, karat logam, dll); (2) Kerugian karena kesalahan packing oleh shipper; (3) Kerugian akibat perang, kerusuhan, terorisme (kecuali dengan endorsement); (4) Tuntutan melebihi batas tanggung jawab yang disepakati (di atas SDR 2/kg); (5) Denda/penalty dan kerugian consequential (kehilangan pasar, denda keterlambatan); (6) Kerugian pada barang berbahaya (DG cargo) jika tidak dideklarasikan dengan benar.',
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
  headline: 'Asuransi Freight Insurance (Liability Pengangkut) Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan mendalam Freight Insurance Indonesia mencakup Hague-Visby Rules, batas SDR, FIATA STC, perbedaan kargo, regulasi PPJK, dan simulasi premi.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: {
    '@type': 'Organization',
    name: 'Dunia Asuransi',
    url: baseUrl,
    telephone: '+628131556592',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/freight-insurance` },
  inLanguage: 'id-ID',
  datePublished: '2025-05-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Marine Insurance', item: `${baseUrl}/marine-insurance` },
    { '@type': 'ListItem', position: 3, name: 'Freight Insurance', item: `${baseUrl}/freight-insurance` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function FreightInsurancePage() {
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
              <a href="/marine-insurance" className="hover:underline text-orange-300">Marine Insurance</a>
              <span className="text-slate-500">/</span>
              <span className="text-sky-300 font-medium">Freight Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-900 to-blue-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-400/30">
              🚢 Liability Pengangkut & Forwarder — Marine Specialty Lines
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Freight Insurance Indonesia
            </h1>
            <p className="text-lg text-sky-100 max-w-2xl leading-relaxed mb-6">
              Setiap kali Anda menandatangani Bill of Lading atau menerima barang dari shipper, Anda
              menanggung tanggung jawab hukum atas keselamatan kargo tersebut. Tapi batas tanggung jawab
              Hague-Visby hanya <strong>SDR 2 per kilogram</strong> — jauh di bawah nilai barang
              bernilai tinggi yang Anda angkut setiap hari.
            </p>
            <div className="bg-sky-900/50 border border-sky-700/50 rounded-xl px-5 py-3 inline-block mb-8">
              <p className="text-sky-200 text-sm">
                <strong>Contoh nyata:</strong> Kontainer 20 ton elektronik senilai USD 500.000 —
                batas Hague-Visby hanya USD ~56.000. Gap USD 444.000 ditanggung sendiri tanpa polis Freight Liability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Freight%20Insurance"
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

              {/* Definisi & Perbedaan dengan Kargo */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Freight Insurance vs Asuransi Kargo: Perbedaan yang Wajib Dipahami
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Ini adalah sumber kebingungan terbesar di industri logistik Indonesia. Dua produk ini
                  menjamin kepentingan yang berbeda atas kejadian yang sama.
                </p>

                {/* Analogi */}
                <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl p-5 mb-5">
                  <p className="text-sm font-bold text-sky-900 mb-2">💡 Analogi yang Mudah Dipahami</p>
                  <p className="text-sm text-sky-800 leading-relaxed">
                    Bayangkan Anda menitipkan koper berisi laptop ke petugas bagasi maskapai. Jika koper
                    rusak: <strong>Asuransi Kargo</strong> = polis yang Anda pegang sebagai pemilik laptop
                    (menjamin kerugian Anda). <strong>Freight Insurance</strong> = polis yang dipegang
                    maskapai untuk menanggung tuntutan hukum dari Anda sebagai penumpang yang kopernya rusak.
                    Satu kejadian, dua polis berbeda, dua pemilik berbeda.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Dimensi</th>
                        <th className="text-left p-3 bg-blue-900">📦 Asuransi Kargo</th>
                        <th className="text-left p-3 bg-sky-900 rounded-tr-lg">🚢 Freight Insurance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Pemilik Polis', 'Shipper / pemilik barang', 'Pengangkut / freight forwarder'],
                        ['Objek Perlindungan', 'Nilai barang yang dikirim', 'Tanggung jawab hukum pengangkut'],
                        ['Pemicu Klaim', 'Barang rusak/hilang saat transit', 'Shipper menuntut ganti rugi ke forwarder'],
                        ['Basis Klaim', 'Nilai barang aktual (invoice)', 'Batas tanggung jawab (SDR 2/kg atau kontrak)'],
                        ['Standar Acuan', 'Institute Cargo Clauses (ICC A/B/C)', 'Hague-Visby Rules, FIATA STC, CMR'],
                        ['Relevan untuk', 'Importir, eksportir, buyer/seller', 'Forwarder, EMKL, carrier, 3PL operator'],
                        ['Hubungan satu sama lain', 'Berdiri sendiri', 'Pelengkap — tidak bisa gantikan kargo'],
                      ].map(([dim, kargo, freight], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{dim}</td>
                          <td className="p-3 text-slate-700 border-l border-blue-100">{kargo}</td>
                          <td className="p-3 text-slate-700 border-l border-sky-100">{freight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Hague-Visby & Batas SDR */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hague-Visby Rules & Batas SDR: Mengapa Limit Konvensi Tidak Cukup
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  <strong>Hague-Visby Rules</strong> (Protocol Brussels 1968, amandemen dari Hague Rules 1924)
                  adalah konvensi internasional yang mengatur tanggung jawab pengangkut laut. Indonesia
                  mengadopsi prinsip-prinsipnya dalam UU No. 17 Tahun 2008 tentang Pelayaran.
                </p>

                {/* Batas SDR Visual */}
                <div className="bg-slate-900 text-white rounded-xl p-6 mb-5">
                  <p className="text-sky-300 text-xs font-semibold mb-3 uppercase tracking-wide">
                    Batas Tanggung Jawab Hague-Visby Rules
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sky-300 font-mono font-bold text-xl mb-1">SDR 2 / kg</p>
                      <p className="text-slate-300">Per kilogram berat kotor barang yang hilang/rusak</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sky-300 font-mono font-bold text-xl mb-1">SDR 666,67 / unit</p>
                      <p className="text-slate-300">Per unit pengiriman (package/container) — mana yang lebih tinggi yang digunakan</p>
                    </div>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-400 text-xs mb-3">
                      * 1 SDR ≈ USD 1,33 (nilai fluktuatif, ditetapkan IMF). Contoh penerapan:
                    </p>
                    <div className="space-y-3 text-sm">
                      {[
                        {
                          label: 'Skenario 1 — Elektronik Ringan',
                          berat: '500 kg',
                          nilai: 'USD 80.000',
                          batas: 'SDR 2 × 500 = SDR 1.000 ≈ USD 1.330',
                          gap: 'USD 78.670 tidak dijamin konvensi',
                          color: 'red',
                        },
                        {
                          label: 'Skenario 2 — Kontainer Mesin',
                          berat: '20.000 kg',
                          nilai: 'USD 500.000',
                          batas: 'SDR 2 × 20.000 = SDR 40.000 ≈ USD 53.200',
                          gap: 'USD 446.800 tidak dijamin konvensi',
                          color: 'red',
                        },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/5 rounded-lg p-3">
                          <p className="text-sky-300 font-semibold text-xs mb-2">{s.label}</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div><p className="text-slate-400">Berat</p><p className="text-white font-mono">{s.berat}</p></div>
                            <div><p className="text-slate-400">Nilai Barang</p><p className="text-white font-mono">{s.nilai}</p></div>
                            <div><p className="text-slate-400">Batas Hague-Visby</p><p className="text-green-400 font-mono">{s.batas}</p></div>
                            <div><p className="text-slate-400">Gap Tidak Terlindungi</p><p className="text-red-400 font-mono font-bold">{s.gap}</p></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <p className="font-bold text-orange-800 mb-2">⚠️ Implikasi Praktis untuk Forwarder Indonesia</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Sebagian besar freight forwarder dan EMKL di Indonesia beroperasi dengan perlindungan
                    tanggung jawab yang jauh di bawah nilai kargo yang mereka tangani setiap hari. Ketika
                    terjadi klaim total loss pada kargo bernilai tinggi, selisih antara batas Hague-Visby
                    dan nilai aktual kargo harus ditanggung dari kas perusahaan — dan ini bisa
                    menenggelamkan perusahaan logistik skala menengah dalam satu kejadian tunggal.
                  </p>
                </div>
              </section>

              {/* FIATA & Regulasi Lokal */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  FIATA & Regulasi Lokal: Kerangka Hukum Forwarder Indonesia
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="bg-slate-900 text-white rounded-xl p-5">
                    <p className="text-sky-300 text-xs font-semibold mb-3 uppercase tracking-wide">
                      FIATA Standard Trading Conditions (STC)
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                      Standar internasional yang ditetapkan oleh FIATA (International Federation of Freight
                      Forwarders Associations) untuk mengatur hubungan hukum antara forwarder dan kliennya.
                      Forwarder yang menggunakan FIATA STC dalam kontraknya mendapat perlindungan berupa:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                      {[
                        { title: 'Batas Tanggung Jawab', desc: 'SDR 2/kg — selaras dengan Hague-Visby untuk konsistensi hukum' },
                        { title: 'Exclusion Standar', desc: 'Force majeure, inherent vice, improper packing oleh shipper' },
                        { title: 'Waktu Klaim', desc: 'Tuntutan harus diajukan dalam 9 bulan sejak kejadian' },
                        { title: 'Pilihan Hukum', desc: 'Bisa ditentukan dalam kontrak — penting untuk transaksi lintas negara' },
                      ].map(item => (
                        <div key={item.title} className="bg-white/10 rounded-lg p-3">
                          <p className="text-sky-300 font-semibold mb-1">{item.title}</p>
                          <p className="text-slate-300">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                      <p className="font-bold text-blue-800 mb-3 text-sm">🏛️ Regulasi Lokal Indonesia</p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {[
                          { reg: 'UU No. 17/2008 — Pelayaran', desc: 'Tanggung jawab pengangkut laut, batas ganti rugi, prosedur klaim' },
                          { reg: 'UU No. 22/2009 — LLAJ', desc: 'Pengangkutan darat, tanggung jawab perusahaan angkutan umum barang' },
                          { reg: 'PMK tentang PPJK', desc: 'Syarat, kewajiban, dan tanggung jawab Pengusaha Pengurusan Jasa Kepabeanan' },
                          { reg: 'Peraturan Ditjen Perhubungan Udara', desc: 'Untuk airfreight — Montreal Convention 1999 dijadikan referensi' },
                        ].map(item => (
                          <li key={item.reg} className="border-l-2 border-blue-200 pl-3">
                            <p className="font-semibold text-blue-800">{item.reg}</p>
                            <p className="text-slate-600">{item.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
                      <p className="font-bold text-sky-800 mb-3 text-sm">📋 Dokumen Kritis untuk Klaim</p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {[
                          'Bill of Lading / Airwaybill / CMR yang ditandatangani',
                          'Packing list & commercial invoice barang',
                          'Bukti serah terima dari shipper (cargo receipt)',
                          'Laporan kerusakan / exception note saat penerimaan',
                          'Foto kondisi barang saat diterima & saat klaim',
                          'Survey report dari independent surveyor',
                          'Korespondensi dengan shipper terkait kondisi kargo',
                        ].map(d => (
                          <li key={d} className="flex items-start gap-1.5">
                            <svg className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Jenis Cakupan per Moda */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Cakupan per Moda Transportasi
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Polis Freight Liability yang komprehensif harus mencakup seluruh moda transportasi yang
                  digunakan dalam rantai pengiriman. Setiap moda memiliki konvensi internasional dan batas
                  tanggung jawab yang berbeda.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      moda: '🚢 Pengangkutan Laut',
                      konvensi: 'Hague-Visby Rules / Hamburg Rules',
                      batas: 'SDR 2/kg atau SDR 666,67/unit',
                      note: 'Dasar konvensi yang paling umum. Hamburg Rules (1978) memberi tanggung jawab lebih besar ke pengangkut — lebih banyak digunakan negara berkembang.',
                      color: 'blue',
                    },
                    {
                      moda: '✈️ Pengangkutan Udara',
                      konvensi: 'Montreal Convention 1999',
                      batas: 'SDR 22/kg',
                      note: 'Batas lebih tinggi dari laut. Montreal Convention menggantikan Warsaw Convention dan sudah diratifikasi mayoritas negara termasuk Indonesia.',
                      color: 'sky',
                    },
                    {
                      moda: '🚛 Pengangkutan Darat (Internasional)',
                      konvensi: 'CMR Convention',
                      batas: 'SDR 8,33/kg',
                      note: 'Convention on the Contract for the International Carriage of Goods by Road. Berlaku untuk pengangkutan darat lintas batas negara (misal: Indonesia–Malaysia via Kalimantan).',
                      color: 'green',
                    },
                    {
                      moda: '🚛 Pengangkutan Darat (Domestik)',
                      konvensi: 'UU No. 22/2009 (LLAJ)',
                      batas: 'Bervariasi, umumnya lebih rendah',
                      note: 'Regulasi domestik Indonesia. Batas tanggung jawab lebih rendah dan interpretasinya bisa bervariasi antar pengadilan daerah.',
                      color: 'amber',
                    },
                    {
                      moda: '🚢🚛 Multimodal (Combined)',
                      konvensi: 'UNCTAD/ICC Rules for Multimodal Transport',
                      batas: 'SDR 2/kg (fase laut) atau SDR 8,33/kg (fase darat)',
                      note: 'Untuk forwarder yang mengoperasikan door-to-door service melibatkan lebih dari satu moda — batas tanggung jawab ditentukan oleh fase mana kerusakan terjadi.',
                      color: 'purple',
                    },
                  ].map((item) => (
                    <div key={item.moda} className={`rounded-xl border p-5 ${
                      item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      item.color === 'sky' ? 'bg-sky-50 border-sky-200' :
                      item.color === 'green' ? 'bg-green-50 border-green-200' :
                      item.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                      'bg-purple-50 border-purple-200'
                    }`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                        <p className="font-bold text-slate-800">{item.moda}</p>
                        <div className="text-right">
                          <p className="text-xs text-slate-500">{item.konvensi}</p>
                          <p className={`font-mono font-bold text-sm ${
                            item.color === 'blue' ? 'text-blue-700' :
                            item.color === 'sky' ? 'text-sky-700' :
                            item.color === 'green' ? 'text-green-700' :
                            item.color === 'amber' ? 'text-amber-700' : 'text-purple-700'
                          }`}>{item.batas}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Simulasi Limit & Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Limit & Premi Freight Insurance</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Basis premi dihitung dari total throughput kargo tahunan (nilai kargo yang diangkut per
                  tahun) dan limit tanggung jawab maksimum yang dipilih per kejadian.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-sky-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Skala Operasional</th>
                        <th className="text-left p-3">Throughput/Tahun</th>
                        <th className="text-left p-3">Limit per Kejadian</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Forwarder Kecil (lokal)', 'Rp 10 – 50 Miliar', 'USD 250.000', 'Rp 15 – 40 Juta'],
                        ['Forwarder Menengah', 'Rp 50 – 200 Miliar', 'USD 500.000 – 1 Juta', 'Rp 40 – 120 Juta'],
                        ['EMKL / 3PL Regional', 'Rp 200 – 500 Miliar', 'USD 2 – 5 Juta', 'Rp 100 – 350 Juta'],
                        ['Forwarder Besar (nasional)', '> Rp 500 Miliar', 'USD 5 – 10 Juta', 'Rp 300 Juta – 1 Miliar'],
                        ['Shipping Line / Carrier', 'Negotiable', 'USD 10 Juta+', 'Negotiable'],
                      ].map(([skala, throughput, limit, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{skala}</td>
                          <td className="p-3 font-mono text-slate-700">{throughput}</td>
                          <td className="p-3 font-mono text-sky-700 font-bold">{limit}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  * Rate Freight Insurance sangat dipengaruhi oleh: komposisi jenis kargo (high-value
                  electronics vs bulk commodity), moda transportasi yang dominan, rute (domestik vs
                  internasional), rekam jejak klaim 3 tahun, dan apakah FIATA STC digunakan dalam kontrak
                  dengan klien. Limit dalam USD karena reasuransi umumnya di pasar internasional.
                </p>
              </section>

              {/* Koneksi ke H&M & Kargo */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Ekosistem Perlindungan Maritim Lengkap
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Freight Insurance adalah satu bagian dari ekosistem perlindungan maritim yang lebih luas.
                  Berikut peta kebutuhan asuransi berdasarkan peran Anda dalam rantai logistik:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      peran: 'Pemilik Kapal (Shipowner)',
                      butuh: ['Hull & Machinery — kerusakan fisik kapal', 'P&I Club — tanggung jawab maritim luas', 'Freight Insurance — jika juga sebagai carrier'],
                      href: '/hull-machinery-insurance',
                      label: 'Lihat H&M →',
                      color: 'cyan',
                    },
                    {
                      peran: 'Freight Forwarder / EMKL',
                      butuh: ['Freight Insurance — tanggung jawab atas kargo klien', 'Professional Indemnity — kesalahan operasional forwarder'],
                      href: null,
                      label: null,
                      color: 'sky',
                    },
                    {
                      peran: 'Shipper / Importir / Eksportir',
                      butuh: ['Asuransi Kargo — perlindungan nilai barang yang dikirim', 'Freight Insurance tidak relevan — itu tanggung jawab forwarder'],
                      href: '/asuransi-kargo',
                      label: 'Lihat Kargo →',
                      color: 'blue',
                    },
                  ].map((item) => (
                    <div key={item.peran} className={`rounded-xl border p-5 ${
                      item.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' :
                      item.color === 'sky' ? 'bg-sky-50 border-sky-200' :
                      'bg-blue-50 border-blue-200'
                    }`}>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <p className="font-bold text-slate-800">{item.peran}</p>
                        {item.href && (
                          <Link href={item.href} className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg ${
                            item.color === 'cyan' ? 'bg-cyan-700 text-white hover:bg-cyan-800' : 'bg-blue-700 text-white hover:bg-blue-800'
                          } transition`}>
                            {item.label}
                          </Link>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {item.butuh.map(b => (
                          <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                            <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4">
                <strong>Disclaimer:</strong> Informasi bersifat edukatif dan umum. Batas tanggung jawab
                aktual ditentukan oleh kontrak, konvensi yang berlaku, dan ketentuan polis. Untuk situasi
                hukum spesifik, konsultasikan dengan pengacara maritim.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-sky-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚢</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Konsultasi Freight Insurance</h3>
                <p className="text-sky-200 text-sm mb-5 leading-relaxed">
                  Berapa nilai kargo terbesar yang pernah Anda tangani? Apakah limit polis Anda sudah
                  menutup gap Hague-Visby? Rio Mardiansyah siap membantu kalkulasi.
                </p>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Freight%20Insurance"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"
                >
                  <WaIcon />WhatsApp Sekarang
                </a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-sky-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Marine Insurance Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/hull-machinery-insurance', label: 'Hull & Machinery', sub: 'Fisik kapal & mesin (ITC-H)' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Perlindungan nilai barang kiriman' },
                    { href: '/asuransi-kargo-batam', label: 'Asuransi Kargo Batam', sub: 'Kargo FTZ & pelabuhan Batam' },
                    { href: '/marine-insurance', label: 'Marine Insurance', sub: 'Overview lengkap asuransi maritim' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-sky-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-sky-600 text-sm">{l.label}</p>
                        <p className="text-xs text-slate-500">{l.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Produk Terkait</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-professional-indemnity', label: 'Professional Indemnity', sub: 'Kesalahan operasional forwarder' },
                    { href: '/asuransi-public-liability', label: 'Public Liability', sub: 'Tuntutan pihak ketiga umum' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-sky-50 rounded-xl transition group">
                      <div>
                        <p className="font-semibold text-slate-700 group-hover:text-sky-600 text-sm">{l.label}</p>
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
            <p className="mt-1">
              WhatsApp: 0813-1556-592 |{' '}
              <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
