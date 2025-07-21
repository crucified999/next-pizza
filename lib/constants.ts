export const pizzaSizeMapping: Record<number, string> = {
  20: "20 см",
  25: "25 см",
  30: "30 см",
  35: "35 см",
};

export const pizzaTypeMapping: Record<number, string> = {
  1: "Традиционное",
  2: "Тонкое",
};

export const pizzaSizes = Object.entries(pizzaSizeMapping).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(pizzaTypeMapping).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof pizzaSizeMapping;
export type PizzaType = keyof typeof pizzaTypeMapping;