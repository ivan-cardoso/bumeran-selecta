import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import AddCompaniesForm from "./AddCompaniesForm";
import styles from "../RecruiterForm/index.module.css";
import { useState } from "react";
import { createCompany, getCompanies } from "../../store/companies/companies";
import { message } from "antd";

export default function AddCompany({ values, setValues, handleInputChange }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.stateid !== null &&
      values.contactName !== null &&
      values.description !== null &&
      values.email !== null &&
      values.img !== null &&
      values.areaId !== null &&
      values.name !== null
    ) {
      dispatch(createCompany(values)).then((value) => {
        if (value.payload) {
          message.success("Company added");
          dispatch(getCompanies());
          //setValues(initialFormValues);
        } else {
          message.warning("Email ya existente");
        }
      });
    } else {
      message.warning("Complete los campos");
    }
  };

  const toggleAdd = () => {
    document.getElementById("CompaniesFormAdd").style.display =
      document.getElementById("CompaniesFormAdd").style.display === "none"
        ? "block"
        : "none";
  };

  return (
    <Paper className={classes.pageContent}>
      <Grid item xs={6}></Grid>

      <Button
        onClick={toggleAdd}
        variant="contained"
        color="primary"
        label="Add"
        className={styles.addButton}
      >
        Add new company
      </Button>

      <div style={{ display: "none" }} id="CompaniesFormAdd">
        <AddCompaniesForm
          handleSubmit={handleSubmit}
          values={values}
          handleInputChange={handleInputChange}
          setValues={setValues}
        />
      </div>
    </Paper>
  );
}
