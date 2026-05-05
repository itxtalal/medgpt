'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Home, Settings, Menu, X, Moon, Sun, Brain, LogOut, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { createBrowserClient } from '@/utils/supabase'
import { cn } from '@/utils/cn'

export const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false },
)
export const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false },
)
export const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false },
)

export const AuthHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)
  const { theme, setTheme } = useTheme()
  const [logoutLoading, setLogoutLoading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Stroke Detection', href: '/detect-stroke/image' },
    {
      name: 'AI Helpers',
      href: '#',
      submenu: [
        { name: 'Diagnosis', href: '/ai/diagnosis' },
        { name: 'Caregiver', href: '/ai/caregiver' },
        { name: 'Rehabilitation', href: '/ai/rehabilitation' },
      ],
    },
    { name: 'Reminders', href: '/reminders' },
  ]

  const handleLogout = async () => {
    setLogoutLoading(true)
    const supabase = createBrowserClient()
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6',
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Brain className="text-primary-foreground" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-glow">MedGPT</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown size={14} className={cn("transition-transform", activeSubmenu === index && "rotate-180")} />}
                </Link>
                {item.submenu && activeSubmenu === index && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-48 p-2 glass-dark rounded-2xl border border-white/10 shadow-2xl"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </MotionDiv>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl glass border border-white/10 hover:bg-white/20 transition-all text-foreground"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleLogout}
            disabled={logoutLoading}
            className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-all disabled:opacity-50"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl glass border border-white/10 text-foreground"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'AI Imaging', href: '#ai-imaging' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6',
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Brain className="text-primary-foreground" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-glow">MedGPT</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl glass border border-white/10 hover:bg-white/20 transition-all text-foreground"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/login">
            <button className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-all">
              Login
            </button>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl glass border border-white/10 text-foreground"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass-dark mt-4 rounded-2xl border border-white/10"
          >
            <ul className="p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/login" className="block w-full py-3 bg-primary text-primary-foreground rounded-xl text-center font-bold">
                  Login
                </Link>
              </li>
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
