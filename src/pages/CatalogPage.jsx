import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CarCard from "@/components/CarCard";
import Header from "@/components/Header";

import { selectCars, selectIsLoading } from "@/redux/cars/selectors";
import { selectFilters } from "@/redux/filters/selectors";
import { fetchCars } from "@/redux/cars/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [dispatch, filters]);
  console.log(cars);

  return (
    <>
      <Header />
      <div className="max-w-[1232px] m-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 py-8">
        {isLoading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          cars.map((car) => <CarCard key={car.id} car={car} />)
        )}
      </div>
    </>
  );
};

export default CatalogPage;
