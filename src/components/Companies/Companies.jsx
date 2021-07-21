import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanies,
  getCompaniesSearch,
} from "../../store/companies/companies";
import useStyles from "./style";
import { Paper } from "@material-ui/core";
import CompaniesTable from "./CompaniesTable";
import InputSearch from "./InputSearch";
import AddCompany from "./AddCompany";

export default function Companies() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  const classes = useStyles();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(getCompaniesSearch(value));
  };

  React.useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <>
      <AddCompany />
      <InputSearch handleChange={handleChange} />
      <Paper className={classes.pageContent}>
        {companies.length > 0 ? (
          <CompaniesTable companies={companies} />
        ) : (
          <h1>No hay resultados...</h1>
        )}
        {/* <button onClick={() => history.goBack()}>Go back</button> */}
      </Paper>
    </>
  );
}
