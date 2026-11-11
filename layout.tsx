import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// This layout applies ONLY to routes inside the (marketing) group,
// i.e. the public site (home, about, services, etc).
// /admin and /login are OUTSIDE this group and are completely unaffected.
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
