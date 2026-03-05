'use client'

export default function FAQSchemaJogja() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Berapa premi asuransi mobil di Yogyakarta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yogyakarta termasuk Zona 3 untuk perhitungan premi asuransi kendaraan bermotor. Tarif All Risk berkisar 2.05% - 2.75% dari nilai kendaraan, sedangkan TLO sekitar 0.65% - 0.85%. Premi di Jogja lebih murah dibanding Jakarta atau Batam karena tingkat risiko yang lebih rendah."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja bengkel rekanan asuransi di Jogja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tersedia berbagai bengkel rekanan di Yogyakarta termasuk Auto 2000 (Toyota), Honda Prospect Motor, Nissan Dealer, dan bengkel multi brand seperti Workshop 88 dan Bengkel Mitra Asuransi. Semua bengkel tersebar di berbagai lokasi strategis di Jogja dan sekitarnya."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah perlu perluasan banjir untuk mobil di Jogja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sangat disarankan. Area sekitar Kali Code, Sungai Gajahwong, dan beberapa lokasi di Jogja rentan banjir saat hujan deras. Perluasan banjir menambah premi sekitar 0.1% - 0.2% tapi memberikan perlindungan penting."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana proses klaim asuransi mobil di Jogja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim mudah: 1) Hubungi Rio di 0813-1556-592, 2) Foto kerusakan dan lokasi, 3) Lapor ke pihak asuransi maksimal 5x24 jam, 4) Surveyor akan datang, 5) Kendaraan dibawa ke bengkel rekanan, 6) Perbaikan diproses. Rio akan mendampingi dari awal hingga selesai."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah ada layanan derek 24 jam di Jogja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, tersedia layanan derek 24 jam untuk peserta asuransi. Cukup hubungi nomor darurat di polis atau hubungi Rio untuk bantuan koordinasi. Layanan ini mencakup wilayah Yogyakarta dan sekitarnya termasuk Solo dan Klaten."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa risiko sendiri (deductible) untuk klaim di Jogja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risiko sendiri standar adalah Rp 300.000 per kejadian untuk mobil konvensional. Untuk mobil listrik, risiko sendiri Rp 500.000 per kejadian. Biaya ini dibayar saat mengambil kendaraan dari bengkel."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
