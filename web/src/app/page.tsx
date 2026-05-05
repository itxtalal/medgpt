import AdvanceFeatureSection from '@/components/landingPage/AdvanceFeatureSection'
import Features from '@/components/landingPage/Features'
import HeroSection from '@/components/landingPage/HeroSection'
import WorkflowSection from '@/components/landingPage/WorkflowSection'
import Footer from '@/components/landingPage/Footer'
import Header from '@/components/Header'
import useAuth from '@/hooks/useAuth'

export default async function Index() {
  const { getUser } = useAuth()

  const user = await getUser()

  return (
    <main className="bg-background min-h-screen">
      {user ? <></> : <Header />}
      <HeroSection id="home" />
      <Features id="features" />
      <WorkflowSection id="workflow" />
      <AdvanceFeatureSection id="ai-imaging" />
      <Footer />
    </main>
  )
}
