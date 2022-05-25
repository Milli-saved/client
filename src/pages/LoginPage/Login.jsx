import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, Grid, Typography } from "@material-ui/core";
// import Alert from "@mui/material/Alert";
import { AlertDanger } from "../../components/Alert/Alert";

import Loader from "../../components/Loader/Loader";
import InputControl from "../../components/controls/inputControl";
import ActionButton from "../../components/controls/actionButtons";
import ButtonControl from "../../components/controls/ButtonControl";
import { Form } from "../../components/controls/useForm";
import Popup from "../../components/Popup/Popup";
import Popup1 from "../../components/Popup/Popup";
import { loginAsync } from "../../store/reducer/userReducer";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const initialData = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoader, setIsLoader] = useState(false);

  const { loggedIn, loginLoading, loginError, isloginError, user } =
    useSelector((state) => state.user);

  const [emailAndP, setEmailAndP] = useState(initialData);

  const [values, setValues] = useState(loggedIn, loginLoading, loginError);

  // if (loginError) {
  //   setIsLoader(false);
  // }

  // console.log(values);

  // modal for create and forgot password
  const [openPopupCA, setopenPopupCA] = useState(false);
  const [openPopupFP, setopenPopupFP] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEmailAndP({
      ...emailAndP,
      [name]: value,
    });
  };

  useEffect(() => {
    if (loggedIn) {
      switch (user.accountType) {
        case "admin":
          navigate("/home");
          break;
        case "agent":
          navigate("/agent");
          break;
        case "sells":
          navigate("/ecommerce");
          break;
        case "restaurant":
          navigate("/restaurant");
          break;
        case "user":
          navigate("/user");
          break;
        default:
          navigate("/blabla");
          break;
      }
    } else {
      setValues({
        ...values,
        loggedIn: false,
        loginLoading: false,
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loginError !== "") {
      setIsLoader(false);
    }
  }, [loginError]);

  let title = (
    <Typography
      variant="h4"
      color="primary"
      style={{ alignItems: "center", margin: "16px" }}
    >
      Login
    </Typography>
  );

  const handleSubmit = () => {
    console.log(values);
    setIsLoader(true);

    let info = {
      email: emailAndP.email,
      password: emailAndP.password,
    };
    dispatch(loginAsync({ info }));
  };

  // modals
  const openInPopup = () => {
    setopenPopupCA(true);
  };
  const openInPopupFP = () => {
    setopenPopupFP(true);
  };

  return (
    <div>
      {isLoader && <Loader />}
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Card variant="outlined" style={{ marginTop: "80px" }}>
              <CardHeader title={title} />
              <Form>
                {isloginError && (
                  <AlertDanger
                    notification={loginError}
                    style={{ marginLeft: "30px" }}
                  />
                )}
                <InputControl
                  onChange={onChangeHandler}
                  name="email"
                  label="Email"
                  value={emailAndP.email}
                />
                <InputControl
                  onChange={onChangeHandler}
                  name="password"
                  label="Password"
                  type="password"
                  value={emailAndP.password}
                />
                <div style={{ margin: "16px" }}>
                  <ButtonControl
                    size="medium"
                    text="Login"
                    onClick={handleSubmit}
                  />
                  <div style={{ flex: "right" }}>
                    <ActionButton
                      color="primary"
                      onClick={openInPopup}
                      size="small"
                    >
                      Create New Account
                    </ActionButton>
                    <ActionButton
                      color="secondary"
                      onClick={openInPopupFP}
                      size="small"
                    >
                      Forgot Password
                    </ActionButton>
                  </div>
                </div>
              </Form>
              <Popup
                title="Create New Account"
                openPopup={openPopupCA}
                setopenPopup={setopenPopupCA}
              >
                <CreateAccount />
              </Popup>
              <Popup1
                style={{ innerWidth: "75px" }}
                title="Forgot Password"
                openPopup={openPopupFP}
                setopenPopup={setopenPopupFP}
              >
                <p>
                  To recover you'r lost password, Please enter the email address
                  that you used to create you'r account.
                </p>
                <ForgotPassword
                  style={{ paddingLeft: "100px", paddingRight: "100px" }}
                />
              </Popup1>
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
