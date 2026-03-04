import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft, Cog, Phone, MessageCircle, Settings, CheckCircle, AlertTriangle, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Machinery Breakdown | Perlindungan Mesin Industri | Dunia Asuransi',
  description: 'Asuransi Machinery Breakdown memberikan perlindungan terhadap kerusakan mesin dan peralatan industri akibat kegagalan mekanis, korsleting, dan risiko operasional lainnya. Konsultasi profesional sekarang.',
  keywords: [
    'asuransi machinery breakdown',
    'asuransi mesin industri',
    'asuransi mesin pabrik',
    'asuransi engineering',
    'perlindungan mesin produksi',
    'asuransi peralatan industri',
    'asuransi generator',
    'asuransi boiler',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Machinery Breakdown | Perlindungan Mesin Industri',
    description: 'Perlindungan profesional untuk mesin produksi dan peralatan industri dari risiko kerusakan mendadak dan kegagalan mekanis.',
    type: 'article',
    locale: 'id_ID',
  },
}

export default function MachineryBreakdownPage() {
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
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <Cog className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <span className="text-xs text-teal-600 font-medium">Asuransi Engineering</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Machinery Breakdown
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Mesin dan peralatan industri merupakan aset vital dalam operasional bisnis. Ketika 
            terjadi kerusakan mendadak, dampaknya tidak hanya biaya perbaikan tetapi juga potensi 
            berhentinya produksi dan terganggunya arus kas perusahaan.{' '}
            <strong>Asuransi Machinery Breakdown</strong> dirancang untuk memberikan perlindungan 
            terhadap kerusakan mesin akibat kegagalan mekanis maupun gangguan teknis yang tidak terduga.
          </p>

          {/* What is Machinery Breakdown */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Ruang Lingkup Perlindungan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Machinery Breakdown menjamin kerusakan mendadak pada mesin dan peralatan 
            industri yang disebabkan oleh berbagai faktor teknis internal. Perlindungan berlaku 
            selama mesin dioperasikan sesuai standar penggunaan normal dan telah melalui proses 
            underwriting yang tepat.
          </p>

          <div className="mt-6 bg-teal-50 p-6 rounded-xl border border-teal-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-teal-800 text-lg">Risiko yang Dijamin</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Kegagalan mekanis internal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Korsleting listrik dan gangguan kelistrikan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Kesalahan pengoperasian yang tidak disengaja</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Overheating dan tekanan berlebih</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Kerusakan akibat getaran atau gangguan teknis lainnya</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Kelalaian atau kurang keahlian operator</span>
              </li>
            </ul>
          </div>

          {/* Jenis Mesin */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Jenis Mesin yang Diasuransikan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Berbagai jenis mesin dan peralatan industri dapat diasuransikan dengan polis Machinery 
            Breakdown. Mulai dari mesin produksi hingga peralatan berteknologi tinggi, semua dapat 
            mendapatkan perlindungan yang sesuai dengan karakteristik dan risikonya.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Mesin Produksi Pabrik</span>
              </div>
              <p className="text-sm text-slate-600">Mesin otomatis dan semi-otomatis untuk lini produksi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Generator & Turbin</span>
              </div>
              <p className="text-sm text-slate-600">Pembangkit listrik dan turbin uap/gas</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Boiler Industri</span>
              </div>
              <p className="text-sm text-slate-600">Boiler untuk kebutuhan pabrik dan industri</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Kompresor</span>
              </div>
              <p className="text-sm text-slate-600">Kompresor udara dan sistem pneumatik</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Mesin Percetakan</span>
              </div>
              <p className="text-sm text-slate-600">Mesin cetak offset dan digital</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-teal-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-teal-600" />
                <span className="font-medium text-slate-800">Peralatan Medis</span>
              </div>
              <p className="text-sm text-slate-600">Peralatan medis berteknologi tinggi</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Perlindungan Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Kerusakan mesin sering kali terjadi akibat faktor teknis internal yang tidak tercakup 
            dalam polis properti biasa. Tanpa perlindungan yang tepat, perusahaan dapat menghadapi 
            biaya penggantian yang besar dan gangguan operasional yang signifikan. Dengan struktur 
            asuransi yang sesuai, risiko finansial dapat dikendalikan secara lebih terencana dan profesional.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Tanpa Asuransi MB</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya perbaikan atau penggantian 100%</li>
                <li>• Produksi terhenti tanpa kompensasi</li>
                <li>• Arus kas terganggu</li>
                <li>• Risiko kehilangan pelanggan</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">✅ Dengan Asuransi MB</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya perbaikan ditanggung polis</li>
                <li>• Opsi perluasan Business Interruption</li>
                <li>• Keuangan lebih stabil</li>
                <li>• Operasional cepat pulih</li>
              </ul>
            </div>
          </div>

          {/* Perluasan Jaminan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Perluasan Jaminan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Selain jaminan standar, polis Machinery Breakdown dapat diperluas untuk mencakup 
            risiko-risiko tambahan yang relevan dengan kebutuhan operasional perusahaan Anda.
          </p>

          <div className="mt-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
            <h4 className="font-semibold text-teal-800 mb-3">Perluasan yang Tersedia:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Business Interruption</strong> – Menjamin kehilangan pendapatan akibat kerusakan mesin</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Third Party Liability</strong> – Tanggung jawab hukum terhadap pihak ketiga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Expediting Expenses</strong> – Biaya ekspedisi untuk perbaikan darurat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span><strong>Debris Removal</strong> – Biaya pembersihan puing sisa kerusakan</span>
              </li>
            </ul>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Setiap risiko dianalisis melalui proses underwriting untuk memastikan kesesuaian 
            perlindungan. Berikut faktor-faktor yang mempengaruhi besaran premi:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Nilai mesin atau peralatan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Jenis dan fungsi mesin
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Usia mesin
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Intensitas penggunaan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Riwayat perawatan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
              Lingkungan operasional
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi Machinery Breakdown
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Perlindungan mesin industri memerlukan pendekatan yang tepat sesuai karakter operasional 
            bisnis Anda. Konsultasikan kebutuhan perlindungan mesin Anda untuk mendapatkan struktur 
            jaminan yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Machinery%20Breakdown"
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

          {/* Pillar Link */}
          <div className="mt-8 bg-slate-100 rounded-xl p-5 border border-slate-200">
            <Link href="/asuransi-engineering" className="flex items-center gap-2 text-slate-700 hover:text-orange-600 font-medium transition">
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Asuransi Engineering
            </Link>
            <p className="text-sm text-slate-500 mt-1">Lihat semua jenis asuransi engineering untuk proyek dan industri</p>
          </div>

          {/* Engineering Cluster Links */}
          <div className="mt-8 border-t pt-8">
            <h3 className="text-lg font-semibold text-blue-800">
              Jenis Asuransi Engineering Lainnya
            </h3>

            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/asuransi-car-indonesia" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Asuransi Contractor All Risks (CAR)
                </Link>
              </li>
              <li>
                <Link href="/asuransi-ear" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Asuransi Erection All Risks (EAR)
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
                <Link href="/asuransi-liability" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Liability
                </Link>
              </li>
              <li>
                <Link href="/asuransi-public-liability" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Public Liability
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
            polis dapat berbeda tergantung underwriting dan kondisi mesin. Untuk informasi 
            lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Machinery Breakdown",
                "description": "Perlindungan terhadap kerusakan mesin dan peralatan industri akibat kegagalan mekanis, gangguan listrik, dan risiko operasional lainnya.",
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
                    name: "Apa itu Asuransi Machinery Breakdown?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Machinery Breakdown adalah perlindungan untuk mesin dan peralatan industri terhadap kerusakan mendadak akibat kegagalan mekanis, korsleting listrik, dan risiko operasional lainnya.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah mesin lama bisa diasuransikan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Mesin lama dapat diasuransikan selama masih dalam kondisi operasional yang baik dan memenuhi persyaratan underwriting.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah polis ini mencakup kerugian akibat berhentinya produksi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Perluasan Business Interruption dapat ditambahkan untuk menjamin potensi kehilangan pendapatan akibat kerusakan mesin.",
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
