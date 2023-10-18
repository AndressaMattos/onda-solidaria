import { BrowserRouter } from 'react-router-dom'
import { Router } from './pages/Routes'
import { AuthProvider } from './contexts/AuthContext'
 
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
