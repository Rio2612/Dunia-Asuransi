import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Hull & Machinery Insurance | Asuransi Kapal | Dunia Asuransi',
  description: 'Hull & Machinery Insurance memberikan perlindungan terhadap kerusakan fisik kapal dan mesin akibat kecelakaan laut, tabrakan, atau risiko operasional.',
  keywords: 'hull and machinery insurance, asuransi kapal, asuransi marine, hull insurance, machinery insurance, asuransi perkapalan, marine hull, asuransi kerusakan kapal',
  alternates: {
    canonical: `${baseUrl}/hull-machinery-insurance`,
  },
  openGraph: {
    title: 'Hull & Machinery Insurance | Asuransi Kapal',
    description: 'Hull & Machinery Insurance memberikan perlindungan terhadap kerusakan fisik kapal dan mesin akibat kecelakaan laut, tabrakan, atau risiko operasional.',
    url: `${baseUrl}/hull-machinery-insurance`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Hull & Machinery Insurance?',
    answer: 'Hull & Machinery Insurance adalah jenis asuransi marine yang memberikan perlindungan terhadap kerusakan fisik pada badan kapal (hull) dan mesin (machinery) akibat berbagai risiko seperti tabrakan, kandas, kebakaran, ledakan, atau bahaya laut lainnya. Asuransi ini sangat penting bagi pemilik kapal untuk melindungi aset mereka dari kerugian finansial yang besar.'
  },
  {
    question: 'Apa saja risiko yang dijamin oleh Hull & Machinery Insurance?',
    answer: 'Risiko yang dijamin meliputi: tabrakan kapal dengan kapal lain atau benda tetap, kandas di dasar laut atau karang, kebakaran dan ledakan di laut, kerusakan mesin akibat kecelakaan navigasi, badai dan cuaca ekstrem, pencurian atau perampokan di laut, serta biaya penyelamatan (salvage).'
  },
  {
    question: 'Apa perbedaan Hull Insurance dan Machinery Insurance?',
    answer: 'Hull Insurance fokus pada perlindungan badan kapal termasuk struktur, lambung, dan perlengkapan tetap. Sedangkan Machinery Insurance melindungi sistem mesin penggerak, generator, dan peralatan teknis kapal. Keduanya biasanya digabung dalam satu polis Hull & Machinery Insurance untuk perlindungan komprehensif.'
  },
  {
    question: 'Siapa yang membutuhkan Hull & Machinery Insurance?',
    answer: 'Asuransi ini diperlukan oleh: pemilik kapal dagang (cargo vessel), pemilik kapal tanker, operator kapal penumpang, perusahaan pelayaran, pemilik kapal ikan/trawler, serta pemilik kapal tongkang (barge) dan kapal tunda (tugboat).'
  },
  {
    question: 'Bagaimana proses pengajuan Hull & Machinery Insurance?',
    answer: 'Proses pengajuan meliputi: pengisian proposal form dengan data kapal lengkap, penyediaan dokumen teknis kapal (sertifikat, gambar teknik), survei kapal jika diperlukan, penilaian risiko (underwriting) oleh asuransi, penetapan premi dan syarat pertanggungan, hingga penerbitan polis.'
  }
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hull & Machinery Insurance",
  "description": "Hull & Machinery Insurance memberikan perlindungan terhadap kerusakan fisik kapal dan mesin akibat kecelakaan laut, tabrakan, atau risiko operasional.",
  "author": {
    "@type": "Person",
    "name": "Rio Mardiansyah"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "telephone": "0813-1556-592"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-12-01"
};

export default function HullMachineryInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/marine-insurance" className="hover:underline text-blue-200">Marine Insurance</a>
              <span>/</span>
              <span className="text-blue-300">Hull & Machinery Insurance</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/marine-insurance" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Marine Insurance
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hull & Machinery Insurance
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Asuransi kapal untuk perlindungan kerusakan fisik hull dan machinery akibat risiko laut.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Hull%20%26%20Machinery%20Insurance%20untuk%20kapal%20saya" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi Gratis
              </a>
              <a href="tel:08131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition border border-white/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Kapal dan peralatan mesin merupakan aset utama dalam industri pelayaran. Risiko tabrakan, kandas, kebakaran, hingga badai dapat menyebabkan kerugian finansial yang sangat besar bagi pemilik kapal.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Hull & Machinery Insurance</strong> memberikan perlindungan komprehensif terhadap kerusakan fisik kapal beserta sistem mesinnya, memberikan ketenangan pikiran bagi armada pelayaran Anda.
                </p>
              </section>

              {/* Apa itu Hull & Machinery */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Hull & Machinery Insurance?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Hull & Machinery Insurance</strong> adalah jenis asuransi marine yang memberikan perlindungan terhadap kerusakan fisik pada badan kapal (hull) dan mesin (machinery). Asuransi ini dirancang khusus untuk industri pelayaran yang memiliki risiko tinggi dalam operasional di laut.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Perlindungan ini mencakup kerusakan akibat kecelakaan navigasi, bahaya laut, kebakaran, ledakan, dan berbagai risiko lainnya yang dapat menyebabkan kerugian finansial signifikan bagi pemilik kapal.
                </p>
              </section>

              {/* Risiko yang Dijamin */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Risiko yang Dijamin
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Tabrakan Kapal</h3>
                      <p className="text-sm text-gray-600">Kerusakan akibat tabrakan dengan kapal lain atau benda tetap</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kandas (Stranding)</h3>
                      <p className="text-sm text-gray-600">Kapal terdampar di dasar laut, karang, atau perairan dangkal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kebakaran & Ledakan</h3>
                      <p className="text-sm text-gray-600">Kerusakan akibat kebakaran di laut atau ledakan di kapal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kerusakan Mesin</h3>
                      <p className="text-sm text-gray-600">Kerusakan mesin akibat kecelakaan navigasi atau operasional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Badai & Cuaca Ekstrem</h3>
                      <p className="text-sm text-gray-600">Kerusakan akibat gelombang tinggi, angin kencang, dan badai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Biaya Penyelamatan</h3>
                      <p className="text-sm text-gray-600">Biaya salvage dan general average dalam keadaan darurat</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Jenis Kapal */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Jenis Kapal yang Dapat Diasuransikan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Cargo Vessel</h3>
                    <p className="text-sm text-gray-600">Kapal kargo, kapal container, kapal bulk carrier untuk mengangkut barang</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Tanker</h3>
                    <p className="text-sm text-gray-600">Kapal tanker minyak, gas, chemical, dan produk cair lainnya</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Passenger Vessel</h3>
                    <p className="text-sm text-gray-600">Kapal penumpang, ferry, dan kapal cruise</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Tugboat & Barge</h3>
                    <p className="text-sm text-gray-600">Kapal tunda dan tongkang untuk operasional pelabuhan</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Fishing Vessel</h3>
                    <p className="text-sm text-gray-600">Kapal ikan, trawler, dan kapal penangkap ikan komersial</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Offshore Vessel</h3>
                    <p className="text-sm text-gray-600">Kapal offshore, supply vessel, dan offshore support</p>
                  </div>
                </div>
              </section>

              {/* Data yang Diperlukan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Data Kapal untuk Underwriting
                </h2>
                <p className="text-gray-600 mb-4">
                  Untuk pengajuan Hull & Machinery Insurance, diperlukan data berikut:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-700">Nama Kapal dan Bendera (Flag of Registry)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-700">Jenis Kapal dan Tahun Pembuatan</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-700">Spesifikasi Teknis (GT, NT, DWT, Main Engine)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-gray-700">Nilai Pertanggungan Kapal</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <span className="text-gray-700">Rute Pelayaran dan Area Operasional</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    <span className="text-gray-700">Sertifikat Kapal dan Class Society</span>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Pertanyaan Umum
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <details key={index} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-gray-800 hover:bg-gray-100 rounded-lg">
                        {faq.question}
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Related Links */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Halaman Terkait</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="/marine-insurance" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group border border-blue-200">
                    <h3 className="font-medium text-blue-800 group-hover:text-blue-600">Marine Insurance</h3>
                    <p className="text-sm text-gray-600">Halaman utama asuransi marine</p>
                  </a>
                  <a href="/asuransi-kargo-batam" className="block p-4 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition group border border-cyan-200">
                    <h3 className="font-medium text-cyan-800 group-hover:text-cyan-600">Marine Cargo Insurance</h3>
                    <p className="text-sm text-gray-600">Asuransi pengiriman barang</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Asuransi Kapal?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Konsultasikan kebutuhan Hull & Machinery Insurance untuk kapal Anda. Proses underwriting profesional.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Hull%20%26%20Machinery%20Insurance%20untuk%20kapal%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-blue-200 text-center">
                  Rio Mardiansyah - Insurance Broker
                </p>
              </div>

              {/* Marine Insurance Products */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Produk Marine Insurance</h3>
                <div className="space-y-3">
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Cargo Insurance</h4>
                    <p className="text-sm text-gray-500">Asuransi pengiriman barang</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Halaman utama marine</p>
                  </a>
                </div>
              </div>

              {/* Engineering Insurance */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Engineering</h3>
                <div className="space-y-3">
                  <a href="/asuransi-car-indonesia" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Construction All Risk</h4>
                    <p className="text-sm text-gray-500">Asuransi proyek konstruksi</p>
                  </a>
                  <a href="/asuransi-ear" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Erection All Risk</h4>
                    <p className="text-sm text-gray-500">Asuransi pemasangan mesin</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Asuransi kerusakan mesin</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
