export type ThemeVariables = {
  // Background
  bg_main: string;
  bg_hover: string;
  bg_nav: string;
  bg_paper: string;

  // Border
  border_nav: string;

  // Text
  header_txt: string;
  desc_txt: string;
};

export type Theme = 'light';
export type VariableKey = keyof ThemeVariables;
export type ThemedPalette = Record<VariableKey, string>;
