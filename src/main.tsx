import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

async function enableMocking() {
  // eslint-disable-next-line n/prefer-global/process
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
