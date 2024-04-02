import { Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
  // const {userInfo} = useAuth();
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
