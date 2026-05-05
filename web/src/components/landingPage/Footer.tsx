import Link from 'next/link'
import { Github, Twitter, Linkedin, Brain, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Brain className="text-primary-foreground" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">MedGPT</span>
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Pioneering the future of medical diagnostics with advanced AI systems for stroke detection and clinical support.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/itxtalal/medgpt" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="/detect-stroke/image">Stroke Detection</FooterLink>
              <FooterLink href="/ai/diagnosis">AI Diagnosis</FooterLink>
              <FooterLink href="/ai/rehabilitation">Rehab Support</FooterLink>
              <FooterLink href="/reminders">Medication Reminders</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact Support</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-foreground/60">
                <Mail size={18} className="text-primary" />
                <span>support@medgpt.ai</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/60">
                <MapPin size={18} className="text-primary" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/40">
            &copy; {currentYear} MedGPT AI. All rights reserved. Built for AI Hackathon 2026.
          </p>
          <div className="flex items-center space-x-8 text-sm text-foreground/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl glass border border-white/10 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
  >
    {icon}
  </a>
)

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-foreground/60 hover:text-primary transition-colors flex items-center group">
      <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all" />
      {children}
    </Link>
  </li>
)

export default Footer
