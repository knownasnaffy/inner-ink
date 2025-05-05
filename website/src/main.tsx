import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CTA from './components/cta'
import Features from './components/features'
import Footer from './components/footer'
import Hero from './components/hero'
import Preview from './components/preview'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Hero />
		<Preview />
		<Features />
		<CTA />
		<Footer />
	</StrictMode>,
)
