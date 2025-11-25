import { createRoot } from 'react-dom/client'
import MyProvider from './components/MyContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <MyProvider>
    <App />
</MyProvider>
)
