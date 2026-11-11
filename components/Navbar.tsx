'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const ORDER_FORM_URL = 'https://forms.gle/uf8HKV6aQV2tVs4G9' // apna real form/link daalein

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openOrderForm = () => window.open(ORDER_FORM_URL, '_blank', 'noopener')

  return (
    <>
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="blob b3" aria-hidden="true" />

      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="skv-container nav-inner">
          <Link href="/" className="brand">
            <span className="dot" />Skilverss
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <button className="btn btn-primary btn-lg" onClick={openOrderForm}>
              Order Now <i className="fas fa-arrow-right" />
            </button>
            <button
              className="hamburger"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <button className="btn btn-primary btn-lg" style={{ marginTop: 20 }} onClick={openOrderForm}>
          Order Now <i className="fas fa-arrow-right" />
        </button>
      </div>
    </>
  )
}
