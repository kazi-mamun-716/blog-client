import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { MainRouter } from './routes/MainRouter.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { HelmetProvider } from 'react-helmet-async';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={MainRouter} />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
