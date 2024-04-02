import { Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth-context";

function App() {
  // const {userInfo} = useAuth();
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
