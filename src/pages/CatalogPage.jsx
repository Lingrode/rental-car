import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CarCard from "@/components/CarCard";
import Header from "@/components/Header";
import FiltersForm from "@/components/FiltersForm";
import { Button } from "@/components/ui/button";

import {
  selectCars,
  selectCurrentPage,
  selectIsLoading,
  selectTotalPages,
} from "@/redux/cars/selectors";
import { selectFilters } from "@/redux/filters/selectors";
import { fetchBrands, fetchCars } from "@/redux/cars/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);
  const totalPages = useSelector(selectTotalPages);
  const currPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars({ ...filters, page: 1 }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    if (currPage < totalPages) {
      dispatch(fetchCars({ ...filters, page: +currPage + 1 }));
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-[1232px] m-auto pt-20 pb-[125px] px-4">
        <FiltersForm />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {/* {isLoading ? (
          <p className="text-center col-span-full">Loading...</p>
          ) : (
            cars.map((car) => <CarCard key={car.id} car={car} />)
            )} */}
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {currPage < totalPages && (
          <div className="m-auto max-w-max">
            <Button variant="outline" onClick={handleLoadMore}>
              {isLoading ? "Loading..." : "Load more"}
            </Button>
          </div>
        )}
      </main>
    </>
  );
};

export default CatalogPage;
