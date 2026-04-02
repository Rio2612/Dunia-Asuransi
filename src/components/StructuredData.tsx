'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "url": "https://www.duniaasuransi.com",
    "logo": "https://www.duniaasuransi.com/logo.png",
    "description": "Dunia Asuransi - Broker asuransi terpercaya untuk asuransi kendaraan, alat berat, dan properti di Indonesia.",
    "telephone": "+628131556592",
    "email": "info@duniaasuransi.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Indonesia"
    },
    "sameAs": [
      "https://www.facebook.com/duniaasuransi",
      "https://www.instagram.com/duniaasuransi"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dunia Asuransi",
    "url": "https://www.duniaasuransi.com",
    "publisher": {
      "@type": "Organization",
      "name": "Dunia Asuransi"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
