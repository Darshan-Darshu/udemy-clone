import React, { useEffect, useState } from "react";
import "./NewInfo.css";

function NewInfo() {
  const [open, setOpen] = useState(true);
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const closeBannerHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="newInfo">
          <div className="newInfo__details">
            <p>
              <span>Today only </span> | 24-Hour Flash Sale.
              Get courses for as little as ₹490.
            </p>
            <h1>
              Ends in
              {hours === 0 &&
              minutes === 0 &&
              seconds === 0 ? null : (
                <span>
                  {" "}
                  {hours < 10
                    ? `0${hours}hr `
                    : `${hours}hr `}
                  {minutes < 10
                    ? `0${minutes}m `
                    : `${minutes}m `}
                  {seconds < 10
                    ? `0${seconds}s`
                    : `${seconds}s`}
                </span>
              )}
            </h1>
          </div>
          <div className="newInfo__btn">
            <button onClick={closeBannerHandler}>X</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewInfo;
