'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARD_COUNT = 4;

const MIN_USER_NAME_LENGTH = 2;
const MAX_USER_NAME_LENGTH = 25;

const similarWizardList = document.querySelector(`.setup-similar-list`);
const wizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const userNameInput = setup.querySelector(`.setup-user-name`);

const setupWizard = document.querySelector(`.setup-wizard`);
const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);


const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

// Настройка открытия для окна настроек

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, () => openPopup());

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, () => closePopup());

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// Валидация формы ввода имени

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

// Кастомизация волшебника

setupWizardCoat.addEventListener(`click`, () => {
  const wizardCoatColor = getRandomItemFromArray(WIZARD_COAT_COLORS);
  setupWizardCoat.style.fill = wizardCoatColor;
  setup.querySelector(`input[name="coat-color"]`).value = wizardCoatColor;
});

setupWizardEyes.addEventListener(`click`, () => {
  const wizardEyesColor = getRandomItemFromArray(WIZARD_EYES_COLORS);
  setupWizardEyes.style.fill = wizardEyesColor;
  setup.querySelector(`input[name="eyes-color"]`).value = wizardEyesColor;
});

setupWizardFireball.addEventListener(`click`, () => {
  const wizardFireballColor = getRandomItemFromArray(WIZARD_FIREBALL_COLORS);
  setupWizardFireball.style.backgroundColor = wizardFireballColor;
  setupWizardFireball.querySelector(`input`).value = wizardFireballColor;
});

// Создание похожих магов

const getWizardsArray = () => {
  const wizards = [];

  for (let i = 0; i < WIZARD_COUNT; i++) {
    const wizard = {
      name: `${getRandomItemFromArray(WIZARD_NAMES)} ${getRandomItemFromArray(WIZARD_SURNAMES)}`,
      coatColor: getRandomItemFromArray(WIZARD_COAT_COLORS),
      eyesColor: getRandomItemFromArray(WIZARD_EYES_COLORS),
    };
    wizards.push(wizard);
  }

  return wizards;
};

const createWizardElement = (name, coatColor, eyesColor) => {
  let wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = eyesColor;

  return wizardElement;
};

const renderSimilarWizardsList = (wizardsList) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 4; i++) {
    fragment.appendChild(createWizardElement(wizardsList[i].name, wizardsList[i].coatColor, wizardsList[i].eyesColor));
  }
  similarWizardList.appendChild(fragment);
};
renderSimilarWizardsList(getWizardsArray());
