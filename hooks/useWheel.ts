import { useEffect } from "react";

export const useWheel = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("main.horizontal_scroll");

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += (evt as WheelEvent).deltaY * 1.2;
      });
    }
  }, []);
};
