'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Data artikel statis untuk pencarian sederhana
const articles = [
  {
    title: 'Asuransi Wheel Loader - Proteksi Alat Berat Anda',
    slug: '/asuransi-kendaraan/wheel-loader',
    category: 'Asuransi Kendaraan',
    description: 'Panduan lengkap asuransi wheel loader: manfaat, premi, dan tips klaim untuk alat berat konstruksi Anda.',
  },
  {
    title: 'Asuransi Excavator - Proteksi Penuh untuk Alat Berat',
    slug: '/asuransi-kendaraan/excavator',
    category: 'Asuransi Kendaraan',
    description: 'Pelajari asuransi excavator: coverage, perhitungan premi, dan proses klaim yang mudah.',
  },
  {
    title: 'Asuransi Bulldozer - Lindungi Investasi Alat Berat Anda',
    slug: '/asuransi-kendaraan/bulldozer',
    category: 'Asuransi Kendaraan',
    description: 'Panduan asuransi bulldozer: perlindungan komprehensif untuk alat berat konstruksi.',
  },
  {
    title: 'Asuransi Crane - Proteksi untuk Alat Angkat Berat',
    slug: '/asuransi-kendaraan/crane',
    category: 'Asuransi Kendaraan',
    description: 'Informasi lengkap asuransi crane: coverage, risiko yang ditanggung, dan cara klaim.',
  },
  {
    title: 'Asuransi Motor Grader - Proteksi Alat Berat Konstruksi',
    slug: '/asuransi-kendaraan/motor-grader',
    category: 'Asuransi Kendaraan',
    description: 'Panduan asuransi motor grader: perlindungan optimal untuk alat berat perata tanah.',
  },
  {
    title: 'Asuransi Kendaraan - Panduan Lengkap Proteksi Kendaraan',
    slug: '/asuransi-kendaraan',
    category: 'Asuransi Kendaraan',
    description: 'Panduan lengkap asuransi kendaraan bermotor dan alat berat: jenis, manfaat, dan tips memilih.',
  },
]

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<typeof articles>([])

  useEffect(() => {
    if (query) {
      const searchTerm = query.toLowerCase()
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm) ||
          article.description.toLowerCase().includes(searchTerm) ||
          article.category.toLowerCase().includes(searchTerm)
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div>
      {/* Search Form */}
      <form className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Ketik kata kunci pencarian..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Cari
          </button>
        </div>
      </form>

      {/* Results */}
      {query ? (
        <div>
          <p className="text-gray-600 mb-4">
            Menampilkan {results.length} hasil untuk "{query}"
          </p>

          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((article, index) => (
                <Link
                  key={index}
                  href={article.slug}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <span className="text-sm text-blue-600 mb-1">{article.category}</span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                  <p className="text-gray-600">{article.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Tidak ada hasil ditemukan.</p>
              <p className="text-gray-400 text-sm">
                Coba gunakan kata kunci lain atau jelajahi kategori kami.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Masukkan kata kunci untuk mencari artikel asuransi.</p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <p className="text-gray-700 mb-3">Butuh bantuan memilih asuransi yang tepat?</p>
        <a
          href="https://wa.me/628131556592?text=Halo%20Rio%2C%20saya%20ingin%20bertanya%20tentang%20asuransi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          💬 Konsultasi Gratis via WhatsApp
        </a>
      </div>
    </div>
  )
}
