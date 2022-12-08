import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import MovieManagement from "../pages/moviemanagement";
import NowShowingMovie from "../pages/nowShowingMovie";
import SignIn from "../pages/signin";
import Signup from "../pages/signup";
import UpComingMovie from "../pages/upComingMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/moviemanagement" element={<MovieManagement />}></Route>
        <Route path="/now-showing" element={<NowShowingMovie />}></Route>
        <Route path="/upcoming" element={<UpComingMovie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
