'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaMotorGrader from '@/components/FAQSchemaMotorGrader'

export default function AsuransiMotorGraderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const risikoMotorGrader = [
    { icon: '💥', judul: 'Kecelakaan Operasional', desc: 'Benturan atau kecelakaan saat pengoperasian di medan proyek' },
    { icon: '🔄', judul: 'Terbalik di Area Proyek', desc: 'Terguling akibat kondisi tanah tidak stabil atau medan miring' },
    { icon: '🔧', judul: 'Kerusakan Mekanis', desc: 'Kerusakan pada blade, mesin, transmisi, atau sistem hidrolik' },
    { icon: '🔥', judul: 'Kebakaran', desc: 'Kerusakan akibat kebakaran mesin atau komponen lainnya' },
    { icon: '⛈️', judul: 'Bencana Alam', desc: 'Kerusakan akibat banjir, tanah longsor, atau cuaca ekstrem' },
  ]

  const alasanAsuransi = [
    { icon: '💵', judul: 'Nilai Alat Mahal', desc: 'Motor grader memiliki nilai investasi miliaran rupiah yang perlu dilindungi' },
    { icon: '⚠️', judul: 'Risiko Kerja Tinggi', desc: 'Bekerja di medan berat dengan kondisi tanah yang tidak menentu' },
    { icon: '🔧', judul: 'Biaya Perbaikan Besar', desc: 'Suku cadang dan perbaikan alat berat membutuhkan biaya tinggi' },
    { icon: '📈', judul: 'Menghindari Kerugian Proyek', desc: 'Kerusakan alat dapat menghambat progres proyek dan menimbulkan kerugian' },
  ]

  const alatBeratLain = [
    { nama: 'Excavator', slug: '/asuransi-excavator' },
    { nama: 'Bulldozer', slug: '/asuransi-bulldozer' },
    { nama: 'Wheel Loader', slug: '/asuransi-wheel-loader' },
    { nama: 'Crane', slug: '/asuransi-crane' },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa itu asuransi motor grader?',
      jawaban: 'Asuransi motor grader adalah perlindungan asuransi khusus untuk alat berat motor grader yang digunakan dalam proyek pembangunan jalan, pertambangan, dan infrastruktur. Perlindungan ini mencakup kerusakan akibat kecelakaan, bencana alam, maupun risiko operasional lainnya.'
    },
    {
      pertanyaan: 'Apa saja risiko yang ditanggung asuransi motor grader?',
      jawaban: 'Risiko yang ditanggung meliputi kecelakaan operasional, terbalik atau terguling, kerusakan mekanis, kebakaran, bencana alam, pencurian, dan risiko lain yang tercantum dalam polis pertanggungan.'
    },
    {
      pertanyaan: 'Siapa yang membutuhkan asuransi motor grader?',
      jawaban: 'Asuransi motor grader dibutuhkan oleh kontraktor jalan, perusahaan pertambangan, perusahaan konstruksi infrastruktur, dan pemilik alat berat yang menyewakan motor grader untuk proyek.'
    },
    {
      pertanyaan: 'Bagaimana proses klaim asuransi motor grader?',
      jawaban: 'Proses klaim: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung, 4) Surveor melakukan penilaian, 5) Klaim diproses sesuai polis.'
    },
    {
      pertanyaan: 'Berapa premi asuransi motor grader?',
      jawaban: 'Premi bervariasi tergantung nilai alat, usia motor grader, jenis proyek, lokasi operasional, dan riwayat klaim. Konsultasikan dengan Rio Mardiansyah untuk mendapatkan penawaran premi yang sesuai.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaMotorGrader />

      {/* HERO - Warna Orange untuk Cluster Alat Berat */}
      <section className="bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/asuransi-kendaraan" className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-orange-100 hover:bg-white/20 transition">
              Asuransi Motor Vehicle
            </Link>
            <span className="text-orange-200">›</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white">
              Asuransi Motor Grader
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Motor Grader: Perlindungan untuk Proyek Infrastruktur
          </h1>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl">
            Asuransi motor grader memberikan perlindungan terhadap risiko kerusakan dan kecelakaan pada alat berat untuk proyek jalan dan infrastruktur. Konsultasi bersama Rio Mardiansyah.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20motor%20grader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      {/* PENGANTAR */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              Motor grader merupakan alat berat yang berfungsi meratakan permukaan
              tanah pada proyek pembangunan jalan, tambang, maupun konstruksi
              infrastruktur lainnya. Alat ini memiliki blade panjang di bagian tengah
              yang dapat diatur sudut dan kedalaman sesuai kebutuhan pekerjaan.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Karena sering bekerja di medan berat dan proyek berskala besar,
              risiko kerusakan alat sangat tinggi. Oleh karena itu,
              asuransi motor grader menjadi solusi penting untuk
              melindungi alat dan menjaga kelancaran proyek.
            </p>
            <p className="text-lg leading-relaxed">
              Asuransi ini merupakan bagian dari{' '}
              <Link href="/asuransi-kendaraan" className="text-orange-600 hover:text-orange-700 font-medium underline">
                asuransi motor vehicle
              </Link>{' '}
              yang mencakup berbagai jenis alat berat untuk kebutuhan industri.
            </p>
          </div>
        </div>
      </section>

      {/* RISIKO */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Risiko yang Dapat Ditanggung
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Berbagai risiko operasional dapat menyebabkan kerugian besar pada motor grader
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risikoMotorGrader.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA PERLU ASURANSI */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mengapa Motor Grader Perlu Diasuransikan
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Perlindungan asuransi memberikan berbagai keuntungan bagi pemilik alat berat
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {alasanAsuransi.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100 flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALAT BERAT LAIN */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Lihat Juga Asuransi Alat Berat Lain
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Selain motor grader, berbagai alat berat lainnya juga dapat memperoleh perlindungan asuransi
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {alatBeratLain.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-orange-300 hover:text-orange-600 transition font-medium"
              >
                {item.nama}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KONSULTASI */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dapatkan Simulasi Premi Motor Grader
          </h2>
          <p className="text-lg text-slate-700 mb-4">
            Hubungi <strong>Rio Mardiansyah</strong> untuk mendapatkan penawaran terbaik
            dan potongan harga khusus dari perusahaan asuransi terpercaya.
          </p>
          <p className="text-lg text-slate-700 mb-8">
            Konsultasi dapat membantu Anda memahami manfaat perlindungan serta
            menentukan jenis asuransi yang sesuai dengan kebutuhan proyek.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20motor%20grader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            FAQ Asuransi Motor Grader
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

    </main>
  )
}
