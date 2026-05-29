import type { Metadata } from 'next';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Jaminan Pemeliharaan (Maintenance Bond): PHO, FHO & Masa Garansi [2025]',
  description:
    'Panduan lengkap Jaminan Pemeliharaan (Maintenance Bond) — perbedaan PHO vs FHO, masa berlaku 180–365 hari, cacat yang dijamin, dan regulasi Perpres 16/2018. Dari konsultan berpengalaman.',
  keywords: ['jaminan pemeliharaan', 'maintenance bond', 'PHO FHO jaminan', 'surety bond pemeliharaan', 'masa pemeliharaan konstruksi', 'cacat bangunan jaminan'],
  alternates: { canonical: `${baseUrl}/jaminan-pemeliharaan` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: { title: 'Jaminan Pemeliharaan (Maintenance Bond): PHO, FHO & Masa Garansi 2025', url: `${baseUrl}/jaminan-pemeliharaan`, type: 'article', locale: 'id_ID' },
};

const jenisCacat = [
  { jenis: 'Retak struktural pasca serah terima', cakupan: '✅ Dijamin', catatan: 'Jika retak terbukti bukan akibat penggunaan berlebihan atau force majeure' },
  { jenis: 'Kebocoran atap dan sistem plumbing', cakupan: '✅ Dijamin', catatan: 'Salah satu klaim paling umum dalam masa pemeliharaan' },
  { jenis: 'Kegagalan sistem mekanikal-elektrikal', cakupan: '✅ Dijamin', catatan: 'Jika akibat pemasangan tidak sesuai spesifikasi kontrak' },
  { jenis: 'Penurunan (settlement) lantai berlebihan', cakupan: '✅ Dijamin', catatan: 'Harus dibuktikan melebihi toleransi yang ditetapkan RKS' },
  { jenis: 'Kerusakan akibat penggunaan normal', cakupan: '❌ Tidak Dijamin', catatan: 'Ini masuk kategori wear & tear — tanggung jawab pengguna' },
  { jenis: 'Kerusakan akibat force majeure (bencana)', cakupan: '❌ Tidak Dijamin', catatan: 'Gempa, banjir, angin puting beliung pasca serah terima' },
  { jenis: 'Kerusakan akibat perubahan desain oleh pengguna', cakupan: '❌ Tidak Dijamin', catatan: 'Modifikasi sepihak oleh Obligee membatalkan garansi kontraktor' },
];

const faqData = [
  { question: 'Apa perbedaan PHO dan FHO, dan apa relevansinya dengan Jaminan Pemeliharaan?', answer: 'PHO (Provisional Hand Over) adalah serah terima pertama — pekerjaan dinyatakan selesai secara fisik dan pengelolaan beralih ke Obligee, dimulailah masa pemeliharaan. FHO (Final Hand Over) adalah serah terima akhir di penghujung masa pemeliharaan — setelah semua cacat yang ditemukan selama masa pemeliharaan diperbaiki kontraktor. Jaminan Pemeliharaan aktif sejak PHO dan berakhir setelah FHO. Jika kontraktor tidak merespons perbaikan cacat, Obligee dapat mencairkan jaminan ini sebelum FHO.' },
  { question: 'Apakah kontraktor wajib hadir selama masa pemeliharaan?', answer: 'Tidak ada kewajiban "hadir fisik" sepanjang waktu, namun kontraktor wajib merespons dalam waktu yang ditetapkan kontrak (biasanya 7–14 hari) jika Obligee melaporkan cacat. Kegagalan merespons secara tertulis adalah pemicu utama pencairan Jaminan Pemeliharaan. Praktik terbaik: kontraktor menunjuk person in charge (PIC) khusus untuk proyek yang masih dalam masa pemeliharaan.' },
  { question: 'Bisakah Jaminan Pemeliharaan digantikan dengan potongan 5% dari retensi?', answer: 'Ya — ini merupakan pilihan yang diatur dalam Perpres 16/2018 Pasal 68. Obligee dapat menahan uang retensi sebesar 5% dari setiap tagihan sebagai jaminan pemeliharaan (tanpa memerlukan Surat Jaminan terpisah). Sebaliknya, jika kontraktor ingin menerima pembayaran penuh (100%) di setiap tagihan, ia harus menyerahkan Jaminan Pemeliharaan dari penjamin. Pilihan mana yang lebih menguntungkan bergantung pada arus kas kontraktor.' },
];

const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };

export default function JaminanPemeliharaanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Surety Bond', item: `${baseUrl}/surety-bond` }, { '@type': 'ListItem', position: 3, name: 'Jaminan Pemeliharaan', item: `${baseUrl}/jaminan-pemeliharaan` }] }) }} />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="bg-purple-950 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-purple-300">Beranda</a><span className="text-purple-700">/</span>
              <a href="/surety-bond" className="hover:underline text-purple-300">Surety Bond</a><span className="text-purple-700">/</span>
              <span className="text-white font-medium">Jaminan Pemeliharaan</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 via-violet-900 to-slate-900 text-white py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-purple-500/30">🔧 Maintenance Bond</span>
              <span className="bg-slate-500/20 text-slate-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-500/30">Tahap: PHO → FHO</span>
              <span className="bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/30">Nilai: 5% Kontrak</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl">Jaminan Pemeliharaan (Maintenance Bond)</h1>
            <p className="text-lg text-purple-200 max-w-2xl leading-relaxed mb-6">
              Jaminan terakhir dalam siklus proyek — namun jangan dianggap remeh. Cacat bangunan
              yang muncul pasca serah terima pertama bisa bernilai jauh lebih besar dari nilai
              jaminannya jika tidak ditangani tepat waktu.
            </p>
            <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Pemeliharaan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">💬 Konsultasi via WA</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Jaminan Pemeliharaan?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jaminan Pemeliharaan (Maintenance Bond) adalah Surety Bond terakhir dalam siklus proyek
                  konstruksi — aktif sejak Serah Terima Pertama (PHO) hingga Serah Terima Akhir (FHO).
                  Jaminan ini menjamin kontraktor akan memperbaiki semua cacat, kerusakan, atau kegagalan
                  komponen yang ditemukan selama masa pemeliharaan — umumnya 180 hingga 365 hari.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Dasar hukum: <strong>Perpres No. 16/2018 Pasal 68</strong>. Nilai jaminan ditetapkan sebesar
                  5% dari nilai kontrak dan dapat digantikan dengan retensi 5% yang ditahan oleh Obligee dari
                  setiap pembayaran progres — kontraktor bebas memilih skema mana yang lebih menguntungkan
                  dari sisi arus kas.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-4">
                  <p className="text-sm font-semibold text-purple-800 mb-1">📌 Posisi dalam Siklus Proyek</p>
                  <div className="flex items-center gap-2 flex-wrap text-xs mt-2">
                    {['Kontrak', '→ Pelaksanaan', '→ PHO', '→ JAMINAN PEMELIHARAAN ✅', '→ Perbaikan Cacat', '→ FHO (Selesai)'].map((s, i) => (
                      <span key={i} className={s.includes('JAMINAN') ? 'bg-purple-600 text-white px-2 py-1 rounded-full font-bold' : 'text-slate-500'}>{s}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Parameter Teknis Jaminan Pemeliharaan</h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-purple-900 text-white"><th className="text-left p-3 rounded-tl-lg">Parameter</th><th className="text-left p-3 rounded-tr-lg">Ketentuan</th></tr></thead>
                    <tbody>
                      {[['Nilai Jaminan', '5% dari nilai kontrak'], ['Alternatif Retensi', '5% dipotong dari setiap tagihan progres (pilihan kontraktor)'], ['Masa Berlaku', '180 hari (6 bulan) untuk konstruksi sederhana; 365 hari untuk konstruksi kompleks'], ['Mulai Berlaku', 'Saat PHO (Provisional Hand Over / Serah Terima Pertama)'], ['Berakhir', 'Saat FHO (Final Hand Over / Serah Terima Akhir)'], ['Dasar Hukum', 'Perpres 16/2018 Pasal 68, Perlem LKPP No. 12/2021'], ['Sifat Jaminan', 'Unconditional — dapat dicairkan atas permintaan tertulis Obligee']].map(([p, k], i) => (
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
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Jenis Cacat: Mana yang Dijamin, Mana yang Tidak?</h2>
                <p className="text-slate-600 text-sm mb-5">Ini adalah area sengketa paling umum antara kontraktor dan pemilik proyek. Pahami batasannya sebelum terjadi konflik.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-purple-900 text-white"><th className="text-left p-3 rounded-tl-lg">Jenis Cacat / Kerusakan</th><th className="text-center p-3">Dijamin?</th><th className="text-left p-3 rounded-tr-lg">Catatan</th></tr></thead>
                    <tbody>
                      {jenisCacat.map((j, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-medium text-slate-700">{j.jenis}</td>
                          <td className={`p-3 text-center font-bold text-sm ${j.cakupan.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>{j.cakupan}</td>
                          <td className="p-3 text-slate-500 text-xs">{j.catatan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ Jaminan Pemeliharaan</h2>
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
              <div className="bg-gradient-to-br from-purple-800 to-violet-900 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <p className="text-2xl mb-3">🔧</p>
                <h3 className="text-xl font-bold mb-2">Jaminan Pemeliharaan Cepat</h3>
                <p className="text-purple-200 text-sm mb-5">Konsultasi gratis dengan Rio Mardiansyah.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20butuh%20Jaminan%20Pemeliharaan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3">💬 WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">📞 0813-1556-592</a>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">🔗 Jaminan Lainnya</h3>
                <div className="space-y-2">
                  {[{ href: '/jaminan-penawaran', label: 'Jaminan Penawaran', sub: 'Bid Bond · 1–3% penawaran' }, { href: '/jaminan-pelaksanaan', label: 'Jaminan Pelaksanaan', sub: 'Performance Bond · 5% kontrak' }, { href: '/jaminan-uang-muka', label: 'Jaminan Uang Muka', sub: 'Advance Payment · 15–30%' }, { href: '/surety-bond', label: '← Surety Bond Hub', sub: 'Panduan induk jaminan proyek' }].map((link) => (
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
