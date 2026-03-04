'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Calculator, 
  RefreshCw, 
  MessageCircle, 
  CheckCircle, 
  Car,
  DollarSign,
  MapPin,
  X
} from 'lucide-react'

interface KalkulatorMobilBatamPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function KalkulatorMobilBatamPopup({ isOpen, onClose }: KalkulatorMobilBatamPopupProps) {
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

  // Batam = Zona 1
  const zonaBatam = '1'

  function formatCurrency(value: string | number) {
    const number = typeof value === 'string'
      ? parseFloat(value)
      : value

    if (!number) return ''

    return new Intl.NumberFormat('id-ID').format(number)
  }

  // ==============================
  // FUNCTION HITUNG PREMI
  // ==============================
  function hitung(e: FormEvent) {
    e.preventDefault()

    const harga = parseFloat(formData.harga)
    const tahun = parseInt(formData.tahun)
    const jenisKendaraan = formData.jenis
    const jaminan = formData.jaminan

    if (!harga || !tahun || !jenisKendaraan || !jaminan) {
      alert('Mohon lengkapi semua data!')
      return
    }

    const tahunSekarang = new Date().getFullYear()
    const usia = tahunSekarang - tahun

    if (jaminan === 'allrisk' && usia > 10) {
      alert('Kendaraan di atas 10 tahun tidak dapat All Risk')
      return
    }

    // ==============================
    // RATE ZONA 1 (BATAM)
    // ==============================
    const rateAllRiskZona1: Record<string, number[]> = {
      mobil: [3.82, 2.67, 2.18, 1.20, 1.05],
      motor: [3.50, 2.80, 2.20, 1.30, 1.00]
    }

    const rateTLOZona1: Record<string, number[]> = {
      mobil: [0.47, 0.63, 0.41, 0.25, 0.20],
      motor: [0.55, 0.45, 0.35, 0.25, 0.20]
    }

    function getIndexByHarga(h: number): number {
      if (h <= 125_000_000) return 0
      if (h <= 200_000_000) return 1
      if (h <= 400_000_000) return 2
      if (h <= 800_000_000) return 3
      return 4
    }

    const indexRate = getIndexByHarga(harga)
    const jenisKey = jenisKendaraan === 'mobil' ? 'mobil' : 'motor'

    let rate =
      jaminan === 'allrisk'
        ? rateAllRiskZona1[jenisKey][indexRate]
        : rateTLOZona1[jenisKey][indexRate]

    const premi = (harga * rate) / 100

    setHasil({
      premi: Math.round(premi),
      harga,
      tahun,
      zona: zonaBatam,
      jenis: jenisKendaraan,
      jaminan,
      rate
    })
  }

  // ==============================
  // RESET
  // ==============================
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

    const nomorWA = "628131556592" // Nomor WhatsApp

    const pesan = `
Halo, saya ingin konsultasi Asuransi Mobil Batam

Harga Kendaraan : Rp ${formatCurrency(hasil.harga)}
Tahun           : ${hasil.tahun}
Jenis           : ${hasil.jenis}
Jaminan         : ${hasil.jaminan.toUpperCase()}
Rate            : ${hasil.rate}%
Estimasi Premi  : Rp ${formatCurrency(hasil.premi)}

Mohon penjelasannya 🙏
`

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
  }

  // ==============================
  // CLOSE ON BACKDROP CLICK
  // ==============================
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 md:p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Kalkulator Premi Mobil Batam</h2>
                <p className="text-blue-100 text-sm">Estimasi premi untuk zona Batam (Zona 3)</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
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
    </div>
  )
}
