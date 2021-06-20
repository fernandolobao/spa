import { variables } from './tokens.json';

export const DesignToken = (str) => {
  const [filtered] = variables.filter((x) => x.name === str);
  return filtered.value;
};
