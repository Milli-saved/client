import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Form } from "../controls/useForm";
import InputControl from "../controls/inputControl";
import RadioGroupControl from "../controls/RadioGroupControl";
import SelectControl from "../controls/SelectControl";
import ButtonControl from "../controls/ButtonControl";
import CheckBox from "../controls/CheckBox";
import { useDispatch } from "react-redux";
import { addNewWorkerAsync } from "../../store/reducer/workerReducer";

const gender = [
  { id: "male", title: "male" },
  { id: "female", title: "female" },
];

const workerTypes = [
  { id: "gardner", title: "Gardner" },
  { id: "home service", title: "Home Service" },
  { id: "security", title: "Security" },
  { id: "laundary", title: "Laundary" },
];

const workingTImes = [
  { id: "permanent", title: "Permanent" },
  { id: "contractual", title: "Contractual" },
  { id: "temelalash", title: "Temelalash" },
];

const workerForm = {
  workerName: "",
  workerLocation: "",
  workerGender: "",
  workerType: "",
  workingTime: "",
  workersGuarentee: "",
  workerVerify: false,
  agentId: null,
  // workerImage: "",
};

function AddWorker(props) {
  const { userId } = props;

  const dispatch = useDispatch();

  const [worker, setWorker] = useState(workerForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorker({
      ...worker,
      [name]: value,
    });
  };

  // const workerImageHandler = (e) => {
  //   setWorker({
  //     ...worker,
  //     workerImage: e.target.files[0],
  //   });
  // };
  // console.log("this is the id of the agent", userId);
  // if (userId) {
  //   setWorker({
  //     ...worker,
  //     agentId: userId,
  //   });
  //   return;
  // }

  useEffect(() => {
    console.log("here we set the agentId", userId);
    setWorker({
      ...worker,
      agentId: userId,
    });
  }, []);

  const formSubmitHandler = () => {
    // console.log(worker);
    dispatch(addNewWorkerAsync({ worker }));
  };
  const resetFormHandler = () => {
    setWorker({
      ...worker,
      workerName: "",
      workerLocation: "",
      workerGender: "",
      workerType: "",
      workingTime: "",
      // workerImage: null,
      workersGuarentee: "",
      workerVerify: false,
      agentId: null,
    });
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <InputControl
            name="workerName"
            value={worker.workerName}
            label="Worker Name"
            onChange={handleInputChange}
          />
          <InputControl
            name="workerLocation"
            value={worker.workerLocation}
            label="Worker Location"
            onChange={handleInputChange}
          />
          <RadioGroupControl
            name="workerGender"
            label="Gender"
            onChange={handleInputChange}
            items={gender}
          />
          <SelectControl
            label="Worker Type"
            name="workerType"
            value={worker.workerType}
            onChange={handleInputChange}
            options={workerTypes}
          />
        </Grid>
        <Grid item xs={6}>
          {/* <div style={{ marginLeft: "20px" }}>
            <p>Select worker Image</p>
            <img
              src={worker.workerImage}
              alt="no pic selected."
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <InputControl
            name="workerImage"
            type="file"
            onChange={(e) => workerImageHandler(e)}
            value={worker.workerImage}
          /> */}
          <SelectControl
            label="Working Time"
            name="workingTime"
            value={worker.workingTime}
            onChange={handleInputChange}
            options={workingTImes}
          />
          <InputControl
            name="workersGuarentee"
            value={worker.workersGuarentee}
            onChange={handleInputChange}
            label="Guarentee"
          />
          <CheckBox
            name="workerVerify"
            label="By clicking this box you agree to add this worker to the system."
            value={worker.workerVerify}
            onChange={handleInputChange}
          />
          <div>
            <ButtonControl
              sie="medium"
              text="Submit"
              onClick={formSubmitHandler}
            />
            <ButtonControl
              size="medium"
              text="Reset"
              color="default"
              onClick={resetFormHandler}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default AddWorker;
