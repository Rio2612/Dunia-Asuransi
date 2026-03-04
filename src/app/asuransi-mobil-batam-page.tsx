import type { Metadata } from "next";
import AsuransiMobilBatamContent from "./content";

export const metadata: Metadata = {
  title: "Asuransi Mobil Batam Terbaik 2026 | All Risk & TLO",
  description:
    "Asuransi Mobil Batam dengan perlindungan All Risk dan TLO sesuai ketentuan OJK. Simulasi premi cepat dan pilihan perlindungan mobil listrik tersedia.",
  keywords: "asuransi mobil batam, asuransi kendaraan batam, asuransi mobil all risk, asuransi mobil TLO, premi asuransi mobil batam",
  openGraph: {
    title: "Asuransi Mobil Batam Terbaik 2026 | All Risk & TLO",
    description: "Asuransi Mobil Batam dengan perlindungan All Risk dan TLO sesuai ketentuan OJK.",
    type: "article",
    locale: "id_ID",
  },
};

export default function AsuransiMobilBatamPage() {
  return <AsuransiMobilBatamContent />;
}
