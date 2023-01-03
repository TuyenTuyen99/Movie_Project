import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import MovieDetail from "./movieDetail";
import MovieManagement from "./moviemanagement";
import NowShowingMovie from "./nowShowingMovie";
import SignIn from "./signin";
import Signup from "./signup";
import UpcomingMovie from "./upcomingMovie";
import UserInfo from "./profile";
import UpdateInfo from "./updateInfo";
import Schedule from "./schedule";
import AdminHome from "./adminHome";
import DashboardLayout from "../layouts/Dashboard";
import AdminLayout from "../layouts/Admin";
import ForgotPwd from "./forgotPwd";
import ForgotPwdMail from "./forgotPwdMail";
import ChangePwd from "./changePwd";
import Users from "./test";
import Booking from "./Booking/booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* For User */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/user" element={<UserInfo />}></Route>
          <Route path="/user/update" element={<UpdateInfo />}></Route>
          <Route path="/forgotpwd" element={<ForgotPwdMail />}></Route>
          <Route path="/user/forgotpwd/:id" element={<ForgotPwd />}></Route>
          <Route path="/user/changepwd" element={<ChangePwd />}></Route>

          <Route path="/movies/now-showing" element={<NowShowingMovie />}></Route>
          <Route path="/movies/upcoming" element={<UpcomingMovie />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetail />}></Route>
          <Route path="/movies/:movieId/schedule" element={<Schedule />}></Route>

          <Route path="/booking/:movieId/:scheduleId/:bookingId" element={<Booking />}></Route>

          {/* <Route path="/moviemanagement" element={<MovieManagement />}></Route> */}
          {/* <Route path="/user/getallusers" element={<Users />}></Route> */}
        </Route>

        {/* For Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
