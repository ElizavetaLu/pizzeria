import { Route, Routes, Navigate } from 'react-router-dom'
import RootLayout from './layouts/root/RootLayout'
import Main from './pages/main/Main'
import Menu from './pages/menu/Menu'

export default function App() {
  return (
    <Routes>
      < Route path="/" element={< RootLayout />}>
        <Route index element={<Main />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route >
    </Routes>
  )
}