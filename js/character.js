'use strict';

(function () {
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
  const setupWizard = document.querySelector(`.setup-wizard`);
  const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);

  window.colorize(setupWizardCoat, WIZARD_COAT_COLORS, `coat-color`);
  window.colorize(setupWizardEyes, WIZARD_EYES_COLORS, `eyes-color`);
  window.colorize(setupWizardFireball, WIZARD_FIREBALL_COLORS, `fireball-color`);
})();
