import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Paper, ButtonGroup, Button, Form } from "../../components";
import styles from "./AddCustomer.module.css";

export const AddCustomer = () => {
  const intervalId = useRef();
  const [form, setForm] = useState({});
  const error = {};

  const handleSubmit = () => {};
  const handleReset = () => {};
  const handleChange = (event) => {
    setForm((f) => {
      return { ...f, [event.target.name]: event.target.value };
    });
  };

  const funSalvarForm = () => {
    localStorage.setItem("mikaform", JSON.stringify(form));
  };

  useEffect(() => {
    intervalId.current = setInterval(funSalvarForm, 1000);
    return () => {
      clearInterval();
    };
  });

  return (
    <div className={styles.container}>
      <h2>New customer</h2>
      <Paper>
        <Form>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" />
            {!!error.name && <span>{error.name}</span>}
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">E-mail</label>
            <input onChange={(e) => handleChange(e)} type="text" id="email" name="email" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="age">Age</label>
            <input onChange={handleChange} type="age" min="0" step="1" id="age" name="age" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id="password" name="password" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="passwordConfirmAgain">One more time... confirm password</label>
            <input
              onChange={handleChange}
              type="password"
              id="passwordConfirmAgain"
              name="passwordConfirmAgain"
            />
          </div>
          <ButtonGroup>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset} color="secondary">
              Clear
            </Button>
          </ButtonGroup>
        </Form>
      </Paper>
    </div>
  );
};
