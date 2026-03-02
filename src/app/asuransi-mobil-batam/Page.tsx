import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam Terbaik 2026 | Premi & Simulasi Gratis",
  description:
    "Cari asuransi mobil Batam? Dapatkan premi terbaik, proses cepat, dan konsultasi gratis melalui mitra agen resmi terdaftar. Simulasi premi sekarang.",
  alternates: {
    canonical: "https://domainanda.com/asuransi-mobil/batam",
  },
  openGraph: {
    title: "Asuransi Mobil Batam – Premi Terbaik & Klaim Mudah",
    description:
      "Konsultasi gratis asuransi mobil di Batam. All Risk & TLO. Proses cepat dan polis digital.",
    url: "https://domainanda.com/asuransi-mobil/batam",
    siteName: "Dunia Asuransi",
    locale: "id_ID",
    type: "website",
  },
};

export default function AsuransiMobilBatam() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa premi asuransi mobil di Batam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premi tergantung harga kendaraan, tahun pembuatan, dan jenis perlindungan. Rata-rata All Risk mulai 2-3% dari harga mobil per tahun.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah mobil bekas bisa diasuransikan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, mobil bekas tetap bisa diasuransikan selama memenuhi ketentuan usia kendaraan dari perusahaan asuransi.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses polis terbit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biasanya 1-3 hari kerja setelah survey kendaraan dan pembayaran premi dilakukan.",
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Konsultan Asuransi Mobil Batam",
    areaServed: "Batam",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batam",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
    telephone: "+628xxxxxxxxxx",
    url: "https://domainanda.com/asuransi-mobil/batam",
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Asuransi Mobil Batam – Premi Terbaik & Klaim Mudah
        </h1>

        <p className="mb-6">
          Lindungi kendaraan Anda di Batam dengan perlindungan All Risk atau
          TLO. Konsultasi gratis dan pengurusan polis melalui mitra agen resmi
          terdaftar.
        </p>

        <a
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold mb-8"
        >
          Cek Premi Sekarang via WhatsApp
        </a>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Kenapa Asuransi Mobil Penting di Batam?
          </h2>
          <p>
            Batam merupakan kota industri dengan mobilitas tinggi. Risiko
            kecelakaan, kerusakan, hingga kehilangan kendaraan cukup besar.
            Dengan asuransi mobil yang tepat, Anda tidak perlu khawatir terhadap
            biaya perbaikan yang mahal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Jenis Asuransi Mobil yang Tersedia
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>All Risk (Comprehensive)</strong> – Menanggung kerusakan
              ringan hingga berat.
            </li>
            <li>
              <strong>Total Loss Only (TLO)</strong> – Menanggung kehilangan
              atau kerusakan total di atas 75%.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Estimasi Premi Asuransi Mobil Batam
          </h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Harga Mobil</th>
                <th className="border p-2">All Risk</th>
                <th className="border p-2">TLO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">150 juta</td>
                <td className="border p-2">± 3-4 juta</td>
                <td className="border p-2">± 1 juta</td>
              </tr>
              <tr>
                <td className="border p-2">250 juta</td>
                <td className="border p-2">± 5-6 juta</td>
                <td className="border p-2">± 1,5 juta</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2">
            *Premi tergantung tahun kendaraan dan profil risiko.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Proses Pengajuan</h2>
          <ol className="list-decimal pl-6">
            <li>Kirim data kendaraan via WhatsApp</li>
            <li>Dapatkan penawaran premi</li>
            <li>Survey kendaraan</li>
            <li>Polis terbit</li>
          </ol>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Konsultasi Gratis Sekarang
          </h2>
          <p className="mb-4">
            Jangan tunggu sampai risiko terjadi. Lindungi mobil Anda sekarang.
          </p>
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Hubungi via WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
