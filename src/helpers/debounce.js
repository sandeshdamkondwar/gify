export default (func, wait = 20, immediate = true) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    //Moving this line above timeout assignment
    if (immediate && !timeout) func.apply(context, args);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};
