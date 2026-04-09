import { MetadataRoute } from 'next'

const baseUrl = 'https://duniaasuransi.com'

// Daftar semua halaman statis (Sudah dilengkapi berdasarkan folder repositori)
const staticPages = [
  '', // homepage
  '/asuransi-bulldozer',
  '/asuransi-car-indonesia',
  '/asuransi-crane',
  '/asuransi-ear',
  '/asuransi-engineering',
  '/asuransi-erection-all-risks',
  '/asuransi-excavator',
  '/asuransi-kargo',
  '/asuransi-kargo-batam',
  '/asuransi-kebakaran',
  '/asuransi-kendaraan',
  '/asuransi-liability',
  '/asuransi-liability-limbah-b3',
  '/asuransi-machinery-breakdown',
  '/asuransi-mobil-batam',
  '/asuransi-motor-grader',
  '/asuransi-motor-vehicle',
  '/asuransi-product-liability',
  '/asuransi-professional-indemnity',
  '/asuransi-public-liability',
  '/asuransi-truk',
  '/asuransi-wheel-loader',
  '/business-interruption',
  '/directors-officers-liability',
  '/freight-insurance',
  '/hull-machinery-insurance',
  '/industrial-all-risk',
  '/jaminan-pelaksanaan',
  '/jaminan-pemeliharaan',
  '/jaminan-penawaran',
  '/jaminan-uang-muka',
  '/machinery-loss-of-profit',
  '/marine-insurance',
  '/property-all-risk',
  '/protection-indemnity',
  '/surety-bond',
]

// Prioritas berdasarkan jenis halaman
function getPriority(path: string): number {
  if (path === '') return 1.0 // Homepage
  if (path.includes('asuransi-kargo')) return 0.9 // Produk utama
  if (path.includes('asuransi-mobil')) return 0.9 // Produk utama
  if (path.includes('marine')) return 0.8
  if (path.includes('property')) return 0.8
  if (path.includes('engineering')) return 0.8
  if (path.includes('liability')) return 0.8
  if (path.includes('surety') || path.includes('jaminan')) return 0.8
  return 0.7 // Halaman lainnya (termasuk alat berat & asuransi lainnya)
}

// Frekuensi update berdasarkan jenis halaman
function getChangeFrequency(path: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (path === '') return 'weekly' // Homepage
  return 'monthly' // Halaman produk
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }))

  return sitemapEntries
}
