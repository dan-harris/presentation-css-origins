/* eslint-disable func-style */
// @ts-nocheck
/**
 * monkey patch window with some helper functions used for measuring FPS
 * with help of some base code from https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
 */

/**
 * script globals
 */
const times = [];
let fps = 0;
let lastUpdate = performance.now();

/**
 * get fps element
 */
function getFPSElement() {
  return document.querySelector('.fps-counter');
}

/**
 * debounce our fps display update
 */
function updateFPS() {
  const timeSinceLastUpdate = performance.now() - lastUpdate;
  if (timeSinceLastUpdate >= 50) {
    lastUpdate = performance.now();
    const FPSElement = getFPSElement();
    FPSElement.textContent = fps;
  }
}

/**
 * refresh current fps count
 */
function refreshFPS() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    updateFPS();
    if (window.RUN_FPS_CHECK) window.refreshFPS();
  });
}

/**
 * flag for switching toggling  fps checking
 */
window.RUN_FPS_CHECK = true;

/**
 * start the refresh current fps count
 */
window.startRefreshFPS = function stopRefreshFPS() {
  window.RUN_FPS_CHECK = true;
  refreshFPS();
};

/**
 * stop the refresh current fps count
 */
window.stopRefreshFPS = function stopRefreshFPS() {
  window.RUN_FPS_CHECK = false;
};
