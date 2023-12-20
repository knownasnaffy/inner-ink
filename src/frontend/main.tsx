import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RouterComponent from './Router'

import './index.css'

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<RouterComponent />
	</StrictMode>,
)
