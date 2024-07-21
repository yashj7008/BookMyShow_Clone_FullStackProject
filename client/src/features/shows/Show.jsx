import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchShowAsync, selectShow } from "./showSlice";

const Show = () => {
  const show = useSelector(selectShow);
  console.log(show);
  const dispatch = useDispatch();
  const { showId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const columns = 12;
  const totalSeats =120;
  console.log("total seats", totalSeats)  // Default to 0 if totalSeats is not defined
  const rows = Math.ceil(totalSeats / columns);

  useEffect(() => {
    dispatch(fetchShowAsync({ showId }));
  }, [showId, dispatch]);

  const handleClick = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);
    if (index > -1) {
      setSelectedSeats(selectedSeats.filter(item => item !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div>
      <p className="m-4">Screen This Side</p>
      <hr/>
      <div className="flex gap-1 flex-col p-2 card">
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="flex gap-1 justify-center">
            {Array.from({ length: columns }).map((_, column) => {
              const seatNumber = row * columns + column + 1;
              if (seatNumber > totalSeats) {
                return null;
              }
              let seatClass = "seat";
              if (selectedSeats.includes(seatNumber)) {
                seatClass += " selected-seat";
              }
              if (show.bookedSeats && show.bookedSeats.includes(seatNumber)) {
                seatClass += " booked-seat";
              }

              return (
                <div
                  key={column}
                  className={seatClass}
                  onClick={() => handleClick(seatNumber)}
                >
                  <h1 className="text-sm">{seatNumber}</h1>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
