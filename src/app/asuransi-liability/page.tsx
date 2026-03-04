import { Metadata } from 'next'

const baseUrl = 'https://duniaasuransi.com';
import Link from 'next/link'
import { Shield, ArrowLeft, Scale, Phone, MessageCircle, CheckCircle, Users, Package, Briefcase, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Liability | Perlindungan Tanggung Jawab Hukum Bisnis | Dunia Asuransi',
  description: 'Asuransi Liability memberikan perlindungan terhadap risiko tuntutan hukum pihak ketiga akibat aktivitas bisnis. Pelajari jenis-jenis asuransi liability dan struktur perlindungannya bersama Dunia Asuransi.',
  keywords: [
    'asuransi liability',
    'asuransi tanggung jawab hukum',
    'public liability',
    'environmental liability',
    'product liability',
    'professional indemnity',
    'asuransi pihak ketiga',
    'asuransi tanggung jawab',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Liability | Dunia Asuransi',
    description: 'Perlindungan tanggung jawab hukum untuk bisnis dan industri melalui berbagai jenis Asuransi Liability.',
    url: `${baseUrl}/asuransi-liability`,
    type: 'article',
    locale: 'id_ID',
  },
}

export default function LiabilityPage() {
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
              <span className="text-xs text-indigo-600 font-medium">Asuransi Tanggung Jawab Hukum</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Liability
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Dalam menjalankan bisnis, risiko tuntutan hukum dari pihak ketiga merupakan salah satu 
            risiko yang tidak dapat diabaikan. Cedera badan, kerusakan properti, pencemaran lingkungan, 
            hingga kesalahan profesional dapat berujung pada klaim bernilai besar.{' '}
            <strong>Asuransi Liability</strong> hadir sebagai solusi perlindungan terhadap tanggung 
            jawab hukum yang timbul akibat aktivitas usaha.
          </p>

          {/* Jenis-Jenis Asuransi Liability */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Jenis-Jenis Asuransi Liability
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Liability memiliki berbagai jenis yang disesuaikan dengan karakteristik risiko 
            bisnis Anda. Berikut adalah jenis-jenis asuransi liability yang umum tersedia di Indonesia:
          </p>

          <div className="mt-6 space-y-4">
            {/* Public Liability */}
            <Link href="/asuransi-public-liability" className="block">
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-indigo-800 text-lg">Asuransi Public Liability</h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      Melindungi bisnis dari tuntutan pihak ketiga akibat cedera badan atau kerusakan 
                      properti yang terjadi di area operasional. Cocok untuk pemilik gedung, hotel, mall, 
                      rumah sakit, dan berbagai usaha yang berinteraksi dengan publik.
                    </p>
                    <span className="mt-2 inline-flex items-center text-indigo-600 text-sm font-medium">
                      Pelajari lebih lanjut →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Limbah B3 */}
            <Link href="/asuransi-liability-limbah-b3" className="block">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 text-lg">Asuransi Liability Limbah B3</h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      Memberikan perlindungan terhadap risiko pencemaran lingkungan dan biaya remediasi 
                      akibat limbah berbahaya. Diperlukan oleh industri kimia, manufaktur, rumah sakit, 
                      dan pengelola limbah B3.
                    </p>
                    <span className="mt-2 inline-flex items-center text-green-600 text-sm font-medium">
                      Pelajari lebih lanjut →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Product Liability */}
            <Link href="/asuransi-product-liability" className="block">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800 text-lg">Asuransi Product Liability</h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      Menjamin risiko tuntutan akibat produk yang menyebabkan cedera atau kerugian 
                      kepada konsumen. Sangat penting bagi produsen, distributor, dan penjual produk 
                      konsumen.
                    </p>
                    <span className="mt-2 inline-flex items-center text-amber-600 text-sm font-medium">
                      Pelajari lebih lanjut →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Professional Indemnity */}
            <Link href="/asuransi-professional-indemnity" className="block">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-800 text-lg">Asuransi Professional Indemnity</h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      Melindungi profesional dari tuntutan akibat kesalahan atau kelalaian dalam 
                      memberikan jasa. Diperlukan oleh konsultan, akuntan, arsitek, pengacara, dan 
                      tenaga profesional lainnya.
                    </p>
                    <span className="mt-2 inline-flex items-center text-purple-600 text-sm font-medium">
                      Pelajari lebih lanjut →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Asuransi Liability Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Satu klaim hukum dapat berdampak besar terhadap reputasi dan stabilitas finansial perusahaan. 
            Dengan perlindungan liability yang tepat, risiko tersebut dapat dialihkan secara lebih terstruktur. 
            Pemilihan jenis liability harus disesuaikan dengan karakter bisnis, skala operasional, dan 
            eksposur risiko yang dimiliki perusahaan.
          </p>

          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
            <h4 className="font-semibold text-indigo-800 mb-3">Manfaat Asuransi Liability:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Menanggung biaya ganti rugi kepada pihak ketiga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Mencakup biaya pembelaan hukum dan pengacara</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Melindungi aset dan reputasi perusahaan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Memberikan rasa aman dalam menjalankan bisnis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Memenuhi persyaratan kontrak dan regulasi</span>
              </li>
            </ul>
          </div>

          {/* Cara Memilih */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Cara Memilih Asuransi Liability yang Tepat
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Pemilihan asuransi liability yang tepat memerlukan analisis mendalam terhadap profil 
            risiko bisnis Anda. Berikut adalah langkah-langkah yang perlu dipertimbangkan:
          </p>

          <div className="mt-4 space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">1. Identifikasi Risiko Bisnis</p>
              <p className="text-sm text-slate-600 mt-1">Analisis aktivitas operasional dan potensi tuntutan hukum yang mungkin timbul</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">2. Pilih Jenis Liability yang Sesuai</p>
              <p className="text-sm text-slate-600 mt-1">Sesuaikan dengan industri dan karakteristik bisnis Anda</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">3. Tentukan Limit Pertanggungan</p>
              <p className="text-sm text-slate-600 mt-1">Pertimbangkan potensi maksimal klaim yang mungkin terjadi</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="font-medium text-slate-800">4. Konsultasi dengan Broker Asuransi</p>
              <p className="text-sm text-slate-600 mt-1">Dapatkan saran profesional untuk struktur polis yang optimal</p>
            </div>
          </div>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Dunia Asuransi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Kami membantu Anda menganalisis risiko dan menyusun struktur perlindungan liability 
            yang sesuai dengan kebutuhan bisnis. Konsultasikan kebutuhan asuransi liability Anda 
            untuk mendapatkan solusi perlindungan yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability"
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
                "headline": "Asuransi Liability",
                "description": "Panduan lengkap mengenai berbagai jenis Asuransi Liability untuk perlindungan risiko hukum bisnis.",
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
