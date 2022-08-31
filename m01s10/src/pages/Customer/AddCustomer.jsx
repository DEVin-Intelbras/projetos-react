import { useForm } from "react-hook-form";

import { Paper, ButtonGroup, Button, Form } from "../../components";
import styles from "./AddCustomer.module.css";

const validationObject = {
  required: true,
};

export const AddCustomer = () => {
  const { register, handleSubmit } = useForm();
  const handleConfirmarForm = (valores) => {};

  return (
    <div className={styles.container}>
      <h2>New customer</h2>
      <Paper>
        <form onSubmit={handleSubmit(handleConfirmarForm)}>
          <div className={`${styles.fieldGroup}`}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" {...register("name", validationObject)} />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">E-mail</label>
            <input {...register("email", validationObject)} type="text" id="email" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="age">Age</label>
            <input {...register("age", validationObject)} type="number" min="0" step="1" id="age" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <input {...register("password", validationObject)} type="password" id="password" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              {...register("passwordConfirm", validationObject)}
              type="password"
              id="passwordConfirm"
            />
          </div>
          <ButtonGroup>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={() => {}} color="secondary">
              Clear
            </Button>
          </ButtonGroup>
        </form>
      </Paper>
    </div>
  );
};
