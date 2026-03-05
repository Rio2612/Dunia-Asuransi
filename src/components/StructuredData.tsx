'use client'

export default function StructuredData() {
  const baseUrl = 'https://www.duniaasuransi.com'

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.svg`,
    "description": "Layanan konsultan asuransi profesional untuk berbagai kebutuhan perlindungan termasuk asuransi kendaraan, kebakaran, kargo, kecelakaan, liability, surety bond, dan engineering.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+628131556592",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://wa.me/628131556592"
    ]
  }

  // LocalBusiness Schema untuk Insurance Agency
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Dunia Asuransi",
    "image": `${baseUrl}/hero-image.png`,
    "url": baseUrl,
    "telephone": "+628131556592",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dunia Asuransi",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rio Mardiansyah",
    "jobTitle": "Konsultan Asuransi",
    "worksFor": {
      "@type": "Organization",
      "name": "Dunia Asuransi"
    },
    "telephone": "+628131556592",
    "url": baseUrl
  }

  // Review Schema
  const reviews = [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Budi Santoso" },
      "reviewBody": "Pelayanan sangat profesional. Rio membantu proses klaim dengan cepat dan mudah. Sangat direkomendasikan untuk yang mencari asuransi terpercaya."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Siti Rahayu" },
      "reviewBody": "Konsultasi gratis dan sangat membantu. Rio memberikan penjelasan detail tentang produk asuransi yang sesuai kebutuhan saya."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Ahmad Wijaya" },
      "reviewBody": "Proses klaim asuransi mobil sangat lancar. Rio mendampingi dari awal hingga selesai. Terima kasih!"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Dewi Kusuma" },
      "reviewBody": "Sudah 3 tahun berlangganan asuransi melalui Rio. Pelayanan konsisten dan selalu responsif saat dibutuhkan."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Rudi Hermawan" },
      "reviewBody": "Rekomendasi produk asuransi sangat tepat sesuai kebutuhan bisnis saya. Premi kompetitif dengan perlindungan lengkap."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Linda Pratiwi" },
      "reviewBody": "Respons cepat dan informatif. Rio sangat sabar menjawab semua pertanyaan tentang polis asuransi."
    }
  ]

  // AggregateRating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Dunia Asuransi",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews
  }

  // Person with AggregateRating
  const personWithRating = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rio Mardiansyah",
    "jobTitle": "Konsultan Asuransi",
    "telephone": "+628131556592",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personWithRating) }} />
    </>
  )
}
