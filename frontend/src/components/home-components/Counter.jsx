import React, { useState, useEffect, useRef } from 'react';

const Counter = ({value}) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsAnimating(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 10% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    let start = 0;
    const end = value;
    const duration = 1000; // duration in ms
    const increment = end / duration;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        setCount(Math.min(Math.floor(start + increment * elapsed), end));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isAnimating]);

  return (
    <div ref={counterRef}>
      {isVisible && <h1 className='text-primary sm:text-6xl text-4xl font-bold mb-4'  >{count}</h1>}
    </div>
  );
};

// const styles = {
//   counter: {
//     fontSize: '4rem',
//     fontVariantNumeric: "tabular-nums"

//   },
// };

export default Counter;
