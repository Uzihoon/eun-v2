import { ThemeVariables } from './types';

export const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce((acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'), '');
};

export const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;
