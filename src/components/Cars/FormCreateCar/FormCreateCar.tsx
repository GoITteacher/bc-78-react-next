import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./FormCreateCar.module.css";
import { createCar } from "../../../services/carsService";
import { NewCar } from "../../../types/car";

const FormCreateCar = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["createCar"],
    mutationFn: (data: NewCar) => createCar(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCars"] });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const carInfo: NewCar = {
      model: formData.get("model") as string,
      color: formData.get("color") as string,
      year: Number(formData.get("year")),
      price: Number(formData.get("price")),
      speed: Number(formData.get("speed")),
      onSale: true,
    };

    mutate(carInfo);
  };

  return (
    <form className={css["create-form"]} action={handleSubmit}>
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="speed" placeholder="speed" />
      <input type="color" name="color" placeholder="color" />
      <button type="submit">Додати Авто</button>
    </form>
  );
};

export default FormCreateCar;
