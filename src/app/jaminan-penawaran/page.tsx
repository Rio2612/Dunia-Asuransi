import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Jaminan Penawaran (Bid Bond): Syarat Tender LPSE & Cara Kerja [2025]',
  description:
    'Panduan lengkap Jaminan Penawaran (Bid Bond) — syarat pengajuan, nilai standar 1–3%, proses di LPSE, aturan Perpres 16/2018, dan alur jika pemenang tender mengundurkan diri. Dari konsultan berpengalaman.',
  keywords: ['jaminan penawaran', 'bid bond', 'jaminan tender', 'jaminan lelang LPSE', 'surety bond penawaran', 'syarat tender pemerintah', 'Perpres 16 2018 jaminan penawaran'],
  alternates: { canonical: `${baseUrl}/jaminan-penawaran` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Jaminan Penawaran (Bid Bond): Syarat Tender LPSE & Cara Kerja 2025',
    description: 'Panduan Jaminan Penawaran — nilai 1–3%, proses LPSE, Perpres 16/2018, dan konsekuensi jika pemenang mundur.',
    url: `${baseUrl}/jaminan-penawaran`, type: 'article', locale: 'id_ID', siteName: 'Dunia Asuransi',
  },
};

const persyaratanDokumen = [
  { dok: 'SIUJK / SBU', ket: 'Surat Izin Usaha Jasa Konstruksi — harus aktif dan sesuai sub-bidang pekerjaan' },
  { dok: 'Akta Perusahaan', ket: 'Akta pendirian dan perubahan terakhir yang telah disahkan Kemenkumham' },
  { dok: 'NPWP Perusahaan', ket: 'Nomor Pokok Wajib Pajak atas nama badan usaha' },
  { dok: 'Dokumen Tender (RKS)', ket: 'Rencana Kerja dan Syarat-syarat dari panitia — memuat nilai pagu dan persyaratan jaminan' },
  { dok: 'Lap. Keuangan 1–2 Tahun', ket: 'Untuk proyek di atas Rp 5 miliar, penjamin umumnya meminta laporan keuangan audited' },
  { dok: 'Daftar Track Record', ket: 'Daftar proyek selesai dalam 10 tahun terakhir — membuktikan kapabilitas kontraktor' },
];

const faktaKritis = [
  {
    no: '01', judul: 'Nilai Jaminan Tidak Boleh Kurang dari Dokumen Tender',
    isi: 'Jika dokumen RKS menyebut Jaminan Penawaran senilai 2% dari HPS (Harga Perkiraan Sendiri), maka nilai minimal Surat Jaminan harus memenuhi persentase tersebut. Jaminan dengan nilai di bawah ketentuan akan digugurkan secara administratif meski kontraktor paling kompetitif secara teknis.',
  },
  {
    no: '02', judul: 'Masa Berlaku Harus Melampaui Masa Evaluasi',
    isi: 'Perpres 16/2018 menetapkan masa berlaku Jaminan Penawaran minimal 28 hari setelah berakhirnya masa penawaran. Dalam praktik, panitia sering meminta 60–90 hari untuk antisipasi proses evaluasi yang memanjang atau sanggahan peserta lain.',
  },
  {
    no: '03', judul: 'Penjamin Harus Ada di Daftar LKPP',
    isi: 'Tidak semua perusahaan asuransi diakui sebagai penjamin sah untuk pengadaan pemerintah. Nama penjamin harus tercantum dalam daftar perusahaan penjamin yang diakui LKPP. Surat Jaminan dari perusahaan di luar daftar ini akan ditolak tanpa pengecualian.',
  },
  {
    no: '04', judul: 'Sifat "Unconditional" untuk Pengadaan Pemerintah',
    isi: 'Sesuai Perlem LKPP No. 12/2021, Surat Jaminan untuk pengadaan pemerintah harus bersifat unconditional — artinya penjamin wajib mencairkan jaminan segera setelah menerima permintaan tertulis dari Obligee tanpa memerlukan pembuktian lebih lanjut.',
  },
];

const skenarioKlaim = [
  { skenario: 'Pemenang menolak tanda tangan kontrak', akibat: 'Jaminan Penawaran dicairkan oleh panitia. Kontraktor di-blacklist dari pengadaan pemerintah selama 2 tahun (Perpres 16/2018 Pasal 89).' },
  { skenario: 'Pemenang mengajukan penawaran baru yang lebih tinggi', akibat: 'Dianggap mengundurkan diri. Jaminan dicairkan. Proyek dilanjutkan ke pemenang urutan berikutnya.' },
  { skenario: 'Kontraktor tidak bisa menyerahkan Jaminan Pelaksanaan', akibat: 'Jaminan Penawaran dicairkan. Kontrak tidak jadi ditandatangani. Perusahaan masuk daftar hitam.' },
  { skenario: 'Force majeure yang valid (contoh: bencana alam)', akibat: 'Dapat menjadi alasan pengunduran diri yang sah. Panitia mengevaluasi kasusnya — jaminan mungkin tidak dicairkan jika alasan diterima.' },
];

const faqData = [
  {
    question: 'Apakah Jaminan Penawaran bisa diterbitkan dalam 1 hari?',
    answer: 'Untuk penjamin yang sudah memiliki data kontraktor (existing client), penerbitan 1 hari kerja adalah mungkin. Untuk kontraktor baru, proses evaluasi dokumen biasanya memakan 2–3 hari kerja. Sangat disarankan mengajukan minimal 5 hari kerja sebelum deadline LPSE untuk antisipasi revisi dokumen atau permintaan data tambahan dari penjamin.',
  },
  {
    question: 'Bisakah satu kontraktor memiliki beberapa Jaminan Penawaran yang berjalan bersamaan?',
    answer: 'Ya, bisa. Ini justru strategi normal bagi kontraktor yang agresif mengikuti beberapa tender sekaligus. Kapasitas jaminan berganda ditentukan oleh penilaian penjamin atas kemampuan finansial kontraktor. Jika menggunakan Surety Bond, ini tidak memblokir fasilitas kredit bank — sehingga lebih efisien dibanding Bank Garansi untuk strategi multi-tender.',
  },
  {
    question: 'Apa yang terjadi dengan Jaminan Penawaran jika kontraktor tidak menang?',
    answer: 'Jaminan Penawaran bagi peserta yang tidak menang dikembalikan setelah proses evaluasi selesai dan pemenang telah ditetapkan. Dalam sistem LPSE modern, dokumen jaminan dalam bentuk digital/scan tidak perlu dikembalikan secara fisik — cukup dinyatakan tidak berlaku oleh panitia dalam SPPBJ (Surat Penetapan Pemenang).',
  },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
const jsonLdBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Surety Bond', item: `${baseUrl}/surety-bond` }, { '@type': 'ListItem', position: 3, name: 'Jaminan Penawaran', item: `${baseUrl}/jaminan-penawaran` } ] };

export default function JaminanPenawaranPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="bg-blue-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-blue-300">Beranda</a>
              <span className="text-blue-700">/</span>
              <a href="/surety-bond" className="hover:underline text-blue-300">Surety Bond</a>
              <span className="text-blue-700">/</span>
              <span className="text-white font-medium">Jaminan Penawaran</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-14 md:py-18">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/30">📋 Bid Bond</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">Tahap: Pra-Tender</span>
              <span className="bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">Nilai: 1%–3% dari Penawaran</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl">Jaminan Penawaran (Bid Bond)</h1>
            <p className="text-lg text-blue-200 max-w-2xl leading-relaxed mb-6">
              Dokumen pertama yang menentukan apakah Anda lolos administrasi atau langsung gugur sebelum
              bersaing secara teknis. Pahami aturan mainnya — satu kesalahan kecil bisa menutup peluang
              proyek bernilai miliaran rupiah.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Penawaran" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">💬 Konsultasi via WA</a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">📞 0813-1556-592</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Jaminan Penawaran dan Mengapa Krusial?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jaminan Penawaran (Bid Bond) adalah jenis Surety Bond yang diwajibkan dalam proses tender untuk
                  membuktikan keseriusan dan komitmen peserta. Jaminan ini berfungsi melindungi pemilik proyek
                  (Obligee) dari kerugian jika pemenang tender tiba-tiba mengundurkan diri atau menolak menandatangani
                  kontrak setelah ditetapkan sebagai pemenang.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Dasar hukum utama: <strong>Perpres No. 16 Tahun 2018 Pasal 30</strong> yang mewajibkan Jaminan
                  Penawaran untuk pengadaan konstruksi dengan nilai di atas Rp 10 miliar, serta <strong>Perlem
                  LKPP No. 12 Tahun 2021</strong> yang mengatur format dan persyaratan teknis Surat Jaminan.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">📌 Posisi dalam Siklus Proyek</p>
                  <div className="flex items-center gap-2 flex-wrap text-xs mt-2">
                    {['Pra-Kualifikasi', '→ JAMINAN PENAWARAN ✅', '→ Evaluasi Tender', '→ Penetapan Pemenang', '→ Jaminan Pelaksanaan', '→ Pelaksanaan'].map((s, i) => (
                      <span key={i} className={s.includes('JAMINAN') ? 'bg-blue-600 text-white px-2 py-1 rounded-full font-bold' : 'text-slate-500'}>{s}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Spesifikasi Teknis Jaminan Penawaran</h2>
                <p className="text-slate-600 text-sm mb-5">Parameter standar yang berlaku dalam pengadaan pemerintah Indonesia.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-blue-900 text-white"><th className="text-left p-3 rounded-tl-lg">Parameter</th><th className="text-left p-3 rounded-tr-lg">Standar / Ketentuan</th></tr></thead>
                    <tbody>
                      {[
                        ['Nilai Jaminan', '1% – 3% dari nilai HPS (Harga Perkiraan Sendiri)'],
                        ['Batas Minimum Perpres', 'Wajib untuk pengadaan konstruksi di atas Rp 10 miliar'],
                        ['Masa Berlaku Minimum', '28 hari setelah berakhirnya masa penawaran (Perlem LKPP)'],
                        ['Praktik Umum Panitia', '60 – 90 hari (antisipasi evaluasi + sanggah)'],
                        ['Sifat Jaminan', 'Unconditional — wajib bayar atas permintaan tertulis Obligee'],
                        ['Penjamin Yang Diakui', 'Perusahaan asuransi/penjamin dalam daftar LKPP (terdaftar OJK)'],
                        ['Format Surat Jaminan', 'Mengikuti Lampiran Perlem LKPP No. 12/2021'],
                        ['Pencairan Jika Wanprestasi', 'Max 14 hari kerja setelah permintaan tertulis Obligee'],
                      ].map(([param, ket], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{param}</td>
                          <td className="p-3 text-slate-600">{ket}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">4 Hal Kritis yang Sering Menggugurkan Jaminan</h2>
                <div className="space-y-4">
                  {faktaKritis.map((f) => (
                    <div key={f.no} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{f.no}</div>
                      <div><p className="font-semibold text-slate-800 mb-1">{f.judul}</p><p className="text-slate-600 text-sm leading-relaxed">{f.isi}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Dokumen Pengajuan Jaminan Penawaran</h2>
                <p className="text-slate-600 text-sm mb-5">Siapkan dokumen ini sebelum menghubungi penjamin agar proses lebih cepat.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-blue-900 text-white"><th className="text-left p-3 rounded-tl-lg">Dokumen</th><th className="text-left p-3 rounded-tr-lg">Keterangan</th></tr></thead>
                    <tbody>
                      {persyaratanDokumen.map((d, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{d.dok}</td>
                          <td className="p-3 text-slate-600">{d.ket}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Konsekuensi Jika Pemenang Mengundurkan Diri</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-red-800 text-white"><th className="text-left p-3 rounded-tl-lg">Skenario</th><th className="text-left p-3 rounded-tr-lg">Akibat Hukum</th></tr></thead>
                    <tbody>
                      {skenarioKlaim.map((s, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}`}>
                          <td className="p-3 font-medium text-slate-700">{s.skenario}</td>
                          <td className="p-3 text-slate-600">{s.akibat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Jaminan Penawaran</h2>
                <div className="space-y-3">
                  {faqData.map((faq, i) => (
                    <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100">
                      <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-slate-800 hover:bg-slate-100 rounded-xl list-none">
                        <span>{faq.question}</span>
                        <svg className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <p className="text-2xl mb-3">📋</p>
                <h3 className="text-xl font-bold mb-2">Butuh Jaminan Penawaran Cepat?</h3>
                <p className="text-blue-200 text-sm mb-5">Proses 1–3 hari kerja. Rio Mardiansyah membantu kontraktor mendapatkan jaminan dengan penjamin terpercaya yang diakui LKPP.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Penawaran%20untuk%20tender" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🔗 Jaminan Lainnya dalam Siklus Proyek</h3>
                <div className="space-y-2">
                  {[
                    { href: '/jaminan-pelaksanaan', label: 'Jaminan Pelaksanaan', sub: 'Performance Bond · 5% kontrak' },
                    { href: '/jaminan-uang-muka', label: 'Jaminan Uang Muka', sub: 'Advance Payment Bond · 15–30%' },
                    { href: '/jaminan-pemeliharaan', label: 'Jaminan Pemeliharaan', sub: 'Maintenance Bond · 5% kontrak' },
                    { href: '/surety-bond', label: '← Kembali ke Surety Bond', sub: 'Halaman induk jaminan proyek' },
                  ].map((link) => (
                    <a key={link.href} href={link.href} className="flex items-center gap-3 p-3 bg-amber-50 hover:bg-amber-100 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-amber-700 text-sm">{link.label}</p><p className="text-xs text-slate-500">{link.sub}</p></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-slate-900 text-slate-400 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah.</p>
            <p className="mt-1">WhatsApp: 0813-1556-592 | <a href={baseUrl} className="hover:text-white">duniaasuransi.com</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}
