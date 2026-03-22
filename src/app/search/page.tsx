import { Suspense } from 'react'
import SearchResults from './SearchResults'

export const metadata = {
  title: 'Cari Asuransi | Dunia Asuransi',
  description: 'Cari informasi asuransi kendaraan, alat berat, dan properti di Dunia Asuransi.',
  robots: 'noindex, follow', // Tidak perlu diindeks karena halaman pencarian
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-8">
          Cari Asuransi
        </h1>
        <Suspense fallback={<div className="text-center text-gray-500">Memuat...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  )
}
