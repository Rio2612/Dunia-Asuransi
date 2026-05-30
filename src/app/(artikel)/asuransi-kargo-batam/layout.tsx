import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Asuransi Kargo Batam | Marine Cargo Domestik & Ekspor Impor',
  description: 'Asuransi Kargo Batam untuk pengiriman domestik dan ekspor impor. Lindungi barang Anda dengan ICC A, B, atau C. Simulasi premi tersedia.',
  keywords: ['asuransi kargo batam', 'marine cargo batam', 'asuransi pengiriman barang', 'asuransi ekspor impor', 'asuransi domestik'],
  openGraph: {
    title: 'Asuransi Kargo Batam | Marine Cargo Domestik & Ekspor Impor',
    description: 'Asuransi Kargo Batam untuk pengiriman domestik dan ekspor impor. Lindungi barang dengan ICC A, B, atau C.',
    type: 'article',
  },
}

export default function KargoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
