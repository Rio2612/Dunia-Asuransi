import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProdukUnggulan from '@/components/ProdukUnggulan'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// FAQ Schema untuk Homepage (Diperbarui)
const faqData = [
  {
    question: 'Apa itu Dunia Asuransi?',
    answer: 'Dunia Asuransi adalah layanan konsultan asuransi profesional yang dipimpin oleh Rio Mardiansyah dengan pengalaman lebih dari 10 tahun di industri asuransi. Kami menyediakan berbagai produk asuransi termasuk asuransi motor vehicle, asuransi kebakaran, asuransi kargo, asuransi kecelakaan, asuransi liability, surety bond, dan asuransi engineering untuk klien di seluruh Indonesia.'
  },
  {
    question: 'Apa saja produk asuransi yang tersedia di Dunia Asuransi?',
    answer: 'Dunia Asuransi menyediakan berbagai produk asuransi meliputi: Asuransi Motor Vehicle (Mobil, Excavator, Bulldozer, Wheel Loader, Crane), Asuransi Kebakaran/Property, Asuransi Kargo/Marine Cargo, Asuransi Kecelakaan, Asuransi Liability (Public, Product, Professional Indemnity), Surety Bond (Jaminan Penawaran, Pelaksanaan, Uang Muka, Pemeliharaan), dan Asuransi Engineering (CAR, EAR, Machinery Breakdown).'
  },
  {
    question: 'Apa itu Asuransi Motor Vehicle dan apa saja cakupannya?', // FAQ Baru untuk Cluster
    answer: 'Asuransi Motor Vehicle di Dunia Asuransi mencakup perlindungan untuk berbagai jenis kendaraan, mulai dari kendaraan pribadi hingga alat berat konstruksi. Produk kami meliputi Asuransi Mobil, Asuransi Excavator, Asuransi Bulldozer, Asuransi Wheel Loader, dan Asuransi Crane yang dirancang untuk melindungi aset operasional bisnis Anda.'
  },
  {
    question: 'Bagaimana cara menghubungi Dunia Asuransi?',
    answer: 'Anda dapat menghubungi Dunia Asuransi melalui WhatsApp di nomor 0813-1556-592 atau telepon langsung ke nomor yang sama. Tim kami siap membantu konsultasi asuransi secara gratis untuk membantu Anda memilih perlindungan yang tepat sesuai kebutuhan.'
  },
  {
    question: 'Apakah konsultasi asuransi di Dunia Asuransi berbayar?',
    answer: 'Tidak, konsultasi asuransi di Dunia Asuransi tidak dikenakan biaya. Tim kami siap membantu Anda menganalisis kebutuhan perlindungan dan memberikan rekomendasi produk asuransi yang sesuai dengan profil risiko dan budget Anda tanpa biaya konsultasi.'
  },
  {
    question: 'Di mana lokasi Dunia Asuransi?',
    answer: 'Dunia Asuransi berlokasi di Batam, Kepulauan Riau, Indonesia. Meskipun berkantor pusat di Batam, kami melayani klien dari seluruh wilayah Indonesia melalui konsultasi online via WhatsApp dan telepon.'
  },
  {
    question: 'Mengapa harus memilih Dunia Asuransi?',
    answer: 'Dunia Asuransi memiliki pengalaman lebih dari 10 tahun di industri asuransi dengan lebih dari 500 klien yang telah dilayani. Kami menawarkan pelayanan personal, proses klaim mudah, premi kompetitif, dan konsultasi gratis dari tim profesional yang berpengalaman di berbagai jenis asuransi.'
  }
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Schema Baru: Struktur Layanan (Service) untuk Cluster Motor Vehicle
// Ini membantu Google memahami detail layanan spesifik yang Anda tawarkan
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Asuransi Motor Vehicle",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Dunia Asuransi",
    "telephone": "+628131556592",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Batam",
      "addressRegion": "Kepulauan Riau",
      "addressCountry": "ID"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Jenis Asuransi Motor Vehicle",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Mobil"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Excavator"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Bulldozer"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Wheel Loader"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Crane"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      {/* Schema Service Baru untuk Motor Vehicle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        {/* 
           CATATAN: 
           Untuk menampilkan tombol/link cluster baru di halaman website, 
           Anda perlu mengedit file komponen 'ProdukUnggulan.tsx'.
           Di file ini, struktur visual tidak berubah, hanya SEO saja yang diperkuat.
        */}
        <ProdukUnggulan />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
