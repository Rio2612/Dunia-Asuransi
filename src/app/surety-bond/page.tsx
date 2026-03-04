import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Surety Bond | Jaminan Proyek & Tender Resmi | Dunia Asuransi',
  description: 'Surety Bond memberikan jaminan atas kewajiban kontraktor dalam proyek dan tender. Tersedia Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan bersama Dunia Asuransi.',
  keywords: 'Surety Bond, Jaminan Tender, Jaminan Pelaksanaan, Jaminan Uang Muka, Jaminan Pemeliharaan, Bid Bond, Performance Bond, Bank Garansi, Jaminan Proyek',
  alternates: {
    canonical: `${baseUrl}/surety-bond`,
  },
  openGraph: {
    title: 'Surety Bond | Jaminan Proyek & Tender Resmi',
    description: 'Jaminan proyek resmi untuk tender dan kontrak konstruksi.',
    url: `${baseUrl}/surety-bond`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Surety Bond?',
    answer: 'Surety Bond adalah jaminan yang diterbitkan perusahaan asuransi atau penjamin untuk menjamin kewajiban kontraktor terhadap pemilik proyek. Jaminan ini memastikan bahwa kontraktor akan memenuhi kewajibannya sesuai dengan kontrak yang telah disepakati.'
  },
  {
    question: 'Apa saja jenis Surety Bond?',
    answer: 'Jenisnya meliputi Jaminan Penawaran (Bid Bond), Jaminan Pelaksanaan (Performance Bond), Jaminan Uang Muka (Advance Payment Bond), dan Jaminan Pemeliharaan (Maintenance Bond). Masing-masing memiliki fungsi spesifik dalam siklus proyek konstruksi.'
  },
  {
    question: 'Siapa yang membutuhkan Surety Bond?',
    answer: 'Kontraktor, supplier, dan penyedia jasa yang mengikuti tender atau mengerjakan proyek konstruksi membutuhkan Surety Bond. Pemilik proyek juga mewajibkan jaminan ini untuk melindungi kepentingannya.'
  },
  {
    question: 'Bagaimana cara mengajukan Surety Bond?',
    answer: 'Proses pengajuan meliputi pengumpulan dokumen persyaratan, evaluasi oleh penjamin, penerbitan polis, dan penandatanganan. Hubungi tim Dunia Asuransi untuk konsultasi dan proses yang lebih mudah.'
  },
  {
    question: 'Apa perbedaan Surety Bond dengan Bank Garansi?',
    answer: 'Surety Bond diterbitkan oleh perusahaan asuransi dengan proses yang umumnya lebih fleksibel dan membutuhkan collateral yang lebih ringan. Bank Garansi diterbitkan oleh bank dengan persyaratan agunan yang lebih ketat.'
  }
];

const suretyBondTypes = [
  {
    title: 'Jaminan Penawaran',
    subtitle: 'Bid Bond',
    description: 'Menjamin peserta tender tidak mengundurkan diri setelah ditetapkan sebagai pemenang lelang.',
    href: '/jaminan-penawaran',
    icon: '📋'
  },
  {
    title: 'Jaminan Pelaksanaan',
    subtitle: 'Performance Bond',
    description: 'Menjamin kontraktor melaksanakan pekerjaan sesuai dengan spesifikasi dan waktu kontrak.',
    href: '/jaminan-pelaksanaan',
    icon: '🏗️'
  },
  {
    title: 'Jaminan Uang Muka',
    subtitle: 'Advance Payment Bond',
    description: 'Menjamin pengembalian dana uang muka proyek sesuai dengan ketentuan kontrak.',
    href: '/jaminan-uang-muka',
    icon: '💰'
  },
  {
    title: 'Jaminan Pemeliharaan',
    subtitle: 'Maintenance Bond',
    description: 'Menjamin perbaikan atas kerusakan yang ditemukan selama masa pemeliharaan proyek.',
    href: '/jaminan-pemeliharaan',
    icon: '🔧'
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
  "headline": "Surety Bond | Jaminan Proyek & Tender Resmi",
  "description": "Surety Bond memberikan jaminan atas kewajiban kontraktor dalam proyek dan tender.",
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

export default function SuretyBondPage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-amber-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <span className="text-amber-300">Surety Bond</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
              </svg>
              Pilar Surety Bond
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Surety Bond
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-4">
              Jaminan Proyek & Tender Resmi
            </p>
            <p className="text-amber-200 max-w-3xl mb-8">
              Solusi jaminan profesional untuk memenuhi kewajiban kontrak proyek konstruksi dan pengadaan barang/jasa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Surety%20Bond%20untuk%20proyek" 
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
                  Dalam proyek konstruksi dan pengadaan barang/jasa, pemilik proyek membutuhkan jaminan bahwa kontraktor akan memenuhi kewajiban sesuai kontrak. Di sinilah peran <strong className="text-amber-700">Surety Bond</strong> menjadi sangat penting sebagai instrumen jaminan resmi.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Surety Bond adalah bentuk jaminan resmi yang diterbitkan perusahaan penjamin untuk memastikan kewajiban kontraktor dilaksanakan sesuai perjanjian. Jaminan ini melindungi kepentingan pemilik proyek dari risiko wanprestasi yang mungkin dilakukan oleh kontraktor.
                </p>
              </section>

              {/* Jenis-Jenis Surety Bond */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Jenis-Jenis Surety Bond
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Setiap jenis Surety Bond memiliki fungsi spesifik dalam siklus proyek konstruksi. Pemilihan jenis jaminan yang tepat disesuaikan dengan tahapan dan kebutuhan proyek.
                </p>
                
                <div className="space-y-4">
                  {suretyBondTypes.map((type, index) => (
                    <a 
                      key={index}
                      href={type.href}
                      className="block p-5 rounded-lg border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{type.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-amber-700 flex items-center gap-2">
                            {type.title}
                            <span className="text-sm font-normal text-amber-600">({type.subtitle})</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{type.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Hubungan dengan Asuransi Engineering */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Hubungan dengan Asuransi Engineering
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Surety Bond sering digunakan bersamaan dengan <strong>Asuransi Engineering</strong> dalam proyek konstruksi untuk memberikan perlindungan menyeluruh. Keduanya memiliki peran yang saling melengkapi dalam mengelola risiko proyek.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                    <h3 className="font-semibold text-amber-800 mb-2">Surety Bond</h3>
                    <p className="text-sm text-gray-600">Menjamin kewajiban kontraktor kepada pemilik proyek</p>
                    <ul className="text-sm text-gray-500 mt-2 space-y-1">
                      <li>• Fokus pada wanprestasi</li>
                      <li>• Perlindungan pihak ketiga</li>
                      <li>• Jaminan penyelesaian proyek</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Asuransi Engineering</h3>
                    <p className="text-sm text-gray-600">Melindungi kerusakan fisik proyek dan peralatan</p>
                    <ul className="text-sm text-gray-500 mt-2 space-y-1">
                      <li>• Fokus pada kerusakan fisik</li>
                      <li>• Perlindungan aset proyek</li>
                      <li>• Coverage risiko teknis</li>
                    </ul>
                  </div>
                </div>
                
                <a href="/asuransi-engineering" className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Lihat Asuransi Engineering →
                </a>
              </section>

              {/* Proses Pengajuan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Proses Pengajuan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Konsultasi</h3>
                      <p className="text-gray-600 text-sm">Hubungi tim kami untuk konsultasi kebutuhan jaminan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dokumen Persyaratan</h3>
                      <p className="text-gray-600 text-sm">Siapkan dokumen pendukung seperti dokumen tender, kontrak, dan lainnya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Evaluasi & Proses</h3>
                      <p className="text-gray-600 text-sm">Tim penjamin melakukan evaluasi dan proses penerbitan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Jaminan Terbit</h3>
                      <p className="text-gray-600 text-sm">Surety Bond diterbitkan dan siap digunakan untuk proyek</p>
                    </div>
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

              {/* Konsultasi */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  Konsultasi Dunia Asuransi
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kami membantu penerbitan Surety Bond secara resmi dan sesuai ketentuan proyek. Dengan pengalaman dalam berbagai proyek konstruksi dan tender, kami siap membantu Anda memenuhi persyaratan jaminan proyek dengan proses yang mudah dan kompetitif.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/628131556592?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20Surety%20Bond" 
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Surety Bond?</h3>
                <p className="text-amber-100 mb-4 text-sm">
                  Konsultasikan kebutuhan jaminan proyek Anda dengan tim kami. Proses cepat, kompetitif, dan resmi.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Surety%20Bond%20untuk%20proyek" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-amber-200 text-center">
                  Rio Mardiansyah - Insurance Broker
                </p>
              </div>

              {/* Jenis Surety Bond */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jenis Surety Bond</h3>
                <div className="space-y-3">
                  <a href="/jaminan-penawaran" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Jaminan Penawaran</h4>
                    <p className="text-sm text-gray-500">Bid Bond</p>
                  </a>
                  <a href="/jaminan-pelaksanaan" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Jaminan Pelaksanaan</h4>
                    <p className="text-sm text-gray-500">Performance Bond</p>
                  </a>
                  <a href="/jaminan-uang-muka" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Jaminan Uang Muka</h4>
                    <p className="text-sm text-gray-500">Advance Payment Bond</p>
                  </a>
                  <a href="/jaminan-pemeliharaan" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Jaminan Pemeliharaan</h4>
                    <p className="text-sm text-gray-500">Maintenance Bond</p>
                  </a>
                </div>
              </div>

              {/* Asuransi Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Engineering</h3>
                <div className="space-y-3">
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Engineering</h4>
                    <p className="text-sm text-gray-500">Perlindungan proyek konstruksi</p>
                  </a>
                  <a href="/asuransi-car-indonesia" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Construction All Risk</h4>
                    <p className="text-sm text-gray-500">Asuransi proyek konstruksi</p>
                  </a>
                  <a href="/asuransi-ear" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Erection All Risk</h4>
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
