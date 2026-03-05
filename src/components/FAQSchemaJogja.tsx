interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

const baseUrl = 'https://www.duniaasuransi.com'

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  // Always include homepage as first item
  const allItems = [
    { name: 'Beranda', url: baseUrl },
    ...items.map(item => ({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

// Predefined breadcrumb configurations for common pages
export const breadcrumbConfigs = {
  // Marine Insurance Products
  asuransiKargo: [
    { name: 'Marine Insurance', url: '/marine-insurance' },
    { name: 'Asuransi Kargo', url: '/asuransi-kargo' }
  ],
  hullMachinery: [
    { name: 'Marine Insurance', url: '/marine-insurance' },
    { name: 'Hull & Machinery Insurance', url: '/hull-machinery-insurance' }
  ],
  freightInsurance: [
    { name: 'Marine Insurance', url: '/marine-insurance' },
    { name: 'Freight Insurance', url: '/freight-insurance' }
  ],
  protectionIndemnity: [
    { name: 'Marine Insurance', url: '/marine-insurance' },
    { name: 'Protection & Indemnity', url: '/protection-indemnity' }
  ],
  marineInsurance: [
    { name: 'Marine Insurance', url: '/marine-insurance' }
  ],
  asuransiKargoBatam: [
    { name: 'Marine Insurance', url: '/marine-insurance' },
    { name: 'Asuransi Kargo', url: '/asuransi-kargo' },
    { name: 'Asuransi Kargo Batam', url: '/asuransi-kargo-batam' }
  ],

  // Liability Products
  asuransiLiability: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' }
  ],
  publicLiability: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' },
    { name: 'Public Liability', url: '/asuransi-public-liability' }
  ],
  productLiability: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' },
    { name: 'Product Liability', url: '/asuransi-product-liability' }
  ],
  professionalIndemnity: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' },
    { name: 'Professional Indemnity', url: '/asuransi-professional-indemnity' }
  ],
  liabilityLimbahB3: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' },
    { name: 'Liability Limbah B3', url: '/asuransi-liability-limbah-b3' }
  ],
  directorsOfficersLiability: [
    { name: 'Asuransi Liability', url: '/asuransi-liability' },
    { name: 'Directors & Officers Liability', url: '/directors-officers-liability' }
  ],

  // Engineering Products
  asuransiEngineering: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' }
  ],
  contractorAllRisk: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' },
    { name: 'Contractor All Risks', url: '/asuransi-car-indonesia' }
  ],
  erectionAllRisk: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' },
    { name: 'Erection All Risks', url: '/asuransi-erection-all-risks' }
  ],
  machineryBreakdown: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' },
    { name: 'Machinery Breakdown', url: '/asuransi-machinery-breakdown' }
  ],
  machineryLossOfProfit: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' },
    { name: 'Machinery Loss of Profit', url: '/machinery-loss-of-profit' }
  ],
  asuransiEAR: [
    { name: 'Asuransi Engineering', url: '/asuransi-engineering' },
    { name: 'Erection All Risks', url: '/asuransi-ear' }
  ],

  // Surety Bond
  suretyBond: [
    { name: 'Surety Bond', url: '/surety-bond' }
  ],
  jaminanPenawaran: [
    { name: 'Surety Bond', url: '/surety-bond' },
    { name: 'Jaminan Penawaran', url: '/jaminan-penawaran' }
  ],
  jaminanPelaksanaan: [
    { name: 'Surety Bond', url: '/surety-bond' },
    { name: 'Jaminan Pelaksanaan', url: '/jaminan-pelaksanaan' }
  ],
  jaminanUangMuka: [
    { name: 'Surety Bond', url: '/surety-bond' },
    { name: 'Jaminan Uang Muka', url: '/jaminan-uang-muka' }
  ],
  jaminanPemeliharaan: [
    { name: 'Surety Bond', url: '/surety-bond' },
    { name: 'Jaminan Pemeliharaan', url: '/jaminan-pemeliharaan' }
  ],

  // Property Insurance
  propertyAllRisk: [
    { name: 'Property Insurance', url: '/property-all-risk' }
  ],
  industrialAllRisk: [
    { name: 'Property Insurance', url: '/property-all-risk' },
    { name: 'Industrial All Risk', url: '/industrial-all-risk' }
  ],
  businessInterruption: [
    { name: 'Property Insurance', url: '/property-all-risk' },
    { name: 'Business Interruption', url: '/business-interruption' }
  ],

  // Vehicle Insurance
  asuransiMobilBatam: [
    { name: 'Asuransi Kendaraan', url: '/asuransi-mobil-batam' }
  ],
  asuransiMobilJogja: [
    { name: 'Asuransi Kendaraan', url: '/asuransi-mobil-jogja' }
  ]
}
