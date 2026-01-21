export function filterRecipesBySearch(recipes, search) {
  if (!recipes || !search) return recipes;

  const searchTerms = search.toLowerCase().split(" ").filter(Boolean);

  return recipes.filter(recipe =>
    searchTerms.every(term =>
      recipe.name.toLowerCase().includes(term) ||
      recipe.tags?.some(tag => tag.toLowerCase().includes(term))
    )
  );
}