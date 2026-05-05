'use client'
import { motion } from 'framer-motion'
import { Upload, Cpu, Search, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: <Upload className="w-8 h-8" />,
    title: "Data Input",
    description: "Securely upload MRI brain scans and complete a medical questionnaire.",
    color: "bg-blue-500"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Preprocessing",
    description: "Our system normalizes image data and parses text for clinical indicators.",
    color: "bg-purple-500"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Inference",
    description: "Falcon AI and TensorFlow models analyze data for stroke patterns.",
    color: "bg-cyan-500"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Insight Delivery",
    description: "Receive detailed diagnostic reports and 24/7 support recommendations.",
    color: "bg-green-500"
  }
]

const WorkflowSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-24 relative bg-glow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How <span className="text-primary">MedGPT</span> Works
          </motion.h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A seamless, high-tech pipeline designed for precision and speed.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center text-white shadow-2xl z-10 mb-8 relative group`}>
                  <div className="absolute inset-0 bg-white/20 rounded-[2rem] scale-0 group-hover:scale-125 transition-transform opacity-0 group-hover:opacity-100" />
                  {step.icon}
                  <div className="absolute -top-4 -right-4 w-10 h-10 glass border border-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-white/5 my-4 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection
