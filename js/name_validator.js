'use strict';

(function () {
  const MIN_USER_NAME_LENGTH = 2;
  const MAX_USER_NAME_LENGTH = 25;

  const setup = document.querySelector(`.setup`);
  const userNameInput = setup.querySelector(`.setup-user-name`);

  userNameInput.addEventListener(`input`, () => {
    const valueLength = userNameInput.value.length;

    if (valueLength < MIN_USER_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ${MIN_USER_NAME_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_USER_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_USER_NAME_LENGTH} симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }

    userNameInput.reportValidity();
  });
})();
