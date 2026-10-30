import type { Ingredient, Recipe } from '../types/recipe';

/** Pure function: never mutates the original recipe. */
export function scaleIngredients(ingredients: Ingredient[], factor: number): Ingredient[] {
  if (!Number.isFinite(factor) || factor <= 0) {
    throw new Error('scale factor must be positive');
  }
  const round = (value: number) => Math.round((value + Number.EPSILON) * 10) / 10;
  return ingredients.map(item => ({
    ...item,
    amount: round(item.amount * factor),
    ...(item.maxAmount === undefined ? {} : { maxAmount: round(item.maxAmount * factor) }),
  }));
}

export function scaleRecipe(recipe: Recipe, desiredServings: number): Record<string, Ingredient[]> {
  if (!Number.isFinite(desiredServings) || desiredServings <= 0) {
    throw new Error('desired yield must be positive');
  }
  const factor = desiredServings / recipe.originalServings;
  return Object.fromEntries(
    Object.entries(recipe.sections).map(([name, ingredients]) => [name, scaleIngredients(ingredients, factor)])
  );
}
