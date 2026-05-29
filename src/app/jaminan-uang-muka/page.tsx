import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Jaminan Uang Muka (Advance Payment Bond): Fungsi, Nilai & Pencairan [2025]',
  description:
    'Panduan lengkap Jaminan Uang Muka (Advance Payment Bond) — nilai standar 15–30% kontrak, mekanisme amortisasi otomatis, kapan dicairkan, dan regulasi PMK 190/2012. Dari praktisi berpengalaman.',
  keywords: ['jaminan uang muka', 'advance payment bond', 'jaminan uang muka konstruksi', 'surety bond uang muka', 'PMK 190 2012 uang muka', 'amortisasi jaminan uang muka'],
  alternates: { canonical: `${baseUrl}/jaminan-uang-muka` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: { title: 'Jaminan Uang Muka (Advance Payment Bond) 2025', url: `${baseUrl}/jaminan-uang-muka`, type: 'article', locale: 'id_ID' },
};

const mekanismeAmortisasi = [
  { bulan: 'Bulan 0 (Kontrak)', uangMuka: 'Rp 3.000.000.000', jaminanAktif: 'Rp 3.000.000.000', keterangan: 'Uang muka dibayarkan penuh — jaminan aktif senilai 100% uang muka' },
  { bulan: 'Tagihan 1 (25%)', uangMuka: 'Rp 2.250.000.000', jaminanAktif: 'Rp 2.250.000.000', keterangan: 'Potongan 25% × nilai uang muka dari setiap tagihan progres' },
  { bulan: 'Tagihan 2 (50%)', uangMuka: 'Rp 1.500.000.000', jaminanAktif: 'Rp 1.500.000.000', keterangan: 'Jaminan berkurang proporsional — sesuai cicilan pengembalian' },
  { bulan: 'Tagihan 3 (75%)', uangMuka: 'Rp 750.000.000', jaminanAktif: 'Rp 750.000.000', keterangan: 'Mendekati lunas — risiko klaim semakin rendah' },
  { bulan: 'Lunas (100%)', uangMuka: 'Rp 0', jaminanAktif: 'Berakhir', keterangan: 'Jaminan Uang Muka otomatis berakhir saat cicilan terakhir lunas' },
];

const faqData = [
  { question: 'Berapa besar uang muka yang bisa diterima kontraktor dari proyek pemerintah?', answer: 'Berdasarkan PMK No. 190/PMK.05/2012 tentang Tata Cara Pembayaran dalam Pelaksanaan APBN, uang muka untuk pengadaan konstruksi dapat diberikan hingga 20% dari nilai kontrak untuk usaha kecil dan 15% untuk usaha non-kecil. Pemerintah daerah atau BUMN mungkin memiliki ketentuan berbeda berdasarkan peraturan internal masing-masing.' },
  { question: 'Apa yang dimaksud dengan amortisasi Jaminan Uang Muka dan mengapa penting dipahami kontraktor?', answer: 'Amortisasi adalah proses pengurangan nilai jaminan secara proporsional seiring pembayaran cicilan pengembalian uang muka. Mekanisme ini penting karena: (1) Kontraktor tidak perlu membayar premi atas nilai penuh jaminan sepanjang kontrak — premi dihitung berdasarkan nilai rata-rata jaminan; (2) Penjamin memiliki eksposur yang menurun seiring waktu; (3) Dalam klaim, Obligee hanya bisa menuntut sisa nilai jaminan yang belum diamortisasi.' },
  { question: 'Apakah Jaminan Uang Muka bisa dicairkan jika kontraktor telambat menggunakan uang muka?', answer: 'Keterlambatan penggunaan uang muka saja bukan pemicu otomatis pencairan jaminan. Pencairan dipicu jika kontraktor gagal mengembalikan sisa uang muka sesuai skema cicilan yang ditetapkan kontrak, atau jika kontrak diputus karena wanprestasi saat masih ada saldo uang muka yang belum dikembalikan. Obligee harus membuktikan bahwa kontrak telah diputus dan saldo uang muka belum dikembalikan.' },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function JaminanUangMukaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Surety Bond', item: `${baseUrl}/surety-bond` }, { '@type': 'ListItem', position: 3, name: 'Jaminan Uang Muka', item: `${baseUrl}/jaminan-uang-muka` }] }) }} />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="bg-green-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-green-300">Beranda</a><span className="text-green-700">/</span>
              <a href="/surety-bond" className="hover:underline text-green-300">Surety Bond</a><span className="text-green-700">/</span>
              <span className="text-white font-medium">Jaminan Uang Muka</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-slate-900 text-white py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-500/30">💰 Advance Payment Bond</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">Tahap: Awal Pelaksanaan</span>
              <span className="bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">Nilai: 15–30% Kontrak</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl">Jaminan Uang Muka (Advance Payment Bond)</h1>
            <p className="text-lg text-green-200 max-w-2xl leading-relaxed mb-6">
              Pemilik proyek memberikan uang muka agar kontraktor bisa memulai pekerjaan tanpa hambatan
              modal. Jaminan Uang Muka adalah garansi bahwa dana ini akan dikembalikan — atau digunakan
              sesuai peruntukannya.
            </p>
            <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Uang%20Muka" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">💬 Konsultasi via WA</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Jaminan Uang Muka?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jaminan Uang Muka (Advance Payment Bond) adalah Surety Bond yang diterbitkan sebagai
                  prasyarat sebelum pemilik proyek mencairkan dana uang muka kepada kontraktor. Jaminan ini
                  menjamin bahwa uang muka akan digunakan sesuai peruntukannya (mobilisasi, pembelian material
                  awal, dll.) dan akan dikembalikan secara bertahap melalui pemotongan dari setiap tagihan progres.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-green-800 mb-1">📌 Dasar Hukum Pemberian Uang Muka</p>
                  <p className="text-sm text-green-700">PMK No. 190/PMK.05/2012 Pasal 22: uang muka APBN untuk konstruksi maksimal 20% (usaha kecil) dan 15% (non-kecil) dari nilai kontrak. Pemberian uang muka wajib disertai Jaminan Uang Muka senilai minimal 100% nilai uang muka yang diberikan.</p>
                </div>
                <div className="bg-slate-50 border-l-4 border-slate-400 rounded-r-xl p-4">
                  <p className="text-sm font-semibold text-slate-800 mb-1">📌 Posisi dalam Siklus Proyek</p>
                  <div className="flex items-center gap-2 flex-wrap text-xs mt-2">
                    {['Kontrak', '→ JAMINAN UANG MUKA ✅', '→ Pencairan Uang Muka', '→ Amortisasi per Tagihan', '→ Lunas (Jaminan Berakhir)', '→ PHO'].map((s, i) => (
                      <span key={i} className={s.includes('JAMINAN') ? 'bg-green-600 text-white px-2 py-1 rounded-full font-bold' : 'text-slate-500'}>{s}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Mekanisme Amortisasi Jaminan Uang Muka</h2>
                <p className="text-slate-600 text-sm mb-5">
                  Ini adalah konsep yang paling sering disalahpahami. Jaminan Uang Muka <strong>bukan</strong>{' '}
                  instrumen statis — nilainya berkurang seiring pengembalian uang muka. Berikut contoh dengan
                  nilai kontrak Rp 20 miliar dan uang muka 15% (Rp 3 miliar):
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-green-900 text-white"><th className="text-left p-3 rounded-tl-lg">Periode</th><th className="text-right p-3">Saldo Uang Muka</th><th className="text-right p-3">Nilai Jaminan Aktif</th><th className="text-left p-3 rounded-tr-lg">Keterangan</th></tr></thead>
                    <tbody>
                      {mekanismeAmortisasi.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${row.jaminanAktif === 'Berakhir' ? 'bg-green-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{row.bulan}</td>
                          <td className="p-3 text-right font-mono text-slate-700">{row.uangMuka}</td>
                          <td className={`p-3 text-right font-mono font-bold ${row.jaminanAktif === 'Berakhir' ? 'text-green-600' : 'text-slate-800'}`}>{row.jaminanAktif}</td>
                          <td className="p-3 text-slate-500 text-xs">{row.keterangan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-700"><strong>💡 Implikasi bagi Premi:</strong> Beberapa penjamin menghitung premi Jaminan Uang Muka berdasarkan nilai rata-rata jaminan selama periode — bukan nilai puncak (awal). Ini bisa menghasilkan efisiensi biaya yang signifikan jika proyek berjalan sesuai jadwal.</p>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Jaminan Uang Muka</h2>
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
              <div className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <p className="text-2xl mb-3">💰</p>
                <h3 className="text-xl font-bold mb-2">Jaminan Uang Muka Cepat</h3>
                <p className="text-green-200 text-sm mb-5">Konsultasi gratis dengan Rio Mardiansyah — terbit 1–3 hari kerja.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Uang%20Muka" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🔗 Jaminan Lainnya</h3>
                <div className="space-y-2">
                  {[{ href: '/jaminan-penawaran', label: 'Jaminan Penawaran', sub: 'Bid Bond · 1–3% penawaran' }, { href: '/jaminan-pelaksanaan', label: 'Jaminan Pelaksanaan', sub: 'Performance Bond · 5% kontrak' }, { href: '/jaminan-pemeliharaan', label: 'Jaminan Pemeliharaan', sub: 'Maintenance Bond · Pasca PHO' }, { href: '/surety-bond', label: '← Surety Bond Hub', sub: 'Panduan induk jaminan proyek' }].map((link) => (
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
            <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah. | <a href={baseUrl} className="hover:text-white">duniaasuransi.com</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}
