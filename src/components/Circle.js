import React, { useState, useEffect } from "react";
import "./Circle.css";

import "./Circle.css";

function Circle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let xp = 0,
      yp = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX - 15;
      mouseY = e.pageY - 15;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      xp += (mouseX - xp) / 6;
      yp += (mouseY - yp) / 6;
      setPosition({ x: xp, y: yp });
    }, 20);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const circleStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return <div className="circle" style={circleStyle}></div>;
}

export default Circle;
