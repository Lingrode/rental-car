import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BookForm from "@/components/BookForm";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { fetchCarById } from "@/redux/cars/operations";
import {
  selectError,
  selectIsLoading,
  selectSelectedCar,
} from "@/redux/cars/selectors";

import { formatMileage } from "@/utils/formatMileage";
import { formatAddress } from "@/utils/formatAddress";

import svgSprite from "@/assets/icons.svg";

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-20">Error: {error}</p>;
  if (!car) return null;

  const {
    img,
    brand,
    model,
    year,
    description,
    type,
    fuelConsumption,
    engineSize,
    mileage,
    rentalPrice,
    address,
    accessories,
    functionalities,
    rentalConditions,
  } = car;

  return (
    <>
      <Header />
      <main className="max-w-[1232px] mx-auto px-4 my-[84px]">
        <div className="py-10 flex gap-[72px]">
          <div>
            <img
              src={img}
              alt={model}
              className="w-full max-w-[640px] rounded-xl shadow mb-10"
            />
            <BookForm />
          </div>

          <div className="max-w-[488px] w-full flex flex-col lg:flex-row gap-10 mt-5">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {brand} {model}, {year}
              </h2>
              <div className="flex mb-4">
                <svg className="w-4 h-4">
                  <use href={`${svgSprite}#location`} />
                </svg>
                <span className="ml-2 mr-4">{formatAddress(address)}</span>
                <span>Mileage: {formatMileage(mileage)}</span>
              </div>
              <p className="text-[#3470FF] text-2xl font-semibold mb-8">
                ${rentalPrice}
              </p>

              <p className="mb-[68px] text-muted-foreground">{description}</p>

              <div className="mb-[110px]">
                <p className="text-xl mb-5">Rental Conditions:</p>
                <ul>
                  {rentalConditions.map((item) => (
                    <li key={item} className="flex items-center mb-4">
                      <svg className="w-4 h-4" aria-hidden="true">
                        <use href={`${svgSprite}#check-circle`} />
                      </svg>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-[110px]">
                <p className="text-xl mb-5">Car Specifications:</p>
                <ul>
                  <li className="flex items-center mb-4">
                    <svg className="w-4 h-4" aria-hidden="true">
                      <use href={`${svgSprite}#calendar`} />
                    </svg>
                    <span className="ml-2">Year: {year}</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <svg className="w-4 h-4" aria-hidden="true">
                      <use href={`${svgSprite}#car`} />
                    </svg>
                    <span className="ml-2">Type: {type}</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <svg className="w-4 h-4" aria-hidden="true">
                      <use href={`${svgSprite}#fuel-pump`} />
                    </svg>
                    <span className="ml-2">
                      Fuel Consumption: {fuelConsumption}
                    </span>
                  </li>
                  <li className="flex items-center mb-4">
                    <svg className="w-4 h-4" aria-hidden="true">
                      <use href={`${svgSprite}#gear`} />
                    </svg>
                    <span className="ml-2">Engine Size: {engineSize}</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xl mb-5">Accessories and functionalities:</p>
                <ul>
                  {accessories.map((item) => (
                    <li key={item} className="flex items-center mb-4">
                      <svg className="w-4 h-4" aria-hidden="true">
                        <use href={`${svgSprite}#check-circle`} />
                      </svg>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                  {functionalities.map((item) => (
                    <li key={item} className="flex items-center mb-4">
                      <svg className="w-4 h-4" aria-hidden="true">
                        <use href={`${svgSprite}#check-circle`} />
                      </svg>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CarDetailsPage;
