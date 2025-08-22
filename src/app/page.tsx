import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CasinoList from '@/components/CasinoList'
import ComparisonTable from '@/components/ComparisonTable'
import EvaluationCriteria from '@/components/EvaluationCriteria'
import BonusGuide from '@/components/BonusGuide'
import PopularGames from '@/components/PopularGames'
import PaymentMethods from '@/components/PaymentMethods'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CasinoList />
      <ComparisonTable />
      <EvaluationCriteria />
      <BonusGuide />
      <PopularGames />
      <PaymentMethods />
      <FAQ />
      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'A 10 Legjobb Online Kaszinó Magyarországon 2025-ben - KaszinoPartner.com',
  description: 'Keresed a legjobb online kaszinót? 2025-ben tesztelt és összehasonlított top 10 kaszinó Magyarországon. MGA licenc, gyors kifizetés, magyar nyelvű támogatás.',
  keywords: 'legjobb online kaszinó magyarország, boabet, quickwin, sportaza, mga licenc, online kaszinó értékelés 2025, kaszinopartner'
}