import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RouterComponent from './Router'
import { initDB } from './utils/database'

import './index.css'

initDB()

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<RouterComponent />
	</StrictMode>,
)
