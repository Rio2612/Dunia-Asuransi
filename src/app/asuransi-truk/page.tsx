import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Dump Truck | Perlindungan Kendaraan Niaga & Proyek | Dunia Asuransi',
  description: 'Asuransi dump truck memberikan perlindungan terhadap risiko kerusakan, kecelakaan, dan kehilangan kendaraan niaga dalam proyek konstruksi dan pertambangan.',
  keywords: 'asuransi dump truck, asuransi truk, asuransi kendaraan niaga, asuransi alat berat, asuransi pengangkut material',
  alternates: {
    canonical: `${baseUrl}/asuransi-truk`,
  },
  openGraph: {
    title: 'Asuransi Dump Truck | Perlindungan Kendaraan Niaga & Proyek',
    description: 'Perlindungan komprehensif untuk dump truck dalam operasional konstruksi dan pertambangan.',
    url: `${baseUrl}/asuransi-truk`,
    type: 'article',
    locale: 'id_ID',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Dump Truck?',
    answer: 'Asuransi Dump Truck adalah polis asuransi yang memberikan perlindungan finansial terhadap risiko kerusakan, kehilangan, atau kerugian akibat kecelakaan yang menimpa kendaraan dump truck yang digunakan untuk proyek konstruksi, pertambangan, atau pengangkutan material.'
  },
  {
    question: 'Risiko apa saja yang biasanya dijamin?',
    answer: 'Pada umumnya, polis ini menjamin risiko kecelakaan lalu lintas, terbaliknya kendaraan saat membuang material, kerusakan akibat beban berat, kebakaran, pencurian, dan risiko bencana alam seperti banjir atau longsor.'
  },
  {
    question: 'Apakah Asuransi Dump Truck termasuk Tanggung Jawab Hukum (TPL)?',
    answer: 'Ya, polis standar asuransi kendaraan bermotor termasuk dump truck dapat diperluas untuk menjamin Tanggung Jawab Hukum Pihak Ketiga (TPL), yaitu ganti rugi atas kerusakan atau cedera yang ditimbulkan kepada pihak lain.'
  }
];

const riskCovered = [
  { name: 'Kecelakaan Lalu Lintas', desc: 'Tabrakan di jalan umum atau lokasi proyek', icon: '🚧' },
  { name: 'Terbalik Saat Dumping', desc: 'Risiko terguling saat membuang material', icon: '⚠️' },
  { name: 'Kerusakan Mesin', desc: 'Kerusakan akibat beban operasional berat', icon: '🔧' },
  { name: 'Kebakaran', desc: 'Risiko kebakaran pada mesin atau bodi', icon: '🔥' },
  { name: 'Pencurian', desc: 'Kehilangan unit kendaraan', icon: '🚨' },
];

const advantages = [
  { title: 'Nilai Aset Terjaga', desc: 'Proteksi investasi kendaraan bernilai tinggi', icon: '💰' },
  { title: 'Operasional Lancar', desc: 'Mengurangi downtime akibat biaya perbaikan', icon: '🏗️' },
  { title: 'Perlindungan TPL', desc: 'Jaminan tanggung jawab hukum pihak ketiga', icon: '🛡️' },
  { title: 'Khusus Proyek', desc: 'Premi disesuaikan dengan risiko proyek', icon: '👷' }
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
  "headline": "Asuransi Dump Truck",
  "description": "Asuransi dump truck memberikan perlindungan terhadap risiko kerusakan dan kecelakaan kendaraan niaga.",
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

export default function AsuransiDumpTruckPage() {
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
      
      {/* Menggunakan tema Violet/Purple untuk Dump Truck */}
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
        
        {/* Breadcrumb */}
        <div className="bg-violet-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="hover:underline">Beranda</Link>
              <span>/</span>
              <Link href="/asuransi-motor-vehicle" className="hover:underline text-violet-200">Motor Vehicle Insurance</Link>
              <span>/</span>
              <span className="text-violet-300">Asuransi Dump Truck</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-800 via-purple-700 to-indigo-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/asuransi-motor-vehicle" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">
                ← Kembali ke Motor Vehicle
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asuransi Dump Truck
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl">
              Perlindungan komprehensif untuk kendaraan niaga dan pengangkut material proyek.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo,%20saya%20tertarik%20dengan%20Asuransi%20Dump%20Truck" 
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
                  Dump truck merupakan kendaraan niaga yang banyak digunakan dalam proyek konstruksi, pertambangan, dan pengangkutan material berat. Karena sering beroperasi di area proyek dengan risiko tinggi, <strong>asuransi dump truck</strong> sangat penting untuk melindungi kendaraan dari kerugian finansial.
                </p>
              </section>

              {/* Risiko */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Risiko yang Sering Terjadi
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {riskCovered.map((risk, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-violet-500">
                      <span className="text-2xl">{risk.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800">{risk.name}</h3>
                        <p className="text-sm text-gray-600">{risk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Manfaat */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Manfaat Asuransi Dump Truck
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {advantages.map((adv, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{adv.icon}</span>
                        <h3 className="font-semibold text-violet-800">{adv.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Internal Links */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Asuransi Alat Berat Terkait</h2>
                <p className="text-gray-600 mb-4">
                  Selain dump truck, kami juga menyediakan perlindungan untuk berbagai jenis alat berat lainnya:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/asuransi-excavator" className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition group border border-orange-200">
                    <h3 className="font-medium text-orange-800 group-hover:text-orange-600">Asuransi Excavator</h3>
                    <p className="text-sm text-gray-600">Alat berat gali mungkir</p>
                  </Link>
                  <Link href="/asuransi-bulldozer" className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition group border border-amber-200">
                    <h3 className="font-medium text-amber-800 group-hover:text-amber-600">Asuransi Bulldozer</h3>
                    <p className="text-sm text-gray-600">Alat berat dorong tanah</p>
                  </Link>
                  <Link href="/asuransi-wheel-loader" className="block p-4 bg-lime-50 hover:bg-lime-100 rounded-lg transition group border border-lime-200">
                    <h3 className="font-medium text-lime-800 group-hover:text-lime-600">Asuransi Wheel Loader</h3>
                    <p className="text-sm text-gray-600">Alat muat material</p>
                  </Link>
                  <Link href="/asuransi-motor-grader" className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition group border border-indigo-200">
                    <h3 className="font-medium text-indigo-800 group-hover:text-indigo-600">Asuransi Motor Grader</h3>
                    <p className="text-sm text-gray-600">Alat perata permukaan</p>
                  </Link>
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

              {/* CTA Konsultasi */}
              <section className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Ingin mengetahui premi asuransi dump truck Anda?</h2>
                <p className="text-violet-100 mb-6">
                  Hubungi kami untuk mendapatkan simulasi premi dan potongan harga khusus dari perusahaan asuransi terpercaya.
                </p>
                <a href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Dump%20Truck" 
                   target="_blank"
                   className="inline-flex items-center gap-2 bg-white text-violet-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
                  Hubungi via WhatsApp
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-violet-600 to-purple-800 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Asuransi Dump Truck?</h3>
                <p className="text-violet-100 mb-4 text-sm">
                  Konsultasikan kebutuhan perlindungan kendaraan niaga Anda dengan kami.
                </p>
                <a href="https://wa.me/628131556592?text=Halo,%20saya%20membutuhkan%20Asuransi%20Dump%20Truck" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-violet-700 px-4 py-3 rounded-lg font-semibold transition w-full mb-3">
                  WhatsApp: 0813-1556-592
                </a>
                <p className="text-xs text-violet-200 text-center">
                  Rio Mardiansyah
                </p>
              </div>

              {/* Kategori Lain */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Kategori Asuransi Lainnya</h3>
                <div className="space-y-3">
                  <Link href="/asuransi-motor-vehicle" className="block p-3 bg-gray-50 hover:bg-red-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-red-600">Motor Vehicle Insurance</h4>
                    <p className="text-sm text-gray-500">Kendaraan & Alat Berat</p>
                  </Link>
                  <Link href="/property-insurance" className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-600">Property Insurance</h4>
                    <p className="text-sm text-gray-500">Gedung, pabrik, gudang</p>
                  </Link>
                  <Link href="/engineering-insurance" className="block p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-indigo-600">Engineering Insurance</h4>
                    <p className="text-sm text-gray-500">Proyek konstruksi & mesin</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
