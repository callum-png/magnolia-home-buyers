import Hero from '@/components/Hero'
import MarqueeTicker from '@/components/MarqueeTicker'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import WhyMagnolia from '@/components/WhyMagnolia'
import Situations from '@/components/Situations'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import LeadForm from '@/components/LeadForm'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeTicker />
      <Stats />
      <HowItWorks />
      <WhyMagnolia />
      <Situations />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </main>
  )
}
