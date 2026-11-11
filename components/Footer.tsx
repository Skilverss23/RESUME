'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer>
        <div className="skv-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand"><span className="dot" />Skilverss</Link>
              <p>Premium creative design agency crafting visuals that build memorable brands and attract more customers.</p>
              <div className="socials">
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance" /></a>
                <a href="#" aria-label="Dribbble" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble" /></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><Link href="/services/thumbnail">Thumbnails</Link></li>
                <li><Link href="/services/poster">Posters</Link></li>
                <li><Link href="/services/logo">Logos</Link></li>
                <li><Link href="/services/post">Social Posts</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:skilverss23@gmail.com">skilverss23@gmail.com</a></li>
                <li><a href="tel:+917559255778">+91 75592 55778</a></li>
                <li>Mumbai, India</li>
                <li>Mon–Sat · 10am – 7pm IST</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} Skilverss. All rights reserved.</span>
            <span>Crafted with care — for brands that dare.</span>
          </div>
        </div>
      </footer>

      <button
        className={`back-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up" />
      </button>
    </>
  )
}
