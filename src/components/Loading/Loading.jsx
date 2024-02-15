import React from "react";
import Lottie from "react-lottie";
import * as animationLoading from "../../assets/animation/Loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed z-50 flex items-center justify-center w-full min-h-screen bg-white bg-opacity-80">
      <Lottie options={defaultOptions} width={"30%"} />;
    </div>
  );
};

export default Loading;
