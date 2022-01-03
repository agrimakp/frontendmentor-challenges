export function calculatePriceLogic(
  pageViewsMultiplier = 0,
  discountPrcentage = 0
) {
  const total = pageViewsMultiplier * 16;
  const discount = total * discountPrcentage * 0.01;
  return total - discount;
}

export function calculatePageViews(pageViewsMultiplier: number) {
  return pageViewsMultiplier * 100;
}
