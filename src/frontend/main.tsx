import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './Router'

import './index.css'
import './utils/init'

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
)
