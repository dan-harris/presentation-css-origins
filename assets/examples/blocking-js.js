/* eslint-disable no-constant-condition */
/* eslint-disable func-style */
// @ts-nocheck
/**
 * monkey patch window with some helper functions used to emulate a blocking js call
 * with help of some base code from https://sergeche.github.io/gpu-article-assets/examples/js-vs-css.html
 */

/**
 * get our blocking js element
 */
function getBlockingJSElement() {
  return document.querySelector('.blocking-js');
}

/**
 * emulate a blocking JS calculation/logic/whatever 🤷‍♀
 */
window.runBlockingJS = function runBlockingJS({ duration = 1000, start = Date.now() }) {
  const blockingJSElement = getBlockingJSElement();
  blockingJSElement.classList.toggle('stop');
  setTimeout(() => {
    while (true) {
      if (Date.now() - start >= duration) {
        blockingJSElement.classList.toggle('stop');
        break;
      }
    }
  }, 100);
};
