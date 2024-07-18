import React, { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout"; // Make sure you have this component

function ResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 780);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default ResponsiveLayout;
