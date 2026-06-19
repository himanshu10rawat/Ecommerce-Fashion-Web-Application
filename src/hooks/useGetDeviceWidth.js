"use client";

import { useEffect, useState, useRef } from "react";

export default function useGetDeviceWidth() {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);

    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceWidth;
}
