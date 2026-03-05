'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaJogja from '@/components/FAQSchemaJogja'
import BreadcrumbSchema, { breadcrumbConfigs } from '@/components/BreadcrumbSchema'

export default function AsuransiMobilJogjaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const bengkelRekanan = [
    { nama: 'Auto 2000 Yogyakarta', alamat: 'Jl. Laksda Adisucipto No. 45', layanan: 'Toyota' },
    { nama: 'Honda Prospect Motor Jogja', alamat: 'Jl. Solo-Yogya KM 7', layanan: 'Honda' },
    { nama: 'Nissan Dealer Yogyakarta', alamat: 'Jl. Ring Road Utara', layanan: 'Nissan' },
    { nama: 'Bengkel Mitra Asuransi', alamat: 'Jl. Magelang KM 5', layanan: 'Multi Brand' },
    { nama: 'Workshop 88 Yogyakarta', alamat: 'Jl. Wates No. 88', layanan: 'Multi Brand' },
    { nama: 'Bengkel Sahabat Motor', alamat: 'Jl. Parangtritis KM 4', layanan: 'Multi Brand' },
  ]

  const risikoLokal = [
    {
      icon: '🌧️',
      judul: 'Banjir Kali Code & Sungai Gajahwong',
      deskripsi: 'Area sekitar Kali Code dan Gajahwong rentan banjir saat hujan deras. Pertimbangkan perluasan banjir dalam polis asuransi Anda.',
      area: 'Kecamatan Danurejan, Gondokusuman, Jetis'
    },
    {
      icon: '🚗',
      judul: 'Kemacetan Malioboro & UGM',
      deskripsi: 'Area wisata dan kampus sering mengalami kemacetan padat, meningkatkan risiko kecelakaan minor seperti gesekan dan benturan.',
      area: 'Jl. Malioboro, Jl. Solo, Area UGM'
    },
    {
      icon: '🏍️',
      judul: 'Volume Motor Tinggi',
      deskripsi: 'Jogja memiliki jumlah motor sangat tinggi. Risiko tabrakan dengan motor lebih besar, terutama di persimpangan.',
      area: 'Seluruh wilayah Yogyakarta'
    },
    {
      icon: '🌊',
      judul: 'Banjir Rob Parangtritis',
      deskripsi: 'Area pesisir selatan Jogja rentan banjir rob, khususnya saat musim hujan dan air laut pasang.',
      area: 'Kecamatan Kretek, Panggang'
    },
  ]

  const tipsParkir = [
    { lokasi: 'Malioboro Mall', tips: 'Parkir basement tersedia, lebih aman dari panas dan hujan' },
    { lokasi: 'Keraton Yogyakarta', tips: 'Parkir resmi di area utara, jangan parkir sembarangan' },
    { lokasi: 'Candi Prambanan', tips: 'Area parkir luas dengan penjagaan keamanan' },
    { lokasi: 'Pantai Parangtritis', tips: 'Parkir di area resmi, hindari parkir di pinggir jalan' },
    { lokasi: 'Kota Gede', tips: 'Parkir di area khusus, waspadai jam sibuk weekend' },
  ]

  const faqData = [
    {
      pertanyaan: 'Berapa premi asuransi mobil di Yogyakarta?',
      jawaban: 'Yogyakarta termasuk Zona 3 untuk perhitungan premi asuransi kendaraan bermotor. Tarif All Risk berkisar 2.05% - 2.75% dari nilai kendaraan, sedangkan TLO sekitar 0.65% - 0.85%. Premi di Jogja lebih murah dibanding Jakarta atau Batam karena tingkat risiko yang lebih rendah.'
    },
    {
      pertanyaan: 'Apa saja bengkel rekanan asuransi di Jogja?',
      jawaban: 'Tersedia berbagai bengkel rekanan di Yogyakarta termasuk Auto 2000 (Toyota), Honda Prospect Motor, Nissan Dealer, dan bengkel multi brand seperti Workshop 88 dan Bengkel Mitra Asuransi. Semua bengkel tersebar di berbagai lokasi strategis di Jogja dan sekitarnya.'
    },
    {
      pertanyaan: 'Apakah perlu perluasan banjir untuk mobil di Jogja?',
      jawaban: 'Sangat disarankan. Area sekitar Kali Code, Sungai Gajahwong, dan beberapa lokasi di Jogja rentan banjir saat hujan deras. Perluasan banjir menambah premi sekitar 0.1% - 0.2% tapi memberikan perlindungan penting.'
    },
    {
      pertanyaan: 'Bagaimana proses klaim asuransi mobil di Jogja?',
      jawaban: 'Proses klaim mudah: 1) Hubungi Rio di 0813-1556-592, 2) Foto kerusakan dan lokasi, 3) Lapor ke pihak asuransi maksimal 5x24 jam, 4) Surveyor akan datang, 5) Kendaraan dibawa ke bengkel rekanan, 6) Perbaikan diproses. Rio akan mendampingi dari awal hingga selesai.'
    },
    {
      pertanyaan: 'Apakah ada layanan derek 24 jam di Jogja?',
      jawaban: 'Ya, tersedia layanan derek 24 jam untuk peserta asuransi. Cukup hubungi nomor darurat di polis atau hubungi Rio untuk bantuan koordinasi. Layanan ini mencakup wilayah Yogyakarta dan sekitarnya termasuk Solo dan Klaten.'
    },
    {
      pertanyaan: 'Berapa risiko sendiri (deductible) untuk klaim di Jogja?',
      jawaban: 'Risiko sendiri standar adalah Rp 300.000 per kejadian untuk mobil konvensional. Untuk mobil listrik, risiko sendiri Rp 500.000 per kejadian. Biaya ini dibayar saat mengambil kendaraan dari bengkel.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      {/* Schema untuk SEO */}
      <FAQSchemaJogja />
      <BreadcrumbSchema items={breadcrumbConfigs.asuransiMobilJogja} />

      {/* HERO - Nuansa Jogja */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-amber-200 mb-6">
            Zona 3 - Yogyakarta & Jawa Tengah
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Mobil Yogyakarta
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Perlindungan All Risk dan TLO untuk kendaraan Anda di Kota Pelajar.
            Premi Zona 3 lebih hemat, layanan klaim mudah dengan bengkel rekanan lengkap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20mau%20tanya%20asuransi%20mobil%20di%20Jogja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Gratis
            </a>
            <Link
              href="/#produk"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition border border-white/20"
            >
              Lihat Produk Lain
            </Link>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN ZONA 3 */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Keuntungan Asuransi Mobil di Yogyakarta
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Yogyakarta termasuk Zona 3 dengan premi lebih hemat dibanding kota besar lainnya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-2xl">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Premi Lebih Hemat
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zona 3 memiliki tarif lebih rendah dari Jakarta dan Batam.
                Hemat hingga 20-30% untuk perlindungan yang sama.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100 group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-2xl">
                🔧
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Bengkel Rekanan Lengkap
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tersedia bengkel resmi dan multi brand tersebar di Jogja,
                Solo, dan sekitarnya untuk kemudahan perbaikan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-2xl">
                📞
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Layanan Personal
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rio Mardiansyah siap membantu proses klaim hingga selesai.
                Konsultasi gratis via WhatsApp kapan saja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RISIKO LOKAL */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Risiko Kendaraan di Yogyakarta
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kenali risiko lokal untuk memilih perlindungan yang tepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {risikoLokal.map((risiko, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{risiko.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{risiko.judul}</h3>
                    <p className="text-slate-600 text-sm mb-2">{risiko.deskripsi}</p>
                    <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">
                      📍 {risiko.area}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <p className="text-amber-800 font-medium text-center">
              ⚠️ Rekomendasi: Tambahkan perluasan banjir dan huru-hara untuk perlindungan menyeluruh di Jogja
            </p>
          </div>
        </div>
      </section>

      {/* BENGKEL REKANAN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bengkel Rekanan Asuransi di Yogyakarta
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Jaringan bengkel luas untuk kemudahan perbaikan kendaraan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bengkelRekanan.map((bengkel, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-semibold text-slate-800">{bengkel.nama}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-2">{bengkel.alamat}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                  {bengkel.layanan}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              * Daftar bengkel dapat berubah. Hubungi Rio untuk informasi bengkel rekanan terbaru.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS PARKIR */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tips Parkir Aman di Yogyakarta
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Lokasi parkir aman untuk menghindari risiko kerusakan dan kehilangan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Lokasi</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Tips Parkir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tipsParkir.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">{item.lokasi}</td>
                    <td className="px-6 py-4 text-slate-600">{item.tips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* JENIS PERLINDUNGAN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilihan Perlindungan
            </h2>
            <p className="text-slate-600">
              Pilih jenis asuransi sesuai kebutuhan dan usia kendaraan
            </p>
          </div>

          <div className="space-y-6">
            {/* All Risk */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                    All Risk (Comprehensive)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Menanggung kerusakan sebagian maupun total akibat kecelakaan, benturan, tergores, hingga risiko lain dalam polis.
                    Cocok untuk mobil baru atau berusia di bawah 5 tahun.
                  </p>
                  <p className="text-sm text-indigo-600 font-medium">
                    Tarif Zona 3: 2.05% - 2.75% dari nilai kendaraan
                  </p>
                </div>
              </div>
            </div>

            {/* TLO */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-800">
                    Total Loss Only (TLO)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Menanggung kehilangan atau kerusakan di atas 75% nilai kendaraan.
                    Pilihan ekonomis untuk mobil berusia 5-10 tahun.
                  </p>
                  <p className="text-sm text-amber-600 font-medium">
                    Tarif Zona 3: 0.65% - 0.85% dari nilai kendaraan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan Seputar Asuransi Mobil Jogja
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.pertanyaan}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.jawaban}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Melindungi Kendaraan Anda?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Konsultasi gratis dengan Rio Mardiansyah untuk pilihan perlindungan terbaik.
            Proses mudah, premi transparan, klaim terbantu.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20mau%20tanya%20asuransi%20mobil%20di%20Jogja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: 0813-1556-592
          </a>
        </div>
      </section>

    </main>
  )
}
