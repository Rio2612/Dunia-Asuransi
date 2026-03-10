import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProdukUnggulan from '@/components/ProdukUnggulan'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const baseUrl = "https://www.duniaasuransi.com"

const faqData = [
  {
    question: "Apa itu Dunia Asuransi?",
    answer: "Dunia Asuransi adalah layanan konsultan asuransi profesional yang dipimpin oleh Rio Mardiansyah dengan pengalaman lebih dari 10 tahun di industri asuransi."
  },
  {
    question: "Produk asuransi apa saja yang tersedia?",
    answer: "Produk yang tersedia meliputi Asuransi Motor Vehicle, Asuransi Kebakaran, Asuransi Kargo, Asuransi Liability, Surety Bond, dan Asuransi Engineering."
  },
  {
    question: "Apakah konsultasi asuransi berbayar?",
    answer: "Tidak. Konsultasi asuransi di Dunia Asuransi sepenuhnya gratis untuk membantu klien memilih perlindungan terbaik."
  },
  {
    question: "Bagaimana cara menghubungi Dunia Asuransi?",
    answer: "Anda dapat menghubungi melalui WhatsApp di nomor 0813-1556-592 untuk konsultasi langsung dengan tim Dunia Asuransi."
  }
]

// Skema FAQ: Menggabungkan semua pertanyaan menjadi SATU objek
const faqSchema = {
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
}

// Skema Service
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Konsultan Asuransi Indonesia",
  "provider": {
    "@type": "Organization",
    "name": "Dunia Asuransi",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produk Asuransi",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Motor Vehicle"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Kebakaran"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Kargo"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Surety Bond"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asuransi Engineering"
        }
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      {/* 
          PERHATIAN: 
          Kode di bawah ini sudah benar (hanya merender 1 script FAQ).
          Jika di Google Search Console masih terdeteksi duplikat,
          cek file _app.js atau layout.js, hapus script FAQ di sana.
      */}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
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
