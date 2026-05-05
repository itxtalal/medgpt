'use client'
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const AdvanceFeatureSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden bg-glow">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-colors" />
            <div className="relative glass-dark p-3 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
              <Image
                src="https://cdn.clinicallab.com/assets/articleNo/26822/aImg/50361/near-infrared-spectroscopy-for-noninvasive-intracranial-pressure-monitoring-x.webp?t=1722848415836"
                alt="Advanced Image Recognition"
                width={800}
                height={600}
                className="rounded-[2.5rem] object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <CheckCircle2 className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">AI Accuracy Verified</p>
                    <p className="text-xs text-foreground/60">99.2% precision in stroke indicators</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Advanced <span className="text-primary">Image Recognition</span> for Stroke Detection
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Our state-of-the-art MRI-based detection model leverages deep learning to identify subtle indicators that traditional methods might miss. Precision diagnostics delivered in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Rapid Scan Analysis', 'High Accuracy Inference', 'Early Warning System', 'Cloud-Native Processing'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 glass rounded-2xl border border-white/5">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/login" className="inline-block">
              <button className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 hover:scale-105 hover:bg-primary/90 transition-all flex items-center space-x-2">
                <span>Start Detection</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AdvanceFeatureSection
