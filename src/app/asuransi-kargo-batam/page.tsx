import { Metadata } from 'next'

const baseUrl = 'https://duniaasuransi.com';
import Link from 'next/link'
import KalkulatorKargo from '@/components/KalkulatorKargo'
import { Shield, ArrowLeft, Ship, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asuransi Kargo Batam | Marine Cargo Domestik & Ekspor Impor | Dunia Asuransi',
  description: 'Asuransi Kargo Batam untuk pengiriman domestik dan ekspor impor. Lindungi barang Anda dengan ICC A, B, atau C. Simulasi premi tersedia. Konsultasi gratis dengan Rio Mardiansyah.',
  keywords: [
    'asuransi kargo batam',
    'marine cargo batam',
    'asuransi pengiriman barang batam',
    'asuransi ekspor impor',
    'asuransi domestik',
    'ICC A batam',
    'asuransi barang ekspor',
    'asuransi pengiriman laut',
    'asuransi pengiriman udara',
    'asuransi pengiriman darat'
  ],
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Kargo Batam | Marine Cargo Domestik & Ekspor Impor',
    description: 'Asuransi Kargo Batam untuk pengiriman domestik dan ekspor impor. Lindungi barang Anda dengan ICC A, B, atau C.',
    url: `${baseUrl}/asuransi-kargo-batam`,
    type: 'article',
    locale: 'id_ID',
  },
}

export default function KargoPage() {
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
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Ship className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <span className="text-xs text-cyan-600 font-medium">Asuransi Kargo</span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Asuransi Kargo Batam – Marine Cargo Domestik & Ekspor Impor
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
            Asuransi Kargo (Marine Cargo Insurance) memberikan perlindungan atas
            barang selama proses pengangkutan melalui darat, laut, maupun udara.
            Baik pengiriman dalam negeri maupun ekspor impor, risiko seperti
            kerusakan, kehilangan, atau kecelakaan tetap dapat terjadi. Sebagai kota
            perdagangan bebas, <strong>Batam</strong> memiliki aktivitas pengiriman barang yang
            sangat tinggi, sehingga kebutuhan akan asuransi kargo menjadi sangat penting.
          </p>

          {/* What is Marine Cargo */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Apa Itu Asuransi Marine Cargo?
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Marine Cargo Insurance adalah polis yang menjamin barang selama
            pengiriman. Polis ini umumnya menggunakan klausula Institute Cargo
            Clauses (ICC) A, B, atau C yang menentukan luas jaminan risiko. Pemilihan
            klausula yang tepat akan sangat mempengaruhi tingkat perlindungan dan
            besaran premi yang harus dibayarkan.
          </p>

          <ul className="mt-4 bg-slate-50 p-5 rounded-xl space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 text-sm font-bold">A</span>
              <div>
                <strong className="text-slate-800">ICC A (All Risk)</strong>
                <p className="text-slate-600 text-sm">Jaminan paling luas, menanggung semua risiko kerusakan kecuali yang secara eksplisit dikecualikan dalam polis.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 text-yellow-600 text-sm font-bold">B</span>
              <div>
                <strong className="text-slate-800">ICC B</strong>
                <p className="text-slate-600 text-sm">Jaminan menengah, menanggung risiko tertentu seperti kebakaran, karam, tabrakan, dan gempa.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600 text-sm font-bold">C</span>
              <div>
                <strong className="text-slate-800">ICC C</strong>
                <p className="text-slate-600 text-sm">Jaminan dasar untuk risiko besar seperti karam, tabrakan, dan kehilangan total.</p>
              </div>
            </li>
          </ul>

          {/* Domestik vs Ekspor Impor */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Perbedaan Domestik dan Ekspor Impor
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Pengiriman domestik biasanya memiliki risiko lebih sederhana karena
            berada dalam satu negara. Sedangkan ekspor impor melibatkan risiko
            tambahan seperti transit antar negara, perubahan moda transportasi,
            dan perbedaan regulasi internasional. Pemahaman akan perbedaan ini
            penting dalam menentukan jenis perlindungan yang tepat.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">📦 Pengiriman Domestik</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Rate premi lebih rendah</li>
                <li>• Proses klaim lebih simpel</li>
                <li>• Regulasi mengikuti hukum Indonesia</li>
                <li>• Cocok untuk pengiriman antar pulau</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
              <h3 className="font-semibold text-orange-800 mb-2">🌍 Ekspor Impor</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Rate premi lebih tinggi</li>
                <li>• Melibatkan pihak asuransi reasuransi</li>
                <li>• Mengikuti regulasi internasional</li>
                <li>• Perlu pertimbangan transit & moda</li>
              </ul>
            </div>
          </div>

          {/* Cara Menghitung Premi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Cara Menghitung Premi Asuransi Kargo
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Nilai pertanggungan biasanya dihitung dari nilai barang ditambah
            freight (biaya angkut), kemudian ditambahkan 10% sebagai estimasi
            keuntungan. Premi dihitung berdasarkan rate sesuai jenis pengiriman
            dan klausula ICC yang dipilih. Berikut rumus yang umum digunakan:
          </p>

          <div className="mt-4 bg-slate-800 text-white p-4 rounded-lg font-mono text-sm">
            <p>Nilai Pertanggungan = Nilai Barang + Freight + (10% × Nilai Barang)</p>
            <p className="mt-2">Premi = Nilai Pertanggungan × Rate %</p>
          </div>

          {/* Calculator */}
          <KalkulatorKargo />

          {/* Konsultasi */}
          <h2 className="mt-10 text-xl md:text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-4">
            Konsultasi Asuransi Kargo Batam
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Untuk jenis barang khusus seperti mesin berat, komoditas, atau
            pengiriman berisiko tinggi, rate dan syarat polis dapat berbeda.
            Konsultasikan kebutuhan Anda untuk mendapatkan perlindungan yang tepat.
            Saya siap membantu Anda memilih jenis perlindungan yang sesuai dengan
            kebutuhan dan budget Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Kargo%20Batam"
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
                <Link href="/asuransi-mobil-batam" className="hover:underline flex items-center gap-2">
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
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-slate-500 border-t pt-6">
            <strong>Disclaimer:</strong> Simulasi premi di atas bersifat estimasi. Rate final
            ditentukan berdasarkan underwriting dan jenis barang. Untuk informasi lebih akurat,
            silakan hubungi kami untuk konsultasi.
          </p>

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
                    name: "Apa itu ICC A pada asuransi kargo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ICC A adalah klausula dengan perlindungan paling luas atau all risk dalam asuransi marine cargo. Klausula ini menanggung semua risiko kerusakan kecuali yang secara eksplisit dikecualikan dalam polis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Apakah asuransi kargo berlaku untuk pengiriman domestik?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ya, asuransi kargo dapat digunakan untuk pengiriman dalam negeri maupun ekspor impor. Rate premi untuk domestik biasanya lebih rendah dibanding ekspor impor.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Bagaimana cara menghitung premi asuransi kargo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Premi dihitung dari nilai barang ditambah freight dan margin 10%, kemudian dikalikan rate sesuai jenis pengiriman dan klausula ICC. Rate bervariasi mulai dari 0.10% hingga 0.35% tergantung jenis pengiriman dan klausula yang dipilih.",
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
