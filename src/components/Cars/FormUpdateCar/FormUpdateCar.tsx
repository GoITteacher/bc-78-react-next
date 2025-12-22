import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewCar } from "../../../types/car";
import css from "./FormUpdateCar.module.css";
import { updateCar } from "../../../services/carsService";

type UpdateCar = NewCar & { id: string };

const FormUpdateCar = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["updateCar"],
    mutationFn: (updateInfo: UpdateCar) => {
      const { id, ...info } = updateInfo;
      return updateCar(id, info);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCars"] });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const updateInfo: UpdateCar = {
      id: formData.get("id") as string,
      model: formData.get("model") as string,
      color: formData.get("color") as string,
      year: Number(formData.get("year")),
      price: Number(formData.get("price")),
      speed: Number(formData.get("speed")),
    };

    mutate(updateInfo);
  };

  return (
    <form className={css["update-form"]} action={handleSubmit}>
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="speed" placeholder="speed" />
      <input type="color" name="color" placeholder="color" />
      <button type="submit">Оновити авто</button>
    </form>
  );
};

export default FormUpdateCar;
