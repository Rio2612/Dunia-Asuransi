import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft, Briefcase, Phone, MessageCircle, AlertTriangle, CheckCircle, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Professional Indemnity | Perlindungan Profesional | Dunia Asuransi',
  description: 'Asuransi Professional Indemnity memberikan perlindungan terhadap tuntutan hukum akibat kesalahan atau kelalaian dalam memberikan jasa profesional. Konsultasi profesional bersama Dunia Asuransi.',
  keywords: [
    'asuransi professional indemnity',
    'asuransi PI',
    'asuransi profesional',
    'asuransi kesalahan profesional',
    'professional liability',
    'asuransi konsultan',
    'asuransi akuntan',
    'asuransi arsitek',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Professional Indemnity | Perlindungan Profesional',
    description: 'Perlindungan terhadap tuntutan hukum akibat kesalahan atau kelalaian dalam memberikan jasa profesional.',
    type: 'article',
    locale: 'id_ID',
  },
}

export default function ProfessionalIndemnityPage() {
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
              href="/asuransi-liability" 
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Asuransi Liability
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
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <span className="text-xs text-purple-600 font-medium">Asuransi Liability</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Professional Indemnity
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Sebagai tenaga profesional, Anda memberikan jasa berdasarkan keahlian dan pengetahuan 
            khusus. Namun, kesalahan atau kelalaian yang tidak disengaja dapat terjadi dan berujung 
            pada tuntutan hukum dari klien. <strong>Asuransi Professional Indemnity</strong> memberikan 
            perlindungan terhadap risiko tuntutan hukum akibat kesalahan profesional tersebut.
          </p>

          {/* What is Professional Indemnity */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Apa Itu Asuransi Professional Indemnity?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Professional Indemnity (PI) adalah polis yang menjamin tanggung jawab hukum 
            tenaga profesional terhadap klaim klien akibat kesalahan, kelalaian, atau kegagalan 
            dalam memberikan jasa profesional. Perlindungan ini sangat penting untuk menjaga 
            reputasi dan keuangan praktisi profesional.
          </p>

          <div className="mt-6 bg-purple-50 p-6 rounded-xl border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-purple-800 text-lg">Risiko yang Dijamin</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Kesalahan atau kelalaian profesional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Kehilangan dokumen atau data klien</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Pelanggaran kerahasiaan klien</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Pencemaran nama baik atau fitnah</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Biaya pembelaan hukum dan pengacara</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Gugatan karyawan atau mantan karyawan</span>
              </li>
            </ul>
          </div>

          {/* Siapa yang Membutuhkan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Siapa yang Membutuhkan Asuransi Ini?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Professional Indemnity relevan untuk berbagai profesi yang memberikan jasa 
            berdasarkan keahlian khusus. Berikut adalah profesional yang umumnya memerlukan 
            perlindungan ini:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Konsultan</span>
              </div>
              <p className="text-sm text-slate-600">Konsultan manajemen, IT, bisnis</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Akuntan</span>
              </div>
              <p className="text-sm text-slate-600">Akuntan publik dan auditor</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Arsitek</span>
              </div>
              <p className="text-sm text-slate-600">Arsitek dan perencana bangunan</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Pengacara</span>
              </div>
              <p className="text-sm text-slate-600">Advokat dan konsultan hukum</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Dokter & Tenaga Medis</span>
              </div>
              <p className="text-sm text-slate-600">Praktisi kesehatan dan medis</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-800">Insinyur</span>
              </div>
              <p className="text-sm text-slate-600">Insinyur dan perencana teknik</p>
            </div>
          </div>

          {/* Contoh Kasus */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Contoh Kasus Klaim
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Berikut adalah beberapa contoh situasi yang dapat menjadi klaim Asuransi Professional Indemnity:
          </p>

          <div className="mt-4 space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="font-medium text-slate-800">📊 Kesalahan Laporan Keuangan</p>
              <p className="text-sm text-slate-600 mt-1">Akuntan membuat kesalahan material dalam audit laporan keuangan yang merugikan klien.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="font-medium text-slate-800">🏗️ Desain Bangunan Bermasalah</p>
              <p className="text-sm text-slate-600 mt-1">Arsitek membuat desain yang tidak memenuhi standar keamanan bangunan.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="font-medium text-slate-800">💻 Kegagalan Proyek IT</p>
              <p className="text-sm text-slate-600 mt-1">Konsultan IT gagal menyelesaikan proyek sesuai spesifikasi yang disepakati.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="font-medium text-slate-800">⚖️ Kesalahan Litigasi</p>
              <p className="text-sm text-slate-600 mt-1">Pengacara melewatkan tenggat waktu pengajuan gugatan yang merugikan klien.</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Perlindungan Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Klaim kesalahan profesional dapat merusak reputasi yang telah dibangun bertahun-tahun 
            dan mengakibatkan kerugian finansial yang signifikan. Dengan asuransi PI, Anda dapat 
            menjalankan praktik profesional dengan lebih tenang karena memiliki jaring pengaman.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Tanpa Asuransi PI</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya ganti rugi 100% ditanggung sendiri</li>
                <li>• Biaya pengacara sangat mahal</li>
                <li>• Reputasi profesional rusak</li>
                <li>• Potensi kebangkrutan personal</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">✅ Dengan Asuransi PI</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Klaim ditanggung hingga limit polis</li>
                <li>• Biaya hukum tercover</li>
                <li>• Perlindungan reputasi profesional</li>
                <li>• Fokus pada praktik tanpa kekhawatiran</li>
              </ul>
            </div>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Premi asuransi professional indemnity ditentukan berdasarkan berbagai faktor yang 
            mencerminkan tingkat risiko praktik profesional Anda:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Jenis profesi dan spesialisasi
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Pendapatan bruto tahunan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Jumlah klien dan proyek
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Pengalaman dan kualifikasi
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Riwayat klaim sebelumnya
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Limit pertanggungan
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi Professional Indemnity
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Lindungi karir dan reputasi profesional Anda dari risiko tuntutan hukum. Konsultasikan 
            kebutuhan perlindungan professional indemnity Anda untuk mendapatkan struktur polis yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Professional%20Indemnity"
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

          {/* Link ke Pilar */}
          <div className="mt-10 bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-semibold text-indigo-800 mb-2">📌 Asuransi Liability</h4>
            <p className="text-sm text-slate-600 mb-3">
              Halaman ini adalah bagian dari Asuransi Liability. Pelajari jenis-jenis asuransi liability lainnya:
            </p>
            <Link href="/asuransi-liability" className="text-indigo-600 font-medium hover:underline">
              ← Kembali ke halaman utama Asuransi Liability
            </Link>
          </div>

          {/* Link Silang ke Cluster */}
          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold text-blue-800">
              Jenis Asuransi Liability Lainnya
            </h3>

            <ul className="mt-4 space-y-2 text-blue-700">
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
                <Link href="/asuransi-product-liability" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Product Liability
                </Link>
              </li>
            </ul>
          </div>

          {/* Internal Linking */}
          <div className="mt-8 border-t pt-8">
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
            polis dapat berbeda tergantung underwriting dan karakteristik praktik profesional. 
            Untuk informasi lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Professional Indemnity",
                "description": "Perlindungan terhadap tuntutan hukum akibat kesalahan atau kelalaian dalam memberikan jasa profesional.",
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
                    name: "Apa itu Asuransi Professional Indemnity?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Professional Indemnity adalah perlindungan terhadap tuntutan hukum akibat kesalahan, kelalaian, atau kegagalan dalam memberikan jasa profesional.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Siapa yang membutuhkan Asuransi Professional Indemnity?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Konsultan, akuntan, arsitek, pengacara, dokter, insinyur, dan tenaga profesional lainnya yang memberikan jasa berdasarkan keahlian khusus.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apa saja yang dicakup oleh polis ini?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Polis mencakup kesalahan profesional, kehilangan dokumen klien, pelanggaran kerahasiaan, pencemaran nama baik, dan biaya pembelaan hukum.",
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
