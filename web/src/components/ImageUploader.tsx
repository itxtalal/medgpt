'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDropzone } from 'react-dropzone'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ImagePlus, X, UploadCloud, FileText, CheckCircle2 } from 'lucide-react'
import { cn } from '@/utils/cn'

const formSchema = z.object({
  image: z.instanceof(File).refine((file) => file.size !== 0, 'Please upload an image'),
})

interface Props {
  loading: boolean
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export const ImageUploader: React.FC<Props> = ({ loading, onSubmit }) => {
  const [preview, setPreview] = React.useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: new File([''], 'placeholder'),
    },
  })

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => setPreview(reader.result as string)
        reader.readAsDataURL(file)
        form.setValue('image', file)
        form.clearErrors('image')
      }
    },
    [form],
  )

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 2000000,
    accept: { 'image/png': [], 'image/jpg': [], 'image/jpeg': [] },
  })

  return (
    <div className="max-w-xl w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-dark rounded-[2.5rem] border border-white/10 p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Upload MRI Scan</h2>
          <p className="text-foreground/60">Supported formats: PNG, JPG (Max 2MB)</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div
            {...getRootProps()}
            className={cn(
              "relative group cursor-pointer transition-all duration-500",
              "rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center p-8 min-h-[300px]",
              isDragActive ? "border-primary bg-primary/5 scale-[0.98]" : "border-white/10 hover:border-primary/50 hover:bg-white/5",
              preview ? "border-solid border-primary/30" : ""
            )}
          >
            <input {...getInputProps()} />
            
            <AnimatePresence mode="wait">
              {preview ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative w-full aspect-square max-w-[250px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="MRI Preview" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setPreview(null)
                      form.resetField('image')
                    }}
                    className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <UploadCloud size={40} />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">Drag & drop MRI scan</p>
                    <p className="text-sm text-foreground/40">or click to browse files</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {loading && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-[2rem] z-20">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-lg font-bold animate-pulse text-primary tracking-widest uppercase">Analyzing Scan...</p>
              </div>
            )}
          </div>

          {(form.formState.errors.image || fileRejections.length > 0) && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-red-500 text-sm font-medium text-center"
            >
              Please upload a valid MRI image (PNG/JPG, max 2MB).
            </motion.p>
          )}

          <button
            type="submit"
            disabled={!preview || loading}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center space-x-2",
              preview && !loading
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:scale-[1.02]"
                : "bg-white/5 text-foreground/20 cursor-not-allowed"
            )}
          >
            <CheckCircle2 size={20} />
            <span>Process Analysis</span>
          </button>
        </form>
      </motion.div>
    </div>
  )
}
