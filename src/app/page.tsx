'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Hero } from '@/components/Hero'
import { useBandContent, useMediaPaths, useConfiguredClasses, useAnimationClasses, useAnimationSettings } from '@/hooks/useConfig'

function HomeContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Configuration hooks
  const content = useBandContent()
  const media = useMediaPaths()
  const classes = useConfiguredClasses()
  const animationClasses = useAnimationClasses()
  const animationSettings = useAnimationSettings()

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(`/gallery/${image}`)
    setSelectedIndex(index)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (selectedIndex + 1) % galleryImages.length
      : (selectedIndex - 1 + galleryImages.length) % galleryImages.length

    setSelectedIndex(newIndex)
    setSelectedImage(`/gallery/${galleryImages[newIndex]}`)
  }
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Gallery images from configuration
  const galleryImages = media.gallery.map(path => path.replace('/gallery/', ''))

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Hero onScrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Video Background */}
        <VideoBackground 
          videos={[
            '/videos/about-bg-1.mp4',
            // Add more video paths here as you add them
            // '/videos/about-bg-2.mp4',
            // '/videos/about-bg-3.mp4',
          ]}
          fallbackColor="#2C3E3A"
          overlayOpacity={0.5}
        />
        
        {/* Animated color shift overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #2C3E3A 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #5D3A1A 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #2C3E3A 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #5D3A1A 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #2C3E3A 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-widest text-white uppercase mb-12" style={{ 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.95), 0 6px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.7)',
              WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
            }}>
              About
            </h2>
            <div className="space-y-8 text-white leading-relaxed font-light" style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(0, 0, 0, 0.7)'
            }}>
              <p>
                {content.description.long}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shows Section - Misty Morning */}
      <section id="shows" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Video Background */}
        <VideoBackground 
          videos={[
            '/videos/shows-bg-1.mp4',
            // Add more video paths here as you add them
            // '/videos/shows-bg-2.mp4',
            // '/videos/shows-bg-3.mp4',
          ]}
          fallbackColor="#5D3A1A"
          overlayOpacity={0.6}
        />
        
        {/* Theatrical spotlight effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(184, 92, 44, 0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
              left: '10%',
              top: '20%'
            }}
            animate={{
              x: [0, 200, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Subtle mist animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent animate-fog pointer-events-none" style={{ animationDuration: '90s' }}></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-widest text-white uppercase mb-12" style={{ 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.95), 0 6px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.7)',
              WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
            }}>
              Shows
            </h2>
            <div className="space-y-6 text-white">
              <motion.div
                className="border border-white/20 p-8 cursor-pointer backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-900/0 via-teal-800/20 to-teal-900/0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="relative z-10">
                  <div className="text-3xl font-light mb-2 transition-all duration-500 group-hover:text-teal-300" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(0, 0, 0, 0.7)' }}>NOV 15, 2025</div>
                  <div className="text-lg uppercase tracking-wider mb-1 font-medium" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(0, 0, 0, 0.6)' }}>Astrant</div>
                  <div className="text-sm" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9), 0 3px 6px rgba(0, 0, 0, 0.6)' }}>Ede, NL</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Restored Atmospheric Framework */}
      <section id="gallery" className="relative overflow-hidden pt-8 h-screen max-h-screen">
        {/* Much darker, more atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#2D1810] to-[#0F0F0F]"></div>

        {/* Enhanced dark fog layers */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 1400px 700px at 50% 50%, rgba(45, 24, 16, 0.6) 0%, transparent 70%)`,
            filter: 'blur(100px)',
          }}
          animate={{
            x: ["-30%", "30%", "-30%"],
            y: ["0%", "-15%", "0%"],
          }}
          transition={{ duration: 80, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-transparent to-slate-950/40"></div>

        {/* Enhanced atmospheric particles */}
        {[...Array(12)].map((_, i) => {
          // Deterministic values based on index to prevent hydration mismatch
          const seedWidth = 2 + ((i * 7 + 3) % 100) / 50; // Creates values between 2-4
          const seedHeight = 2 + ((i * 11 + 7) % 100) / 50; // Creates values between 2-4
          const seedY = -700 - ((i * 13 + 5) % 200); // Creates values between -700 to -900

          return (
            <motion.div
              key={`particle-gallery-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${seedWidth}px`,
                height: `${seedHeight}px`,
                left: `${10 + i * 7}%`,
                bottom: '8%',
                background: `radial-gradient(circle, rgba(200, 200, 200, 0.8) 0%, rgba(150, 150, 150, 0.4) 40%, transparent 70%)`,
                boxShadow: '0 0 6px rgba(200, 200, 200, 0.6), 0 0 12px rgba(150, 150, 150, 0.3)',
              }}
              animate={{
                y: [0, seedY],
                x: [0, Math.sin(i + 1) * 60],
                opacity: [0, 0.8, 0.5, 0],
                scale: [0.5, 1.2, 0.8],
              }}
              transition={{
                duration: 20 + i * 3,
                ease: "easeOut",
                repeat: Infinity,
                delay: i * 1.8,
              }}
            />
          );
        })}

        <div className="relative z-10 py-8 flex flex-col h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-widest text-white uppercase mb-12 text-center" style={{
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.95), 0 6px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.7)',
              WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
            }}>
              Gallery
            </h2>

            {/* Simple 2x2 Grid Layout */}
            <div className="max-w-5xl mx-auto px-8">
              <motion.div
                className="grid grid-cols-2 gap-6 md:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2,
                      duration: 0.6
                    }
                  }
                }}
                layout
              >
                {galleryImages.map((image, i) => (
                  <motion.div
                    key={`gallery-${i}`}
                    className="relative overflow-hidden cursor-pointer group"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 60,
                        rotateX: 15,
                        scale: 0.9
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 120,
                          damping: 12,
                          duration: 0.8
                        }
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleImageClick(image, i)}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Multiple enhanced glow effects */}
                    <motion.div
                      className="absolute -inset-6 rounded-xl -z-10"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.4) 0%, rgba(245, 158, 11, 0.2) 50%, transparent 70%)`,
                        filter: 'blur(25px)',
                      }}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.3,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                    />

                    {/* Rotating glow ring */}
                    <motion.div
                      className="absolute -inset-4 rounded-xl -z-5"
                      style={{
                        background: `conic-gradient(from 0deg, rgba(251, 191, 36, 0.6), rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.6))`,
                        filter: 'blur(15px)',
                      }}
                      initial={{ opacity: 0, rotate: 0 }}
                      whileHover={{
                        opacity: 1,
                        rotate: 360,
                        transition: { duration: 3, ease: "linear", repeat: Infinity }
                      }}
                    />

                    {/* Large viewable images */}
                    <motion.div
                      className="relative aspect-video overflow-hidden rounded-lg"
                      whileHover={{
                        borderRadius: "20px",
                        transition: { duration: 0.4 }
                      }}
                    >
                        <Image
                          src={`/gallery/${image}`}
                          alt={`Gallery image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />

                      {/* Multiple animated shimmer effects */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{
                          x: "100%",
                          opacity: 1,
                          transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{
                          x: "100%",
                          opacity: 1,
                          transition: { duration: 1, ease: "easeInOut", delay: 0.2 }
                        }}
                      />

                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      
      {/* Simple Clean Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            {/* Simple image container */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
                sizes="100vw"
              />

              {/* Simple close button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous arrow */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 transition-all duration-200 hover:scale-110 hover:bg-white/10 rounded-full"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next arrow */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 transition-all duration-200 hover:scale-110 hover:bg-white/10 rounded-full"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary>
      <HomeContent />
    </ErrorBoundary>
  )
}