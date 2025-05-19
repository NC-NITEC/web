import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-heading">
              NITEC
            </h3>
            <p className="text-gray-300 mb-4">
              Nhan Chinh Information Technology & Electronics Club - Empowering students through technology and
              innovation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/events" text="Events" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/team" text="Our Team" />
              <FooterLink href="/resources" text="Resources" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/blog" text="Blog" />
              <FooterLink href="/tutorials" text="Tutorials" />
              <FooterLink href="/workshops" text="Workshops" />
              <FooterLink href="/faq" text="FAQ" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms of Service" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Nhan Chinh, Hanoi</p>
              <p className="mb-2">Vietnam</p>
              <p className="flex items-center mb-2">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@nitec.org" className="hover:text-purple-400 transition-colors animated-underline">
                  info@nitec.org
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NITEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-purple-400 transition-colors animated-underline">
        {text}
      </Link>
    </li>
  )
}

