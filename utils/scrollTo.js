/**
 * scrollTo - Horizontal Scrolling
 * @param {(HTMLElement ref)} element - Scroll Container
 * @param {number} scrollPixels - pixel to scroll
 * @param {number} duration -  Duration of scrolling animation in millisec
 */
export default function scrollTo(element, scrollPixels, duration) {
  const scrollPos = element.scrollLeft;
  // Condition to check if scrolling is required
  if (
    !(
      (scrollPos === 0 || scrollPixels > 0) &&
      (element.clientWidth + scrollPos === element.scrollWidth ||
        scrollPixels < 0)
    )
  ) {
    // Get the start timestamp
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll(timestamp) {
      // Calculate the timeelapsed
      const timeElapsed = timestamp - startTime;
      // Calculate progress
      const progress = Math.min(timeElapsed / duration, 1);
      // Set the scrolleft
      element.scrollLeft = scrollPos + scrollPixels * progress;
      // Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
      if (timeElapsed < duration) {
        // Request for animation
        window.requestAnimationFrame(scroll);
      }
    }
    // Call requestAnimationFrame on scroll function first time
    window.requestAnimationFrame(scroll);
  }
}
