import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TheOpportunity from '@/components/sections/TheOpportunity'
import SubscriptionPlans from '@/components/sections/SubscriptionPlans'
import Portfolio from '@/components/sections/Portfolio'
import Benefits from '@/components/sections/Benefits'
import Requirements from '@/components/sections/Requirements'
import Commissions from '@/components/sections/Commissions'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Platform from '@/components/sections/Platform'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <TheOpportunity />
      <SubscriptionPlans />
      <Portfolio />
      <Benefits />
      <Requirements />
      <Commissions />
      <HowItWorks />
      <Testimonials />
      <Platform />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}


