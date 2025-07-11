import ReactDOM from 'react-dom/client'
import App from './App'

import './lib/utils/forward-console'
import './lib/utils/user'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </QueryClientProvider>,
)
