"use client";

import { useState } from "react";

export default function KalkulatorBatam() {
  const [open, setOpen] = useState(false);
  const [harga, setHarga] = useState<number | "">("");
  const [jenis, setJenis] = useState<"allrisk" | "tlo">("allrisk");
  const [hasil, setHasil] = useState<number | null>(null);

  // 🔥 GANTI RATE SESUAI PDF ZONA 1
  const rateAllRisk = 0.038; 
  const rateTLO = 0.008;     

  const hitungPremi = () => {
    if (!harga || harga <= 0) {
      alert("Masukkan harga kendaraan terlebih dahulu");
      return;
    }

    let premi =
      jenis === "allrisk"
        ? harga * rateAllRisk
        : harga * rateTLO;

    // Tambah admin + polis + materai
    premi += 100000;

    premi = Math.round(premi);
    setHasil(premi);

    const pesan = `Halo, saya ingin konsultasi Asuransi Mobil Batam.
Harga Kendaraan: Rp ${harga.toLocaleString("id-ID")}
Jenis: ${jenis.toUpperCase()}
Estimasi Premi: Rp ${premi.toLocaleString("id-ID")}`;

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
        className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-700 transition z-50"
      >
        Hitung Premi Batam
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-xl relative">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-lg"
            >
              ✖
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Simulasi Premi Zona 1 (Batam)
            </h3>

            <label className="block text-sm mb-1">
              Harga Kendaraan (Rp)
            </label>
            <input
              type="number"
              value={harga}
              onChange={(e) =>
                setHarga(e.target.value ? parseInt(e.target.value) : "")
              }
              className="w-full border p-2 rounded mb-3"
              placeholder="300000000"
            />

            <label className="block text-sm mb-1">
              Jenis Pertanggungan
            </label>
            <select
              value={jenis}
              onChange={(e) =>
                setJenis(e.target.value as "allrisk" | "tlo")
              }
              className="w-full border p-2 rounded mb-4"
            >
              <option value="allrisk">All Risk</option>
              <option value="tlo">TLO</option>
            </select>

            <button
              onClick={hitungPremi}
              className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-700 transition"
            >
              Hitung & Kirim ke WhatsApp
            </button>

            {hasil && (
              <p className="mt-4 font-semibold text-center">
                Total Estimasi Premi: Rp{" "}
                {hasil.toLocaleString("id-ID")}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
