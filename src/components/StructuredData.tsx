export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.duniaasuransi.com/#organization",
        name: "Dunia Asuransi",
        url: "https://www.duniaasuransi.com",
        logo: "https://www.duniaasuransi.com/logo.svg",
        description:
          "Layanan konsultasi asuransi profesional oleh Rio Mardiansyah untuk kendaraan, properti, kargo, dan kecelakaan.",
      },

      {
        "@type": "Person",
        "@id": "https://www.duniaasuransi.com/#person",
        name: "Rio Mardiansyah",
        jobTitle: "Konsultan Asuransi",
        worksFor: {
          "@id": "https://www.duniaasuransi.com/#organization",
        },
        url: "https://www.duniaasuransi.com",
      },

      {
        "@type": "Service",
        name: "Konsultasi Asuransi",
        provider: {
          "@id": "https://www.duniaasuransi.com/#organization",
        },
        areaServed: "Indonesia",
        serviceType: [
          "Asuransi Kendaraan",
          "Asuransi Kebakaran",
          "Asuransi Kargo",
          "Asuransi Kecelakaan"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
