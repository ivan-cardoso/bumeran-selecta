import React from "react";
import { useState } from "react";
import axios from "axios";
import { getAllRecruiters } from "./recruiterTableData";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecruiterSearch } from "../../store/recruiter/actions";
import FilteredArea from "../../containers/Filtros/FilteredArea";
import { TiDelete } from "react-icons/ti";

function InputSearch({ setRecruiters }) {
  const dispatch = useDispatch();
  const { areas } = useSelector((state) => state.aditionalData);
  const { seniorities } = useSelector((state) => state.aditionalData);

  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");

  const [values, setValues] = useState({
    search: "",
    area1: "",
    seniority1: "",
  });

  const handleInputChange = async (e) => {
    const { value, name } = e.target;
    if (name === "area1") setSelectedArea(value);
    if (name === "seniority1") setSelectedSeniority(value);

    await setValues({ ...values, [name]: value });
    const inputValues = { ...values, [name]: value };
    await dispatch(getRecruiterSearch(inputValues)).then((recruiters) =>
      setRecruiters(recruiters.payload)
    );
  };

  const clearFilter = (stateChanged, name) => {
    stateChanged("");
    setValues({ ...values, [name]: "" });
    const inputValues = { ...values, [name]: "" };
    dispatch(getRecruiterSearch(inputValues)).then((recruiters) =>
      setRecruiters(recruiters.payload)
    );
  };

  return (
    <>
      <div>
        <div className={styles.inputSearchContainer}>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ marginRight: "15px" }}
          >
            <input
              onChange={(e) => handleInputChange(e)}
              className={styles.inputSearch}
              type="text"
              name="search"
              placeholder="Buscar por nombre..."
            />
          </form>

          <FilteredArea
            selectedValue={selectedArea}
            name="area1"
            title="Area Favorita"
            values={areas}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />

          <FilteredArea
            selectedValue={selectedSeniority}
            name="seniority1"
            title="Seniority"
            values={seniorities}
            setValues={setValues}
            handleAreaChange={handleInputChange}
          />
        </div>
        <div className={styles.filterOptionContainer}>
          {selectedArea && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setSelectedArea, "area1")}
            >
              {selectedArea} <TiDelete className={styles.deleteicon} />
            </p>
          )}
          {selectedSeniority && (
            <p
              className={styles.filterOption}
              onClick={() => clearFilter(setSelectedSeniority, "seniority1")}
            >
              {selectedSeniority} <TiDelete className={styles.deleteicon} />
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default InputSearch;
