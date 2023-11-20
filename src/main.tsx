import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { getSettings } from './utils/settings'
import App from './App'

import './index.css'

const theme = getSettings().general.theme!
document.documentElement.setAttribute('data-theme', theme)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
