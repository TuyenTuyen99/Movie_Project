import React, { useEffect, useState } from "react";
import api from "../../config/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import datePickerContainer from "../DatePicker";

function Schedule() {
  const { movieId } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [status, setStatus] = useState("");
  const currentTime = moment(new Date()).format("HH:mm:ss");
  const currentDate = moment(new Date()).format("YYYY-MM-DD");

  const navigate = useNavigate();

  useEffect(() => {
    fetchSchedules(currentDate);
  }, []);

  const fetchSchedules = async (date) => {
    try {
      const response = await api.get(`/movies/${movieId}/schedule`);
      if (response.status === 200) {
        const movieSchedules = response.data.filter(
          (schedule) => schedule.launchDate == date
        );

        if (movieSchedules.length === 0) {
          setStatus(
            "Sorry, there is no showtime on this day. Please select another day!"
          );
        }
        setSchedules(movieSchedules);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chooseDate = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");
    if (formatDate >= currentDate) {
      fetchSchedules(formatDate);
      setStatus("");
    } else
      alert(
        "The showing time of the movie is over. Please choose another day!"
      );
    setStartDate(date);
  };

  // create a booking
  const handleBooking = async (scheduleId) => {
    const token = localStorage.getItem("x-access-token");
    if (token == "") {
      navigate("/signin");
    }
    try {
      const response = await api.post(`/booking`);
      if (response.status === 200) {
        navigate(`/booking/${movieId}/${scheduleId}/${response.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DatePicker
        className="text-center rounded-lg shadow-2xl m-3"
        selected={startDate}
        onChange={(date) => {
          chooseDate(date);
        }}
        calendarContainer={datePickerContainer}
        closeOnScroll={true}
      />
      <p className="ml-3 p-0.5 mb-2 mr-2 font-medium text-red-500">{status}</p>
      {schedules.map((schedule) => {
        const format = moment(startDate).format("YYYY-MM-DD");
        if (
          (format === currentDate && schedule.timeSchedule > currentTime) ||
          format > currentDate
        ) {
          return (
            <button
              key={schedule.id}
              onClick={() => handleBooking(schedule.id)}
              className="mb-3 ml-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {schedule.timeSchedule.slice(0, 5)}
              </span>
            </button>
          );
        }
      })}
    </>
  );
}

export default Schedule;
