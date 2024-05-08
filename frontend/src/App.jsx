import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage'
import HomePage from './pages/HomePage'
import TaskFormPage from './pages/TaskFormPage'
import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar";

function App() {
  return (
  <AuthProvider>
    <TaskProvider>
      <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute/>}>
                <Route path="/tasks" element={<TasksPage/>} />
                <Route path="/tasks/new" element={<TaskFormPage/>} />
                <Route path="/tasks/:id" element={<TaskFormPage/>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
   
  )
}

export default App;
