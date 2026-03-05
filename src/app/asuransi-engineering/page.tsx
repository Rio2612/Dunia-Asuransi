import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Engineering | Perlindungan Risiko Proyek & Industri',
  description: 'Asuransi Engineering memberikan perlindungan terhadap risiko proyek konstruksi, pemasangan mesin, dan peralatan industri. Konsultasi kebutuhan proyek Anda bersama Dunia Asuransi.',
  keywords: 'Asuransi Engineering, Asuransi Proyek, Asuransi Konstruksi, Engineering Insurance, Asuransi CAR, Asuransi EAR, Machinery Breakdown, Boiler Insurance',
  alternates: {
    canonical: `${baseUrl}/asuransi-engineering`,
  },
  openGraph: {
    title: 'Asuransi Engineering | Dunia Asuransi',
    description: 'Perlindungan menyeluruh untuk proyek konstruksi, instalasi mesin, dan risiko industri melalui Asuransi Engineering.',
    url: `${baseUrl}/asuransi-engineering`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Engineering?',
    answer: 'Asuransi Engineering adalah perlindungan terhadap risiko kerusakan fisik dan tanggung jawab hukum selama proyek konstruksi, pemasangan mesin, dan operasional peralatan industri.'
  },
  {
    question: 'Apa saja jenis Asuransi Engineering?',
    answer: 'Jenisnya meliputi Construction All Risk (CAR), Erection All Risk (EAR), Machinery Breakdown, Boiler & Pressure Vessel, serta Electronic Equipment Insurance.'
  },
  {
    question: 'Siapa yang membutuhkan asuransi ini?',
    answer: 'Kontraktor, developer, pemilik proyek, perusahaan manufaktur, dan industri yang memiliki eksposur risiko teknis tinggi.'
  },
  {
    question: 'Bagaimana cara memilih polis yang tepat?',
    answer: 'Pemilihan polis harus disesuaikan dengan nilai proyek, durasi pekerjaan, jenis instalasi, serta kompleksitas teknis. Konsultasikan dengan agen asuransi untuk mendapatkan rekomendasi yang sesuai.'
  },
  {
    question: 'Apakah Asuransi Engineering wajib untuk proyek?',
    answer: 'Untuk proyek pemerintah dan proyek besar umumnya mensyaratkan asuransi engineering dalam kontrak. Meski tidak selalu wajib, memiliki asuransi ini sangat penting untuk melindungi investasi proyek.'
  }
];

const engineeringTypes = [
  {
    title: 'Construction All Risk (CAR)',
    description: 'Memberikan perlindungan terhadap risiko kerusakan proyek konstruksi selama masa pembangunan.',
    href: '/asuransi-car-indonesia',
    icon: '🏗️'
  },
  {
    title: 'Erection All Risk (EAR)',
    description: 'Menjamin risiko selama proses pemasangan mesin, instalasi pabrik, dan proyek mekanikal-elektrikal.',
    href: '/asuransi-ear',
    icon: '⚙️'
  },
  {
    title: 'Machinery Breakdown',
    description: 'Perlindungan terhadap kerusakan mendadak dan tidak terduga pada mesin industri.',
    href: '/asuransi-machinery-breakdown',
    icon: '🔧'
  },
  {
    title: 'Boiler & Pressure Vessel',
    description: 'Menjamin risiko ledakan atau kegagalan teknis pada ketel uap dan bejana tekan.',
    href: '#',
    icon: '🔥'
  },
  {
    title: 'Electronic Equipment',
    description: 'Perlindungan untuk perangkat elektronik seperti sistem kontrol, server, dan alat produksi digital.',
    href: '#',
    icon: '💻'
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
  "headline": "Asuransi Engineering",
  "description": "Panduan lengkap mengenai perlindungan risiko proyek dan industri melalui Asuransi Engineering.",
  "author": {
    "@type": "Person",
    "name": "Rio Mardiansyah"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "telephone": "0813-1556-592"
  },
  "inLanguage": "id-ID",
  "datePublished": "2024-01-01",
  "dateModified": "2024-12-01"
};

export default function EngineeringPage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <span className="text-slate-300">Asuransi Engineering</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-zinc-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Pilar Asuransi Engineering
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asuransi Engineering
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mb-4">
              Perlindungan menyeluruh untuk proyek konstruksi, instalasi mesin, dan risiko industri.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Engineering" 
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
                  Proyek konstruksi dan instalasi industri memiliki tingkat risiko yang kompleks. Kerusakan material, kesalahan instalasi, kegagalan teknis, hingga risiko tanggung jawab hukum dapat menimbulkan kerugian besar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-slate-800">Asuransi Engineering</strong> hadir sebagai solusi perlindungan menyeluruh untuk proyek dan aktivitas teknis berisiko tinggi.
                </p>
              </section>

              {/* Types of Engineering Insurance */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Jenis-Jenis Asuransi Engineering
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Asuransi Engineering mencakup berbagai jenis polis yang dirancang untuk kebutuhan spesifik proyek dan operasional industri. Masing-masing jenis memiliki cakupan yang berbeda sesuai dengan risiko yang ditangani.
                </p>
                
                <div className="space-y-4">
                  {engineeringTypes.map((type, index) => (
                    <a 
                      key={index}
                      href={type.href} 
                      className={`block p-5 rounded-lg border-2 transition group ${type.href !== '#' ? 'border-slate-200 hover:border-orange-400 hover:bg-orange-50' : 'border-slate-100 bg-slate-50'}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{type.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-orange-700 flex items-center gap-2">
                            {type.title}
                            {type.href !== '#' && (
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{type.description}</p>
                          {type.href === '#' && (
                            <span className="inline-block mt-2 text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">Segera tersedia</span>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Why Important */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Mengapa Asuransi Engineering Penting?
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Satu insiden dalam proyek dapat menyebabkan keterlambatan penyelesaian, penalti kontrak, dan kerugian finansial yang signifikan. Dengan struktur asuransi yang tepat, risiko tersebut dapat dialihkan sehingga stabilitas proyek tetap terjaga.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Pemilihan polis harus disesuaikan dengan nilai proyek, durasi pekerjaan, jenis instalasi, serta kompleksitas teknis. Setiap proyek memiliki karakteristik risiko yang unik sehingga memerlukan pendekatan yang berbeda dalam penentuan polis yang tepat.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-slate-50 to-zinc-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Tanpa Asuransi Engineering</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Kerugian ditanggung sendiri
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Risiko proyek terhenti
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Klaim pihak ketiga tidak tertangani
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Dengan Asuransi Engineering</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Risiko dialihkan ke insurer
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Proyek tetap berjalan
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Klaim ditangani profesional
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Konsultasi */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  Konsultasi Dunia Asuransi
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kami membantu Anda menyusun struktur perlindungan proyek dan risiko industri sesuai kebutuhan spesifik perusahaan Anda. Dengan pengalaman dalam berbagai proyek engineering, kami siap memberikan solusi terbaik untuk kebutuhan asuransi Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/628131556592?text=Halo,%20saya%20ingin%20konsultasi%20Asuransi%20Engineering" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp: 0813-1556-592
                  </a>
                  <a href="tel:08131556592" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Telepon Sekarang
                  </a>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-700 to-zinc-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Konsultasi Proyek Anda</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Kami membantu Anda menyusun struktur perlindungan proyek dan risiko industri sesuai kebutuhan spesifik perusahaan Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Engineering%20untuk%20proyek%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-slate-400 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Available Cluster Pages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jenis Asuransi Engineering</h3>
                <div className="space-y-3">
                  <a href="/asuransi-car-indonesia" className="block p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-orange-600">Construction All Risk (CAR)</h4>
                    <p className="text-sm text-gray-500">Asuransi proyek konstruksi</p>
                  </a>
                  <a href="/asuransi-ear" className="block p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-orange-600">Erection All Risk (EAR)</h4>
                    <p className="text-sm text-gray-500">Asuransi pemasangan mesin</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-orange-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Asuransi kerusakan mesin</p>
                  </a>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-liability" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab hukum</p>
                  </a>
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Kargo</h4>
                    <p className="text-sm text-gray-500">Pengiriman barang & logistik</p>
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
