import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .required("Введіть будь ласка ваше імя")
    .min(3, "Мінімальна довжине - 3")
    .max(15, "Ого яке імя. Треба трохи коротше"),
  email: Yup.string().required().email(),
  delivery: Yup.string(),
  deliveryTime: Yup.string(),
  message: Yup.string(),
});

interface FormDataValues {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  message: string;
}

const formDataValues: FormDataValues = {
  username: "",
  email: "",
  delivery: "pickup",
  deliveryTime: "morning",
  message: "",
};

const sleep = (delay = 1000) => new Promise((res) => setTimeout(res, delay));

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = async (
    orderInfo: FormDataValues,
    actions: FormikHelpers<FormDataValues>
  ) => {
    console.log(orderInfo);
    console.log(actions);

    await sleep(3000);

    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={OrderSchema}
      initialValues={formDataValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, resetForm, ...props }) => {
        console.log(props);

        return (
          <Form className={css.form}>
            {isSubmitting && <p>Loading ...</p>}

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field
                id={`${fieldId}-username`}
                type="text"
                name="username"
                className={css.input}
              />

              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field
                id={`${fieldId}-email`}
                type="email"
                name="email"
                className={css.input}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              id={`${fieldId}-deliveryTime`}
              as="select"
              name="deliveryTime"
              className={css.input}
            >
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <label htmlFor={`${fieldId}-message`} className={css.label}>
              Additional message
            </label>

            <Field
              id={`${fieldId}-message`}
              as="textarea"
              name="message"
              rows={4}
              className={css.textarea}
            ></Field>

            <div>
              <ErrorMessage
                name="username"
                component="div"
                className={css.error}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className={css.button}
            >
              {isSubmitting ? "Loading ..." : "Place order"}
            </button>

            <button onClick={() => resetForm()}>Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}
