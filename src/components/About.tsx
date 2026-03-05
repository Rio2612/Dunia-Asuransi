'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { 
  Target, 
  Heart, 
  Award,
  ArrowRight,
  MessageCircle,
  Shield,
  Users,
  Briefcase
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Visi Saya',
    description: 'Membangun platform dan solusi asuransi yang transparan, profesional, dan berorientasi pada perlindungan jangka panjang.',
  },
  {
    icon: Heart,
    title: 'Misi Saya',
    description: 'Membangun hubungan jangka panjang berbasis kepercayaan dengan setiap klien yang saya layani.',
  },
  {
    icon: Award,
    title: 'Komitmen',
    description: 'Saya berkomitmen untuk selalu siap membantu, memberikan informasi jujur, dan mendampingi klien hingga proses klaim selesai.',
  },
]

const highlights = [
  {
    icon: Shield,
    title: 'Spesialis Asuransi Kerugian',
    description: 'Fokus pada asuransi properti, marine, liability, dan engineering',
  },
  {
    icon: Users,
    title: '500+ Klien Terlayani',
    description: 'Dari individu hingga perusahaan besar',
  },
  {
    icon: Briefcase,
    title: 'Penanganan Klaim',
    description: 'Pendampingan penuh dari awal hingga klaim selesai',
  },
]

const whatsappNumber = '628131556592'

export default function About() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <section id="tentang" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Tentang Saya
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kenali{' '}
            <span className="text-primary">Rio Mardiansyah</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mitra asuransi Anda dengan pengalaman 10+ tahun di industri asuransi kerugian
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-primary/10">
              {/* Profile Header with Photo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex-shrink-0">
                  <Image
                    src="/foto-rio.jpg"
                    alt="Rio Mardiansyah - Konsultasi Asuransi dengan pengalaman 10+ tahun di Dunia Asuransi"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Rio Mardiansyah</h3>
                  <p className="text-primary font-medium">Dunia Asuransi</p>
                  <p className="text-sm text-muted-foreground">10+ Tahun Pengalaman</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Saya memiliki pengalaman <strong>10 tahun</strong> bekerja di bidang 
                Asuransi Kerugian dengan fokus pada pemasaran. Saya telah membantu 
                banyak klien dalam penanganan <strong>penjualan maupun klaim</strong> asuransi. 
                Dengan pengalaman yang saya miliki, saya siap membantu Anda mendapatkan 
                perlindungan yang tepat dan mendampingi setiap proses hingga selesai.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <highlight.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{highlight.title}</span>
                      <span className="text-xs text-muted-foreground block">{highlight.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Saya via WhatsApp
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary/5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Additional CTA */}
            <div className="pt-4">
              <p className="text-muted-foreground text-sm mb-4">
                Punya pertanyaan tentang produk asuransi? Jangan ragu untuk menghubungi saya.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleWhatsApp}>
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Klien Terlayani</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Produk Asuransi</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Tersedia via WA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
