'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaCrane from '@/components/FAQSchemaCrane'

export default function AsuransiCranePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const risikoCrane = [
    { icon: '⚠️', judul: 'Kecelakaan Pengangkatan', desc: 'Kegagalan sistem angkat, jatuhnya beban, atau kesalahan rigging' },
    { icon: '🔄', judul: 'Crane Terguling', desc: 'Ketidakstabilan akibat kondisi tanah atau beban berlebih' },
    { icon: '🔧', judul: 'Kerusakan Mekanis', desc: 'Kerusakan pada mesin, hidrolik, kabel, atau komponen utama' },
    { icon: '🔥', judul: 'Kebakaran', desc: 'Kebakaran mesin atau sistem elektrikal crane' },
    { icon: '🌩️', judul: 'Bencana Alam', desc: 'Kerusakan akibat angin kencang, petir, atau kondisi cuaca ekstrem' },
  ]

  const jenisCrane = [
    { 
      nama: 'Truck Crane', 
      desc: 'Crane yang dipasang pada sasis truk, mudah berpindah lokasi dan cocok untuk proyek jangka pendek',
      icon: '🚛'
    },
    { 
      nama: 'Mobile Crane', 
      desc: 'Crane beroda yang dapat bergerak mandiri, fleksibel untuk berbagai jenis proyek',
      icon: '🚜'
    },
    { 
      nama: 'Crawler Crane', 
      desc: 'Crane dengan sistem roda rantai, stabil untuk medan berat dan proyek jangka panjang',
      icon: '🏗️'
    },
    { 
      nama: 'Tower Crane', 
      desc: 'Crane tetap yang dipasang di lokasi konstruksi, ideal untuk pembangunan gedung tinggi',
      icon: '🏢'
    },
  ]

  const alatBeratLain = [
    { nama: 'Excavator', slug: '/asuransi-excavator' },
    { nama: 'Bulldozer', slug: '/asuransi-bulldozer' },
    { nama: 'Wheel Loader', slug: '/asuransi-wheel-loader' },
    { nama: 'Motor Grader', slug: '/asuransi-motor-grader' },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa itu asuransi crane?',
      jawaban: 'Asuransi crane adalah perlindungan asuransi khusus untuk alat berat pengangkat (crane) yang memberikan jaminan terhadap kerusakan atau kehilangan akibat kecelakaan, kerusakan mekanis, bencana alam, maupun risiko operasional lainnya selama crane digunakan dalam proyek.'
    },
    {
      pertanyaan: 'Jenis crane apa saja yang bisa diasuransikan?',
      jawaban: 'Berbagai jenis crane dapat diasuransikan meliputi truck crane, mobile crane, crawler crane, tower crane, floating crane, overhead crane, dan jenis crane lainnya yang digunakan untuk proyek konstruksi, pelabuhan, atau industri.'
    },
    {
      pertanyaan: 'Apa saja risiko yang ditanggung asuransi crane?',
      jawaban: 'Risiko yang ditanggung meliputi kecelakaan pengangkatan, crane terguling, kerusakan mekanis, kebakaran, bencana alam (angin, petir, banjir), pencurian, dan risiko operasional lainnya sesuai dengan polis pertanggungan.'
    },
    {
      pertanyaan: 'Siapa yang membutuhkan asuransi crane?',
      jawaban: 'Asuransi crane dibutuhkan oleh perusahaan konstruksi, kontraktor, perusahaan penyewaan alat berat, pelabuhan, industri manufaktur, dan pemilik crane yang ingin melindungi aset bernilai tinggi dari risiko operasional.'
    },
    {
      pertanyaan: 'Bagaimana cara klaim asuransi crane?',
      jawaban: 'Proses klaim: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung (sertifikat crane, bukti kepemilikan), 4) Surveor akan melakukan penilaian, 5) Klaim diproses sesuai polis.'
    },
    {
      pertanyaan: 'Berapa premi asuransi crane?',
      jawaban: 'Premi asuransi crane bervariasi tergantung nilai crane, jenis crane, kapasitas angkat, lokasi proyek, jenis pekerjaan, dan riwayat klaim. Konsultasikan dengan Rio Mardiansyah untuk mendapatkan penawaran premi yang sesuai dengan kondisi crane Anda.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaCrane />

      {/* HERO - Warna Slate untuk Cluster Crane */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-slate-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/asuransi-kendaraan" className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-slate-200 hover:bg-white/20 transition">
              Asuransi Motor Vehicle
            </Link>
            <span className="text-slate-300">›</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white">
              Asuransi Crane
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Crane: Perlindungan Penting untuk Alat Angkat Berat
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl">
            Asuransi crane memberikan perlindungan terhadap risiko kecelakaan, kerusakan mekanis, dan bencana alam pada alat berat pengangkat. Konsultasi bersama Rio Mardiansyah.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20crane"
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
              Crane merupakan alat berat yang digunakan untuk mengangkat dan memindahkan
              material berat dalam proyek konstruksi, pelabuhan, hingga industri
              manufaktur. Karena nilai alat ini sangat tinggi dan memiliki risiko
              operasional besar, banyak perusahaan memilih menggunakan asuransi crane
              untuk melindungi investasi mereka.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Dengan asuransi alat berat, kerugian akibat kecelakaan, kerusakan,
              atau bencana alam dapat diminimalkan sehingga operasional proyek
              tetap berjalan tanpa gangguan besar.
            </p>
            <p className="text-lg leading-relaxed">
              Asuransi crane merupakan bagian dari{' '}
              <Link href="/asuransi-kendaraan" className="text-slate-600 hover:text-slate-800 font-medium underline">
                asuransi motor vehicle
              </Link>{' '}
              yang mencakup berbagai jenis kendaraan dan alat berat untuk kebutuhan industri.
            </p>
          </div>
        </div>
      </section>

      {/* RISIKO */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Risiko yang Sering Terjadi pada Crane
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Operasional crane memiliki tingkat risiko tinggi yang dapat menyebabkan kerugian besar
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risikoCrane.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JENIS CRANE */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Jenis Crane yang Bisa Diasuransikan
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Berbagai jenis crane dapat mendapat perlindungan sesuai kebutuhan proyek
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {jenisCrane.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.nama}</h3>
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
            Alat Berat Lain yang Bisa Diasuransikan
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Selain crane, berbagai alat berat lainnya juga dapat memperoleh perlindungan asuransi
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {alatBeratLain.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition font-medium"
              >
                {item.nama}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PREMI */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-700 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Mengetahui Premi Asuransi Crane Anda?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Hubungi Rio Mardiansyah untuk mendapatkan simulasi premi dan penawaran terbaik dari perusahaan asuransi terpercaya.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20tanya%20premi%20asuransi%20crane"
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
            FAQ Asuransi Crane
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
