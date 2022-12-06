import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import MovieManagement from "../pages/moviemanagement";
import SignIn from "../pages/signin";
import Signup from "../pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/moviemanagement" element={<MovieManagement />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
