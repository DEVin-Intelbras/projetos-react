import { useRef } from "react";
import { Paper, ButtonGroup, Button, Form } from "../../components";
import styles from "./AddCustomer.module.css";

const formulario = {};

export const AddCustomer = () => {
  const nameRef = useRef();

  const handleSubmit = () => {
    nameRef.current.focus();
    console.log(nameRef.current);
    // console.log(formulario);
  };
  const handleReset = () => {};

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    formulario[event.target.name] = event.target.value;
  };

  return (
    <div className={styles.container}>
      <h2>New customer</h2>
      <Paper>
        <Form>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" id="name" name="name" />
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
            <input type="password" id="password" name="password" />
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
