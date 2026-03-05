import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Directors & Officers (D&O) Liability Insurance | Perlindungan Direksi & Komisaris | Dunia Asuransi',
  description: 'Directors & Officers (D&O) Liability Insurance memberikan perlindungan terhadap tuntutan hukum yang ditujukan kepada direksi dan komisaris atas keputusan manajerial.',
  keywords: 'Directors and Officers Insurance, D&O Insurance, Asuransi Direksi, Asuransi Komisaris, Management Liability, asuransi manajemen, liability direksi',
  alternates: {
    canonical: `${baseUrl}/directors-officers-liability`,
  },
  openGraph: {
    title: 'Directors & Officers (D&O) Liability Insurance | Perlindungan Direksi & Komisaris',
    description: 'Perlindungan terhadap tuntutan hukum kepada direksi dan manajemen perusahaan.',
    url: `${baseUrl}/directors-officers-liability`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Directors & Officers (D&O) Insurance?',
    answer: 'D&O Insurance adalah asuransi yang memberikan perlindungan terhadap direksi dan komisaris dari tuntutan hukum akibat keputusan atau tindakan manajerial dalam menjalankan perusahaan. Polis ini menanggung biaya pembelaan hukum, ganti rugi, dan penyelesaian klaim yang diajukan terhadap manajemen atas dugaan kesalahan dalam menjalankan tugas.'
  },
  {
    question: 'Siapa yang membutuhkan D&O Insurance?',
    answer: 'D&O Insurance diperlukan oleh berbagai jenis organisasi: perusahaan swasta dengan struktur manajemen formal, perusahaan publik (Tbk) yang terdaftar di bursa, startup dengan investor eksternal, BUMN dan BUMD, organisasi nirlaba dengan dewan pengurus, serta perusahaan dengan eksposur regulator tinggi seperti perusahaan terbatas.'
  },
  {
    question: 'Apa saja yang dijamin oleh D&O Insurance?',
    answer: 'D&O Insurance menjamin biaya pembelaan hukum (defense costs), ganti rugi atau penyelesaian klaim (settlement/judgment), klaim terkait dugaan kesalahan manajerial, kelalaian dalam menjalankan tugas, pelanggaran tugas fiduciary, misrepresentation dalam laporan keuangan, serta tuntutan dari pemegang saham, karyawan, atau regulator.'
  },
  {
    question: 'Apakah D&O Insurance melindungi aset pribadi direksi?',
    answer: 'Ya, D&O Insurance melindungi aset pribadi direksi dan komisaris dari risiko kehilangan akibat tuntutan hukum yang berkaitan dengan tugas manajerial mereka. Tanpa D&O, direksi dapat dimintai pertanggungjawaban secara pribadi dan aset pribadi mereka dapat digunakan untuk membayar ganti rugi jika perusahaan tidak mampu atau tidak bersedia mengganti (indemnify).'
  },
  {
    question: 'Apa perbedaan D&O dengan Professional Indemnity?',
    answer: 'D&O Insurance fokus pada tuntutan terkait keputusan dan tindakan manajerial dalam mengelola perusahaan. Sedangkan Professional Indemnity (PI) Insurance fokus pada tuntutan terkait kesalahan dalam memberikan jasa profesional kepada klien. D&O untuk manajemen perusahaan, PI untuk profesional yang memberikan jasa kepada klien.'
  }
];

const risks = [
  { name: 'Kesalahan Manajerial', desc: 'Keputusan bisnis yang dianggap merugikan perusahaan', icon: '⚖️' },
  { name: 'Pelanggaran Fiduciary', desc: 'Dugaan tidak menjalankan tugas dengan itikad baik', icon: '📜' },
  { name: 'Misrepresentation', desc: 'Ketidakakuratan dalam laporan keuangan atau disclosure', icon: '📊' },
  { name: 'Tuntutan Pemegang Saham', desc: 'Gugatan dari investor atas kerugian investasi', icon: '👥' },
  { name: 'Klaim Regulator', desc: 'Tindakan hukum dari otoritas pengawas', icon: '🏛️' },
  { name: 'Karyawan & Pihak Ketiga', desc: 'Gugatan dari karyawan atau pihak lain yang dirugikan', icon: '🤝' }
];

const whoNeeds = [
  { type: 'Perusahaan Publik (Tbk)', desc: 'Terdaftar di bursa dengan eksposur tinggi', icon: '📈' },
  { type: 'Perusahaan Swasta', desc: 'Dengan struktur manajemen formal', icon: '🏢' },
  { type: 'Startup', desc: 'Dengan investor eksternal dan dewan direksi', icon: '🚀' },
  { type: 'BUMN/BUMD', desc: 'Perusahaan milik negara dengan pengawasan ketat', icon: '🏛️' }
];

const coverage = [
  { title: 'Side A', desc: 'Perlindungan direksi jika perusahaan tidak dapat mengindemnity', color: 'emerald' },
  { title: 'Side B', desc: 'Reimbursement ke perusahaan yang mengindemnity direksi', color: 'green' },
  { title: 'Side C', desc: 'Perlindungan entitas untuk klaim sekuritas (public company)', color: 'teal' }
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
  "headline": "Directors & Officers (D&O) Liability Insurance",
  "description": "Directors & Officers (D&O) Liability Insurance memberikan perlindungan terhadap tuntutan hukum yang ditujukan kepada direksi dan komisaris.",
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

export default function DirectorsOfficersLiabilityPage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-green-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/asuransi-liability" className="hover:underline text-green-200">Asuransi Liability</a>
              <span>/</span>
              <span className="text-green-300">Directors & Officers Liability</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/asuransi-liability" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Asuransi Liability
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Directors & Officers (D&O) Liability
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Perlindungan direksi dan komisaris dari tuntutan hukum atas keputusan manajerial.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20D%26O%20Insurance%20untuk%20perusahaan%20saya" 
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
                  Direksi dan komisaris memiliki tanggung jawab besar dalam mengambil keputusan strategis perusahaan. Keputusan yang dianggap merugikan pemegang saham, kreditur, karyawan, atau pihak ketiga dapat berujung pada tuntutan hukum pribadi terhadap manajemen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Directors & Officers (D&O) Liability Insurance</strong> memberikan perlindungan terhadap risiko tersebut dengan menanggung biaya pembelaan hukum dan potensi ganti rugi, sehingga direksi dapat mengambil keputusan bisnis tanpa ketakutan akan risiko pribadi yang berlebihan.
                </p>
              </section>

              {/* Apa itu D&O */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu D&O Insurance?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Directors & Officers (D&O) Liability Insurance adalah polis asuransi yang melindungi direksi, komisaris, dan pejabat perusahaan dari kerugian finansial akibat tuntutan hukum yang berkaitan dengan tugas manajerial mereka. Polis ini mencakup biaya pembelaan hukum, penyelesaian klaim, dan ganti rugi yang harus dibayarkan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  D&O Insurance menjadi semakin penting seiring dengan meningkatnya litigasi bisnis dan pengawasan regulator. Tanpa perlindungan ini, direksi dapat menghadapi risiko finansial pribadi yang signifikan, dan perusahaan mungkin kesulitan menarik talenta manajemen terbaik.
                </p>
              </section>

              {/* Risiko yang Dijamin */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Risiko yang Umum Dijamin
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {risks.map((risk, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{risk.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800">{risk.name}</h3>
                        <p className="text-sm text-gray-600">{risk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Struktur Cakupan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Struktur Cakupan (Side A, B, C)
                </h2>
                
                <div className="space-y-4">
                  {coverage.map((item, index) => (
                    <div key={index} className={`p-5 bg-gradient-to-r from-${item.color}-50 to-green-50 rounded-lg border border-${item.color}-100`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-8 h-8 bg-${item.color}-600 text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                          {item.title.split(' ')[1]}
                        </span>
                        <h3 className={`font-semibold text-${item.color}-800`}>{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-11">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-sm text-gray-700">
                    <strong>Catatan:</strong> Side A adalah yang paling penting karena melindungi direksi secara langsung ketika perusahaan tidak dapat atau tidak diizinkan untuk mengindemnity mereka (misalnya dalam kasus kebangkrutan).
                  </p>
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
                  Siapa yang Membutuhkan D&O?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {whoNeeds.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.type}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mengapa Penting */}
              <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Mengapa D&O Penting?
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tanpa perlindungan D&O, direksi dapat menghadapi risiko finansial pribadi yang besar. Mereka mungkin harus membayar biaya hukum dan ganti rugi dari kantong pribadi jika perusahaan tidak mampu atau tidak bersedia mengindemnity. Polis ini membantu melindungi aset pribadi manajemen sekaligus menjaga stabilitas perusahaan.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-1">Aset Pribadi</div>
                    <p className="text-sm text-gray-600">Perlindungan aset pribadi direksi</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">Talent</div>
                    <p className="text-sm text-gray-600">Menarik talenta manajemen terbaik</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-1">Investor</div>
                    <p className="text-sm text-gray-600">Meningkatkan kepercayaan investor</p>
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
                  <a href="/asuransi-liability" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group border border-green-200">
                    <h3 className="font-medium text-green-800 group-hover:text-green-600">Asuransi Liability</h3>
                    <p className="text-sm text-gray-600">Halaman utama liability</p>
                  </a>
                  <a href="/asuransi-professional-indemnity" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group border border-blue-200">
                    <h3 className="font-medium text-blue-800 group-hover:text-blue-600">Professional Indemnity</h3>
                    <p className="text-sm text-gray-600">Liability profesional</p>
                  </a>
                  <a href="/asuransi-public-liability" className="block p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition group border border-emerald-200">
                    <h3 className="font-medium text-emerald-800 group-hover:text-emerald-600">Public Liability</h3>
                    <p className="text-sm text-gray-600">Tanggung jawab publik</p>
                  </a>
                  <a href="/asuransi-product-liability" className="block p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition group border border-teal-200">
                    <h3 className="font-medium text-teal-800 group-hover:text-teal-600">Product Liability</h3>
                    <p className="text-sm text-gray-600">Tanggung jawab produk</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh D&O Insurance?</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Kami membantu menyusun perlindungan D&O sesuai struktur kepemilikan dan risiko perusahaan Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20D%26O%20Insurance%20untuk%20perusahaan%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-green-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Liability Products */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Produk Liability</h3>
                <div className="space-y-3">
                  <a href="/asuransi-public-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Public Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab publik</p>
                  </a>
                  <a href="/asuransi-product-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Product Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab produk</p>
                  </a>
                  <a href="/asuransi-professional-indemnity" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Professional Indemnity</h4>
                    <p className="text-sm text-gray-500">Liability profesional</p>
                  </a>
                </div>
              </div>

              {/* Asuransi Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Engineering Insurance</h4>
                    <p className="text-sm text-gray-500">CAR, EAR, Machinery</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Cargo, Hull & Machinery</p>
                  </a>
                  <a href="/property-insurance" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Property Insurance</h4>
                    <p className="text-sm text-gray-500">PAR, IAR, BI</p>
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
