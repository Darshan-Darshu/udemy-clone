import React from "react";
import "./MyProcess.css";

function MyProcess(props) {
  let fillWidth;

  if (props.maxValue > 0) {
    fillWidth =
      Math.floor((props.value / props.maxValue) * 100) +
      "%";
  }

  return (
    <div className="myProcess">
      <div className="myProcess__image">
        <img
          src="https://mp4-c.udemycdn.com/2018-07-17_05-45-11-f7d5272e4500e51e2cd4359fcef59bdc/2/thumb-1.jpg?Expires=1631299982&Signature=hB1ll4J7qxRXZGs5OkpRBsc1PAHGa4vkjk5yMpZBL18-0LvofqxYh4Pl-YhrmY7fRr868JfdJU9yfAsSaGaaQ2ss1RAbfzsjZnSMTXJQgj90PLAWK9c-a2w0h3yGHxjwlA0dNwSq~EusE8QN7ogq4s3DRiPISI1qEn0mjHHoGLKQ-TQtTbb4LA~DuIgM8A77lngGm59aMBqpR1YrnNzHdI2NHvoNW3z02YBEYq3824WU3o7ZNNvzN4Pl48aBPLyXdydx5jBxWjjGq4CBal8X2VNHw2KL9yvPKxg412~0HwMwZmaXJk0MCz6Pc3XJyiVp3dngf3JSyCE83bFv0q6CVA__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
          alt=""
        />
        <div className="myProcess__imageDuplicate" />
      </div>
      <div className="myProcess__container">
        <div className="myProcess__details">
          <h3>
            JavaScript Algorithms and Data Structures
            Masterclass
          </h3>
          <h1>195. More About Hash Tables</h1>
          <p>
            <span>Lecture</span> • 3m left
          </p>
        </div>
        {fillWidth && (
          <div className="myProcess__bar">
            <div
              className="fill__bar"
              style={{
                width: fillWidth,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProcess;
