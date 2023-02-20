const dictionaries = {
  "pt-BR": () => import('./translations/pt_BR.json').then((module) => module.default),
};

type Dictionaries = keyof typeof dictionaries

export const getDictionary = async (locale?: Dictionaries) => dictionaries[locale ?? "pt-BR"]();
