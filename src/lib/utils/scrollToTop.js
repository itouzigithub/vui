export default scrollToTop = (el = window) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    el.scrollTo(0, c - c / 8);
  }
}