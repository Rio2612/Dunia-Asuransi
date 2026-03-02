import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine Insurance | Perlindungan Risiko Pengangkutan & Maritim | Dunia Asuransi',
  description: 'Marine Insurance memberikan perlindungan terhadap risiko pengangkutan laut, kapal, dan aktivitas maritim. Termasuk Marine Cargo, Hull & Machinery, Freight Insurance, dan P&I.',
  keywords: 'Marine Insurance, Asuransi Pengangkutan, Asuransi Kapal, Marine Cargo, Hull and Machinery, Freight Insurance, P&I Insurance, asuransi pelayaran, asuransi maritim',
  openGraph: {
    title: 'Marine Insurance | Perlindungan Risiko Pengangkutan & Maritim',
    description: 'Perlindungan risiko pengangkutan barang, kapal, dan aktivitas maritim.',
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Marine Insurance?',
    answer: 'Marine Insurance adalah cabang asuransi yang memberikan perlindungan terhadap risiko kerusakan atau kehilangan yang terjadi selama pengangkutan laut dan aktivitas maritim. Asuransi ini mencakup perlindungan untuk barang (cargo), kapal (hull & machinery), pendapatan angkut (freight), dan tanggung jawab hukum (P&I).'
  },
  {
    question: 'Apa saja jenis-jenis Marine Insurance?',
    answer: 'Jenis-jenis Marine Insurance meliputi: Marine Cargo Insurance (perlindungan barang), Hull & Machinery Insurance (perlindungan kapal dan mesin), Freight Insurance (perlindungan pendapatan angkut), dan Protection & Indemnity / P&I (tanggung jawab hukum). Masing-masing memiliki cakupan dan fungsi yang berbeda namun saling melengkapi.'
  },
  {
    question: 'Apakah Marine Insurance hanya untuk pengangkutan laut?',
    answer: 'Tidak sepenuhnya. Meski disebut Marine Insurance, polis seperti Marine Cargo Insurance dapat mencakup pengangkutan multimoda yaitu kombinasi laut, darat, dan udara. Prinsipnya adalah perlindungan dari gudang ke gudang (warehouse to warehouse) selama perjalanan distribusi barang.'
  },
  {
    question: 'Siapa yang membutuhkan Marine Insurance?',
    answer: 'Marine Insurance diperlukan oleh: importir dan eksportir, pemilik kapal dan operator pelayaran, freight forwarder dan shipping lines, perusahaan logistik dan distribusi, serta industri yang bergantung pada pengiriman barang melalui laut atau multimoda.'
  },
  {
    question: 'Bagaimana cara memilih Marine Insurance yang tepat?',
    answer: 'Pemilihan Marine Insurance yang tepat bergantung pada kebutuhan spesifik: untuk pemilik barang pilih Marine Cargo Insurance, untuk pemilik kapal kombinasikan Hull & Machinery dengan P&I, untuk operator pelayaran pertimbangkan Freight Insurance. Konsultasi dengan broker asuransi akan membantu menentukan polis yang sesuai dengan profil risiko bisnis Anda.'
  }
];

const marineProducts = [
  {
    title: 'Marine Cargo Insurance',
    description: 'Perlindungan barang selama pengangkutan laut, darat, dan udara. Tersedia dalam berbagai klausula ICC A, B, C.',
    href: '/asuransi-kargo',
    icon: '📦',
    color: 'blue'
  },
  {
    title: 'Hull & Machinery Insurance',
    description: 'Perlindungan kerusakan fisik kapal dan mesin akibat kecelakaan laut, tabrakan, atau risiko operasional.',
    href: '/hull-machinery-insurance',
    icon: '🚢',
    color: 'cyan'
  },
  {
    title: 'Freight Insurance',
    description: 'Perlindungan pendapatan angkut dari risiko kehilangan akibat kecelakaan kapal atau kerusakan muatan.',
    href: '/freight-insurance',
    icon: '💰',
    color: 'indigo'
  },
  {
    title: 'Protection & Indemnity',
    description: 'Asuransi tanggung jawab hukum pemilik kapal terhadap pihak ketiga, crew, dan pencemaran laut.',
    href: '/protection-indemnity',
    icon: '🛡️',
    color: 'purple'
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
  "headline": "Marine Insurance",
  "description": "Marine Insurance memberikan perlindungan terhadap risiko pengangkutan laut, kapal, dan aktivitas maritim.",
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

export default function MarineInsurancePage() {
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
              <span className="text-blue-300">Marine Insurance</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <span>⚓</span>
                <span>Pillar Page</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Marine Insurance
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Perlindungan komprehensif untuk risiko pengangkutan laut, kapal, dan aktivitas maritim. Solusi lengkap untuk industri pelayaran dan perdagangan internasional.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Marine%20Insurance%20untuk%20bisnis%20saya" 
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
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Aktivitas pengangkutan barang melalui laut dan operasional kapal memiliki risiko tinggi, mulai dari cuaca ekstrem, tabrakan kapal, kebakaran, hingga kehilangan muatan. Indonesia sebagai negara maritim dengan lebih dari 17.000 pulau memiliki aktivitas pelayaran yang sangat intensif.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Marine Insurance</strong> memberikan perlindungan terhadap risiko tersebut agar aktivitas perdagangan dan pelayaran tetap berjalan dengan aman dan terstruktur. Polis ini mencakup berbagai aspek mulai dari perlindungan barang, kapal, hingga tanggung jawab hukum.
                </p>
              </section>

              {/* Produk Marine Insurance */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Jenis-Jenis Marine Insurance
                </h2>
                
                <div className="grid gap-4">
                  {marineProducts.map((product, index) => (
                    <a 
                      key={index}
                      href={product.href} 
                      className="block p-5 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 rounded-xl transition group border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{product.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 text-lg mb-1">
                            {product.title}
                            <svg className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </h3>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Detail Setiap Jenis */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Penjelasan Lengkap</h2>
                
                {/* Marine Cargo */}
                <div className="mb-8 pb-8 border-b">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <span>📦</span> Marine Cargo Insurance
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Marine Cargo Insurance melindungi barang selama proses pengangkutan, baik melalui laut, darat, maupun udara (multimoda). Polis ini menggunakan standar Institute Cargo Clauses (ICC) dengan berbagai tingkat pertanggungan:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">A</span>
                      <span><strong>ICC A (All Risk)</strong> - Jaminan terluas untuk semua risiko</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xs font-bold flex-shrink-0">B</span>
                      <span><strong>ICC B</strong> - Jaminan menengah untuk risiko tertentu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold flex-shrink-0">C</span>
                      <span><strong>ICC C</strong> - Jaminan dasar untuk risiko besar</span>
                    </li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <a href="/asuransi-kargo" className="text-sm text-blue-600 hover:underline">Lihat versi general →</a>
                    <a href="/asuransi-kargo-batam" className="text-sm text-cyan-600 hover:underline">Lihat versi Batam →</a>
                  </div>
                </div>

                {/* Hull & Machinery */}
                <div className="mb-8 pb-8 border-b">
                  <h3 className="text-xl font-semibold text-cyan-800 mb-3 flex items-center gap-2">
                    <span>🚢</span> Hull & Machinery Insurance
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hull & Machinery Insurance memberikan perlindungan terhadap kerusakan fisik kapal dan mesin. Asuransi ini penting bagi pemilik kapal untuk melindungi asset mereka dari berbagai risiko laut seperti:
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tabrakan kapal
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kandas (stranding)
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kebakaran & ledakan
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kerusakan mesin
                    </div>
                  </div>
                  <a href="/hull-machinery-insurance" className="inline-block mt-4 text-sm text-cyan-600 hover:underline">Pelajari lebih lanjut →</a>
                </div>

                {/* Freight Insurance */}
                <div className="mb-8 pb-8 border-b">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                    <span>💰</span> Freight Insurance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Freight Insurance menjamin potensi kehilangan pendapatan angkut (freight) akibat kerusakan atau kecelakaan kapal. Polis ini penting bagi pemilik kapal dan operator pelayaran yang bisnisnya bergantung pada pendapatan freight dari jasa pengangkutan barang.
                  </p>
                  <a href="/freight-insurance" className="inline-block mt-4 text-sm text-indigo-600 hover:underline">Pelajari lebih lanjut →</a>
                </div>

                {/* P&I */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <span>🛡️</span> Protection & Indemnity (P&I)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    P&I Insurance menjamin tanggung jawab hukum pemilik kapal terhadap pihak ketiga. Cakupan meliputi:
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cedera awak kapal
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pencemaran laut
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kerusakan properti pihak ketiga
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wreck removal
                    </div>
                  </div>
                  <a href="/protection-indemnity" className="inline-block mt-4 text-sm text-purple-600 hover:underline">Pelajari lebih lanjut →</a>
                </div>
              </section>

              {/* Hubungan dengan Engineering */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Hubungan dengan Asuransi Engineering
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dalam proyek offshore, instalasi laut, atau pembangunan dermaga, Marine Insurance sering dikombinasikan dengan Asuransi Engineering untuk perlindungan yang komprehensif. Kombinasi ini mencakup baik risiko maritim maupun risiko konstruksi atau instalasi.
                </p>
                <a href="/asuransi-engineering" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
                  Lihat Asuransi Engineering →
                </a>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Konsultasi Marine Insurance</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Kami membantu penyusunan perlindungan maritim sesuai kebutuhan bisnis Anda. Pengalaman menangani berbagai jenis kapal dan pengiriman barang.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20Marine%20Insurance" 
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

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {marineProducts.map((product, index) => (
                    <a 
                      key={index}
                      href={product.href} 
                      className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group"
                    >
                      <span className="text-xl">{product.icon}</span>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{product.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Asuransi Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Asuransi Engineering</h4>
                    <p className="text-sm text-gray-500">CAR, EAR, Machinery Breakdown</p>
                  </a>
                  <a href="/asuransi-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Asuransi Liability</h4>
                    <p className="text-sm text-gray-500">Public, Product, Professional</p>
                  </a>
                  <a href="/surety-bond" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Surety Bond</h4>
                    <p className="text-sm text-gray-500">Bid, Performance, Maintenance</p>
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
