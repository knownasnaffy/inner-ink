import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './Router'

import './index.css'
import './utils/init'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</StrictMode>,
)
