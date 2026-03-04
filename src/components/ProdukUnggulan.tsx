'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Ship, 
  Building2, 
  Scale, 
  FileText, 
  Factory, 
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

const productCategories = [
  {
    id: 'marine',
    title: 'Marine Insurance',
    description: 'Perlindungan untuk pengangkutan laut, kapal, dan aktivitas maritim.',
    icon: Ship,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    products: [
      { name: 'Marine Cargo Insurance', href: '/asuransi-kargo' },
      { name: 'Hull & Machinery', href: '/hull-machinery-insurance' },
      { name: 'Freight Insurance', href: '/freight-insurance' },
      { name: 'Protection & Indemnity', href: '/protection-indemnity' },
    ],
  },
  {
    id: 'property',
    title: 'Property Insurance',
    description: 'Perlindungan properti komersial dan industri dari berbagai risiko.',
    icon: Building2,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    products: [
      { name: 'Property All Risk', href: '/property-all-risk' },
      { name: 'Industrial All Risk', href: '/industrial-all-risk' },
      { name: 'Business Interruption', href: '/business-interruption' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering Insurance',
    description: 'Perlindungan proyek konstruksi, pemasangan, dan mesin industri.',
    icon: Factory,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    products: [
      { name: 'Construction All Risk', href: '/asuransi-car-indonesia' },
      { name: 'Erection All Risk', href: '/asuransi-ear' },
      { name: 'Machinery Breakdown', href: '/asuransi-machinery-breakdown' },
      { name: 'Machinery Loss of Profit', href: '/machinery-loss-of-profit' },
    ],
  },
  {
    id: 'liability',
    title: 'Liability Insurance',
    description: 'Perlindungan tanggung jawab hukum terhadap pihak ketiga.',
    icon: Scale,
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
    products: [
      { name: 'Public Liability', href: '/asuransi-public-liability' },
      { name: 'Product Liability', href: '/asuransi-product-liability' },
      { name: 'Professional Indemnity', href: '/asuransi-professional-indemnity' },
      { name: 'Directors & Officers', href: '/directors-officers-liability' },
    ],
  },
  {
    id: 'surety',
    title: 'Surety Bond',
    description: 'Jaminan untuk keperluan tender dan proyek konstruksi.',
    icon: FileText,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    products: [
      { name: 'Jaminan Penawaran', href: '/jaminan-penawaran' },
      { name: 'Jaminan Pelaksanaan', href: '/jaminan-pelaksanaan' },
      { name: 'Jaminan Uang Muka', href: '/jaminan-uang-muka' },
      { name: 'Jaminan Pemeliharaan', href: '/jaminan-pemeliharaan' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProdukUnggulan() {
  return (
      <section id="produk-unggulan" className="py-16 md:py-24 bg-white">
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
              Produk Asuransi
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilihan{' '}
              <span className="text-primary">Perlindungan Lengkap</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Berbagai produk asuransi untuk kebutuhan bisnis dan individu Anda. Klik kategori untuk melihat detail produk.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Card className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${category.borderColor} shadow-md group`}>
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      {category.description}
                    </p>

                    {/* Products List */}
                    <ul className="space-y-2 mb-4">
                      {category.products.map((product, index) => (
                        <li key={index}>
                          <a 
                            href={product.href}
                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors group/link"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="group-hover/link:underline">{product.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* View All Link */}
                    <a 
                      href={category.products[0].href}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      Lihat Semua Produk
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Butuh produk asuransi lainnya? Hubungi saya untuk konsultasi.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/628131556592?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20produk%20asuransi', '_blank')}
            >
              Konsultasi via WhatsApp
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    )
}
