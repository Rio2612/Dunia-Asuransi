const baseUrl = 'https://duniaasuransi.com'

// Organization Schema - untuk brand recognition
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dunia Asuransi",
  "alternateName": "Dunia Asuransi - Rio Mardiansyah",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "description": "Broker asuransi profesional yang menyediakan berbagai produk asuransi termasuk asuransi kendaraan, asuransi kebakaran, asuransi kargo, asuransi kecelakaan, asuransi liability, surety bond, dan asuransi engineering.",
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Rio Mardiansyah",
    "jobTitle": "Insurance Broker",
    "telephone": "+628131556592",
    "url": `${baseUrl}/#about`
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+628131556592",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID"
    }
  ],
  "sameAs": [
    "https://wa.me/628131556592"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID",
    "addressRegion": "Kepulauan Riau"
  }
}

// LocalBusiness Schema - untuk local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Dunia Asuransi - Rio Mardiansyah",
  "image": `${baseUrl}/logo.png`,
  "url": baseUrl,
  "telephone": "+628131556592",
  "email": "rio@duniaasuransi.com",
  "description": "Broker asuransi profesional dengan pengalaman lebih dari 10 tahun melayani lebih dari 500 klien. Menyediakan asuransi kendaraan, kebakaran, kargo, kecelakaan, liability, surety bond, dan engineering.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Batam",
    "addressLocality": "Batam",
    "addressRegion": "Kepulauan Riau",
    "postalCode": "29400",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "1.0456",
    "longitude": "104.0305"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Batam"
    },
    {
      "@type": "State",
      "name": "Kepulauan Riau"
    },
    {
      "@type": "Country",
      "name": "Indonesia"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produk Asuransi",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Marine Insurance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marine Cargo Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hull & Machinery Insurance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Freight Insurance" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Property Insurance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property All Risk" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial All Risk" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Interruption" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Engineering Insurance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contractor All Risk" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Erection All Risk" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machinery Breakdown" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Liability Insurance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Public Liability" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Liability" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Indemnity" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Surety Bond",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jaminan Penawaran" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jaminan Pelaksanaan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jaminan Uang Muka" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Vehicle Insurance",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Mobil Batam" } }
        ]
      }
    ]
  }
}

// WebSite Schema dengan SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dunia Asuransi",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "url": baseUrl
  }
}

// Person Schema untuk Rio Mardiansyah
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rio Mardiansyah",
  "jobTitle": "Insurance Broker",
  "description": "Broker asuransi profesional dengan pengalaman lebih dari 10 tahun. Spesialis dalam asuransi marine, property, engineering, liability, dan surety bond.",
  "telephone": "+628131556592",
  "url": `${baseUrl}/#about`,
  "worksFor": {
    "@type": "Organization",
    "name": "Dunia Asuransi"
  },
  "knowsAbout": [
    "Marine Insurance",
    "Property Insurance", 
    "Engineering Insurance",
    "Liability Insurance",
    "Surety Bond",
    "Insurance Broker"
  ]
}

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
    </>
  )
}
