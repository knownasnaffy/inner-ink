import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Loader from './components/Loader'

const theme = localStorage.getItem('theme') || ''
document.documentElement.setAttribute('data-theme', theme)

const App = React.lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</StrictMode>,
)
