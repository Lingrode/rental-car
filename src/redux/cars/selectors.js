export const selectCars = (state) => state.cars.items.cars;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectTotalCars = (state) => state.cars.items.totalCars;
export const selectTotalPages = (state) => state.cars.items.totalPages;
export const selectCurrentPage = (state) => state.cars.items.currentPage;
