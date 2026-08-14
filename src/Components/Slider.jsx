import { motion, useAnimation } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function Slider({ children }) {
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    setMaxPosition(Math.max(0, sliderWidth - containerWidth));
  }, [children]);

  const moveSlider = (direction) => {
    const step = 500;
    const newPosition = Math.max(-maxPosition, Math.min(0, position + direction * step));
    setPosition(newPosition);
    controls.start({
      x: newPosition,
      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] }
    });
  };

  return (
    <>
      <div className="section__process__innercontainer--slidercontainer" ref={containerRef}>
        <motion.div
          className="section__process__innercontainer--sliderinnercontainer"
          ref={sliderRef}
          animate={controls}
          initial={false}
        >
          {children}
        </motion.div>
      </div>
      <div className="section__process__innercontainer--buttoncontainer">
        <img
          src="/media/Asset__arrow-left.svg"
          alt=""
          className="section__process__innercontainer--buttonleft"
          onClick={() => moveSlider(1)}
        />
        <img
          src="/media/Asset__arrow-right.svg"
          alt=""
          className="section__process__innercontainer--buttonright"
          onClick={() => moveSlider(-1)}
        />
      </div>
    </>
  );
}