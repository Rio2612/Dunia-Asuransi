import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Kargo | Marine Cargo Insurance | Dunia Asuransi',
  description: 'Asuransi Kargo atau Marine Cargo Insurance memberikan perlindungan terhadap risiko kerusakan dan kehilangan barang selama pengangkutan laut, darat, dan udara.',
  keywords: 'Asuransi Kargo, Marine Cargo Insurance, Asuransi Pengangkutan Barang, Cargo Insurance Indonesia, ICC A, ICC B, ICC C, asuransi pengiriman barang',
  alternates: {
    canonical: `${baseUrl}/asuransi-kargo`,
  },
  openGraph: {
    title: 'Asuransi Kargo | Marine Cargo Insurance',
    description: 'Perlindungan risiko pengiriman barang domestik maupun internasional melalui Marine Cargo Insurance.',
    url: `${baseUrl}/asuransi-kargo`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Kargo?',
    answer: 'Asuransi Kargo adalah perlindungan terhadap risiko kerusakan atau kehilangan barang selama proses pengangkutan melalui laut, darat, atau udara. Polis ini memberikan ganti rugi kepada pemilik barang apabila terjadi kerusakan atau kehilangan muatan akibat risiko yang dipertanggungkan dalam polis.'
  },
  {
    question: 'Apa saja risiko yang dijamin oleh Asuransi Kargo?',
    answer: 'Risiko yang dijamin dapat mencakup kebakaran, tabrakan, kapal tenggelam, pencurian, hingga kerusakan akibat kecelakaan selama pengiriman. Luas jaminan tergantung pada jenis klausula yang dipilih (ICC A, B, atau C). ICC A memberikan jaminan terluas (All Risk), sedangkan ICC C hanya menjamin risiko dasar.'
  },
  {
    question: 'Apakah Asuransi Kargo berlaku untuk pengiriman internasional?',
    answer: 'Ya, polis dapat disesuaikan untuk pengiriman domestik maupun internasional sesuai kebutuhan bisnis. Untuk pengiriman internasional, polis dapat mencakup perjalanan dari gudang ke gudang (warehouse to warehouse) dengan berbagai moda transportasi.'
  },
  {
    question: 'Apa perbedaan ICC A, ICC B, dan ICC C?',
    answer: 'ICC A (Institute Cargo Clauses A) memberikan jaminan All Risk atau paling luas. ICC B memberikan jaminan menengah untuk risiko tertentu seperti kebakaran, gempa bumi, dan karam. ICC C memberikan jaminan dasar hanya untuk risiko besar seperti karam, tabrakan, dan kehilangan total.'
  },
  {
    question: 'Bagaimana cara menghitung nilai pertanggungan Asuransi Kargo?',
    answer: 'Nilai pertanggungan biasanya dihitung dari nilai barang (invoice value) ditambah biaya angkut (freight), kemudian ditambahkan margin sekitar 10% untuk antisipasi keuntungan. Premi dihitung berdasarkan rate yang ditentukan sesuai jenis barang, rute pengiriman, dan klausula yang dipilih.'
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
  "headline": "Asuransi Kargo",
  "description": "Asuransi Kargo atau Marine Cargo Insurance memberikan perlindungan terhadap risiko kerusakan dan kehilangan barang selama pengangkutan laut, darat, dan udara.",
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
  "dateModified": "2024-12-01",
  "inLanguage": "id-ID"
};

export default function AsuransiKargoPage() {
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
              <span className="text-blue-300">Asuransi Kargo</span>
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
              Asuransi Kargo
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Marine Cargo Insurance untuk perlindungan barang selama pengangkutan laut, darat, dan udara.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Kargo%20untuk%20pengiriman%20barang%20saya" 
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
                  Dalam aktivitas perdagangan dan distribusi barang, risiko kerusakan atau kehilangan selama pengangkutan merupakan hal yang tidak dapat dihindari. Baik pengiriman melalui laut, darat, maupun udara, setiap moda transportasi memiliki potensi risikonya masing-masing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Asuransi Kargo</strong> atau <em>Marine Cargo Insurance</em> memberikan perlindungan terhadap risiko tersebut, baik untuk pengiriman domestik maupun internasional. Polis ini menjamin keamanan barang dari titik asal hingga sampai ke tujuan akhir.
                </p>
              </section>

              {/* Jenis Pertanggungan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Jenis Pertanggungan (Institute Cargo Clauses)
                </h2>
                
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">A</span>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-1">Institute Cargo Clauses (A) - All Risk</h3>
                        <p className="text-sm text-gray-600">Jaminan paling luas, menanggung semua risiko kerusakan kecuali yang secara eksplisit dikecualikan dalam polis. Cocok untuk barang bernilai tinggi atau rentan kerusakan.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">B</span>
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-1">Institute Cargo Clauses (B)</h3>
                        <p className="text-sm text-gray-600">Jaminan menengah, menanggung risiko tertentu seperti kebakaran, gempa bumi, letusan gunung berapi, karam, tabrakan, dan pencurian. Balance antara premi dan proteksi.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">C</span>
                      <div>
                        <h3 className="font-semibold text-red-800 mb-1">Institute Cargo Clauses (C)</h3>
                        <p className="text-sm text-gray-600">Jaminan dasar untuk risiko besar seperti karam, tabrakan, kehilangan total, dan kebakaran. Premi paling ekonomis untuk barang tahan lama.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">T</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Total Loss Only (TLO)</h3>
                        <p className="text-sm text-gray-600">Jaminan minimum, hanya menanggung kerugian total (seluruh barang hilang atau musnah). Premi terendah, cocok untuk barang dengan nilai rendah atau sangat tahan lama.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risiko yang Dijamin */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Risiko yang Umum Dijamin
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kebakaran</h3>
                      <p className="text-sm text-gray-600">Kerusakan atau kehilangan akibat kebakaran</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kapal Tenggelam atau Kandas</h3>
                      <p className="text-sm text-gray-600">Kehilangan akibat kapal karam atau stranded</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Tabrakan Alat Angkut</h3>
                      <p className="text-sm text-gray-600">Kerusakan akibat tabrakan kendaraan atau kapal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Pencurian</h3>
                      <p className="text-sm text-gray-600">Kehilangan akibat pencurian selama pengiriman</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kerusakan Bongkar Muat</h3>
                      <p className="text-sm text-gray-600">Kerusakan saat proses loading/unloading</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Bencana Alam</h3>
                      <p className="text-sm text-gray-600">Gempa bumi, badai, letusan gunung berapi</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cara Menghitung */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Cara Menghitung Nilai Pertanggungan
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nilai pertanggungan dalam Asuransi Kargo umumnya dihitung dengan formula standar industri:
                </p>
                
                <div className="bg-slate-800 text-white p-6 rounded-lg font-mono text-sm mb-4">
                  <p className="text-green-400 mb-2"># Formula Perhitungan</p>
                  <p>Nilai Pertanggungan = Nilai Invoice + Freight + (10% × Nilai Invoice)</p>
                  <p className="mt-2">Premi = Nilai Pertanggungan × Rate %</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Contoh Perhitungan:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Nilai Invoice: USD 100,000</li>
                    <li>• Freight: USD 5,000</li>
                    <li>• Margin 10%: USD 10,000</li>
                    <li>• <strong>Nilai Pertanggungan: USD 115,000</strong></li>
                    <li className="pt-2">• Jika Rate 0.15%, maka <strong>Premi: USD 172.50</strong></li>
                  </ul>
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
                    <p className="text-sm text-gray-600">Asuransi kerusakan kapal</p>
                  </a>
                  <a href="/freight-insurance" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Freight Insurance</h3>
                    <p className="text-sm text-gray-600">Perlindungan pendapatan angkut</p>
                  </a>
                  <a href="/protection-indemnity" className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition group border border-purple-200">
                    <h3 className="font-medium text-purple-800 group-hover:text-purple-600">Protection & Indemnity</h3>
                    <p className="text-sm text-gray-600">Asuransi tanggung jawab kapal</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Asuransi Kargo?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Konsultasikan kebutuhan perlindungan pengiriman barang Anda dengan tim kami. Kami bantu penyusunan polis sesuai nilai dan jenis barang.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Asuransi%20Kargo%20untuk%20pengiriman%20barang%20saya" 
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
                  <a href="/freight-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Freight Insurance</h4>
                    <p className="text-sm text-gray-500">Perlindungan pendapatan</p>
                  </a>
                  <a href="/protection-indemnity" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Protection & Indemnity</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab kapal</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Halaman utama marine</p>
                  </a>
                </div>
              </div>

              {/* Local Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Lokal</h3>
                <div className="space-y-3">
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-lg transition group border border-blue-100">
                    <h4 className="font-medium text-blue-800 group-hover:text-blue-600">Asuransi Kargo Batam</h4>
                    <p className="text-sm text-gray-500">Khusus wilayah Batam & sekitarnya</p>
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
