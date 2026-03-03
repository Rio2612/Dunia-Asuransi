"use client";

import { useState } from "react";

export default function KalkulatorBatam() {
  const [open, setOpen] = useState(false);
  const [harga, setHarga] = useState<number>(0);
  const [tahun, setTahun] = useState<number>(2024);
  const [jenis, setJenis] = useState("allrisk");
  const [banjir, setBanjir] = useState(false);
  const [gempa, setGempa] = useState(false);
  const [srcc, setSrcc] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const usia = currentYear - tahun;

  // 🔥 RATE ZONA 1 (EDIT SESUAI PDF OJK)
  const rateAllRisk = 0.038;
  const rateTLO = 0.008;
  const rateTPL = 0.001; // contoh 0.1%

  const rateBanjir = 0.001;
  const rateGempa = 0.001;
  const rateSRCC = 0.0005;

  const biayaAdmin = 100000;

  const hitung = () => {
    if (!harga || harga <= 0) {
      alert("Masukkan harga kendaraan");
      return;
    }

    if (usia > 8) {
      setJenis("tlo");
    }

    let premi =
      jenis === "allrisk"
        ? harga * rateAllRisk
        : harga * rateTLO;

    // TPL otomatis 25 juta
    premi += harga * rateTPL;

    // Perluasan
    if (banjir) premi += harga * rateBanjir;
    if (gempa) premi += harga * rateGempa;
    if (srcc) premi += harga * rateSRCC;

    premi += biayaAdmin;

    setTotal(Math.round(premi));
  };

  const kirimWA = () => {
    if (!total) return;

    const pesan = `
Halo, saya ingin Asuransi Mobil Batam

Harga: Rp ${harga.toLocaleString("id-ID")}
Tahun: ${tahun}
Jenis: ${jenis.toUpperCase()}
Perluasan:
- Banjir: ${banjir ? "Ya" : "Tidak"}
- Gempa: ${gempa ? "Ya" : "Tidak"}
- SRCC: ${srcc ? "Ya" : "Tidak"}

Estimasi Premi: Rp ${total.toLocaleString("id-ID")}
`;

    window.open(
      `https://wa.me/628131556592?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 text-white px-5 py-3 rounded-full shadow-xl hover:bg-emerald-700 transition z-50"
      >
        Simulasi Premi Batam
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] max-w-lg rounded-2xl p-6 shadow-2xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              Kalkulator Asuransi Mobil Batam
            </h3>

            {usia > 8 && (
              <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4 text-sm">
                Kendaraan usia di atas 8 tahun hanya tersedia TLO.
              </div>
            )}

            <input
              type="number"
              placeholder="Harga Kendaraan (Rp)"
              className="w-full border p-3 rounded mb-3"
              onChange={(e) => setHarga(Number(e.target.value))}
            />

            <input
              type="number"
              placeholder="Tahun Kendaraan"
              className="w-full border p-3 rounded mb-3"
              onChange={(e) => setTahun(Number(e.target.value))}
            />

            <select
              className="w-full border p-3 rounded mb-4"
              value={usia > 8 ? "tlo" : jenis}
              onChange={(e) => setJenis(e.target.value)}
              disabled={usia > 8}
            >
              <option value="allrisk">All Risk</option>
              <option value="tlo">TLO</option>
            </select>

            <div className="mb-4">
              <p className="font-semibold mb-2">Perluasan:</p>
              <label className="block">
                <input type="checkbox" onChange={() => setBanjir(!banjir)} /> Banjir
              </label>
              <label className="block">
                <input type="checkbox" onChange={() => setGempa(!gempa)} /> Gempa
              </label>
              <label className="block">
                <input type="checkbox" onChange={() => setSrcc(!srcc)} /> SRCC
              </label>
            </div>

            <button
              onClick={hitung}
              className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700 transition"
            >
              Hitung Premi
            </button>

            {total && (
              <div className="mt-5 text-center">
                <p className="text-lg font-bold">
                  Total Premi: Rp {total.toLocaleString("id-ID")}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  Termasuk TPL 25 juta + Admin Rp100.000
                </p>
                <button
                  onClick={kirimWA}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
