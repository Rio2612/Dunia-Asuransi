'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaKendaraan from '@/components/FAQSchemaKendaraan'

export default function AsuransiKendaraanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const clusters = [
    {
      nama: 'Asuransi Mobil',
      deskripsi: 'Perlindungan untuk mobil pribadi dan operasional dengan pilihan All Risk atau TLO.',
      warna: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      border: 'border-blue-200',
      textAccent: 'text-blue-600',
      artikel: [
        { judul: 'Asuransi Mobil Batam', slug: '/asuransi-mobil-batam', desc: 'Premi Zona 1 untuk wilayah Batam dan Kepulauan Riau' },
        { judul: 'Premi Asuransi Mobil', slug: '/premi-asuransi-mobil', desc: 'Perhitungan premi berdasarkan zona dan nilai kendaraan' },
        { judul: 'Asuransi Mobil All Risk', slug: '/asuransi-mobil-all-risk', desc: 'Perlindungan menyeluruh untuk kerusakan sebagian maupun total' },
        { judul: 'Asuransi Mobil TLO', slug: '/asuransi-mobil-tlo', desc: 'Perlindungan kerusakan total dan kehilangan' },
        { judul: 'Cara Klaim Asuransi Mobil', slug: '/cara-klaim-asuransi-mobil', desc: 'Panduan lengkap proses klaim asuransi kendaraan' },
        { judul: 'Asuransi Mobil Bekas', slug: '/asuransi-mobil-bekas', desc: 'Syarat dan ketentuan asuransi mobil second' },
      ]
    },
    {
      nama: 'Asuransi Alat Berat',
      deskripsi: 'Perlindungan untuk excavator, bulldozer, wheel loader, dan alat berat proyek lainnya.',
      warna: 'from-orange-500 to-amber-500',
      bgLight: 'bg-orange-50',
      border: 'border-orange-200',
      textAccent: 'text-orange-600',
      artikel: [
        { judul: 'Asuransi Excavator', slug: '/asuransi-excavator', desc: 'Perlindungan untuk excavator berbagai kapasitas' },
        { judul: 'Premi Asuransi Excavator', slug: '/premi-asuransi-excavator', desc: 'Kalkulasi premi berdasarkan nilai dan penggunaan' },
        { judul: 'Risiko Alat Berat Proyek', slug: '/risiko-alat-berat-proyek', desc: 'Identifikasi risiko kerja alat berat di lapangan' },
        { judul: 'Asuransi Bulldozer', slug: '/asuransi-bulldozer', desc: 'Perlindungan untuk bulldozer proyek konstruksi' },
        { judul: 'Asuransi Wheel Loader', slug: '/asuransi-wheel-loader', desc: 'Asuransi untuk wheel loader dan loader lainnya' },
      ]
    },
    {
      nama: 'Asuransi Crane',
      deskripsi: 'Perlindungan khusus untuk crane proyek dengan risiko tinggi dalam operasi pengangkatan.',
      warna: 'from-slate-600 to-slate-700',
      bgLight: 'bg-slate-50',
      border: 'border-slate-200',
      textAccent: 'text-slate-600',
      artikel: [
        { judul: 'Asuransi Crane', slug: '/asuransi-crane', desc: 'Perlindungan crane untuk berbagai jenis proyek' },
        { judul: 'Risiko Crane Proyek', slug: '/risiko-crane-proyek', desc: 'Analisis risiko operasional crane di lapangan' },
        { judul: 'Asuransi Crane Konstruksi', slug: '/asuransi-crane-konstruksi', desc: 'Solusi asuransi crane untuk proyek konstruksi' },
      ]
    },
    {
      nama: 'Asuransi Kendaraan Niaga',
      deskripsi: 'Perlindungan untuk truk, pickup, dan kendaraan operasional perusahaan.',
      warna: 'from-green-500 to-emerald-600',
      bgLight: 'bg-green-50',
      border: 'border-green-200',
      textAccent: 'text-green-600',
      artikel: [
        { judul: 'Asuransi Truk', slug: '/asuransi-truk', desc: 'Perlindungan untuk truk pengangkut barang' },
        { judul: 'Asuransi Mobil Pickup', slug: '/asuransi-pickup', desc: 'Asuransi untuk kendaraan pickup operasional' },
        { judul: 'Asuransi Kendaraan Operasional Perusahaan', slug: '/asuransi-kendaraan-operasional-perusahaan', desc: 'Solusi fleet insurance untuk perusahaan' },
      ]
    },
    {
      nama: 'Edukasi Asuransi Kendaraan',
      deskripsi: 'Panduan lengkap memahami asuransi kendaraan untuk keputusan yang tepat.',
      warna: 'from-purple-500 to-violet-600',
      bgLight: 'bg-purple-50',
      border: 'border-purple-200',
      textAccent: 'text-purple-600',
      artikel: [
        { judul: 'Apa Itu Asuransi Kendaraan', slug: '/apa-itu-asuransi-kendaraan', desc: 'Pengantar lengkap tentang asuransi kendaraan' },
        { judul: 'Cara Memilih Asuransi Kendaraan', slug: '/cara-memilih-asuransi-kendaraan', desc: 'Tips memilih perlindungan yang sesuai kebutuhan' },
      ]
    },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa itu asuransi kendaraan?',
      jawaban: 'Asuransi kendaraan adalah perlindungan finansial yang diberikan kepada kendaraan bermotor terhadap risiko kerusakan, kecelakaan, maupun kehilangan. Perlindungan ini mencakup berbagai jenis kendaraan mulai dari mobil pribadi, motor, alat berat, hingga kendaraan operasional perusahaan.'
    },
    {
      pertanyaan: 'Apa saja jenis kendaraan yang bisa diasuransikan?',
      jawaban: 'Berbagai jenis kendaraan dapat diasuransikan meliputi: mobil pribadi dan operasional, motor, truk dan pickup, alat berat seperti excavator, bulldozer, wheel loader, crane untuk proyek konstruksi, serta kendaraan khusus lainnya yang digunakan untuk kegiatan bisnis.'
    },
    {
      pertanyaan: 'Apakah alat berat seperti excavator dan crane bisa diasuransikan?',
      jawaban: 'Ya, alat berat seperti excavator, bulldozer, wheel loader, dan crane dapat diasuransikan. Perlindungan untuk alat berat biasanya mencakup kerusakan akibat operasi, kecelakaan kerja, dan risiko proyek lainnya. Premi dihitung berdasarkan nilai alat, jenis penggunaan, dan lokasi proyek.'
    },
    {
      pertanyaan: 'Apa perbedaan All Risk dan TLO pada asuransi mobil?',
      jawaban: 'All Risk memberikan perlindungan menyeluruh untuk kerusakan sebagian maupun total, termasuk kecil seperti tergores. TLO (Total Loss Only) hanya menanggung kerusakan di atas 75% nilai kendaraan atau kehilangan. All Risk premi lebih tinggi tapi perlindungan lebih lengkap, TLO lebih ekonomis untuk mobil berusia 5 tahun ke atas.'
    },
    {
      pertanyaan: 'Bagaimana cara klaim asuransi kendaraan?',
      jawaban: 'Proses klaim asuransi kendaraan: 1) Hubungi broker atau asuransi maksimal 5x24 jam setelah kejadian, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung (STNK, KTP, SIM), 4) Tunggu surveor untuk penilaian, 5) Kendaraan dibawa ke bengkel rekanan, 6) Perbaikan diproses dan ambil kendaraan setelah bayar risiko sendiri.'
    },
    {
      pertanyaan: 'Berapa premi asuransi kendaraan?',
      jawaban: 'Premi asuransi kendaraan bervariasi tergantung jenis kendaraan, nilai pertanggungan, zona wilayah, dan jenis pertanggungan. Untuk mobil, premi All Risk berkisar 1.5% - 3% dari nilai kendaraan per tahun. Untuk alat berat, premi dihitung berdasarkan risiko proyek dan nilai alat. Hubungi Rio untuk kalkulasi premi akurat.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaKendaraan />

      {/* HERO - Warna Navy untuk Pilar */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-blue-200 mb-6">
            Pilar Utama
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Kendaraan: Mobil, Alat Berat, Crane & Kendaraan Niaga
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl">
            Panduan lengkap asuransi kendaraan mulai dari mobil pribadi, excavator, crane hingga kendaraan operasional perusahaan. 
            Informasi premi, risiko, dan perlindungan untuk berbagai jenis kendaraan.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20kendaraan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi Gratis
          </a>
        </div>
      </section>

      {/* PENGANTAR */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Asuransi kendaraan</strong> merupakan perlindungan finansial yang diberikan terhadap berbagai jenis kendaraan dari risiko kerusakan, kecelakaan, maupun kehilangan. Perlindungan ini tidak hanya berlaku untuk mobil pribadi tetapi juga kendaraan operasional perusahaan serta alat berat yang digunakan dalam proyek industri.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dengan memiliki asuransi kendaraan yang tepat, pemilik kendaraan dapat mengurangi risiko kerugian finansial akibat kejadian tidak terduga serta menjaga kelancaran operasional kendaraan. Baik untuk kebutuhan pribadi maupun bisnis, asuransi kendaraan memberikan ketenangan pikiran dan perlindungan aset yang berharga.
            </p>
          </div>
        </div>
      </section>

      {/* MENGAPA PENTING */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Asuransi Kendaraan Penting?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', judul: 'Melindungi Aset', desc: 'Kendaraan bernilai tinggi mendapat perlindungan dari risiko kerusakan dan kehilangan' },
              { icon: '💰', judul: 'Mengurangi Kerugian', desc: 'Biaya perbaikan ditanggung asuransi, mengurangi beban finansial akibat kecelakaan' },
              { icon: '⚡', judul: 'Operasional Lancar', desc: 'Kendaraan bisnis tetap beroperasi dengan dukungan klaim yang cepat' },
              { icon: '😊', judul: 'Ketenangan Pikiran', desc: 'Fokus pada aktivitas tanpa khawatir risiko yang mungkin terjadi' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTER ARTIKEL */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Jenis Asuransi Kendaraan
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Pilih kategori kendaraan sesuai kebutuhan perlindungan Anda
          </p>

          <div className="space-y-10">
            {clusters.map((cluster, clusterIndex) => (
              <div key={clusterIndex} className={`${cluster.bgLight} rounded-3xl p-8 border ${cluster.border}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cluster.warna} flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${cluster.textAccent}`}>{cluster.nama}</h3>
                    <p className="text-slate-600">{cluster.deskripsi}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cluster.artikel.map((artikel, artikelIndex) => (
                    <Link
                      key={artikelIndex}
                      href={artikel.slug}
                      className="bg-white p-5 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition flex items-center gap-2">
                        {artikel.judul}
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">{artikel.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            FAQ Asuransi Kendaraan
          </h2>

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
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Konsultasi Asuransi Kendaraan?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Rio Mardiansyah siap membantu memilihkan perlindungan terbaik untuk kendaraan Anda.
            Konsultasi gratis, premi transparan, klaim terbantu.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20kendaraan"
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
