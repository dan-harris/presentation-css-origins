/* eslint-disable promise/avoid-new */
export const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
