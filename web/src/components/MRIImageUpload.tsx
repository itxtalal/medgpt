'use client'
import { useState } from 'react'
import { ImageUploader } from '@/components/ImageUploader'
import { toast } from 'sonner'

type Props = {
  afterImagePrediction: () => void
}

const MRIImageUpload: React.FC<Props> = ({ afterImagePrediction }) => {
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)
    
    // Simulate complex AI analysis
    setTimeout(() => {
      toast.success('Analysis complete! Viewing results...')
      setLoading(false)
      afterImagePrediction()
    }, 3500) // Longer delay for "wow" effect during analysis
  }

  return <ImageUploader loading={loading} onSubmit={onSubmit} />
}

export default MRIImageUpload
