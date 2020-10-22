'use strict';

(function () {
  window.colorize = function (element, colorsArray, inputName) {
    element.addEventListener(`click`, function () {
      const color = window.util.getRandomItemFromArray(colorsArray);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      document.querySelector(`input[name='${inputName}']`).value = color;
    });
  };
})();
