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
const TEXT_FONT = {
  SIZE: `16px`,
  FAMILY: `PT Mono`,
};
const BAR_COLOR = {
  HUE: 240,
  SATURATION: 0,
  LIGHTNESS: 30,
  ALPHA: 1,
};

const renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const renderText = function (ctx, text, x, y, color, fontSize, fontFamily) {
  ctx.font = `${fontSize} ${fontFamily}`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const getBarColor = function (name) {
  let saturation = Math.floor(Math.random() * Math.floor(101));

  if (name === `Вы`) {
    return `rgba(255, 0, 0, 1)`;
  }
  return `hsla(${BAR_COLOR.HUE}, ${saturation}%, ${BAR_COLOR.LIGHTNESS}%, ${BAR_COLOR.ALPHA})`;
};

window.renderStatistics = function (ctx, names, times) {
  renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, `rgba(0, 0, 0, 0.3)`);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, `#fff`);

  renderText(
      ctx,
      `Ура вы победили!`,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + TEXT_GAP,
      `#000`,
      TEXT_FONT.SIZE,
      TEXT_FONT.FAMILY
  );

  renderText(
      ctx,
      `Список результатов:`,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + TEXT_GAP + TEXT_HEIGHT,
      `#000`,
      TEXT_FONT.SIZE,
      TEXT_FONT.FAMILY
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    renderText(
        ctx,
        names[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP,
        `#000`,
        TEXT_FONT.SIZE,
        TEXT_FONT.FAMILY
    );

    let barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;

    renderRect(
        ctx,
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        -barHeight,
        getBarColor(names[i])
    );

    renderText(
        ctx,
        `${Math.round(times[i])}`,
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT - barHeight - GAP,
        `#000`,
        TEXT_FONT.SIZE,
        TEXT_FONT.FAMILY
    );
  }
};
