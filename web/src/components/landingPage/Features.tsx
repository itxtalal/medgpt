'use client'
import { Brain, Heart, Users, Zap, Shield, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI-Powered Diagnosis",
    description: "Advanced neural networks analyze MRI scans with clinical-grade precision, identifying stroke indicators in seconds.",
    delay: 0.1
  },
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: "Personalized Support",
    description: "Get empathetic, AI-driven health insights tailored to your specific symptoms and medical history.",
    delay: 0.2
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Specialized Chatbots",
    description: "24/7 access to specialized AI agents for stroke detection, caregiver guidance, and mental health support.",
    delay: 0.3
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Real-time Processing",
    description: "Leverage edge-computing for near-instant results, critical for time-sensitive medical emergencies.",
    delay: 0.4
  },
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    title: "Secure & Private",
    description: "Your data is encrypted with enterprise-grade security, ensuring complete patient confidentiality.",
    delay: 0.5
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Global Accessibility",
    description: "Designed for use across any device, providing life-saving diagnostic tools to underserved regions.",
    delay: 0.6
  }
]

const Features = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Core <span className="text-primary">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/60"
          >
            MedGPT integrates cutting-edge AI technologies to provide a comprehensive medical support ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="group relative p-8 glass-dark rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all shadow-xl"
  >
    <div className="absolute inset-0 bg-primary/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="mb-6 p-4 w-fit rounded-2xl glass border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-foreground/60 leading-relaxed">{description}</p>
    </div>
  </motion.div>
)

export default Features
