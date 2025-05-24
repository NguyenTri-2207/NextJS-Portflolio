import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Index.module.scss";
import { motion } from "framer-motion";

const Card = ({ startYear, endYear, title, company, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="transform transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 dark:bg-gray-800/50 
        py-6 px-6 space-y-3 mb-4 rounded-xl shadow-lg hover:shadow-xl 
        transition-all duration-300 relative overflow-hidden group">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-400 dark:text-blue-300 
              bg-blue-500/10 px-3 py-1 rounded-full">
              {startYear} - {endYear}
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            />
          </div>

          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 
            bg-clip-text text-transparent transform transition-all duration-300 
            group-hover:scale-[1.02]">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 my-3 text-sm leading-relaxed 
            line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>

          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                flex items-center justify-center"
            >
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </motion.div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const settings = {
  autoplay: false,
  dots: true,
  dotPosition: "left",
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  dotsClass: `slick-dots ${styles.dots}`,
  speed: 500,
  cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
};

function SlideScroll({ data }) {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const wheelAccumulatorRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      // Check if the event target is within the slider container
      if (!containerRef.current?.contains(e.target)) {
        return;
      }

      e.preventDefault();
      if (isScrolling) return;

      // Accumulate wheel delta
      wheelAccumulatorRef.current += e.deltaY;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to reset the accumulator
      scrollTimeoutRef.current = setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 150);

      // Check if accumulated scroll is enough to trigger slide change
      const threshold = 50;
      if (Math.abs(wheelAccumulatorRef.current) > threshold) {
        setIsScrolling(true);

        if (wheelAccumulatorRef.current > 0 && currentSlide < data.length - 1) {
          // Scrolling down
          sliderRef.current?.slickNext();
        } else if (wheelAccumulatorRef.current < 0 && currentSlide > 0) {
          // Scrolling up
          sliderRef.current?.slickPrev();
        }

        // Reset accumulator after triggering
        wheelAccumulatorRef.current = 0;

        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    // Add wheel event listener to window but check for container bounds
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSlide, data.length, isScrolling]);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
    setIsScrolling(false);
  };

  return (
    <div
      className="relative min-h-[400px]"
      ref={containerRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative z-10 py-4">
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={handleAfterChange}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              startYear={item.startYear}
              endYear={item.endYear}
              company={item.company}
              description={item.description}
              title={item.title}
            />
          ))}
        </Slider>
      </div>

      {/* Optional: Visual indicator for scroll area */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
    </div>
  );
}

export default SlideScroll;
