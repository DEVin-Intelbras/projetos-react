import { Paper, ButtonGroup, Button } from "../../components";
import styles from "./AddCustomer.module.css";

export const AddCustomer = () => {
  const handleSubmit = () => {};
  const handleReset = () => {};

  return (
    <div className={styles.container}>
      <h2>New customer</h2>
      <Paper>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.fieldGroup}>
            <label htmlFor="">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="">E-mail</label>
            <input type="text" id="name" name="email" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="">Age</label>
            <input type="age" min="0" step="1" id="name" name="age" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="">Password</label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" />
          </div>
          <ButtonGroup>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset} color="secondary">
              Clear
            </Button>
          </ButtonGroup>
        </form>
      </Paper>
    </div>
  );
};
