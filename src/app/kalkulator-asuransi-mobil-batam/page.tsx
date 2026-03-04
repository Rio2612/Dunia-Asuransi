"use client";

import { useState } from "react";

export default function KalkulatorBatam() {
  const [hargaMobil, setHargaMobil] = useState("");
  const [tipeAsuransi, setTipeAsuransi] = useState("allrisk");
  const [jenisKendaraan, setJenisKendaraan] = useState("konvensional");
  const [hasil, setHasil] = useState<number | null>(null);

  const hitungPremi = () => {
    const harga = Number(hargaMobil);
    if (!harga) return;

    // RATE ZONA 1 BATAM
    const rate = {
      allrisk: {
        konvensional: 2.47,
        listrik: 2.72,
      },
      tlo: {
        konvensional: 0.44,
        listrik: 0.48,
      },
    };

    const selectedRate =
      rate[tipeAsuransi as "allrisk" | "tlo"][
        jenisKendaraan as "konvensional" | "listrik"
      ];

    const premi = (harga * selectedRate) / 100;
    setHasil(premi);
  };

  const risikoSendiri =
    jenisKendaraan === "listrik" ? 500000 : 300000;

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold mb-8 text-center">
          Kalkulator Asuransi Mobil Batam
        </h1>

        {/* Harga Mobil */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Harga Mobil (Rp)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={hargaMobil}
            onChange={(e) =>
              setHargaMobil(
                e.target.value.replace(/[^0-9]/g, "")
              )
            }
            placeholder="Contoh: 300000000"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-slate-400 outline-none"
          />
        </div>

        {/* Jenis Kendaraan */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Jenis Kendaraan
          </label>
          <select
            value={jenisKendaraan}
            onChange={(e) =>
              setJenisKendaraan(e.target.value)
            }
            className="w-full border rounded-lg p-3"
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
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Tipe Asuransi
          </label>
          <select
            value={tipeAsuransi}
            onChange={(e) =>
              setTipeAsuransi(e.target.value)
            }
            className="w-full border rounded-lg p-3"
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

        {/* Hasil */}
        {hasil !== null && (
          <div className="mt-8 p-6 bg-slate-50 rounded-xl text-center border">
            <p className="text-lg mb-2">
              Estimasi Premi Tahunan
            </p>
            <p className="text-2xl font-bold mb-2">
              Rp {hasil.toLocaleString("id-ID")}
            </p>
            <p>
              Risiko Sendiri: Rp{" "}
              {risikoSendiri.toLocaleString("id-ID")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
