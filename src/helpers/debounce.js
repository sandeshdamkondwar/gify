export default (func, wait = 20, immediate = true) => {
  let timeOut;
  return (...args) => {
    let context = this;
    const later = () => {
      timeOut = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
