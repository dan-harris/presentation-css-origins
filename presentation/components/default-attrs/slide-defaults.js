/**
 * default slide theme attributes
 */
export const defaultBG = {
  textColor: 'textAlternate',
  bgColor: 'backgroundAlternate'
};

/**
 * highlight slide theme attributes
 */
export const highlightBG = {
  bgColor: 'backgroundDefault',
  bgSize: 'auto'
};

/**
 * default code slide theme attributes
 */
export const defaultCodeBG = {
  ...defaultBG,
  transition: [],
  lang: 'markup',
  className: 'codeslide',
  showLineNumbers: false
};
