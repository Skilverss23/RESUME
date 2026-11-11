'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function Reveal({
  children,
  direction,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  direction?: 'left' | 'right'
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      data-reveal={direction || 'true'}
      className={`${visible ? 'in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
