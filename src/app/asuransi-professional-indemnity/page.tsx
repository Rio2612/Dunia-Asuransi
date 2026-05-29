import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Professional Indemnity Indonesia: Panduan Lengkap 2025',
  description:
    'Panduan lengkap Asuransi Professional Indemnity di Indonesia: basis claims-made vs occurrence, retroactive date, profesi wajib menurut OJK & IAI, simulasi premi, dan tips dokumentasi pekerjaan profesional. Konsultasi: 0813-1556-592.',
  keywords: [
    'asuransi professional indemnity',
    'asuransi tanggung jawab profesi',
    'professional indemnity insurance indonesia',
    'asuransi konsultan',
    'asuransi errors omissions',
    'E&O insurance indonesia',
    'asuransi pengacara',
    'asuransi akuntan publik',
    'asuransi arsitek insinyur',
    'claims made insurance indonesia',
  ],
  alternates: {
    canonical: `${baseUrl}/asuransi-professional-indemnity`,
  },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Professional Indemnity Indonesia: Panduan Lengkap 2025',
    description: 'Panduan PI Indonesia: claims-made basis, retroactive date, profesi wajib, simulasi premi. Konsultasi profesional.',
    url: `${baseUrl}/asuransi-professional-indemnity`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Professional Indemnity (PI) dan apa bedanya dengan Public Liability?',
    answer:
      'Asuransi Professional Indemnity (PI) — juga disebut Errors & Omissions (E&O) insurance — menjamin tanggung jawab hukum seorang profesional atas kerugian finansial yang dialami klien akibat kesalahan, kelalaian, atau kegagalan dalam memberikan jasa profesional. Perbedaan utama dengan Public Liability: PL menjamin cedera fisik atau kerusakan properti pihak ketiga (bodily injury/property damage); sedangkan PI menjamin kerugian finansial/ekonomi klien akibat saran atau jasa yang salah — tanpa harus ada cedera fisik.',
  },
  {
    question: 'Apa itu "claims-made basis" dan mengapa penting untuk dipahami?',
    answer:
      'Polis Professional Indemnity hampir selalu menggunakan basis "claims-made": artinya, polis hanya menjamin klaim yang diajukan (reported) selama periode polis aktif, bukan saat kejadian berlangsung. Ini penting karena: (1) Jika polis tidak diperpanjang, Anda tidak terlindungi dari klaim atas pekerjaan lama meskipun pekerjaan tersebut dilakukan saat polis masih aktif; (2) Anda perlu "Retroactive Date" — tanggal mulai perlindungan mundur ke pekerjaan-pekerjaan yang dilakukan sebelum polis dimulai; (3) Perlu "Extended Reporting Period" (ERP/tail coverage) jika ingin melindungi pekerjaan lama setelah polis diakhiri.',
  },
  {
    question: 'Profesi apa saja yang diwajibkan memiliki Professional Indemnity di Indonesia?',
    answer:
      'Berdasarkan berbagai regulasi sektoral: (1) Akuntan Publik — diwajibkan oleh PPPK/IAPI berdasarkan UU 5/2011 tentang Akuntan Publik; (2) Notaris & PPAT — diwajibkan oleh organisasi profesi; (3) Pengacara/Advokat — direkomendasikan oleh PERADI meskipun belum wajib secara hukum; (4) Konsultan/Perencana Tata Ruang yang mengerjakan proyek pemerintah — sering disyaratkan dalam TOR pengadaan; (5) Broker Asuransi — diwajibkan OJK berdasarkan POJK 70/2016.',
  },
  {
    question: 'Bagaimana cara menghitung premi Professional Indemnity yang tepat?',
    answer:
      'Basis premi PI umumnya dihitung berdasarkan fee/pendapatan jasa profesional tahunan, bukan limit pertanggungan. Rate berkisar 0,5–3% dari annual fee tergantung jenis profesi. Konsultan IT atau konsultan manajemen biasanya lebih murah (0,5–1%), sementara profesi berisiko tinggi seperti arsitek pada proyek besar atau broker keuangan bisa mencapai 2–3%. Faktor lain: jumlah klien aktif, jenis proyek/kasus yang ditangani, rekam jejak klaim, dan limit yang dipilih.',
  },
  {
    question: 'Apa saja yang harus didokumentasikan profesional untuk memperkuat posisi saat klaim?',
    answer:
      'Lima dokumentasi kritis yang wajib dijaga: (1) Engagement letter/kontrak kerja yang jelas mencantumkan scope of work dan batasan tanggung jawab; (2) Semua korespondensi tertulis dengan klien (email, WhatsApp business) — hindari saran lisan yang tidak terdokumentasi; (3) Deliverable dan laporan yang diserahkan ke klien, lengkap dengan tanda terima; (4) Catatan perubahan scope (change order) yang disetujui klien secara tertulis; (5) File working paper/dokumentasi proses kerja yang menunjukkan due diligence telah dilakukan.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Asuransi Professional Indemnity Indonesia: Panduan Lengkap 2025',
  description: 'Panduan mendalam PI Indonesia: claims-made, retroactive date, profesi wajib, simulasi premi, tips dokumentasi.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/asuransi-professional-indemnity` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Asuransi Liability', item: `${baseUrl}/asuransi-liability` },
    { '@type': 'ListItem', position: 3, name: 'Professional Indemnity', item: `${baseUrl}/asuransi-professional-indemnity` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ProfessionalIndemnityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

        <div className="bg-slate-800 text-white py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
              <a href="/" className="hover:underline text-slate-300">Beranda</a>
              <span className="text-slate-500">/</span>
              <a href="/asuransi-liability" className="hover:underline text-orange-300">Asuransi Liability</a>
              <span className="text-slate-500">/</span>
              <span className="text-white font-medium">Professional Indemnity</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
              🎓 Tanggung Jawab Profesi — Kluster Liability
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Professional Indemnity Indonesia
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
              Saran yang kurang tepat, desain yang keliru, atau laporan audit yang terlewat satu angka —
              dalam dunia profesional, satu kesalahan bisa berujung gugatan senilai puluhan kali fee Anda.
              Professional Indemnity adalah jaringan pengaman karier dan aset Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Professional%20Indemnity" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"><WaIcon />Konsultasi via WA</a>
              <a href="tel:+628131556592" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0813-1556-592
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* Definisi & Regulasi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Apa Itu Professional Indemnity dan Siapa yang Wajib?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Asuransi Professional Indemnity (PI)</strong> — atau Errors & Omissions (E&O) Insurance —
                  menjamin tanggung jawab hukum seorang profesional atas kerugian finansial klien yang timbul akibat
                  kesalahan, kelalaian, atau kegagalan dalam memberikan jasa profesional.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Berbeda dengan Public Liability yang menjamin cedera fisik dan kerusakan properti, PI secara
                  khusus menjamin <em>kerugian murni finansial</em> (pure economic loss) — yang justru lebih relevan
                  bagi penyedia jasa berbasis pengetahuan dan keahlian.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 mb-4">
                  <p className="text-sm font-bold text-blue-900 mb-2">📌 Regulasi Wajib di Indonesia</p>
                  <div className="space-y-1.5 text-sm text-blue-800">
                    {[
                      ['Akuntan Publik', 'UU No. 5/2011 tentang Akuntan Publik — wajib memiliki asuransi PI'],
                      ['Broker Asuransi', 'POJK No. 70/POJK.05/2016 — broker wajib asuransikan tanggung jawab profesi'],
                      ['Notaris & PPAT', 'Diwajibkan organisasi profesi (INI/IPPAT) sebagai syarat keanggotaan'],
                      ['Konsultan Pengadaan', 'TOR pengadaan pemerintah sering mensyaratkan PI untuk konsultan tertentu'],
                    ].map(([profesi, reg]) => (
                      <div key={profesi} className="flex gap-2">
                        <span className="text-blue-400 flex-shrink-0">▸</span>
                        <p><strong>{profesi}:</strong> {reg}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Claims-Made vs Occurrence — Topik Eksklusif */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Claims-Made vs Occurrence: Konsep Paling Kritis yang Sering Disalahpahami
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Hampir semua polis Professional Indemnity menggunakan basis <strong>claims-made</strong>, bukan
                  occurrence. Ini berdampak besar pada kapan perlindungan Anda berlaku. Pahami perbedaannya:
                </p>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Dimensi</th>
                        <th className="text-left p-3 bg-blue-900">Claims-Made (PI)</th>
                        <th className="text-left p-3 bg-indigo-900 rounded-tr-lg">Occurrence (PL biasa)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Pemicu Jaminan', 'Klaim diajukan saat polis aktif', 'Kejadian terjadi saat polis aktif'],
                        ['Pekerjaan Lama', 'Terlindungi jika ada Retroactive Date', 'Otomatis terlindungi'],
                        ['Pasca Polis Berakhir', 'Tidak terlindungi (kecuali ada ERP/tail)', 'Tetap terlindungi'],
                        ['Risiko Lapse', 'Tinggi — jangan pernah lapse', 'Lebih rendah'],
                        ['Relevansi', 'Mayoritas polis PI/E&O', 'Mayoritas polis PL, CAR, properti'],
                      ].map(([dim, cm, occ], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{dim}</td>
                          <td className="p-3 text-slate-700 border-l border-blue-100">{cm}</td>
                          <td className="p-3 text-slate-700 border-l border-indigo-100">{occ}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <p className="font-bold text-orange-800 mb-2">⚠️ Tiga Elemen Kritis yang Wajib Ada di Polis PI Anda</p>
                  <div className="space-y-3">
                    {[
                      { title: 'Retroactive Date', desc: 'Tanggal mundur mulai perlindungan atas pekerjaan yang sudah dilakukan sebelum polis dimulai. Semakin jauh retroactive date ke belakang, semakin lengkap perlindungan Anda.' },
                      { title: 'Extended Reporting Period (ERP / Tail Coverage)', desc: 'Perpanjangan waktu pelaporan klaim setelah polis berakhir — untuk melindungi pekerjaan lama yang baru diklaim kemudian. Penting saat Anda pensiun atau beralih profesi.' },
                      { title: 'Limit per Claim vs Annual Aggregate', desc: 'Limit per klaim adalah maksimum yang dibayar untuk satu kejadian. Annual Aggregate adalah total maksimum untuk semua klaim dalam setahun. Pastikan keduanya memadai.' },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-orange-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-orange-800">{item.title}</p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Professional Indemnity</h2>
                <p className="text-slate-600 text-sm mb-5">Basis premi dihitung dari <strong>pendapatan jasa/fee tahunan</strong> profesional atau firma.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Profesi</th>
                        <th className="text-left p-3">Annual Fee</th>
                        <th className="text-left p-3">Rate Indikasi</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Konsultan IT / Sistem', 'Rp 2 Miliar', '0,5 – 1,0%', 'Rp 10 – 20 Juta'],
                        ['Konsultan Manajemen', 'Rp 5 Miliar', '0,5 – 1,0%', 'Rp 25 – 50 Juta'],
                        ['Akuntan Publik / KAP', 'Rp 3 Miliar', '0,8 – 1,5%', 'Rp 24 – 45 Juta'],
                        ['Arsitek / Konsultan MK', 'Rp 4 Miliar', '1,0 – 2,0%', 'Rp 40 – 80 Juta'],
                        ['Pengacara / Kantor Hukum', 'Rp 5 Miliar', '1,0 – 2,0%', 'Rp 50 – 100 Juta'],
                        ['Broker Asuransi', 'Rp 2 Miliar', '0,5 – 1,0%', 'Rp 10 – 20 Juta'],
                      ].map(([profesi, fee, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{profesi}</td>
                          <td className="p-3 font-mono text-slate-700">{fee}</td>
                          <td className="p-3 font-mono text-slate-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Rate dipengaruhi: jenis klien (korporat vs retail), kompleksitas proyek, jumlah staf profesional, rekam jejak klaim, dan limit yang dipilih.</p>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pertanyaan yang Sering Ditanyakan</h2>
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
              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4"><strong>Disclaimer:</strong> Informasi bersifat edukatif dan umum. Cakupan, limit, rate aktual ditentukan underwriter berdasarkan survei risiko dan profil profesional.</p>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-950 to-indigo-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">🎓</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi PI Anda</h3>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">Apakah retroactive date dan ERP polis Anda sudah benar? Rio Mardiansyah siap mereview struktur polis Professional Indemnity Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Professional%20Indemnity" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-blue-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <Link href="/asuransi-liability" className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Kembali ke Asuransi Liability
                </Link>
                <p className="text-xs text-blue-600 mt-1">Lihat semua jenis asuransi liability</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Liability Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/asuransi-public-liability', label: 'Public Liability', sub: 'Tuntutan operasional bisnis' },
                    { href: '/asuransi-product-liability', label: 'Product Liability', sub: 'Tanggung jawab produk' },
                    { href: '/asuransi-liability-limbah-b3', label: 'Liability Limbah B3', sub: 'Tanggung jawab lingkungan' },
                    { href: '/directors-officers-liability', label: 'D&O Liability', sub: 'Direksi & komisaris' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-slate-900 text-slate-400 py-8 mt-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Dunia Asuransi — Rio Mardiansyah. Konsultan Asuransi Kerugian Profesional.</p>
            <p className="mt-1">WhatsApp: 0813-1556-592 | <a href={baseUrl} className="hover:text-white transition">duniaasuransi.com</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}
