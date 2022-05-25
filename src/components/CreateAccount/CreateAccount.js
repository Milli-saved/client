import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import CheckBox from "../controls/CheckBox";
import ButtonControl from "../controls/ButtonControl";
import InputControl from "../controls/inputControl";
import RadioGroupControl from "../controls/RadioGroupControl";
import SelectControl from "../controls/SelectControl";
import { Form } from "../controls/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccountAsync } from "../../store/reducer/userReducer";
import Loader from "../Loader/Loader";

const genderI = [
  { id: "male", title: "male" },
  { id: "female", title: "female" },
];

const roleCollection = [
  // { id: "admin", title: "Admin" },
  { id: "organization", title: "Organization" },
  { id: "restaurant", title: "Restaurant" },
  { id: "user", title: "User" },
];

const initialUser = {
  name: "",
  email: "",
  password: "",
  phone: "",
  accountType: "",
  city: "",
  completeAddress: "",
  country: "",
  online: false,
  profileImage: null,
  state: "",
  agree: false,
};

function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoader, setIsLoader] = useState(false);

  const [userForm, setUserForm] = useState(initialUser);

  const initialState = useSelector((state) => state.user);

  const [retrivedData, setretrivedData] = useState(initialState);

  console.log(retrivedData);
  const handleImageInput = (file) => {
    console.log(file);
    setUserForm({
      ...userForm,
      profileImage: file,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const formSubmitHandler = () => {
    console.log(userForm);
    setIsLoader(true);
    dispatch(createAccountAsync({ userForm }));
  };
  const resetHandler = () => {
    setUserForm({
      name: "",
      email: "",
      password: "",
      phone: "",
      accountType: "",
      city: "",
      completeAddress: "",
      country: "",
      online: false,
      profileImage: null,
      state: "",
      agree: false,
    });
  };

  useEffect(() => {
    if (retrivedData.signedUp) {
      navigate("/home");
    } else {
      resetHandler();
      navigate("/");
    }
  }, [retrivedData]);

  useEffect(() => {
    if (retrivedData.signupError !== "") {
      setIsLoader(false);
    }
  }, [retrivedData.signupError]);

  return (
    <Form>
      {isLoader && <Loader />}
      <Grid container>
        <Grid item xs={6}>
          <InputControl
            name="name"
            value={userForm.name}
            label="Full Name"
            onChange={handleInputChange}
          />
          <InputControl
            name="email"
            value={userForm.email}
            label="Email"
            onChange={handleInputChange}
          />
          <InputControl
            name="password"
            value={userForm.password}
            label="Password"
            type="password"
            onChange={handleInputChange}
          />
          <InputControl
            name="phone"
            value={userForm.phone}
            label="Phone number"
            onChange={handleInputChange}
          />
          <InputControl
            name="city"
            value={userForm.city}
            label="City"
            onChange={handleInputChange}
          />
          <div style={{ marginLeft: "50px" }}>
            {/* <img
              style={{ width: "50px", height: "50px" }}
              src={
                typeof userForm.profileImage === "string"
                  ? userForm.profileImage
                  : URL.createObjectURL(userForm.profileImage)
              }
              alt="Select Profile"
            /> */}
          </div>
          <InputControl
            type="file"
            name="profileImage"
            onChange={(e) => handleImageInput(e.currentTarget.files[0])}
          />
        </Grid>
        <Grid item xs={6}>
          <InputControl
            name="completeAddress"
            value={userForm.completeAddress}
            label="Complete Address"
            onChange={handleInputChange}
          />
          <InputControl
            name="state"
            value={userForm.state}
            label="State"
            onChange={handleInputChange}
          />
          <InputControl
            name="country"
            value={userForm.country}
            label="Country"
            onChange={handleInputChange}
          />
          <RadioGroupControl
            name="gender"
            label="Gender"
            onChange={handleInputChange}
            items={genderI}
          />
          <SelectControl
            name="accountType"
            value={userForm.accountType}
            label="Account Type"
            onChange={handleInputChange}
            options={roleCollection}
          />
          <CheckBox
            name="agree"
            label="Agree to terms and policies?"
            value={userForm.agree}
            onChange={handleInputChange}
          />
          <div>
            <ButtonControl
              size="medium"
              text="Submit"
              onClick={formSubmitHandler}
            />
            <ButtonControl
              size="medium"
              text="Reset"
              color="default"
              onClick={resetHandler}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default CreateAccount;
