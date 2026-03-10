const baseUrl = "https://www.duniaasuransi.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dunia Asuransi",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+628131556592",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": ["Indonesian"]
  },
  "sameAs": []
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Dunia Asuransi",
  "image": `${baseUrl}/logo.png`,
  "url": baseUrl,
  "telephone": "+628131556592",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Batam",
    "addressRegion": "Kepulauan Riau",
    "addressCountry": "ID"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dunia Asuransi",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rio Mardiansyah",
  "jobTitle": "Insurance Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Dunia Asuransi"
  },
  "url": baseUrl
};

// CATATAN:
// Saya menghapus 'serviceSchema' di sini karena sudah ada di page.tsx (dengan detail yang lebih lengkap).
// Jadi ini menghindari duplikat.

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Layanan Konsultasi Dunia Asuransi",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6"
  },
  "provider": {
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "url": baseUrl
  }
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
}
