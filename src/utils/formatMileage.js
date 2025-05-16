export const formatMileage = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " km";
