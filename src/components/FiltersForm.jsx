import { useDispatch, useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { selectBrands } from "@/redux/brands/selectors";
import { setFilters } from "@/redux/filters/slice";
import { selectFilters } from "@/redux/filters/selectors";
import { fetchCars } from "@/redux/cars/operations";
import { clearCars } from "@/redux/cars/slice";

import { getActiveFilters } from "@/utils/getActiveFilters";

const priceOptions = [30, 40, 50, 60, 70, 80];

const FiltersForm = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);

  const { brand, rentalPrice, minMileage, maxMileage } =
    useSelector(selectFilters);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCars());
    dispatch(fetchCars({ ...getActiveFilters(filters) }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 items-end justify-center mb-14"
    >
      <div className="flex flex-col">
        <label className="mb-1 text-sm text-muted-foreground">Car brand</label>
        <Select
          onValueChange={(val) => {
            dispatch(setFilters({ brand: val === "any" ? "" : val }));
          }}
          value={brand}
        >
          <SelectTrigger size="" className="w-[204px] bg-[#F7F7F7] h-[44px]">
            <SelectValue placeholder="Choose a brand" />
          </SelectTrigger>
          <SelectContent className="border-none">
            <SelectGroup>
              <SelectItem value="any">All brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm text-muted-foreground">
          Price / 1 hour
        </label>
        <Select
          onValueChange={(val) => {
            // setRentalPrice(val === "any" ? "" : Number(val));
            dispatch(setFilters({ rentalPrice: val === "any" ? "" : val }));
          }}
          // onValueChange={(val) => updateParams("rentalPrice", val)}
          value={rentalPrice?.toString() || ""}
        >
          <SelectTrigger size="" className="w-[204px] h-[44px] bg-[#F7F7F7]">
            <span>{rentalPrice ? `To $${rentalPrice}` : "Choose a price"}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="any">Any</SelectItem>
              {priceOptions.map((price) => (
                <SelectItem key={price} value={`${price.toString()}`}>
                  {price}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm text-muted-foreground">
          Car mileage / km
        </label>
        <div className="flex">
          <Input
            type="number"
            placeholder="From"
            value={minMileage}
            onChange={(e) =>
              dispatch(setFilters({ minMileage: e.target.value }))
            }
            className="w-[160px] rounded-r-none border-0 border-r !border-[#DADDE1] h-[44px]"
            min={0}
          />
          <Input
            type="number"
            placeholder="To"
            value={maxMileage}
            onChange={(e) =>
              dispatch(setFilters({ maxMileage: e.target.value }))
            }
            className="w-[160px] rounded-l-none h-[44px]"
            min={0}
          />
        </div>
      </div>

      <Button type="submit" className="ml-auto min-w-[100px]">
        Search
      </Button>
    </form>
  );
};

export default FiltersForm;
