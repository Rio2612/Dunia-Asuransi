/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan gambar dari semua domain https
      },
    ],
  },
  async redirects() {
    return [
      // REDIRECT SEO LOKAL MEDAN (DARI ANALISIS SITEMAP)
      {
        source: '/asuransi-mobil-batam', destination: '/asuransi-kendaraan-medan', permanent: true,},
      {
        source: '/asuransi-kargo-batam',
        destination: '/asuransi-marine-medan',
        permanent: true,
      },
      {
        source: '/asuransi-kebakaran',
        destination: '/asuransi-properti-medan',
        permanent: true,
      },
          // REDIRECT KENDARAAN
      { source: '/asuransi-mobil-batam', destination: '/asuransi-kendaraan-medan', permanent: true },
      { source: '/asuransi-kendaraan', destination: '/asuransi-kendaraan-medan', permanent: true },
      { source: '/asuransi-truk', destination: '/asuransi-kendaraan-medan', permanent: true },
      { source: '/asuransi-motor-vehicle', destination: '/asuransi-kendaraan-medan', permanent: true },

      // REDIRECT PROPERTI
      { source: '/asuransi-kebakaran', destination: '/asuransi-properti-medan', permanent: true },
      { source: '/property-all-risk', destination: '/asuransi-properti-medan', permanent: true },
      { source: '/industrial-all-risk', destination: '/asuransi-properti-medan', permanent: true },

      // REDIRECT MARINE & KARGO (BELAWAN)
      { source: '/asuransi-kargo', destination: '/asuransi-marine-medan', permanent: true },
      { source: '/asuransi-kargo-batam', destination: '/asuransi-marine-medan', permanent: true },
      { source: '/marine-insurance', destination: '/asuransi-marine-medan', permanent: true },
      { source: '/freight-insurance', destination: '/asuransi-marine-medan', permanent: true },

      // REDIRECT ALAT BERAT
      { source: '/asuransi-excavator', destination: '/asuransi-alat-berat-medan', permanent: true },
      { source: '/asuransi-bulldozer', destination: '/asuransi-alat-berat-medan', permanent: true },
      { source: '/asuransi-crane', destination: '/asuransi-alat-berat-medan', permanent: true },

      // REDIRECT LIABILITY
      { source: '/asuransi-liability', destination: '/asuransi-liability-medan', permanent: true },
      { source: '/asuransi-liability-limbah-b3', destination: '/asuransi-liability-medan/asuransi-limbah-b3-medan', permanent: true },
      { source: '/asuransi-product-liability', destination: '/asuransi-liability-medan/product-liability-medan', permanent: true },
      { source: '/asuransi-public-liability', destination: '/asuransi-liability-medan/public-liability-medan', permanent: true },

      // REDIRECT ENGINEERING
      { source: '/asuransi-engineering', destination: '/asuransi-engineering-medan', permanent: true },
      { source: '/asuransi-car-indonesia', destination: '/asuransi-engineering-medan/contractors-all-risk-medan', permanent: true },
      { source: '/asuransi-ear', destination: '/asuransi-engineering-medan/erection-all-risk-medan', permanent: true },
    ];
    ];
  },
}

module.exports = nextConfig
