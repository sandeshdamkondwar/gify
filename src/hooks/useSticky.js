import { useEffect, useState, useRef, useCallback } from "react";
import debounce from "../helpers/debounce";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return { isSticky, element };
}

export default useSticky;
