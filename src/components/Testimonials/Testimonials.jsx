import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonials";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion"; // ✅ Corrected Import

export const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        {testimonialsData.length > 0 && (
          <>
            <motion.span 
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            >{testimonialsData[selected].review}</motion.span>
            <span>
              <span style={{ color: "var(--orange)" }}>
                {testimonialsData[selected].name}
              </span>{" "}
              - {testimonialsData[selected].status}
            </span>
          </>
        )}
      </div>
      <div className="right-t">
        <motion.div
          key={selected} // ✅ Ensures animation runs when `selected` changes
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          key={selected} // ✅ Added for smooth transitions
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        {testimonialsData.length > 0 && (
          <motion.img 
          key={selected}
          initial={{opacity: 0, x:100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="Testimonial" />
        )}
        {/* <div className="arrows">
          <img
            onClick={() => {
              setSelected(selected === 0 ? tLength - 1 : selected - 1);
            }}
            src={leftArrow}
            alt="Left Arrow"
          />
          <img
            onClick={() => {
              setSelected(selected === tLength - 1 ? 0 : selected + 1);
            }}
            src={rightArrow}
            alt="Right Arrow"
          />
        </div> */}
      </div>
    </div>
  );
};
