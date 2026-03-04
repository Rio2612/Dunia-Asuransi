"use client";

import { useState } from "react";

export default function Page() {
  const [hargaMobil, setHargaMobil] = useState<number>(0);
  const [tipeAsuransi, setTipeAsuransi] = useState("allrisk");
  const [jenisKendaraan, setJenisKendaraan] = useState("konvensional");
  const [hasil, setHasil] = useState<number | null>(null);

  const hitungPremi = () => {
    if (!hargaMobil) return;

    // RATE ZONA 1 (BATAM)
    const rateAllRiskBawah = 2.47;
    const rateAllRiskAtas = 2.72;
    const rateTLOBawah = 0.44;
    const rateTLOAtas = 0.48;

    let rate = 0;

    if (tipeAsuransi === "allrisk") {
      rate =
        jenisKendaraan === "listrik"
          ? rateAllRiskAtas
          : rateAllRiskBawah;
    }

    if (tipeAsuransi === "tlo") {
      rate =
        jenisKendaraan === "listrik"
          ? rateTLOAtas
          : rateTLOBawah;
    }

    const premi = (hargaMobil * rate) / 100;
    setHasil(premi);
  };

  const risikoSendiri =
    jenisKendaraan === "listrik" ? 500000 : 300000;

  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Asuransi Mobil Batam
        </h1>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Perlindungan All Risk dan TLO untuk mobil konvensional
          maupun mobil listrik di wilayah Batam dan Kepulauan Riau.
        </p>
      </section>

      {/* KALKULATOR */}
      <section className="max-w-2xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold mb-8 text-center">
          Simulasi Premi Asuransi Mobil
        </h2>

        <div className="space-y-6">

          {/* Harga Mobil */}
          <div>
            <label className="block mb-2 font-semibold">
              Harga Mobil (Rp)
            </label>
            <input
              type="number"
              value={hargaMobil}
              onChange={(e) =>
                setHargaMobil(Number(e.target.value))
              }
              className="w-full border p-3 rounded-lg"
              placeholder="Contoh: 300000000"
            />
          </div>

          {/* Jenis Kendaraan */}
          <div>
            <label className="block mb-2 font-semibold">
              Jenis Kendaraan
            </label>
            <select
              value={jenisKendaraan}
              onChange={(e) =>
                setJenisKendaraan(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            >
              <option value="konvensional">
                Mobil Konvensional
              </option>
              <option value="listrik">
                Mobil Listrik
              </option>
            </select>
          </div>

          {/* Tipe Asuransi */}
          <div>
            <label className="block mb-2 font-semibold">
              Tipe Asuransi
            </label>
            <select
              value={tipeAsuransi}
              onChange={(e) =>
                setTipeAsuransi(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            >
              <option value="allrisk">
                All Risk (Comprehensive)
              </option>
              <option value="tlo">
                Total Loss Only (TLO)
              </option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={hitungPremi}
            className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700 transition"
          >
            Hitung Premi
          </button>

        </div>

        {/* HASIL */}
        {hasil !== null && (
          <div className="mt-10 p-6 border rounded-2xl bg-slate-50 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Estimasi Premi Tahunan
            </h3>
            <p className="text-2xl font-bold mb-2">
              Rp {hasil.toLocaleString("id-ID")}
            </p>
            <p>
              Risiko Sendiri: Rp{" "}
              {risikoSendiri.toLocaleString("id-ID")}
            </p>
          </div>
        )}
      </section>

      {/* EDUKASI */}
      <section className="max-w-3xl mx-auto px-6 pb-20 leading-8">
        <h2 className="text-2xl font-bold mb-4">
          Asuransi Mobil Listrik di Batam
        </h2>
        <p className="mb-4">
          Untuk kendaraan listrik, perhitungan premi menggunakan
          batas atas tarif sesuai ketentuan OJK. Risiko sendiri
          ditetapkan sebesar Rp 500.000 per kejadian.
        </p>

        <p>
          Premi asuransi mobil di Batam mengikuti kategori
          wilayah Zona 1 dan ditentukan berdasarkan nilai kendaraan
          serta jenis pertanggungan yang dipilih.
        </p>
      </section>

    </main>
  );
}
