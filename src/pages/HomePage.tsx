import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Benefits from '../widgets/Benefits'
import Pricing from '../widgets/Pricing'
import Footer from '../widgets/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-amber-950">
      <Header />

      <main>
        <Hero />

        <div id="about">
          <Benefits />
        </div>

        <div id="menu">
          <Pricing />
        </div>
      </main>

      <div id="contacts">
        <Footer />
      </div>
    </div>
  )
}
