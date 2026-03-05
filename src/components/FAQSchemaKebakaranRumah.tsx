'use client'

export default function FAQSchemaKebakaranRumah() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu asuransi kebakaran rumah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asuransi kebakaran rumah adalah produk asuransi yang memberikan perlindungan finansial terhadap rumah tinggal dari risiko kebakaran, ledakan, sambaran petir, dan risiko lainnya sesuai polis. Dengan asuransi ini, kerugian akibat kebakaran dapat diganti oleh perusahaan asuransi."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja yang ditanggung asuransi kebakaran rumah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pertanggungan standar meliputi kerusakan akibat kebakaran, ledakan, sambaran petir, kejatuhan pesawat, dan asap. Dapat ditambahkan perluasan jaminan seperti banjir, gempa bumi, kerusuhan, tanah longsor, dan angin topan sesuai kebutuhan."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah isi rumah juga diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, asuransi kebakaran rumah dapat mencakup bangunan, isi rumah (furniture, elektronik, perabot), atau keduanya. Nilai pertanggungan disesuaikan dengan nilai bangunan dan nilai isi rumah yang diasuransikan."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa premi asuransi kebakaran rumah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premi asuransi kebakaran rumah biasanya berkisar 0.1% - 0.3% dari nilai pertanggungan per tahun. Besaran premi dipengaruhi lokasi rumah, bahan bangunan, jenis pertanggungan, dan perluasan jaminan yang dipilih."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara klaim asuransi kebakaran rumah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses klaim: 1) Segera hubungi asuransi atau broker, 2) Dokumentasikan kerusakan dengan foto dan video, 3) Siapkan dokumen (polis, KTP, bukti kepemilikan), 4) Surveor akan menilai kerusakan, 5) Klaim diproses sesuai nilai pertanggungan."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah rumah sewa bisa diasuransikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, rumah sewa juga dapat diasuransikan. Penyewa dapat mengasuransikan isi rumahnya, sementara pemilik rumah dapat mengasuransikan bangunannya. Masing-masing pihak dapat memiliki polis terpisah sesuai kepentingannya."
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
