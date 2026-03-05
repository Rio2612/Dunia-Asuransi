'use client'

export default function FAQSchemaBengkelBatam() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu bengkel rekanan asuransi di Batam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bengkel rekanan asuransi adalah bengkel yang telah bekerja sama dengan perusahaan asuransi untuk melakukan perbaikan kendaraan yang mengalami kerusakan dan akan diklaim ke asuransi. Di Batam, terdapat berbagai bengkel rekanan resmi dari berbagai merek kendaraan."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah harus menggunakan bengkel rekanan saat klaim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, untuk klaim asuransi mobil disarankan menggunakan bengkel rekanan agar proses klaim lebih lancar. Bengkel rekanan memiliki kerjasama langsung dengan asuransi, sehingga penyelesaian klaim lebih cepat dan suku cadang terjamin original."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama proses perbaikan di bengkel rekanan Batam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Waktu perbaikan bervariasi tergantung tingkat kerusakan. Untuk kerusakan ringan seperti bumper atau pintu, biasanya 3-5 hari kerja. Kerusakan berat bisa memakan waktu 7-14 hari kerja. Bengkel akan memberikan estimasi waktu setelah survey dilakukan."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah ada biaya yang harus dibayar di bengkel rekanan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, Anda perlu membayar risiko sendiri (deductible) sebesar Rp 300.000 untuk mobil konvensional atau Rp 500.000 untuk mobil listrik. Biaya ini dibayarkan saat mengambil kendaraan yang sudah selesai diperbaiki."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana jika bengkel rekanan penuh di Batam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jika bengkel rekanan penuh, Anda bisa memilih bengkel rekanan lain yang tersedia. Hubungi Rio di 0813-1556-592 untuk bantuan mencari bengkel dengan antrian lebih singkat atau jadwal perbaikan lebih cepat."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah bengkel rekanan melayani mobil listrik di Batam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, beberapa bengkel rekanan di Batam sudah memiliki fasilitas dan teknisi tersertifikasi untuk melayani mobil listrik. Pastikan memberitahu jenis kendaraan saat menghubungi bengkel untuk memastikan kesiapan fasilitas."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja dokumen yang dibawa ke bengkel rekanan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dokumen yang perlu dibawa: STNK asli, KTP pemilik kendaraan, surat klaim dari asuransi, foto kerusakan, dan form laporan kecelakaan (jika ada). Bengkel akan membantu proses administrasi selanjutnya."
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
