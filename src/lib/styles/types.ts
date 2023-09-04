export type ThemeVariables = {
  bg_main: string;
};

export type Theme = 'light';
export type VariableKey = keyof ThemeVariables;
export type ThemedPalette = Record<VariableKey, string>;
