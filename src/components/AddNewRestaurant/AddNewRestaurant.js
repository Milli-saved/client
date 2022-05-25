import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import InputControl from "../controls/inputControl";
import { Form } from "../controls/useForm";
import ButtonControl from "../controls/ButtonControl";

const intitalResData = {
  restaurantName: "",
  restaurantLocation: "",
  something: "",
  otherSomething: "",
};

export default function AddNewRestaurant() {
  const [restaurant, setRestaurant] = useState(intitalResData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  return (
    <div>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <InputControl
              name="restaurantName"
              label="Restaurant Name"
              onChange={handleInputChange}
            />
            <InputControl
              name="restaurantLocation"
              label="Restaurant Location"
              onChange={handleInputChange}
            />
            <InputControl
              name="something"
              label="Some thing"
              onChange={handleInputChange}
            />
            <InputControl
              name="otherSomething"
              label="Other something"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonControl size="medium" text="Add" color="primary" />
            <ButtonControl size="mediu  m" text="Discard" color="default" />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
