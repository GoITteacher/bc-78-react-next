import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";

interface SupportTicketValues {
  name: string;
  email: string;
  product: string;
  issue: string;
  urgency: string;
  message: string;
}

const initialValues: SupportTicketValues = {
  name: "",
  email: "",
  product: "",
  issue: "",
  urgency: "low",
  message: "",
};

export default function SupportTicketForm() {
  const handleSubmit = (
    info: SupportTicketValues,
    actions: FormikHelpers<SupportTicketValues>
  ) => {
    console.log("Info: ", info);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <h2>Запит у підтримку</h2>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Контакти</legend>
          <label className={css.label} htmlFor="support-name">
            Ім’я
          </label>
          <Field
            id="support-name"
            name="name"
            type="text"
            className={css.input}
            placeholder="Ваше ім’я"
          />

          <label className={css.label} htmlFor="support-email">
            Email
          </label>
          <Field
            id="support-email"
            name="email"
            type="email"
            className={css.input}
            placeholder="name@email.com"
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Деталі</legend>
          <label className={css.label} htmlFor="product">
            Продукт
          </label>
          <Field
            as="select"
            id="product"
            name="product"
            className={css.input}
            defaultValue=""
          >
            <option value="" disabled>
              Обери продукт
            </option>
            <option value="web">Веб-додаток</option>
            <option value="mobile">Мобільний застосунок</option>
            <option value="api">API / інтеграція</option>
          </Field>

          <label className={css.label} htmlFor="issue-type">
            Тип питання
          </label>
          <Field
            as="select"
            id="issue-type"
            name="issue"
            className={css.input}
            defaultValue=""
          >
            <option value="" disabled>
              Обери тип
            </option>
            <option value="bug">Баг</option>
            <option value="billing">Оплата</option>
            <option value="feature">Feature request</option>
            <option value="other">Інше</option>
          </Field>

          <p className={css.label}>Терміновість</p>
          <label className={css.option}>
            <Field type="radio" name="urgency" value="low" />
            Низька
          </label>
          <label className={css.option}>
            <Field type="radio" name="urgency" value="medium" />
            Середня
          </label>
          <label className={css.option}>
            <Field type="radio" name="urgency" value="high" />
            Висока
          </label>
        </fieldset>

        <label className={css.label} htmlFor="support-message">
          Опис проблеми
        </label>
        <Field
          as="textarea"
          id="support-message"
          name="message"
          rows={4}
          className={css.textarea}
          placeholder="Кроки відтворення, посилання, скриншоти"
        ></Field>

        <button type="submit" className={css.button}>
          Надіслати запит
        </button>
      </Form>
    </Formik>
  );
}
