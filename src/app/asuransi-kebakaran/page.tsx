'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaKebakaranRumah from '@/components/FAQSchemaKebakaranRumah'

export default function AsuransiKebakaranRumahPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const risikoDijamin = [
    { icon: '🔥', judul: 'Kebakaran', desc: 'Kerusakan atau kehilangan akibat kebakaran pada bangunan dan isi rumah' },
    { icon: '💥', judul: 'Ledakan', desc: 'Kerusakan akibat ledakan gas atau sebab lainnya' },
    { icon: '⚡', judul: 'Sambaran Petir', desc: 'Kerusakan akibat sambaran petir pada bangunan' },
    { icon: '✈️', judul: 'Kejatuhan Pesawat', desc: 'Kerusakan akibat kejatuhan pesawat terbang' },
    { icon: '💨', judul: 'Asap', desc: 'Kerusakan akibat asap dari kebakaran' },
  ]

  const perluasanJaminan = [
    { icon: '🌊', judul: 'Banjir', desc: 'Kerusakan akibat banjir atau genangan air' },
    { icon: '🌍', judul: 'Gempa Bumi', desc: 'Kerusakan akibat gempa bumi dan tsunami' },
    { icon: ' protests', judul: 'Kerusuhan', desc: 'Kerusakan akibat kerusuhan, pemogokan, atau huru-hara' },
    { icon: '⛰️', judul: 'Tanah Longsor', desc: 'Kerusakan akibat tanah longsor' },
    { icon: '🌀', judul: 'Angin Topan', desc: 'Kerusakan akibat angin topan atau badai' },
    { icon: '💧', judul: 'Hurricane', desc: 'Kerusakan akibat badai tropis' },
  ]

  const manfaatAsuransi = [
    { icon: '🏠', judul: 'Perlindungan Aset', desc: 'Rumah sebagai aset berharga mendapat jaminan perlindungan finansial' },
    { icon: '💰', judul: 'Ganti Kerugian', desc: 'Kerugian akibat kebakaran dapat diganti sesuai nilai pertanggungan' },
    { icon: '😌', judul: 'Ketenangan Pikiran', desc: 'Tidak perlu khawatir kehilangan tempat tinggal akibat kebakaran' },
    { icon: '⚡', judul: 'Proses Klaim Mudah', desc: 'Bantuan proses klaim dari broker asuransi hingga selesai' },
  ]

  const asuransiPropertyLain = [
    { nama: 'Property All Risk', slug: '/property-all-risk', desc: 'Perlindungan menyeluruh untuk property' },
    { nama: 'Industrial All Risk', slug: '/industrial-all-risk', desc: 'Asuransi komprehensif untuk industri' },
    { nama: 'Business Interruption', slug: '/business-interruption', desc: 'Pertanggungan kerugian usaha' },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa itu asuransi kebakaran rumah?',
      jawaban: 'Asuransi kebakaran rumah adalah produk asuransi yang memberikan perlindungan finansial terhadap rumah tinggal dari risiko kebakaran, ledakan, sambaran petir, dan risiko lainnya sesuai polis. Dengan asuransi ini, kerugian akibat kebakaran dapat diganti oleh perusahaan asuransi.'
    },
    {
      pertanyaan: 'Apa saja yang ditanggung asuransi kebakaran rumah?',
      jawaban: 'Pertanggungan standar meliputi kerusakan akibat kebakaran, ledakan, sambaran petir, kejatuhan pesawat, dan asap. Dapat ditambahkan perluasan jaminan seperti banjir, gempa bumi, kerusuhan, tanah longsor, dan angin topan sesuai kebutuhan.'
    },
    {
      pertanyaan: 'Apakah isi rumah juga diasuransikan?',
      jawaban: 'Ya, asuransi kebakaran rumah dapat mencakup bangunan, isi rumah (furniture, elektronik, perabot), atau keduanya. Nilai pertanggungan disesuaikan dengan nilai bangunan dan nilai isi rumah yang diasuransikan.'
    },
    {
      pertanyaan: 'Berapa premi asuransi kebakaran rumah?',
      jawaban: 'Premi asuransi kebakaran rumah biasanya berkisar 0.1% - 0.3% dari nilai pertanggungan per tahun. Besaran premi dipengaruhi lokasi rumah, bahan bangunan, jenis pertanggungan, dan perluasan jaminan yang dipilih.'
    },
    {
      pertanyaan: 'Bagaimana cara klaim asuransi kebakaran rumah?',
      jawaban: 'Proses klaim: 1) Segera hubungi asuransi atau broker, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen (polis, KTP, bukti kepemilikan), 4) Surveor akan menilai kerusakan, 5) Klaim diproses sesuai nilai pertanggungan.'
    },
    {
      pertanyaan: 'Apakah rumah sewa bisa diasuransikan?',
      jawaban: 'Ya, rumah sewa juga dapat diasuransikan. Penyewa dapat mengasuransikan isi rumahnya, sementara pemilik rumah dapat mengasuransikan bangunannya. Masing-masing pihak dapat memiliki polis terpisah sesuai kepentingannya.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaKebakaranRumah />

      {/* HERO - Warna Merah untuk Asuransi Kebakaran */}
      <section className="bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-orange-100 mb-6">
            Asuransi Property
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Kebakaran Rumah: Perlindungan Penting untuk Rumah Tinggal
          </h1>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl">
            Lindungi rumah impian Anda dari risiko kebakaran, ledakan, dan bencana lainnya. Asuransi kebakaran rumah memberikan jaminan finansial untuk aset berharga keluarga Anda.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20kebakaran%20rumah"
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
              Rumah merupakan aset berharga bagi setiap keluarga. Namun risiko seperti
              kebakaran, ledakan, hingga bencana alam dapat menyebabkan kerugian
              finansial yang besar. Oleh karena itu banyak pemilik rumah memilih
              menggunakan asuransi kebakaran rumah sebagai perlindungan finansial.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Dengan asuransi ini, kerugian akibat kebakaran maupun risiko tertentu
              dapat ditanggung oleh perusahaan asuransi sesuai dengan polis yang
              berlaku. Hal ini memberikan ketenangan pikiran bagi pemilik rumah
              karena aset berharga mereka terlindungi.
            </p>
          </div>
        </div>
      </section>

      {/* RISIKO DIJAMIN */}
      <section className="py-16 px-6 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Risiko yang Dijamin
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Pertanggungan standar asuransi kebakaran rumah mencakup risiko-risiko berikut
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risikoDijamin.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERLUASAN JAMINAN */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perluasan Jaminan
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Tambahkan perluasan jaminan untuk perlindungan yang lebih lengkap
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perluasanJaminan.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.judul}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
            <p className="text-amber-800 text-sm">
              💡 Perluasan jaminan akan menambah premi, namun memberikan perlindungan lebih komprehensif sesuai kebutuhan lokasi rumah Anda.
            </p>
          </div>
        </div>
      </section>

      {/* MANFAAT */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Manfaat Asuransi Kebakaran Rumah
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Perlindungan asuransi memberikan berbagai keuntungan bagi pemilik rumah
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {manfaatAsuransi.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
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

      {/* ASURANSI PROPERTY LAIN */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Jenis Asuransi Property Lain
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Selain asuransi kebakaran rumah, tersedia berbagai produk asuransi property lainnya
          </p>

          <div className="space-y-4">
            {asuransiPropertyLain.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="block bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-lg hover:border-red-200 transition group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-red-600 transition">{item.nama}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KONSULTASI */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ingin Mengetahui Premi Asuransi Rumah Anda?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Hubungi <strong>Rio Mardiansyah</strong> untuk mendapatkan simulasi premi 
            serta penawaran terbaik dari perusahaan asuransi terpercaya.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20kebakaran%20rumah"
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
            FAQ Asuransi Kebakaran Rumah
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
