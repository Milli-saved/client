import React, { useState } from "react";
// import EmployeeForm from "./EmployeeForm";
// import PageHeader from "../../components/pageHeader";
import {
  AddCircleOutlined,
  CloseOutlined,
  EditOutlined,
  PeopleOutlineTwoTone,
  Search,
} from "@material-ui/icons";
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import useTable from "../../components/control/useTable";
//import * as EmployeeService from "../../Services/EmployeeService";
//import InputControl from "../../components/control/InputControl";
//import ButtonControl from "../../components/control/ButtonControl";
//import Popup from "../../components/PopUp";
//import ActionButton from "../../components/control/ActionButton";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "80px",
  },
}));

const headCells = [
  { id: "id", label: "id" },
  { id: "userName", label: "Username" },
  { id: "role", label: "Role" },
  { id: "email", label: "Email" },
  { id: "status", label: "Status", disableSorting: true },
];

const Employees = () => {
  const classes = useStyle();

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setopenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  //   const handleSearch = (e) => {
  //     let target = e.target;
  //     setFilterFn({
  //       fn: (items) => {
  //         if (target.value === "") return items;
  //         else
  //           return items.filter((x) =>
  //             x.fullName.toLowerCase().includes(target.value)
  //           );
  //       },
  //     });
  //   };

  //   const addOrEdit = (employee, resetForm) => {
  //     EmployeeService.insertEmployee(employee);
  //     resetForm();
  //     setopenPopup(false);
  //     setRecords(EmployeeService.getAllEmployees());
  //   };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setopenPopup(true);
  };

  return (
    <div>
      {/* <PageHeader
        title="New Trader"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      /> */}
      <Paper className={classes.pageContent}>
        {/* <InputControl
          className={classes.searchInput}
          label="Search"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <ButtonControl
          text="Add new"
          variant="outlined"
          startIcon={<AddCircleOutlined />}
          className={classes.newButton}
          onClick={() => setopenPopup(true)}
        /> */}
        <TblContainer>
          <TblHead />
          <TableBody>
            {/* {console.log("this is table", records)} */}
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.status}</TableCell>
                {/* <TableCell>
                  <ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined fontSize="small" />
                  </ActionButton>
                  <ActionButton color="secondary">
                    <CloseOutlined fontSize="small" />
                  </ActionButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      {/* <Popup
        title="Employee Form"
        openPopup={openPopup}
        setopenPopup={setopenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup> */}
    </div>
  );
};

export default Employees;
