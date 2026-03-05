'use client'

export default function FAQSchemaCrane() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu asuransi crane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi crane adalah perlindungan asuransi khusus untuk alat berat pengangkat (crane) yang memberikan jaminan terhadap kerusakan atau kehilangan akibat kecelakaan, kerusakan mekanis, bencana alam, maupun risiko operasional lainnya selama crane digunakan dalam proyek."
        }
      },
      {
        "@type": "Question",
        "name": "Jenis crane apa saja yang bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Berbagai jenis crane dapat diasuransikan meliputi truck crane, mobile crane, crawler crane, tower crane, floating crane, overhead crane, dan jenis crane lainnya yang digunakan untuk proyek konstruksi, pelabuhan, atau industri."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja risiko yang ditanggung asuransi crane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risiko yang ditanggung meliputi kecelakaan pengangkatan, crane terguling, kerusakan mekanis, kebakaran, bencana alam (angin, petir, banjir), pencurian, dan risiko operasional lainnya sesuai dengan polis pertanggungan."
        }
      },
      {
        "@type": "Question",
        "name": "Siapa yang membutuhkan asuransi crane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi crane dibutuhkan oleh perusahaan konstruksi, kontraktor, perusahaan penyewaan alat berat, pelabuhan, industri manufaktur, dan pemilik crane yang ingin melindungi aset bernilai tinggi dari risiko operasional."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara klaim asuransi crane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung (sertifikat crane, bukti kepemilikan), 4) Surveor akan melakukan penilaian, 5) Klaim diproses sesuai polis."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi crane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi asuransi crane bervariasi tergantung nilai crane, jenis crane, kapasitas angkat, lokasi proyek, jenis pekerjaan, dan riwayat klaim. Konsultasikan dengan Rio Mardiansyah untuk mendapatkan penawaran premi yang sesuai dengan kondisi crane Anda."
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
