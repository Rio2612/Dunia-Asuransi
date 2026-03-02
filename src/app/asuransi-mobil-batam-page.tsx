import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asuransi Mobil Batam Terbaik 2025 | Premi & Simulasi Gratis',
  description: 'Cari asuransi mobil Batam? Dapatkan premi terbaik, proses cepat, dan konsultasi gratis melalui mitra agen resmi terdaftar. Simulasi premi sekarang.',
  keywords: 'asuransi mobil batam, asuransi kendaraan batam, asuransi mobil all risk, asuransi mobil TLO, premi asuransi mobil, klaim asuransi mobil',
  openGraph: {
    title: 'Asuransi Mobil Batam – Premi Terbaik & Klaim Mudah',
    description: 'Konsultasi gratis asuransi mobil di Batam. All Risk & TLO. Proses cepat dan polis digital.',
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Berapa premi asuransi mobil di Batam?',
    answer: 'Premi tergantung harga kendaraan, tahun pembuatan, dan jenis perlindungan. Rata-rata All Risk mulai 2-3% dari harga mobil per tahun. Untuk estimasi akurat, hubungi tim kami untuk simulasi gratis.'
  },
  {
    question: 'Apakah mobil bekas bisa diasuransikan?',
    answer: 'Ya, mobil bekas tetap bisa diasuransikan selama memenuhi ketentuan usia kendaraan dari perusahaan asuransi. Umumnya mobil dengan usia hingga 10-15 tahun masih dapat mendapatkan perlindungan All Risk.'
  },
  {
    question: 'Berapa lama proses polis terbit?',
    answer: 'Biasanya 1-3 hari kerja setelah survey kendaraan dan pembayaran premi dilakukan. Untuk polis digital, proses bisa lebih cepat dan polis langsung dikirim via email.'
  },
  {
    question: 'Apa perbedaan All Risk dan TLO?',
    answer: 'All Risk menanggung kerusakan ringan hingga berat termasuk baret, sedangkan TLO hanya menanggung kehilangan atau kerusakan total di atas 75%. All Risk premi lebih tinggi tapi perlindungan lebih lengkap.'
  },
  {
    question: 'Bagaimana proses klaim asuransi mobil?',
    answer: 'Hubungi kami segera setelah kejadian, siapkan dokumen (SIM, STNK, polis, foto kerusakan), tim surveyor akan memeriksa, dan klaim akan diproses dalam 3-14 hari kerja tergantung kompleksitas.'
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
  "headline": "Asuransi Mobil Batam – Premi Terbaik & Klaim Mudah",
  "description": "Panduan lengkap asuransi mobil di Batam dengan pilihan All Risk dan TLO.",
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
  "dateModified": "2025-01-01"
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Dunia Asuransi - Konsultan Asuransi Mobil Batam",
  "areaServed": "Batam",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Batam",
    "addressRegion": "Kepulauan Riau",
    "addressCountry": "ID"
  },
  "telephone": "+628131556592"
};

export default function AsuransiMobilBatam() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <span className="text-blue-200">Asuransi Mobil Batam</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asuransi Mobil Batam
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-4">
              Premi Terbaik & Klaim Mudah
            </p>
            <p className="text-blue-200 max-w-3xl mb-8">
              Lindungi kendaraan Anda di Batam dengan perlindungan All Risk atau TLO. 
              Konsultasi gratis dan pengurusan polis melalui mitra agen resmi terdaftar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20ingin%20konsultasi%20Asuransi%20Mobil%20di%20Batam" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cek Premi Sekarang
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
              
              {/* Why Important */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                    </svg>
                  </span>
                  Kenapa Asuransi Mobil Penting di Batam?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Batam merupakan kota industri dengan mobilitas tinggi. Aktivitas pabrik, pelabuhan, dan perdagangan membuat intensitas lalu lintas sangat padat. Risiko kecelakaan, kerusakan, hingga kehilangan kendaraan cukup besar di daerah ini.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan asuransi mobil yang tepat, Anda tidak perlu khawatir terhadap biaya perbaikan yang mahal. Satu kecelakaan kecil saja bisa menghabiskan biaya jutaan rupiah, sementara premi asuransi jauh lebih terjangkau sebagai bentuk perlindungan finansial.
                </p>
              </section>

              {/* Types */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Jenis Asuransi Mobil yang Tersedia
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-800">All Risk (Comprehensive)</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Menanggung kerusakan ringan hingga berat, termasuk baret, benturan, kecelakaan, dan kehilangan.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan ringan & berat
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kehilangan kendaraan
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Bencana alam & huru-hara
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-amber-800">Total Loss Only (TLO)</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Menanggung kehilangan atau kerusakan total di atas 75% dari nilai kendaraan.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Premi lebih terjangkau
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kehilangan kendaraan
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan total (&gt;75%)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Estimasi Premi */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Estimasi Premi Asuransi Mobil Batam
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Berikut adalah estimasi premi berdasarkan harga kendaraan. Premi aktual dapat bervariasi tergantung tahun kendaraan, merek, dan profil risiko pengemudi.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="border p-4 text-left">Harga Mobil</th>
                        <th className="border p-4 text-left">All Risk</th>
                        <th className="border p-4 text-left">TLO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-4 font-medium">Rp 150.000.000</td>
                        <td className="border p-4 text-blue-600 font-semibold">± Rp 3-4 juta/thn</td>
                        <td className="border p-4 text-amber-600 font-semibold">± Rp 1 juta/thn</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border p-4 font-medium">Rp 250.000.000</td>
                        <td className="border p-4 text-blue-600 font-semibold">± Rp 5-6 juta/thn</td>
                        <td className="border p-4 text-amber-600 font-semibold">± Rp 1,5 juta/thn</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border p-4 font-medium">Rp 400.000.000</td>
                        <td className="border p-4 text-blue-600 font-semibold">± Rp 8-10 juta/thn</td>
                        <td className="border p-4 text-amber-600 font-semibold">± Rp 2,5 juta/thn</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border p-4 font-medium">Rp 600.000.000</td>
                        <td className="border p-4 text-blue-600 font-semibold">± Rp 12-15 juta/thn</td>
                        <td className="border p-4 text-amber-600 font-semibold">± Rp 3,5 juta/thn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  * Premi tergantung tahun kendaraan, merek, usia pengemudi, dan area garasi. Hubungi kami untuk simulasi akurat.
                </p>
              </section>

              {/* Proses Pengajuan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </span>
                  Proses Pengajuan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Kirim Data Kendaraan</h3>
                      <p className="text-gray-600 text-sm">Kirim data via WhatsApp (merk, tahun, nomor rangka/mesin)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dapatkan Penawaran</h3>
                      <p className="text-gray-600 text-sm">Tim kami akan memberikan penawaran premi dari beberapa asuransi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Survey Kendaraan</h3>
                      <p className="text-gray-600 text-sm">Surveyor akan memeriksa kondisi kendaraan Anda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Polis Terbit</h3>
                      <p className="text-gray-600 text-sm">Polis digital dikirim via email dalam 1-3 hari kerja</p>
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Konsultasi Gratis</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Jangan tunggu sampai risiko terjadi. Lindungi mobil Anda sekarang dengan asuransi terbaik.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20ingin%20simulasi%20premi%20asuransi%20mobil%20di%20Batam" 
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

              {/* Layanan Lainnya */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Kargo</h4>
                    <p className="text-sm text-gray-500">Pengiriman barang & logistik</p>
                  </a>
                  <a href="/asuransi-engineering" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Engineering</h4>
                    <p className="text-sm text-gray-500">Proyek konstruksi & industri</p>
                  </a>
                  <a href="/asuransi-liability" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab hukum</p>
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
