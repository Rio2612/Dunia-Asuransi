import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Erection All Risk (EAR) | Pemasangan Mesin & Instalasi',
  description: 'Asuransi EAR melindungi risiko selama proses pemasangan mesin, instalasi pabrik, dan proyek mekanikal-elektrikal. Konsultasi kebutuhan proyek Anda: 0813-1556-592.',
  keywords: 'asuransi ear, erection all risk, asuransi pemasangan mesin, asuransi instalasi pabrik, asuransi proyek mekanikal, engineering insurance, asuransi commissioning',
  alternates: {
    canonical: `${baseUrl}/asuransi-ear`,
  },
  openGraph: {
    title: 'Asuransi Erection All Risk (EAR) | Pemasangan Mesin & Instalasi',
    description: 'Asuransi EAR melindungi risiko selama proses pemasangan mesin, instalasi pabrik, dan proyek mekanikal-elektrikal.',
    url: `${baseUrl}/asuransi-ear`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Erection All Risk (EAR)?',
    answer: 'Asuransi EAR adalah polis asuransi yang memberikan perlindungan terhadap risiko kerusakan fisik dan tanggung jawab hukum selama proses pemasangan mesin, instalasi pabrik, dan proyek mekanikal-elektrikal.'
  },
  {
    question: 'Apa perbedaan EAR dengan CAR?',
    answer: 'CAR (Construction All Risk) fokus pada proyek pembangunan konstruksi sipil, sedangkan EAR fokus pada pemasangan mesin, instalasi peralatan, dan proyek mekanikal-elektrikal. EAR mencakup fase testing dan commissioning.'
  },
  {
    question: 'Siapa yang membutuhkan Asuransi EAR?',
    answer: 'Kontraktor mekanikal-elektrikal, pemasok mesin, pemilik pabrik, perusahaan manufaktur yang melakukan instalasi baru atau ekspansi, serta pihak yang terlibat dalam proyek pemasangan peralatan industri.'
  },
  {
    question: 'Apa saja yang dicakup oleh Asuransi EAR?',
    answer: 'EAR mencakup kerusakan fisik pada mesin/peralatan yang dipasang, kerusakan akibat kesalahan pemasangan, risiko selama testing & commissioning, serta tanggung jawab hukum terhadap pihak ketiga.'
  },
  {
    question: 'Berapa lama masa pertanggungan EAR?',
    answer: 'Masa pertanggungan EAR mencakup periode pemasangan hingga testing & commissioning, biasanya 6-24 bulan tergantung kompleksitas proyek. Perluasan maintenance period juga tersedia.'
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
  "headline": "Asuransi Erection All Risk (EAR) | Pemasangan Mesin & Instalasi",
  "description": "Asuransi EAR melindungi risiko selama proses pemasangan mesin, instalasi pabrik, dan proyek mekanikal-elektrikal.",
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

export default function EARPage() {
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
              <a href="/asuransi-engineering" className="hover:underline text-orange-300">Asuransi Engineering</a>
              <span>/</span>
              <span className="text-slate-300">Erection All Risk</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/asuransi-engineering" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Asuransi Engineering
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asuransi Erection All Risk (EAR)
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              Perlindungan komprehensif untuk proyek pemasangan mesin, instalasi pabrik, dan pekerjaan mekanikal-elektrikal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20EAR%20untuk%20proyek%20pemasangan" 
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
              
              {/* Section: Pengertian */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  Apa itu Asuransi Erection All Risk?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asuransi Erection All Risk (EAR) adalah polis asuransi engineering yang memberikan perlindungan komprehensif terhadap berbagai risiko yang mungkin terjadi selama proses pemasangan mesin, instalasi peralatan pabrik, dan pekerjaan mekanikal-elektrikal. Polis ini dirancang khusus untuk mengakomodasi karakteristik unik dari proyek-proyek instalasi yang melibatkan peralatan teknis kompleks.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Berbeda dengan asuransi konstruksi umum yang fokus pada pembangunan fisik bangunan, asuransi EAR secara spesifik menangani risiko-risiko yang terkait dengan fase pemasangan dan instalasi peralatan. Hal ini mencakup risiko kerusakan selama proses mounting, alignment, connection, hingga tahap testing dan commissioning yang kritis bagi keberhasilan operasional peralatan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Perlindungan EAR menjadi sangat penting mengingat nilai peralatan yang dipasang sering kali sangat tinggi, sementara risiko kerusakan akibat kesalahan teknis atau prosedural cukup besar. Satu kesalahan kecil dalam proses pemasangan dapat mengakibatkan kerugian finansial yang signifikan dan keterlambatan operasional yang merugikan seluruh proyek.
                </p>
              </section>

              {/* Section: Perbedaan EAR vs CAR */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  Perbedaan EAR dengan CAR
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Meskipun keduanya merupakan asuransi engineering, EAR dan CAR memiliki fokus dan cakupan yang berbeda. Pemahaman yang tepat mengenai perbedaan ini akan membantu Anda memilih polis yang sesuai dengan karakteristik proyek.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Aspek</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-teal-700">EAR</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-blue-700">CAR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 font-medium">Fokus Proyek</td>
                        <td className="border border-slate-200 px-4 py-3">Pemasangan mesin & peralatan</td>
                        <td className="border border-slate-200 px-4 py-3">Pembangunan konstruksi sipil</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Jenis Pekerjaan</td>
                        <td className="border border-slate-200 px-4 py-3">Mekanikal, elektrikal, plumbing</td>
                        <td className="border border-slate-200 px-4 py-3">Struktural, arsitektural</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 font-medium">Testing & Commissioning</td>
                        <td className="border border-slate-200 px-4 py-3">Dicakup secara khusus</td>
                        <td className="border border-slate-200 px-4 py-3">Perluasan opsional</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Nilai Pertanggungan</td>
                        <td className="border border-slate-200 px-4 py-3">Nilai mesin + biaya instalasi</td>
                        <td className="border border-slate-200 px-4 py-3">Nilai konstruksi + material</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: Cakupan Perlindungan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                    </svg>
                  </span>
                  Cakupan Perlindungan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Asuransi EAR memberikan perlindungan yang komprehensif untuk berbagai risiko yang mungkin terjadi selama fase pemasangan dan instalasi. Berikut adalah cakupan utama dari polis ini.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                    <h3 className="font-semibold text-teal-800 mb-3">Kerusakan Fisik Peralatan</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan selama penyimpanan di lokasi
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan saat unloading & positioning
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kesalahan pemasangan & alignment
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan saat testing & commissioning
                      </li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-5 border border-amber-100">
                    <h3 className="font-semibold text-amber-800 mb-3">Tanggung Jawab Pihak Ketiga</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Cedera pada pekerja atau pengunjung
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Kerusakan properti milik pihak ketiga
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Biaya hukum dan pengadilan
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Klama kontaminasi lingkungan
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section: Proyek yang Cocok */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Proyek yang Membutuhkan EAR
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Berbagai jenis proyek instalasi dan pemasangan peralatan industri sangat cocok untuk diasuransikan dengan polis EAR. Berikut adalah beberapa contoh proyek yang umumnya menggunakan asuransi ini.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">🏭 Pabrik Manufaktur</h3>
                    <p className="text-sm text-gray-600">Instalasi lini produksi, conveyor system, dan peralatan manufaktur</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">⚡ Pembangkit Listrik</h3>
                    <p className="text-sm text-gray-600">Instalasi turbin, generator, transformator, dan switchgear</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">🛢️ Industri Petrokimia</h3>
                    <p className="text-sm text-gray-600">Pemasangan tangki, reaktor, sistem perpipaan, dan utilitas</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">🏗️ Gedung Bertingkat</h3>
                    <p className="text-sm text-gray-600">Instalasi elevator, escalator, HVAC, dan sistem building</p>
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
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Konsultasi Proyek EAR</h3>
                <p className="text-teal-100 mb-4 text-sm">
                  Hubungi tim kami untuk menyusun struktur perlindungan EAR yang sesuai dengan kebutuhan proyek pemasangan Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20EAR%20untuk%20proyek%20instalasi" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-teal-200 text-center">
                  Rio Mardiansyah - Insurance Konsultan
                </p>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jenis Asuransi Engineering Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-car-indonesia" className="block p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-teal-600">Construction All Risk (CAR)</h4>
                    <p className="text-sm text-gray-500">Asuransi proyek konstruksi</p>
                  </a>
                  <a href="/asuransi-machinery-breakdown" className="block p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-teal-600">Machinery Breakdown</h4>
                    <p className="text-sm text-gray-500">Asuransi kerusakan mesin</p>
                  </a>
                </div>
              </div>

              {/* Back to Pillar */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <a href="/asuransi-engineering" className="flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Asuransi Engineering
                </a>
                <p className="text-sm text-gray-600 mt-2">Lihat semua jenis asuransi engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
