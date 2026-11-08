import Hero from '../widgets/Hero'
import Benefits from '../widgets/Benefits'
import Pricing from '../widgets/Pricing'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-amber-950">
        <Hero />

        <div id="about">
          <Benefits />
        </div>

        <div id="menu">
          <Pricing />
        </div>
    </div>
  )
}
