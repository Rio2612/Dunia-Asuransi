import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam Terbaik 2026 | All Risk & TLO",
  description:
    "Asuransi Mobil Batam dengan perlindungan All Risk dan TLO sesuai ketentuan OJK. Simulasi premi cepat dan pilihan perlindungan mobil listrik tersedia.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Asuransi Mobil Batam
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            Perlindungan All Risk dan Total Loss Only untuk kendaraan pribadi,
            perusahaan, dan mobil listrik di wilayah Batam dan Kepulauan Riau.
          </p>

          <Link
            href="/kalkulator-asuransi-mobil-batam"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Hitung Premi Sekarang
          </Link>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih Asuransi Mobil di Batam?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Perlindungan Menyeluruh
              </h3>
              <p>
                Jaminan kerusakan ringan, berat, hingga kehilangan total sesuai
                jenis pertanggungan yang dipilih.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Tarif Sesuai OJK
              </h3>
              <p>
                Premi mengikuti ketentuan wilayah Zona 1 sehingga transparan
                dan sesuai regulasi resmi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Dukungan Klaim
              </h3>
              <p>
                Proses klaim dibantu hingga selesai agar kendaraan cepat
                kembali digunakan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* JENIS PERLINDUNGAN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto leading-8">

          <h2 className="text-3xl font-bold mb-6">
            Pilihan Perlindungan Asuransi Mobil
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            All Risk (Comprehensive)
          </h3>
          <p>
            Menjamin kerusakan sebagian maupun total akibat kecelakaan,
            benturan, tergores, hingga risiko lain yang dijamin dalam polis.
            Cocok untuk mobil baru atau kendaraan dengan nilai tinggi.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Total Loss Only (TLO)
          </h3>
          <p>
            Menjamin kehilangan atau kerusakan di atas 75% dari nilai kendaraan.
            Pilihan ekonomis untuk mobil dengan usia lebih dari 5–8 tahun.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Asuransi Mobil Listrik di Batam
          </h3>
          <p>
            Untuk kendaraan listrik, premi dihitung menggunakan batas atas
            tarif sesuai ketentuan OJK. Risiko sendiri ditetapkan sebesar
            Rp 500.000 per kejadian.
          </p>

        </div>
      </section>

      {/* CTA VISUAL */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ingin Tahu Estimasi Premi Anda?
          </h2>
          <p className="text-slate-300 mb-8">
            Gunakan kalkulator premi untuk mengetahui estimasi biaya
            perlindungan kendaraan Anda secara instan.
          </p>

          <Link
            href="/kalkulator-asuransi-mobil-batam"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Buka Kalkulator Premi
          </Link>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto leading-8">
          <h2 className="text-2xl font-bold mb-6">
            Berapa Premi Asuransi Mobil di Batam?
          </h2>
          <p>
            Besaran premi asuransi mobil di Batam ditentukan berdasarkan nilai
            kendaraan, jenis pertanggungan, dan kategori wilayah. Batam
            termasuk Zona 1 dalam perhitungan tarif OJK.
          </p>

          <p className="mt-4">
            Untuk kendaraan listrik, digunakan tarif batas atas sesuai regulasi,
            dengan risiko sendiri Rp 500.000 per kejadian. Sementara untuk mobil
            konvensional, risiko sendiri umumnya Rp 300.000 per kejadian.
          </p>
        </div>
      </section>

    </main>
  );
}
