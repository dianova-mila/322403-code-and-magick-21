'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TEXT_GAP = 25;
const TEXT_HEIGHT = 20;
const BAR_WIDTH = 40;
const BAR_GAP = 50;
const MAX_BAR_HEIGHT = 150;
const font = {
  SIZE: `16px`,
  FAMILY: `PT Mono`,
};

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.3)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;

  ctx.font = `${font.SIZE} ${font.FAMILY}`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXT_HEIGHT);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP
    );

    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      let barSaturation = getRandomInt(101);
      ctx.fillStyle = `hsla(240, ${barSaturation}%, 30%, 1)`;
    }

    let barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        -barHeight
    );

    ctx.fillStyle = `#000`;

    ctx.fillText(
        `${Math.round(times[i])}`,
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT - barHeight - GAP
    );
  }
};
