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

/**
 * code slide with an expanded initial code selection
 */
export const expandedCodeBG = {
  ...defaultCodeBG,
  className: 'codeslide codeslide--expanded'
};

export const collapsedCodeBG = {
  ...defaultCodeBG,
  className: 'codeslide codeslide--collapsed'
};
