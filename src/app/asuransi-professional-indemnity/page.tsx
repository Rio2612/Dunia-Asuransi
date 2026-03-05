import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Professional Indemnity Indonesia | Perlindungan Profesi',
  description: 'Asuransi Professional Indemnity melindungi profesional dari klaim akibat kelalaian, kesalahan, atau kelalaian dalam memberikan jasa profesional. Konsultasi gratis: 0813-1556-592.',
  keywords: 'asuransi professional indemnity, asuransi tanggung jawab profesi, professional liability insurance, asuransi untuk konsultan, asuransi pengacara, asuransi akuntan, asuransi dokter, asuransi arsitek, klaim profesional, perlindungan profesi Indonesia',
  alternates: {
    canonical: `${baseUrl}/asuransi-professional-indemnity`,
  },
  openGraph: {
    title: 'Asuransi Professional Indemnity Indonesia | Perlindungan Profesi',
    description: 'Asuransi Professional Indemnity melindungi profesional dari klaim akibat kelalaian, kesalahan, atau kelalaian dalam memberikan jasa profesional.',
    url: `${baseUrl}/asuransi-professional-indemnity`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Professional Indemnity?',
    answer: 'Asuransi Professional Indemnity adalah asuransi yang melindungi profesional dari klaim pihak ketiga akibat kelalaian, kesalahan, atau kegagalan dalam memberikan jasa profesional. Asuransi ini menanggung biaya pertahanan hukum dan ganti rugi yang harus dibayar.'
  },
  {
    question: 'Siapa yang membutuhkan Asuransi Professional Indemnity?',
    answer: 'Semua profesional yang memberikan jasa berbasis keahlian membutuhkan asuransi ini, termasuk: konsultan, pengacara, akuntan, arsitek, insinyur, dokter, perawat, broker asuransi, agen real estate, desainer, dan penyedia jasa IT.'
  },
  {
    question: 'Apa saja risiko yang ditanggung?',
    answer: 'Risiko yang ditanggung meliputi: kesalahan profesional, kelalaian dalam pemberian jasa, pelanggaran kewajiban profesional, kegagalan memberikan hasil yang dijanjikan, kebocoran data klien, dan konflik kepentingan yang merugikan klien.'
  },
  {
    question: 'Berapa premi Asuransi Professional Indemnity?',
    answer: 'Premi bervariasi tergantung: jenis profesi, pendapatan tahunan, jumlah klien, kompleksitas layanan, klaim history, dan limit pertanggungan. Untuk estimasi premi yang akurat, hubungi tim Dunia Asuransi di 0813-1556-592.'
  },
  {
    question: 'Apakah asuransi ini wajib di Indonesia?',
    answer: 'Untuk beberapa profesi tertentu seperti pengacara, notaris, dan akuntan publik, asuransi professional indemnity diwajibkan oleh organisasi profesi atau regulasi. Meski tidak wajib untuk semua profesi, memiliki asuransi ini sangat direkomendasikan untuk melindungi reputasi dan aset pribadi.'
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
  "headline": "Asuransi Professional Indemnity Indonesia | Perlindungan Profesi",
  "description": "Asuransi Professional Indemnity melindungi profesional dari klaim akibat kelalaian, kesalahan, atau kelalaian dalam memberikan jasa profesional.",
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

export default function ProfessionalIndemnityPage() {
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
        {/* Breadcrumb & Back Link */}
        <div className="bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/asuransi-liability" className="hover:underline text-yellow-300">Asuransi Liability</a>
              <span>/</span>
              <span className="text-blue-200">Professional Indemnity</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <a href="/asuransi-liability" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Asuransi Liability
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asuransi Professional Indemnity
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Perlindungan komprehensif bagi profesional dari klaim pihak ketiga akibat kelalaian, kesalahan, atau kegagalan dalam memberikan jasa profesional.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Professional%20Indemnity" 
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
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596m-.618-9.016A11.955 11.955 0 0012 2.944c-2.186 0-4.236.583-6.016 1.596m.618 9.016c-.017.395-.017.79 0 1.186.017.395.052.788.104 1.178m.797-4.016c-.102.39-.182.788-.238 1.186-.056.398-.088.799-.096 1.186m4.016 4.016c-.017.395-.017.79 0 1.186.017.395.052.788.104 1.178" />
                    </svg>
                  </span>
                  Apa itu Asuransi Professional Indemnity?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asuransi Professional Indemnity, juga dikenal sebagai Professional Liability Insurance atau Malpractice Insurance, adalah jenis asuransi yang dirancang khusus untuk melindungi para profesional dari berbagai risiko hukum yang timbul akibat pelaksanaan tugas profesional mereka. Asuransi ini memberikan perlindungan finansial ketika klien atau pihak ketiga mengajukan klaim atas dasar kelalaian, kesalahan, atau kegagalan dalam memberikan jasa profesional yang dijanjikan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dalam praktiknya, asuransi ini menanggung biaya-biaya yang berkaitan dengan proses hukum, termasuk biaya pengacara untuk pertahanan diri, biaya pengadilan, serta ganti rugi atau kompensasi yang mungkin harus dibayarkan kepada pihak yang mengajukan klaim jika terbukti adanya kesalahan profesional. Perlindungan ini menjadi semakin penting di era modern di mana masyarakat semakin sadar akan hak-hak mereka dan lebih berani mengambil langkah hukum ketika merasa dirugikan oleh jasa profesional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Berbeda dengan asuransi tanggung jawab umum yang fokus pada kerugian fisik atau kerusakan properti, asuransi professional indemnity secara spesifik menangani risiko yang terkait dengan aspek intelektual dan keahlian dari suatu profesi. Hal ini mencakup kesalahan dalam memberikan nasihat, kegagalan dalam memenuhi standar profesional, hingga pelanggaran terhadap kerahasiaan informasi klien.
                </p>
              </section>

              {/* Section: Siapa yang Membutuhkan */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Siapa yang Membutuhkan Asuransi Ini?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Asuransi Professional Indemnity sangat relevan untuk berbagai profesi yang memberikan jasa berbasis keahlian dan pengetahuan khusus. Berikut adalah beberapa kategori profesional yang sangat membutuhkan perlindungan asuransi ini untuk mengamankan karir dan aset pribadi mereka dari risiko klaim hukum yang tidak terduga.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Konsultan Bisnis & Manajemen</h3>
                    <p className="text-sm text-gray-600">Konsultan strategi, manajemen, keuangan, dan bisnis yang memberikan nasihat strategis kepada klien.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Akuntan & Auditor</h3>
                    <p className="text-sm text-gray-600">Profesi yang menangani laporan keuangan dan audit yang rentan terhadap kesalahan perhitungan.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Pengacara & Notaris</h3>
                    <p className="text-sm text-gray-600">Praktisi hukum yang memberikan nasihat dan layanan legal kepada klien.</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">Arsitek & Insinyur</h3>
                    <p className="text-sm text-gray-600">Profesi teknik yang merancang bangunan dan infrastruktur dengan risiko kesalahan desain.</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-rose-800 mb-2">Tenaga Medis</h3>
                    <p className="text-sm text-gray-600">Dokter, perawat, dan praktisi kesehatan yang menghadapi risiko malpraktik.</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-cyan-800 mb-2">Profesi IT & Teknologi</h3>
                    <p className="text-sm text-gray-600">Developer, konsultan IT, dan penyedia jasa teknologi informasi.</p>
                  </div>
                </div>
              </section>

              {/* Section: Risiko yang Ditanggung */}
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
                  Asuransi Professional Indemnity memberikan perlindungan terhadap berbagai risiko yang mungkin dihadapi oleh para profesional dalam menjalankan tugas mereka. Pemahaman yang baik mengenai cakupan perlindungan ini akan membantu Anda dalam memilih polis yang tepat sesuai dengan kebutuhan profesi Anda.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Kesalahan Profesional</h3>
                      <p className="text-gray-600 text-sm">Kesalahan dalam memberikan nasihat, perhitungan yang keliru, atau keputusan profesional yang merugikan klien secara finansial maupun non-finansial.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Kelalaian dalam Pemberian Jasa</h3>
                      <p className="text-gray-600 text-sm">Kegagalan dalam melakukan tugas dengan standar profesional yang seharusnya, termasuk keterlambatan atau ketidaklengkapan dalam penyelesaian pekerjaan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pelanggaran Kerahasiaan</h3>
                      <p className="text-gray-600 text-sm">Pengungkapan informasi rahasia klien tanpa izin, baik sengaja maupun tidak sengaja, yang mengakibatkan kerugian bagi pihak yang bersangkutan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pencemaran Nama Baik</h3>
                      <p className="text-gray-600 text-sm">Pernyataan atau publikasi yang merusak reputasi pihak ketiga dalam konteks pelaksanaan tugas profesional.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pelanggaran Hak Kekayaan Intelektual</h3>
                      <p className="text-gray-600 text-sm">Penggunaan tanpa izin materi yang dilindungi hak cipta, merek dagang, atau hak kekayaan intelektual milik pihak lain.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Manfaat */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Manfaat Asuransi Professional Indemnity
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Memiliki asuransi Professional Indemnity memberikan berbagai keuntungan strategis bagi para profesional, tidak hanya dari aspek perlindungan finansial tetapi juga dari sisi kredibilitas dan kepercayaan klien. Berikut adalah manfaat-manfaat utama yang dapat diperoleh dari polis asuransi ini.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Perlindungan Finansial</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Menanggung biaya hukum dan ganti rugi yang dapat mencapai nilai sangat besar, melindungi aset pribadi dari risiko kebangkrutan.</p>
                  </div>
                  <div className="border border-blue-200 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Kredibilitas Profesional</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Meningkatkan kepercayaan klien potensial karena menunjukkan komitmen terhadap standar profesional dan tanggung jawab.</p>
                  </div>
                  <div className="border border-purple-200 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Perlindungan Reputasi</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Memberikan dukungan dalam mempertahankan reputasi profesional melalui penanganan klaim yang tepat dan profesional.</p>
                  </div>
                  <div className="border border-amber-200 rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Persyaratan Kontrak</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Memenuhi persyaratan banyak kontrak klien korporat dan proyek pemerintah yang mensyaratkan asuransi profesional.</p>
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
                <h3 className="text-xl font-bold mb-3">Butuh Konsultasi?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Hubungi tim ahli kami untuk mendapatkan penawaran Asuransi Professional Indemnity terbaik sesuai kebutuhan profesi Anda.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Professional%20Indemnity%20untuk%20profesi%20saya" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-blue-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jenis Asuransi Liability Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-public-liability" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Public Liability</h4>
                    <p className="text-sm text-gray-500">Perlindungan dari klaim pihak ketiga</p>
                  </a>
                  <a href="/asuransi-liability-limbah-b3" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Liability Limbah B3</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab pengelolaan limbah</p>
                  </a>
                  <a href="/asuransi-product-liability" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Product Liability</h4>
                    <p className="text-sm text-gray-500">Tanggung jawab atas produk yang dihasilkan</p>
                  </a>
                </div>
              </div>

              {/* Back to Pillar */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <a href="/asuransi-liability" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Asuransi Liability
                </a>
                <p className="text-sm text-gray-600 mt-2">Lihat semua jenis asuransi liability yang tersedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
