import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Protection & Indemnity (P&I) | Asuransi Tanggung Jawab Kapal | Dunia Asuransi',
  description: 'Protection & Indemnity (P&I) memberikan perlindungan tanggung jawab hukum pemilik kapal terhadap pihak ketiga, termasuk cedera awak kapal, kerusakan properti, dan pencemaran laut.',
  keywords: 'protection and indemnity, P&I insurance, asuransi P&I, asuransi tanggung jawab kapal, marine liability, shipowner liability, asuransi marine, tanggung jawab pihak ketiga',
  alternates: {
    canonical: `${baseUrl}/protection-indemnity`,
  },
  openGraph: {
    title: 'Protection & Indemnity (P&I) | Asuransi Tanggung Jawab Kapal',
    description: 'P&I Insurance melindungi pemilik kapal terhadap tanggung jawab hukum kepada pihak ketiga.',
    url: `${baseUrl}/protection-indemnity`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Protection & Indemnity (P&I) Insurance?',
    answer: 'Protection & Indemnity (P&I) Insurance adalah jenis asuransi marine yang memberikan perlindungan terhadap tanggung jawab hukum (liability) pemilik kapal kepada pihak ketiga. Berbeda dengan Hull & Machinery yang melindungi kerusakan fisik kapal, P&I fokus pada tanggung jawab hukum seperti cedera awak kapal, kerusakan properti pihak lain, pencemaran lingkungan, dan liability lainnya.'
  },
  {
    question: 'Apa perbedaan P&I Insurance dengan Hull & Machinery Insurance?',
    answer: 'Hull & Machinery Insurance melindungi kerusakan fisik pada kapal dan mesin (asset protection). Sedangkan P&I Insurance melindungi tanggung jawab hukum pemilik kapal kepada pihak ketiga (liability protection). Keduanya saling melengkapi untuk memberikan perlindungan komprehensif bagi operasional pelayaran.'
  },
  {
    question: 'Risiko apa saja yang dicakup oleh P&I Insurance?',
    answer: 'P&I Insurance mencakup: cedera, sakit, atau kematian awak kapal dan penumpang, tanggung jawab碰撞 (collision liability) yang tidak tercakup Hull Insurance, kerusakan properti pihak ketiga (dermaga, pelabuhan, kapal lain), pencemaran lingkungan (oil pollution), biaya pengangkatan bangkai kapal (wreck removal), serta biaya hukum dan litigasi.'
  },
  {
    question: 'Siapa yang membutuhkan P&I Insurance?',
    answer: 'P&I Insurance diperlukan oleh: pemilik kapal (ship owners), operator kapal (ship operators), charterer kapal, perusahaan pelayaran (shipping lines), serta manajer kapal (ship managers). Asuransi ini sangat penting untuk memenuhi persyaratan internasional dan melindungi bisnis pelayaran dari risiko liability yang besar.'
  },
  {
    question: 'Apakah P&I Insurance wajib untuk kapal?',
    answer: 'P&I Insurance tidak selalu wajib secara hukum, namun sangat direkomendasikan dan sering menjadi syarat untuk: berlayar ke pelabuhan internasional, memenuhi persyaratan charter party, mendapatkan sertifikasi dari Class Society, serta kepatuhan terhadap konvensi internasional seperti CLC Convention untuk oil pollution liability.'
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
  "headline": "Protection & Indemnity (P&I) Insurance",
  "description": "Protection & Indemnity (P&I) memberikan perlindungan tanggung jawab hukum pemilik kapal terhadap pihak ketiga.",
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

export default function ProtectionIndemnityPage() {
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
              <span className="text-blue-300">Protection & Indemnity</span>
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
              Protection & Indemnity (P&I)
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Asuransi tanggung jawab hukum pemilik kapal terhadap pihak ketiga.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20P%26I%20Insurance%20untuk%20kapal%20saya" 
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
                  <strong>Protection & Indemnity (P&I) Insurance</strong> melindungi pemilik kapal terhadap tanggung jawab hukum kepada pihak ketiga, termasuk cedera awak kapal, kerusakan properti pihak lain, dan pencemaran laut.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  P&I Insurance merupakan komponen penting dalam pengelolaan risiko pelayaran, melengkapi Hull & Machinery Insurance yang hanya melindungi kerusakan fisik kapal. Asuransi ini memberikan perlindungan komprehensif terhadap liability yang dapat sangat besar nilainya.
                </p>
              </section>

              {/* Apa itu P&I */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu P&I Insurance?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Protection & Indemnity (P&I)</strong> adalah jenis asuransi marine yang memberikan perlindungan terhadap tanggung jawab hukum (liability) pemilik kapal kepada pihak ketiga. P&I Club atau asuransi P&I tradisional didirikan oleh kelompok pemilik kapal untuk saling melindungi dari risiko liability yang tidak tercakup oleh asuransi komersial.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Berbeda dengan Hull & Machinery Insurance yang bersifat property insurance (melindungi asset), P&I Insurance bersifat liability insurance (melindungi tanggung jawab hukum). Keduanya saling melengkapi untuk memberikan perlindungan total bagi operasional pelayaran.
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
                      <h3 className="font-medium text-gray-800">Cedera Awak Kapal</h3>
                      <p className="text-sm text-gray-600">Tanggung jawab atas cedera, sakit, atau kematian crew di kapal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Tanggung Jawab Penumpang</h3>
                      <p className="text-sm text-gray-600">Liability terhadap penumpang kapal (passenger vessel, ferry)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Pencemaran Laut</h3>
                      <p className="text-sm text-gray-600">Oil pollution, chemical spill, dan kerusakan lingkungan laut</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kerusakan Properti Pihak Ketiga</h3>
                      <p className="text-sm text-gray-600">Kerusakan dermaga, pelabuhan, instalasi, dan kapal lain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Wreck Removal</h3>
                      <p className="text-sm text-gray-600">Biaya pengangkatan bangkai kapal jika kandas atau tenggelam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Collision Liability</h3>
                      <p className="text-sm text-gray-600">Tanggung jawab tabrakan yang tidak tercakup Hull Insurance</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* P&I vs H&M */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  P&I vs Hull & Machinery
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-700">Aspek</th>
                        <th className="text-left p-3 font-semibold text-gray-700">P&I Insurance</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Hull & Machinery</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Jenis Asuransi</td>
                        <td className="p-3 text-gray-600">Liability Insurance</td>
                        <td className="p-3 text-gray-600">Property Insurance</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Objek Pertanggungan</td>
                        <td className="p-3 text-gray-600">Tanggung jawab hukum</td>
                        <td className="p-3 text-gray-600">Kerusakan fisik kapal</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Pihak yang Dilindungi</td>
                        <td className="p-3 text-gray-600">Pihak ketiga (crew, penumpang, publik)</td>
                        <td className="p-3 text-gray-600">Asset pemilik kapal</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Contoh Klaim</td>
                        <td className="p-3 text-gray-600">Cedera crew, oil spill</td>
                        <td className="p-3 text-gray-600">Kapal terbakar, mesin rusak</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-700">Provider</td>
                        <td className="p-3 text-gray-600">P&I Club / Asuransi Komersial</td>
                        <td className="p-3 text-gray-600">Asuransi Komersial</td>
                      </tr>
                    </tbody>
                  </table>
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
                    <h3 className="font-semibold text-blue-800 mb-2">Ship Owners</h3>
                    <p className="text-sm text-gray-600">Pemilik kapal yang bertanggung jawab atas operasional dan keselamatan kapal</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Ship Operators</h3>
                    <p className="text-sm text-gray-600">Perusahaan yang mengoperasikan kapal untuk keperluan komersial</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Charterer</h3>
                    <p className="text-sm text-gray-600">Time charterer atau bareboat charterer yang bertanggung jawab atas operasi</p>
                  </div>
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/50">
                    <h3 className="font-semibold text-blue-800 mb-2">Ship Managers</h3>
                    <p className="text-sm text-gray-600">Manajer kapal professional yang mengelola operasional untuk owner</p>
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
                  <a href="/hull-machinery-insurance" className="block p-4 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition group border border-cyan-200">
                    <h3 className="font-medium text-cyan-800 group-hover:text-cyan-600">Hull & Machinery Insurance</h3>
                    <p className="text-sm text-gray-600">Asuransi kerusakan kapal dan mesin</p>
                  </a>
                  <a href="/freight-insurance" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Freight Insurance</h3>
                    <p className="text-sm text-gray-600">Perlindungan pendapatan angkut</p>
                  </a>
                  <a href="/asuransi-kargo-batam" className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition group border border-purple-200">
                    <h3 className="font-medium text-purple-800 group-hover:text-purple-600">Marine Cargo Insurance</h3>
                    <p className="text-sm text-gray-600">Asuransi pengiriman barang</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh P&I Insurance?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Konsultasikan kebutuhan Protection & Indemnity untuk perlindungan liability kapal Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20P%26I%20Insurance%20untuk%20kapal%20saya" 
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
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Cargo Insurance</h4>
                    <p className="text-sm text-gray-500">Asuransi pengiriman barang</p>
                  </a>
                </div>
              </div>

              {/* Liability Insurance */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Liability</h3>
                <div className="space-y-3">
                  <a href="/asuransi-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Asuransi Liability</h4>
                    <p className="text-sm text-gray-500">Halaman utama liability</p>
                  </a>
                  <a href="/asuransi-public-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Public Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab publik</p>
                  </a>
                  <a href="/asuransi-product-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Product Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab produk</p>
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
