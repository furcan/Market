enum EFilterSortOrder {
  PriceAsc = '_sort=price&_order=asc',
  PriceDesc = '_sort=price&_order=desc',
  AddedAsc = '_sort=added&_order=asc',
  AddedDesc = '_sort=added&_order=desc',
}

const mapEFilterSortOrder = new Map<string, string>([
  [EFilterSortOrder.PriceAsc, 'Price low to high'],
  [EFilterSortOrder.PriceDesc, 'Price high to low'],
  [EFilterSortOrder.AddedAsc, 'New to old'],
  [EFilterSortOrder.AddedDesc, 'Old to new'],
]);

const getFilterSortOrderText = (enumeration: string): string => {
  return mapEFilterSortOrder.get(enumeration) || '';
};

export {
  EFilterSortOrder,
  getFilterSortOrderText,
};
