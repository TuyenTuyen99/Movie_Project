import React, { useEffect, useState } from "react";
import api from "../../config/api";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const { id } = useParams();
  const [schedule, setSchedules] = useState([]);
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => {
    console.log("Calendar closed");
  };

  const handleCalendarOpen = () => console.log("Calendar opened");

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await api.get(`/movies/${id}/schedule`);

        setSchedules(response.data);
        console.log("use", date);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSchedules();
  }, []);
  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => {
          setDate(date);
          console.log(date);
        }}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
      {schedule.length &&
        schedule.map((schedule) => {
          return (
            <div>
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              <h1>Room: {schedule.room}</h1>
              <h1>TimeSchedule: {schedule.timeSchedule}</h1>
              <h1>LaunchDate: {schedule.launchDate}</h1>
              <h1>MovieId: {schedule.movieId}</h1>
              <h1>-------------------------------------------</h1>
            </div>
          );
        })}
    </>
  );
}

export default Schedule;
