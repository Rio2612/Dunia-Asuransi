import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Freight Insurance | Perlindungan Pendapatan Angkut | Dunia Asuransi',
  description: 'Freight Insurance melindungi potensi kehilangan pendapatan angkut akibat kerusakan atau kecelakaan kapal. Perlindungan penting bagi pemilik kapal dan operator pelayaran.',
  keywords: 'freight insurance, asuransi freight, asuransi pendapatan angkut, asuransi marine, freight risk, pendapatan kapal, asuransi pelayaran',
  alternates: {
    canonical: `${baseUrl}/freight-insurance`,
  },
  openGraph: {
    title: 'Freight Insurance | Perlindungan Pendapatan Angkut',
    description: 'Freight Insurance melindungi potensi kehilangan pendapatan angkut akibat kerusakan atau kecelakaan kapal.',
    url: `${baseUrl}/freight-insurance`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Freight Insurance?',
    answer: 'Freight Insurance adalah jenis asuransi marine yang memberikan perlindungan terhadap kehilangan pendapatan angkut (freight) yang disebabkan oleh kecelakaan kapal, kerusakan muatan, atau kegagalan pengiriman. Asuransi ini penting bagi pemilik kapal, operator pelayaran, dan freight forwarder yang pendapatannya bergantung pada pengiriman barang.'
  },
  {
    question: 'Siapa yang membutuhkan Freight Insurance?',
    answer: 'Freight Insurance diperlukan oleh: pemilik kapal yang menerima pembayaran freight, operator pelayaran (shipping lines), freight forwarder dan NVOCC, perusahaan logistik, serta charterer yang bertanggung jawab atas pembayaran freight.'
  },
  {
    question: 'Apa perbedaan Freight Insurance dengan Marine Cargo Insurance?',
    answer: 'Marine Cargo Insurance melindungi pemilik barang (cargo owner) dari kerugian akibat kerusakan atau kehilangan muatan. Sedangkan Freight Insurance melindungi pendapatan jasa angkut (freight) yang diterima oleh pemilik kapal atau operator. Dengan kata lain, Cargo Insurance untuk pemilik barang, Freight Insurance untuk penyedia jasa angkut.'
  },
  {
    question: 'Kapan Freight Insurance dapat diklaim?',
    answer: 'Klaim Freight Insurance dapat diajukan ketika: kapal tidak dapat melanjutkan perjalanan akibat kecelakaan, muatan rusak sehingga freight tidak dibayar, kegagalan pengiriman akibat risiko pertanggungan, atau kapal kandas atau tenggelam sebelum mencapai tujuan.'
  },
  {
    question: 'Bagaimana cara menghitung nilai pertanggungan Freight Insurance?',
    answer: 'Nilai pertanggungan Freight Insurance umumnya dihitung berdasarkan: total pendapatan freight per perjalanan atau per periode, gross freight yang tercantum dalam kontrak pengangkutan, atau net freight setelah dikurangi biaya operasional. Premi ditentukan berdasarkan jenis kapal, rute pelayaran, dan riwayat klaim.'
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
  "headline": "Freight Insurance",
  "description": "Freight Insurance melindungi potensi kehilangan pendapatan angkut akibat kerusakan atau kecelakaan kapal.",
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

export default function FreightInsurancePage() {
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
              <span className="text-blue-300">Freight Insurance</span>
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
              Freight Insurance
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Perlindungan pendapatan angkut dari risiko kecelakaan kapal dan kerusakan muatan.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Freight%20Insurance%20untuk%20bisnis%20pelayaran%20saya" 
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
                  <strong>Freight Insurance</strong> memberikan perlindungan terhadap kehilangan pendapatan angkut yang disebabkan oleh kecelakaan kapal atau kerusakan muatan. Polis ini sangat penting bagi pemilik kapal dan operator pelayaran yang bisnisnya bergantung pada pendapatan freight.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dalam industri pelayaran, pendapatan dari jasa pengangkutan barang (freight) merupakan sumber penghasilan utama. Risiko kecelakaan, kandas, atau kerusakan muatan dapat mengakibatkan kehilangan pendapatan yang signifikan. Freight Insurance memberikan solusi untuk melindungi pendapatan tersebut.
                </p>
              </section>

              {/* Apa itu Freight Insurance */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Freight Insurance?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Freight Insurance adalah jenis asuransi marine yang dirancang khusus untuk melindungi pendapatan jasa angkut (freight) yang menjadi sumber penghasilan bagi pemilik kapal, operator pelayaran, dan freight forwarder. Asuransi ini memberikan kompensasi jika freight tidak dapat diterima akibat risiko yang dipertanggungkan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Berbeda dengan Marine Cargo Insurance yang melindungi pemilik barang, Freight Insurance fokus pada perlindungan pendapatan dari jasa pengangkutan. Polis ini sering dikombinasikan dengan Hull & Machinery Insurance untuk perlindungan komprehensif armada pelayaran.
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
                      <h3 className="font-medium text-gray-800">Kecelakaan Kapal</h3>
                      <p className="text-sm text-gray-600">Kapal mengalami kecelakaan sehingga tidak dapat menyelesaikan pengiriman</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kandas atau Tenggelam</h3>
                      <p className="text-sm text-gray-600">Kapal kandas atau tenggelam sebelum mencapai tujuan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kerusakan Muatan</h3>
                      <p className="text-sm text-gray-600">Muatan rusak sehingga freight tidak dibayar oleh shipper</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">General Average</h3>
                      <p className="text-sm text-gray-600">Pengorbanan untuk keselamatan bersama yang mempengaruhi freight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kegagalan Pengiriman</h3>
                      <p className="text-sm text-gray-600">Barang tidak sampai di tujuan akibat risiko pertanggungan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kebakaran & Ledakan</h3>
                      <p className="text-sm text-gray-600">Kerusakan akibat kebakaran atau ledakan di kapal</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Siapa yang Membutuhkan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Siapa yang Membutuhkan?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Pemilik Kapal</h3>
                    <p className="text-sm text-gray-600">Ship owner yang menerima pembayaran freight dari charterer atau shipper</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Operator Pelayaran</h3>
                    <p className="text-sm text-gray-600">Shipping lines yang mengoperasikan kapal untuk angkutan barang</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Freight Forwarder</h3>
                    <p className="text-sm text-gray-600">Perusahaan jasa pengurusan pengiriman barang dan NVOCC</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Charterer</h3>
                    <p className="text-sm text-gray-600">Time charterer atau voyage charterer yang bertanggung jawab atas freight</p>
                  </div>
                </div>
              </section>

              {/* Perbedaan dengan Cargo Insurance */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  Freight vs Cargo Insurance
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-700">Aspek</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Freight Insurance</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Cargo Insurance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Pihak Dilindungi</td>
                        <td className="p-3 text-gray-600">Pemilik kapal / Operator</td>
                        <td className="p-3 text-gray-600">Pemilik barang (Cargo Owner)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Objek Pertanggungan</td>
                        <td className="p-3 text-gray-600">Pendapatan jasa angkut</td>
                        <td className="p-3 text-gray-600">Barang / Muatan</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Manfaat</td>
                        <td className="p-3 text-gray-600">Ganti rugi freight tidak diterima</td>
                        <td className="p-3 text-gray-600">Ganti rugi kerusakan barang</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-700">Tujuan</td>
                        <td className="p-3 text-gray-600">Melindungi pendapatan</td>
                        <td className="p-3 text-gray-600">Melindungi asset barang</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <a href="/hull-machinery-insurance" className="block p-4 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition group border border-cyan-200">
                    <h3 className="font-medium text-cyan-800 group-hover:text-cyan-600">Hull & Machinery Insurance</h3>
                    <p className="text-sm text-gray-600">Asuransi kerusakan kapal dan mesin</p>
                  </a>
                  <a href="/asuransi-kargo-batam" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Marine Cargo Insurance</h3>
                    <p className="text-sm text-gray-600">Asuransi pengiriman barang</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Freight Insurance?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Konsultasikan kebutuhan perlindungan pendapatan freight untuk bisnis pelayaran Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Freight%20Insurance%20untuk%20bisnis%20pelayaran%20saya" 
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
                  <a href="/hull-machinery-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Hull & Machinery</h4>
                    <p className="text-sm text-gray-500">Asuransi kerusakan kapal</p>
                  </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
