import palette from './palette';
import { Theme, ThemedPalette, ThemeVariables, VariableKey } from './types';
import { buildCssVariables, cssVar } from './utilities';

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_main: palette.grey.l10,
    bg_hover: palette.grey.l50,
    bg_nav: palette.white,
    bg_paper: palette.white,
    border_nav: palette.grey.l200,
    header_txt: palette.white,
    desc_txt: palette.grey.l50,
  },
};

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
};

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette);
