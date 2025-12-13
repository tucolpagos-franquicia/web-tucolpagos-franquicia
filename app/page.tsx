import Hero from '@/components/sections/Hero'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TheOpportunity from '@/components/sections/TheOpportunity'
import Portfolio from '@/components/sections/Portfolio'
import Benefits from '@/components/sections/Benefits'
import Commissions from '@/components/sections/Commissions'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Platform from '@/components/sections/Platform'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <TheOpportunity />
      <Portfolio />
      <Benefits />
      <Commissions />
      <HowItWorks />
      <Testimonials />
      <Platform />
      <FAQ />
      <CTA />
    </>
  )
}

