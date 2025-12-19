import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./OrderForm.module.css";
import { getFormatDate } from "../helpers/converter";
import * as Yup from "yup";

const TravelSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  destination: Yup.string(),
  start: Yup.string().matches(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
  end: Yup.string(),
  travelers: Yup.number(),
  budget: Yup.string(),
  notes: Yup.string(),
});

interface TravelQuoteValues {
  name: string;
  email: string;
  destination: string;
  start: string;
  end: string;
  travelers: string;
  budget: string;
  notes: string;
}
const initialValues: TravelQuoteValues = {
  name: "",
  email: "",
  destination: "",
  start: getFormatDate(new Date()),
  end: getFormatDate(new Date()),
  travelers: "",
  budget: "",
  notes: "",
};

export default function TravelQuoteForm() {
  const handleSubmit = (data: TravelQuoteValues) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TravelSchema}
    >
      <Form className={css.form}>
        <h2>Запит на подорож</h2>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Клієнт</legend>
          <label className={css.label} htmlFor="travel-name">
            Повне ім’я
          </label>
          <Field
            id="travel-name"
            name="name"
            type="text"
            className={css.input}
            placeholder="Ім’я Прізвище"
          />

          <label className={css.label} htmlFor="travel-email">
            Email
          </label>
          <Field
            id="travel-email"
            name="email"
            type="email"
            className={css.input}
            placeholder="name@email.com"
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Маршрут</legend>
          <label className={css.label} htmlFor="destination">
            Напрямок / місто
          </label>
          <Field
            id="destination"
            name="destination"
            type="text"
            className={css.input}
            placeholder="Напр., Барселона"
          />

          <label className={css.label} htmlFor="start-date">
            Дата старту
          </label>
          <ErrorMessage name="start" />
          <Field
            id="start-date"
            name="start"
            type="date"
            className={css.input}
          />

          <label className={css.label} htmlFor="end-date">
            Дата повернення
          </label>
          <ErrorMessage name="end" />
          <Field id="end-date" name="end" type="date" className={css.input} />

          <label className={css.label} htmlFor="travelers">
            Кількість мандрівників
          </label>
          <Field
            id="travelers"
            name="travelers"
            type="number"
            min="1"
            className={css.input}
            placeholder="2"
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Побажання</legend>
          <label className={css.label} htmlFor="budget">
            Бюджет
          </label>
          <Field
            as="select"
            id="budget"
            name="budget"
            className={css.input}
            defaultValue=""
          >
            <option value="" disabled>
              Обери діапазон
            </option>
            <option value="economy">Економ</option>
            <option value="comfort">Комфорт</option>
            <option value="lux">Lux</option>
          </Field>

          <label className={css.label} htmlFor="travel-notes">
            Коментарі
          </label>
          <Field
            as="textarea"
            id="travel-notes"
            name="notes"
            rows={4}
            className={css.textarea}
            placeholder="Стиль подорожі, готелі, активності"
          ></Field>
        </fieldset>

        <button type="submit" className={css.button}>
          Отримати пропозицію
        </button>
      </Form>
    </Formik>
  );
}
