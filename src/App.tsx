import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import NoMatch from './pages/no-match/NoMatch'
import RootLayout from './layouts/root/RootLayout' 

export default function App() {
  return (
    <Routes>
      < Route path="/" element={< RootLayout />}>
        <Route index element={<Main />} /> 
      </Route > 
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
