'use client'

/**
 * CATATAN ARSITEKTUR:
 * Halaman ini menggunakan 'use client' karena ada interaksi state (kalkulator popup).
 * Metadata SEO (title, description, canonical, OG, LD+JSON) harus ditempatkan di file
 * terpisah: /app/asuransi-mobil-batam/layout.tsx atau metadata.ts
 * Lihat file: asuransi-mobil-batam.metadata.ts (sudah disertakan terpisah)
 */

import { useState } from 'react'
import KalkulatorMobilBatamPopup from '@/components/KalkulatorMobilBatamPopup'

// ─── REUSABLE ────────────────────────────────────────────────────────────────
const WaIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AsuransiMobilBatamPage() {
  const [openKalkulator, setOpenKalkulator] = useState(false)

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* ── Breadcrumb ── */}
      <div className="bg-slate-800 text-white py-3">
        <div className="max-w-6xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <a href="/" className="hover:underline text-slate-300">Beranda</a>
            <span className="text-slate-500">/</span>
            <span className="text-emerald-300 font-medium">Asuransi Mobil Batam</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-blue-200 mb-6 border border-white/20">
            📍 Zona 1 OJK — Batam, Kepulauan Riau
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Asuransi Mobil Batam
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-4 max-w-2xl mx-auto leading-relaxed">
            All Risk & TLO untuk kendaraan pribadi, operasional perusahaan, dan mobil listrik di Batam & Kepulauan Riau.
            Termasuk kendaraan CBU ex-Singapore dan kendaraan berplat hijau FTZ.
          </p>
          <p className="text-sm text-blue-300 mb-8">Tarif resmi OJK Zona 1 · Proses klaim dibantu penuh · Bengkel rekanan se-Batam</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenKalkulator(true)}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-emerald-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Hitung Premi Sekarang
            </button>
            <a
              href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              <WaIcon />
              Konsultasi via WA
            </a>
          </div>
        </div>
      </section>

      {/* ── Keunikan Batam — Konten Lokal Eksklusif ── */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Kenapa Asuransi Mobil di Batam Berbeda?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Batam bukan kota biasa. Statusnya sebagai Kawasan Perdagangan Bebas (FTZ) menciptakan
              ekosistem kendaraan yang unik dan berbeda dengan daerah lain di Indonesia.
            </p>
          </div>

          <div className="space-y-4">
            {/* FTZ & Plat Hijau */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🟢</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Kendaraan Berplat Hijau (FTZ Batam)</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Kendaraan di wilayah FTZ Batam menggunakan plat nomor <strong>berwarna hijau</strong> (latar hijau,
                    tulisan hitam) yang menandakan kendaraan tersebut belum dibayar bea masuk dan hanya boleh beroperasi
                    di dalam kawasan Batam/FTZ. Kendaraan berplat hijau <strong>tetap bisa diasuransikan</strong> dengan
                    polis All Risk atau TLO standar — tidak ada perlakuan khusus dalam polis PSAKBI. Yang perlu
                    dicermati: pastikan nilai pertanggungan mengacu pada harga pasar lokal Batam, bukan harga NJKB
                    nasional yang bisa berbeda.
                  </p>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-green-800">
                    <strong>Catatan Penting:</strong> Kendaraan berplat hijau yang dibawa keluar dari kawasan FTZ
                    tanpa izin dan mengalami kerusakan di luar Batam bisa menjadi masalah dalam proses klaim. Pastikan
                    rute operasional kendaraan sesuai dengan status bea cukai-nya.
                  </div>
                </div>
              </div>
            </div>

            {/* Mobil Ex-Singapore/CBU */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mobil CBU / Ex-Singapore di Batam</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Karena status FTZ, Batam menjadi pintu masuk berbagai kendaraan CBU (<em>Completely Built Up</em>)
                    dan kendaraan bekas yang sebelumnya beroperasi di Singapura. Untuk mengasuransikan kendaraan ini,
                    beberapa hal yang wajib diperhatikan:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {[
                      { title: 'Nilai Pertanggungan', desc: 'Harus berdasarkan harga pasar aktual kendaraan tersebut di Batam, bukan mengacu pada NJKB standar Gaikindo yang mungkin tidak relevan untuk kendaraan impor CBU.' },
                      { title: 'Dokumen Kendaraan', desc: 'Penanggung akan meminta STNK/BPKB atau dokumen kepemilikan yang sah. Untuk kendaraan dalam proses legalisasi, konsultasikan terlebih dahulu.' },
                      { title: 'Sparepart & Bengkel Rekanan', desc: 'Pastikan bengkel rekanan penanggung memiliki kemampuan menangani kendaraan yang mungkin menggunakan standar Jepang atau Eropa (steering kanan/kiri, sistem kelistrikan).' },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-2 items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span><strong className="text-slate-800">{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Risiko Spesifik Batam */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Profil Risiko Unik Kendaraan di Batam</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {[
                      { risk: 'Akses Penyeberangan Batam–Bintan', desc: 'Kendaraan yang dibawa via kapal feri ke Bintan/pulau-pulau Kepri perlu diperhatikan cakupan wilayahnya dalam polis.' },
                      { risk: 'Kawasan Industri Padat', desc: 'Lalu lintas kendaraan berat di sekitar Batamindo, Muka Kuning, dan pelabuhan Batu Ampar meningkatkan risiko benturan minor.' },
                      { risk: 'Intensitas Hujan Tropis', desc: 'Batam memiliki curah hujan tinggi sepanjang tahun — risiko banjir di area tertentu (Batuaji, Sekupang) perlu perluasan jaminan banjir.' },
                      { risk: 'Tingkat Kriminalitas Kendaraan', desc: 'Sebagai kota industri dengan mobilitas tinggi, risiko pencurian kendaraan atau aksesoris perlu diperhitungkan dalam pemilihan jaminan.' },
                    ].map((item) => (
                      <div key={item.risk} className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                        <p className="font-semibold text-amber-800 mb-1">{item.risk}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jenis Perlindungan ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Pilihan Perlindungan Kendaraan</h2>
            <p className="text-slate-600">Berdasarkan <strong>PSAKBI (Polis Standar Asuransi Kendaraan Bermotor Indonesia)</strong> yang berlaku di seluruh Indonesia</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-7 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.016m.618 9.016A11.955 11.955 0 0112 21.944c2.186 0 4.236-.583 6.016-1.596" /></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-blue-800">All Risk (Comprehensive)</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-semibold">Direkomendasikan</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Menjamin kerusakan sebagian (<em>partial loss</em>) maupun kehilangan total (<em>total loss</em>)
                    akibat kecelakaan, benturan, tergores, terguling, dan risiko lain yang dijamin PSAKBI. Mencakup
                    juga tanggung jawab pihak ketiga (TPL). Cocok untuk kendaraan baru, kendaraan dinas perusahaan,
                    dan kendaraan dengan nilai di atas Rp 200 juta.
                  </p>
                  <div className="text-xs text-blue-700 bg-blue-100/50 rounded-lg p-2.5">
                    <strong>Risiko Sendiri (Deductible):</strong> Konvensional Rp 300.000/kejadian · Mobil Listrik Rp 500.000/kejadian (sesuai ketentuan OJK)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-7 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">Total Loss Only (TLO)</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Menjamin kehilangan (pencurian) atau kerusakan total — yaitu biaya perbaikan melebihi 75% dari
                    harga pertanggungan kendaraan. Pilihan ekonomis untuk kendaraan berumur 5–10 tahun yang nilai
                    pasarnya sudah menyusut, atau kendaraan operasional beban tinggi.
                  </p>
                  <div className="text-xs text-amber-700 bg-amber-100/50 rounded-lg p-2.5">
                    <strong>Tip Batam:</strong> Untuk armada operasional kawasan industri atau kendaraan pengangkut tenaga kerja, TLO adalah pilihan yang umum dan cost-efficient.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-7 rounded-2xl border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-green-800">Asuransi Mobil Listrik di Batam</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-semibold">Ketentuan Khusus OJK</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Untuk kendaraan listrik (<em>Electric Vehicle/EV</em>), OJK menetapkan tarif premi menggunakan
                    <strong> batas atas (ceiling rate)</strong> sesuai kategori harga kendaraan — bukan tarif tengah.
                    Risiko sendiri ditetapkan <strong>Rp 500.000 per kejadian</strong>. Pertimbangan tambahan:
                    kerusakan baterai EV yang merupakan komponen termahal perlu dikonfirmasi cakupannya di polis.
                  </p>
                  <div className="text-xs text-green-700 bg-green-100/50 rounded-lg p-2.5">
                    Batam semakin banyak kendaraan listrik seiring perkembangan kawasan industri. Konsultasikan spesifikasi EV Anda untuk memastikan nilai pertanggungan baterai tercakup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Simulasi Premi Zona 1 ── */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Simulasi Premi Asuransi Mobil Batam (Zona 1 OJK)</h2>
            <p className="text-slate-600 text-sm">Berdasarkan Surat Edaran OJK tentang tarif premi kendaraan bermotor Zona 1 (Sumatera bagian selatan, Kepulauan Riau, Bangka Belitung)</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left p-3">Harga Kendaraan</th>
                    <th className="text-left p-3">All Risk Rate</th>
                    <th className="text-left p-3">Estimasi Premi/Tahun</th>
                    <th className="text-left p-3">TLO Rate</th>
                    <th className="text-left p-3 rounded-tr-lg">Estimasi Premi TLO/Tahun</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['≤ Rp 125 Juta', '3,82%', '~Rp 4,77 Juta', '0,72%', '~Rp 900 Ribu'],
                    ['Rp 125 – 200 Juta', '2,67%', '~Rp 4,00 Juta*', '0,63%', '~Rp 1,01 Juta*'],
                    ['Rp 200 – 400 Juta', '2,18%', '~Rp 6,54 Juta*', '0,53%', '~Rp 1,59 Juta*'],
                    ['Rp 400 – 800 Juta', '1,20%', '~Rp 7,20 Juta*', '0,23%', '~Rp 1,38 Juta*'],
                    ['> Rp 800 Juta', '1,05%', 'Negotiable', '0,20%', 'Negotiable'],
                  ].map(([harga, arRate, arPremi, tloRate, tloPremi], i) => (
                    <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <td className="p-3 font-semibold text-slate-800">{harga}</td>
                      <td className="p-3 font-mono text-blue-700">{arRate}</td>
                      <td className="p-3 text-slate-700">{arPremi}</td>
                      <td className="p-3 font-mono text-amber-700">{tloRate}</td>
                      <td className="p-3 text-slate-700">{tloPremi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-500">* Estimasi menggunakan nilai tengah range harga. Rate di atas adalah <strong>tarif acuan OJK</strong> — rate aktual masing-masing penanggung bisa berbeda dalam rentang yang diizinkan. Premi belum termasuk premi perluasan banjir, gempa, SRCC, dan kecelakaan diri penumpang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Kalkulator ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hitung Premi Kendaraan Anda Sekarang</h2>
          <p className="text-slate-300 mb-8 text-base">Gunakan kalkulator premi untuk estimasi biaya perlindungan kendaraan Anda berdasarkan tarif OJK Zona 1 Batam.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenKalkulator(true)}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Buka Kalkulator Premi
            </button>
            <a href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition">
              <WaIcon />
              WhatsApp Rio
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO Content — PSAKBI & Tips Klaim ── */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* PSAKBI */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Dasar Hukum: PSAKBI dan Regulasi OJK untuk Asuransi Mobil
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Seluruh polis asuransi kendaraan bermotor di Indonesia — termasuk di Batam — mengacu pada{' '}
              <strong>PSAKBI (Polis Standar Asuransi Kendaraan Bermotor Indonesia)</strong> yang merupakan
              wording polis standar yang ditetapkan oleh AAUI dan diawasi OJK. PSAKBI mengatur secara baku
              apa yang dijamin (jaminan utama), apa yang dikecualikan, bagaimana prosedur klaim, dan hak
              serta kewajiban tertanggung.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="font-semibold text-blue-800 mb-2 text-sm">📋 Jaminan Utama PSAKBI</p>
                <ul className="space-y-1 text-xs text-slate-700">
                  {['Kecelakaan & benturan (All Risk)', 'Pencurian termasuk pencurian dengan kekerasan', 'Kebakaran akibat sendiri atau sambaran petir', 'Kerugian selama penyeberangan feri (resmi)', 'Tanggung jawab hukum pihak ketiga'].map(j => (
                    <li key={j} className="flex gap-1.5"><svg className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{j}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-800 mb-2 text-sm">⛔ Exclusion Utama PSAKBI</p>
                <ul className="space-y-1 text-xs text-slate-700">
                  {['Kerusakan akibat banjir/gempa (perlu endorsement)', 'Berkendara tanpa SIM yang sah', 'Pengemudi dalam pengaruh alkohol/narkoba', 'Kerusakan mesin akibat water hammer', 'Keausan normal & kerusakan mekanis mesin'].map(e => (
                    <li key={e} className="flex gap-1.5"><svg className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tips Klaim */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tips Klaim Asuransi Mobil di Batam</h2>
            <div className="space-y-3">
              {[
                { no: '01', tip: 'Laporkan dalam 3×24 Jam', desc: 'PSAKBI mensyaratkan pelaporan klaim maksimal 3×72 jam setelah kejadian. Keterlambatan bisa menjadi alasan penolakan klaim.' },
                { no: '02', tip: 'Dokumentasikan Lokasi Kejadian', desc: 'Foto kondisi kendaraan, posisi kecelakaan, dan nomor polisi pihak lain (jika ada) sebelum memindahkan kendaraan.' },
                { no: '03', tip: 'Laporan Polisi untuk Klaim Tertentu', desc: 'Untuk klaim pencurian dan kecelakaan dengan pihak ketiga, laporan polisi (BAP) wajib dilampirkan bersama formulir klaim.' },
                { no: '04', tip: 'Bengkel Rekanan vs Bengkel Pilihan', desc: 'Penggunaan bengkel rekanan penanggung mempercepat proses klaim. Untuk bengkel pilihan sendiri, prosesnya bisa lebih lama dan ada batas reimbursement.' },
              ].map((t) => (
                <div key={t.no} className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="text-3xl font-black text-emerald-200 leading-none flex-shrink-0">{t.no}</span>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">{t.tip}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Konsultasi */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-800 text-lg">Butuh Konsultasi Langsung?</p>
                <p className="text-sm text-slate-600 mt-1">Rio Mardiansyah — spesialis asuransi kendaraan & korporat di Batam, siap membantu Anda.</p>
              </div>
              <a
                href="https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20asuransi%20mobil%20di%20Batam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap flex-shrink-0"
              >
                <WaIcon />
                WhatsApp: 0813-1556-592
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah. Konsultan Asuransi Kerugian Profesional, Batam & Nasional.</p>
          <p className="mt-1">WhatsApp: 0813-1556-592 | <a href="https://duniaasuransi.com" className="hover:text-white transition">duniaasuransi.com</a></p>
        </div>
      </footer>

      {/* Popup Kalkulator — dipertahankan dari versi lama */}
      <KalkulatorMobilBatamPopup
        isOpen={openKalkulator}
        onClose={() => setOpenKalkulator(false)}
      />
    </main>
  )
}
