'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, RefreshCw, MessageCircle, Ship } from 'lucide-react'

const whatsappNumber = '628131556592'

export default function KalkulatorKargo() {
  const [hasil, setHasil] = useState<string | null>(null)
  const [pesanWA, setPesanWA] = useState("")
  const [formData, setFormData] = useState({
    jenis: '',
    icc: '',
    barang: '',
    freight: ''
  })

  function hitung(e: React.FormEvent) {
    e.preventDefault()

    const { jenis, icc, barang, freight } = formData
    const nilaiBarang = parseFloat(barang) || 0
    const nilaiFreight = parseFloat(freight) || 0

    if (!jenis || !icc || nilaiBarang === 0) {
      alert('Mohon lengkapi semua data!')
      return
    }

    // Nilai pertanggungan = barang + freight + 10% margin
    const nilaiPertanggungan = nilaiBarang + nilaiFreight + (nilaiBarang * 0.1)

    // Rate berdasarkan jenis pengiriman dan ICC
    let rate = 0

    // Rate untuk Domestik
    if (jenis === 'domestik') {
      if (icc === 'A') rate = 0.25 // 0.25%
      else if (icc === 'B') rate = 0.15 // 0.15%
      else rate = 0.10 // 0.10% untuk ICC C
    }
    // Rate untuk Ekspor Impor
    else if (jenis === 'ekspor-impor') {
      if (icc === 'A') rate = 0.35 // 0.35%
      else if (icc === 'B') rate = 0.25 // 0.25%
      else rate = 0.15 // 0.15% untuk ICC C
    }

    let premi = (nilaiPertanggungan * rate) / 100

    // Minimum premi
    premi = Math.max(premi, 100000)

    const totalFormat = premi.toLocaleString('id-ID')
    setHasil(totalFormat)

    // Buat pesan WhatsApp
    const pesan = `
Halo Pak Rio,

Saya ingin konsultasi Asuransi Kargo:

Jenis Pengiriman: ${jenis === 'domestik' ? 'Domestik' : 'Ekspor Impor'}
ICC: ${icc}
Nilai Barang: Rp ${nilaiBarang.toLocaleString('id-ID')}
Freight: Rp ${nilaiFreight.toLocaleString('id-ID')}

Estimasi Premi: Rp ${totalFormat}

Mohon info lebih lanjut.
`

    setPesanWA(encodeURIComponent(pesan))
  }

  function reset() {
    setFormData({
      jenis: '',
      icc: '',
      barang: '',
      freight: ''
    })
    setHasil(null)
    setPesanWA('')
  }

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, '')
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
          <Ship className="w-5 h-5 text-cyan-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">Kalkulator Premi Kargo</h3>
      </div>

      <form onSubmit={hitung} className="space-y-4">
        {/* Jenis Pengiriman */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Jenis Pengiriman</Label>
          <Select value={formData.jenis} onValueChange={(value) => setFormData({...formData, jenis: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih jenis pengiriman" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="domestik">Domestik (Dalam Negeri)</SelectItem>
              <SelectItem value="ekspor-impor">Ekspor Impor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Klausula ICC */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Klausula ICC</Label>
          <Select value={formData.icc} onValueChange={(value) => setFormData({...formData, icc: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih klausula ICC" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">ICC A (All Risk) - Perlindungan Terluas</SelectItem>
              <SelectItem value="B">ICC B - Perlindungan Menengah</SelectItem>
              <SelectItem value="C">ICC C - Perlindungan Dasar</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-slate-500">
            {formData.icc === 'A' && 'ICC A: Menanggung semua risiko kerusakan kecuali yang dikecualikan.'}
            {formData.icc === 'B' && 'ICC B: Menanggung risiko tertentu seperti kebakaran, karam, dll.'}
            {formData.icc === 'C' && 'ICC C: Hanya menanggung risiko besar seperti karam, tabrakan, kehilangan total.'}
          </p>
        </div>

        {/* Nilai Barang */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Nilai Barang (Rp)</Label>
          <Input
            type="text"
            placeholder="Contoh: 100.000.000"
            value={formData.barang ? formatCurrency(formData.barang) : ''}
            onChange={(e) => setFormData({...formData, barang: e.target.value.replace(/\D/g, '')})}
          />
        </div>

        {/* Freight */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Freight / Biaya Angkut (Rp)</Label>
          <Input
            type="text"
            placeholder="Contoh: 5.000.000"
            value={formData.freight ? formatCurrency(formData.freight) : ''}
            onChange={(e) => setFormData({...formData, freight: e.target.value.replace(/\D/g, '')})}
          />
          <p className="text-xs text-slate-500">Biaya pengiriman barang</p>
        </div>

        {/* Info Rate */}
        <div className="bg-cyan-50 p-3 rounded-lg text-xs text-cyan-800">
          <p><strong>Rate PremI:</strong></p>
          <p>Domestik: ICC A 0.25% | ICC B 0.15% | ICC C 0.10%</p>
          <p>Ekspor Impor: ICC A 0.35% | ICC B 0.25% | ICC C 0.15%</p>
          <p className="mt-1">Margin 10% ditambahkan pada nilai pertanggungan</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button type="submit" className="flex-1 bg-cyan-600 hover:bg-cyan-700">
            <Calculator className="w-4 h-4 mr-2" />
            Hitung Premi
          </Button>
          {hasil && (
            <Button type="button" variant="outline" onClick={reset}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          )}
        </div>
      </form>

      {/* Hasil */}
      {hasil && (
        <div className="mt-6 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-sm text-green-600 mb-1">Estimasi Premi</p>
            <p className="text-2xl font-bold text-green-700">Rp {hasil}</p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${pesanWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4 inline mr-2" />
            Kirim ke WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}
