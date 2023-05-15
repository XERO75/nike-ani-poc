import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Campaign.css";
import sw1 from "../assets/images/sw1.png";
import sw2 from "../assets/images/sw2.png";
import sw3 from "../assets/images/sw3.png";
import doneCta from "../assets/images/cta-done.png";
import poster1 from "../assets/images/Poster1.png";
import poster2 from "../assets/images/Poster2.png";
import tab from "../assets/images/Tab.png";
import good1 from "../assets/images/good1.png";
import good2 from "../assets/images/good2.png";
import good3 from "../assets/images/good3.png";
import g1desc from "../assets/images/g1desc.png";
import g2desc from "../assets/images/g2desc.png";
import g3desc from "../assets/images/g3desc.png";
import WaterWave2 from "../components/WaterWave2";

function StepZero(props) {
  return (
    <div onClick={props.nextStep}>
      {/* <Swiper direction="vertical">
        <SwiperSlide>
          <img src={poster1} alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster2} alt="" className="w-100" />
        </SwiperSlide>
      </Swiper> */}
      <img src={poster2} alt="" className="w-100" />
      <img src={poster1} alt="" className="w-100" />
      <img src={tab} alt="" className="tab w-100" />
    </div>
  );
}

function StepOne(props) {
  return (
    <div className="s1 w-100 h-100" onClick={props.nextStep}>
      <Swiper
        className="s1-slider"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={sw1} alt="" className="w-100 h-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sw2} alt="" className="w-100 h-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sw3} alt="" className="w-100 h-100" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function StepTwo(props) {
  return (
    <div className="s2 w-100 h-100" onClick={props.nextStep}>
      <Swiper
        className="s2-slider"
        initialSlide={1}
        spaceBetween={-120}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="s2-swiper-item">
            <div>
              <img src={good1} alt="" />
            </div>
            <div className="s2-swiper-item-desc">
              <img src={g1desc} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="s2-swiper-item">
            <div>
              <img src={good2} alt="" />
            </div>
            <div className="s2-swiper-item-desc">
              <img src={g2desc} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="s2-swiper-item">
            <div>
              <img src={good3} alt="" />
            </div>
            <div className="s2-swiper-item-desc">
              <img src={g3desc} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function StepThree(props) {
  const [finishedFlag, setFinishedFlag] = useState(false);
  const [blur, setBlur] = useState(true);
  const [clickFlag, setClickFlag] = useState(false);

  useEffect(() => {
    // 在组件渲染后3秒后，将图片的模糊效果逐渐移除
    if (!finishedFlag) return;
    const timer = setTimeout(() => {
      setBlur(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [finishedFlag]);

  const handleClick = () => {
    setClickFlag(true);
  };

  if (finishedFlag)
    return (
      <div
        className={`blurry-image s3-done w-100 h-100 ${blur ? "" : "blurry"}`}
        onClick={handleClick}
      >
        {clickFlag && (
          <div className="done-cta">
            <img
              src={doneCta}
              alt=""
              style={{ position: "absolute", top: "389px", left: "1px" }}
            />
          </div>
        )}
      </div>
    );

  return (
    <div className="s3 w-100 h-100" onClick={props.resetStep}>
      {!finishedFlag && (
        <WaterWave2
          percent={100}
          handleFinished={() => setFinishedFlag(true)}
        ></WaterWave2>
      )}
    </div>
  );
}

function Campaign() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const resetStep = () => {
    setStep(1);
  };

  let content;
  if (step === 0) {
    content = <StepZero nextStep={nextStep} />;
  } else if (step === 1) {
    content = <StepOne nextStep={nextStep} />;
  } else if (step === 2) {
    content = <StepTwo nextStep={nextStep} />;
  } else {
    content = <StepThree />;
  }

  return <div className="campagin">{content}</div>;
}

export default Campaign;
