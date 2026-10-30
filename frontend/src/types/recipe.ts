export interface Ingredient {
  ingredient: string;
  amount: number;
  unit: string;
  /** Optional upper bound for ingredients whose original recipe gives a range. */
  maxAmount?: number;
  note?: string;
}

export interface Recipe {
  name: string;
  category: string;
  originalServings: number;
  servingUnit: 'rolls' | 'slices' | 'loaves';
  /** Optional display range if the recipe yields an approximate number of pieces. */
  yieldRange?: { min: number; max: number };
  sections: Record<string, Ingredient[]>;
  instructions: string[];
  /** Flags source details that still need confirmation before publication. */
  verificationNotes?: string[];
}
