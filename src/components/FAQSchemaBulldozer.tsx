'use client'

export default function FAQSchemaBulldozer() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah bulldozer bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya. Bulldozer termasuk alat berat yang dapat diasuransikan melalui produk asuransi heavy equipment. Perlindungan mencakup berbagai risiko kerusakan maupun kecelakaan operasional yang dapat terjadi selama bulldozer digunakan dalam proyek konstruksi, pertambangan, atau pembangunan infrastruktur."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja risiko yang biasanya dijamin asuransi bulldozer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perlindungan biasanya mencakup kerusakan akibat kecelakaan operasional, kebakaran, pencurian, terguling, benturan, serta risiko lain yang terjadi selama operasional proyek. Pertanggungan dapat disesuaikan dengan kebutuhan dan kondisi proyek."
        }
      },
      {
        "@type": "Question",
        "name": "Siapa yang membutuhkan asuransi bulldozer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi bulldozer biasanya dibutuhkan oleh kontraktor, perusahaan konstruksi, perusahaan pertambangan, pemilik alat berat yang menyewakan unitnya, serta perusahaan yang memiliki armada alat berat untuk operasional bisnis."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara klaim asuransi bulldozer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim asuransi bulldozer: 1) Laporkan kejadian ke asuransi maksimal 5x24 jam, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen pendukung, 4) Tunggu surveor untuk penilaian, 5) Perbaikan atau penggantian diproses sesuai polis."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi bulldozer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi asuransi bulldozer bervariasi tergantung nilai alat, usia bulldozer, jenis proyek, lokasi operasional, dan riwayat klaim. Untuk kalkulasi premi yang akurat, konsultasikan langsung dengan Rio Mardiansyah untuk penawaran sesuai kondisi alat Anda."
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
