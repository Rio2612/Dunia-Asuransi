"use client";

import { useState } from "react";

export default function KalkulatorBatamPro() {
  const [hargaMobil, setHargaMobil] = useState("");
  const [tipeAsuransi, setTipeAsuransi] = useState("allrisk");
  const [jenisKendaraan, setJenisKendaraan] = useState("konvensional");
  const [perluasan, setPerluasan] = useState(false);
  const [tplLimit, setTplLimit] = useState("0");
  const [hasil, setHasil] = useState<any>(null);

  const hitungPremi = () => {
    const harga = Number(hargaMobil);
    if (!harga) return;

    const rate = {
      allrisk: { konvensional: 2.47, listrik: 2.72 },
      tlo: { konvensional: 0.44, listrik: 0.48 },
    };

    const selectedRate =
      rate[tipeAsuransi as "allrisk" | "tlo"][
        jenisKendaraan as "konvensional" | "listrik"
      ];

    let premiDasar = (harga * selectedRate) / 100;

    // Perluasan 0.15%
    let premiPerluasan = perluasan ? (harga * 0.15) / 100 : 0;

    // TPL berdasarkan limit
    let premiTpl = 0;
    if (tplLimit === "10000000") premiTpl = 150000;
    if (tplLimit === "25000000") premiTpl = 250000;
    if (tplLimit === "50000000") premiTpl = 400000;

    const subtotal = premiDasar + premiPerluasan + premiTpl;

    // Diskon marketing 5%
    const diskon = subtotal * 0.05;

    const admin = 25000;

    const total = subtotal - diskon + admin;

    setHasil({
      premiDasar,
      premiPerluasan,
      premiTpl,
      diskon,
      admin,
      total,
    });
  };

  const risikoSendiri =
    jenisKendaraan === "listrik" ? 500000 : 300000;

  const kirimWA = () => {
    if (!hasil) return;

    const pesan = `
Simulasi Asuransi Mobil Batam:

Harga Mobil: Rp ${Number(hargaMobil).toLocaleString("id-ID")}
Tipe: ${tipeAsuransi}
Jenis: ${jenisKendaraan}
Total Premi: Rp ${hasil.total.toLocaleString("id-ID")}

Mohon penawaran terbaiknya.
    `;

    window.open(
      `https://wa.me/628131556592?text=${encodeURIComponent(pesan)}`
    );
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold mb-8 text-center">
          Kalkulator Asuransi Mobil Batam
        </h1>

        {/* INPUT */}
        <div className="space-y-5">

          <input
            type="text"
            inputMode="numeric"
            value={hargaMobil}
            onChange={(e) =>
              setHargaMobil(e.target.value.replace(/[^0-9]/g, ""))
            }
            placeholder="Harga Mobil (Rp)"
            className="w-full border p-3 rounded-lg"
          />

          <select
            value={jenisKendaraan}
            onChange={(e) => setJenisKendaraan(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="konvensional">Mobil Konvensional</option>
            <option value="listrik">Mobil Listrik</option>
          </select>

          <select
            value={tipeAsuransi}
            onChange={(e) => setTipeAsuransi(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="allrisk">All Risk</option>
            <option value="tlo">TLO</option>
          </select>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={perluasan}
              onChange={() => setPerluasan(!perluasan)}
            />
            <label>Tambah Perluasan (Banjir, Gempa, Huru-Hara)</label>
          </div>

          <select
            value={tplLimit}
            onChange={(e) => setTplLimit(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="0">Tanpa TPL</option>
            <option value="10000000">TPL 10 Juta</option>
            <option value="25000000">TPL 25 Juta</option>
            <option value="50000000">TPL 50 Juta</option>
          </select>

          <button
            onClick={hitungPremi}
            className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700"
          >
            Hitung Estimasi Premi
          </button>
        </div>

        {/* HASIL */}
        {hasil && (
          <div className="mt-8 p-6 bg-slate-50 rounded-xl border">

            <h2 className="text-lg font-semibold mb-4">
              Rincian Estimasi Premi
            </h2>

            <div className="space-y-2 text-sm">
              <p>Premi Dasar: Rp {hasil.premiDasar.toLocaleString("id-ID")}</p>
              <p>Perluasan: Rp {hasil.premiPerluasan.toLocaleString("id-ID")}</p>
              <p>TPL: Rp {hasil.premiTpl.toLocaleString("id-ID")}</p>
              <p className="text-emerald-600">
                Diskon 5%: - Rp {hasil.diskon.toLocaleString("id-ID")}
              </p>
              <p>Admin Polis: Rp {hasil.admin.toLocaleString("id-ID")}</p>
              <hr />
              <p className="text-lg font-bold">
                Total: Rp {hasil.total.toLocaleString("id-ID")}
              </p>
              <p>
                Risiko Sendiri: Rp {risikoSendiri.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="mt-6 bg-emerald-50 p-4 rounded-lg text-emerald-700 text-sm">
              🎉 <strong>Harga masih bisa lebih hemat!</strong><br />
              Hubungi kami sekarang untuk penawaran khusus & diskon tambahan.
            </div>

            <button
              onClick={kirimWA}
              className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
            >
              Dapatkan Penawaran Terbaik via WhatsApp
            </button>

          </div>
        )}
      </div>
    </main>
  );
}
