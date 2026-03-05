'use client'

export default function FAQSchemaMotorGrader() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu asuransi motor grader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi motor grader adalah perlindungan asuransi khusus untuk alat berat motor grader yang digunakan dalam proyek pembangunan jalan, pertambangan, dan infrastruktur. Perlindungan ini mencakup kerusakan akibat kecelakaan, bencana alam, maupun risiko operasional lainnya."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja risiko yang ditanggung asuransi motor grader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risiko yang ditanggung meliputi kecelakaan operasional, terbalik atau terguling, kerusakan mekanis, kebakaran, bencana alam, pencurian, dan risiko lain yang tercantum dalam polis pertanggungan."
        }
      },
      {
        "@type": "Question",
        "name": "Siapa yang membutuhkan asuransi motor grader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi motor grader dibutuhkan oleh kontraktor jalan, perusahaan pertambangan, perusahaan konstruksi infrastruktur, dan pemilik alat berat yang menyewakan motor grader untuk proyek."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana proses klaim asuransi motor grader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung, 4) Surveor melakukan penilaian, 5) Klaim diproses sesuai polis."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi motor grader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi bervariasi tergantung nilai alat, usia motor grader, jenis proyek, lokasi operasional, dan riwayat klaim. Konsultasikan dengan Rio Mardiansyah untuk mendapatkan penawaran premi yang sesuai."
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
