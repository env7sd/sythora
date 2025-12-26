import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { GeneratorDemo } from './sections/GeneratorDemo'
import { Pricing } from './sections/Pricing'
import { ModalProvider } from './context/ModalContext'
import { WaitlistModal } from './components/ui/WaitlistModal'

function App() {
    return (
        <ModalProvider>
            <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden">
                <Navbar />
                <main>
                    <Hero />
                    <Features />
                    <HowItWorks />
                    <GeneratorDemo />
                    <Pricing />
                </main>
                <Footer />
                <WaitlistModal />
            </div>
        </ModalProvider>
    )
}

export default App
