import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs, getJobsSearch } from '../../store/jobs/jobs'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const FilteredArea = ({
  values,
  selectedValue,
  setValues,
  title,
  name,
  handleAreaChange,
}) => {
  const dispatch = useDispatch()

  return (
    <>
      <FormControl
        variant='outlined'
        className='optionControl'
        style={{ width: 150 }}
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
              const { name, id } = item
              return <MenuItem value={name}>{name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </>
  )
}

export default FilteredArea
