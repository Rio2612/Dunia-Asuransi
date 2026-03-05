'use client'

export default function FAQSchemaKendaraan() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu asuransi kendaraan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi kendaraan adalah perlindungan finansial yang diberikan kepada kendaraan bermotor terhadap risiko kerusakan, kecelakaan, maupun kehilangan. Perlindungan ini mencakup berbagai jenis kendaraan mulai dari mobil pribadi, motor, alat berat, hingga kendaraan operasional perusahaan."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja jenis kendaraan yang bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Berbagai jenis kendaraan dapat diasuransikan meliputi: mobil pribadi dan operasional, motor, truk dan pickup, alat berat seperti excavator, bulldozer, wheel loader, crane untuk proyek konstruksi, serta kendaraan khusus lainnya yang digunakan untuk kegiatan bisnis."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah alat berat seperti excavator dan crane bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, alat berat seperti excavator, bulldozer, wheel loader, dan crane dapat diasuransikan. Perlindungan untuk alat berat biasanya mencakup kerusakan akibat operasi, kecelakaan kerja, dan risiko proyek lainnya. Premi dihitung berdasarkan nilai alat, jenis penggunaan, dan lokasi proyek."
        }
      },
      {
        "@type": "Question",
        "name": "Apa perbedaan All Risk dan TLO pada asuransi mobil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Risk memberikan perlindungan menyeluruh untuk kerusakan sebagian maupun total, termasuk kecil seperti tergores. TLO (Total Loss Only) hanya menanggung kerusakan di atas 75% nilai kendaraan atau kehilangan. All Risk premi lebih tinggi tapi perlindungan lebih lengkap, TLO lebih ekonomis untuk mobil berusia 5 tahun ke atas."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara klaim asuransi kendaraan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim asuransi kendaraan: 1) Hubungi broker atau asuransi maksimal 5x24 jam setelah kejadian, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung (STNK, KTP, SIM), 4) Tunggu surveor untuk penilaian, 5) Kendaraan dibawa ke bengkel rekanan, 6) Perbaikan diproses dan ambil kendaraan setelah bayar risiko sendiri."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi kendaraan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi asuransi kendaraan bervariasi tergantung jenis kendaraan, nilai pertanggungan, zona wilayah, dan jenis pertanggungan. Untuk mobil, premi All Risk berkisar 1.5% - 3% dari nilai kendaraan per tahun. Untuk alat berat, premi dihitung berdasarkan risiko proyek dan nilai alat. Hubungi Rio Mardiansyah untuk kalkulasi premi akurat."
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
