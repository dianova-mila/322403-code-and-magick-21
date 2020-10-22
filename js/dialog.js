'use strict';

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setup = document.querySelector(`.setup`);
  const setupClose = setup.querySelector(`.setup-close`);

  const onPopupEscPress = (evt) => {
    window.util.isEscEvent(evt, closePopup);
  };

  const openPopup = () => {
    setup.classList.remove(`hidden`);
    setup.style.top = `80px`;
    setup.style.left = `50%`;
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = () => {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, () => openPopup());

  setupOpen.addEventListener(`keydown`, (evt) => {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, () => closePopup());

  setupClose.addEventListener(`keydown`, (evt) => {
    window.util.isEnterEvent(evt, closePopup);
  });

  const dialogHandle = setup.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;

    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

})();
