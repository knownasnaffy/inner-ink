import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { invoke } from '@tauri-apps/api/tauri'

import App from './App'

import './index.css'

document.addEventListener('DOMContentLoaded', () => {
	// This will wait for the window to load, but you could
	// run this function on whatever trigger you want
	invoke('close_splashscreen')
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
