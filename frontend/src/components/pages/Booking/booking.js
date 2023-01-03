import { useEffect, useState } from "react";
import api from "../../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import "./booking.css";

function Booking() {
  // hooks
  const { bookingId } = useParams();
  const { scheduleId } = useParams();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [displaySeats, setDisplaySeats] = useState("block");
  const [displayCombos, setDisplayCombos] = useState("none");
  const navigate = useNavigate();
  // hooks (seats)
  const [seats, setSeats] = useState([]);
  const [sold, setSold] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [bookingSeats, setBookingSeats] = useState([]);
  // hooks (combos)
  const [combos, setCombos] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalCombos, setTotalCombos] = useState(0);
  const [subtotal, setSubtotal] = useState([]);

  // get all seats in this showtime
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await api.get(
          `/booking/${movieId}/${scheduleId}/${bookingId}`
        );
        if (response.status === 200) {
          setSeats(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeats();
  }, []);

  // get all seats sold in this showtime
  useEffect(() => {
    const fetchSold = async () => {
      try {
        const response = await api.get(
          `/booking/${movieId}/${scheduleId}/sold-out`
        );
        if (response.status === 200) {
          setSold(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSold();
  }, []);

  // total ticket price
  const totalTicketPrice = (e) => {
    const checked = e.target.checked;
    const value = Number(e.target.value);
    const seatId = e.target.id;
    const selectedSeat = bookingSeats.filter(
      (bookingSeats) => bookingSeats.seatId !== seatId
    );

    if (checked === true) {
      setTicketPrice(value + ticketPrice);
      selectedSeat.push({ seatId, scheduleId, bookingId});
    } else setTicketPrice(ticketPrice - value);

    setBookingSeats(selectedSeat);

    console.log("bookingSeat: ", selectedSeat);
  };

  // get all combos
  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await api.get("/resource/combo");
        if (response.status === 200) {
          setCombos(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCombos();
  }, []);

  // total combos
  const quantityAndSubtotal = (e) => {
    const quantity = e.target.value;
    const comboId = e.target.id;
    const newOrder = orders.filter((orders) => orders.comboId !== comboId);
    const totalPerCombo = subtotal.filter(
      (subtotal) => subtotal.comboId !== comboId
    );
    const price = Number(
      combos
        .filter((combos) => combos.id == comboId)
        .map((combo) => combo.price)
    );

    if (quantity > 0) {
      newOrder.push({ quantity, comboId, bookingId });
      totalPerCombo.push({ subtotal: quantity * price, comboId });
    }

    setOrders(newOrder);
    setSubtotal(totalPerCombo);

    if (totalPerCombo.length > 0) {
      setTotalCombos(
        totalPerCombo
          .map((combo) => combo.subtotal)
          .reduce((a, b) => {
            return a + b;
          })
      );
    } else setTotalCombos(0);

    console.log("perCombo:", totalPerCombo);
  };

  // Get Ticket Information (movie)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(`/movies/${movieId}`);

        if (response.status === 200) {
          setMovie(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  // Get Ticket Information (schedule)
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await api.get(`/resource/${scheduleId}`);
        if (response.status === 200) {
          setSchedule(response.data);
          console.log("schedule: ", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSchedule();
  }, []);

  // handle
  const handlePrevious = async () => {
    if (displaySeats === "none") {
      setDisplayCombos("none");
      setDisplaySeats("block");
    }
  };
  const handleNext = (e) => {    
    if (displaySeats === "block") {
      if (ticketPrice === 0) {
        alert("Please choose your seats first.");
      } else {
        setDisplaySeats("none");
        setDisplayCombos("block");
      }
    } else {
      addBookingSeats(bookingSeats);
      addOrderCombos(orders);
      navigate("/");
    };
  };

  const addBookingSeats = async (sendingData) => {
    try {
      await api.post(
        `booking/booking-seat`,sendingData
      );
    } catch (error) {
      console.log(error);
    }
  };
  const addOrderCombos = async (sendingData) => {
    try {
      await api.post(
        `booking/order-combo`,sendingData
      );
    } catch (error) {
      console.log(error);
    }
  };

  // format currency
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="bg-gradient-to-b from-purple-700 to-white px-5 py-10">
      <div className="container mx-auto border-2">
        <div className="page-title text-white">
          <h1>BOOKING ONLINE</h1>
        </div>

        {/* Booking Seats */}
        <section
          style={{ display: `${displaySeats}` }}
          className="lg:w-3/5 container mx-auto"
        >
          <div className="px-5 py-10 mx-auto">
            {/* Screen */}
            <div className="screen" />

            {/* Get all seats */}
            <div className="mt-10 ml-5 mr-10">
              <ul className="grid gap-6 md:grid-cols-10">
                {seats.map((seat) => {
                  const id = seat.id;

                  // seats are sold
                  function isSold(array) {
                    return array.seatId === id;
                  }
                  if (sold.find(isSold)) {
                    return (
                      <li key={seat.id}>
                        <label className="rounded-t-3xl bg-black mb-3 ml-1.5 px-5 py-2.5 border-2 border-black relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white">
                          {seat.name}
                        </label>
                      </li>
                    );
                  }

                  // seats are left
                  return (
                    <li key={seat.id}>
                      <input
                        type="checkbox"
                        id={seat.id}
                        value={seat.SeatType.price}
                        className="hidden peer"
                        onClick={totalTicketPrice}
                      />
                      <label
                        htmlFor={seat.id}
                        className={
                          seat.SeatType.type === "Normal"
                            ? "rounded-t-3xl bg-white mb-3 ml-1.5 px-5 py-2.5 border-2 border-green-500 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 peer-checked:bg-purple-500 peer-checked:ring-4 peer-checked:outline-none peer-checked:ring-purple-200 peer-checked:text-white peer-checked:border-none"
                            : "rounded-t-3xl bg-white mb-3 ml-1.5 px-5 py-2.5 border-2 border-red-600 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 peer-checked:bg-purple-500 peer-checked:ring-4 peer-checked:outline-none peer-checked:ring-purple-200 peer-checked:text-white peer-checked:border-none"
                        }
                      >
                        {seat.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Note */}
            <div>
              <ul className="showcase">
                <li>
                  <div className="rounded-t-2xl bg-white mb-3 ml-3 px-5 py-2.5 border-2 border-green-500 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2"></div>
                  <small>Normal</small>
                </li>
                <li>
                  <div className="rounded-t-2xl bg-white mb-3 ml-3 px-5 py-2.5 border-2 border-red-600 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2"></div>
                  <small>VIP</small>
                </li>
                <li>
                  <div className="rounded-t-2xl bg-purple-500 mb-3 ml-3 px-5 py-2.5 border-2 border-purple-500 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 "></div>
                  <small>Selected</small>
                </li>
                <li>
                  <div className="rounded-t-2xl bg-black mb-3 ml-3 px-5 py-2.5 border-2 border-black relative inline-flex items-center justify-center p-0.5 mb-2 mr-2"></div>
                  <small>Sold</small>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Order Combo */}
        <section
          className="bg-gradient-to-b from-purple-700 to-white"
          style={{ display: `${displayCombos}` }}
        >
          <div className="w-full container px-5 mx-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <form className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
                {combos.map((combo) => {
                  return (
                    <div
                      className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-purple-800 dark:border-purple-700"
                      key={combo.id}
                    >
                      <img
                        className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                        src={`${combo.imageUrl}`}
                        alt={combo.name}
                        style={{ height: 250 }}
                      />
                      <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-purple-900 dark:text-white ">
                          <b>{combo.name}</b>
                        </h3>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                          {combo.detail}
                        </p>
                        <p className="mt-3 mb-4 font-light text-red-500 dark:text-gray-400">
                          <b>Price: {numberFormat.format(combo.price)}</b>
                        </p>
                        <label htmlFor={combo.id}>Quantity: </label>
                        <input
                          type="number"
                          id={combo.id}
                          placeholder={0}
                          min={0}
                          max={4}
                          onChange={quantityAndSubtotal}
                        />
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
          </div>
        </section>

        {/* Displaying Ticket Information */}
        <section>
          <div className="bottom-content">
            <div className="format-bg-top"></div>
            <div className="flex">
              <a
                className="btn-left "
                title="Previous"
                onClick={handlePrevious}
              >
                Previous
              </a>

              <div className="minicart-wrapper w-10/12">
                  <ul className="flex container mx-auto">
                  <li className="item first">
                    <div className="product-details">
                      <table className="info-wrapper">
                        <colgroup>
                          <col width="40%" />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="p-1"
                                src={movie.movieImage}
                                alt={movie.title}
                              />
                            </td>
                            <td>
                              <table className="info-wrapper">
                                <tbody>
                                  <tr>
                                    <td className="label px-2">
                                      {movie.title}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>

                  <li className="item">
                    <div className="product-details">
                      <table className="info-wrapper">
                        <tbody>
                          <tr>
                            <td className="label">Schedule</td>
                            <td className="px-1">{schedule.timeSchedule}</td>
                          </tr>
                          <tr>
                            <td className="label"></td>
                            <td className="px-1">{schedule.launchDate}</td>
                          </tr>
                          <tr>
                            <td className="label">Room</td>
                            <td className="px-1">{schedule.room}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>

                  <li className="item">
                    <div className="product-details">
                      <table className="info-wrapper">
                        <thead>
                          <tr className="block-box">
                            <td className="label">Ticket Price</td>
                            <td className="price px-1">{numberFormat.format(ticketPrice)}</td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="block-con">
                            <td className="label">Combo</td>
                            <td className="price px-1">{numberFormat.format(totalCombos)}</td>
                          </tr>
                        </tbody>

                        <tfoot className="block-price">
                          <tr>
                            <td className="label">Total</td>
                            <td className="price px-1" colSpan="2">
                            {numberFormat.format(totalCombos+ticketPrice)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </li>
                </ul>                
              </div>

              <a className="btn-right box " title="Next" onClick={handleNext}>
                Next
              </a>
            </div>
            <div className="format-bg-bottom"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Booking;
