import type { Metadata } from "next";
import KalkulatorBatam from "@/components/KalkulatorBatam";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam | All Risk & TLO Resmi",
  description:
    "Asuransi Mobil Batam dengan pilihan All Risk dan TLO sesuai ketentuan OJK. Cek estimasi premi dan konsultasi gratis via WhatsApp.",
  keywords:
    "Asuransi Mobil Batam, Premi Asuransi Mobil Batam, All Risk Batam, TLO Batam",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 leading-8">
      <h1 className="text-3xl font-bold mb-6">
        Asuransi Mobil Batam
      </h1>

      <p className="mb-4">
        Asuransi Mobil Batam memberikan perlindungan terhadap risiko
        kerusakan maupun kehilangan kendaraan akibat kecelakaan,
        pencurian, kebakaran, hingga bencana alam.
      </p>

      <p className="mb-6">
        Perlindungan tersedia melalui jaringan mitra perusahaan
        asuransi resmi di Indonesia, dengan proses yang dapat
        dibantu tim rekanan di Batam dan Kepulauan Riau.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Jenis Pertanggungan
      </h2>

      <h3 className="text-xl font-semibold mt-4">
        1. All Risk (Comprehensive)
      </h3>
      <p className="mb-4">
        Menjamin kerusakan ringan hingga berat, termasuk lecet,
        tabrakan, dan kehilangan total. Umumnya digunakan untuk
        kendaraan usia 0–8 tahun.
      </p>

      <h3 className="text-xl font-semibold mt-4">
        2. Total Loss Only (TLO)
      </h3>
      <p className="mb-6">
        Menjamin kerugian jika kendaraan hilang atau mengalami
        kerusakan lebih dari 75% dari nilai kendaraan. Cocok untuk
        kendaraan usia di atas 8 tahun atau yang ingin premi lebih
        terjangkau.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Faktor Penentu Premi
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Nilai kendaraan</li>
        <li>Tahun pembuatan</li>
        <li>Wilayah penggunaan (Zona 1 Batam)</li>
        <li>Jenis pertanggungan</li>
        <li>Perluasan jaminan tambahan</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Mengapa Konsultasi Dengan Kami?
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Respon cepat via WhatsApp</li>
        <li>Dibantu rekanan di Batam</li>
        <li>Pendampingan proses klaim</li>
        <li>Simulasi premi transparan</li>
      </ul>

      <div className="bg-slate-100 p-6 rounded-lg mt-8">
        <p className="font-semibold">
          Untuk memahami perlindungan kendaraan secara umum,
          baca juga panduan lengkap kami tentang{" "}
          <a
            href="/motor-vehicle-insurance"
            className="text-blue-600 underline"
          >
            Asuransi Kendaraan Bermotor
          </a>.
        </p>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://wa.me/628131556592"
          target="_blank"
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          Konsultasi Gratis via WhatsApp
        </a>
      </div>

      {/* Popup Kalkulator */}
      <KalkulatorBatam />
    </main>
  );
}
