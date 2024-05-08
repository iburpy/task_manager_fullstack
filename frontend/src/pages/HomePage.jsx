import LoginPage from "./LoginPage";
import TasksPage from "./TasksPage";
import { useAuth } from "../context/AuthContext";

function HomePage() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                // Contenido para usuarios autenticados
                <TasksPage />
            ) : (
                // Contenido para usuarios no autenticados
                <LoginPage />
            )}
        </>
    );
}

export default HomePage;
