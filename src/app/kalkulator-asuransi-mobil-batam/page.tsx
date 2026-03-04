'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Calculator, 
  RefreshCw, 
  MessageCircle, 
  CheckCircle, 
  Info, 
  X, 
  Car,
  Shield,
  Clock,
  Award,
  Phone,
  ArrowRight,
  MapPin,
  DollarSign
} from 'lucide-react'

const whatsappNumber = '628131556592'

const faqData = [
  {
    question: 'Berapa premi asuransi mobil di Batam?',
    answer: 'Premi asuransi mobil di Batam bervariasi tergantung harga kendaraan, tahun pembuatan, dan jenis perlindungan. Untuk All Risk, rata-rata premi berkisar 2-3% dari harga mobil per tahun. Batam termasuk Zona 3 yang memiliki premi lebih rendah dibanding Jakarta. Gunakan kalkulator di atas untuk estimasi cepat.'
  },
  {
    question: 'Apa keuntungan asuransi mobil di Batam dibanding kota lain?',
    answer: 'Batam masuk kategori Zona 1 yang memiliki rate premi lebih rendah dibanding Jakarta (Zona 1) dan Jawa (Zona 2). Artinya, Anda bisa mendapatkan perlindungan yang sama dengan premi lebih terjangkau. Selain itu, proses klaim tetap mudah dengan jaringan bengkel luas.'
  },
  {
    question: 'Apakah mobil bekas bisa diasuransikan di Batam?',
    answer: 'Ya, mobil bekas tetap bisa diasuransikan selama memenuhi ketentuan usia kendaraan. Umumnya mobil dengan usia hingga 10-12 tahun masih bisa mendapatkan perlindungan All Risk. Untuk mobil lebih tua, tersedia opsi TLO (Total Loss Only) dengan premi lebih terjangkau.'
  },
  {
    question: 'Berapa lama proses klaim asuransi mobil?',
    answer: 'Proses klaim biasanya memakan waktu 3-14 hari kerja tergantung kompleksitas. Untuk kerusakan ringan, klaim bisa selesai dalam 3-5 hari. Kami akan mendampingi Anda dari awal pelaporan hingga klaim disetujui untuk memastikan proses berjalan lancar.'
  },
  {
    question: 'Apa perbedaan All Risk dan TLO?',
    answer: 'All Risk menanggung segala jenis kerusakan dari yang ringan (baret, penyok) hingga berat (kehilangan, kerusakan total). TLO hanya menanggung kehilangan atau kerusakan total di atas 75%. All Risk cocok untuk mobil baru, TLO lebih cocok untuk mobil tua dengan budget terbatas.'
  },
  {
    question: 'Dokumen apa saja yang diperlukan untuk mengajukan asuransi mobil?',
    answer: 'Dokumen yang diperlukan meliputi: KTP pemilik, STNK asli, BPKB (untuk pengecekan), foto kondisi kendaraan (4 sisi), dan nomor rangka/mesin. Untuk proses yang lebih cepat, siapkan juga informasi mengenai penggunaan kendaraan (pribadi/komersial).'
  }
]

const benefits = [
  {
    icon: Shield,
    title: 'Premi Kompetitif',
    description: 'Batam Zona 1 = Sesuai SE OJK 2017'
  },
  {
    icon: Clock,
    title: 'Proses Cepat',
    description: 'Polis digital dalam 1-3 hari kerja'
  },
  {
    icon: Award,
    title: 'Klaim Mudah',
    description: 'Memiliki Bengkel Rekanan Terpercaya'
  }
]

export default function KalkulatorAsuransiMobilBatam() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasil, setHasil] = useState<{
    premi: number
    harga: number
    tahun: number
    zona: string
    jenis: string
    jaminan: string
    rate: number
  } | null>(null)
  
  const [formData, setFormData] = useState({
    harga: '',
    tahun: '',
    jenis: '',
    jaminan: ''
  })

  // Batam = Zona 1 Sumatera dan Kepulauan di sekitarnya )
  const zonaBatam = '1'

  function hitung(e: React.FormEvent) {
    e.preventDefault()
    
    const harga = parseFloat(formData.harga)
    const tahun = parseInt(formData.tahun)
    const jenisKendaraan = formData.jenis
    let jaminan = formData.jaminan

    if (!harga || !tahun || !jenisKendaraan || !jaminan) {
      alert('Mohon lengkapi semua data!')
      return
    }

    // Rate All Risk Zona 1 (Batam)
    const rateAllRiskZona3 = {
      mobil: [3.82, 2.67, 2.18, 1.20, 1.05],
      motor: [3.50, 2.80, 2.20, 1.30, 1.00]
    }

    // Rate TLO Zona 3 (Batam)
    const rateTLOZona3 = {
      mobil: [0.47, 0.63, 0.41, 0.25, 0.20],
      motor: [0.55, 0.45, 0.35, 0.25, 0.20]
    }

    // Menentukan index berdasarkan tahun kendaraan
    const tahunSekarang = new Date().getFullYear()
    const selisihTahun = tahunSekarang - tahun
    let indexRate = 4
    
    if (selisihTahun <= 1) indexRate = 0
    else if (selisihTahun <= 3) indexRate = 1
    else if (selisihTahun <= 5) indexRate = 2
    else if (selisihTahun <= 10) indexRate = 3
    else indexRate = 4

    // Menentukan rate
    let rate = 0
    const jenisKey = jenisKendaraan === 'mobil' ? 'mobil' : 'motor'

    if (jaminan === 'allrisk') {
      rate = rateAllRiskZona3[jenisKey][indexRate]
    } else {
      rate = rateTLOZona3[jenisKey][indexRate]
    }

    

    // Hitung premi
    let premi = (harga * rate) / 100

    // Minimum premi
    if (jaminan === 'allrisk') {
      premi = Math.max(premi, 250000)
    } else {
      premi = Math.max(premi, 100000)
    }

    setHasil({
      premi: Math.round(premi),
      harga,
      tahun,
      zona: zonaBatam,
      jenis: jenisKendaraan,
      jaminan,
      rate: Math.round(rate * 100) / 100
    })
  }

  function reset() {
    setFormData({
      harga: '',
      tahun: '',
      jenis: '',
      jaminan: ''
    })
    setHasil(null)
  }

  function kirimWA() {
    if (!hasil) return
    
    const jaminanText = hasil.jaminan === 'allrisk' ? 'All Risk (Comprehensive)' : 'TLO (Total Loss Only)'
    
    const pesan = `Halo Rio, saya tertarik untuk mengasuransikan kendaraan saya di Batam dengan detail:

*Tipe:* ${hasil.jenis === 'mobil' ? 'Mobil' : 'Motor'}
*Tahun:* ${hasil.tahun}
*Harga Pertanggungan:* Rp ${hasil.harga.toLocaleString('id-ID')}
*Lokasi:* Batam (Zona 3)
*Jenis Jaminan:* ${jaminanText}
*Rate:* ${hasil.rate}%

*Estimasi Premi:* Rp ${hasil.premi.toLocaleString('id-ID')}

Mohon informasi lebih lanjut. Terima kasih!`

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`, '_blank')
  }

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, '')
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Kalkulator Asuransi Mobil Batam - Hitung Premi Online",
            "description": "Hitung estimasi premi asuransi mobil di Batam secara online. Gratis, cepat, dan akurat. All Risk & TLO untuk mobil baru dan bekas.",
            "author": {
              "@type": "Person",
              "name": "Rio Mardiansyah"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dunia Asuransi",
              "telephone": "0813-1556-592"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2025-01-15"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Dunia Asuransi - Asuransi Mobil Batam",
            "areaServed": "Batam",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Batam",
              "addressRegion": "Kepulauan Riau",
              "addressCountry": "ID"
            },
            "telephone": "+628131556592",
            "priceRange": "$$"
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <span>/</span>
              <a href="/asuransi-mobil-batam" className="hover:underline">Asuransi Mobil Batam</a>
              <span>/</span>
              <span className="text-blue-200">Kalkulator Premi</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Asuransi Mobil Batam - Zona 3</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Kalkulator Asuransi Mobil Batam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-6">
              Hitung estimasi premi asuransi mobil Anda secara online. Gratis, cepat, dan akurat.
              Batam masuk Zona 3 dengan premi lebih terjangkau!
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <benefit.icon className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator & Article */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Calculator Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Kalkulator Premi Mobil Batam</h2>
                      <p className="text-blue-100 text-sm">Estimasi premi untuk zona Batam (Zona 3)</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {!hasil ? (
                    <form onSubmit={hitung} className="space-y-4">
                      {/* Jenis Kendaraan */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Car className="w-4 h-4" />
                          Jenis Kendaraan
                        </Label>
                        <Select value={formData.jenis} onValueChange={(value) => setFormData({...formData, jenis: value})}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Pilih jenis kendaraan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mobil">Mobil</SelectItem>
                            <SelectItem value="motor">Sepeda Motor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Tahun Kendaraan */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Tahun Kendaraan</Label>
                        <Input
                          type="number"
                          placeholder="Contoh: 2022"
                          value={formData.tahun}
                          onChange={(e) => setFormData({...formData, tahun: e.target.value})}
                          min="1990"
                          max={new Date().getFullYear() + 1}
                          className="h-12"
                        />
                      </div>

                      {/* Harga Pertanggungan */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Harga Pertanggungan (Rp)
                        </Label>
                        <Input
                          type="text"
                          placeholder="Contoh: 300.000.000"
                          value={formData.harga ? formatCurrency(formData.harga) : ''}
                          onChange={(e) => setFormData({...formData, harga: e.target.value.replace(/\D/g, '')})}
                          className="h-12"
                        />
                      </div>

                      {/* Jenis Jaminan */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Jenis Jaminan</Label>
                        <Select value={formData.jaminan} onValueChange={(value) => setFormData({...formData, jaminan: value})}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Pilih jenis jaminan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="allrisk">All Risk (Comprehensive)</SelectItem>
                            <SelectItem value="tlo">TLO (Total Loss Only)</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800">
                          {formData.jaminan === 'allrisk' && (
                            <p><strong>All Risk:</strong> Menanggung kerusakan sebagian maupun total, baret, benturan, kehilangan, dan bencana alam.</p>
                          )}
                          {formData.jaminan === 'tlo' && (
                            <p><strong>TLO:</strong> Hanya menanggung kerusakan total (&gt;75%) atau kehilangan. Premi lebih terjangkau untuk mobil bekas.</p>
                          )}
                          {!formData.jaminan && (
                            <p>Pilih jenis jaminan untuk melihat penjelasan detail.</p>
                          )}
                        </div>
                      </div>

                      {/* Zona Info */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-800">Lokasi: Batam (Zona 3)</span>
                        </div>
                        <p className="text-sm text-green-700">
                          Batam termasuk Zona 3 (Luar Jawa & Bali) dengan rate premi lebih rendah dibanding Jakarta (Zona 1). 
                          Artinya, Anda mendapat perlindungan sama dengan harga lebih terjangkau!
                        </p>
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg font-semibold">
                        <Calculator className="w-5 h-5 mr-2" />
                        Hitung Premi Sekarang
                      </Button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {/* Result Card */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                        <div className="text-center mb-4">
                          <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-3" />
                          <p className="text-sm text-green-700 font-medium">Estimasi Premi Tahunan Anda</p>
                          <p className="text-4xl font-bold text-green-700 mt-2">
                            Rp {hasil.premi.toLocaleString('id-ID')}
                          </p>
                          <p className="text-sm text-green-600 mt-1">/ tahun</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm border-t border-green-200 pt-4 mt-4">
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-gray-500 text-xs">Harga Pertanggungan</p>
                            <p className="font-semibold text-gray-800">Rp {hasil.harga.toLocaleString('id-ID')}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-gray-500 text-xs">Rate Premi</p>
                            <p className="font-semibold text-gray-800">{hasil.rate}%</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-gray-500 text-xs">Jenis</p>
                            <p className="font-semibold text-gray-800 capitalize">{hasil.jenis}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-gray-500 text-xs">Tahun</p>
                            <p className="font-semibold text-gray-800">{hasil.tahun}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg col-span-2">
                            <p className="text-gray-500 text-xs">Jaminan</p>
                            <p className="font-semibold text-gray-800">
                              {hasil.jaminan === 'allrisk' ? 'All Risk (Comprehensive)' : 'TLO (Total Loss Only)'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Disclaimer */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                        <p className="font-medium mb-1">Catatan:</p>
                        <p>Hasil perhitungan ini adalah estimasi. Premi akhir dapat berbeda berdasarkan survei kondisi kendaraan, riwayat klaim, dan kebijakan perusahaan asuransi.</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          className="flex-1 h-12"
                          onClick={reset}
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Hitung Ulang
                        </Button>
                        <Button
                          className="flex-1 h-12 bg-green-500 hover:bg-green-600"
                          onClick={kirimWA}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Konsultasi via WhatsApp
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Why Batam Section */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </span>
                  Keuntungan Asuransi Mobil di Batam
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Batam sebagai kota industri dan perdagangan bebas memiliki karakteristik unik dalam industri asuransi kendaraan. 
                  Sebagai bagian dari Zona 3 dalam klasifikasi asuransi Indonesia, Batam menawarkan keuntungan premi yang lebih kompetitif 
                  dibandingkan kota-kota besar di Jawa. Hal ini karena tingkat risiko kecelakaan dan pencurian di Batam relatif lebih rendah 
                  dibandingkan Jakarta dan kota-kota metropolitan lainnya.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan infrastruktur jalan yang baik dan sistem keamanan yang terorganisir, perusahaan asuransi memberikan 
                  rate premi yang lebih terjangkau bagi pemilik kendaraan di Batam. Ini adalah kesempatan baik bagi Anda untuk 
                  mendapatkan perlindungan maksimal dengan biaya yang lebih efisien.
                </p>
              </section>

              {/* Rate Comparison */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </span>
                  Perbandingan Rate Premi per Zona
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Berikut adalah perbandingan rate premi All Risk untuk mobil baru di berbagai zona. 
                  Terlihat bahwa Batam (Zona 3) memiliki rate paling kompetitif.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="border p-4 text-left">Zona</th>
                        <th className="border p-4 text-left">Wilayah</th>
                        <th className="border p-4 text-left">Rate All Risk</th>
                        <th className="border p-4 text-left">Rate TLO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-4 font-medium">Zona 1</td>
                        <td className="border p-4">Jakarta, Jawa Barat</td>
                        <td className="border p-4 text-blue-600 font-semibold">3.82%</td>
                        <td className="border p-4 text-amber-600 font-semibold">0.47%</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border p-4 font-medium">Zona 2</td>
                        <td className="border p-4">Jawa Tengah, Jawa Timur, Bali</td>
                        <td className="border p-4 text-blue-600 font-semibold">3.26%</td>
                        <td className="border p-4 text-amber-600 font-semibold">0.44%</td>
                      </tr>
                      <tr className="bg-green-50 border-2 border-green-300">
                        <td className="border p-4 font-bold text-green-700">Zona 3 ★</td>
                        <td className="border p-4 text-green-700 font-medium">Batam, Luar Jawa & Bali</td>
                        <td className="border p-4 text-green-600 font-bold">2.53%</td>
                        <td className="border p-4 text-green-600 font-bold">0.38%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Rate untuk mobil baru (0-1 tahun). Rate dapat berubah sewaktu-waktu.
                </p>
              </section>

              {/* Coverage Types */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </span>
                  Jenis Perlindungan Asuransi Mobil
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-blue-800">All Risk</h3>
                        <p className="text-sm text-blue-600">Comprehensive Coverage</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Perlindungan menyeluruh untuk segala jenis kerusakan.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Kerusakan ringan (baret, penyok)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Kerusakan berat (kecelakaan)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Kehilangan kendaraan
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Bencana alam & huru-hara
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Kerusakan akibat perbuatan jahat
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-blue-800">Cocok untuk: Mobil baru (0-5 tahun)</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-800">TLO</h3>
                        <p className="text-sm text-amber-600">Total Loss Only</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Perlindungan untuk kerusakan total dan kehilangan.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        Kehilangan kendaraan
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        Kerusakan total (&gt;75%)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        Premi lebih terjangkau
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        Tetap dapat perluasan jaminan
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-amber-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-amber-800">Cocok untuk: Mobil bekas (&gt;5 tahun)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Info className="w-5 h-5 text-yellow-600" />
                  </span>
                  Pertanyaan Umum
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <details key={index} className="group bg-gray-50 rounded-lg">
                      <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-gray-800 hover:bg-gray-100 rounded-lg">
                        {faq.question}
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">Butuh Bantuan?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Saya siap membantu Anda mendapatkan perlindungan terbaik untuk mobil Anda di Batam.
                </p>
                <a 
                  href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition w-full mb-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: 0813-1556-592
                </a>
                <a 
                  href="tel:08131556592" 
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg font-semibold transition w-full border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  Telepon Sekarang
                </a>
                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                  <p className="text-sm font-medium">Rio Mardiansyah</p>
                  <p className="text-xs text-blue-200">10+ Tahun Pengalaman</p>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Lainnya</h3>
                <div className="space-y-3">
                  <a href="/asuransi-mobil-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Mobil Batam</h4>
                    <p className="text-sm text-gray-500">Info lengkap asuransi mobil</p>
                  </a>
                  <a href="/asuransi-kargo-batam" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Asuransi Kargo Batam</h4>
                    <p className="text-sm text-gray-500">Pengiriman barang & logistik</p>
                  </a>
                  <a href="/marine-insurance" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Marine Insurance</h4>
                    <p className="text-sm text-gray-500">Asuransi maritim lengkap</p>
                  </a>
                  <a href="/property-all-risk" className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition group">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Property Insurance</h4>
                    <p className="text-sm text-gray-500">Asuransi properti & bangunan</p>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Mengapa Pilih Kami?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Konsultasi gratis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Proses klaim mudah</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Partner asuransi terpercaya</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Layanan personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
