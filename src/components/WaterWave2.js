import React, { useEffect, useRef, useState } from "react";
import cta from "../assets/images/cta.png";
import ctaGif from "../assets/images/cta-gif.gif";
import "./WaterWave2.css";

const WaterWave2 = ({ percent, handleFinished }) => {
  const countRef = useRef();
  const waterRef = useRef();
  const waterWaveFrontRef = useRef();
  const waterWaveBackRef = useRef();
  const [clickFlag, setClickFlag] = useState(false);

  const handleClick = () => {
    setClickFlag(true);
    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent++;
      countRef.current.innerHTML = currentPercent;
      waterRef.current.style.transform = `translate(0, ${
        100 - currentPercent
      }%)`;

      if (currentPercent === percent) {
        clearInterval(interval);
        handleFinished();
      }
    }, 40);
  };

  // useEffect(() => {
  //   let currentPercent = 10;
  //   const interval = setInterval(() => {
  //     currentPercent++;
  //     countRef.current.innerHTML = currentPercent;
  //     waterRef.current.style.transform = `translate(0, ${
  //       100 - currentPercent
  //     }%)`;

  //     if (currentPercent === percent) {
  //       clearInterval(interval);
  //     }
  //   }, 60);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [percent]);

  return (
    <div className="box">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "none" }}
      >
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
      <div className="hold-desc">Hold the button to start visualisation...</div>
      <div className="percent">
        <div className="percentNum" ref={countRef}>
          0
        </div>
        <div className="percentB">%</div>
      </div>
      <div ref={waterRef} className="water">
        <svg
          viewBox="0 0 560 20"
          id="water_wave_back"
          className="water_wave water_wave_back"
          ref={waterWaveBackRef}
        >
          <use xlinkHref="#wave" />
        </svg>
        <svg
          viewBox="0 0 560 20"
          id="water_wave_front"
          className="water_wave water_wave_front"
          ref={waterWaveFrontRef}
        >
          <use xlinkHref="#wave" />
        </svg>
      </div>
      <div
        className="btn"
        onClick={handleClick}
        style={{
          backgroundImage: clickFlag ? `url(${ctaGif})` : `url(${cta})`,
        }}
      ></div>
    </div>
  );
};

export default WaterWave2;
