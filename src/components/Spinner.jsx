import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Spinner = () => {
  const spinner = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: spinner.current, //where the element will exist in the DOM
      renderer: "svg",
      loop: true, //set to true if you want it to continuously play
      autoplay: true,
      animationData: require("../assets/lotties/lottie-sunny-weather.json"), //set to where your animation is located
    });
  }, []);
  return (
    <>
      <div className="spinner" ref={spinner}></div>
    </>
  );
};

export default Spinner;
