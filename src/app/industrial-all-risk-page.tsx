import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial All Risk (IAR) | Perlindungan Properti Industri Menyeluruh | Dunia Asuransi',
  description: 'Industrial All Risk (IAR) memberikan perlindungan menyeluruh terhadap risiko kerusakan properti industri seperti pabrik, gudang, dan fasilitas manufaktur.',
  keywords: 'Industrial All Risk, Asuransi Pabrik, Asuransi Gudang, Asuransi Properti Industri, IAR Insurance, asuransi manufaktur, asuransi fasilitas industri',
  openGraph: {
    title: 'Industrial All Risk (IAR) | Perlindungan Properti Industri Menyeluruh',
    description: 'Perlindungan menyeluruh untuk properti industri dan fasilitas manufaktur.',
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Industrial All Risk?',
    answer: 'Industrial All Risk (IAR) adalah polis asuransi yang memberikan perlindungan menyeluruh terhadap risiko kerusakan fisik properti industri akibat berbagai penyebab yang tidak dikecualikan dalam polis. IAR dirancang khusus untuk fasilitas industri seperti pabrik, gudang, dan instalasi manufaktur dengan pertimbangan risiko operasional yang kompleks.'
  },
  {
    question: 'Apa bedanya Industrial All Risk dengan asuransi kebakaran?',
    answer: 'Asuransi kebakaran hanya menjamin risiko tertentu seperti kebakaran, petir, dan ledakan (named perils). Sedangkan Industrial All Risk memberikan perlindungan lebih luas terhadap berbagai risiko kecuali yang secara khusus dikecualikan (all risks basis). IAR juga mencakup kerusakan air, vandalisme, dan berbagai risiko lain yang tidak tercakup dalam polis kebakaran standar.'
  },
  {
    question: 'Apa saja objek yang dapat diasuransikan dengan IAR?',
    answer: 'Objek yang dapat diasuransikan meliputi: bangunan pabrik dan struktur, gudang penyimpanan, mesin dan peralatan produksi, stok barang dan bahan baku, instalasi utilitas (listrik, air, gas), furniture dan perlengkapan kantor, serta peralatan pendukung lainnya.'
  },
  {
    question: 'Apakah IAR dapat dikombinasikan dengan asuransi lain?',
    answer: 'Ya, Industrial All Risk sering dikombinasikan dengan Business Interruption Insurance untuk menjamin kerugian pendapatan, Machinery Breakdown untuk kerusakan mesin, dan Liability Insurance untuk tanggung jawab hukum. Kombinasi ini memberikan perlindungan komprehensif bagi operasional industri.'
  },
  {
    question: 'Bagaimana cara menentukan nilai pertanggungan IAR?',
    answer: 'Nilai pertanggungan ditentukan berdasarkan nilai penggantian (replacement value) atau nilai pasar wajar dari seluruh aset yang dipertanggungkan. Perhitungan meliputi nilai bangunan, mesin dan peralatan, stok barang, serta aset lainnya. Survei dan penilaian profesional biasanya diperlukan untuk menentukan nilai yang akurat.'
  }
];

const coveredObjects = [
  { name: 'Bangunan Pabrik', desc: 'Struktur bangunan, dinding, atap, dan fondasi', icon: '🏭' },
  { name: 'Gudang Penyimpanan', desc: 'Warehouse untuk stok dan bahan baku', icon: '📦' },
  { name: 'Mesin Produksi', desc: 'Peralatan manufaktur dan mesin industri', icon: '⚙️' },
  { name: 'Stok Barang', desc: 'Inventory, bahan baku, dan barang jadi', icon: '📋' },
  { name: 'Instalasi Utilitas', desc: 'Listrik, air, gas, dan sistem pendukung', icon: '💡' },
  { name: 'Peralatan Pendukung', desc: 'Forklift, crane, dan peralatan handling', icon: '🚜' }
];

const advantages = [
  { title: 'Cakupan Luas', desc: 'All risks basis menjamin berbagai risiko kecuali yang dikecualikan', icon: '🛡️' },
  { title: 'Business Interruption', desc: 'Dapat diperluas untuk menjamin kerugian pendapatan', icon: '📈' },
  { title: 'Nilai Besar', desc: 'Ideal untuk pertanggungan nilai aset industri yang tinggi', icon: '💎' },
  { title: 'Fleksibel', desc: 'Struktur polis dapat disesuaikan dengan kebutuhan industri', icon: '🔧' }
];

const linkedPolicies = [
  { name: 'Machinery Breakdown', href: '/asuransi-machinery-breakdown', desc: 'Kerusakan mesin dan peralatan', icon: '⚙️' },
  { name: 'Asuransi Liability', href: '/asuransi-liability', desc: 'Tanggung jawab hukum industri', icon: '⚖️' },
  { name: 'Asuransi Kebakaran', href: '/asuransi-kebakaran', desc: 'Perlindungan dasar kebakaran', icon: '🔥' },
  { name: 'Business Interruption', href: '/business-interruption', desc: 'Kehilangan laba akibat gangguan', icon: '📊' }
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
  "headline": "Industrial All Risk (IAR)",
  "description": "Industrial All Risk (IAR) memberikan perlindungan menyeluruh terhadap risiko kerusakan properti industri.",
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

export default function IndustrialAllRiskPage() {
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
              <a href="/property-insurance" className="hover:underline text-slate-300">Property Insurance</a>
              <span>/</span>
              <span className="text-teal-300">Industrial All Risk</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800 via-teal-700 to-emerald-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/property-insurance" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Property Insurance
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industrial All Risk (IAR)
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              Perlindungan menyeluruh untuk pabrik, gudang, dan fasilitas manufaktur.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Industrial%20All%20Risk%20untuk%20pabrik%20saya" 
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
                  Fasilitas industri seperti pabrik dan gudang memiliki nilai aset yang tinggi serta risiko operasional yang kompleks. Kebakaran, ledakan, kerusakan mesin, hingga bencana alam dapat menimbulkan kerugian finansial yang sangat besar bagi perusahaan manufaktur.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Industrial All Risk (IAR)</strong> memberikan perlindungan menyeluruh terhadap risiko kerusakan fisik properti industri dengan cakupan yang lebih luas dibandingkan polis kebakaran standar. Polis ini dirancang khusus untuk menjawab kebutuhan kompleks industri manufaktur.
                </p>
              </section>

              {/* Apa itu IAR */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Industrial All Risk?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Industrial All Risk (IAR) adalah polis asuransi properti yang memberikan perlindungan komprehensif untuk fasilitas industri. Berbeda dengan asuransi kebakaran tradisional, IAR menggunakan prinsip &quot;all risks&quot; yang menjamin berbagai risiko kerusakan fisik kecuali yang secara eksplisit dikecualikan dalam polis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Polis ini sangat cocok untuk pabrik, gudang, dan fasilitas manufaktur dengan nilai aset besar dan risiko operasional yang kompleks. IAR memberikan ketenangan pikiran dengan cakupan yang luas dan dapat disesuaikan dengan karakteristik industri spesifik.
                </p>
              </section>

              {/* Objek Pertanggungan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Objek yang Dapat Dijamin
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {coveredObjects.map((obj, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{obj.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800">{obj.name}</h3>
                        <p className="text-sm text-gray-600">{obj.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Keunggulan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Keunggulan Industrial All Risk
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {advantages.map((adv, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{adv.icon}</span>
                        <h3 className="font-semibold text-teal-800">{adv.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Risiko yang Dijamin */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Risiko yang Dijamin
                </h2>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kebakaran & Petir</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Ledakan</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Gempa Bumi & Tsunami *</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kerusakan Air & Sprinkler</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Badai & Angin Topan</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Banjir *</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Vandalisme & Sabotase</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kebongkaran (Burglary)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">* Dapat diperluas dengan premi tambahan</p>
              </section>

              {/* Kombinasi Perlindungan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Kombinasi Perlindungan
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Industrial All Risk sering dikombinasikan dengan polis lain untuk perlindungan yang lebih komprehensif:
                </p>
                
                <div className="space-y-3">
                  {linkedPolicies.map((policy, index) => (
                    <a 
                      key={index}
                      href={policy.href} 
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-teal-50 rounded-lg transition group"
                    >
                      <span className="text-2xl">{policy.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 group-hover:text-teal-600">{policy.name}</h3>
                        <p className="text-sm text-gray-500">{policy.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
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
                  <a href="/property-all-risk" className="block p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition group border border-emerald-200">
                    <h3 className="font-medium text-emerald-800 group-hover:text-emerald-600">Property All Risk</h3>
                    <p className="text-sm text-gray-600">Untuk gedung komersial</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Machinery Breakdown</h3>
                    <p className="text-sm text-gray-600">Kerusakan mesin produksi</p>
                  </a>
                  <a href="/business-interruption" className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition group border border-amber-200">
                    <h3 className="font-medium text-amber-800 group-hover:text-amber-600">Business Interruption</h3>
                    <p className="text-sm text-gray-600">Kehilangan laba</p>
                  </a>
                  <a href="/asuransi-liability" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group border border-green-200">
                    <h3 className="font-medium text-green-800 group-hover:text-green-600">Asuransi Liability</h3>
                    <p className="text-sm text-gray-600">Tanggung jawab hukum</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-700 to-teal-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Industrial All Risk?</h3>
                <p className="text-teal-100 mb-4 text-sm">
                  Kami membantu penyusunan struktur perlindungan properti industri sesuai nilai aset dan profil risiko perusahaan Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Industrial%20All%20Risk%20untuk%20pabrik%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-teal-200 text-center">
                  Rio Mardiansyah - Insurance Broker
                </p>
              </div>

              {/* Property Insurance Products */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Produk Property Insurance</h3>
                <div className="space-y-3">
                  <a href="/property-all-risk" className="block p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-teal-600">Property All Risk</h4>
                    <p className="text-sm text-gray-500">Gedung komersial</p>
                  </a>
                  <a href="/business-interruption" className="block p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-teal-600">Business Interruption</h4>
                    <p className="text-sm text-gray-500">Kehilangan laba</p>
                  </a>
                  <a href="/asuransi-kebakaran" className="block p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-teal-600">Asuransi Kebakaran</h4>
                    <p className="text-sm text-gray-500">Perlindungan dasar</p>
                  </a>
                </div>
              </div>

              {/* Asuransi Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Kerusakan mesin</p>
                  </a>
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Engineering</h4>
                    <p className="text-sm text-gray-500">CAR, EAR, Machinery</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-cyan-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-cyan-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Cargo, Hull & Machinery</p>
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
