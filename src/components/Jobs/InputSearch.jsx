import React, {useState} from "react";
import {useDispatch} from "react-redux"
import FilteredArea from "./FilteredArea"
import { getAllJobs, getJobsSearch } from "../../store/jobs/jobs";
import styles from "../RecruiterForm/index.module.css";


  export default function InputSearch() {
  const dispatch = useDispatch()
  
  const [values, setValues] = useState({search : "", areaId : null})
  const [areaSelected, setAreaSelected] = useState()

  const handleInputChange = async (e) => {
    const { value, name } = e.target;    
    await setValues({...values, [name] : value})
    const inputValues = {...values, [name] : value}
    await dispatch(getJobsSearch(inputValues))
  };

  return (
    <div className={styles.inputSearchContainer}>
      <form  onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => handleInputChange(e)}
          className={styles.inputSearch}
          type="text"
          name="search"
          placeholder="Buscar por nombre..."
        />
      </form>
      <FilteredArea 
      values={values} 
      areaSelected={areaSelected} 
      setAreaSelected={setAreaSelected} 
      setValues={setValues}
      handleAreaChange={handleInputChange}
      />
    </div>
  );
}
