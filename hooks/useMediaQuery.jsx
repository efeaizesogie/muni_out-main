import { useEffect, useState } from "react";

export function useMediaQuery(breakpoint) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    const handleResize = () => {
      const sizeCheck = window.innerWidth <= breakpoint;
      if (mobile !== sizeCheck) setMobile(sizeCheck);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, mobile]);

  return { mobile };
}
