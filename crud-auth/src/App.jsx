import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
 <AuthProvider>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>tareas</h1>} />
        <Route path="/add-task" element={<h1>añadir tareas</h1>} />
        <Route path="/tasks/:id" element={<h1>lista de tareas</h1>} />
        <Route path="/profile" element={<h1>perfil</h1>} />
      </Routes>
    </BrowserRouter>
 </AuthProvider>
   
  )
}

export default App;
