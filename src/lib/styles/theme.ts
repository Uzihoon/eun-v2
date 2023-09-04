import palette from './palette';
import { Theme, ThemedPalette, ThemeVariables, VariableKey } from './types';
import { buildCssVariables, cssVar } from './utilities';

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_main: palette.grey[10],
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
