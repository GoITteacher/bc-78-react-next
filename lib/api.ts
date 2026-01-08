import axios from "axios";

export async function getIngridientById(id: string) {
  const res = await axios.get(
    `https://drinkify.b.goit.study/api/v1/ingredients/${id}`
  );

  return res.data;
}
