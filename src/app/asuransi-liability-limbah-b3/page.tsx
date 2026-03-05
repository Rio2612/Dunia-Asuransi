import { Metadata } from 'next'

const baseUrl = 'https://duniaasuransi.com';
import Link from 'next/link'
import { Shield, ArrowLeft, Leaf, Phone, MessageCircle, AlertTriangle, Users, CheckCircle, Building2, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Liability Limbah B3 | Dunia Asuransi',
  description: 'Asuransi Liability Limbah B3 memberikan perlindungan terhadap tuntutan hukum, biaya remediasi, dan kerugian akibat pencemaran lingkungan dari aktivitas pengelolaan limbah berbahaya dan beracun. Konsultasi profesional bersama Dunia Asuransi.',
  keywords: [
    'asuransi liability limbah b3',
    'asuransi limbah b3',
    'environmental liability insurance',
    'asuransi tanggung jawab lingkungan',
    'asuransi pencemaran lingkungan',
    'asuransi b3',
    'asuransi limbah berbahaya',
    'asuransi environmental',
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Liability Limbah B3 | Dunia Asuransi',
    description: 'Perlindungan terhadap risiko tuntutan hukum dan biaya pemulihan lingkungan akibat pencemaran limbah B3. Solusi profesional dari Dunia Asuransi.',
    url: `${baseUrl}/asuransi-liability-limbah-b3`,
    type: 'article',
    locale: 'id_ID',
  },
}

export default function LimbahB3Page() {
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
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <span className="text-xs text-green-600 font-medium">Asuransi Environmental</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Liability Limbah B3
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Pengelolaan limbah B3 (Bahan Berbahaya dan Beracun) merupakan aktivitas dengan tingkat 
            risiko tinggi terhadap lingkungan dan masyarakat sekitar. Kesalahan dalam penyimpanan, 
            pengangkutan, maupun pengolahan limbah dapat menimbulkan pencemaran yang berdampak serius 
            secara hukum dan finansial.{' '}
            <strong>Asuransi Liability Limbah B3</strong> dari <strong>Dunia Asuransi</strong> dirancang 
            untuk memberikan perlindungan terhadap tuntutan hukum serta biaya pemulihan lingkungan 
            akibat kejadian pencemaran yang tidak disengaja.
          </p>

          {/* What is Limbah B3 */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Ruang Lingkup Perlindungan
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Asuransi Liability Limbah B3 memberikan jaminan komprehensif terhadap berbagai risiko 
            yang berkaitan dengan pengelolaan limbah berbahaya dan beracun. Perlindungan ini mencakup 
            aspek hukum, finansial, maupun pemulihan lingkungan.
          </p>

          <div className="mt-6 bg-green-50 p-6 rounded-xl border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-green-800 text-lg">Risiko yang Dijamin</h3>
            </div>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Tuntutan hukum akibat pencemaran lingkungan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Biaya pembersihan dan remediasi lingkungan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Cedera badan pihak ketiga akibat kontaminasi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Kerusakan properti akibat kontaminasi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Biaya pembelaan hukum dan investigasi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Biaya evakuasi dan relokasi sementara</span>
              </li>
            </ul>
          </div>

          {/* Siapa yang Membutuhkan */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Siapa yang Membutuhkan Asuransi Ini?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Berbagai sektor industri yang menghasilkan, mengelola, atau berinteraksi dengan limbah B3 
            memerlukan perlindungan asuransi ini. Regulasi lingkungan yang semakin ketat membuat 
            perlindungan ini menjadi kebutuhan penting bagi keberlangsungan bisnis.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Perusahaan Manufaktur</span>
              </div>
              <p className="text-sm text-slate-600">Industri penghasil limbah produksi</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Industri Kimia & Farmasi</span>
              </div>
              <p className="text-sm text-slate-600">Produsen bahan kimia dan obat-obatan</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Pengolahan Limbah</span>
              </div>
              <p className="text-sm text-slate-600">Perusahaan jasa pengelolaan limbah</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Rumah Sakit & Klinik</span>
              </div>
              <p className="text-sm text-slate-600">Fasilitas kesehatan penghasil limbah medis</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Laboratorium Penelitian</span>
              </div>
              <p className="text-sm text-slate-600">Instansi riset dan pengujian</p>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-800">Logistik Limbah B3</span>
              </div>
              <p className="text-sm text-slate-600">Perusahaan angkutan limbah berbahaya</p>
            </div>
          </div>

          {/* Mengapa Penting */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Mengapa Perlindungan Ini Penting?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Pencemaran lingkungan dapat menimbulkan sanksi administratif, gugatan perdata, hingga 
            konsekuensi hukum yang serius. Selain itu, biaya pemulihan lingkungan sering kali bernilai 
            sangat besar dan tidak terduga. Dengan perlindungan yang tepat, risiko finansial dapat 
            dialihkan sehingga perusahaan tetap dapat menjaga stabilitas operasional dan reputasi bisnis.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Tanpa Asuransi Limbah B3</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya remediasi 100% ditanggung sendiri</li>
                <li>• Sanksi administratif dan hukum</li>
                <li>• Reputasi perusahaan rusak</li>
                <li>• Potensi tutup usaha</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">✅ Dengan Asuransi Limbah B3</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Biaya remediasi ditanggung polis</li>
                <li>• Biaya hukum tercover</li>
                <li>• Reputasi bisnis terlindungi</li>
                <li>• Operasional tetap berjalan</li>
              </ul>
            </div>
          </div>

          {/* Regulasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Regulasi Lingkungan di Indonesia
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Pengelolaan limbah B3 di Indonesia diatur dalam berbagai peraturan yang ketat. Perusahaan 
            yang menghasilkan atau mengelola limbah B3 wajib memenuhi persyaratan tertentu termasuk 
            memiliki perlindungan asuransi. Berikut adalah regulasi utama yang terkait:
          </p>

          <div className="mt-4 space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-slate-800">UU No. 32/2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup</p>
              <p className="text-sm text-slate-600 mt-1">Dasar hukum tanggung jawab lingkungan perusahaan</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-slate-800">PP No. 22/2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup</p>
              <p className="text-sm text-slate-600 mt-1">Penjelasan detail tentang tanggung jawab lingkungan</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-slate-800">Peraturan Menteri LHK tentang Pengelolaan Limbah B3</p>
              <p className="text-sm text-slate-600 mt-1">Teknis pengelolaan dan pelaporan limbah B3</p>
            </div>
          </div>

          {/* Faktor Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Faktor Penentuan Premi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Setiap risiko dianalisis secara menyeluruh melalui proses underwriting untuk memastikan 
            struktur perlindungan yang sesuai. Berikut faktor-faktor yang mempengaruhi besaran premi:
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl grid sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Jenis dan volume limbah yang dikelola
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Metode penyimpanan dan pengolahan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Lokasi operasional
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Sistem pengendalian risiko lingkungan
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Riwayat insiden atau klaim sebelumnya
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Limit pertanggungan yang dipilih
            </li>
          </ul>

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Profesional Dunia Asuransi
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Perlindungan tanggung jawab lingkungan memerlukan pendekatan khusus yang disesuaikan 
            dengan regulasi dan karakter operasional perusahaan Anda. Konsultasikan kebutuhan 
            perlindungan limbah B3 Anda untuk mendapatkan struktur polis yang optimal.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Liability%20Limbah%20B3"
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
                <Link href="/asuransi-product-liability" className="hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Asuransi Product Liability
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
            polis dapat berbeda tergantung underwriting dan karakteristik operasional. Untuk informasi 
            lebih akurat, silakan hubungi kami untuk konsultasi.
          </p>

          {/* Article Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Asuransi Liability Limbah B3",
                "description": "Perlindungan terhadap risiko tuntutan hukum dan kerugian finansial akibat pencemaran lingkungan dari aktivitas pengelolaan limbah B3.",
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
                    name: "Apa itu Asuransi Liability Limbah B3?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Asuransi Liability Limbah B3 adalah perlindungan terhadap tuntutan hukum dan biaya pemulihan lingkungan akibat pencemaran yang disebabkan oleh aktivitas pengelolaan limbah berbahaya dan beracun.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah polis mencakup biaya pembersihan lingkungan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ya, polis umumnya mencakup biaya remediasi dan pembersihan lingkungan sesuai dengan batas pertanggungan yang disepakati.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Siapa yang membutuhkan asuransi ini?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Perusahaan industri, manufaktur, pengolahan limbah, rumah sakit, laboratorium, serta pihak yang menghasilkan atau mengelola limbah B3.",
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
