export const getActiveFilters = (filters) =>
  Object.fromEntries(Object.entries(filters).filter(([_, val]) => val));
