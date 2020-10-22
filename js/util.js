'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  window.util = {
    'isEscEvent': function (evt, action) {
      if (evt.key === ESC_KEYCODE) {
        action();
      }
    },
    'isEnterEvent': function (evt, action) {
      if (evt.key === ENTER_KEYCODE) {
        action();
      }
    },
    'getRandomItemFromArray': function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
