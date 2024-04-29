import { useRef, useEffect, RefObject } from 'react';

export default function useCoolScroll(
  rightContainer: RefObject<HTMLDivElement>,
  leftContainer: RefObject<HTMLDivElement>
): void {
  const lastTouchY = useRef<number>(0);

  const scrollSync = (delta: number): void => {
    const container1 = rightContainer.current;
    const container2 = leftContainer.current;

    if (container1 && container2) {
      // Apply scrolling to both containers
      container1.scrollBy({ top: delta, behavior: "smooth" });
      container2.scrollBy({ top: -delta, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent): void => {
      event.preventDefault();
      scrollSync(event.deltaY);
    };

    const handleTouchMove = (event: TouchEvent): void => {
      event.preventDefault();
      const touchY = event.touches[0].clientY;
      const deltaY = lastTouchY.current - touchY;
      lastTouchY.current = touchY;
      scrollSync(deltaY);
    };

    const handleTouchStart = (event: TouchEvent): void => {
      lastTouchY.current = event.touches[0].clientY;
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        const delta = event.key === "ArrowUp" ? -100 : 100;
        scrollSync(delta);
      }
    };

    // Initialize scroll positions
    if (rightContainer.current && leftContainer.current) {
      // Optionally, set both to the same scrollTop if necessary
      rightContainer.current.scrollTop = 0;
      leftContainer.current.scrollTop = leftContainer.current.scrollHeight;

      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: false });
      window.addEventListener("keydown", handleKeyDown, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [rightContainer, leftContainer]); // Include refs in the dependency array
}