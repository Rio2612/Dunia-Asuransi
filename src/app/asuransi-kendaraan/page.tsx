'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQSchemaKendaraan from '@/components/FAQSchemaKendaraan'

export default function MotorVehiclePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const jenisKendaraan = [
    {
      nomor: '1',
      judul: 'Asuransi Mobil',
      deskripsi: 'Mobil merupakan kendaraan yang paling umum diasuransikan. Perlindungan dapat mencakup kerusakan sebagian, kerusakan total, maupun kehilangan akibat pencurian.',
      link: '/asuransi-mobil-batam',
      linkText: 'Asuransi Mobil Batam'
    },
    {
      nomor: '2',
      judul: 'Asuransi Excavator',
      deskripsi: 'Excavator merupakan salah satu alat berat dengan nilai investasi yang tinggi dan sering digunakan dalam proyek konstruksi maupun pertambangan. Kerusakan pada excavator dapat menyebabkan kerugian besar serta menghambat jalannya proyek.',
      link: '/asuransi-excavator',
      linkText: 'Pelajari Asuransi Excavator'
    },
    {
      nomor: '3',
      judul: 'Asuransi Crane',
      deskripsi: 'Crane merupakan alat berat penting dalam proyek konstruksi dan pengangkatan material. Kerusakan atau kecelakaan operasional dapat menimbulkan kerugian finansial yang signifikan.',
      link: '/asuransi-crane',
      linkText: 'Informasi Asuransi Crane'
    },
  ]

  const faqData = [
    {
      pertanyaan: 'Apa yang dimaksud dengan asuransi motor vehicle?',
      jawaban: 'Asuransi motor vehicle adalah produk asuransi yang memberikan perlindungan terhadap kendaraan bermotor dari risiko kerusakan, kecelakaan, maupun kehilangan. Perlindungan ini mencakup berbagai jenis kendaraan mulai dari mobil pribadi hingga alat berat bernilai tinggi.'
    },
    {
      pertanyaan: 'Kendaraan apa saja yang bisa diasuransikan?',
      jawaban: 'Kendaraan yang dapat diasuransikan antara lain mobil pribadi, kendaraan niaga, excavator, crane, bulldozer, wheel loader, truk, pickup, serta berbagai alat berat yang digunakan dalam proyek konstruksi dan industri.'
    },
    {
      pertanyaan: 'Apakah alat berat bisa diasuransikan?',
      jawaban: 'Ya. Banyak perusahaan asuransi menyediakan perlindungan khusus untuk alat berat karena nilai asetnya yang tinggi dan risiko operasional yang besar. Alat berat seperti excavator, crane, bulldozer, dan wheel loader dapat diasuransikan dengan pertanggungan sesuai kebutuhan proyek.'
    },
  ]

  return (
    <main className="bg-white text-slate-800">
      <FAQSchemaKendaraan />

      {/* HERO */}
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
            Asuransi Motor Vehicle: Perlindungan Kendaraan dari Risiko Kerusakan dan Kehilangan
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl">
            Asuransi motor vehicle melindungi berbagai jenis kendaraan seperti mobil, excavator, dan crane dari risiko kerusakan maupun kehilangan. Konsultasi bersama Rio Mardiansyah.
          </p>
          <a
            href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20motor%20vehicle"
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
              <strong>Asuransi motor vehicle</strong> adalah produk asuransi yang memberikan
              perlindungan terhadap berbagai jenis kendaraan bermotor dari risiko kerusakan,
              kecelakaan, maupun kehilangan. Perlindungan ini tidak hanya berlaku untuk mobil
              pribadi, tetapi juga kendaraan operasional perusahaan serta alat berat yang
              digunakan dalam berbagai proyek konstruksi.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Dengan memiliki asuransi kendaraan yang tepat, pemilik kendaraan dapat
              mengurangi potensi kerugian finansial akibat kejadian tidak terduga seperti
              kecelakaan, kebakaran, pencurian, maupun kerusakan selama operasional.
            </p>
            <p className="text-lg leading-relaxed">
              Dalam praktiknya, perlindungan asuransi motor vehicle mencakup berbagai jenis
              kendaraan mulai dari mobil pribadi hingga alat berat bernilai tinggi yang
              digunakan dalam industri.
            </p>
          </div>
        </div>
      </section>

      {/* JENIS KENDARAAN */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Jenis Kendaraan yang Bisa Diasuransikan
          </h2>

          <div className="space-y-8">
            {jenisKendaraan.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.nomor}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.judul}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.deskripsi}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {item.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA PENTING */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Asuransi Kendaraan Penting?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🛡️', text: 'Melindungi aset kendaraan bernilai tinggi' },
              { icon: '💰', text: 'Mengurangi risiko kerugian finansial akibat kecelakaan' },
              { icon: '🔒', text: 'Memberikan perlindungan terhadap kehilangan kendaraan' },
              { icon: '⚡', text: 'Mendukung kelancaran operasional bisnis' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl">
                <div className="text-3xl">{item.icon}</div>
                <p className="text-slate-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONSULTASI */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Konsultasi Asuransi Kendaraan
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Jika Anda membutuhkan informasi mengenai perlindungan kendaraan seperti
              mobil, excavator, maupun crane, Anda dapat berkonsultasi langsung dengan
              <strong> Rio Mardiansyah </strong> untuk mendapatkan penjelasan mengenai
              pilihan perlindungan yang tersedia.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Konsultasi dapat membantu Anda memahami manfaat asuransi serta menentukan
              jenis perlindungan yang sesuai dengan kebutuhan kendaraan maupun operasional
              bisnis.
            </p>
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20motor%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            FAQ Asuransi Motor Vehicle
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
