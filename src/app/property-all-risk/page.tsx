import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Property All Risk | Asuransi Properti & Gedung Komersial | Dunia Asuransi',
  description: 'Property All Risk memberikan perlindungan menyeluruh terhadap risiko kerusakan gedung, kantor, hotel, dan properti komersial lainnya dengan cakupan luas.',
  keywords: 'Property All Risk, Asuransi Properti, Asuransi Gedung, Asuransi Bangunan Komersial, PAR Insurance, asuransi bangunan, asuransi kantor, asuransi hotel',
  alternates: {
    canonical: `${baseUrl}/property-all-risk`,
  },
  openGraph: {
    title: 'Property All Risk | Asuransi Properti & Gedung Komersial',
    description: 'Perlindungan menyeluruh untuk properti komersial dan gedung bernilai tinggi.',
    url: `${baseUrl}/property-all-risk`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Property All Risk?',
    answer: 'Property All Risk (PAR) adalah polis asuransi yang memberikan perlindungan luas terhadap kerusakan fisik properti akibat berbagai risiko yang tidak dikecualikan secara khusus dalam polis. Berbeda dengan asuransi kebakaran tradisional yang hanya menjamin risiko tertentu, PAR bekerja dengan prinsip "all risks" yaitu menjamin semua risiko kecuali yang secara eksplisit dikecualikan.'
  },
  {
    question: 'Apa bedanya Property All Risk dengan asuransi kebakaran?',
    answer: 'Asuransi kebakaran memiliki cakupan terbatas hanya untuk risiko yang disebutkan dalam polis (named perils) seperti kebakaran, petir, dan ledakan. Sedangkan Property All Risk memberikan perlindungan lebih luas terhadap berbagai risiko selain yang dikecualikan (all risks), termasuk kerusakan air, vandalisme, dan risiko lainnya yang tidak tercakup dalam asuransi kebakaran standar.'
  },
  {
    question: 'Siapa yang membutuhkan Property All Risk?',
    answer: 'Property All Risk cocok untuk pemilik gedung perkantoran, hotel dan resort, pusat perbelanjaan (mall), apartemen dan kondominium, gedung institusi (sekolah, rumah sakit), serta properti komersial lainnya dengan nilai aset tinggi yang memerlukan perlindungan komprehensif.'
  },
  {
    question: 'Risiko apa saja yang dijamin oleh Property All Risk?',
    answer: 'Property All Risk menjamin: kebakaran dan petir, gempa bumi dan letusan gunung berapi (dapat diperluas), kerusakan akibat air (burst pipe, sprinkler leakage), badai dan angin topan, banjir (dapat diperluas), vandalisme dan malicious damage, tabrakan kendaraan, serta risiko lainnya selain yang dikecualikan.'
  },
  {
    question: 'Apakah Property All Risk dapat dikombinasikan dengan asuransi lain?',
    answer: 'Ya, Property All Risk sering dikombinasikan dengan Business Interruption Insurance untuk menjamin kerugian keuntungan akibat gangguan usaha setelah kerusakan properti. Juga dapat ditambahkan dengan Third Party Liability untuk perlindungan tanggung jawab hukum terhadap pihak ketiga.'
  }
];

const coveredObjects = [
  { name: 'Bangunan Utama', desc: 'Struktur bangunan, dinding, atap, dan fondasi', icon: '🏢' },
  { name: 'Interior & Perlengkapan', desc: 'Furniture, peralatan kantor, dekorasi', icon: '🪑' },
  { name: 'Instalasi Mekanikal', desc: 'AC, elevator, sistem plumbing', icon: '⚙️' },
  { name: 'Instalasi Listrik', desc: 'Panel listrik, kabel, generator', icon: '⚡' },
  { name: 'Stok Barang', desc: 'Inventory dan persediaan (jika diperlukan)', icon: '📦' },
  { name: 'Signage & Outdoor', desc: 'Tanda nama, pagar, landscape', icon: '🏪' }
];

const advantages = [
  { title: 'Cakupan Luas', desc: 'Menjamin semua risiko kecuali yang dikecualikan secara spesifik', icon: '🛡️' },
  { title: 'Fleksibel', desc: 'Dapat disesuaikan dengan kebutuhan dan profil risiko properti', icon: '🔧' },
  { title: 'Business Interruption', desc: 'Dapat diperluas untuk menjamin kerugian keuntungan', icon: '📈' },
  { title: 'Nilai Tinggi', desc: 'Ideal untuk properti dengan nilai aset besar', icon: '💎' }
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
  "headline": "Property All Risk",
  "description": "Property All Risk memberikan perlindungan menyeluruh terhadap risiko kerusakan gedung, kantor, hotel, dan properti komersial lainnya.",
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

export default function PropertyAllRiskPage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-emerald-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/property-insurance" className="hover:underline text-emerald-200">Property Insurance</a>
              <span>/</span>
              <span className="text-emerald-300">Property All Risk</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/property-insurance" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Property Insurance
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Property All Risk
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Perlindungan menyeluruh untuk gedung komersial, kantor, hotel, dan properti bernilai tinggi.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Property%20All%20Risk%20untuk%20properti%20saya" 
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
                  Gedung komersial seperti kantor, hotel, pusat perbelanjaan, dan apartemen memiliki nilai aset yang tinggi. Risiko kebakaran, gempa bumi, kerusakan air, hingga vandalisme dapat menimbulkan kerugian finansial yang sangat besar bagi pemilik properti.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Property All Risk (PAR)</strong> memberikan perlindungan menyeluruh terhadap berbagai risiko kerusakan fisik properti dengan sistem pertanggungan berbasis &quot;all risk&quot; — menjamin semua risiko kecuali yang secara spesifik dikecualikan dalam polis.
                </p>
              </section>

              {/* Apa itu PAR */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Property All Risk?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Property All Risk adalah polis asuransi properti yang memberikan perlindungan paling komprehensif untuk bangunan dan isinya. Berbeda dengan asuransi kebakaran tradisional yang menggunakan prinsip &quot;named perils&quot; (hanya risiko yang disebutkan), PAR menggunakan prinsip &quot;all risks&quot; yang menjamin semua risiko kerusakan fisik kecuali yang secara eksplisit dikecualikan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Polis ini sangat cocok untuk properti komersial bernilai tinggi yang memerlukan perlindungan optimal. Dengan PAR, pemilik properti mendapatkan ketenangan pikiran karena berbagai risiko tidak terduga sudah tercakup dalam satu polis yang terintegrasi.
                </p>
              </section>

              {/* Objek Pertanggungan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Objek Pertanggungan
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
                  Keunggulan Property All Risk
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {advantages.map((adv, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{adv.icon}</span>
                        <h3 className="font-semibold text-emerald-800">{adv.title}</h3>
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
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kebakaran & Petir</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Gempa Bumi & Tsunami *</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kerusakan Air (Burst Pipe)</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Badai & Angin Topan</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Banjir *</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Vandalisme & Malicious Damage</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tabrakan Kendaraan</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Kebongkaran (Burglary)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">* Dapat diperluas dengan premi tambahan</p>
              </section>

              {/* PAR vs Fire Insurance */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  Property All Risk vs Asuransi Kebakaran
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-700">Aspek</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Property All Risk</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Asuransi Kebakaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Prinsip</td>
                        <td className="p-3 text-gray-600">All Risks (semua risiko kecuali yang dikecualikan)</td>
                        <td className="p-3 text-gray-600">Named Perils (hanya risiko yang disebutkan)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Cakupan</td>
                        <td className="p-3 text-gray-600">Lebih luas dan komprehensif</td>
                        <td className="p-3 text-gray-600">Terbatas pada risiko tertentu</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Premi</td>
                        <td className="p-3 text-gray-600">Lebih tinggi</td>
                        <td className="p-3 text-gray-600">Lebih ekonomis</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Target</td>
                        <td className="p-3 text-gray-600">Properti komersial bernilai tinggi</td>
                        <td className="p-3 text-gray-600">Properti dengan nilai menengah</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-700">Ekstensi</td>
                        <td className="p-3 text-gray-600">Business Interruption, Liability</td>
                        <td className="p-3 text-gray-600">Terbatas</td>
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
                  <a href="/industrial-all-risk" className="block p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition group border border-emerald-200">
                    <h3 className="font-medium text-emerald-800 group-hover:text-emerald-600">Industrial All Risk</h3>
                    <p className="text-sm text-gray-600">Untuk fasilitas manufaktur dan pabrik</p>
                  </a>
                  <a href="/asuransi-kebakaran" className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition group border border-orange-200">
                    <h3 className="font-medium text-orange-800 group-hover:text-orange-600">Asuransi Kebakaran</h3>
                    <p className="text-sm text-gray-600">Perlindungan dasar kebakaran</p>
                  </a>
                  <a href="/asuransi-liability" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group border border-green-200">
                    <h3 className="font-medium text-green-800 group-hover:text-green-600">Asuransi Liability</h3>
                    <p className="text-sm text-gray-600">Tanggung jawab hukum gedung</p>
                  </a>
                  <a href="/property-insurance" className="block p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition group border border-teal-200">
                    <h3 className="font-medium text-teal-800 group-hover:text-teal-600">Property Insurance</h3>
                    <p className="text-sm text-gray-600">Halaman utama asuransi properti</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-emerald-700 to-teal-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Property All Risk?</h3>
                <p className="text-emerald-100 mb-4 text-sm">
                  Kami membantu menyusun struktur perlindungan properti sesuai nilai aset dan profil risiko usaha Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Property%20All%20Risk%20untuk%20properti%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-emerald-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Property Insurance Products */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Produk Property Insurance</h3>
                <div className="space-y-3">
                  <a href="/industrial-all-risk" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Industrial All Risk</h4>
                    <p className="text-sm text-gray-500">Untuk pabrik & manufaktur</p>
                  </a>
                  <a href="/asuransi-kebakaran" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Asuransi Kebakaran</h4>
                    <p className="text-sm text-gray-500">Perlindungan dasar</p>
                  </a>
                </div>
              </div>

              {/* Asuransi Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-liability" className="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600">Asuransi Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab hukum</p>
                  </a>
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Asuransi Engineering</h4>
                    <p className="text-sm text-gray-500">CAR, EAR, Machinery</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
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
