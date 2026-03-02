import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft, Scale, Phone, MessageCircle, Users, CheckCircle, Building2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Public Liability | Perlindungan Tanggung Jawab Hukum Perusahaan | Dunia Asuransi',
  description: 'Asuransi Public Liability memberikan perlindungan terhadap tuntutan hukum pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi dalam aktivitas operasional bisnis.',
  keywords: [
    'asuransi public liability',
    'asuransi tanggung jawab hukum',
    'asuransi pihak ketiga',
    'asuransi liability perusahaan',
    'asuransiTPL',
    'asuransi tanggung jawab publik',
    'asuransi liability',
    'perlindungan hukum bisnis',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Public Liability | Perlindungan Tanggung Jawab Hukum Perusahaan',
    description: 'Lindungi bisnis Anda dari risiko tuntutan hukum pihak ketiga dengan Asuransi Public Liability. Solusi profesional untuk berbagai sektor usaha.',
    type: 'article',
    locale: 'id_ID',
  },
}

export default function PublicLiabilityPage() {
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
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs text-indigo-600 font-medium">Asuransi Liability</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Public Liability
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Dalam menjalankan bisnis, interaksi dengan pelanggan, mitra, atau masyarakat umum 
            tidak dapat dihindari. Risiko cedera badan atau kerusakan properti pihak ketiga 
            dapat terjadi kapan saja, bahkan akibat kejadian yang tidak disengaja.{' '}
            <strong>Asuransi Public Liability</strong> dirancang untuk melindungi perusahaan 
            dari tuntutan hukum yang timbul akibat aktivitas operasional bisnis.
          </p>

          {/* What is Public Liability */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Ruang Lingkup Perlindungan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Public Liability memberikan jaminan terhadap berbagai risiko yang berkaitan 
            dengan tanggung jawab hukum perusahaan terhadap pihak ketiga. Perlindungan ini sangat 
            penting untuk menjaga stabilitas keuangan dan reputasi bisnis Anda.
          </p>

          <div className="mt-6 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-indigo-800 text-lg">Risiko yang Dijamin</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Cedera badan pihak ketiga di area operasional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Kerusakan properti milik pihak lain</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Biaya pembelaan hukum dan pengacara</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Penyelesaian klaim sesuai putusan pengadilan atau kesepakatan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Biaya medis darurat untuk pihak ketiga</span>
              </li>
            </ul>
          </div>

          {/* Siapa yang Membutuhkan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Siapa yang Membutuhkan?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Public Liability sangat relevan untuk berbagai jenis usaha yang memiliki 
            interaksi langsung dengan publik. Berikut adalah beberapa sektor yang umumnya 
            memerlukan perlindungan ini:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Pemilik Gedung</span>
              </div>
              <p className="text-sm text-slate-600">Properti komersial dan perkantoran</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Hotel & Mall</span>
              </div>
              <p className="text-sm text-slate-600">Pusat perbelanjaan dan perhotelan</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Rumah Sakit & Klinik</span>
              </div>
              <p className="text-sm text-slate-600">Fasilitas kesehatan dan medis</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Event Organizer</span>
              </div>
              <p className="text-sm text-slate-600">Penyelenggara acara dan konser</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Perusahaan Manufaktur</span>
              </div>
              <p className="text-sm text-slate-600">Pabrik dan industri produksi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-slate-800">Perusahaan Jasa</span>
              </div>
              <p className="text-sm text-slate-600">Jasa layanan dan konsultasi</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Asuransi Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Satu kejadian kecil, seperti pengunjung terpeleset atau kerusakan kendaraan tamu, 
            dapat berujung pada tuntutan hukum bernilai besar. Tanpa perlindungan yang memadai, 
            perusahaan harus menanggung biaya kompensasi dan pembelaan hukum secara mandiri. 
            Dengan Asuransi Public Liability, risiko finansial tersebut dapat dialihkan sehingga 
            bisnis tetap berjalan stabil.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Tanpa Asuransi PL</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya ganti rugi 100% ditanggung perusahaan</li>
                <li>• Biaya pengacara dan pengadilan sendiri</li>
                <li>• Reputasi bisnis terancam</li>
                <li>• Potensi kebangkrutan klaim besar</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">✅ Dengan Asuransi PL</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Klaim ditanggung hingga limit polis</li>
                <li>• Biaya hukum dicover asuransi</li>
                <li>• Reputasi bisnis terlindungi</li>
                <li>• Keuangan perusahaan stabil</li>
              </ul>
            </div>
          </div>

          {/* Contoh Kasus */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Contoh Kasus Klaim
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Berikut adalah beberapa contoh situasi yang dapat menjadi klaim Asuransi Public Liability:
          </p>

          <div className="mt-4 space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">💧 Lantai Licin di Mall</p>
              <p className="text-sm text-slate-600 mt-1">Pengunjung terpeleset di area lantai basah tanpa tanda peringatan, mengalami patah tulang.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">🚗 Kendaraan Tamu Rusak</p>
              <p className="text-sm text-slate-600 mt-1">Pohon di area parkir tumbang menimpa mobil pengunjung akibat angin kencang.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">🎪 Kejadian di Event</p>
              <p className="text-sm text-slate-600 mt-1">Tribune penonton ambruk saat konser, menyebabkan cedera pada beberapa pengunjung.</p>
            </div>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Setiap bisnis memiliki profil risiko berbeda, sehingga diperlukan analisis menyeluruh 
            sebelum penentuan struktur polis. Berikut faktor-faktor yang mempengaruhi besaran premi:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Jenis usaha dan aktivitas
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Skala operasional
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Jumlah pengunjung atau pelanggan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Lokasi usaha
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Riwayat klaim sebelumnya
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Limit pertanggungan
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi Public Liability
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Lindungi reputasi dan stabilitas bisnis Anda dari potensi tuntutan hukum pihak ketiga. 
            Konsultasikan kebutuhan perlindungan Anda untuk mendapatkan struktur polis yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Public%20Liability"
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
                <Link href="/asuransi-liability-limbah-b3" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Liability Limbah B3
                </Link>
              </li>
              <li>
                <Link href="/asuransi-car-indonesia" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Contractor All Risks (CAR)
                </Link>
              </li>
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
            polis dapat berbeda tergantung underwriting dan karakteristik bisnis. Untuk informasi 
            lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Public Liability",
                "description": "Perlindungan terhadap tuntutan hukum pihak ketiga akibat aktivitas operasional bisnis.",
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
                    name: "Apa itu Asuransi Public Liability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Public Liability adalah perlindungan terhadap tuntutan hukum pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi dalam aktivitas operasional bisnis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Siapa yang membutuhkan Asuransi Public Liability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Perusahaan, pemilik gedung, hotel, mall, rumah sakit, event organizer, dan berbagai jenis usaha yang berinteraksi dengan publik.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah asuransi ini menanggung biaya hukum?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ya, polis umumnya mencakup biaya pembelaan hukum sesuai dengan ketentuan yang berlaku.",
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
