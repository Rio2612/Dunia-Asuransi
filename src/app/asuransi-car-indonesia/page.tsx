import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft, Building2, Phone, MessageCircle, AlertTriangle, Users, Wrench, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi CAR Indonesia | Contractor All Risks Profesional | Dunia Asuransi',
  description: 'Asuransi CAR Indonesia (Contractor\'s All Risks) memberikan perlindungan menyeluruh untuk proyek konstruksi dari risiko kerusakan fisik hingga tanggung jawab hukum pihak ketiga. Konsultasi profesional sekarang.',
  keywords: [
    'asuransi car indonesia',
    'contractor all risks indonesia',
    'asuransi proyek konstruksi',
    'asuransi kontraktor',
    'asuransi tpl proyek',
    'asuransi konstruksi',
    'asuransi pembangunan',
    'asuransi proyek',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi CAR Indonesia | Contractor All Risks Profesional',
    description: 'Perlindungan proyek konstruksi secara menyeluruh dengan Asuransi Contractor\'s All Risks di Indonesia. Konsultasikan kebutuhan proyek Anda sekarang.',
    type: 'article',
    locale: 'id_ID',
  },
}

export default function CARPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-blue-600">Dunia Asuransi</span>
                <span className="text-[10px] text-gray-500 -mt-1">Rio Mardiansyah</span>
              </div>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
          
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs text-amber-600 font-medium">Asuransi Konstruksi</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Contractor&apos;s All Risks (CAR) Indonesia
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Dalam industri konstruksi, risiko tidak pernah bisa dihindari sepenuhnya. Kebakaran, 
            kerusakan material, kesalahan pengerjaan, hingga tuntutan hukum pihak ketiga dapat 
            terjadi sebelum proyek selesai. <strong>Asuransi Contractor&apos;s All Risks (CAR)</strong> hadir 
            sebagai solusi perlindungan menyeluruh untuk proyek konstruksi di Indonesia.
          </p>

          {/* What is CAR */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Apa Itu Asuransi CAR?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi CAR adalah polis asuransi umum yang memberikan perlindungan terhadap 
            kerusakan fisik proyek dan tanggung jawab hukum pihak ketiga selama masa 
            konstruksi berlangsung. Polis ini dirancang khusus untuk industri konstruksi 
            yang memiliki risiko kompleks dan nilai proyek yang besar.
          </p>

          {/* Coverage Section */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Jaminan Asuransi CAR
          </h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Kerusakan Fisik */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-blue-800 text-lg">Kerusakan Fisik Proyek</h3>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Kebakaran dan ledakan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Kesalahan konstruksi yang tidak disengaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Kerusakan akibat cuaca ekstrem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Material roboh atau jatuh</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Pencurian dan perusakan</span>
                </li>
              </ul>
            </div>

            {/* TPL */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-amber-800 text-lg">Tanggung Jawab Pihak Ketiga (TPL)</h3>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Menjamin tuntutan hukum dari pihak luar proyek akibat:
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Cedera badan pada pihak ketiga</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Kerusakan properti milik pihak ketiga</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Biaya hukum dan pengadilan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Who Needs */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Siapa yang Membutuhkan Asuransi CAR?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi CAR sangat penting bagi berbagai pihak yang terlibat dalam proyek konstruksi. 
            Baik sebagai kontraktor utama maupun pemilik proyek, perlindungan ini membantu 
            menjaga kelangsungan proyek dari berbagai risiko yang mungkin terjadi.
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Kontraktor utama
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Developer
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Pemilik proyek
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Subkontraktor
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Perusahaan konstruksi
            </li>
          </ul>

          {/* Why Important */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Asuransi CAR Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Dalam proyek bernilai besar, satu kejadian tak terduga dapat mengganggu arus kas 
            dan reputasi perusahaan. Asuransi CAR membantu menjaga stabilitas keuangan dan 
            kredibilitas bisnis Anda. Dengan perlindungan yang tepat, proyek dapat berjalan 
            dengan lebih aman dan terhindar dari kerugian finansial yang signifikan.
          </p>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-3">Manfaat Utama Asuransi CAR:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Melindungi investasi proyek dari kerugian tak terduga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Memenuhi persyaratan kontrak dan tender proyek</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Menjaga reputasi dan kepercayaan klien</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Mengurangi beban finansial akibat klaim pihak ketiga</span>
              </li>
            </ul>
          </div>

          {/* Perluasan Jaminan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Perluasan Jaminan Asuransi CAR
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Selain jaminan standar, Asuransi CAR dapat diperluas untuk mencakup risiko-risiko 
            tambahan yang mungkin relevan dengan karakteristik proyek Anda. Perluasan ini 
            dapat disesuaikan dengan kebutuhan spesifik proyek konstruksi.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">Gempa Bumi</span>
              </div>
              <p className="text-sm text-slate-600">Perlindungan dari kerusakan akibat gempa bumi dan tsunami</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">Banjir & Angin Topan</span>
              </div>
              <p className="text-sm text-slate-600">Jaminan kerusakan akibat bencana alam hidrometeorologi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">SRCC</span>
              </div>
              <p className="text-sm text-slate-600">Jaminan kerusuhan, pemogokan, dan huru-hara</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">Maintenance Period</span>
              </div>
              <p className="text-sm text-slate-600">Jaminan selama masa pemeliharaan pasca konstruksi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">Testing & Commissioning</span>
              </div>
              <p className="text-sm text-slate-600">Jaminan selama masa uji coba operasional proyek</p>
            </div>
          </div>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi CAR Profesional
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Setiap proyek memiliki karakteristik unik. Konsultasikan kebutuhan proyek Anda 
            untuk mendapatkan struktur perlindungan yang tepat. Saya siap membantu Anda 
            merancang polis Asuransi CAR yang sesuai dengan kebutuhan spesifik proyek 
            konstruksi Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20CAR%20Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi via WhatsApp
            </a>
            <a 
              href="tel:+628131556592"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0813-1556-592
            </a>
          </div>

          {/* Internal Linking */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-lg font-semibold text-blue-800">
              Layanan Asuransi Lainnya
            </h3>

            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/asuransi-erection-all-risks" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Erection All Risks (EAR)
                </Link>
              </li>
              <li>
                <Link href="/asuransi-machinery-breakdown" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Machinery Breakdown
                </Link>
              </li>
              <li>
                <Link href="/asuransi-kendaraan-batam" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Kendaraan
                </Link>
              </li>
              <li>
                <Link href="/asuransi-kebakaran-batam" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Kebakaran
                </Link>
              </li>
              <li>
                <Link href="/asuransi-kargo-batam" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Kargo
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-slate-500 border-t pt-6">
            <strong>Disclaimer:</strong> Informasi di atas bersifat umum. Syarat dan ketentuan 
            polis dapat berbeda tergantung underwriting dan karakteristik proyek. Untuk informasi 
            lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Contractor's All Risks (CAR) Indonesia",
                "description": "Asuransi CAR Indonesia memberikan perlindungan menyeluruh untuk proyek konstruksi dari risiko kerusakan fisik hingga tanggung jawab hukum pihak ketiga.",
                "author": {
                  "@type": "Person",
                  "name": "Rio Mardiansyah"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Dunia Asuransi"
                }
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Apa itu Asuransi Contractor's All Risks (CAR)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi CAR adalah perlindungan untuk proyek konstruksi yang menjamin kerusakan fisik proyek serta tanggung jawab hukum pihak ketiga selama masa pembangunan.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah Asuransi CAR wajib?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tidak selalu wajib secara hukum, namun sering menjadi persyaratan kontrak atau tender proyek. Memiliki asuransi CAR juga menunjukkan profesionalisme dan kesiapan menghadapi risiko.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apa saja yang dijamin dalam Asuransi CAR?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Menjamin kerusakan akibat kebakaran, ledakan, kesalahan konstruksi, bencana alam tertentu, serta tuntutan pihak ketiga. Perluasan jaminan juga tersedia untuk gempa, banjir, dan SRCC.",
                    },
                  },
                ],
              }),
            }}
          />

        </article>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Dunia Asuransi - Rio Mardiansyah. Broker Asuransi Profesional.</p>
          <p className="mt-2">WhatsApp: 0813-1556-592</p>
        </div>
      </footer>
    </main>
  )
}
