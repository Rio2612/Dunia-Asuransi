import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Machinery Loss of Profit (MLOP) | Asuransi Kehilangan Laba Mesin | Dunia Asuransi',
  description: 'Machinery Loss of Profit (MLOP) memberikan perlindungan terhadap kehilangan laba akibat kerusakan mesin yang menyebabkan gangguan operasional produksi.',
  keywords: 'Machinery Loss of Profit, MLOP Insurance, Asuransi Kehilangan Laba Mesin, Advance Loss of Profit, ALOP, consequential loss machinery',
  alternates: {
    canonical: `${baseUrl}/machinery-loss-of-profit`,
  },
  openGraph: {
    title: 'Machinery Loss of Profit (MLOP) | Asuransi Kehilangan Laba Mesin',
    description: 'Perlindungan terhadap kehilangan laba akibat kerusakan mesin industri.',
    url: `${baseUrl}/machinery-loss-of-profit`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Machinery Loss of Profit (MLOP)?',
    answer: 'Machinery Loss of Profit (MLOP) adalah asuransi yang memberikan perlindungan terhadap kehilangan laba akibat kerusakan mesin yang dijamin dalam polis Machinery Breakdown. Asuransi ini mengganti kerugian pendapatan yang tidak diterima selama periode pemulihan operasional mesin setelah terjadi kerusakan yang covered oleh polis utama.'
  },
  {
    question: 'Apa perbedaan MLOP dengan Business Interruption?',
    answer: 'Business Interruption Insurance umumnya terkait dengan kerusakan properti (bangunan, gedung) sebagai trigger klaim. Sedangkan MLOP fokus khusus pada kehilangan laba akibat kerusakan mesin industri. MLOP adalah varian Business Interruption yang didesain khusus untuk industri manufaktur yang sangat bergantung pada mesin produksi.'
  },
  {
    question: 'Apakah MLOP dapat berdiri sendiri?',
    answer: 'MLOP biasanya merupakan perluasan dari polis Machinery Breakdown dan tidak berdiri sendiri. Trigger klaim MLOP adalah kerusakan mesin yang dijamin oleh polis Machinery Breakdown. Oleh karena itu, MLOP harus dibarengi dengan polis Machinery Breakdown yang aktif.'
  },
  {
    question: 'Bagaimana cara menghitung nilai pertanggungan MLOP?',
    answer: 'Nilai pertanggungan MLOP dihitung berdasarkan proyeksi pendapatan dan biaya selama periode indemnity. Faktor yang dipertimbangkan meliputi kapasitas produksi, laba kotor per unit, biaya tetap yang tetap berjalan, dan waktu yang dibutuhkan untuk memperbaiki atau mengganti mesin. Konsultasi dengan tim teknik dan keuangan diperlukan untuk perhitungan akurat.'
  },
  {
    question: 'Berapa lama periode indemnity yang ideal untuk MLOP?',
    answer: 'Periode indemnity untuk MLOP harus mencerminkan waktu yang dibutuhkan untuk memperbaiki atau mengganti mesin yang rusak. Untuk mesin standar, periode 6-12 bulan biasanya cukup. Namun untuk mesin khusus yang harus diimpor dengan waktu pengiriman panjang, periode 12-24 bulan mungkin lebih tepat.'
  }
];

const benefits = [
  { title: 'Kehilangan Laba Kotor', desc: 'Ganti rugi pendapatan yang hilang selama gangguan produksi', icon: '📉' },
  { title: 'Biaya Tetap', desc: 'Gaji, sewa, dan biaya tetap lain selama mesin rusak', icon: '📋' },
  { title: 'Biaya Pemulihan', desc: 'Additional cost untuk mempercepat penggantian mesin', icon: '⚡' },
  { title: 'Periode Indemnity', desc: 'Perlindungan hingga produksi kembali normal', icon: '📅' }
];

const linkedPolicies = [
  { name: 'Machinery Breakdown', href: '/asuransi-machinery-breakdown', desc: 'Polis utama untuk kerusakan mesin', icon: '⚙️' },
  { name: 'Business Interruption', href: '/business-interruption', desc: 'Gangguan usaha dari kerusakan properti', icon: '📊' },
  { name: 'Industrial All Risk', href: '/industrial-all-risk', desc: 'Perlindungan properti industri menyeluruh', icon: '🏭' }
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
  "headline": "Machinery Loss of Profit (MLOP)",
  "description": "Machinery Loss of Profit (MLOP) memberikan perlindungan terhadap kehilangan laba akibat kerusakan mesin.",
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

export default function MachineryLossOfProfitPage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-violet-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/asuransi-engineering" className="hover:underline text-violet-200">Engineering Insurance</a>
              <span>/</span>
              <span className="text-violet-300">Machinery Loss of Profit</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-800 via-purple-700 to-indigo-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/asuransi-engineering" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Engineering Insurance
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Machinery Loss of Profit
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl">
              Asuransi Kehilangan Laba akibat kerusakan mesin produksi.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Machinery%20Loss%20of%20Profit%20untuk%20mesin%20saya" 
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
                  Dalam industri manufaktur, mesin produksi merupakan jantung operasional. Jika mesin utama mengalami kerusakan besar, proses produksi dapat terhenti dan menyebabkan kehilangan pendapatan yang signifikan, gangguan arus kas, hingga kehilangan pangsa pasar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Machinery Loss of Profit (MLOP)</strong> memberikan perlindungan terhadap kehilangan laba akibat kerusakan mesin yang dijamin dalam polis Machinery Breakdown. Asuransi ini membantu perusahaan tetap bertahan secara finansial selama periode pemulihan operasional.
                </p>
              </section>

              {/* Apa itu MLOP */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Machinery Loss of Profit?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Machinery Loss of Profit (MLOP) adalah asuransi yang dirancang khusus untuk menanggung kerugian finansial akibat gangguan produksi yang disebabkan oleh kerusakan mesin. Polis ini merupakan perluasan dari Machinery Breakdown Insurance dengan fokus pada consequential loss atau kerugian tidak langsung.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Berbeda dengan Machinery Breakdown yang mengganti biaya perbaikan atau penggantian mesin, MLOP mengganti pendapatan yang hilang selama mesin tidak dapat beroperasi. Ini mencakup laba kotor yang seharusnya diperoleh serta biaya tetap yang tetap harus dibayar meskipun produksi berhenti.
                </p>
              </section>

              {/* Manfaat */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m0 0A11.96 11.96 0 003 9.75c0 1.086.376 2.09 1 2.907l4.242 4.242a3 3 0 004.243 0l4.242-4.242c.624-.817 1-2.082 1-2.907 0-.94-.376-1.816-1-2.401L13.5 4.5" />
                    </svg>
                  </span>
                  Manfaat Perlindungan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detail Cakupan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Detail Cakupan MLOP
                </h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-violet-500 bg-violet-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Kehilangan Laba Kotor (Gross Profit)</h3>
                    <p className="text-sm text-gray-600">Ganti rugi atas pendapatan yang seharusnya diterima jika mesin tidak mengalami kerusakan. Dihitung berdasarkan kapasitas produksi yang hilang dikalikan margin laba per unit.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Standing Charges (Biaya Tetap)</h3>
                    <p className="text-sm text-gray-600">Biaya yang tetap harus dibayar meskipun produksi berhenti: gaji karyawan, sewa gedung, asuransi, depresiasi, dan biaya administrasi yang terus berjalan.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Increased Cost of Working</h3>
                    <p className="text-sm text-gray-600">Biaya tambahan untuk mempercepat pemulihan produksi, seperti rental mesin pengganti, overtime karyawan, atau subkontrak ke pihak lain.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Periode Indemnity</h3>
                    <p className="text-sm text-gray-600">Cakupan berlaku selama periode yang ditetapkan dalam polis, dimulai dari tanggal kerusakan mesin hingga produksi kembali normal atau periode habis.</p>
                  </div>
                </div>
              </section>

              {/* Hubungan dengan Polis Lain */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Hubungan dengan Polis Lain
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  MLOP biasanya menjadi perluasan dari polis utama dan tidak berdiri sendiri. Trigger klaim MLOP adalah kerusakan mesin yang dijamin oleh polis Machinery Breakdown:
                </p>
                
                <div className="space-y-3">
                  {linkedPolicies.map((policy, index) => (
                    <a 
                      key={index}
                      href={policy.href} 
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-violet-50 rounded-lg transition group"
                    >
                      <span className="text-2xl">{policy.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 group-hover:text-violet-600">{policy.name}</h3>
                        <p className="text-sm text-gray-500">{policy.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>

              {/* MLOP vs BI */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  MLOP vs Business Interruption
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-700">Aspek</th>
                        <th className="text-left p-3 font-semibold text-gray-700">MLOP</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Business Interruption</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Trigger Klaim</td>
                        <td className="p-3 text-gray-600">Kerusakan mesin (MB policy)</td>
                        <td className="p-3 text-gray-600">Kerusakan properti (PAR/IAR)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Polis Utama</td>
                        <td className="p-3 text-gray-600">Machinery Breakdown</td>
                        <td className="p-3 text-gray-600">Property/Industrial All Risk</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium text-gray-700">Fokus</td>
                        <td className="p-3 text-gray-600">Gangguan mesin produksi</td>
                        <td className="p-3 text-gray-600">Gangguan usaha umum</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-gray-700">Target</td>
                        <td className="p-3 text-gray-600">Industri manufaktur</td>
                        <td className="p-3 text-gray-600">Semua jenis bisnis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Mengapa Penting */}
              <section className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl shadow-lg p-8 border border-violet-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Mengapa MLOP Penting?
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Perusahaan dapat memperbaiki mesin yang rusak dengan biaya dari polis Machinery Breakdown, tetapi kehilangan produksi selama berbulan-bulan dapat mengganggu arus kas, memutus hubungan dengan pelanggan, dan menggerus posisi pasar. MLOP membantu menjaga stabilitas finansial selama periode pemulihan.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-violet-600 mb-1">3-6 bln</div>
                    <p className="text-sm text-gray-600">Waktu perbaikan mesin kompleks</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                    <p className="text-sm text-gray-600">Produksi berhenti saat mesin rusak</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">Risk</div>
                    <p className="text-sm text-gray-600">Kehilangan pelanggan & pasar</p>
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
                  <a href="/asuransi-machinery-breakdown" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Machinery Breakdown</h3>
                    <p className="text-sm text-gray-600">Polis utama untuk kerusakan mesin</p>
                  </a>
                  <a href="/business-interruption" className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition group border border-amber-200">
                    <h3 className="font-medium text-amber-800 group-hover:text-amber-600">Business Interruption</h3>
                    <p className="text-sm text-gray-600">Gangguan usaha dari properti</p>
                  </a>
                  <a href="/industrial-all-risk" className="block p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition group border border-teal-200">
                    <h3 className="font-medium text-teal-800 group-hover:text-teal-600">Industrial All Risk</h3>
                    <p className="text-sm text-gray-600">Perlindungan properti industri</p>
                  </a>
                  <a href="/asuransi-engineering" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group border border-blue-200">
                    <h3 className="font-medium text-blue-800 group-hover:text-blue-600">Engineering Insurance</h3>
                    <p className="text-sm text-gray-600">Halaman utama engineering</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-violet-700 to-purple-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh MLOP Insurance?</h3>
                <p className="text-violet-100 mb-4 text-sm">
                  Kami membantu menghitung nilai pertanggungan berdasarkan kapasitas produksi dan laporan keuangan perusahaan Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Machinery%20Loss%20of%20Profit%20untuk%20mesin%20produksi%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-violet-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Polis Terkait */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Polis Utama</h3>
                <div className="space-y-3">
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-violet-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-violet-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Kerusakan mesin</p>
                  </a>
                  <a href="/industrial-all-risk" className="block p-3 bg-gray-50 hover:bg-violet-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-violet-600">Industrial All Risk</h4>
                    <p className="text-sm text-gray-500">Properti industri</p>
                  </a>
                  <a href="/business-interruption" className="block p-3 bg-gray-50 hover:bg-violet-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-violet-600">Business Interruption</h4>
                    <p className="text-sm text-gray-500">Gangguan usaha</p>
                  </a>
                </div>
              </div>

              {/* Asuransi Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Engineering Insurance</h4>
                    <p className="text-sm text-gray-500">CAR, EAR, MB</p>
                  </a>
                  <a href="/property-insurance" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Property Insurance</h4>
                    <p className="text-sm text-gray-500">PAR, IAR, BI</p>
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
