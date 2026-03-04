import { Metadata } from 'next'

const baseUrl = 'https://duniaasuransi.com';
import Link from 'next/link'
import { Shield, ArrowLeft, Wrench, Phone, MessageCircle, Cog, Users, CheckCircle, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Erection All Risks (EAR) | Perlindungan Instalasi & Mesin | Dunia Asuransi',
  description: 'Asuransi Erection All Risks (EAR) memberikan perlindungan menyeluruh terhadap proyek instalasi mesin, pekerjaan mekanikal dan elektrikal, termasuk risiko kerusakan fisik dan tanggung jawab hukum pihak ketiga.',
  keywords: [
    'asuransi erection all risks',
    'asuransi ear',
    'asuransi instalasi mesin',
    'asuransi mekanikal elektrikal',
    'asuransi engineering',
    'asuransi pemasangan mesin',
    'asuransi proyek instalasi',
    'asuransi commissioning',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Erection All Risks (EAR) | Perlindungan Instalasi & Mesin',
    description: 'Perlindungan proyek instalasi mesin dan pekerjaan mekanikal elektrikal dengan Asuransi Erection All Risks (EAR). Konsultasi profesional sekarang.',
    url: `${baseUrl}/asuransi-erection-all-risks`,
    type: 'article',
    locale: 'id_ID',
  },
}

export default function EARPage() {
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
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <span className="text-xs text-purple-600 font-medium">Asuransi Engineering</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Erection All Risks (EAR)
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Dalam proyek instalasi mesin dan pekerjaan mekanikal elektrikal, risiko dapat muncul 
            sejak tahap awal pemasangan hingga proses uji coba. Kerusakan komponen, kesalahan 
            instalasi, hingga gangguan eksternal dapat menyebabkan kerugian finansial yang signifikan. 
            <strong> Asuransi Erection All Risks (EAR)</strong> hadir sebagai solusi perlindungan 
            menyeluruh bagi proyek instalasi dan erection peralatan industri.
          </p>

          {/* What is EAR */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Ruang Lingkup Perlindungan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi EAR memberikan jaminan komprehensif yang mencakup berbagai risiko selama 
            proses instalasi dan pemasangan peralatan industri. Perlindungan ini dirancang 
            khusus untuk proyek-proyek yang melibatkan pekerjaan mekanikal dan elektrikal.
          </p>

          {/* Coverage Section */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Kerusakan Fisik */}
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-purple-800 text-lg">Kerusakan Fisik Instalasi</h3>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Kesalahan pemasangan yang tidak disengaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Kegagalan saat proses erection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Kerusakan saat testing & commissioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Kebakaran dan ledakan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Risiko akibat bencana alam tertentu</span>
                </li>
              </ul>
            </div>

            {/* TPL */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-amber-800 text-lg">Tanggung Jawab Pihak Ketiga</h3>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Menjamin tuntutan hukum akibat aktivitas proyek yang menyebabkan:
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

          {/* EAR vs CAR */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Perbedaan EAR dan CAR
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Banyak yang masih keliru membedakan antara Asuransi EAR dan CAR. Meskipun keduanya 
            termasuk asuransi engineering, fokus perlindungannya berbeda. Pemahaman yang tepat 
            akan membantu Anda memilih polis yang sesuai dengan karakteristik proyek.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-3">🏗️ CAR (Contractor&apos;s All Risks)</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fokus pada konstruksi bangunan</li>
                <li>• Pembangunan struktur fisik</li>
                <li>• Proyek infrastruktur sipil</li>
                <li>• Jalan, jembatan, gedung</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-3">⚙️ EAR (Erection All Risks)</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fokus pada instalasi mesin</li>
                <li>• Pemasangan peralatan industri</li>
                <li>• Proyek mekanikal elektrikal</li>
                <li>• Testing & commissioning</li>
              </ul>
            </div>
          </div>

          {/* Jenis Proyek */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Jenis Proyek yang Menggunakan EAR
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi EAR umumnya digunakan untuk proyek-proyek yang melibatkan pemasangan 
            peralatan industri dengan nilai investasi yang besar. Berikut adalah beberapa 
            jenis proyek yang umumnya membutuhkan perlindungan EAR:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Instalasi Mesin Produksi</span>
              </div>
              <p className="text-sm text-slate-600">Pemasangan mesin pabrik dan lini produksi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Pembangkit Listrik & Turbin</span>
              </div>
              <p className="text-sm text-slate-600">PLTU, PLTG, dan turbin generator</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Boiler & Peralatan Industri</span>
              </div>
              <p className="text-sm text-slate-600">Instalasi boiler, tangki, dan peralatan berat</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Lift & Escalator</span>
              </div>
              <p className="text-sm text-slate-600">Pemasangan sistem transportasi vertikal</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Perlindungan Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Nilai proyek instalasi mesin sering kali mencapai angka miliaran rupiah. Satu 
            kesalahan kecil dapat berdampak besar terhadap jadwal operasional dan arus kas 
            perusahaan. Dengan perlindungan yang tepat, risiko finansial dapat diminimalkan 
            sehingga proyek berjalan lebih stabil dan terkontrol.
          </p>

          <div className="mt-6 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
            <h4 className="font-semibold text-purple-800 mb-3">Manfaat Asuransi EAR:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Melindungi investasi proyek instalasi dari kerugian tak terduga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Menjamin selama fase testing dan commissioning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Memenuhi persyaratan kontrak EPC</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Mengurangi beban finansial akibat klaim pihak ketiga</span>
              </li>
            </ul>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Setiap proyek memiliki karakteristik unik, sehingga analisis risiko dan proses 
            underwriting dilakukan secara khusus. Berikut adalah faktor-faktor yang mempengaruhi 
            besaran premi Asuransi EAR:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Nilai total proyek
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Jenis mesin atau instalasi
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Durasi pekerjaan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Tingkat kompleksitas teknis
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Pengalaman kontraktor
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Lokasi dan kondisi lingkungan
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi EAR Profesional
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Jika Anda sedang menangani proyek instalasi atau pekerjaan mekanikal elektrikal, 
            konsultasikan kebutuhan perlindungan Anda untuk mendapatkan struktur jaminan yang sesuai. 
            Saya siap membantu merancang polis EAR yang tepat untuk proyek Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20EAR%20(Erection%20All%20Risks)"
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
                <Link href="/asuransi-car-indonesia" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Contractor All Risks (CAR)
                </Link>
              </li>
              <li>
                <Link href="/asuransi-machinery-breakdown" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Machinery Breakdown
                </Link>
              </li>
              <li>
                <Link href="/asuransi-public-liability" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Public Liability
                </Link>
              </li>
              <li>
                <Link href="/asuransi-liability-limbah-b3" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Liability Limbah B3
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
              <li>
                <Link href="/asuransi-kendaraan-batam" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Kendaraan
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

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Erection All Risks (EAR)",
                "description": "Perlindungan menyeluruh terhadap proyek instalasi mesin dan pekerjaan mekanikal elektrikal dari berbagai risiko selama masa pengerjaan.",
                "author": {
                  "@type": "Person",
                  "name": "Rio Mardiansyah"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Dunia Asuransi"
                },
                "inLanguage": "id-ID"
              }),
            }}
          />

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Apa itu Asuransi Erection All Risks?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Erection All Risks adalah perlindungan untuk proyek instalasi mesin dan pekerjaan mekanikal elektrikal yang menjamin risiko kerusakan fisik serta tanggung jawab hukum pihak ketiga selama masa pengerjaan.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apa perbedaan EAR dan CAR?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "CAR fokus pada pembangunan struktur atau konstruksi bangunan, sedangkan EAR fokus pada pemasangan mesin, instalasi peralatan, dan proses commissioning.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Siapa yang membutuhkan Asuransi EAR?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Kontraktor mekanikal elektrikal, perusahaan EPC, industri manufaktur, proyek pembangkit listrik, serta proyek instalasi mesin dan peralatan berat.",
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
