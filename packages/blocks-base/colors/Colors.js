const variablesJson = require('../variables.json');

const isIE = (typeof window !== 'undefined') ? window.navigator.userAgent.match(/(MSIE|Trident)/) : false;

function getColorValue(name) {
  const hexValue = variablesJson[`${name}-hex`];
  if (isIE) {
    return hexValue;
  }
  const pieces = name.split('-');
  let color = variablesJson[pieces[0]];
  if (pieces.length > 1) color = color[pieces[1]];
  return color.replace(new RegExp(/\$(.*)hex/, 'gm'), hexValue);
}

// Color list that enables use of Blocks colors from JavaScript code
// For example, passing a fill color to a React Icon SVG component.
// IE doesn't like css custom properties, so just passing 'var(--brand-00)'
// is not ideal - we want to pass a hex value in that case.
const Colors = {};

Colors.BRAND_00 = getColorValue('brand-00');
Colors.BRAND_01 = getColorValue('brand-01');

Colors.PRIMARY_00 = getColorValue('primary-00');
Colors.PRIMARY_01 = getColorValue('primary-01');
Colors.PRIMARY_02 = getColorValue('primary-02');
Colors.PRIMARY_03 = getColorValue('primary-03');

Colors.SECONDARY_00 = getColorValue('secondary-00');
Colors.SECONDARY_01 = getColorValue('secondary-01');
Colors.SECONDARY_02 = getColorValue('secondary-02');
Colors.SECONDARY_03 = getColorValue('secondary-03');

Colors.LIGHT_00 = getColorValue('light-00');
Colors.LIGHT_01 = getColorValue('light-01');
Colors.LIGHT_02 = getColorValue('light-02');

Colors.DARK_00 = getColorValue('dark-00');
Colors.DARK_01 = getColorValue('dark-01');
Colors.DARK_02 = getColorValue('dark-02');
Colors.DARK_03 = getColorValue('dark-03');

Colors.DANGER_00 = getColorValue('danger-00');
Colors.DANGER_01 = getColorValue('danger-01');
Colors.DANGER_02 = getColorValue('danger-02');
Colors.DANGER_03 = getColorValue('danger-03');

Colors.WARNING = getColorValue('warning');
Colors.SUCCESS = getColorValue('success');
Colors.INFORMATION = getColorValue('information');
Colors.FOCUS = getColorValue('focus');
Colors.SHADOW = getColorValue('shadow');

module.exports = Colors;
