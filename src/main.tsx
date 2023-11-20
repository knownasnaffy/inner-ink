import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Loader from './components/Loader'
import { getSettings } from './utils/settings'

const theme = getSettings().general.theme!
document.documentElement.setAttribute('data-theme', theme)

// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</StrictMode>,
)
