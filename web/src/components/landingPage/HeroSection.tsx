'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const HeroSection = ({id}: {id: string}) => {
  const { resolvedTheme } = useTheme()
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(resolvedTheme === 'dark'
      ? "https://media.licdn.com/dms/image/D4E12AQGEPkq_E5TA3Q/article-cover_image-shrink_720_1280/0/1686125376692?e=1728518400&v=beta&t=D_iWFRBSKpwQwg8FjkdkYk3o6W7RmK1db7Fym2wZA0A"
      : "https://launchbase.uk/wp-content/uploads/2019/09/artificial-intelligence-in-medicine-ai-in-medicine.jpg")
  }, [resolvedTheme])

  return (
    <div id={id} className="relative min-h-screen bg-background text-foreground">
      <Image
        src="/brain-illustration-1-svgrepo-com.svg"
        alt="Brain Icon"
        fill
        className="object-cover opacity-5"
      />

      <div className="container relative z-10 flex flex-col items-center py-20 mx-auto lg:flex-row">
        <HeroContent />
        <HeroImage imageUrl={imageUrl} />
      </div>
      <MobileHeroImage imageUrl={imageUrl} />
    </div>
  )
}

const HeroContent = () => (
  <section className="text-left lg:w-1/2 lg:pr-10 ">
    <motion.h1
      className="mb-6 text-4xl font-bold lg:text-6xl text-primary"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Revolutionize Your Health with MedGPT
    </motion.h1>
    <motion.p
      className="mb-10 text-xl lg:text-2xl text-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Harness the power of AI for stroke detection and ongoing health support. Your personal health companion, powered by advanced Falcon AI technology.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Link href="/login" passHref>
        <button
          className="px-8 py-3 font-bold transition duration-300 rounded-full shadow-lg md:text-md lg:px-10 lg:py-4 hover:bg-accent hover:text-accent-foreground text-md lg:text-xl bg-primary text-primary-foreground"
          //whileHover={{ scale: 1.05 }}
          //whileTap={{ scale: 0.95 }}
        >
          Start Your Health Journey <ArrowRight className="inline-block ml-2" />
        </button>
      </Link>
    </motion.div>
  </section>
)

const HeroImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className="hidden mt-10 border border-gray-600 rounded-lg shadow-xl lg:w-1/2 lg:mt-0 sm:block">
    {imageUrl && (
      <Image
        src={imageUrl}
        alt="MedGPT Hero Image"
        width={900}
        height={900}
        //className="rounded-lg "
      />
    )}
  </div>
)

const MobileHeroImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className="absolute inset-0 z-0 sm:hidden">
    {imageUrl && (
      <Image
        src={imageUrl}
        alt="MedGPT Hero Image"
        layout="fill"
        objectFit="cover"
        className="bg-opacity-0  blur-md"
      />
    )}
  </div>
)
export default HeroSection
