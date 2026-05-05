'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, Brain, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col space-y-8"
        >
          <div className="glass inline-flex w-fit items-center space-x-2 rounded-full border border-white/10 px-4 py-2">
            <Activity className="text-primary" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              AI-Powered Medical Intelligence
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:text-7xl">
            Revolutionize Health with{' '}
            <span className="text-glow text-primary">MedGPT</span>
          </h1>

          <p className="max-w-xl text-xl leading-relaxed text-foreground/60">
            Harness the power of advanced Falcon AI for real-time stroke
            detection and personalized healthcare. Precision diagnostics at your
            fingertips, 24/7.
          </p>

          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <Link href="/login" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-center space-x-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90">
                <span>Get Started Now</span>
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="#workflow" className="w-full sm:w-auto">
              <button className="glass w-full rounded-2xl border border-white/10 px-8 py-4 text-lg font-bold text-foreground transition-all hover:bg-white/5">
                How it Works
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <StatItem
              icon={<Brain size={20} />}
              label="AI Models"
              value="Falcon 40B"
            />
            <StatItem
              icon={<Activity size={20} />}
              label="Accuracy"
              value="99.2%"
            />
            <StatItem
              icon={<Shield size={20} />}
              label="Privacy"
              value="HIPAA Ready"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="group relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl transition-colors group-hover:bg-primary/30" />
          <div className="glass-dark relative overflow-hidden rounded-[2.5rem] border border-white/10 p-4 shadow-2xl">
            <Image
              src="/hero.png"
              alt="MedGPT AI Visualization"
              width={800}
              height={800}
              className="rounded-[2rem] object-cover"
              priority
            />
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute right-10 top-10 hidden rounded-2xl border border-white/20 p-4 shadow-2xl md:block"
            >
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-bold">Scanning MRI Data...</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const StatItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) => (
  <div className="flex flex-col space-y-1">
    <div className="flex items-center space-x-2 text-primary">
      {icon}
      <span className="text-lg font-bold">{value}</span>
    </div>
    <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">
      {label}
    </span>
  </div>
)

export default HeroSection
