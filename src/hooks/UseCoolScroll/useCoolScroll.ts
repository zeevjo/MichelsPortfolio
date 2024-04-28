import { useRef, useEffect, RefObject } from 'react';

export default function useCoolScroll(
  container1Ref: RefObject<HTMLDivElement>, 
  container2Ref: RefObject<HTMLDivElement>
): void {
  const lastTouchY = useRef<number>(0);

  const scrollSync = (delta: number): void => {
    const container1 = container1Ref.current;
    const container2 = container2Ref.current;

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
    if (container1Ref.current && container2Ref.current) {
      // Optionally, set both to the same scrollTop if necessary
      container1Ref.current.scrollTop = 0;
      container2Ref.current.scrollTop = container2Ref.current.scrollHeight;

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
  }, [container1Ref, container2Ref]); // Include refs in the dependency array
}
