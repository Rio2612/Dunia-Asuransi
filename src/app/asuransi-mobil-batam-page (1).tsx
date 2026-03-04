'use client'

import { useState } from 'react'
import KalkulatorMobilBatamPopup from '@/components/KalkulatorMobilBatamPopup'

export default function AsuransiMobilBatamPage() {
  const [openKalkulator, setOpenKalkulator] = useState(false)

  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-blue-200 mb-6">
            Zona 1 - Batam & Kepulauan Riau
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Mobil Batam
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Perlindungan All Risk dan Total Loss Only untuk kendaraan pribadi,
            perusahaan, dan mobil listrik di wilayah Batam dan Kepulauan Riau.
          </p>

          <button
            onClick={() => setOpenKalkulator(true)}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-emerald-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Hitung Premi Sekarang
          </button>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih Asuransi Mobil di Batam?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Perlindungan terpercaya dengan tarif sesuai ketentuan OJK untuk kendaraan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Perlindungan Menyeluruh
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Jaminan kerusakan ringan, berat, hingga kehilangan total sesuai
                jenis pertanggungan yang dipilih.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Tarif Sesuai OJK
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Premi mengikuti ketentuan wilayah Zona 1 sehingga transparan
                dan sesuai regulasi resmi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                Dukungan Klaim
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Proses klaim dibantu hingga selesai agar kendaraan cepat
                kembali digunakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JENIS PERLINDUNGAN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilihan Perlindungan Asuransi Mobil
            </h2>
            <p className="text-slate-600">
              Pilih jenis perlindungan yang sesuai dengan kebutuhan kendaraan Anda
            </p>
          </div>

          <div className="space-y-8">
            {/* All Risk */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    All Risk (Comprehensive)
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Menjamin kerusakan sebagian maupun total akibat kecelakaan,
                    benturan, tergores, hingga risiko lain yang dijamin dalam polis.
                    Cocok untuk mobil baru atau kendaraan dengan nilai tinggi.
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
                  <h3 className="text-xl font-semibold mb-3 text-amber-800">
                    Total Loss Only (TLO)
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Menjamin kehilangan atau kerusakan di atas 75% dari nilai kendaraan.
                    Pilihan ekonomis untuk mobil dengan usia lebih dari 5–8 tahun.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobil Listrik */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-800">
                    Asuransi Mobil Listrik di Batam
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Untuk kendaraan listrik, premi dihitung menggunakan batas atas
                    tarif sesuai ketentuan OJK. Risiko sendiri ditetapkan sebesar
                    Rp 500.000 per kejadian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA VISUAL */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ingin Tahu Estimasi Premi Anda?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Gunakan kalkulator premi untuk mengetahui estimasi biaya
            perlindungan kendaraan Anda secara instan.
          </p>

          <button
            onClick={() => setOpenKalkulator(true)}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-emerald-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Buka Kalkulator Premi
          </button>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
              Berapa Premi Asuransi Mobil di Batam?
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Besaran premi asuransi mobil di Batam ditentukan berdasarkan nilai
                kendaraan, jenis pertanggungan, dan kategori wilayah. Batam
                termasuk Zona 1 dalam perhitungan tarif OJK.
              </p>

              <p>
                Untuk kendaraan listrik, digunakan tarif batas atas sesuai regulasi,
                dengan risiko sendiri Rp 500.000 per kejadian. Sementara untuk mobil
                konvensional, risiko sendiri umumnya Rp 300.000 per kejadian.
              </p>
            </div>

            {/* Floating CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-800">Butuh bantuan perhitungan?</p>
                  <p className="text-sm text-slate-600">Konsultasi gratis via WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0813-1556-592
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Kalkulator */}
      <KalkulatorMobilBatamPopup 
        isOpen={openKalkulator} 
        onClose={() => setOpenKalkulator(false)} 
      />
    </main>
  )
}
