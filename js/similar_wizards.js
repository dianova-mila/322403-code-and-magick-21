'use strict';

(function () {
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
  const WIZARD_COUNT = 4;
  const wizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const similarWizardList = document.querySelector(`.setup-similar-list`);

  const getWizardsArray = () => {
    const wizards = [];

    for (let i = 0; i < WIZARD_COUNT; i++) {
      const wizard = {
        name: `${window.util.getRandomItemFromArray(WIZARD_NAMES)} ${window.util.getRandomItemFromArray(WIZARD_SURNAMES)}`,
        coatColor: window.util.getRandomItemFromArray(WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomItemFromArray(WIZARD_EYES_COLORS),
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
})();
