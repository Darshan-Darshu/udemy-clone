import React, { useState } from "react";
import MyProcess from "./MyProcess";
import "./MyProcesses.css";

function MyProcesses() {
  const [dismiss, setDismiss] = useState(true);

  const dismissHandler = () => {
    setDismiss(false);
  };
  return (
    <div className="myProcesses">
      <div className="myProcesses__header">
        <h1>Let's start learning, Darshan</h1>
        <a href="www.udemy.com">My learning</a>
      </div>
      <div className="myProcesses__main">
        <MyProcess />
        <MyProcess value={325} maxValue={1000} />
        <MyProcess value={225} maxValue={568} />
      </div>
      {dismiss && (
        <div className="myProcesses__courseDetails">
          <p>
            <span>Training 5 or more people?</span> Get your
            team access to Udemy's top 6,000+ courses
          </p>

          <div className="myProcesses__links">
            <a href="www.udemy.com">Get Udemy Business</a>
            <button onClick={dismissHandler}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProcesses;
