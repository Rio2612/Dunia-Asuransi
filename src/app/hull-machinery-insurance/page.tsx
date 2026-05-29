import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://duniaasuransi.com';

export const metadata: Metadata = {
  title: 'Asuransi Hull & Machinery (Rangka Kapal) Indonesia: Panduan 2025',
  description:
    'Panduan lengkap Asuransi Hull & Machinery (H&M) Indonesia: ITC-H 1983/2003, Running Down Clause, gap dengan P&I Club, konstruksi kapal baru, simulasi premi per jenis kapal. Konsultasi maritime: 0813-1556-592.',
  keywords: [
    'asuransi hull machinery',
    'asuransi rangka kapal',
    'hull machinery insurance indonesia',
    'ITC hull 1983',
    'asuransi kapal indonesia',
    'asuransi mesin kapal',
    'running down clause',
    'P&I club indonesia',
    'asuransi kapal tanker',
    'marine hull insurance',
  ],
  alternates: { canonical: `${baseUrl}/hull-machinery-insurance` },
  authors: [{ name: 'Rio Mardiansyah' }],
  openGraph: {
    title: 'Asuransi Hull & Machinery (Rangka Kapal) Indonesia: Panduan 2025',
    description: 'Panduan H&M Indonesia: ITC-H 1983, Running Down Clause, P&I Club gap, simulasi premi per jenis kapal. Konsultasi profesional.',
    url: `${baseUrl}/hull-machinery-insurance`,
    type: 'article',
    locale: 'id_ID',
    siteName: 'Dunia Asuransi',
  },
};

const faqData = [
  {
    question: 'Apa itu Asuransi Hull & Machinery dan apa yang dijaminnya?',
    answer: 'Asuransi Hull & Machinery (H&M) menjamin kerusakan fisik atau kehilangan kapal itu sendiri — termasuk badan kapal (hull), mesin penggerak, peralatan navigasi, dan semua perlengkapan kapal yang melekat. Polis ini dirancang untuk pemilik kapal (shipowner) dan menjamin risiko selama kapal beroperasi di laut maupun saat berlabuh. H&M tidak menjamin muatan — itu domain Asuransi Kargo yang berbeda.',
  },
  {
    question: 'Apa itu Institute Time Clauses — Hulls (ITC-H) dan mengapa penting?',
    answer: 'ITC-H (Institute Time Clauses — Hulls) adalah wording standar pasar London (Lloyd\'s) yang menjadi acuan global untuk polis Hull & Machinery. Versi 1983 masih paling banyak digunakan, sementara versi 2003 (revised) menambahkan ketentuan untuk risiko modern. ITC-H mendefinisikan secara detail: apa yang dijamin (perils covered), exclusion, kewajiban tertanggung, dan prosedur klaim. Memahami versi ITC-H yang digunakan polis Anda adalah langkah pertama dalam memahami cakupan sebenarnya.',
  },
  {
    question: 'Apa perbedaan Hull & Machinery dengan P&I Club dan mengapa keduanya dibutuhkan?',
    answer: 'H&M menjamin aset fisik kapal (kerusakan/kehilangan kapal). P&I Club (Protection & Indemnity) menjamin tanggung jawab hukum pemilik kapal: cedera/kematian awak kapal, polusi minyak, kerusakan dermaga akibat kapal, tanggung jawab terhadap muatan pihak ketiga, dan biaya wreck removal. Keduanya saling melengkapi dan hampir tidak ada pemilik kapal komersial yang beroperasi tanpa keduanya. Bahkan dalam ITC-H 1983, 1/4 dari collision liability yang tidak dijamin H&M harus ditutupi oleh P&I Club.',
  },
  {
    question: 'Apa itu Running Down Clause (RDC) dalam polis H&M?',
    answer: 'Running Down Clause (RDC) atau Collision Liability Clause menjamin tanggung jawab hukum pemilik kapal kepada kapal lain yang ditabrak. Dalam ITC-H standar, RDC menjamin 3/4 dari total tanggung jawab tabrakan. Sisa 1/4 dijamin oleh P&I Club. Beberapa polis menawarkan 4/4 RDC (tanggung jawab penuh) dengan premi tambahan. RDC tidak menjamin kerusakan pada bangunan pelabuhan, dermaga, atau instalasi tetap — itu masuk P&I.',
  },
  {
    question: 'Bagaimana cara menentukan Agreed Value vs Market Value untuk polis H&M?',
    answer: 'Polis H&M bisa berbasis Agreed Value (nilai yang disepakati di awal antara tertanggung dan penanggung, biasanya berdasarkan survey kapal) atau Market Value (nilai pasar kapal saat klaim). Agreed Value memberikan kepastian: jika terjadi total loss, dibayar sesuai nilai yang tertera di polis tanpa perlu negosiasi ulang nilai kapal. Ini lebih menguntungkan tertanggung, terutama untuk kapal khusus (specialized vessels) yang nilai pasarnya sulit ditentukan secara objektif.',
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
  headline: 'Asuransi Hull & Machinery (Rangka Kapal) Indonesia: Panduan Lengkap 2025',
  description: 'Panduan H&M Indonesia mencakup ITC-H 1983/2003, Running Down Clause, gap P&I Club, dan simulasi premi per jenis kapal.',
  author: { '@type': 'Person', name: 'Rio Mardiansyah', url: baseUrl },
  publisher: { '@type': 'Organization', name: 'Dunia Asuransi', url: baseUrl, telephone: '+628131556592' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/hull-machinery-insurance` },
  inLanguage: 'id-ID',
  datePublished: '2024-01-01',
  dateModified: '2025-05-01',
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Marine Insurance', item: `${baseUrl}/marine-insurance` },
    { '@type': 'ListItem', position: 3, name: 'Hull & Machinery', item: `${baseUrl}/hull-machinery-insurance` },
  ],
};

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HullMachineryPage() {
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
              <a href="/marine-insurance" className="hover:underline text-orange-300">Marine Insurance</a>
              <span className="text-slate-500">/</span>
              <span className="text-cyan-300 font-medium">Hull & Machinery</span>
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-950 via-blue-900 to-slate-900 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-400/30">
              ⚓ Asuransi Rangka Kapal — Marine Specialty Lines
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-3xl">
              Asuransi Hull & Machinery Indonesia
            </h1>
            <p className="text-lg text-cyan-100 max-w-2xl leading-relaxed mb-8">
              Perlindungan fisik kapal Anda berdasarkan standar internasional ITC-H 1983/2003 — dari badan
              kapal dan mesin penggerak hingga tanggung jawab tabrakan (Running Down Clause). Untuk pemilik
              kapal yang memahami bahwa laut adalah risiko yang tidak bisa dinegosiasi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Hull%20Machinery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"><WaIcon />Konsultasi via WA</a>
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

              {/* ITC-H Wording */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">ITC-H 1983 & 2003: Standar Internasional Wajib Dipahami</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  <strong>Institute Time Clauses — Hulls (ITC-H)</strong> adalah wording standar yang dikembangkan
                  oleh Institute of London Underwriters dan menjadi acuan global untuk semua polis Hull &
                  Machinery. Bahkan penanggung lokal Indonesia menggunakan ITC-H sebagai referensi wording
                  polis mereka.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-900 text-white rounded-xl p-5">
                    <p className="text-cyan-300 text-xs font-semibold mb-2">ITC-H 1983 (Edisi Klasik)</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">Versi yang paling banyak digunakan hingga saat ini. Mendefinisikan secara komprehensif:</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {['Perils at sea (bahaya laut)', 'Fire, explosion & lightning', 'Violent theft', 'Jettison', 'Piracy', 'Breakdown of machinery', 'Running Down Clause (RDC) — 3/4 collision', 'General Average & Salvage'].map(p => <li key={p}>• {p}</li>)}
                    </ul>
                  </div>
                  <div className="bg-blue-950 text-white rounded-xl p-5">
                    <p className="text-blue-300 text-xs font-semibold mb-2">ITC-H 2003 (Revised)</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">Pembaruan untuk risiko modern. Perubahan signifikan:</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {['Klarifikasi cakupan kerusakan mesin', 'Penanganan lebih baik untuk klaim konstruksi baru', 'Penyesuaian War & Strikes exclusion', 'Cyber risk exclusion (lebih eksplisit)', 'Lebih fleksibel untuk kapal berteknologi modern'].map(p => <li key={p}>• {p}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl p-4">
                  <p className="text-sm font-bold text-cyan-900 mb-1">📌 Versi Mana yang Digunakan Polis Anda?</p>
                  <p className="text-sm text-cyan-800 leading-relaxed">
                    Selalu periksa di halaman pertama polis H&M Anda: apakah menggunakan <strong>ITC-H 1/11/95</strong> (versi 1983
                    yang berlaku mulai 1995) atau <strong>ITC-H 2003</strong>. Perbedaan versi berdampak pada cara
                    interpretasi klaim, terutama untuk kerusakan mesin dan insiden yang melibatkan teknologi modern.
                  </p>
                </div>
              </section>

              {/* Apa yang Dijamin */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Jaminan H&M: Apa yang Dijamin dan Apa yang Tidak</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">✅ Yang Dijamin Polis H&M</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Tabrakan dengan kapal lain (RDC 3/4)',
                        'Kandas / grounding di perairan dangkal',
                        'Tenggelam & total loss kapal',
                        'Kebakaran & ledakan di kapal',
                        'Kerusakan mesin dari sebab mendadak',
                        'Badai laut & gelombang ekstrem',
                        'Pembajakan (piracy) di perairan tertentu',
                        'Kerusakan saat dok / perbaikan (endorsement)',
                        'General Average contribution',
                        'Biaya salvage & wreck removal (terbatas)',
                      ].map(item => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-700 bg-green-50 border border-green-100 rounded-lg p-2.5">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="font-bold text-slate-800 text-lg mb-3">⛔ Yang TIDAK Dijamin H&M (Masuk P&I Club)</h3>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-2">
                      {[
                        { t: '1/4 Collision Liability', d: 'Sisa tanggung jawab tabrakan yang tidak dijamin RDC (3/4) — masuk P&I Club.' },
                        { t: 'Kerusakan Dermaga & Infrastruktur', d: 'Kerusakan pada pelabuhan, dermaga, atau instalasi tetap akibat kapal — full P&I.' },
                        { t: 'Cedera & Kematian Awak Kapal', d: 'Tanggung jawab kepada crew sepenuhnya domain P&I Club.' },
                        { t: 'Polusi Minyak (Oil Spill)', d: 'Kewajiban pembersihan tumpahan minyak — salah satu risiko terbesar P&I.' },
                        { t: 'Muatan Pihak Ketiga', d: 'Tanggung jawab atas kerusakan cargo shipper — P&I. Cargo itu sendiri dijamin oleh polis kargo terpisah.' },
                      ].map(exc => (
                        <div key={exc.t} className="flex gap-3">
                          <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                          <div><p className="text-sm font-semibold text-orange-800">{exc.t}</p><p className="text-xs text-slate-600">{exc.d}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* H&M vs Freight — Diferensiasi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">H&M vs Freight Insurance: Jangan Tertukar</h2>
                <p className="text-slate-600 text-sm mb-5">Dua produk maritim yang sering disalahpahami — padahal objek dan pemilik polisnya berbeda fundamental.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Dimensi</th>
                        <th className="text-left p-3 bg-cyan-900">⚓ Hull & Machinery</th>
                        <th className="text-left p-3 bg-slate-700 rounded-tr-lg">🚢 Freight Insurance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Objek Dijamin', 'Fisik kapal (badan, mesin, perlengkapan)', 'Tanggung jawab hukum pengangkut atas muatan'],
                        ['Pemilik Polis', 'Pemilik kapal (shipowner)', 'Operator pelayaran / freight forwarder'],
                        ['Pemicu Klaim', 'Kerusakan/kehilangan fisik kapal', 'Klaim dari pemilik muatan (shipper)'],
                        ['Klausul Acuan', 'ITC-H 1983 / 2003 (London market)', 'Hague-Visby Rules, FIATA STC, P&I rules'],
                        ['Target Pembaca', 'Pemilik kapal, direktur pelayaran', 'Freight forwarder, EMKL, operator logistik'],
                        ['Hubungan dgn Kargo', 'Tidak menjamin muatan → lihat /asuransi-kargo', 'Menjamin tanggung jawab atas muatan orang lain'],
                      ].map(([dim, hm, fi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-cyan-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{dim}</td>
                          <td className="p-3 text-slate-700 border-l border-cyan-100">{hm}</td>
                          <td className="p-3 text-slate-700 border-l border-slate-100">{fi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl mt-4">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Pelajari Freight Insurance</p>
                    <p className="text-xs text-slate-500 mt-0.5">Tanggung jawab pengangkut, Hague-Visby Rules, FIATA</p>
                  </div>
                  <Link href="/freight-insurance" className="flex-shrink-0 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                    Freight →
                  </Link>
                </div>
              </section>

              {/* Simulasi Premi */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Simulasi Premi Hull & Machinery</h2>
                <p className="text-slate-600 text-sm mb-5">Berdasarkan Agreed Value kapal. Rate dipengaruhi usia, jenis, rute pelayaran, dan rekam jejak klaim.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cyan-900 text-white">
                        <th className="text-left p-3 rounded-tl-lg">Jenis Kapal</th>
                        <th className="text-left p-3">Agreed Value</th>
                        <th className="text-left p-3">Rate H&M</th>
                        <th className="text-left p-3 rounded-tr-lg">Premi/Tahun (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Kapal Tunda (Tugboat)', 'USD 500.000', '1,0 – 2,0%', 'USD 5.000 – 10.000'],
                        ['Kapal Tongkang (Barge)', 'USD 1 Juta', '0,8 – 1,5%', 'USD 8.000 – 15.000'],
                        ['Kapal Kargo (General Cargo)', 'USD 5 Juta', '0,5 – 1,0%', 'USD 25.000 – 50.000'],
                        ['Kapal Tanker (Crude/Product)', 'USD 20 Juta', '0,4 – 0,8%', 'USD 80.000 – 160.000'],
                        ['Kapal Kontainer (Feeder)', 'USD 15 Juta', '0,5 – 1,0%', 'USD 75.000 – 150.000'],
                        ['Kapal Penumpang/Ro-Ro', 'USD 10 Juta', '0,8 – 1,5%', 'USD 80.000 – 150.000'],
                      ].map(([jenis, value, rate, premi], i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-cyan-50'}`}>
                          <td className="p-3 font-semibold text-slate-800">{jenis}</td>
                          <td className="p-3 font-mono text-slate-700">{value}</td>
                          <td className="p-3 font-mono text-cyan-700">{rate}</td>
                          <td className="p-3 text-slate-700">{premi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3">* Premi dalam USD mengikuti standar penamaan internasional. Rate aktual sangat bergantung pada: usia kapal (kapal tua lebih mahal), rute (perairan domestik vs internasional vs zona konflik), rekam jejak klaim 3–5 tahun, dan kondisi survei terakhir (class certificate).</p>
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
              <p className="text-xs text-slate-400 border border-slate-100 rounded-xl p-4"><strong>Disclaimer:</strong> Informasi bersifat edukatif. Rate dan ketentuan aktual sangat bervariasi berdasarkan survei kapal, class certificate, dan kondisi underwriting market.</p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-950 to-blue-950 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">⚓</span></div>
                <h3 className="text-xl font-bold mb-2">Konsultasi H&M</h3>
                <p className="text-cyan-200 text-sm mb-5 leading-relaxed">Apakah versi ITC-H dan klausul RDC polis kapal Anda sudah tepat? Rio Mardiansyah siap membantu review struktur perlindungan armada Anda.</p>
                <a href="https://wa.me/628131556592?text=Halo%20Pak%20Rio,%20saya%20ingin%20konsultasi%20Asuransi%20Hull%20Machinery" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full mb-3"><WaIcon />WhatsApp Sekarang</a>
                <a href="tel:+628131556592" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl font-semibold transition-all w-full text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0813-1556-592
                </a>
                <p className="text-xs text-cyan-400 text-center mt-3">Rio Mardiansyah — Konsultan Asuransi Kerugian</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-800 mb-4">Marine Insurance Lainnya</h3>
                <div className="space-y-2">
                  {[
                    { href: '/freight-insurance', label: 'Freight Insurance', sub: 'Liability pengangkut & forwarder' },
                    { href: '/asuransi-kargo', label: 'Asuransi Kargo', sub: 'Perlindungan muatan / cargo' },
                    { href: '/marine-insurance', label: 'Marine Insurance', sub: 'Overview asuransi maritim' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-cyan-50 rounded-xl transition group">
                      <div><p className="font-semibold text-slate-700 group-hover:text-cyan-600 text-sm">{l.label}</p><p className="text-xs text-slate-500">{l.sub}</p></div>
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
