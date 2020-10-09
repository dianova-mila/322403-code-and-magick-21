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

const SIMILAR_WIZARDS_LIST = document.querySelector(`.setup-similar-list`);
const WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const showUserSettings = () => {
  document.querySelector(`.setup`).classList.remove(`hidden`);
  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
showUserSettings();

const getArrayRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const getWizardsArray = () => {
  let wizards = [];

  for (let i = 0; i < 4; i++) {
    let wizard = {
      name: `${getArrayRandomElement(WIZARD_NAMES)} ${getArrayRandomElement(WIZARD_SURNAMES)}`,
      coatColor: getArrayRandomElement(WIZARD_COAT_COLORS),
      eyesColor: getArrayRandomElement(WIZARD_EYES_COLORS),
    };
    wizards.push(wizard);
  }

  return wizards;
};

const createWizardElement = (name, coatColor, eyesColor) => {
  let wizardElement = WIZARD_TEMPLATE.cloneNode(true);
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
  SIMILAR_WIZARDS_LIST.appendChild(fragment);
};
renderSimilarWizardsList(getWizardsArray());
