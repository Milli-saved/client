import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Topbar from "../../components/Topbar/Topbar";
import FeaturedInfo from "../../components/FeaturedInfoForAgent/FeaturedInformation";
import Popup from "../../components/Popup/Popup";
import AddWorker from "../../components/AddWorker/AddWorker";
import { useSelector } from "react-redux";

export default function Agent() {
  const { user } = useSelector((state) => state.user);

  const [openPopup, setOpenPopup] = useState(false);
  const [id, setId] = useState(user.userId);

  const openPopUpHandler = () => {
    setOpenPopup(true);
  };

  const columns = [
    { field: "workerName", headerName: "Worker Full Name", width: 250 },
    { field: "workerLocation", headerName: "Location", width: 200 },
    { field: "workerType", headerName: "Description", width: 200 },
    { field: "someThing", headerName: "Some Thing", width: 200 },
    { field: "otherSomething", headerName: "OtherSome Thing", width: 200 },
  ];

  const AllWorkers = [
    {
      id: 1,
      workerName: "Henock Meteke",
      workerLocation: "Werabe",
      workerType: "Gardner",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 2,
      workerName: "Biruk Deneke",
      workerLocation: "Shashemene",
      workerType: "Home Service",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 3,
      workerName: "Israel Degefu",
      workerLocation: "Dila",
      workerType: "Guard",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 4,
      workerName: "Kaleab Zufan",
      workerLocation: "Weliso",
      workerType: "Body Guard",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 5,
      workerName: "Jibril Hussen",
      workerLocation: "Weliso",
      workerType: "Home Service",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 6,
      workerName: "Hussen Ismael",
      workerLocation: "Kombolcha",
      workerType: "Reporter",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
    {
      id: 7,
      workerName: "Ibrahim Gedi",
      workerLocation: "Addis Ababa",
      workerType: "Gardner",
      someThing: "Some Thing",
      otherSomething: "Other Some Thing",
    },
  ];

  return (
    <div>
      <Topbar />
      <div style={{ margin: "50px" }}>
        <FeaturedInfo />
        <Grid container style={{ margin: "30px" }}>
          <Grid item xs={4}>
            <Button
              onClick={openPopUpHandler}
              color="primary"
              size="large"
              variant="outlined"
            >
              Add new Worker
            </Button>
          </Grid>
        </Grid>
        {/* <DataGrid
          autoPageSize="true"
          style={{ margin: "40px", maxHeight: "700px" }}
          rowsPerPageOptions={[4]}
          pageSize={4}
          rows={AllWorkers}
          columns={columns}
        /> */}
        <Popup
          title="Add new Worker"
          openPopup={openPopup}
          setopenPopup={setOpenPopup}
        >
          <AddWorker userId="7HzXOEpwRwfaKP9JuQgnbr65iw92" />
        </Popup>
      </div>
    </div>
  );
}
