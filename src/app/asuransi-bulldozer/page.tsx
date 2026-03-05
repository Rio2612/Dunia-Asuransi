'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaBulldozer from '@/components/FAQSchemaBulldozer'

export default function AsuransiBulldozerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const risikoBulldozer = [
    { icon: '💥', judul: 'Kecelakaan Operasional', desc: 'Benturan, terguling, atau kecelakaan saat pengoperasian di medan berat' },
    { icon: '🔧', judul: 'Kerusakan Mesin', desc: 'Kerusakan pada komponen utama seperti mesin, transmisi, atau sistem hidrolik' },
    { icon: '🔥', judul: 'Kebakaran', desc: 'Kerusakan akibat kebakaran mesin atau komponen lainnya' },
    { icon: '🏔️', judul: 'Kerusakan Medan', desc: 'Kerusakan akibat kondisi medan proyek yang ekstrem' },
    { icon: '🔓', judul: 'Pencurian', desc: 'Kehilangan unit alat berat di lokasi proyek' },
  ]

  const manfaatAsuransi = [
    { icon: '🛡️', judul: 'Perlindungan Aset', desc: 'Kerugian finansial akibat kerusakan alat berat ditanggung asuransi' },
    { icon: '💰', judul: 'Mengurangi Kerugian', desc: 'Biaya perbaikan atau penggantian unit tidak mengganggu arus kas perusahaan' },
    { icon: '⚡', judul: 'Kelancaran Proyek', desc: 'Proyek dapat berlanjut dengan dukungan klaim yang cepat' },
    { icon: '😊', judul: 'Ketenangan Pikiran', desc: 'Fokus pada operasional tanpa khawatir risiko yang mungkin terjadi' },
  ]

  const alatBeratLain = [
    { nama: 'Excavator', slug: '/asuransi-excavator' },
    { nama: 'Wheel Loader', slug: '/asuransi-wheel-loader' },
    { nama: 'Motor Grader', slug: '/asuransi-motor-grader' },
    { nama: 'Crane', slug: '/asuransi-crane' },
    { nama: 'Dump Truck', slug: '/asuransi-truk' },
  ]

  const faqData = [
    {
      pertanyaan: 'Apakah bulldozer bisa diasuransikan?',
      jawaban: 'Ya. Bulldozer termasuk alat berat yang dapat diasuransikan melalui produk asuransi heavy equipment. Perlindungan mencakup berbagai risiko kerusakan maupun kecelakaan operasional yang dapat terjadi selama bulldozer digunakan dalam proyek konstruksi, pertambangan, atau pembangunan infrastruktur.'
    },
    {
      pertanyaan: 'Apa saja risiko yang biasanya dijamin asuransi bulldozer?',
      jawaban: 'Perlindungan biasanya mencakup kerusakan akibat kecelakaan operasional, kebakaran, pencurian, terguling, benturan, serta risiko lain yang terjadi selama operasional proyek. Pertanggungan dapat disesuaikan dengan kebutuhan dan kondisi proyek.'
    },
    {
      pertanyaan: 'Siapa yang membutuhkan asuransi bulldozer?',
      jawaban: 'Asuransi bulldozer biasanya dibutuhkan oleh kontraktor, perusahaan konstruksi, perusahaan pertambangan, pemilik alat berat yang menyewakan unitnya, serta perusahaan yang memiliki armada alat berat untuk operasional bisnis.'
    },
    {
      pertanyaan: 'Bagaimana cara klaim asuransi bulldozer?',
      jawaban: 'Proses klaim asuransi bulldozer: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung, 4) Tunggu surveor untuk penilaian, 5) Perbaikan atau penggantian diproses sesuai polis.'
    },
    {
      pertanyaan: 'Berapa premi asuransi bulldozer?',
      jawaban: 'Premi asuransi bulldozer bervariasi tergantung nilai alat, usia bulldozer, jenis proyek, lokasi operasional, dan riwayat klaim. Untuk kalkulasi premi yang akurat, konsultasikan langsung dengan Rio Mardiansyah untuk penawaran sesuai kondisi alat Anda.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaBulldozer />

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
              Asuransi Bulldozer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Bulldozer: Perlindungan Alat Berat untuk Proyek Konstruksi
          </h1>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl">
            Asuransi bulldozer memberikan perlindungan terhadap risiko kerusakan, kecelakaan, dan kerugian operasional pada alat berat konstruksi. Konsultasi bersama Rio Mardiansyah.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20bulldozer"
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
              Bulldozer merupakan salah satu alat berat yang banyak digunakan dalam proyek
              konstruksi, pertambangan, maupun pembangunan infrastruktur. Alat ini memiliki
              nilai investasi yang tinggi sehingga perlindungan terhadap risiko kerusakan
              maupun kecelakaan sangat penting bagi pemilik maupun perusahaan kontraktor.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Asuransi bulldozer memberikan perlindungan finansial terhadap berbagai risiko
              yang dapat terjadi selama operasional alat berat, seperti kerusakan akibat
              kecelakaan kerja, kebakaran, maupun kejadian tidak terduga lainnya.
            </p>
            <p className="text-lg leading-relaxed">
              Asuransi ini merupakan bagian dari{' '}
              <Link href="/asuransi-kendaraan" className="text-orange-600 hover:text-orange-700 font-medium underline">
                asuransi motor vehicle
              </Link>{' '}
              yang mencakup berbagai jenis kendaraan dan alat berat untuk kebutuhan industri.
            </p>
          </div>
        </div>
      </section>

      {/* RISIKO */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Risiko yang Dapat Terjadi pada Bulldozer
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Risiko-risiko tersebut dapat menyebabkan kerugian besar jika bulldozer merupakan alat utama dalam proyek
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risikoBulldozer.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANFAAT */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Manfaat Asuransi Bulldozer
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Perlindungan asuransi memberikan berbagai keuntungan bagi pemilik alat berat
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {manfaatAsuransi.map((item, index) => (
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
            Jenis Alat Berat yang Juga Bisa Diasuransikan
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Selain bulldozer, terdapat berbagai jenis alat berat lain yang juga dapat memperoleh perlindungan asuransi
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
            Konsultasi Asuransi Bulldozer
          </h2>
          <p className="text-lg text-slate-700 mb-4">
            Jika Anda memiliki alat berat seperti bulldozer dan ingin mendapatkan
            perlindungan asuransi yang sesuai, Anda dapat berkonsultasi langsung dengan
            <strong> Rio Mardiansyah </strong> untuk mendapatkan penjelasan mengenai
            pilihan perlindungan yang tersedia.
          </p>
          <p className="text-lg text-slate-700 mb-8">
            Konsultasi dapat membantu Anda memahami manfaat perlindungan serta
            menentukan jenis asuransi yang sesuai dengan kebutuhan proyek maupun
            operasional perusahaan.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20bulldozer"
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
            FAQ Asuransi Bulldozer
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
