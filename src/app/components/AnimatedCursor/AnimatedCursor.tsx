"use client";
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./Cursor.module.scss";

interface Position {
  x: number;
  y: number;
}

const AnimatedCursor: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<Position>({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [cursorStyle, setCursorStyle] = useState<string>("");
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setCirclePosition((prevPosition) => {
        const dx = dotPosition.x - prevPosition.x;
        const dy = dotPosition.y - prevPosition.y;
        return {
          x: prevPosition.x + dx * 0.1,
          y: prevPosition.y + dy * 0.1,
        };
      });
    };

    const interval = setInterval(followCursor, 1);
    return () => clearInterval(interval);
  }, [dotPosition]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setCursorStyle(styles.hovered); // You can define your custom cursor style in Cursor.module.scss
    };

    const handleMouseLeave = () => {
      setCursorStyle(""); // Reset to default cursor style
    };

    const elements = document.querySelectorAll(".hover-target"); // Adjust the selector to your specific elements

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={cn(styles.animatedDot, cursorStyle)}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
      <div
        ref={circleRef}
        className={cn(styles.animatedCircle, cursorStyle)}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
