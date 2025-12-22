import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../../../types/car";
import css from "./CarItem.module.css";
import { Flex } from "antd";
import { deleteCar, sellCar } from "../../../../services/carsService";

const CarItem = ({ data }: { data: Car }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ["deleteCar"],
    mutationFn: (id: string) => deleteCar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCars"] });
    },
  });

  const sellMutation = useMutation({
    mutationKey: ["deleteCar"],
    mutationFn: (id: string) => sellCar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCars"] });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(data.id);
  };

  const handleSellClick = () => {
    sellMutation.mutate(data.id);
  };

  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>{data.id}</p>
        <p>{data.model}</p>
        <p>{data.price}</p>
        <p>{data.year}</p>
        <p>{data.speed}</p>
        <p>{data.color}</p>
      </Flex>
      <Flex gap="small">
        {data.onSale && (
          <button className={css["sell-btn"]} onClick={handleSellClick}>
            Продати
          </button>
        )}
        <button className={css["remove-btn"]} onClick={handleDelete}>
          Видалити
        </button>
      </Flex>
    </li>
  );
};

export default CarItem;
