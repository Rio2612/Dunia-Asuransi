import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Interruption Insurance | Asuransi Kehilangan Laba | Dunia Asuransi',
  description: 'Business Interruption Insurance memberikan perlindungan terhadap kehilangan laba dan biaya operasional tetap akibat gangguan usaha karena kerusakan properti.',
  keywords: 'Business Interruption Insurance, Asuransi Gangguan Usaha, Asuransi Kehilangan Laba, Loss of Profit Insurance, BI Insurance, consequential loss',
  openGraph: {
    title: 'Business Interruption Insurance | Asuransi Kehilangan Laba',
    description: 'Perlindungan terhadap kehilangan laba akibat gangguan operasional bisnis.',
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Business Interruption Insurance?',
    answer: 'Business Interruption Insurance adalah perlindungan terhadap kehilangan laba dan biaya tetap operasional akibat gangguan usaha karena kerusakan properti yang dijamin polis. Asuransi ini mengganti kerugian pendapatan yang tidak diterima selama periode pemulihan usaha setelah terjadi kerusakan akibat risiko pertanggungan seperti kebakaran, gempa bumi, atau banjir.'
  },
  {
    question: 'Apa saja yang dijamin oleh Business Interruption Insurance?',
    answer: 'Polis dapat menjamin kehilangan laba kotor (gross profit), biaya tetap seperti gaji karyawan, sewa gedung, dan cicilan, biaya tambahan untuk mempercepat pemulihan operasional (increased cost of working), serta biaya profesional seperti akuntan untuk menghitung klaim. Cakupan berlaku selama periode indemnity hingga usaha kembali normal.'
  },
  {
    question: 'Apakah Business Interruption dapat berdiri sendiri?',
    answer: 'Umumnya Business Interruption merupakan perluasan dari polis Property All Risk, Industrial All Risk, atau Machinery Breakdown. Polis ini tidak berdiri sendiri karena trigger-nya adalah kerusakan fisik pada properti yang dijamin oleh polis utama. Namun, ada juga varian standalone untuk kebutuhan khusus.'
  },
  {
    question: 'Bagaimana cara menghitung nilai pertanggungan Business Interruption?',
    answer: 'Nilai pertanggungan dihitung berdasarkan proyeksi pendapatan dan biaya selama periode indemnity (biasanya 12 bulan). Faktor yang dipertimbangkan meliputi laba kotor tahun sebelumnya, tren pertumbuhan usaha, biaya tetap yang tetap berjalan, dan periode pemulihan yang diperlukan. Konsultasi dengan broker asuransi dan akuntan sangat dianjurkan.'
  },
  {
    question: 'Berapa lama periode indemnity yang ideal?',
    answer: 'Periode indemnity idealnya mencerminkan waktu yang dibutuhkan untuk memulihkan operasional penuh setelah kerusakan. Untuk bisnis umum, periode 12 bulan adalah standar. Namun untuk industri yang membutuhkan waktu pemulihan lebih lama (seperti pabrik dengan mesin khusus), periode 18-24 bulan mungkin lebih tepat. Pertimbangkan juga waktu rekonstruksi bangunan dan pengurusan perizinan.'
  }
];

const benefits = [
  { title: 'Kehilangan Laba Kotor', desc: 'Ganti rugi pendapatan yang hilang selama periode gangguan usaha', icon: '📉' },
  { title: 'Biaya Tetap', desc: 'Gaji karyawan, sewa gedung, cicilan yang tetap berjalan', icon: '📋' },
  { title: 'Biaya Pemulihan', desc: 'Increased cost of working untuk mempercepat operasional', icon: '⚡' },
  { title: 'Periode Indemnity', desc: 'Perlindungan berlaku hingga usaha kembali normal', icon: '📅' }
];

const linkedPolicies = [
  { name: 'Property All Risk', href: '/property-all-risk', desc: 'Untuk gedung kantor, hotel, mall', icon: '🏢' },
  { name: 'Industrial All Risk', href: '/industrial-all-risk', desc: 'Untuk pabrik dan fasilitas manufaktur', icon: '🏭' },
  { name: 'Machinery Breakdown', href: '/asuransi-machinery-breakdown', desc: 'Untuk kerusakan mesin produksi', icon: '⚙️' }
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
  "headline": "Business Interruption Insurance",
  "description": "Business Interruption Insurance memberikan perlindungan terhadap kehilangan laba dan biaya operasional tetap akibat gangguan usaha.",
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

export default function BusinessInterruptionPage() {
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
        <div className="bg-amber-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/property-insurance" className="hover:underline text-amber-200">Property Insurance</a>
              <span>/</span>
              <span className="text-amber-300">Business Interruption</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/property-insurance" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Property Insurance
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Business Interruption Insurance
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl">
              Asuransi Kehilangan Laba untuk perlindungan pendapatan selama gangguan usaha.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Business%20Interruption%20Insurance%20untuk%20bisnis%20saya" 
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
                  Kerusakan bangunan atau mesin tidak hanya menimbulkan biaya perbaikan, tetapi juga dapat menghentikan operasional usaha secara total. Dampaknya bisa berupa kehilangan omzet, gangguan arus kas, hingga kesulitan memenuhi kewajiban finansial seperti gaji karyawan dan pembayaran cicilan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Business Interruption Insurance</strong> memberikan perlindungan terhadap kehilangan laba dan biaya operasional tetap selama periode pemulihan akibat risiko yang dijamin polis properti. Asuransi ini membantu bisnis tetap bertahan hingga operasional kembali normal.
                </p>
              </section>

              {/* Apa itu BI */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Apa itu Business Interruption Insurance?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Business Interruption Insurance (BI) atau Asuransi Gangguan Usaha adalah polis yang memberikan ganti rugi atas kehilangan pendapatan akibat gangguan operasional bisnis. Trigger klaim adalah kerusakan fisik pada properti yang dijamin oleh polis utama seperti Property All Risk atau Industrial All Risk.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Asuransi ini sangat penting karena meskipun biaya perbaikan bangunan atau mesin dapat diganti oleh polis properti, kerugian pendapatan selama periode pemulihan tidak akan diganti tanpa BI Insurance. Banyak bisnis yang mampu memperbaiki fasilitas fisik, namun gagal bertahan karena kehilangan pendapatan terlalu lama.
                </p>
              </section>

              {/* Manfaat */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              {/* Detail Manfaat */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Detail Cakupan
                </h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Kehilangan Laba Kotor (Gross Profit)</h3>
                    <p className="text-sm text-gray-600">Ganti rugi atas pendapatan yang seharusnya diterima jika tidak terjadi gangguan usaha. Dihitung berdasarkan proyeksi penjualan dikurangi biaya variabel.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Biaya Tetap (Standing Charges)</h3>
                    <p className="text-sm text-gray-600">Biaya yang tetap harus dibayar meskipun usaha tidak beroperasi, seperti gaji karyawan, sewa gedung, asuransi, dan cicilan pinjaman.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Increased Cost of Working</h3>
                    <p className="text-sm text-gray-600">Biaya tambahan yang dikeluarkan untuk mempercepat pemulihan operasional, seperti sewa lokasi sementara, rental peralatan pengganti, atau lembur karyawan.</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Claims Preparation Cost</h3>
                    <p className="text-sm text-gray-600">Biaya profesional seperti akuntan publik untuk menyiapkan dan memverifikasi klaim Business Interruption.</p>
                  </div>
                </div>
              </section>

              {/* Kombinasi dengan Polis Lain */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Kombinasi dengan Polis Lain
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Business Interruption umumnya menjadi perluasan dari polis properti utama. Polis ini tidak berdiri sendiri karena trigger-nya adalah kerusakan fisik pada properti:
                </p>
                
                <div className="space-y-3">
                  {linkedPolicies.map((policy, index) => (
                    <a 
                      key={index}
                      href={policy.href} 
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-amber-50 rounded-lg transition group"
                    >
                      <span className="text-2xl">{policy.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 group-hover:text-amber-600">{policy.name}</h3>
                        <p className="text-sm text-gray-500">{policy.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>

              {/* Mengapa Penting */}
              <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Mengapa Business Interruption Penting?
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Banyak bisnis mampu memperbaiki bangunan atau mesin yang rusak, tetapi tidak mampu menanggung kehilangan pendapatan selama berbulan-bulan pemulihan. Statistik menunjukkan bahwa sejumlah besar bisnis yang mengalami bencana besar tidak pernah pulih, bukan karena biaya perbaikan, tetapi karena kerugian pendapatan yang tidak dapat ditanggung.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-1">40%</div>
                    <p className="text-sm text-gray-600">Bisnis tidak pulih setelah bencana besar</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-1">6-12 bln</div>
                    <p className="text-sm text-gray-600">Rata-rata waktu pemulihan operasional</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-1">75%</div>
                    <p className="text-sm text-gray-600">Bisnis tanpa BI gagal dalam 3 tahun</p>
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
                  <a href="/property-all-risk" className="block p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition group border border-emerald-200">
                    <h3 className="font-medium text-emerald-800 group-hover:text-emerald-600">Property All Risk</h3>
                    <p className="text-sm text-gray-600">Asuransi properti komersial</p>
                  </a>
                  <a href="/industrial-all-risk" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group border border-blue-200">
                    <h3 className="font-medium text-blue-800 group-hover:text-blue-600">Industrial All Risk</h3>
                    <p className="text-sm text-gray-600">Asuransi pabrik & manufaktur</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Machinery Breakdown</h3>
                    <p className="text-sm text-gray-600">Asuransi kerusakan mesin</p>
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
              <div className="bg-gradient-to-br from-amber-700 to-orange-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Business Interruption?</h3>
                <p className="text-amber-100 mb-4 text-sm">
                  Kami membantu menghitung nilai pertanggungan yang tepat berdasarkan laporan keuangan dan proyeksi usaha Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Business%20Interruption%20Insurance%20untuk%20bisnis%20saya" 
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

              {/* Polis Terkait */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Polis Utama</h3>
                <div className="space-y-3">
                  <a href="/property-all-risk" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Property All Risk</h4>
                    <p className="text-sm text-gray-500">Gedung komersial</p>
                  </a>
                  <a href="/industrial-all-risk" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Industrial All Risk</h4>
                    <p className="text-sm text-gray-500">Pabrik & manufaktur</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-amber-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-amber-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Kerusakan mesin</p>
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
