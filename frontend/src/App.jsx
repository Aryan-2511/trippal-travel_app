import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Aboutus from "./pages/Aboutus";
import Account from "./pages/Account";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
