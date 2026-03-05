'use client'

export default function FAQSchemaExcavator() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu asuransi excavator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi excavator adalah perlindungan asuransi yang memberikan jaminan terhadap kerusakan atau kehilangan alat berat excavator akibat kecelakaan maupun risiko operasional lainnya. Perlindungan ini mencakup berbagai risiko yang mungkin terjadi selama excavator digunakan dalam proyek konstruksi, pertambangan, atau pembangunan infrastruktur."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah excavator bekas bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, excavator bekas masih dapat diasuransikan selama kondisi alat masih layak operasional dan memenuhi persyaratan dari perusahaan asuransi. Biasanya pihak asuransi akan melakukan survei kondisi alat terlebih dahulu sebelum menentukan pertanggungan dan premi."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja risiko yang biasanya ditanggung asuransi excavator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risiko yang biasanya ditanggung meliputi kecelakaan operasional, kebakaran, benturan, terguling, pencurian, serta beberapa risiko lain yang tercantum dalam polis asuransi alat berat. Perlindungan dapat disesuaikan dengan kebutuhan proyek dan kondisi operasional."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana proses klaim asuransi excavator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim asuransi excavator: 1) Segera laporkan kejadian ke pihak asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung seperti bukti kepemilikan dan sertifikat alat, 4) Tunggu surveor untuk penilaian kerusakan, 5) Perbaikan dilakukan sesuai kesepakatan polis."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi excavator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi asuransi excavator bervariasi tergantung nilai alat, usia alat, jenis proyek, lokasi operasional, dan riwayat klaim. Untuk mendapatkan kalkulasi premi yang akurat, Anda dapat berkonsultasi langsung dengan Rio Mardiansyah untuk penawaran yang sesuai dengan kondisi alat Anda."
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
