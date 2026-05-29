// ═══════════════════════════════════════════════════════════════════════════
// FILE: jaminan-pelaksanaanpage.tsx
// PATH: src/app/jaminan-pelaksanaan/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Jaminan Pelaksanaan (Performance Bond): Syarat, Nilai & Klaim [2025]',
  description:
    'Panduan lengkap Jaminan Pelaksanaan (Performance Bond) — nilai standar 5% kontrak, periode berlaku hingga PHO, kondisi pencairan klaim, dan regulasi Perpres 16/2018. Dari konsultan berpengalaman.',
  keywords: ['jaminan pelaksanaan', 'performance bond', 'surety bond pelaksanaan', 'jaminan kontrak konstruksi', 'PHO FHO jaminan', 'Perpres 16 2018 jaminan pelaksanaan'],
  alternates: { canonical: `${baseUrl}/jaminan-pelaksanaan` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Jaminan Pelaksanaan (Performance Bond): Syarat, Nilai & Klaim 2025',
    url: `${baseUrl}/jaminan-pelaksanaan`, type: 'article', locale: 'id_ID',
  },
};

const kondisiPencairan = [
  { kondisi: 'Kontraktor berhenti bekerja tanpa sebab yang sah', detail: 'Pekerjaan ditinggalkan di tengah jalan sebelum PHO', severity: 'high' },
  { kondisi: 'Kontraktor pailit/bangkrut selama pelaksanaan', detail: 'Keputusan pengadilan niaga yang menyatakan kepailitan', severity: 'high' },
  { kondisi: 'Kualitas pekerjaan jauh di bawah spesifikasi kontrak', detail: 'Setelah peringatan tertulis tidak direspons dalam 14 hari', severity: 'medium' },
  { kondisi: 'Keterlambatan fatal yang melampaui batas toleransi', detail: 'Denda keterlambatan melebihi ambang yang ditetapkan kontrak', severity: 'medium' },
  { kondisi: 'Sub-kontraktor tidak dibayar hingga proyek terhambat', detail: 'Umumnya tidak memicu klaim langsung, tapi bisa menjadi bukti wanprestasi', severity: 'low' },
];

const faqData = [
  { question: 'Kapan tepatnya Jaminan Pelaksanaan diserahkan dan kapan berakhir?', answer: 'Jaminan Pelaksanaan diserahkan pada saat penandatanganan kontrak — atau selambat-lambatnya 14 hari setelah SPPBJ (Surat Penunjukan Penyedia Barang/Jasa) diterbitkan. Jaminan berakhir setelah PHO (Provisional Hand Over / Serah Terima Pertama). Jika terjadi addendum perpanjangan waktu pelaksanaan, Jaminan Pelaksanaan harus diperpanjang pula.' },
  { question: 'Apakah denda keterlambatan dan pencairan Jaminan Pelaksanaan bisa terjadi bersamaan?', answer: 'Tidak — keduanya adalah instrumen berbeda. Denda keterlambatan (penalti) dikenakan otomatis berdasarkan prosentase nilai kontrak per hari keterlambatan dan dipotong dari pembayaran. Jaminan Pelaksanaan dicairkan hanya jika kontraktor secara keseluruhan wanprestasi (gagal menyelesaikan). Dalam praktik, denda keterlambatan dikenakan lebih dahulu; pencairan jaminan adalah opsi terakhir Obligee.' },
  { question: 'Apa yang dimaksud PHO dan bagaimana hubungannya dengan Jaminan Pelaksanaan?', answer: 'PHO (Provisional Hand Over) adalah serah terima pertama pekerjaan dari kontraktor ke pemilik proyek. Setelah PHO, tanggung jawab beralih ke masa pemeliharaan — dan Jaminan Pelaksanaan digantikan oleh Jaminan Pemeliharaan. Jaminan Pelaksanaan tidak boleh dicairkan setelah PHO kecuali ditemukan cacat tersembunyi yang terbukti ada sebelum PHO.' },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function JaminanPelaksanaanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Surety Bond', item: `${baseUrl}/surety-bond` }, { '@type': 'ListItem', position: 3, name: 'Jaminan Pelaksanaan', item: `${baseUrl}/jaminan-pelaksanaan` }] }) }} />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="bg-orange-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-orange-300">Beranda</a><span className="text-orange-700">/</span>
              <a href="/surety-bond" className="hover:underline text-orange-300">Surety Bond</a><span className="text-orange-700">/</span>
              <span className="text-white font-medium">Jaminan Pelaksanaan</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900 via-amber-900 to-slate-900 text-white py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-500/30">🏗️ Performance Bond</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">Tahap: Kontrak → PHO</span>
              <span className="bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">Nilai: 5% dari Kontrak</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl">Jaminan Pelaksanaan (Performance Bond)</h1>
            <p className="text-lg text-orange-200 max-w-2xl leading-relaxed mb-6">
              Jaminan terpenting dalam siklus proyek — berlaku sepanjang masa pelaksanaan konstruksi
              dan menjadi andalan pemilik proyek jika kontraktor wanprestasi di tengah jalan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Pelaksanaan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">💬 Konsultasi via WA</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Jaminan Pelaksanaan?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jaminan Pelaksanaan (Performance Bond) adalah Surety Bond yang diterbitkan saat penandatanganan
                  kontrak untuk menjamin kontraktor menyelesaikan pekerjaan sesuai spesifikasi teknis, mutu, dan
                  jangka waktu yang disepakati. Ini adalah jaminan dengan periode perlindungan terpanjang — berlaku
                  sepanjang masa konstruksi hingga serah terima pertama (PHO).
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Berdasarkan <strong>Perpres No. 16 Tahun 2018 Pasal 62</strong>, nilai Jaminan Pelaksanaan
                  ditetapkan sebesar <strong>5% dari nilai kontrak</strong>. Jika penawaran pemenang di bawah
                  80% dari HPS, nilai jaminan dinaikkan menjadi <strong>5% dari HPS</strong> — ini mekanisme
                  perlindungan terhadap "penawaran abnormal rendah."
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-4">
                  <p className="text-sm font-semibold text-orange-800 mb-1">📌 Posisi dalam Siklus Proyek</p>
                  <div className="flex items-center gap-2 flex-wrap text-xs mt-2">
                    {['Penawaran', '→ Kontrak', '→ JAMINAN PELAKSANAAN ✅', '→ Pelaksanaan', '→ PHO', '→ Jaminan Pemeliharaan'].map((s, i) => (
                      <span key={i} className={s.includes('JAMINAN') ? 'bg-orange-600 text-white px-2 py-1 rounded-full font-bold' : 'text-slate-500'}>{s}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Spesifikasi & Parameter Kunci</h2>
                <div className="overflow-x-auto mt-5">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-orange-900 text-white"><th className="text-left p-3 rounded-tl-lg">Parameter</th><th className="text-left p-3 rounded-tr-lg">Ketentuan</th></tr></thead>
                    <tbody>
                      {[
                        ['Nilai Jaminan Standar', '5% dari nilai kontrak'],
                        ['Jika Penawaran < 80% HPS', '5% dari HPS (bukan dari nilai penawaran)'],
                        ['Waktu Penyerahan', 'Saat penandatanganan kontrak (atau max 14 hari setelah SPPBJ)'],
                        ['Masa Berlaku', 'Sampai PHO + 14 hari buffer'],
                        ['Perpanjangan', 'Wajib jika ada addendum perpanjangan waktu pelaksanaan'],
                        ['Dasar Hukum', 'Perpres 16/2018 Pasal 62, Perlem LKPP No. 12/2021'],
                        ['Sifat Jaminan', 'Unconditional (bayar atas permintaan tertulis Obligee)'],
                      ].map(([p, k], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{p}</td>
                          <td className="p-3 text-slate-600">{k}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Kondisi Pencairan Jaminan Pelaksanaan</h2>
                <div className="space-y-3">
                  {kondisiPencairan.map((k, i) => (
                    <div key={i} className={`flex gap-4 p-4 rounded-xl border ${k.severity === 'high' ? 'bg-red-50 border-red-200' : k.severity === 'medium' ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
                      <span className={`w-2 rounded-full flex-shrink-0 ${k.severity === 'high' ? 'bg-red-500' : k.severity === 'medium' ? 'bg-amber-500' : 'bg-slate-400'}`} />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{k.kondisi}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{k.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Jaminan Pelaksanaan</h2>
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

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-800 to-amber-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <p className="text-2xl mb-3">🏗️</p>
                <h3 className="text-xl font-bold mb-2">Jaminan Pelaksanaan Cepat</h3>
                <p className="text-orange-200 text-sm mb-5">Proses 1–3 hari kerja. Konsultasi gratis dengan Rio Mardiansyah.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Pelaksanaan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🔗 Jaminan Lainnya</h3>
                <div className="space-y-2">
                  {[{ href: '/jaminan-penawaran', label: 'Jaminan Penawaran', sub: 'Bid Bond · Tahap Tender' }, { href: '/jaminan-uang-muka', label: 'Jaminan Uang Muka', sub: 'Advance Payment · 15–30%' }, { href: '/jaminan-pemeliharaan', label: 'Jaminan Pemeliharaan', sub: 'Maintenance Bond · Pasca PHO' }, { href: '/surety-bond', label: '← Surety Bond Hub', sub: 'Panduan lengkap jaminan proyek' }].map((link) => (
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
