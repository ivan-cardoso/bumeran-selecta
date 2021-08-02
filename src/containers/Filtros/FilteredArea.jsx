import React from 'react'
//import { getAllJobs, getJobsSearch } from '../../store/jobs/jobs'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const FilteredArea = ({
  values,
  selectedValue,
  setValues,
  title,
  name,
  handleAreaChange,
}) => {
  
 
  return (
    <>
      <FormControl
        variant='outlined'
        className='optionControl'
        style={{ width: 150 , margin : "0 15px"}}
      >
        <InputLabel id='demo-simple-select-outlined-label'>{title}</InputLabel>
        <Select
          name={name}
          value={selectedValue}
          label={title}
          onChange={(e) => handleAreaChange(e)}
          style={{ height: '100%' }}
        >
          {values &&
            values.map((item) => {
              const { name } = item
              return (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
    </>
  )
}

export default FilteredArea
