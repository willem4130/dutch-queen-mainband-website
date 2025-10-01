'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroConfig } from '../../config/hero.config'
import { LogoHero } from './LogoHero'
import { TextHero } from './TextHero'
import { useMediaPaths } from '@/hooks/useConfig'

interface HeroProps {
  onScrollToSection?: (sectionId: string) => void
}

export function Hero({ onScrollToSection }: HeroProps) {
  const media = useMediaPaths()

  const scrollToSection = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background layers for parallax effect */}
      <div className="absolute inset-0">
        {/* Main forest background - slowly zooming */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-back"
          style={{
            backgroundImage: `url(${media.hero.background})`,
            backgroundSize: '120%',
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Fog overlay layers with movement */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 animate-fog" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent animate-fog"
          style={{ animationDelay: '30s', animationDuration: '120s' }}
        />

        {/* Subtle dark teal glow from bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[70%]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E3A]/30 via-transparent to-transparent" />
        </div>

        {/* Enhanced mystical fog layers - larger, smoother waves */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 800px 400px at 50% 50%, rgba(51, 65, 85, 0.4) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          initial={{ x: "-50%", scale: 1 }}
          animate={{
            x: ["50%", "-50%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 90,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 1000px 500px at 30% 60%, rgba(67, 56, 202, 0.3) 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }}
          initial={{ x: "60%", y: "10%" }}
          animate={{
            x: ["-60%", "60%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 120,
            ease: [0.43, 0.13, 0.23, 0.96],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 900px 450px at 70% 40%, rgba(88, 28, 135, 0.25) 0%, transparent 65%)`,
            filter: 'blur(50px)',
          }}
          initial={{ x: "-70%", y: "-5%" }}
          animate={{
            x: ["70%", "-70%"],
            y: ["-5%", "5%", "-5%"],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 100,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Mystic fire effects at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          {/* Base fire glow */}
          <motion.div
            className="absolute bottom-0 left-1/4 w-24 h-20 bg-gradient-to-t from-blue-600/60 via-purple-500/40 to-transparent rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/3 w-20 h-16 bg-gradient-to-t from-indigo-600/50 via-blue-500/30 to-transparent rounded-full blur-sm"
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 left-2/3 w-16 h-14 bg-gradient-to-t from-purple-600/40 via-indigo-400/25 to-transparent rounded-full blur-sm"
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Simulated figure movement layers */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          {/* Left figures subtle movement */}
          <div className="absolute left-[15%] bottom-0 w-32 h-48 animate-walk-left" />
          <div className="absolute left-[30%] bottom-0 w-32 h-56 animate-walk-center" style={{ animationDelay: '5s' }} />

          {/* Center figure */}
          <div className="absolute left-[50%] transform -translate-x-1/2 bottom-0 w-32 h-60 animate-sway" />

          {/* Right figures subtle movement */}
          <div className="absolute right-[30%] bottom-0 w-32 h-56 animate-walk-center" style={{ animationDelay: '8s' }} />
          <div className="absolute right-[15%] bottom-0 w-32 h-48 animate-walk-right" />
        </div>

        {/* Glowing embers rising from fires */}
        {[...Array(8)].map((_, i) => {
          const baseX = [25, 33, 66][Math.floor(i / 3)] || 50;
          const offsetX = (i % 3) * 10 - 10;

          return (
            <motion.div
              key={`ember-${i}`}
              className="absolute rounded-full"
              style={{
                width: '3px',
                height: '3px',
                left: `${baseX + offsetX}%`,
                bottom: '5%',
                background: `radial-gradient(circle, rgba(147, 197, 253, 0.9) 0%, rgba(165, 180, 252, 0.6) 40%, transparent 70%)`,
                boxShadow: '0 0 6px rgba(147, 197, 253, 0.8), 0 0 12px rgba(165, 180, 252, 0.4)',
              }}
              animate={{
                y: [0, -400, -800],
                x: [
                  0,
                  Math.sin(i) * 30,
                  Math.sin(i) * 50,
                ],
                opacity: [0, 0.9, 0.7, 0.3, 0],
                scale: [0.8, 1.2, 1, 0.6],
              }}
              transition={{
                duration: 15 + i * 2,
                ease: [0.25, 0.1, 0.25, 1],
                repeat: Infinity,
                delay: i * 1.5,
                times: [0, 0.3, 0.6, 0.85, 1],
              }}
            />
          );
        })}

        {/* Heat shimmer effect */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-48"
          style={{
            background: `linear-gradient(to top, rgba(99, 102, 241, 0.1) 0%, transparent 100%)`,
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scaleY: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Atmospheric depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-800/30" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-950/10 via-transparent to-purple-950/10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Conditional rendering: Logo or Text */}
        {heroConfig.displayMode === 'logo' ? (
          <LogoHero />
        ) : (
          <TextHero />
        )}

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 text-white/60 hover:text-white/90 transition-all duration-500 p-2 rounded-full hover:bg-amber-900/20 hover:shadow-lg hover:shadow-amber-900/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 drop-shadow-lg" />
        </motion.button>
      </div>
    </section>
  )
}
