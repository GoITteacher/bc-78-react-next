import { useQuery } from "@tanstack/react-query";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { getCars } from "../../../services/carsService";

const CarList = () => {
  const { data } = useQuery({
    queryKey: ["getCars"],
    queryFn: () => getCars(),
  });

  const cars = data || [];

  return (
    <ul className={css["car-list"]}>
      {cars.map((item) => {
        return <CarItem key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default CarList;
