import { Metadata } from 'next'

const baseUrl = 'https://duniaasuransi.com';
import Link from 'next/link'
import { Shield, ArrowLeft, Package, Phone, MessageCircle, AlertTriangle, CheckCircle, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Product Liability | Perlindungan Tanggung Jawab Produk | Dunia Asuransi',
  description: 'Asuransi Product Liability memberikan perlindungan terhadap tuntutan hukum akibat produk yang menyebabkan cedera atau kerugian kepada konsumen. Konsultasi profesional bersama Dunia Asuransi.',
  keywords: [
    'asuransi product liability',
    'asuransi tanggung jawab produk',
    'asuransi produk',
    'asuransi produsen',
    'asuransi distributor',
    'product liability indonesia',
    'asuransi konsumen',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Product Liability | Perlindungan Tanggung Jawab Produk',
    description: 'Perlindungan terhadap tuntutan hukum akibat produk yang menyebabkan cedera atau kerugian kepada konsumen.',
    url: `${baseUrl}/asuransi-product-liability`,
    type: 'article',
    locale: 'id_ID',
  },
}

export default function ProductLiabilityPage() {
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
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs text-amber-600 font-medium">Asuransi Liability</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Product Liability
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Sebagai produsen, distributor, atau penjual produk, Anda bertanggung jawab atas keamanan 
            produk yang beredar di pasaran. Jika produk Anda menyebabkan cedera atau kerugian kepada 
            konsumen, risiko tuntutan hukum dapat mengancam keuangan dan reputasi bisnis.{' '}
            <strong>Asuransi Product Liability</strong> memberikan perlindungan terhadap risiko 
            tuntutan hukum tersebut.
          </p>

          {/* What is Product Liability */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Apa Itu Asuransi Product Liability?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Product Liability adalah polis yang menjamin tanggung jawab hukum produsen, 
            distributor, atau penjual terhadap klaim pihak ketiga (konsumen) akibat produk yang 
            cacat, rusak, atau berbahaya. Perlindungan ini mencakup biaya ganti rugi, biaya hukum, 
            dan biaya lain yang terkait dengan klaim tersebut.
          </p>

          <div className="mt-6 bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-amber-800 text-lg">Risiko yang Dijamin</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Cedera badan konsumen akibat produk cacat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Kerusakan properti konsumen akibat produk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Kerugian finansial akibat produk tidak sesuai spesifikasi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Biaya pembelaan hukum dan pengacara</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Biaya recall produk (dengan perluasan)</span>
              </li>
            </ul>
          </div>

          {/* Siapa yang Membutuhkan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Siapa yang Membutuhkan Asuransi Ini?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Product Liability relevan untuk berbagai pihak yang terlibat dalam rantai 
            pasok produk, dari produsen hingga penjual ritel. Berikut adalah pihak-pihak yang 
            umumnya memerlukan perlindungan ini:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Produsen</span>
              </div>
              <p className="text-sm text-slate-600">Pabrikan dan produsen produk konsumen</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Distributor</span>
              </div>
              <p className="text-sm text-slate-600">Perusahaan distribusi dan grosir</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Retailer</span>
              </div>
              <p className="text-sm text-slate-600">Toko ritel dan marketplace</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Importir</span>
              </div>
              <p className="text-sm text-slate-600">Perusahaan importir produk luar negeri</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Industri Makanan</span>
              </div>
              <p className="text-sm text-slate-600">Produsen makanan dan minuman</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-slate-800">Industri Farmasi</span>
              </div>
              <p className="text-sm text-slate-600">Produsen obat dan alat kesehatan</p>
            </div>
          </div>

          {/* Contoh Kasus */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Contoh Kasus Klaim
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Berikut adalah beberapa contoh situasi yang dapat menjadi klaim Asuransi Product Liability:
          </p>

          <div className="mt-4 space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="font-medium text-slate-800">🍽️ Produk Makanan Tercemar</p>
              <p className="text-sm text-slate-600 mt-1">Konsumen mengalami keracunan makanan akibat produk makanan yang terkontaminasi bakteri.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="font-medium text-slate-800">🧸 Mainan Berbahaya</p>
              <p className="text-sm text-slate-600 mt-1">Mainan anak memiliki bagian kecil yang lepas dan menimbulkan risiko tersedak.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="font-medium text-slate-800">🔌 Alat Elektronik Rusak</p>
              <p className="text-sm text-slate-600 mt-1">Alat elektronik mengalami korsleting dan menyebabkan kebakaran di rumah konsumen.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="font-medium text-slate-800">💊 Obat Berbahaya</p>
              <p className="text-sm text-slate-600 mt-1">Obat memiliki efek samping yang tidak tercantum dalam label peringatan.</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Perlindungan Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Klaim product liability dapat bernilai sangat besar, terutama jika produk Anda beredar 
            secara luas. Satu produk cacat dapat menyebabkan banyak klaim dari konsumen yang berbeda. 
            Tanpa asuransi, perusahaan dapat menghadapi kerugian finansial yang signifikan.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Tanpa Asuransi Product Liability</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya ganti rugi 100% ditanggung sendiri</li>
                <li>• Biaya pengacara dan pengadilan sendiri</li>
                <li>• Reputasi merek rusak</li>
                <li>• Potensi kebangkrutan</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">✅ Dengan Asuransi Product Liability</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Klaim ditanggung hingga limit polis</li>
                <li>• Biaya hukum tercover</li>
                <li>• Perlindungan reputasi bisnis</li>
                <li>• Bisnis tetap berjalan stabil</li>
              </ul>
            </div>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Premi asuransi product liability ditentukan berdasarkan berbagai faktor yang mencerminkan 
            tingkat risiko produk Anda:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Jenis dan kategori produk
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Volume penjualan tahunan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Pasar distribusi (lokal/ekspor)
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Standar quality control
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Riwayat klaim sebelumnya
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              Limit pertanggungan
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi Product Liability
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Lindungi bisnis Anda dari risiko tuntutan hukum akibat produk. Konsultasikan kebutuhan 
            perlindungan product liability Anda untuk mendapatkan struktur polis yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Product%20Liability"
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
                <Link href="/asuransi-professional-indemnity" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Professional Indemnity
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
            polis dapat berbeda tergantung underwriting dan karakteristik produk. Untuk informasi 
            lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Product Liability",
                "description": "Perlindungan terhadap tuntutan hukum akibat produk yang menyebabkan cedera atau kerugian kepada konsumen.",
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
                    name: "Apa itu Asuransi Product Liability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Product Liability adalah perlindungan terhadap tuntutan hukum akibat produk yang menyebabkan cedera atau kerugian kepada konsumen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Siapa yang membutuhkan Asuransi Product Liability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Produsen, distributor, importir, dan retailer yang memasarkan produk kepada konsumen memerlukan perlindungan ini.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apa saja yang dicakup oleh polis ini?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Polis mencakup cedera badan konsumen, kerusakan properti, biaya hukum, dan dengan perluasan dapat mencakup biaya recall produk.",
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
          <p>© {new Date().getFullYear()} Dunia Asuransi - Rio Mardiansyah.</p>
          <p className="mt-2">WhatsApp: 0813-1556-592</p>
        </div>
      </footer>
    </main>
  )
}
