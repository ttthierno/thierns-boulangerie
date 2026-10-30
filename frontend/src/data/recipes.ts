import type { Recipe } from '../types/recipe';

export const recipes: Record<string, Recipe> = {
  'cinnamon-rolls': {
    name: 'Classic Cinnamon Rolls', category: 'Pastries', originalServings: 8, servingUnit: 'rolls',
    sections: {
      dough: [
        { ingredient: 'flour', amount: 450, unit: 'g' },
        { ingredient: 'white sugar', amount: 100, unit: 'g' },
        { ingredient: 'salt', amount: 8, unit: 'g' },
        { ingredient: 'baking soda', amount: 2, unit: 'g' },
        { ingredient: 'active dry yeast', amount: 7, unit: 'g' },
        { ingredient: 'milk', amount: 115, unit: 'g' },
        { ingredient: 'plain yogurt', amount: 225, unit: 'g', note: 'Greek yogurt or sour cream also works' },
        { ingredient: 'unsalted butter', amount: 115, unit: 'g' },
      ],
      filling: [
        { ingredient: 'softened unsalted butter', amount: 115, unit: 'g' },
        { ingredient: 'brown sugar', amount: 150, unit: 'g' },
        { ingredient: 'cinnamon', amount: 20, unit: 'g' },
        { ingredient: 'salt', amount: 1, unit: 'g' },
      ],
      icing: [
        { ingredient: 'cream cheese', amount: 25, unit: 'g' },
        { ingredient: 'heavy cream', amount: 75, unit: 'g' },
        { ingredient: 'powdered sugar', amount: 150, unit: 'g' },
        { ingredient: 'water', amount: 10, unit: 'g' },
        { ingredient: 'salt', amount: 1, unit: 'g' },
      ],
    }, instructions: [],
  },
  'oreo-cinnamon-rolls': {
    name: 'Oreo Cinnamon Rolls', category: 'Pastries', originalServings: 12, servingUnit: 'rolls',
    yieldRange: { min: 10, max: 12 },
    sections: {
      dough: [
        { ingredient: 'bread flour', amount: 350, unit: 'g' },
        { ingredient: 'all-purpose flour', amount: 100, unit: 'g' },
        { ingredient: 'sugar', amount: 85, unit: 'g' },
        { ingredient: 'yeast', amount: 5, unit: 'g' },
        { ingredient: 'salt', amount: 8, unit: 'g' },
        { ingredient: 'baking soda', amount: 1, unit: 'g' },
        { ingredient: 'unsalted butter', amount: 115, unit: 'g' },
        { ingredient: 'vanilla yogurt', amount: 225, unit: 'g' },
        { ingredient: 'milk', amount: 115, unit: 'g' },
        { ingredient: 'crushed Oreos', amount: 70, maxAmount: 80, unit: 'g' },
      ],
      filling: [
        { ingredient: 'softened butter', amount: 115, unit: 'g' },
        { ingredient: 'brown sugar', amount: 130, unit: 'g' },
        { ingredient: 'cinnamon', amount: 14, unit: 'g' },
        { ingredient: 'salt', amount: 1, unit: 'g' },
        { ingredient: 'crushed Oreos', amount: 100, maxAmount: 110, unit: 'g' },
      ],
      frosting: [
        { ingredient: 'cream cheese', amount: 115, unit: 'g' },
        { ingredient: 'butter', amount: 45, unit: 'g' },
        { ingredient: 'powdered sugar', amount: 100, maxAmount: 120, unit: 'g' },
        { ingredient: 'vanilla', amount: 5, unit: 'g' },
        { ingredient: 'salt', amount: 1, unit: 'g' },
        { ingredient: 'milk', amount: 10, maxAmount: 20, unit: 'g' },
      ],
    }, instructions: [],
    verificationNotes: ['Original yield was approximately 10–12 rolls; 12 is the scaling baseline.'],
  },
  'banana-bread': {
    name: 'Classic Banana Bread', category: 'Quick Breads', originalServings: 10, servingUnit: 'slices',
    sections: {
      batter: [
        { ingredient: 'ripe banana', amount: 450, unit: 'g' },
        { ingredient: 'butter', amount: 90, unit: 'g' },
        { ingredient: 'eggs', amount: 3, unit: 'count' },
        { ingredient: 'dark brown sugar', amount: 150, unit: 'g' },
        { ingredient: 'vanilla extract', amount: 4, unit: 'g' },
        { ingredient: 'sour cream', amount: 110, unit: 'g' },
        { ingredient: 'olive oil', amount: 30, unit: 'g' },
        { ingredient: 'all-purpose flour', amount: 330, unit: 'g' },
        { ingredient: 'salt', amount: 10, unit: 'g' },
        { ingredient: 'baking powder', amount: 12, unit: 'g' },
        { ingredient: 'baking soda', amount: 5, unit: 'g' },
      ],
    }, instructions: [],
    verificationNotes: ['Uses the selected 150 g brown sugar version; no molasses.'],
  },
  'overnight-brioche': {
    name: 'Overnight Butter Brioche', category: 'Breads', originalServings: 2, servingUnit: 'loaves',
    sections: {
      dough: [
        { ingredient: 'bread flour', amount: 650, unit: 'g' },
        { ingredient: 'eggs', amount: 300, unit: 'g', note: 'Approximately 6 eggs, weighed without shells' },
        { ingredient: 'whole milk', amount: 100, unit: 'g' },
        { ingredient: 'sugar', amount: 95, unit: 'g' },
        { ingredient: 'fine salt', amount: 13, unit: 'g' },
        { ingredient: 'instant yeast', amount: 9, unit: 'g' },
        { ingredient: 'unsalted butter', amount: 260, unit: 'g', note: '40% of flour weight' },
      ],
      eggWash: [
        { ingredient: 'egg', amount: 1, unit: 'count' },
        { ingredient: 'milk', amount: 15, unit: 'g' },
      ],
    }, instructions: [],
  },
  'tiramisu-mascarpone-loaf': {
    name: 'Tiramisu Mascarpone Loaf Cake', category: 'Cakes', originalServings: 10, servingUnit: 'slices',
    yieldRange: { min: 8, max: 10 },
    sections: {
      espressoPoundCake: [
        { ingredient: 'flour', amount: 200, unit: 'g' },
        { ingredient: 'butter', amount: 140, unit: 'g' },
        { ingredient: 'sugar', amount: 150, unit: 'g' },
        { ingredient: 'eggs', amount: 150, unit: 'g', note: 'Approximately 3 eggs, without shells' },
        { ingredient: 'sour cream', amount: 100, unit: 'g' },
        { ingredient: 'milk', amount: 30, unit: 'g' },
        { ingredient: 'baking powder', amount: 5, unit: 'g' },
        { ingredient: 'salt', amount: 3, unit: 'g' },
        { ingredient: 'vanilla', amount: 5, unit: 'g' },
        { ingredient: 'espresso powder', amount: 5, unit: 'g' },
      ],
      coffeeSoakingSyrup: [
        { ingredient: 'brewed coffee', amount: 50, unit: 'g' },
        { ingredient: 'sugar', amount: 15, unit: 'g' },
      ],
      mascarponeWhippedCream: [
        { ingredient: 'heavy cream', amount: 200, unit: 'g' },
        { ingredient: 'mascarpone', amount: 120, unit: 'g' },
        { ingredient: 'powdered sugar', amount: 40, unit: 'g' },
        { ingredient: 'vanilla', amount: 5, unit: 'g' },
        { ingredient: 'cocoa powder', amount: 5, maxAmount: 10, unit: 'g', note: 'For dusting' },
      ],
    }, instructions: [],
    verificationNotes: ['Yield is approximately 8–10 slices; 10 is the scaling baseline.'],
  },
};
