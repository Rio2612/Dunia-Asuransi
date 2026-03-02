import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jaminan Pelaksanaan (Performance Bond) | Dunia Asuransi',
  description: 'Jaminan Pelaksanaan menjamin kontraktor melaksanakan pekerjaan sesuai kontrak proyek. Konsultasi gratis: 0813-1556-592.',
  keywords: 'jaminan pelaksanaan, performance bond, surety bond, jaminan proyek, jaminan konstruksi, bank garansi, kontraktor',
  openGraph: {
    title: 'Jaminan Pelaksanaan (Performance Bond) | Dunia Asuransi',
    description: 'Jaminan Pelaksanaan menjamin kontraktor melaksanakan pekerjaan sesuai kontrak proyek.',
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Jaminan Pelaksanaan (Performance Bond)?',
    answer: 'Jaminan Pelaksanaan adalah surety bond yang menjamin kontraktor akan melaksanakan pekerjaan sesuai dengan spesifikasi, waktu, dan ketentuan yang tercantum dalam kontrak proyek. Jaminan ini melindungi pemilik proyek dari risiko kegagalan kontraktor.'
  },
  {
    question: 'Berapa nilai Jaminan Pelaksanaan?',
    answer: 'Nilai Jaminan Pelaksanaan biasanya berkisar antara 5-10% dari total nilai kontrak proyek. Persentase spesifik ditentukan dalam dokumen lelang atau kontrak kerja.'
  },
  {
    question: 'Kapan Jaminan Pelaksanaan diperlukan?',
    answer: 'Jaminan ini diperlukan setelah kontraktor memenangkan tender dan sebelum menandatangani kontrak proyek. Jaminan ini menjadi syarat mutlak untuk memulai pekerjaan konstruksi.'
  },
  {
    question: 'Apa yang terjadi jika kontraktor gagal menyelesaikan proyek?',
    answer: 'Jika kontraktor gagal atau wanprestasi dalam menyelesaikan pekerjaan sesuai kontrak, pemilik proyek (obligee) berhak mencairkan jaminan untuk memperoleh dana guna melanjutkan proyek dengan pihak lain.'
  },
  {
    question: 'Berapa lama masa berlaku Jaminan Pelaksanaan?',
    answer: 'Masa berlaku mengikuti periode pelaksanaan proyek yang tercantum dalam kontrak. Jaminan berakhir setelah proyek selesai dan diserahterimakan kepada pemilik proyek.'
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
  "headline": "Jaminan Pelaksanaan (Performance Bond)",
  "description": "Jaminan Pelaksanaan menjamin kontraktor melaksanakan pekerjaan sesuai kontrak proyek.",
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

export default function JaminanPelaksanaanPage() {
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
              <a href="/surety-bond" className="hover:underline text-amber-200">Surety Bond</a>
              <span>/</span>
              <span className="text-amber-300">Jaminan Pelaksanaan</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/surety-bond" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Surety Bond
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jaminan Pelaksanaan
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl">
              Performance Bond untuk menjamin kontraktor melaksanakan pekerjaan sesuai kontrak proyek.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Jaminan%20Pelaksanaan%20(Performance%20Bond)" 
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
                  Jaminan Pelaksanaan menjamin kontraktor melaksanakan pekerjaan sesuai ketentuan kontrak. Jaminan ini merupakan syarat mutlak dalam setiap proyek konstruksi untuk melindungi kepentingan pemilik proyek.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jika kontraktor gagal menyelesaikan pekerjaan atau terjadi wanprestasi, pemilik proyek (obligee) berhak mencairkan jaminan sesuai nilai yang tercantum untuk melanjutkan proyek dengan pihak lain.
                </p>
              </section>

              {/* Apa itu Performance Bond */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                    </svg>
                  </span>
                  Apa itu Jaminan Pelaksanaan?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jaminan Pelaksanaan atau <strong>Performance Bond</strong> adalah jenis surety bond yang mengikat kontraktor untuk menyelesaikan pekerjaan konstruksi sesuai dengan spesifikasi teknis, jadwal waktu, dan ketentuan lain yang tercantum dalam kontrak proyek. Jaminan ini diterbitkan oleh penanggung (surety) atas permintaan kontraktor (principal) untuk kepentingan pemilik proyek (obligee).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dalam konteks proyek pemerintah maupun swasta, jaminan ini menjadi instrumen penting untuk memastikan bahwa proyek dapat diselesaikan sesuai rencana. Tanpa jaminan ini, pemilik proyek menghadapi risiko finansial yang besar jika kontraktor tidak mampu memenuhi kewajibannya.
                </p>
              </section>

              {/* Nilai Jaminan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Nilai Jaminan Pelaksanaan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200 text-center">
                    <div className="text-3xl font-bold text-amber-700 mb-2">5%</div>
                    <p className="text-sm text-gray-600">Nilai minimum umum untuk proyek konstruksi</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200 text-center">
                    <div className="text-3xl font-bold text-amber-700 mb-2">10%</div>
                    <p className="text-sm text-gray-600">Nilai standar untuk proyek pemerintah</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  * Persentase nilai jaminan ditentukan berdasarkan ketentuan lelang dan dokumen kontrak proyek.
                </p>
              </section>

              {/* Kapan Diperlukan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Kapan Diperlukan?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Setelah Memenangkan Tender</h3>
                      <p className="text-gray-600 text-sm">Kontraktor yang dinyatakan pemenang tender wajib menyediakan jaminan pelaksanaan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Sebelum Penandatanganan Kontrak</h3>
                      <p className="text-gray-600 text-sm">Jaminan harus sudah diterbitkan sebelum kontrak kerja ditandatangani</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Sebelum Memulai Pekerjaan</h3>
                      <p className="text-gray-600 text-sm">Syarat mutlak untuk dapat memulai pelaksanaan proyek konstruksi</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risiko Wanprestasi */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Risiko yang Ditanggung
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Jaminan Pelaksanaan melindungi pemilik proyek dari berbagai risiko wanprestasi yang mungkin dilakukan oleh kontraktor. Berikut adalah kondisi yang dapat memicu pencairan jaminan:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Meninggalkan Pekerjaan</h3>
                      <p className="text-sm text-gray-600">Kontraktor berhenti bekerja tanpa alasan yang sah</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Keterlambatan Signifikan</h3>
                      <p className="text-sm text-gray-600">Melebihi batas waktu penyelesaian yang ditetapkan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Kualitas Tidak Sesuai</h3>
                      <p className="text-sm text-gray-600">Hasil pekerjaan tidak memenuhi spesifikasi kontrak</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-800">Pailit atau Bangkrut</h3>
                      <p className="text-sm text-gray-600">Kontraktor dinyatakan pailit selama masa kontrak</p>
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

              {/* Related Links */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Halaman Terkait</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="/surety-bond" className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition group border border-amber-200">
                    <h3 className="font-medium text-amber-800 group-hover:text-amber-600">Surety Bond</h3>
                    <p className="text-sm text-gray-600">Kembali ke halaman utama Surety Bond</p>
                  </a>
                  <a href="/asuransi-engineering" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group border border-blue-200">
                    <h3 className="font-medium text-blue-800 group-hover:text-blue-600">Asuransi Engineering</h3>
                    <p className="text-sm text-gray-600">Perlindungan risiko proyek konstruksi</p>
                  </a>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Jaminan Pelaksanaan?</h3>
                <p className="text-amber-100 mb-4 text-sm">
                  Konsultasikan kebutuhan jaminan proyek Anda dengan tim kami. Proses cepat dan kompetitif.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Jaminan%20Pelaksanaan%20(Performance%20Bond)%20untuk%20proyek" 
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
