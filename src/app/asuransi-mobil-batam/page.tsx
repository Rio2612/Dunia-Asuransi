import type { Metadata } from "next";
import KalkulatorBatam from "@/components/KalkulatorBatam";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam | All Risk & TLO Terbaik",
  description:
    "Asuransi Mobil Batam dengan perlindungan All Risk dan TLO sesuai ketentuan OJK. Simulasi premi cepat dan konsultasi langsung via WhatsApp.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asuransi Mobil Batam
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Perlindungan All Risk & TLO untuk kendaraan pribadi dan perusahaan 
            di wilayah Batam dan Kepulauan Riau.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/628131556592"
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Konsultasi Gratis
            </a>

            <button
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </section>

      {/* PENJELASAN */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Pilihan Perlindungan
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ALL RISK */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              All Risk (Comprehensive)
            </h3>
            <p>
              Menjamin kerusakan ringan hingga berat, termasuk lecet,
              tabrakan, hingga kehilangan total. Cocok untuk kendaraan
              usia 0–8 tahun.
            </p>
          </div>

          {/* TLO */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Total Loss Only (TLO)
            </h3>
            <p>
              Menjamin kehilangan atau kerusakan di atas 75% dari nilai
              kendaraan. Pilihan tepat untuk premi lebih ekonomis atau
              kendaraan usia di atas 8 tahun.
            </p>
          </div>

        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Mengapa Pilih Kami?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Respon Cepat</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🤝</div>
              <p className="font-semibold">Dibantu Rekanan Batam</p>
            </div>

            <div>
              <div className="text-3xl mb-2">📄</div>
              <p className="font-semibold">Simulasi Transparan</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🛠</div>
              <p className="font-semibold">Pendampingan Klaim</p>
            </div>

          </div>
        </div>
      </section>

      {/* EDUKASI SEO SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 leading-8">
        <h2 className="text-2xl font-bold mb-4">
          Asuransi Mobil di Batam Sesuai Ketentuan OJK
        </h2>
        <p className="mb-4">
          Perhitungan premi asuransi mobil di Batam mengikuti kategori
          wilayah Zona 1. Besaran premi ditentukan berdasarkan nilai
          kendaraan, usia kendaraan, serta jenis pertanggungan yang dipilih.
        </p>

        <p className="mb-4">
          Untuk memahami perlindungan kendaraan secara umum,
          Anda dapat membaca panduan lengkap kami tentang{" "}
          <Link
            href="/motor-vehicle-insurance"
            className="text-emerald-600 underline"
          >
            Asuransi Kendaraan Bermotor
          </Link>.
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/628131556592"
            target="_blank"
            className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      {/* POPUP KALKULATOR */}
      <KalkulatorBatam />

    </main>
  );
}
