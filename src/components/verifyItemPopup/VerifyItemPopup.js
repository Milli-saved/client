import { Grid } from "@material-ui/core";
import React from "react";
import InputControl from "../controls/inputControl";
import { Form } from "../controls/useForm";
import ButtonControl from "../controls/ButtonControl";
import { useDispatch } from "react-redux";
import { verifyProduct } from "../../store/reducer/productReducer";

export default function VerifyItemPopup(props) {
  const dispatch = useDispatch();
  const { currentRow, close, elementId } = props;
  // console.log("this is the verify item popup", currentRow);

  const handleVerifyProduct = (id) => {
    elementId(id);
    close(false);
    dispatch(verifyProduct({ id }));
  };

  return (
    <div>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <InputControl
              name="productname"
              value={currentRow.productTitle}
              label="product Name"
              disabled
            />
            <InputControl
              name="productname"
              value={currentRow.productDescription}
              label="product Name"
              disabled
            />
            <InputControl
              name="productname"
              value={currentRow.orignalPrice}
              label="product Name"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <InputControl
              name="provider"
              value={currentRow.productCondition}
              label="Provider"
              disabled
            />
            <InputControl
              name="productname"
              value={currentRow.name}
              label="product Name"
              disabled
            />
            <div>
              <ButtonControl
                onClick={() => handleVerifyProduct(currentRow.productId)}
                size="medium"
                text="Verify"
                color="primary"
              />
              <ButtonControl size="medium" text="Delete" color="default" />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
