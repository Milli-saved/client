import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Form } from "../controls/useForm";
import InputControl from "../controls/inputControl";
import ButtonControl from "../controls/ButtonControl";

const initialEmail = {
  email: "",
};

export default function ForgotPassword() {
  const [values, setValue] = useState(initialEmail);

  const handleInputChange = (e) => {
    const email = e.target;
    setValue({
      ...values,
      email,
    });
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={12}>
          <InputControl
            name="email"
            value={values.email}
            label="Email"
            onChange={handleInputChange}
          />

          <ButtonControl
            size="medium"
            text="Submit"
            type="button"
            style={{ display: "inline-block", marginTop: "20px" }}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
