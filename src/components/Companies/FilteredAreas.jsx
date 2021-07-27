/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { getAllAditionalData } from "../../store/aditionalData/actions";
import { getAllCompanies } from "./CompaniesData";


const FilteredAreas = ({ values, setValues }) => {
        

    const [selectedArea, setSelectedArea] = useState('')
    const [companies, setCompanies] = useState([])

    const { areas } = useSelector((state) => state.aditionalData);

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAditionalData());
  }, [dispatch]);


  const handleInputChange = (e) => {
      
    const { value, name } = e.target;
    setSelectedArea(value)
    getAllCompanies()
    .then((data)=> {
      setValues(data)
      values = data
    })
    .then((data)=> {
        const filtered = companies.filter((company) => {
            return (
                companies.area
            )
        })
        setValues(filtered)
    })
  };

  return (

    <>
      <FormControl 
      variant="outlined"
      className='optionControl'
      style={
          { width: 150, marginRight: 255, marginTop: 25 }}>
        <InputLabel id="demo-simple-select-outlined-label">
          Area
        </InputLabel>
        <Select
          name="area"
          label="Area"
          value={selectedArea}
          onChange={(e) => handleInputChange(e)} 
        >
            {areas && areas.map((area) => {
                const { name, id } = area
                return <MenuItem value={name}>{name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </>
  );
};

export default FilteredAreas;
 */