import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import './index.css'
import './utils/init'

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
