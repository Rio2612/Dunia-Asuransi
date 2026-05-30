const baseUrl = "https://www.duniaasuransi.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  "name": "Dunia Asuransi",
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/logo.png`
  },
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
  "@id": `${baseUrl}/#localbusiness`,
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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  "name": "Dunia Asuransi",
  "url": baseUrl
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  "name": "Rio Mardiansyah",
  "jobTitle": "Insurance Consultant",
  "worksFor": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Dunia Asuransi"
  },
  "url": baseUrl
};

// serviceSchema dan aggregateRatingSchema digabung jadi satu, pindah aggregateRating ke InsuranceAgency
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/#service`,
  "name": "Layanan Konsultasi Asuransi Indonesia",
  "description": "Konsultasi asuransi profesional untuk kendaraan, kebakaran, kargo, kecelakaan, dan marine oleh Rio Mardiansyah.",
  "url": baseUrl,
  "provider": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Dunia Asuransi",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "serviceType": "Insurance Consulting"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
