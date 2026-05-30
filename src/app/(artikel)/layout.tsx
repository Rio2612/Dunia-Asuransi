// Simpan file ini di: src/app/(artikel)/layout.tsx
// Pindahkan semua halaman artikel ke dalam folder (artikel):
// src/app/(artikel)/marine-insurance/page.tsx
// src/app/(artikel)/asuransi-kargo/page.tsx
// dst...

import HeaderArticle from "@/components/HeaderArticle";
import Footer from "@/components/Footer";

export default function ArtikelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderArticle />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
