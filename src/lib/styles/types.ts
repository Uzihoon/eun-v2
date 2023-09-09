export type ThemeVariables = {
  // Background
  bg_main: string;
  bg_hover: string;
  bg_nav: string;
  bg_paper: string;
  bg_input: string;
  bg_hover_input: string;
  bg_upload: string;
  bg_hover_upload: string;

  // Border
  border_nav: string;
  border_input: string;
  border_upload: string;
  border_radio: string;

  // Text
  header_txt: string;
  desc_txt: string;
  required_txt: string;
  label_txt: string;
  normal_txt: string;
  upload_desc_txt: string;
  file_txt: string;

  // Point
  primary_color: string;
};

export type Theme = 'light';
export type VariableKey = keyof ThemeVariables;
export type ThemedPalette = Record<VariableKey, string>;
