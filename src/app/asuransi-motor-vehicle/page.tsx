import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Motor Vehicle | Kendaraan & Alat Berat | Dunia Asuransi',
  description: 'Asuransi Motor Vehicle memberikan perlindungan komprehensif untuk armada kendaraan bisnis, mobil pribadi, dan alat berat konstruksi.',
  keywords: 'Asuransi Motor Vehicle, Asuransi Mobil, Asuransi Alat Berat, Asuransi Excavator, Asuransi Bulldozer, Asuransi Crane',
  alternates: {
    canonical: `${baseUrl}/asuransi-motor-vehicle`,
  },
  openGraph: {
    title: 'Asuransi Motor Vehicle | Kendaraan & Alat Berat',
    description: 'Perlindungan menyeluruh untuk armada kendaraan dan alat berat proyek Anda.',
    url: `${baseUrl}/asuransi-motor-vehicle`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Motor Vehicle?',
    answer: 'Asuransi Motor Vehicle adalah polis asuransi yang memberikan perlindungan terhadap kerusakan atau kehilangan atas kendaraan bermotor. Cakupannya tidak hanya mobil pribadi, tetapi juga kendaraan komersial dan alat berat.'
  },
  {
    question: 'Apa saja jenis kendaraan yang bisa diasuransikan?',
    answer: 'Kami menangani berbagai jenis kendaraan meliputi: Mobil penumpang (sedan, SUV), kendaraan komersial (truk, pick-up, bus), serta alat berat seperti Excavator, Bulldozer, Wheel Loader, dan Crane.'
  },
  {
    question: 'Risiko apa saja yang dijamin dalam polis ini?',
    answer: 'Polis standar menjamin risiko kecelakaan (tabrakan, terguling), kebakaran, perbuatan jahat (pencurian), dan tanggung jawab hukum terhadap pihak ketiga (TJH).'
  }
];

const vehicleTypes = [
  { name: 'Mobil Penumpang', desc: 'Sedan, SUV, MPV untuk kebutuhan pribadi atau dinas', icon: '🚗' },
  { name: 'Kendaraan Komersial', desc: 'Truk, pick-up, bus untuk operasional bisnis', icon: '🚚' },
  { name: 'Excavator', desc: 'Alat berat untuk gali mungkir dan muat material', icon: '🚜' },
  { name: 'Bulldozer', desc: 'Alat berat untuk dorong tanah dan perataan lahan', icon: '🛣️' },
  { name: 'Wheel Loader', desc: 'Alat muat material dengan roda karet', icon: '⚙️' },
  { name: 'Crane', desc: 'Alat angkat untuk konstruksi dan pabrik', icon: '🏗️' }
];

const advantages = [
  { title: 'Perlindungan Armada', desc: 'Diskusi khusus untuk pengelolaan armada banyak', icon: '🛡️' },
  { title: 'Alat Berat Spesialis', desc: 'Tim berpengalaman menangani risiko konstruksi', icon: '🏗️' },
  { title: 'Klaim Cepat', desc: 'Proses klaim bengkel rekanan', icon: '⚡' },
  { title: 'Fleksibel', desc: 'Pilihan perluasan jaminan sesuai proyek', icon: '🔧' }
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
  "headline": "Asuransi Motor Vehicle",
  "author": {
    "@type": "Person",
    "name": "Rio Mardiansyah"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dunia Asuransi"
  }
};

export default function MotorVehiclePage() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        <div className="bg-red-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <span className="text-red-300">Motor Vehicle Insurance</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-800 via-rose-700 to-orange-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asuransi Motor Vehicle
            </h1>
            <p className="text-xl text-red-100 max-w-3xl">
              Perlindungan komprehensif untuk armada kendaraan bisnis, mobil pribadi, hingga alat berat konstruksi.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Motor%20Vehicle" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              
              <section className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Kendaraan operasional dan alat berat adalah tulang punggung bisnis Anda. Risiko kerusakan akibat kecelakaan atau kehilangan dapat mengganggu operasional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Asuransi Motor Vehicle</strong> memberikan solusi perlindungan untuk berbagai jenis kendaraan.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Jenis Kendaraan yang Dijamin</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {vehicleTypes.map((obj, index) => (
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

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Keunggulan Layanan</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {advantages.map((adv, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{adv.icon}</span>
                        <h3 className="font-semibold text-red-800">{adv.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Pertanyaan Umum</h2>
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

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Produk Motor Vehicle</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="/asuransi-mobil-batam" className="block p-4 bg-red-50 hover:bg-red-100 rounded-lg transition group border border-red-200">
                    <h3 className="font-medium text-red-800 group-hover:text-red-600">Asuransi Mobil</h3>
                    <p className="text-sm text-gray-600">Perlindungan mobil pribadi & dinas</p>
                  </a>
                  <a href="/asuransi-excavator" className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition group border border-orange-200">
                    <h3 className="font-medium text-orange-800 group-hover:text-orange-600">Asuransi Excavator</h3>
                    <p className="text-sm text-gray-600">Alat berat gali mungkir</p>
                  </a>
                  <a href="/asuransi-bulldozer" className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition group border border-amber-200">
                    <h3 className="font-medium text-amber-800 group-hover:text-amber-600">Asuransi Bulldozer</h3>
                    <p className="text-sm text-gray-600">Alat berat dorong tanah</p>
                  </a>
                  <a href="/asuransi-wheel-loader" className="block p-4 bg-lime-50 hover:bg-lime-100 rounded-lg transition group border border-lime-200">
                    <h3 className="font-medium text-lime-800 group-hover:text-lime-600">Asuransi Wheel Loader</h3>
                    <p className="text-sm text-gray-600">Alat muat material</p>
                  </a>
                  <a href="/asuransi-crane" className="block p-4 bg-sky-50 hover:bg-sky-100 rounded-lg transition group border border-sky-200 md:col-span-2">
                    <h3 className="font-medium text-sky-800 group-hover:text-sky-600">Asuransi Crane</h3>
                    <p className="text-sm text-gray-600">Alat angkat konstruksi</p>
                  </a>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-700 to-rose-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Asuransi Kendaraan?</h3>
                <p className="text-red-100 mb-4 text-sm">
                  Konsultasikan kebutuhan perlindungan armada atau alat berat Anda dengan kami.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Asuransi%20Motor%20Vehicle" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-red-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Kategori Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <a href="/property-insurance" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Property Insurance</h4>
                    <p className="text-sm text-gray-500">Gedung, pabrik, gudang</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Cargo & pengiriman barang</p>
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
