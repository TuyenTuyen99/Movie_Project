import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "../pages/homepage";
import MovieDetail from "../pages/movieDetail";
import MovieManagement from "../pages/moviemanagement";
import NowShowingMovie from "../pages/nowShowingMovie";
import SignIn from "../pages/signin";
import Signup from "../pages/signup";
import UpcomingMovie from "../pages/upcomingMovie";
import UserInfo from "../pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/moviemanagement" element={<MovieManagement />}></Route>
        <Route path="/movies/now-showing" element={<NowShowingMovie />}></Route>
        <Route path="/movies/upcoming" element={<UpcomingMovie />}></Route>
        <Route path="/user" element={<UserInfo />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
