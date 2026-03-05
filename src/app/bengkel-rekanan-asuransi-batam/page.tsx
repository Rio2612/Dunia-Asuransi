'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaBengkelBatam from '@/components/FAQSchemaBengkelBatam'
import BreadcrumbSchema, { breadcrumbConfigs } from '@/components/BreadcrumbSchema'

export default function BengkelRekananAsuransiBatamPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string>('semua')

  const bengkelRekanan = [
    {
      nama: 'Auto 2000 Batam',
      alamat: 'Jl. Ahmad Yani, Sukajadi, Batam Center',
      telepon: '0778-456789',
      layanan: 'Toyota',
      jamBuka: '08:00 - 17:00',
      fasilitas: ['Car Wash', 'Waiting Lounge', 'WiFi', 'Cafe']
    },
    {
      nama: 'Honda Prospect Motor Batam',
      alamat: 'Jl. Raja H. Fisabilillah, Nagoya',
      telepon: '0778-321234',
      layanan: 'Honda',
      jamBuka: '08:30 - 17:30',
      fasilitas: ['Car Wash', 'Waiting Lounge', 'WiFi']
    },
    {
      nama: 'Nissan Batam',
      alamat: 'Jl. Sudirman, Batu Aji',
      telepon: '0778-789012',
      layanan: 'Nissan',
      jamBuka: '08:00 - 17:00',
      fasilitas: ['Waiting Lounge', 'WiFi']
    },
    {
      nama: 'Mitsubishi KTB Batam',
      alamat: 'Jl. Engku Putri, Batam Center',
      telepon: '0778-567890',
      layanan: 'Mitsubishi',
      jamBuka: '08:00 - 17:00',
      fasilitas: ['Car Wash', 'Waiting Lounge']
    },
    {
      nama: 'Suzuki Indo Mobil Batam',
      alamat: 'Jl. Yos Sudarso, Lubuk Baja',
      telepon: '0778-234567',
      layanan: 'Suzuki',
      jamBuka: '08:30 - 17:00',
      fasilitas: ['Waiting Lounge', 'WiFi']
    },
    {
      nama: 'Daihatsu Batam',
      alamat: 'Jl. Ahmad Yani, Batam Center',
      telepon: '0778-345678',
      layanan: 'Daihatsu',
      jamBuka: '08:00 - 17:30',
      fasilitas: ['Car Wash', 'Waiting Lounge', 'WiFi']
    },
    {
      nama: 'Bengkel Astra International Batam',
      alamat: 'Jl. Raja H. Fisabilillah, Sekupang',
      telepon: '0778-678901',
      layanan: 'Multi Brand',
      jamBuka: '08:00 - 18:00',
      fasilitas: ['Car Wash', 'Waiting Lounge', 'WiFi', 'Cafe', 'Shuttle Service']
    },
    {
      nama: 'Bengkel Prima Motor Batam',
      alamat: 'Jl. Simatupang, Batu Aji',
      telepon: '0778-890123',
      layanan: 'Multi Brand',
      jamBuka: '08:00 - 17:00',
      fasilitas: ['Car Wash', 'Waiting Lounge']
    },
    {
      nama: 'Bengkel Sejahtera Abadi',
      alamat: 'Jl. Duyung, Sei Beduk',
      telepon: '0778-456123',
      layanan: 'Multi Brand',
      jamBuka: '08:00 - 17:00',
      fasilitas: ['Waiting Lounge', 'WiFi']
    },
    {
      nama: 'Hyundai Batam Service Center',
      alamat: 'Jl. Bunguran, Nagoya',
      telepon: '0778-234890',
      layanan: 'Hyundai',
      jamBuka: '08:30 - 17:30',
      fasilitas: ['Waiting Lounge', 'WiFi', 'Cafe']
    },
  ]

  const tipsMemilihBengkel = [
    {
      judul: 'Pilih Bengkel Resmi Rekanan',
      deskripsi: 'Gunakan bengkel rekanan asuransi untuk menghindari penolakan klaim dan memastikan suku cadang original.',
      icon: '✅'
    },
    {
      judul: 'Cek Fasilitas Tersedia',
      deskripsi: 'Pilih bengkel dengan fasilitas lengkap seperti waiting lounge, WiFi, atau shuttle service sesuai kebutuhan.',
      icon: '🏢'
    },
    {
      judul: 'Konfirmasi Jam Operasional',
      deskripsi: 'Pastikan bengkel buka sesuai jadwal Anda. Beberapa bengkel tutup pada hari Minggu.',
      icon: '🕐'
    },
    {
      judul: 'Simpan Berita Acara',
      deskripsi: 'Minta salinan berita acara dan dokumen perbaikan untuk arsip pribadi Anda.',
      icon: '📄'
    },
    {
      judul: 'Foto Sebelum dan Sesudah',
      deskripsi: 'Dokumentasikan kondisi kendaraan sebelum masuk bengkel dan setelah perbaikan selesai.',
      icon: '📸'
    },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa itu bengkel rekanan asuransi di Batam?',
      jawaban: 'Bengkel rekanan asuransi adalah bengkel yang telah bekerja sama dengan perusahaan asuransi untuk melakukan perbaikan kendaraan yang mengalami kerusakan dan akan diklaim ke asuransi. Di Batam, terdapat berbagai bengkel rekanan resmi dari berbagai merek kendaraan.'
    },
    {
      pertanyaan: 'Apakah harus menggunakan bengkel rekanan saat klaim?',
      jawaban: 'Ya, untuk klaim asuransi mobil disarankan menggunakan bengkel rekanan agar proses klaim lebih lancar. Bengkel rekanan memiliki kerjasama langsung dengan asuransi, sehingga penyelesaian klaim lebih cepat dan suku cadang terjamin original.'
    },
    {
      pertanyaan: 'Berapa lama proses perbaikan di bengkel rekanan Batam?',
      jawaban: 'Waktu perbaikan bervariasi tergantung tingkat kerusakan. Untuk kerusakan ringan seperti bumper atau pintu, biasanya 3-5 hari kerja. Kerusakan berat bisa memakan waktu 7-14 hari kerja. Bengkel akan memberikan estimasi waktu setelah survey dilakukan.'
    },
    {
      pertanyaan: 'Apakah ada biaya yang harus dibayar di bengkel rekanan?',
      jawaban: 'Ya, Anda perlu membayar risiko sendiri (deductible) sebesar Rp 300.000 untuk mobil konvensional atau Rp 500.000 untuk mobil listrik. Biaya ini dibayarkan saat mengambil kendaraan yang sudah selesai diperbaiki.'
    },
    {
      pertanyaan: 'Bagaimana jika bengkel rekanan penuh di Batam?',
      jawaban: 'Jika bengkel rekanan penuh, Anda bisa memilih bengkel rekanan lain yang tersedia. Hubungi Rio di 0813-1556-592 untuk bantuan mencari bengkel dengan antrian lebih singkat atau jadwal perbaikan lebih cepat.'
    },
    {
      pertanyaan: 'Apakah bengkel rekanan melayani mobil listrik di Batam?',
      jawaban: 'Ya, beberapa bengkel rekanan di Batam sudah memiliki fasilitas dan teknisi tersertifikasi untuk melayani mobil listrik. Pastikan memberitahu jenis kendaraan saat menghubungi bengkel untuk memastikan kesiapan fasilitas.'
    },
    {
      pertanyaan: 'Apa saja dokumen yang dibawa ke bengkel rekanan?',
      jawaban: 'Dokumen yang perlu dibawa: STNK asli, KTP pemilik kendaraan, surat klaim dari asuransi, foto kerusakan, dan form laporan kecelakaan (jika ada). Bengkel akan membantu proses administrasi selanjutnya.'
    },
  ]

  const brands = ['semua', 'Toyota', 'Honda', 'Nissan', 'Mitsubishi', 'Suzuki', 'Daihatsu', 'Hyundai', 'Multi Brand']
  
  const filteredBengkel = selectedBrand === 'semua' 
    ? bengkelRekanan 
    : bengkelRekanan.filter(b => b.layanan === selectedBrand)

  return (
    <main className="bg-white text-slate-800">
      {/* Schema untuk SEO */}
      <FAQSchemaBengkelBatam />
      <BreadcrumbSchema items={breadcrumbConfigs.bengkelRekananBatam} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-blue-200 mb-6">
            Panduan Lengkap Bengkel Rekanan
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bengkel Rekanan Asuransi di Batam
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Daftar lengkap bengkel rekanan asuransi mobil di Batam dengan lokasi, 
            jam operasional, dan fasilitas yang tersedia untuk kemudahan klaim Anda.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20mau%20tanya%20bengkel%20rekanan%20asuransi%20di%20Batam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi Gratis
          </a>
        </div>
      </section>

      {/* FILTER BRAND */}
      <section className="py-8 px-6 bg-slate-50 border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedBrand === brand
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                {brand === 'semua' ? 'Semua Bengkel' : brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DAFTAR BENGKEL */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daftar Bengkel Rekanan di Batam
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Menampilkan {filteredBengkel.length} bengkel rekanan asuransi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredBengkel.map((bengkel, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{bengkel.nama}</h3>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium mt-1">
                      {bengkel.layanan}
                    </span>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {bengkel.jamBuka}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-slate-600">{bengkel.alamat}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-slate-600">{bengkel.telepon}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {bengkel.fasilitas.map((f, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS MEMILIH BENGKEL */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tips Memilih Bengkel Rekanan
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Panduan memilih bengkel yang tepat untuk klaim asuransi Anda
            </p>
          </div>

          <div className="space-y-4">
            {tipsMemilihBengkel.map((tip, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="text-2xl">{tip.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{tip.judul}</h3>
                  <p className="text-sm text-slate-600">{tip.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES KLAIM */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Alur Proses Klaim ke Bengkel
            </h2>
            <p className="text-slate-600">
              Langkah-langkah klaim asuransi mobil di bengkel rekanan
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
            <div className="space-y-6">
              {[
                { langkah: '1', judul: 'Hubungi Rio', deskripsi: 'Hubungi 0813-1556-592 untuk laporan kecelakaan/kerusakan' },
                { langkah: '2', judul: 'Dokumentasi', deskripsi: 'Foto kerusakan dari berbagai sudut dan lokasi kejadian' },
                { langkah: '3', judul: 'Lapor Asuransi', deskripsi: 'Laporan ke pihak asuransi maksimal 5x24 jam' },
                { langkah: '4', judul: 'Survey Kendaraan', deskripsi: 'Surveyor datang memeriksa kondisi kendaraan' },
                { langkah: '5', judul: 'Pilih Bengkel', deskripsi: 'Pilih bengkel rekanan sesuai merek dan lokasi' },
                { langkah: '6', judul: 'Perbaikan', deskripsi: 'Proses perbaikan oleh teknisi bersertifikat' },
                { langkah: '7', judul: 'Ambil Kendaraan', deskripsi: 'Bayar risiko sendiri dan ambil kendaraan selesai' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                    {item.langkah}
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1">{item.judul}</h3>
                    <p className="text-sm text-slate-600">{item.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              FAQ Bengkel Rekanan Batam
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Bantuan Klaim ke Bengkel?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Rio Mardiansyah siap membantu proses klaim Anda dari awal hingga kendaraan selesai diperbaiki.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20mau%20tanya%20bengkel%20rekanan%20di%20Batam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: 0813-1556-592
            </a>
            <Link
              href="/asuransi-mobil-batam"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition border border-white/20"
            >
              Asuransi Mobil Batam
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
